/* Run with node tests/mb800-content.test.cjs. No browser or network required. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const context = vm.createContext({});
vm.runInContext(read('mb800-questions.js'), context);
const bank = context.mb800Questions;
const sets = context.MB800_QUESTION_SETS;
const coverage = JSON.parse(read('mb800-coverage.json'));
assert.equal(bank.length, coverage.questionCount);
assert.equal(new Set(bank.map(q => q.id)).size, bank.length);
const counts = { TWO: 2, THREE: 3, FOUR: 4 };
const normalize = text => text.toLowerCase().replace(/[^a-z0-9]/g, '');
assert.equal(new Set(bank.map(q => normalize(q.text))).size, bank.length, 'Duplicate prompts');
for (const q of bank) {
  assert.ok(Number.isInteger(q.id), 'Numeric ID');
  assert.ok(q.text.length <= 420, 'Overlong prompt ' + q.id);
  assert.ok(q.text.includes('?'), 'Question must ask something: ' + q.id);
  assert.ok(q.choices.length >= 4, 'Enough alternatives: ' + q.id);
  assert.equal(new Set(q.choices.map(normalize)).size, q.choices.length, 'Distinct options: ' + q.id);
  for (const text of [q.text, ...q.choices]) {
    assert.equal(text, text.trim(), 'Whitespace: ' + q.id);
    assert.match(text, /^[A-Z0-9]/, 'Uppercase start: ' + q.id);
    assert.ok(!/[|\uFFFD]|\b(?:undefined|TODO)\b|Correct answer:|Otherwise, select No\./i.test(text), 'Artifact or answer leak: ' + q.id);
  }
  assert.equal(new Set(q.correct).size, q.correct.length, 'Duplicate answer key: ' + q.id);
  q.correct.forEach(i => assert.ok(Number.isInteger(i) && i >= 0 && i < q.choices.length, 'Valid answer index: ' + q.id));
  assert.ok(q.correct.length < q.choices.length, 'At least one distractor: ' + q.id);
  const requested = q.text.match(/Select (TWO|THREE|FOUR)\./);
  if (q.type === 'multiple') {
    assert.ok(q.correct.length >= 2 && requested, 'Explicit multiple count: ' + q.id);
    assert.equal(q.correct.length, counts[requested[1]], 'Requested answer count: ' + q.id);
  } else {
    assert.equal(q.type, 'single');
    assert.equal(q.correct.length, 1);
    assert.ok(!requested, 'Single question with multiple prompt: ' + q.id);
  }
  assert.equal(q.reviewedOn, coverage.reviewedOn);
  assert.equal(q.originalPractice, true);
  assert.ok(q.explanation.length > 80 && q.sources.length > 0, 'Explanation and source: ' + q.id);
  q.sources.forEach(source => {
    assert.equal(new URL(source).hostname, 'learn.microsoft.com');
    assert.ok(q.explanation.includes('href="' + source + '"'), 'Source shown after answer: ' + q.id);
  });
}
assert.equal(sets.length, 4);
for (const domain of coverage.domains) {
  const set = sets.find(s => s.key === domain.key);
  assert.equal(set.data.length, domain.count, domain.key);
  assert.ok(set.description.startsWith(domain.count + ' '), 'Visible set count');
  const share = 100 * domain.count / bank.length;
  assert.ok(share >= domain.weightMin && share <= domain.weightMax, 'Domain weighting: ' + domain.key);
  assert.ok(set.data.every(q => q.domain === domain.key));
}
assert.equal(new Set(sets.flatMap(s => s.data.map(q => q.id))).size, bank.length);
assert.equal(coverage.areas.length, 22);
const mapped = coverage.areas.flatMap(area => {
  assert.ok(area.ids.length > 0, 'Uncovered area');
  area.ids.forEach(id => assert.equal(bank.find(q => q.id === id)?.domain, area.domain, 'Area mapping: ' + id));
  return area.ids;
});
assert.equal(new Set(mapped).size, bank.length, 'Every question has a coverage mapping');
// Original answer indices and set memberships stay stable for saved attempts.
const originalKeys = [[0],[1],[1,2],[3],[0],[1],[2],[3],[0],[1],[2],[3],[0],[1,2],[2,3],[1],[2],[3],[0],[1,2],[2],[3],[0],[1],[2],[3],[0],[1],[2],[3],[0],[1,2],[3],[0],[1],[2],[3],[0],[1,2],[2],[3],[0],[1,2],[2],[3],[0],[1],[2],[3],[0]];
originalKeys.forEach((key, i) => {
  const q = bank.find(q => q.id === 800001 + i);
  assert.deepEqual(Array.from(q.correct), key, 'Original answer positions: ' + q.id);
  assert.equal(q.domain, i < 12 ? 'setup' : i < 28 ? 'financials' : i < 34 ? 'sales_purchasing' : 'operations');
});
assert.match(read('index.html'), /4 quiz sets · 125 questions/);
assert.match(read('mb800.html'), /125 original practice questions/);
assert.match(read('user-guide.html'), /4 topic sets with 125 original practice questions/);
assert.match(read('index.html'), /APP_VERSION = "1\.1\.1"/);
assert.match(read('mb800.html'), /mb800-questions\.js\?v=1\.1\.1/);
console.log('PASS: 125 questions; 22 mapped areas; source metadata, cardinality, wording checks, counts, weighting and original saved-answer compatibility.');
