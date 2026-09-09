# MB-800 Beta content maintenance

This bank contains original ArquiQuiz practice material, not official or recalled exam questions. English matches the existing quiz banks. The baseline is the [Microsoft MB-800 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/mb-800), skills measured from June 30, 2026; the bank was reviewed on September 9, 2026. Release 1.1.1 reviews the original 50 questions and adds 75, for a total of 125.

| Domain | Questions | Bank share | Published exam weighting |
| --- | ---: | ---: | ---: |
| Set up Business Central | 28 | 22.4% | 20–25% |
| Configure financials | 40 | 32.0% | 30–35% |
| Configure sales and purchasing | 14 | 11.2% | 10–15% |
| Perform Business Central operations | 43 | 34.4% | 30–35% |

All 22 skill areas now have representative scenarios. This means an area is assessed, not that every sub-bullet, field, localization, or possible scenario has its own question. There are no standalone case studies in this release. Random draws use the shared engine and do not guarantee domain quotas in each attempt. A practice score is not a certification-readiness guarantee.

## Coverage map

The machine-checkable [coverage map](mb800-coverage.json) assigns every question to a domain and skill area. IDs below omit the common `800` prefix; for example, `053` means `800053`. Question sources appear in `mb800-questions.js` and in the learner's answer explanations.

| Area | Scenarios assessed | IDs |
| --- | --- | --- |
| Company implementation | Initial import, company template, worksheet, posting migrated balances, bank opening reconciliation | 001, 051–054 |
| Access and audit | Profiles versus permissions, group access, record restrictions, licensed users, tailored sets, protected audit logging, selective change logging | 002–004, 055–058 |
| Shared application setup | Scheduled execution, numbering, capability activation, layout defaults versus report selection | 005–006, 011–012, 066 |
| Analytical dimensions | Required values, analysis, limited combinations, global/shortcut capacity, customer defaults, account-type exceptions, precedence | 007–009, 059–062 |
| Workflow approvals | Participants, template-based workflow, recipient notification timing, alternative approvers | 010, 063–065 |
| Accounting configuration | Periods versus posting limits, settlement terms, payment methods, expense deferrals, exchange adjustments, individual date ranges, closing entries | 016–021, 085–086, 089–090 |
| Accounts, reporting and allocation | Posting accounts, report columns, category-based reports, fixed and statistical allocations, control-account protection, recurring allocations | 022–023, 067–069, 087–088 |
| Posting mappings | Receivables, business/product combinations, inventory/location mapping, permitted substitute groups | 013–015, 070 |
| Journals and banking setup | Recurring method, independent batches, bank G/L link, payment journal setup and numbering | 024–026, 071 |
| Payables configuration | Supplier reference validation, bank details and terms, detailed settlement records, payment proposals | 072–075 |
| Receivables configuration | Customer references, templates, payment registration default, detailed settlement records, cash receipt sign, customer bank and mandate | 076–080, 084 |
| Asset register configuration | Multiple books, straight-line method, classification versus posting, components, nonintegrated books | 027–028, 081–083 |
| Stock master data | Units, SKUs, FIFO, categories/attributes, mandatory variants, locations, quantity versus cost entries | 029–031, 091–094 |
| Trading partner defaults | Delivery addresses, vendor order/remittance addresses, lead-time calculation | 034, 097–098 |
| Commercial agreements | Sales quantity/date conditions, invoice discounts, vendor price conditions, purchase discount types | 032–033, 095–096 |
| Daily user tools | Excel write-back, list analysis, adjustment scopes, saved filters, transaction tracing, page inspection | 049–050, 099–102 |
| Procurement workflow | Partial receipt, receipt reversal eligibility, blanket agreement, quote conversion, over-receipt tolerance, reusable lines | 035–037, 103–105 |
| Order fulfilment | Quote conversion, partial shipping/invoicing, shipment reversal, dated availability, recurring invoices, blanket-order effect | 038, 108–112 |
| Billing and corrections | Combined shipments/receipts, deposits, allowances, purchase correction/replacement, sales deferrals, reopening, paid sales correction | 039–041, 106–107, 113–115, 125 |
| Settlement and adjustments | Applying payments, matching bank entries, reversing accruals, dimension correction scope, registering receipts, unapplication, G/L currency revaluation, journal reversal | 042–045, 116–118, 124 |
| Asset lifecycle | Integrated depreciation, acquisition posting type, disposal | 046, 119–120 |
| Stock movements and valuation | Count discrepancy, transit transfer, cost propagation, immediate reclassification, inventory receipt/shipment | 047–048, 121–123 |

