// MB-820: Microsoft Dynamics 365 Business Central Functional Consultant
// Hard questions — mix of single-choice and multiple-choice

const questions = [
  // ── FINANCIAL MANAGEMENT ─────────────────────────────────────────────────
  {
    id: 1,
    text: "A company needs to post a payment for a vendor invoice that was entered in a foreign currency. The exchange rate has changed since the invoice was posted. What must happen when the payment is applied to the invoice?",
    type: "single",
    choices: [
      "Business Central automatically posts an unrealized gain/loss entry to the currency exchange account",
      "Business Central automatically posts a realized gain/loss entry to the currency exchange account",
      "The user must manually create a general journal entry to record the exchange rate difference",
      "The payment cannot be applied until the invoice is re-posted with the current exchange rate"
    ],
    correct: [1],
    explanation: "When a payment is applied to a foreign-currency invoice, Business Central calculates and posts a realized exchange rate gain or loss to the account defined in the Currency Exchange Rate Gains/Losses setup."
  },
  {
    id: 2,
    text: "Which two actions must be performed before you can post an inventory cost adjustment to the general ledger? (Select TWO)",
    type: "multiple",
    choices: [
      "Run the Adjust Cost – Item Entries batch job",
      "Enable automatic cost posting in Inventory Setup",
      "Set up an inventory posting group with a valid inventory account",
      "Run the Close Income Statement batch job",
      "Activate the Post Inventory Cost to G/L option on each item card"
    ],
    correct: [0, 2],
    explanation: "You must first run 'Adjust Cost – Item Entries' to calculate actual costs, and inventory posting groups must have valid G/L accounts so the system knows where to post. Automatic cost posting is optional."
  },
  {
    id: 3,
    text: "A controller wants to prevent any general journal postings to periods that have already been closed. Which setup achieves this?",
    type: "single",
    choices: [
      "Set the Allow Posting From / Allow Posting To dates on the General Ledger Setup page",
      "Lock the accounting periods in the Accounting Periods list",
      "Set the Allow Posting From / Allow Posting To dates on each user's User Setup page",
      "Both A and C - G/L Setup provides the global default; User Setup overrides it per user"
    ],
    correct: [3],
    explanation: "G/L Setup defines company-wide allowed posting dates. User Setup can narrow that window per user. Both must be correctly configured to fully restrict postings to closed periods."
  },
  {
    id: 4,
    text: "When setting up a chart of accounts, which field on a G/L account determines whether the balance is shown as a debit or credit on financial reports?",
    type: "single",
    choices: [
      "Account Type",
      "Debit/Credit",
      "Income/Balance",
      "Normal Balance"
    ],
    correct: [1],
    explanation: "The 'Debit/Credit' field on a G/L account specifies the normal balance side and controls how the balance is displayed on financial statements."
  },
  {
    id: 5,
    text: "A company uses dimension value combinations to restrict which dimension values can be posted together. Where is this restriction configured?",
    type: "single",
    choices: [
      "Default Dimensions page on the G/L account",
      "Dimension Combinations page",
      "Dimension Value Combinations page",
      "Analysis View page"
    ],
    correct: [2],
    explanation: "The 'Dimension Value Combinations' page (accessible from Dimensions) lets you set Blocked combinations for specific pairs of dimension values."
  },

  // ── SALES & RECEIVABLES ───────────────────────────────────────────────────
  {
    id: 6,
    text: "A sales order has been shipped but not yet invoiced. The customer calls to dispute the quantity shipped. Which document should be created to reverse the shipment?",
    type: "single",
    choices: [
      "Sales Credit Memo",
      "Sales Return Order",
      "Corrective Sales Invoice",
      "Sales Invoice with negative lines"
    ],
    correct: [1],
    explanation: "A Sales Return Order should be used to formally receive the returned goods and reverse the shipment. A Credit Memo is used after the invoice has been posted."
  },
  {
    id: 7,
    text: "Which fields are required to post a sales invoice to a customer who uses a different invoice currency than the company's local currency? (Select TWO)",
    type: "multiple",
    choices: [
      "Currency Code on the sales header",
      "Exchange Rate on the customer card",
      "A currency exchange rate defined for the invoice date",
      "Payment Terms Code on the sales header",
      "Language Code on the customer card"
    ],
    correct: [0, 2],
    explanation: "You must specify the Currency Code on the sales header and a valid exchange rate must exist for that currency on the invoice date. The exchange rate on the customer card is informational only."
  },
  {
    id: 8,
    text: "A company wants cash discounts to reduce the VAT base when early payment discounts are taken. Which setting enables this behavior?",
    type: "single",
    choices: [
      "Set 'Adjust for Payment Discount' to true on the VAT Posting Setup",
      "Enable 'Payment Discount Excludes VAT' on General Ledger Setup",
      "Set 'Calc. Pmt. Disc. on Cr. Memos' on the Payment Terms",
      "Enable 'Unrealized VAT' on the VAT Posting Setup"
    ],
    correct: [0],
    explanation: "'Adjust for Payment Discount' on the VAT Posting Setup causes Business Central to recalculate and adjust VAT when a payment discount is applied."
  },

  // ── PURCHASING & PAYABLES ─────────────────────────────────────────────────
  {
    id: 9,
    text: "A purchase order has been partially received and invoiced. The remaining quantity must be cancelled. What is the correct approach?",
    type: "single",
    choices: [
      "Delete the purchase order; Business Central will reverse the posted entries automatically",
      "Change the quantity on the open purchase order lines to match what has already been received, then close the order",
      "Post a purchase credit memo referencing the original order",
      "Use 'Undo Receipt' on the posted receipt to reverse the remaining quantity"
    ],
    correct: [1],
    explanation: "To close a partially received purchase order, reduce the quantity to receive to zero (or match the received quantity) on the remaining lines so the order can be closed without reversing already posted entries."
  },
  {
    id: 10,
    text: "Which two setup elements must be in place for three-way matching (PO, receipt, invoice) to work correctly in Business Central? (Select TWO)",
    type: "multiple",
    choices: [
      "Enable 'Invoice Receipt Date Check' on Purchases & Payables Setup",
      "Set a 'Quantity Invoiced' tolerance on the vendor card",
      "Enable 'Receipt on Invoice' under Purchases & Payables Setup",
      "Enable 'Exact Cost Reversing Mandatory' on Inventory Setup",
      "Set 'Posted Receipt Nos.' series on Purchases & Payables Setup"
    ],
    correct: [2, 4],
    explanation: "'Receipt on Invoice' enforces that a receipt must exist before an invoice can be posted. A number series for posted receipts is required for the system to link receipts to invoices."
  },

  // ── INVENTORY & ITEMS ─────────────────────────────────────────────────────
  {
    id: 11,
    text: "A company uses Standard costing. At month-end the standard cost of an item is revalued. Which entry type is automatically created by Business Central to record the variance?",
    type: "single",
    choices: [
      "Direct Cost",
      "Indirect Cost",
      "Revaluation",
      "Variance"
    ],
    correct: [2],
    explanation: "When standard costs are updated, Business Central creates Item Ledger Entries and Value Entries of type 'Revaluation' to capture the difference between old and new standard costs."
  },
  {
    id: 12,
    text: "Which costing method prevents negative inventory by design, and what is the consequence when inventory goes negative accidentally?",
    type: "single",
    choices: [
      "FIFO — costs are calculated incorrectly until inventory is replenished",
      "Average — the average cost is recalculated to include future receipts",
      "Standard — a variance entry is created automatically",
      "Specific — the item tracking entry is reversed"
    ],
    correct: [1],
    explanation: "With Average costing, if inventory goes negative, Business Central defers the cost calculation and includes future receipts in the average, which can distort costs until the next Adjust Cost run."
  },
  {
    id: 13,
    text: "A warehouse uses Directed Put-away and Pick. Which three documents are involved in an outbound warehouse flow for a sales order? (Select THREE)",
    type: "multiple",
    choices: [
      "Warehouse Shipment",
      "Pick Document (Warehouse Pick)",
      "Posted Warehouse Shipment",
      "Sales Shipment",
      "Internal Pick"
    ],
    correct: [0, 1, 2],
    explanation: "The outbound directed flow involves: (1) Warehouse Shipment created from the sales order, (2) Warehouse Pick created from the shipment for warehouse workers to pick, and (3) Posted Warehouse Shipment after registering the pick and posting the shipment."
  },
  {
    id: 14,
    text: "Item tracking is set to 'Lot-Specific Tracking'. A warehouse pick is created for 10 units. The system requires the picker to enter lot numbers. Where is this enforced?",
    type: "single",
    choices: [
      "Item Tracking Code — 'Lot Warehouse Tracking' field",
      "Item Card — 'Lot Nos.' field",
      "Warehouse Setup — 'Require Lot No.' field",
      "Location Card — 'Bin Mandatory' field"
    ],
    correct: [0],
    explanation: "The 'Lot Warehouse Tracking' field on the Item Tracking Code record controls whether lot numbers must be specified on warehouse documents such as picks and put-aways."
  },

  // ── MANUFACTURING ─────────────────────────────────────────────────────────
  {
    id: 15,
    text: "A production order is in 'Released' status. A planner wants to change the routing. What must the planner do first?",
    type: "single",
    choices: [
      "Change the production order status to 'Planned'",
      "Change the production order status to 'Firm Planned'",
      "Create a new production order; released orders cannot be edited",
      "Use 'Refresh Production Order' to unlock the routing lines"
    ],
    correct: [1],
    explanation: "A released production order has been communicated to the shop floor. To modify its routing, it must first be changed back to 'Firm Planned' status, which allows editing of the routing lines."
  },
  {
    id: 16,
    text: "Which two capacity constraint types can be defined on a work center in Business Central? (Select TWO)",
    type: "multiple",
    choices: [
      "Machine Capacity",
      "Bottleneck Capacity",
      "Critical Load Capacity",
      "Human Resource Capacity",
      "Subcontractor Capacity"
    ],
    correct: [1, 2],
    explanation: "Business Central supports 'Bottleneck' and 'Critical Load' as capacity constraint types on work centers, used by the planning engine to identify and manage capacity limitations."
  },
  {
    id: 17,
    text: "What is the effect of enabling 'Flushing Method: Backward' on a BOM component?",
    type: "single",
    choices: [
      "Component consumption is posted when the production order is released",
      "Component consumption is posted when the output is posted",
      "Component consumption is posted when the production order is created",
      "Component consumption must be manually posted at all times"
    ],
    correct: [1],
    explanation: "Backward flushing automatically posts component consumption when the finished output is posted, eliminating the need to manually post consumption entries."
  },

  // ── SERVICE MANAGEMENT ────────────────────────────────────────────────────
  {
    id: 18,
    text: "A service contract has a 'Prepaid' contract type. How is revenue recognised in Business Central?",
    type: "single",
    choices: [
      "Revenue is posted immediately when the contract is signed",
      "Revenue is deferred and recognised over the contract period using 'Post Prepaid Contract Entries'",
      "Revenue is recognised when individual service orders are invoiced",
      "Revenue is recognised at the end of the contract period"
    ],
    correct: [1],
    explanation: "For prepaid service contracts, Business Central defers revenue to an unearned income account and requires running 'Post Prepaid Contract Entries' periodically to release revenue to the income account."
  },
  {
    id: 19,
    text: "Which field on a Service Item Line determines the maximum hours a technician can spend before exceeding the contract's response time SLA?",
    type: "single",
    choices: [
      "Response Time (Hours)",
      "Max. Labor Hours",
      "Service Hours",
      "Contract Expiration Date"
    ],
    correct: [0],
    explanation: "'Response Time (Hours)' on the Service Item Line defines the SLA commitment for how quickly the service order must be responded to."
  },

  // ── ASSEMBLY MANAGEMENT ───────────────────────────────────────────────────
  {
    id: 20,
    text: "A company uses Assemble-to-Order. A sales order is created for an assembly item. Which of the following is TRUE?",
    type: "single",
    choices: [
      "An assembly order is automatically created and linked to the sales line",
      "The planner must manually create the assembly order and link it",
      "The item is always picked from stock; assembly orders are used only for ATS items",
      "The assembly order is created only when the sales order is released"
    ],
    correct: [0],
    explanation: "For Assemble-to-Order items, Business Central automatically creates a linked assembly order when the sales order line is created, enabling order-specific configuration."
  },

  // ── PLANNING ─────────────────────────────────────────────────────────────
  {
    id: 21,
    text: "The planning worksheet generates a 'Change Qty.' action message for an existing purchase order. What does this mean?",
    type: "single",
    choices: [
      "The purchase order should be cancelled and re-created with the new quantity",
      "The quantity on the existing purchase order should be changed to meet the net demand",
      "A new purchase order should be created in addition to the existing one",
      "The item's reorder point should be changed"
    ],
    correct: [1],
    explanation: "'Change Qty.' action messages indicate that the planning engine has determined the quantity on an existing supply order should be modified to cover the demand."
  },
  {
    id: 22,
    text: "Which reordering policy results in a fixed order quantity being suggested regardless of actual demand size?",
    type: "single",
    choices: [
      "Lot-for-Lot",
      "Fixed Reorder Qty.",
      "Maximum Qty.",
      "Order"
    ],
    correct: [1],
    explanation: "'Fixed Reorder Qty.' always suggests replenishment in the defined fixed quantity (the 'Reorder Quantity' field), regardless of how much demand exists."
  },

  // ── JOBS / PROJECT MANAGEMENT ─────────────────────────────────────────────
  {
    id: 23,
    text: "A project manager wants to recognise revenue using the 'Percentage of Completion' method. Which WIP method should be selected on the job?",
    type: "single",
    choices: [
      "Completed Contract",
      "Cost Value",
      "Sales Value",
      "Percentage of Completion"
    ],
    correct: [3],
    explanation: "The 'Percentage of Completion' WIP method calculates recognised revenue based on the percentage of budgeted cost that has been consumed, matching revenue to the stage of completion."
  },
  {
    id: 24,
    text: "Which two elements are required to post a job journal line that records time spent by an employee? (Select TWO)",
    type: "multiple",
    choices: [
      "A resource linked to the employee",
      "A job task number of type 'Posting'",
      "A job planning line for the resource",
      "An approved timesheet",
      "A work type code"
    ],
    correct: [0, 1],
    explanation: "A resource must exist for the employee and the job task must be of type 'Posting' (not Heading or Total) to accept journal lines. Planning lines and timesheets are optional for direct journal posting."
  },

  // ── SETUP & ADMINISTRATION ────────────────────────────────────────────────
  {
    id: 25,
    text: "A company wants to ensure that every sales order created by users in the SALES permission set must have a 'Reason Code'. How is this enforced in Business Central?",
    type: "single",
    choices: [
      "Add a mandatory field validation in the Sales & Receivables Setup",
      "Use a workflow that requires approval before posting if Reason Code is blank",
      "Configure a field monitoring rule on the Sales Header table",
      "There is no native way to enforce this without extension development"
    ],
    correct: [1],
    explanation: "Business Central's built-in workflow engine can be configured to require approval (or block progression) when certain fields like Reason Code are blank, enforcing the business rule without code."
  },
  {
    id: 26,
    text: "You need to migrate opening balances for customers when going live on Business Central. Which configuration package table should you use for customer ledger opening balances?",
    type: "single",
    choices: [
      "Customer (table 18)",
      "Cust. Ledger Entry (table 21)",
      "Gen. Journal Line (table 81) with a balancing G/L account",
      "Detailed Cust. Ledg. Entry (table 379)"
    ],
    correct: [2],
    explanation: "Opening balances for customer ledgers are imported through Gen. Journal Lines (table 81) using a configuration package or data migration, which then posts to create the customer ledger entries correctly."
  },
  {
    id: 27,
    text: "Which permission object type controls whether a user can execute a Business Central report?",
    type: "single",
    choices: [
      "TableData",
      "Report",
      "CodeUnit",
      "Page"
    ],
    correct: [1],
    explanation: "The 'Report' object type in a permission set controls execute access to individual reports in Business Central."
  },

  // ── INTERCOMPANY ──────────────────────────────────────────────────────────
  {
    id: 28,
    text: "Company A sends an intercompany sales order to Company B. Both companies use Business Central. In Company B, what document is created in the IC Inbox?",
    type: "single",
    choices: [
      "An intercompany purchase order",
      "An intercompany sales order",
      "A general journal line",
      "A vendor invoice"
    ],
    correct: [0],
    explanation: "When Company A sends an IC sales order, Company B's IC Inbox receives it as an IC purchase order, mirroring the transaction from the buying company's perspective."
  },

  // ── REPORTING & ANALYTICS ─────────────────────────────────────────────────
  {
    id: 29,
    text: "A financial controller wants to compare actuals vs. budget by department using Analysis Views. Which two dimension setup steps are required? (Select TWO)",
    type: "multiple",
    choices: [
      "Set the 'Department' dimension as a global or shortcut dimension",
      "Create an Analysis View that includes the 'Department' dimension",
      "Map the 'Department' dimension to the income statement in G/L Account Categories",
      "Enable 'Budget Dimension 1' on the G/L Budget",
      "Run 'Update Analysis View' to process posted entries"
    ],
    correct: [1, 4],
    explanation: "An Analysis View must be created with the relevant dimensions included, and it must be updated (manually or automatically) to include posted G/L entries before it can be used for analysis."
  },
  {
    id: 30,
    text: "What is the primary purpose of Account Schedules (Financial Reports) in Business Central?",
    type: "single",
    choices: [
      "To define chart of accounts structure and G/L account hierarchies",
      "To create custom financial statements by combining G/L account ranges, formulas, and dimensions",
      "To schedule automated posting of recurring journal entries",
      "To define budget periods and budget amounts per G/L account"
    ],
    correct: [1],
    explanation: "Account Schedules (called Financial Reports in newer BC versions) allow users to build custom financial statements using row formulas that reference G/L accounts, totaling formulas, and dimension filters."
  }
];