## Review findings and boundaries

- Read all original prompts, alternatives, answer keys, and explanations. No original answer-index changes were required. IDs, set keys, and original correct-option positions remain stable for saved attempts.
- Replaced irrelevant distractors with nearby functional alternatives where practical. Retained straightforward foundation questions rather than making every question artificially difficult.
- Corrected question 010's source from workflow user groups to Approval User Setup. Question 037's sales-named URL is valid: the article explicitly covers both blanket sales and purchase orders.
- Made question 009 use the actual `Limited` combination label and distinguish it from blocking the entire dimension pair.
- Made question 036 explicitly exclude additional reporting currency and later blocking activity. New reversal questions similarly specify prerequisites.
- Used direct references for G/L account properties, asset classification, sales-order quantities, inventory adjustment documents, and the different correction processes.
- Separated bank openings from direct G/L-only postings, due dates from revenue/expense recognition, inventory quantities from value entries, and G/L revaluation from customer/vendor exchange adjustment.
- Multiple-answer prompts request TWO or THREE selections. All have that many valid answers and at least one incorrect alternative. Single-answer prompts have exactly one keyed answer.
- Scenario review is documentation-based. Browser tests prove rendering and scoring against the keys, not accounting correctness in a live Business Central tenant. A second human review and hands-on exercises remain valuable before removing Beta.
- Representative coverage is intentionally narrower than full mastery. Detailed shipping-agent/calendar configuration, complete migration reconciliation, report construction, localization-specific tax/banking behavior, and hands-on agent configuration still warrant supplementary study. Do not advertise this bank as exhaustive exam coverage.

Existing attempt percentages are retained as historical results. Because sets grew and wording improved, an older score was obtained on a smaller/earlier bank and is not proof of completion of the expanded questions. Start a fresh attempt to study the added content; do not clear users' history automatically.

## Editing and verification

- `mb800-questions.js` contains stable question IDs, categories, explicit answer indices, review dates, and per-question Microsoft Learn URLs. Its helper adds reference links only to explanations.
- Keep one correct answer for `single` questions, and at least two for `multiple`. Multiple-choice prompts specify the required count, including three-answer questions. Avoid artificial ordering questions unless the documented dependency is unambiguous.
- Verify the entire scenario, including prerequisites, against its linked documentation. Check distractors as well as the intended answer. Do not treat another quiz bank as an authoritative source.
- Keep IDs stable and unique. Sets now filter explicit domains rather than slicing array positions. Update domain assignment when adding ID ranges; the content test catches unclassified IDs, overlaps, and wrong set sizes. Update `mb800-coverage.json`, set descriptions, this table, the hub count, and the MB-800 user guide when changing the bank size.
- `mb800.html` uses its own `mb800` storage prefix and explicitly empty case-study list. Shared Practice/Test, Random Practice, saved attempts, weak-topic reviews, bookmarks, feedback, and attempt comparison use the existing engine.
- Preserve the Beta label and practice-score caveat until coverage and review justify a status change. This release uses the app's 120-minute practice timer, not a claim about the live exam duration.
- Refresh the MB-800 dashboard capture when its interface changes. Never substitute a screenshot from another exam.
- Increment the hub version, add a changelog entry, and update changed script query versions when releasing edits.

## Automated checks

Run `node tests/mb800-content.test.cjs` for offline checks of IDs, original answer-position compatibility, duplicate wording/options, answer cardinality, source metadata, review dates, prompt length, extraction artifacts, domain proportions, coverage mapping, UI counts, and release version. These checks do not determine whether an answer is factually correct.

## Browser smoke checks

Open `tests/mb800-browser.html?run=mb800-smoke` through a local web server in an isolated browser profile. For local-file execution in Chromium, enable file-to-file access in that isolated test process. The fixture exercises all 125 questions, single/multiple selection (including three correct options), Practice/Test source visibility, bookmarks, feedback, weak-topic generation, attempt comparison, 40/45-question random draws, light mode, and a mobile-width layout. It creates test progress; do not run it in a profile containing study data you want to keep.
