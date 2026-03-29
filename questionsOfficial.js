// MB-820: Official Questions
// Practice questions based on MB-820 exam topics for study purposes

const questionsOfficial = [
  {
    id: 501,
    text: "A company is deploying Business Central on-premises. The company plans to use a single-tenant deployment architecture. You need to describe how the data is stored and how the Business Central Server is configured. In which two ways should you describe the single-tenant architecture? Each correct answer presents a complete solution. (Select TWO)",
    type: "multiple",
    choices: [
      "A. Each customer has their own Business Central Server.",
      "B. The application and the business data are stored in the same database.",
      "C. Multiple customers share a single Business Central Server.",
      "D. The application and business data are stored in separate databases.",
      "E. Multiple customers share multiple Business Central Server instances."
    ],
    correct: [0, 1],
    explanation: "In a single-tenant deployment, each customer has their own Business Central Server (A), and the application and business data are stored in the same database (B). Multi-tenant deployments use a shared server with separate databases per tenant."
  },
  {
    id: 502,
    text: "A company plans to deploy Business Central with the following requirements:\n1. Use the company hardware architecture to run the deployment.\n2. Use sandbox environments to develop extensions.\n3. Allow tenants to connect to Shopify by using the standard connector.\n4. Use Microsoft Power Automate to create a workflow that calls a business event.\n\nWhich requirements should use an Online deployment? (Select all that apply)",
    type: "multiple",
    choices: [
      "Requirement 1: Use the company hardware architecture to run the deployment.",
      "Requirement 2: Use sandbox environments to develop extensions.",
      "Requirement 3: Allow tenants to connect to Shopify by using the standard connector.",
      "Requirement 4: Use Microsoft Power Automate to create a workflow that calls a business event."
    ],
    correct: [1, 2, 3],
    explanation: "Requirement 1 (company hardware architecture) requires an On-premises deployment. Requirements 2, 3, and 4 require Online deployment: sandbox environments for extension development are an Online-only feature, the Shopify standard connector is only available Online, and Power Automate business event workflows require the Online environment."
  },
  {
    id: 503,
    text: "A company is examining Connect apps and Add-on apps for use with Business Central. Which of the following statements correctly match descriptions to app types? (Select all that apply)",
    type: "multiple",
    choices: [
      "Connect app — Developed by using any coding language.",
      "Connect app — Developed by using AL language in Visual Studio Code.",
      "Add-on app — Developed by using any coding language.",
      "Add-on app — Developed by using AL language in Visual Studio Code."
    ],
    correct: [0, 3],
    explanation: "Connect apps integrate with Business Central through APIs and can be developed using any coding language. Add-on apps are extensions built directly on the Business Central platform using AL language in Visual Studio Code."
  },
  {
    id: 504,
    text: "You develop a test application. You must meet the following requirements:\n- Roll back changes to a test method after run time.\n- Run an approve action on a test page named TestPageA.\n\nYou need to implement the given requirements on the test codeunit. Which two actions should you perform? (Select TWO)",
    type: "multiple",
    choices: [
      "Set the CommitBehavior attribute to Ignore.",
      "Set the ErrorBehavior attribute to Collect.",
      "Set the TestIsolation property to Function.",
      "Set the TransactionModel attribute to AutoRollBack.",
      "Configure TestPageA.Approve.Enabled().",
      "Configure TestPageA.Approve.Invoke().",
      "Configure TestPageA.Approve.Visible().",
      "Configure TestPageA.Trap()."
    ],
    correct: [3, 5],
    explanation: "To roll back changes to a test method after run time, set the TransactionModel attribute to AutoRollBack — this automatically rolls back all database changes after each test method runs. To programmatically run the Approve action on TestPageA, use TestPageA.Approve.Invoke(), which triggers the action just as a user would click it."
  },
  {
    id: 505,
    text: "You are cleaning up sandbox environments for a company. The company requires data to be cleared from the environments each time an extension is published. You need to configure the launch.json file. Which schemaUpdateMode property should you set?",
    type: "single",
    choices: [
      "ForceUpgrade",
      "ForceSync",
      "Synchronize",
      "Recreate"
    ],
    correct: [3],
    explanation: "The Recreate schemaUpdateMode drops and recreates the database schema and clears all data each time an extension is published. This meets the requirement of clearing data on every publish. ForceSync and Synchronize keep existing data, and ForceUpgrade runs upgrade codeunits."
  },
  {
    id: 506,
    text: "You need to allow debugging in an extension to view the source code. In which file should you specify the value of the allowDebugging property?",
    type: "single",
    choices: [
      "settings.json",
      "rad.json",
      "app.json",
      "launch.json"
    ],
    correct: [2],
    explanation: "The allowDebugging property is specified in the app.json file of an AL extension. Setting it to true allows other developers to debug the extension and step through its source code."
  },
  {
    id: 507,
    text: "A company uses Business Central. The company plans to use a translation file in an extension. The extension has a caption that should not be translated. You need to prevent the caption from being translated. What should you do?",
    type: "single",
    choices: [
      "Use the CaptionML property and copy the same caption for each language used.",
      "Set the GenerateLockedTranslations feature in the app.json file.",
      "Add the Locked = true parameter to the Caption.",
      "Delete the Caption property.",
      "Copy the same caption for each language in the translation file."
    ],
    correct: [2],
    explanation: "Adding Locked = true to the Caption property (e.g., Caption = 'My Caption', Locked = true) marks the caption as intentionally not translatable and excludes it from generated translation files (XLIFF). This is the correct approach to prevent a caption from being translated."
  },
  {
    id: 508,
    text: "A company plans to set up a local Business Central Development Docker container. The environment will be used for testing new project ideas. You need to ensure that the most recent Business Central artifact URL has been selected. Which command should you use?",
    type: "single",
    choices: [
      "Get-BcArtifactUrl -type sandbox -select Current",
      "Get-BcArtifactUrl -type sandbox -select Closest",
      "Get-BcArtifactUrl -type sandbox -select NextMinor",
      "Get-BcArtifactUrl -type sandbox -select NextMajor"
    ],
    correct: [0],
    explanation: "Get-BcArtifactUrl -type sandbox -select Current retrieves the most recent (current) available Business Central artifact URL. The 'Current' parameter selects the latest available version, which is suitable for testing new project ideas with the latest features."
  },
  {
    id: 509,
    text: "You are developing an app. You plan to publish the app to Microsoft AppSource. You need to assign an object range for the app. Which object range should you use?",
    type: "single",
    choices: [
      "Custom object within the range 50000 to 59999",
      "Custom object within the range 50000 to 99999",
      "Divided by countries and use a specific country within the range 100000 to 999999",
      "An object range within the range of 7000000 to 74999999 that is requested from Microsoft",
      "Free object within the standard range 1 to 49999"
    ],
    correct: [3],
    explanation: "Apps published to Microsoft AppSource must use an object ID range within 7000000 to 74999999, which is allocated by Microsoft upon request. This ensures global uniqueness across all AppSource apps. The 50000-99999 range is for per-tenant customizations, not AppSource apps."
  },
  {
    id: 510,
    text: "A company has a page named 'New Job Status' connected to a source table named Job. The company requires the following changes: (1) Filter the page to display only jobs with Open or Quote status. (2) Add the following comment for internal use: 'This page does not include completed jobs.' (3) The Item Ledger Entries action must open the selected job on the page. Which property selections correctly meet all three requirements? (Select THREE)",
    type: "multiple",
    choices: [
      "Filter open or quote: SourceTableView = sorting(Status) order(ascending)",
      "Filter open or quote: SourceTableView = where(Status = filter(Open | Quote | Planning))",
      "Filter open or quote: SourceTableView = where(Status = filter(Open | Quote))",
      "Internal comment: ToolTip = 'This page does not include completed jobs'",
      "Internal comment: Description = 'This page does not include completed jobs'",
      "Action opens selected job: RunPageView = \"Job No.\" = FIELD(\"No.\")",
      "Action opens selected job: RunPageLink = \"Job No.\" = FIELD(\"No.\")"
    ],
    correct: [2, 4, 6],
    explanation: "SourceTableView = where(Status = filter(Open | Quote)) filters for only Open and Quote status (not Planning). The Description property stores internal-use comments not visible to end users (ToolTip is shown to users). RunPageLink passes the current record's key to the linked page, opening the selected job."
  },
  {
    id: 511,
    text: "A company plans to meet new regulatory requirements. The regulator has issued new tax tiers. You need to update the base application table by using a table extension. Which table field property can you change?",
    type: "single",
    choices: [
      "CalcFormula",
      "DecimalPlaces",
      "BlankZero",
      "AutoFormatType"
    ],
    correct: [2],
    explanation: "In a table extension, BlankZero is one of the properties that can be changed on an existing field. CalcFormula, DecimalPlaces, and AutoFormatType cannot be modified through a table extension — only a limited set of properties are permitted to be overridden in extensions."
  },
  {
    id: 512,
    text: "You have an XMLport for an items list. You need to complete the code segment to expose item data using the correct node types. The outer container links to the Item table, the 'No.' field is exposed as an XML attribute, and the 'Description' field is exposed as an XML child element. Which three node types should you use in order?",
    type: "multiple",
    choices: [
      "textelement for the outer Items container (links to the Item table)",
      "tableelement for the outer Items container (links to the Item table)",
      "fieldattribute for declaring the 'No.' field as an XML attribute",
      "fieldelement for declaring the 'Description' field as an XML child element",
      "textelement for declaring field values",
      "tableelement for declaring individual fields"
    ],
    correct: [1, 2, 3],
    explanation: "In an XMLport, tableelement links a node to a table (outer container for Item records). fieldattribute exposes a field value as an XML attribute on the element (e.g., Item.\"No.\"). fieldelement exposes a field value as a nested XML child element (e.g., Item.Description). These are the correct node types for the described XMLport structure."
  },
  {
    id: 513,
    text: "A company has the following custom permission set:\n\npermissionset 50000 \"Sales Person Permission Set\"\n{\n    Assignable = false;\n    Caption = 'Sales Person Permission Set';\n    Permissions = tabledata Customer = RIM, ...\n}\n\nThe company wants this permission set to be visible and assignable on the Permission Sets page. What change is required?",
    type: "single",
    choices: [
      "Change Assignable = false to Assignable = true in the permissionset object",
      "Add the permission set to a user group directly via the UI",
      "Create a new permission set with a different object ID",
      "Import an XML permission set file via the Permission Sets page"
    ],
    correct: [0],
    explanation: "The Assignable property controls whether a permission set appears on the Permission Sets page and can be assigned to users. Changing Assignable = false to Assignable = true makes the permission set visible and assignable. With Assignable = false, the permission set is typically used as a base set to include in other permission sets, not assigned directly."
  },
  {
    id: 514,
    text: "You create a codeunit that works with a table named Boxes. You plan to filter the records and then modify them. You get an error that you do not have permission to work with the Boxes table. You need to assign Indirect permissions for the Boxes table to the codeunit. Which code correctly assigns the permission?",
    type: "single",
    choices: [
      "Permissions = TableData \"Boxes\" = rm",
      "Permissions = Table \"Boxes\" = RIMD",
      "Permissions = TableData \"Boxes\" = RIMD",
      "Permissions = Table \"Boxes\" = rm"
    ],
    correct: [0],
    explanation: "Indirect permissions are denoted by lowercase letters. TableData refers to the data in the table (as opposed to Table which refers to the object itself). To grant indirect read (r) and modify (m) permissions on the Boxes table data, use: Permissions = TableData \"Boxes\" = rm. This allows the codeunit to filter and modify records without requiring users to have direct permissions."
  },
  {
    id: 515,
    text: "You plan to write unit test functions to test newly developed functionality in an app. You must create a test codeunit to write the functions. You need to select the property to use for the test codeunit. Which property should you use to ensure that the requirements are fulfilled?",
    type: "single",
    choices: [
      "SubType",
      "Access",
      "Description"
    ],
    correct: [0],
    explanation: "The SubType property on a codeunit is used to define it as a test codeunit. By setting SubType = Test, the codeunit becomes a test codeunit where you can write test functions using the [Test] attribute. This enables the AL test runner to discover and execute the functions."
  },
  {
    id: 516,
    text: "A company owns and operates hotels, restaurants, and stores. The company needs a new field named Approver in the Item table. The field must let users select one of these approvers: Hotel manager, Restaurant manager, Store manager, Purchasing manager. You need to create this Approver field using an AL extension. Which is the correct first action?",
    type: "single",
    choices: [
      "Create an enum type with the four approver values (Hotel manager, Restaurant manager, Store manager, Purchasing manager)",
      "Create a table extension on the Item table that adds the Approver field",
      "Create a page extension to display the Approver field on the Item card",
      "Create a permission set that grants access to the new field"
    ],
    correct: [0],
    explanation: "The correct order of actions is: (1) Create an enum type with the four approver option values, (2) Create a table extension on the Item table that adds the Approver field using that enum type, (3) Create a page extension to display the Approver field in the UI. The enum must be defined first because the table extension field will reference it."
  },
  {
    id: 517,
    text: "A company uses Business Central. A worker reports that each time they generate a daily summary report, they get a permission error. The report uses a local procedure GetLogisticsCharge() that reads from the 'Logistics Setup' table (line 15+). You need to resolve the issue. Which InherentPermissions attributes correctly resolve the permission error? (Select all that apply)",
    type: "multiple",
    choices: [
      "[InherentPermissions(PermissionObjectType::Table, Database::\"Logistics Setup\", 'X', InherentPermissionsScope::Both)] above line 15",
      "[InherentPermissions(PermissionObjectType::TableData, Database::\"Logistics Setup\", 'R', InherentPermissionsScope::Permissions)] above line 15",
      "[InherentPermissions(PermissionObjectType::TableData, Database::\"Logistics Setup\", 'r', InherentPermissionsScope::Both)] above line 15",
      "[InherentPermissions(PermissionObjectType::Table, Database::\"Logistics Setup\", 'X', InherentPermissionsScope::Permissions)] above line 15"
    ],
    correct: [1, 2],
    explanation: "The procedure reads data from the Logistics Setup table, so it needs TableData permissions (not Table). Option B (TableData, 'R', Permissions scope) grants direct read via permissions. Option C (TableData, 'r', Both scope) grants indirect read via both permissions and entitlements. Both correctly grant the required read access to the table data. Options A and D use Table (the object, not data) with 'X' (execute), which is incorrect for reading records."
  },
  {
    id: 518,
    text: "You are exporting data from Business Central. You must export the data in a non-fixed length and width in CSV format. You need to generate an XMLport to export the data in the required format. Which Format property value should you use?",
    type: "single",
    choices: [
      "XML",
      "VariableText",
      "FixedText"
    ],
    correct: [1],
    explanation: "VariableText format is used for CSV and other delimiter-separated text formats where field lengths are not fixed. Fields are separated by a delimiter (comma by default). XML produces XML output, and FixedText produces fixed-width (column-aligned) text files."
  },
  {
    id: 519,
    text: "You plan to create a table to hold client data with these requirements: (1) Lookups into other records must be established. (2) Validate if a record exists in a destination record. Which table field properties should you use for each requirement? (Select TWO — one for each requirement)",
    type: "multiple",
    choices: [
      "DataClassification — for establishing lookups into other records",
      "ExternalAccess — for establishing lookups into other records",
      "TableRelation — for establishing lookups into other records",
      "ValidateTableRelation — for validating if a record exists in the related table",
      "CalcFormula — for validating if a record exists",
      "AccessByPermission — for validating if a record exists"
    ],
    correct: [2, 3],
    explanation: "TableRelation establishes a relationship to another table, enabling the lookup button and defining which table/field to look up. ValidateTableRelation (when set to true, which is the default) validates that the value entered in the field exists as a record in the related table, satisfying the requirement to validate record existence."
  },
  {
    id: 520,
    text: "A company has a task that is performed infrequently. Users often need to look up the procedure to complete the task. The company requires a wizard that leads users through a sequence of steps to complete the task. You need to create the page to enable the wizard creation. Which page type should you use?",
    type: "single",
    choices: [
      "NavigatePage",
      "Card",
      "RoleCenter",
      "List"
    ],
    correct: [0],
    explanation: "NavigatePage is the page type used to create step-by-step wizards in Business Central. It provides a sequential experience with Back and Next navigation buttons, guiding users through a defined series of steps. This is ideal for infrequently performed tasks where users need structured guidance."
  },
  {
    id: 521,
    text: "A company creates a Business Central app and a table named MyTable to store records when sales orders are posted. Users report: permission errors related to MyTable, inability to post sales orders, and inability to access the list page for MyTable. You need to resolve the user issues without creating new permission sets, using the principle of least privilege. Solution: In the MyTable object, add the property InherentPermissions = RI. Does the solution meet the goal?",
    type: "single",
    choices: [
      "Yes",
      "No"
    ],
    correct: [0],
    explanation: "Yes, this meets the goal. InherentPermissions = RI on the MyTable object grants inherent Read (R) and Insert (I) permissions through the code execution context of the app. Read allows users to access the list page, and Insert allows the posting process to insert records into MyTable. No new permission sets are created, and only the minimum required permissions (R and I) are granted, satisfying the principle of least privilege."
  },
  {
    id: 522,
    text: "A company creates a Business Central app and a table named MyTable to store records when sales orders are posted. Users report: permission errors related to MyTable, inability to post sales orders, and inability to access the list page for MyTable. You need to resolve the user issues without creating new permission sets, using the principle of least privilege. Solution: Assign a SUPER permission set. Does the solution meet the goal?",
    type: "single",
    choices: [
      "Yes",
      "No"
    ],
    correct: [1],
    explanation: "No, this does not meet the goal. Assigning the SUPER permission set grants all permissions to all objects, which violates the principle of least privilege. The requirement explicitly states that the minimum necessary permissions should be used. Additionally, assigning SUPER is not a targeted solution specific to the MyTable access issue."
  },
  {
    id: 523,
    text: "A company creates a Business Central app and a table named MyTable to store records when sales orders are posted. Users report: permission errors related to MyTable, inability to post sales orders, and inability to access the list page for MyTable. You need to resolve the user issues without creating new permission sets, using the principle of least privilege. Solution: Decorate the event subscriber used for inserting data in MyTable with [InherentPermissions(PermissionObjectType::TableData, Database::MyTable, 'R')]. Does the solution meet the goal?",
    type: "single",
    choices: [
      "Yes",
      "No"
    ],
    correct: [1],
    explanation: "No, this does not meet the goal. The attribute only grants Read ('R') permission on MyTable to the event subscriber, but Insert permission is also required to post records (insert into MyTable). Without Insert permission, users will still get permission errors when posting sales orders. The correct permission should include at least 'RI' (Read and Insert)."
  },
  {
    id: 524,
    text: "A company is implementing Business Central. TableA Header and TableA Line are document tables; TableB Header and TableB Line are document history tables. The required dataset must: (1) Include ALL records from TableA Header even if no matching record exists in TableA Line. (2) Include records from TableB Header ONLY where a match is found in TableB Line. Which SqlJoinType should you use for each requirement? (Select TWO — one per requirement)",
    type: "multiple",
    choices: [
      "CrossJoin for TableA Header (all records, even with no match in TableA Line)",
      "InnerJoin for TableA Header (all records, even with no match in TableA Line)",
      "LeftOuterJoin for TableA Header (all records, even with no match in TableA Line)",
      "RightOuterJoin for TableA Header (all records, even with no match in TableA Line)",
      "CrossJoin for TableB Header (only matched records from TableB Line)",
      "InnerJoin for TableB Header (only matched records from TableB Line)",
      "LeftOuterJoin for TableB Header (only matched records from TableB Line)",
      "RightOuterJoin for TableB Header (only matched records from TableB Line)"
    ],
    correct: [2, 5],
    explanation: "LeftOuterJoin for TableA Header ensures all records from the left (parent) table are returned even when no matching child record exists — producing NULLs for the unmatched TableA Line columns. InnerJoin for TableB Header returns only rows where a match exists in both TableB Header and TableB Line, which meets the requirement to include only matched records."
  },
  {
    id: 525,
    text: "You create a Business Central report. You need to insert values on the Request page to be saved for the next time the report is run. What should you do?",
    type: "single",
    choices: [
      "Set the TransactionType property to Update.",
      "Declare a 'SaveValues' variable and assign it to true on the OnOpenPage() trigger.",
      "Set the UseRequestPage property to true.",
      "Set the SaveValues property to true."
    ],
    correct: [3],
    explanation: "Setting the SaveValues property to true on the Request page causes all filter and option values entered by the user to be automatically saved and restored the next time the report is run. This is done as a property on the requestpage object or the report itself, not as a variable."
  },
  {
    id: 526,
    text: "You have Vendor and Item tables with these records:\n- Vendors: V0001=Contoso, V0002=Fabrikam, V0003=Relecloud\n- Items: 1000 Table→V0001, 1001 Chair→V0002, 1002 Shelf→V0001, 1003 Sofa→V0002, 1004 Bed→V0004\n\nRequired result: V0001 Contoso 1000 Table, V0001 Contoso 1002 Shelf, V0002 Fabrikam 1001 Chair, V0002 Fabrikam 1003 Sofa\n\n(V0003 Relecloud with no items is excluded; 1004 Bed referencing non-existent V0004 is excluded). Which JOIN type should you use to produce this result?",
    type: "single",
    choices: [
      "InnerJoin — only matched records appear in both Vendor and Item tables",
      "LeftOuterJoin — all vendors appear, even those without items",
      "RightOuterJoin — all items appear, even those referencing non-existent vendors",
      "CrossJoin — all possible combinations of vendors and items"
    ],
    correct: [0],
    explanation: "InnerJoin returns only rows where a matching record exists in both tables. V0003 Relecloud is excluded (no matching items), and 1004 Bed is excluded (references non-existent vendor V0004). This produces exactly the required result set with only vendors that have items and items that have valid vendors."
  },
  {
    id: 527,
    text: "You are developing an XMLport to export data from the parent Item table and a related child 'Item Unit of Measure' table. You need to: (1) Link the child table to its parent, and (2) Display a confirmation message after the XMLport finishes. Which XMLport triggers should you use for each requirement? (Select TWO)",
    type: "multiple",
    choices: [
      "OnPreXmlItem — to link the child 'Item Unit of Measure' table to its parent Item table",
      "OnAfterXmlItem — to link the child 'Item Unit of Measure' table to its parent Item table",
      "OnPostXmlPort — to display a confirmation message after the XMLport finishes",
      "OnPreXmlPort — to display a confirmation message after the XMLport finishes",
      "OnInitXmlPort — to display a confirmation message after the XMLport finishes"
    ],
    correct: [0, 2],
    explanation: "OnPreXmlItem fires before processing a data item, making it the correct trigger to set up the DataItemLink between the child 'Item Unit of Measure' data item and its parent Item data item. OnPostXmlPort fires after the entire XMLport has finished processing, making it the correct place to display a post-completion confirmation message."
  },
  {
    id: 528,
    text: "You have a per-tenant extension with interface 'IDiscount Calculation' that defines GetLine(var Line: Variant) and GetDiscount(): Decimal. Codeunit 50108 'Discount Mgmt.' implements this interface. The codeunit uses VariantLine as the parameter name in GetLine, and has an additional DiscountIsValid(DocumentDate: Date): Boolean procedure not in the interface. Which statements are true? (Select all that apply)",
    type: "multiple",
    choices: [
      "Codeunit 'Discount Mgmt.' compiles successfully.",
      "VariantLine in GetLine must be changed to Line and DiscountAmount removed for the codeunit to compile.",
      "The DiscountIsValid method must be defined in the interface for the code to compile."
    ],
    correct: [0],
    explanation: "Statement A is true (Yes): The codeunit compiles successfully because it implements all required interface procedures with correct signatures — parameter names do not need to match the interface (only types matter). Statement B is false (No): VariantLine does not need to be renamed to Line; parameter names are not part of the interface contract. Statement C is false (No): Implementing codeunits can have additional procedures not defined in the interface; DiscountIsValid does not need to be in the interface."
  },
  {
    id: 529,
    text: "You create a query that contains a procedure to display top customers. The procedure calls TopCustomerOverview.SetFilter(Sales_LCY, '>10000') and then enters a while loop using TopCustomerOverview.Read(). The procedure breaks at runtime. Which fix correctly resolves the runtime error?",
    type: "single",
    choices: [
      "Enclose the Read() loop body in BEGIN...END",
      "Add TopCustomerOverview.Open() before the SetFilter call",
      "Add TopCustomerOverview.Open() after the SetFilter call and before the while loop",
      "Replace SetFilter with SetRange"
    ],
    correct: [2],
    explanation: "A Query object must be opened with Open() before Read() can be called in the loop. The correct order is: (1) SetFilter — applies filters to the query, (2) Open() — executes the query with the applied filters, (3) while Read() — iterates through results. Adding Open() after SetFilter and before the while loop fixes the runtime error. Opening before SetFilter would ignore the filter."
  },
  {
    id: 530,
    text: "A company has two requirements for customizing per-tenant extension reports: (1) Child data items must not be displayed on the request page for some master-detail reports. (2) Selecting key filter fields takes users too much time — the customization must decrease the amount of time to select the fields. Which two properties should you configure to meet these requirements? (Select TWO — one per requirement)",
    type: "multiple",
    choices: [
      "DataItemLinkReference — to prevent child data items from displaying on the request page",
      "SuppressOutput — to prevent child data items from displaying on the request page",
      "RequestFilterFields — to decrease the time to select key filter fields",
      "DataItemLink — to decrease the time to select key filter fields",
      "SaveValues — to decrease the time to select key filter fields"
    ],
    correct: [0, 2],
    explanation: "DataItemLinkReference specifies the parent data item for a linked child data item. When set, the child data item's filters are managed through the link and the child no longer appears as a separate filterable entity on the request page. RequestFilterFields pre-defines which specific fields appear as filter options on the request page, allowing users to quickly apply the most relevant filters without searching through all fields."
  },
  {
    id: 531,
    text: "You are writing a procedure to block all inventory items with numbers that do not start with the letter S. The procedure uses three expressions to: clear existing filters, filter for inventory items by type, and filter item numbers not starting with 'S'. Which three expressions correctly complete the procedure? (Select THREE)",
    type: "multiple",
    choices: [
      "Item.Reset() — clears all existing filters before applying new ones",
      "Item.Init() — clears all existing filters before applying new ones",
      "Item.SetRange(Type, Item.Type::Inventory) — filters for inventory-type items",
      "Item.SetFilter(Type, Item.Type::Inventory) — filters for inventory-type items",
      "Item.SetFilter(\"No.\", '<>S*') — filters items whose number does not start with S",
      "Item.SetRange(\"No.\", '<>S*') — filters items whose number does not start with S"
    ],
    correct: [0, 2, 4],
    explanation: "Item.Reset() clears all existing filters and sort keys before applying new ones, ensuring a clean filter state. Item.SetRange(Type, Item.Type::Inventory) filters for items with Type = Inventory (SetRange is used for exact/range matches on enum values). Item.SetFilter(\"No.\", '<>S*') uses a wildcard pattern filter to exclude items whose number starts with 'S' — SetFilter supports pattern expressions while SetRange does not."
  },
  {
    id: 532,
    text: "A company has a Business Central online environment. You need to create an HTTP GET request that connects to an external REST service. Which solution should you use?",
    type: "single",
    choices: [
      "A. HttpContent data type variable",
      "B. Codeunit 1299 \"Web Request Helper\"",
      "C. Codeunit 5459 \"JSON Management\"",
      "D. Codeunit 1297 \"Http Web Request Mgt.\"",
      "E. HttpClient data type variable"
    ],
    correct: [4],
    explanation: "For Business Central online environments, you must use the HttpClient data type variable to make HTTP requests to external REST services. The legacy codeunits (1297 Http Web Request Mgt. and 1299 Web Request Helper) are not available in online/SaaS environments. HttpContent is used to represent the body of a request/response, not to initiate the request itself."
  },
  {
    id: 533,
    text: "You need to create the configuration table and page for the non-conformity functionality. Which table configurations should you use? (Select THREE — one per requirement)\n\nRequirements:\n1. Design pattern for the setup table\n2. Data type of the primary key field\n3. Property required to prevent users from adding records",
    type: "multiple",
    choices: [
      "Singleton — design pattern for the setup table",
      "No. Series — design pattern for the setup table",
      "Adapter — design pattern for the setup table",
      "BigInteger — data type of the primary key field",
      "Code — data type of the primary key field",
      "Integer — data type of the primary key field",
      "InitValue — property to prevent users from adding records",
      "InsertAllowed — property to prevent users from adding records",
      "UnBound — property to prevent users from adding records"
    ],
    correct: [0, 4, 7],
    explanation: "The Singleton design pattern is used for setup tables so that only one record exists. The primary key field should use the Code data type (typically a single blank Code field). The InsertAllowed property set to false prevents users from manually inserting new records, enforcing the single-record constraint on the setup table and page."
  },
  {
    id: 534,
    text: "You are creating a view for a Business Central app. The view requires a custom layout that displays only customer records with a balance greater than 500 in local currency. You need to configure the view to specify that it has a custom layout. Which property combination should you use?",
    type: "single",
    choices: [
      "A. SharedLayout = false; Filters = where (Balance = filter (> 500), \"Currency Code\" = filter ('LCY'));",
      "B. SharedLayout = true; Filters = where (Balance = filter (> 500), \"Currency Code\" = filter ('LCY'));",
      "C. SharedLayout = false; Filters = where (\"Balance (LCY)\" = filter (> 500));",
      "D. SharedLayout = true; Filters = where (\"Balance (LCY)\" = filter (> 500));"
    ],
    correct: [2],
    explanation: "SharedLayout = false specifies that this view has its own custom layout (not shared with the base list page layout). The correct field to filter on is \"Balance (LCY)\" which already represents the balance in local currency, so no separate currency code filter is needed. SharedLayout = true would indicate the view reuses the default page layout."
  },
  {
    id: 535,
    text: "A company uses Business Central. You plan to help users through the installation process by using Assisted Setup. You need to create a wizard page. Which two actions should you perform? Each correct answer presents a complete solution. (Select TWO)",
    type: "multiple",
    choices: [
      "A. Set the PageType property to NavigatePage.",
      "B. For each step needed in the guide, add a group() control to the root-level of the layout > area(Content) control.",
      "C. Set the PageType property to Worksheet.",
      "D. For each step needed in the guide, add a repeater() control to the root-level of the layout > area(Content) control."
    ],
    correct: [0, 1],
    explanation: "Setting PageType to NavigatePage creates the wizard/guide layout with Back/Next/Finish navigation buttons. For each step in the wizard, you add a group() control directly inside area(Content) — each group represents one step and can be shown or hidden based on the current step variable. A repeater() control is used for list pages, not wizard steps, and Worksheet is an incorrect page type for a wizard."
  },
  {
    id: 536,
    text: "A company uses four objects in development in Business Central. You need to identify the application layer for each object in Visual Studio Code. Which application layer does each object belong to? (Select all correct statements)",
    type: "multiple",
    choices: [
      "Activities Cue table — System application layer",
      "Activities Cue table — Base application layer",
      "Extension Management codeunit — System application layer",
      "Extension Management codeunit — Base application layer",
      "Business Unit Card page — System application layer",
      "Business Unit Card page — Base application layer"
    ],
    correct: [1, 2, 5],
    explanation: "The Activities Cue table (1313) belongs to the Base application layer as it is part of the Role Center activity cues. The Extension Management codeunit (2501) belongs to the System application layer as it handles platform-level extension management. The Business Unit Card page (240) belongs to the Base application layer as it is part of the consolidation functionality in the Base App."
  },
  {
    id: 537,
    text: "You are creating an app for Business Central. You plan to specify the following parameters and properties of the server and app: Startup object type and object ID, Runtime, and Dependencies. You need to configure the JSON file for the specified parameters and properties. Which JSON file should you configure for each purpose? (Select THREE — one per requirement)",
    type: "multiple",
    choices: [
      "Startup object type and object ID — launch.json",
      "Startup object type and object ID — app.json",
      "Runtime — launch.json",
      "Runtime — app.json",
      "Dependencies — launch.json",
      "Dependencies — app.json"
    ],
    correct: [0, 3, 5],
    explanation: "The launch.json file configures the startup object type and object ID (startupObjectType and startupObjectId), which defines what opens when the app is launched for debugging. The app.json file contains the runtime version (the AL runtime required by the extension) and the dependencies array (other extensions this app depends on). These are compile-time and publish-time metadata, not debug launch settings."
  },
  {
    id: 538,
    text: "You have an XMLport that exports items from a database to an XML file. You need to change the export format from XML to CSV. What should you do?",
    type: "single",
    choices: [
      "A. Change the Direction property to Both.",
      "B. Change the FormatEvaluate property to Legacy.",
      "C. Change the XmlVersionNo property to 1.1.",
      "D. Fill the FileName property with the Items.csv value.",
      "E. Change the Format property to VariableText."
    ],
    correct: [4],
    explanation: "The Format property of an XMLport controls whether it processes XML or text-based formats. Setting Format to VariableText changes the XMLport to produce a CSV (comma-separated values) or other delimited text output. Simply changing the FileName extension does not change the actual output format — the Format property must be changed."
  },
  {
    id: 539,
    text: "A company uses a Vendor - List report from the Base Application. The company has new requirements that cannot be met by extending the Vendor - List report. You create a new report named My Customized Vendor - List. You need to replace the Vendor - List report with My Customized Vendor - List. Which values should complete the code segment? (Select all correct answers)\n\ncodeunit 50100 \"Substitute Report\"\n{\n  [EventSubscriber(ObjectType::Codeunit, Codeunit::???, 'OnAfterSubstituteReport', '', false, false)]\n  local procedure OnSubstituteReport(ReportId: Integer; var NewReportId: Integer)\n  begin\n    if ReportId = Report::??? then\n      NewReportId := Report::???;\n  end;\n}",
    type: "multiple",
    choices: [
      "EventSubscriber codeunit: ReportManagement",
      "EventSubscriber codeunit: Report Distribution Management",
      "EventSubscriber codeunit: Report Selection Mgt.",
      "Event: OnAfterSubstituteReport",
      "Event: OnSelectReportLayout",
      "Event: OnAfterDocumentReady",
      "if ReportId = Report::\"Vendor - List\"",
      "if ReportId = Report::\"My Customized Vendor - List\"",
      "NewReportId := Report::\"My Customized Vendor - List\"",
      "NewReportId := Report::\"Vendor - List\""
    ],
    correct: [0, 3, 6, 8],
    explanation: "To substitute a report, subscribe to the OnAfterSubstituteReport event on Codeunit::ReportManagement (codeunit 44). In the handler, check if ReportId equals the original report (Vendor - List) and if so, set NewReportId to the replacement report (My Customized Vendor - List). This pattern replaces the original report wherever it is triggered in the application."
  },
  {
    id: 540,
    text: "You create a ContosoPost procedure to send an HTTP POST request in JSON format. The procedure does not work as expected. For each of the following statements, select Yes if the statement is true (the fix is needed). Which statements are true? (Select all that apply)\n\nStatement 1: Replace line 16 'Content.ReadAs(ResponseText)' with 'ResponseMessage.Content.ReadAs(ResponseText)'\nStatement 2: In line 13, change the 'text/plain' value to 'application/json'\nStatement 3: Replace line 14 'Headers.Add(\"Authorization\", ...)' with 'Client.DefaultRequestHeaders.Add(\"Authorization\", ...)'\nStatement 4: In line 10, replace WriteFrom with ReadAs",
    type: "multiple",
    choices: [
      "YES — Replace line 16: change Content.ReadAs(ResponseText) to ResponseMessage.Content.ReadAs(ResponseText)",
      "YES — In line 13, change 'text/plain' to 'application/json'",
      "YES — Replace line 14: use Client.DefaultRequestHeaders.Add for Authorization header",
      "YES — In line 10, replace WriteFrom with ReadAs"
    ],
    correct: [1],
    explanation: "Only Statement 2 is true (YES): The Content-Type should be 'application/json' since the request sends JSON data, not 'text/plain'. Statement 1 is false (NO): The existing line 16 'Content.ReadAs(ResponseText)' reads from the request Content object, which has already been sent and is not the response. The correct approach would be to read from ResponseMessage.Content — however, the exam answer marks this as NO (no change needed) because the question focuses on the most critical fix (Content-Type). Statement 3 is false (NO): The Authorization header is correctly set per-request via Headers.Add after GetHeaders, which is a valid approach for per-request headers. Statement 4 is false (NO): WriteFrom correctly writes the request body text into the HttpContent object; replacing it with ReadAs would attempt to read from an empty content object instead of writing to it."
  },
  {
    id: 541,
    text: "You must simulate the user interaction of selecting a posting option. The options must include: Ship, Invoice, and Ship & Invoice. You need to create a test codeunit to run the test. What should you use?",
    type: "single",
    choices: [
      "A. Normal attribute",
      "B. Handler method",
      "C. Test attribute"
    ],
    correct: [1],
    explanation: "A Handler method (specifically a StrMenuHandler) is used in test codeunits to simulate user interaction with UI dialogs such as option selection menus. When code calls StrMenu() presenting posting options (Ship, Invoice, Ship & Invoice), the handler method intercepts the dialog and returns the programmatic selection, allowing automated tests to run without manual input."
  },
  {
    id: 542,
    text: "A company plans to customize its per-tenant extension reports with the following requirements: (1) Child data items must not have the ability to be filtered on the request page for some master-detail reports. (2) Selecting key filter fields takes users too much time — the customization must decrease the amount of time to select the fields for all users. You need to optimize the report request page. Which two actions should you configure? (Select TWO — one per requirement)",
    type: "multiple",
    choices: [
      "Set the DataItemLinkReference property to the parent data item — to prevent child data items from being filtered on the request page",
      "Set the PrintOnlyIfDetail property to true — to prevent child data items from being filtered on the request page",
      "Set the UseRequestPage property to true — to prevent child data items from being filtered on the request page",
      "Set the DataItemTableView sorting property — to prevent child data items from being filtered on the request page",
      "Specify the RequestFilterFields property — to decrease the amount of time to select filter fields",
      "Set the SaveValues property to true — to decrease the amount of time to select filter fields",
      "Specify the request page options — to decrease the amount of time to select filter fields"
    ],
    correct: [0, 4],
    explanation: "Setting the DataItemLinkReference property on a child data item to its parent removes the child from the request page filter section — users can no longer independently filter the child data item. Specifying the RequestFilterFields property pre-defines which specific fields appear as quick filters on the request page, so users can immediately apply the most relevant filters without searching through all available fields, decreasing selection time."
  },
  {
    id: 543,
    text: "A company uses Azure Application Insights for Business Central online in its production environment. A user observes that some job queues go into the failed state and require manual intervention. You need to analyze job queue lifecycle telemetry. How should you complete the KQL code segment? (Select TWO — one per blank)\n\ntraces\n| ??? 100\n| where customDimensions.eventId == 'YOUREVENTID' (e.g., AL0000E3F for job queue started, or the relevant job queue lifecycle event ID from the telemetry documentation)\n| ??? timestamp, jobQueueObjectId = customDimensions.alJobQueueObjectId, jobQueueObjectType = customDimensions.alJobQueueObjectType, ...",
    type: "multiple",
    choices: [
      "take — to limit results to 100 rows",
      "top — to limit results to 100 rows",
      "project — to select specific columns from the results",
      "extend — to add calculated columns to the results"
    ],
    correct: [0, 2],
    explanation: "In KQL (Kusto Query Language), 'take 100' limits the result set to 100 rows, which is the correct operator for simply returning the first N rows. 'project' is used to select and rename specific columns from the result set. 'top' requires an 'by' clause with a sort field. 'extend' adds new calculated columns but does not select existing columns."
  },
  {
    id: 544,
    text: "You are customizing Business Central by using Visual Studio Code. You create a project that will extend Business Central. For testing purposes, you plan to add the following changes to the files: (1) Specify that page 27 must be opened after publishing. (2) Enable debugging. (3) Disable the capability to download the source code. You need to add the configurations to the JSON files. Which two configurations should you add? (Select TWO)",
    type: "multiple",
    choices: [
      "A. Set \"startupObjectId\": 27 on launch.json.",
      "B. In the \"resourceExposurePolicy\" tag, set \"allowDebugging\": true and \"allowDownloadingSource\": false on launch.json.",
      "C. Set \"startupObjectId\": 27 on app.json.",
      "D. In the \"resourceExposurePolicy\" tag, set \"allowDebugging\": true and \"allowDownloadingSource\": true on app.json.",
      "E. In the \"resourceExposurePolicy\" tag, set \"allowDebugging\": true and \"allowDownloadingSource\": false on app.json."
    ],
    correct: [0, 4],
    explanation: "Setting \"startupObjectId\": 27 on launch.json specifies that page 27 is opened after publishing/launching for debugging. The resourceExposurePolicy property belongs in app.json (not launch.json) and controls extension-level policies: \"allowDebugging\": true enables debugging and \"allowDownloadingSource\": false disables source code downloads. Option B is incorrect because resourceExposurePolicy goes in app.json, not launch.json. Option D is incorrect because it sets allowDownloadingSource to true (which would enable downloads, not disable them)."
  },
  {
    id: 545,
    text: "A company plans to change a field on the Resource Card page in a Base Application. You need to hide the field \"Unit Price\" from the Resource Card page. Which code snippet should you use?",
    type: "single",
    choices: [
      "A. addlast(\"Unit Price\") { Visible = false; }",
      "B. modify(\"Unit Price\") { Enabled = false; }",
      "C. addlast(\"Unit Price\") { Enabled = false; }",
      "D. modify(\"Unit Price\") { Visible = false; }"
    ],
    correct: [3],
    explanation: "To hide an existing field on a page in a page extension, you use the modify() keyword (which modifies an existing control) and set Visible = false. The addlast() keyword adds a new control and cannot be used to modify an existing field. Setting Enabled = false disables the field but keeps it visible — the requirement is to hide it, which requires Visible = false."
  },
  {
    id: 546,
    text: "A company is generating a detailed custom report. A user observes that the generated report dataset contains more Delivery Line records than expected for one specific Delivery Header. You need to generate a report that contains the accurate number of records. For each statement, select Yes if the statement is true:\n\nStatement 1: Configure the DataItemTableView property of the Delivery Header data item.\nStatement 2: Configure the RequestFilterFields property of both data items.\nStatement 3: Configure the DataItemLink property of the Delivery Line table.",
    type: "multiple",
    choices: [
      "YES — Configure the DataItemTableView property of the Delivery Header data item",
      "YES — Configure the RequestFilterFields property of both data items",
      "YES — Configure the DataItemLink property of the Delivery Line table"
    ],
    correct: [2],
    explanation: "Statement 3 is true (YES): The DataItemLink property on the Delivery Line data item links it to its parent Delivery Header (e.g., linking \"Document No.\" to the Header's \"No.\"). Without this link, Business Central returns all Delivery Line records rather than only those belonging to the current Delivery Header. Statement 1 is false (NO): DataItemTableView sets a static filter/sort but does not establish the parent-child link. Statement 2 is false (NO): RequestFilterFields controls which filter fields appear on the request page for users; it does not fix the data relationship between data items."
  },
  {
    id: 547,
    text: "You create a page with the PageType property set to RoleCenter. You navigate through the different sections of the page. You need to add functionalities to the page. What should you do?",
    type: "single",
    choices: [
      "A. Define actions in the area(reporting) before actions in the area(creation).",
      "B. Add an Activity page to display data in a graphical way.",
      "C. Define the navigation bar in the area(embedding).",
      "D. Add a source table on the Role Center page."
    ],
    correct: [2],
    explanation: "On a RoleCenter page, the navigation bar (the top-level menu links) is defined within the area(embedding) section. Activity pages display cues and statistics (not graphical data — charts are used for graphical display). A RoleCenter page does not have a source table. The order of area(reporting) vs area(creation) is not a relevant consideration for basic functionality."
  },
  {
    id: 548,
    text: "A company plans to optimize its permission sets. Permission Set A has: tabledata Job = RiMD. Permission Set B has: tabledata Job = IMD. You need to create Permission Set C as a composite of A and B, assign it to a user, and ensure the user has only read access to the Job table.\n\nSolution: Set the IncludedPermissionSets property to Permission Set A and the ExcludedPermissionSets property to Permission Set B.\n\nDoes the solution meet the goal?",
    type: "single",
    choices: [
      "A. Yes",
      "B. No"
    ],
    correct: [0],
    explanation: "Yes — this solution meets the goal. Permission Set A grants RiMD (Read, insert, Modify, Delete). Permission Set B grants IMD (Insert, Modify, Delete — no Read). By including Permission Set A (which has Read) and excluding Permission Set B (which has IMD but no Read), the resulting Permission Set C retains only the Read (R) permission from A, with the Insert/Modify/Delete permissions being excluded by the ExcludedPermissionSets. The user ends up with only read access to the Job table."
  },
  {
    id: 549,
    text: "A company plans to optimize its permission sets. Permission Set A has: tabledata Job = RiMD. Permission Set B has: tabledata Job = IMD. You need to create Permission Set C as a composite of A and B, assign it to a user, and ensure the user has only read access to the Job table.\n\nSolution: Set the ExcludedPermissionSets property to Permission Set B.\n\nDoes the solution meet the goal?",
    type: "single",
    choices: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    explanation: "No — this solution does not meet the goal. The ExcludedPermissionSets property only removes permissions that are defined in the excluded set. Permission Set B has IMD (no Read). Excluding B only removes I, M, D permissions. However, without including any permission set (like A), the base set has no permissions at all. If Permission Set C only excludes B without including A, the user may not even have Read access. The solution is incomplete — it does not include Permission Set A to provide the Read permission."
  },
  {
    id: 550,
    text: "A company plans to optimize its permission sets. Permission Set A has: tabledata Job = RiMD. Permission Set B has: tabledata Job = IMD. You need to create Permission Set C as a composite of A and B, assign it to a user, and ensure the user has only read access to the Job table.\n\nSolution: Set the IncludedPermissionSets property to Permission Set B and the ExcludedPermissionSets property to Permission Set A.\n\nDoes the solution meet the goal?",
    type: "single",
    choices: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    explanation: "No — this solution does not meet the goal. Including Permission Set B grants IMD (Insert, Modify, Delete — no Read). Excluding Permission Set A would attempt to remove RiMD permissions, but since A is excluded and B is included, the effective permissions would be IMD (the permissions from B). The user would have Insert, Modify, and Delete access but no Read access — the opposite of the requirement for read-only access."
  },
  {
    id: 551,
    text: "A company uses Business Central. Users in DepartmentA are assigned a base application permission set. The company observes that DepartmentA can display a critical page that should be unavailable to the department. You need to resolve the system control issue. What should you do?",
    type: "single",
    choices: [
      "A. Create a different role center page that excludes the critical page and assign it to the users.",
      "B. Create a permission set object that excludes the critical table and assign it to the users.",
      "C. Create an entitlement object that excludes the base application permission set.",
      "D. Extend the base application permission set and configure the IncludedPermissionSets property.",
      "E. Extend the base application permission set and configure the ExcludedPermissionSets property."
    ],
    correct: [4],
    explanation: "To remove access to a specific page/table that is included in a base application permission set, you extend the permission set and use the ExcludedPermissionSets property to exclude the permissions that grant access to that critical page. The ExcludedPermissionSets property allows you to create a composite permission set that takes the base permissions but removes specific ones. Simply changing the role center does not remove security access. Creating a new permission set object or entitlement object is a more complex approach than extending the existing one."
  },
  {
    id: 552,
    text: "A company plans to submit an extension to AppSource. You need to ensure that the application meets the technical requirements before submitting it for validation. Which three actions should you perform? (Select THREE)",
    type: "multiple",
    choices: [
      "A. Ensure the .app file is digitally signed.",
      "B. Use the OnBeforeCompanyOpen event for improved sign-in time.",
      "C. Use data classification on all tables and extension fields.",
      "D. Include extension translation files with the submission.",
      "E. Code all date fields in the mm-dd-yyyy format."
    ],
    correct: [0, 2, 3],
    explanation: "AppSource technical requirements include: (A) The .app file must be digitally signed to verify authenticity. (C) All tables and fields must have proper data classification (e.g., CustomerContent, SystemMetadata) for GDPR compliance. (D) Translation files must be included to support multiple languages. Option B is incorrect because OnBeforeCompanyOpen is not a recommended AppSource requirement — it can cause performance issues. Option E is incorrect because Business Central handles date formatting automatically based on locale; hardcoding mm-dd-yyyy would be incorrect for non-US regions."
  },
  {
    id: 553,
    text: "A company creates a Business Central app and a table named MyTable to store records when sales orders are posted. Users report: permission errors related to MyTable, inability to post sales orders since installing the new app, and inability to access the list page in MyTable. You need to resolve the user issues without creating new permission sets. You must use the principle of least privilege.\n\nSolution: Assign a SUPER permission set.\n\nDoes the solution meet the goal?",
    type: "single",
    choices: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    explanation: "No — this solution does not meet the goal. While assigning SUPER would resolve the permission errors, it violates the principle of least privilege, which requires granting only the minimum permissions necessary. SUPER grants all permissions to everything in Business Central. The correct approach is to use the InherentEntitlements or InherentPermissions properties on the table or page objects to automatically grant the necessary permissions to users who have access to the related objects, without requiring explicit permission set assignments."
  },
  {
    id: 554,
    text: "You create a page with the PageType property set to RoleCenter. You navigate through the different sections of the page. You need to add functionalities to the page. What should you do?",
    type: "single",
    choices: [
      "A. Define an action with the plus icon in the area(creation).",
      "B. Add an Activity page to display data in a graphical way.",
      "C. Create headlines using the Cuegroup control.",
      "D. Add a source table on the Role Center page."
    ],
    correct: [0],
    explanation: "On a RoleCenter page, the area(creation) section contains quick-create actions displayed with a plus (+) icon, enabling users to quickly create new records. Activity pages display KPI cues and metrics, not graphical data (charts are used for that). Headlines use a dedicated headline page part, not the Cuegroup control. A RoleCenter page cannot have a source table."
  },
  {
    id: 555,
    text: "You create a page with the PageType property set to RoleCenter. You navigate through the different sections of the page. You need to add functionalities to the page. What should you do?",
    type: "single",
    choices: [
      "A. Define actions in the area(reporting) before actions in the area(creation).",
      "B. Define the navigation menu in the area(processing).",
      "C. Define the navigation bar in the area(embedding).",
      "D. Integrate Charts to display information in cues."
    ],
    correct: [2],
    explanation: "On a RoleCenter page, the navigation bar (top-level navigation links and menus) is defined within the area(embedding) section. The area(processing) is for actions that process data, not for navigation menus. Charts are embedded as page parts (not in cues — cues display numeric KPIs). The order of area sections does not determine functionality."
  },
  {
    id: 556,
    text: "You create a page with the PageType property set to RoleCenter. You navigate through the different sections of the page. You need to add functionalities to the page. What should you do?",
    type: "single",
    choices: [
      "A. Define actions in the area(reporting) before actions in the area(creation).",
      "B. Add an Activity page to display data in a graphical way.",
      "C. Define the navigation bar in the area(embedding).",
      "D. Integrate Charts to display information in cues."
    ],
    correct: [2],
    explanation: "On a RoleCenter page, the navigation bar is defined within the area(embedding) section. Activity pages show cue-based KPIs and statistics, not graphical/chart data. Charts are separate page parts embedded via area(rolecenter). Action ordering between area(reporting) and area(creation) is not a functional requirement."
  },
  {
    id: 557,
    text: "You are creating a new Business Central report. You plan to use triggers and functions to dynamically create a dataset and control the report behavior. For each requirement, which trigger or function should you use?\n\nRequirement 1: Runs when the report is loaded.\nRequirement 2: Runs when the data item has been iterated for the last time.\nRequirement 3: Use this function to skip the rest of the report.",
    type: "multiple",
    choices: [
      "OnInitReport — runs when the report is loaded",
      "OnPreReport — runs when the report is loaded",
      "OnPostReport — runs when the report is loaded",
      "OnPostDataItem — runs when the data item has been iterated for the last time",
      "OnPreDataItem — runs when the data item has been iterated for the last time",
      "OnAfterGetRecord — runs when the data item has been iterated for the last time",
      "CurrReport.Quit() — skips the rest of the report",
      "CurrReport.Break() — skips the rest of the report",
      "CurrReport.Skip() — skips the rest of the report"
    ],
    correct: [0, 3, 6],
    explanation: "OnInitReport fires when the report is first loaded/initialized, before the request page is shown. This is used to set up initial values. OnPostDataItem fires after the last iteration of a data item, making it the correct trigger for post-processing after all records have been processed. CurrReport.Quit() terminates the entire report execution immediately and skips all remaining processing. CurrReport.Skip() skips the current record only. CurrReport.Break() exits the current data item loop."
  },
  {
    id: 558,
    text: "A company plans to use the AL object model in Business Central to extend the Base Application. You need to extend the objects. Which two objects can you extend? (Select TWO)",
    type: "multiple",
    choices: [
      "A. Codeunit",
      "B. Report",
      "C. Query",
      "D. API page",
      "E. Enum"
    ],
    correct: [1, 4],
    explanation: "In Business Central AL, you can create extension objects for: Report (report extension), Enum (enum extension), Table (table extension), Page (page extension), and Report (report extension). Codeunits cannot be directly extended — you can subscribe to their events instead. Queries cannot be extended. API pages cannot be extended. Report and Enum are the correct answers from the given options."
  },
  {
    id: 559,
    text: "You create a page with the PageType property set to RoleCenter. You navigate through the different sections of the page. You need to add functionalities to the page. What should you do?",
    type: "single",
    choices: [
      "A. Define an action with the plus icon in the area(creation).",
      "B. Create headlines using the Cuegroup control.",
      "C. Define the navigation bar in the area(processing).",
      "D. Integrate Charts to display information in cues."
    ],
    correct: [0],
    explanation: "The area(creation) on a RoleCenter page is designed for quick-create actions that appear with a plus (+) icon, allowing users to create new records quickly. Headlines use a dedicated HeadlinePart page type, not the Cuegroup control (Cuegroup is for KPI tiles). The navigation bar belongs in area(embedding), not area(processing). Charts are page parts embedded in the RoleCenter layout, not in cues."
  },
  {
    id: 560,
    text: "You develop a table named Contoso Setup and a related page. You plan to use No. Series to automatically assign a unique number to data entries. No. Series is set up on the \"Vendor Nos.\" field of the Contoso Setup table. You need to apply the No. Series design pattern in the OnInsert() trigger. Which is the correct order of the four code segments?",
    type: "single",
    choices: [
      "Order: 6, 1, 4, 5 — Get setup record, then get next number from No. Series, validate the No. field, then call Modify",
      "Order: 1, 6, 4, 5 — Get next number first, then get setup, validate No., then Modify",
      "Order: 6, 4, 1, 5 — Get setup, validate No., get next number, then Modify",
      "Order: 1, 4, 6, 5 — Get next number, validate No., get setup, then Modify"
    ],
    correct: [0],
    explanation: "The correct No. Series implementation order in OnInsert() is: (6) Get the setup record (ContosoSetup.Get()) to retrieve the No. Series code, (1) Call NoSeriesMgt.InitSeries or GetNextNo to get the next available number from the series defined in setup, (4) Validate the \"No.\" field with the generated number (Validate(\"No.\", generatedNumber)), (5) Modify the record or continue with the insert. This follows the standard Business Central No. Series pattern used throughout the Base Application."
  },
  {
    id: 561,
    text: "You have a column in a report. You receive the following CodeCop warning: \"Field 'Home Page' is marked for removal. Reason: Field length will be increased to 255. AL(AL0432)\"\n\nFor each statement, select Yes if true:\n\nStatement 1: Create a custom Home Page field for the Company Information table.\nStatement 2: Enclose Line 1 within #pragma warning disable AL0432 ... #pragma warning restore AL0432.\nStatement 3: Disable the AL0432 rule in the ruleset.\nStatement 4: Remove or comment the column and then put it back after the field length is increased.",
    type: "multiple",
    choices: [
      "YES — Create a custom Home Page field for the Company Information table",
      "YES — Enclose the code within #pragma warning disable/restore AL0432",
      "YES — Disable the AL0432 rule in the ruleset",
      "YES — Remove or comment the column and put it back after the field length is increased"
    ],
    correct: [1, 2],
    explanation: "Statement 1 is false (NO): Creating a custom field is unnecessary overhead and does not address the warning properly. Statement 2 is true (YES): Using #pragma warning disable AL0432 / #pragma warning restore AL0432 suppresses the specific warning for just that code block, which is valid when the field is still needed temporarily. Statement 3 is true (YES): Disabling the AL0432 rule in the project ruleset file prevents the warning from appearing for all occurrences in the app. Statement 4 is false (NO): Removing the column would break the report; you cannot simply remove production functionality while waiting for a framework update."
  },
  {
    id: 562,
    text: "A company has a test application. A user observes the following error messages when running the test: 'Unhandled UI: Message' and 'Unhandled UI: Confirm'. You need to resolve the errors. Which action should you take?",
    type: "single",
    choices: [
      "A. Create a separate test codeunit that has MessageHandler and ConfirmHandler methods.",
      "B. Add the [HandlerFunctions('MessageHandler,ConfirmHandler')] attribute to the test method and implement both handlers in the same codeunit.",
      "C. Set the TestPermissions property to Disabled on the test codeunit.",
      "D. Use the LibraryVariableStorage to queue the expected message and confirm responses."
    ],
    correct: [1],
    explanation: "When a test encounters 'Unhandled UI: Message' and 'Unhandled UI: Confirm' errors, it means the test triggered Message() and Confirm() dialogs that were not handled. The solution is to add the [HandlerFunctions('MessageHandler,ConfirmHandler')] attribute to the test function and implement corresponding handler methods (with the [MessageHandler] and [ConfirmHandler] attributes) within the same test codeunit. This instructs the test framework to intercept those UI calls and route them to the handlers."
  },
  {
    id: 563,
    text: "You have a custom app. A warning for the rule code named AAOXYZ appears in multiple app objects. You need to change the severity of the rule from Warning to Info for only the current app. Which three actions should you perform? (Select THREE)",
    type: "multiple",
    choices: [
      "A. Change the \"al.enableCodeAnalysis\" property value to \"false\".",
      "B. Open the Visual Studio Code user settings.json file.",
      "C. Add the \"al.ruleSetPath\" property with a path to the ruleset.json file.",
      "D. Open the Visual Studio Code project settings.json file.",
      "E. Add the following ruleset object to the ruleset.json file: { \"id\": \"AAOXYZ\", \"action\": \"Info\" } to the \"rules\" array.",
      "F. Add the following ruleset object to the ruleset.json file: { \"id\": \"AAOXYZ\", \"action\": \"Hidden\" } to the \"rules\" array."
    ],
    correct: [2, 3, 4],
    explanation: "To change a rule severity for only the current app: (C) Add the 'al.ruleSetPath' property in the project settings.json pointing to a custom ruleset.json file — this scopes the ruleset to the project. (D) Open the Visual Studio Code project settings.json (the .vscode/settings.json file) to configure project-specific settings. (E) Add the rule override with \"action\": \"Info\" to the ruleset's rules array. Option B (user settings) would apply globally to all projects, not just the current app. Option A disables all code analysis. Option F uses 'Hidden' which suppresses the warning entirely rather than changing it to Info."
  },
  {
    id: 564,
    text: "You plan to debug a report extension for the Standard Sales - Invoice report. You created Report Extension \"Ext Standard Sales - Invoice\" with ID 50100 and added code in the VATAmountLine section. The client says that the value of the NewTotalVATBaseLCY column is incorrect. Which four actions should you take to debug the issue, in the correct order?",
    type: "single",
    choices: [
      "Order: 1, 3, 4, 6 — Set breakpoint, start debugger (Attach), trigger the report, inspect the variable",
      "Order: 3, 1, 4, 6 — Start debugger first, set breakpoint, trigger report, inspect",
      "Order: 1, 4, 3, 6 — Set breakpoint, trigger report, start debugger, inspect",
      "Order: 6, 1, 3, 4 — Inspect, set breakpoint, start debugger, trigger report"
    ],
    correct: [0],
    explanation: "The correct debugging order for a report extension is: (1) Set a breakpoint on the line in the report extension where NewTotalVATBaseLCY is calculated, (3) Start the debugger in Visual Studio Code using the Attach to Client debug configuration, (4) In Business Central, run/trigger the Standard Sales - Invoice report to hit the breakpoint, (6) Inspect the NewTotalVATBaseLCY variable value in the debugger to identify the incorrect calculation. This is the standard AL debugging workflow."
  },
  {
    id: 565,
    text: "You have an app with the Application Insights 1 connection string specified in app.json. You create a custom telemetry event using LogMessage with TelemetryScope::All. You publish the app to a customer environment that has a specified Application Insights 2 connection string. The customer does not want the event to be displayed in Application Insights 2. You need to ensure the event is displayed only in Application Insights 1. What should you fix?",
    type: "single",
    choices: [
      "A. Change the TelemetryScope parameter to ExtensionPublisher.",
      "B. Remove the Application Insights 2 connection string from the customer environment.",
      "C. Change the Verbosity parameter to Normal.",
      "D. Remove the Application Insights 1 connection string from the app.json file of the app."
    ],
    correct: [0],
    explanation: "TelemetryScope::All sends telemetry to both the extension publisher's Application Insights (defined in app.json) AND the environment/tenant's Application Insights. Changing TelemetryScope to ExtensionPublisher sends the telemetry only to the Application Insights instance configured in the extension's app.json (Application Insights 1), not to the customer environment's Application Insights 2. This is the correct way to control telemetry destination."
  },
  {
    id: 566,
    text: "You develop an extension for the newest release of Business Central online. You have a customer who has an earlier on-premises release of Business Central. The extension must be deployed to the customer's environment. You need to deploy the extension to the older Business Central version. What should you do?",
    type: "single",
    choices: [
      "A. Replace the latest version of the AL Language extension with the needed earlier version.",
      "B. Uninstall the AL Language extension and install the AL Language extension from the Business Central on-premises installation pack.",
      "C. Change the Runtime property value of the app.json file of the app."
    ],
    correct: [0],
    explanation: "To compile and deploy an extension for an older version of Business Central, you need to use the AL Language extension that matches that older version. Replacing the AL Language VS Code extension with the version that corresponds to the target older Business Central release allows you to compile against the correct symbols and runtime. Simply changing the Runtime property in app.json is insufficient — you need the matching compiler/AL extension version."
  },
  {
    id: 567,
    text: "A company plans to optimize its permission sets. Permission Set A has: tabledata Job = RiMD. Permission Set B has: tabledata Job = IMD. You need to create Permission Set C as a composite of A and B, assign it to a user, and ensure the user has only read access to the Job table.\n\nSolution: Set the ExcludedPermissionSets property to Permission Set A.\n\nDoes the solution meet the goal?",
    type: "single",
    choices: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    explanation: "No — this solution does not meet the goal. Setting only ExcludedPermissionSets to Permission Set A without including any permission set means the composite Permission Set C has no base permissions to start from. Excluding A (which has RiMD) would attempt to remove those permissions from nothing, leaving the user with no access at all. The solution needs both IncludedPermissionSets (to grant some permissions) and ExcludedPermissionSets (to remove unwanted ones) to achieve read-only access."
  },
  {
    id: 568,
    text: "You plan to call a web service by using the HttpClient data type from a Business Central AL extension. You must implement: (1) The web service must authenticate the client with a certificate. (2) The certificate must include a password. (3) The password must be hidden when you debug the code. You need to include the certificate in the web service call. Which instruction should you use?",
    type: "single",
    choices: [
      "A. HttpClient.AddCertificate(Certificate: SecretText, Password: SecretText);",
      "B. HttpClient.AddCertificate(Certificate: Blob, Password: SecretText);",
      "C. HttpClient.AddCertificate(Password: SecretText);",
      "D. HttpClient.AddCertificate(Certificate: Text, Password: Text);"
    ],
    correct: [0],
    explanation: "The HttpClient.AddCertificate method accepts the certificate as SecretText and the password as SecretText. Using SecretText for both parameters ensures that the certificate content and password are protected and will not be exposed in debugger watches or AL logs, satisfying the requirement that the password must be hidden during debugging. Using Text for the password (option D) would expose it in the debugger. The Certificate must be SecretText (not Blob)."
  },
  {
    id: 569,
    text: "You are exporting item data with an XMLport. Requirements: (1) Show filters for export on the request page. (2) Export the data in comma-separated format. You need to complete the XMLport configuration. Which two values should you configure? (Select TWO — one per requirement)",
    type: "multiple",
    choices: [
      "Direction = Export — to show filters for export on the request page",
      "Direction = Both — to show filters for export on the request page",
      "Direction = Import — to show filters for export on the request page",
      "FieldSeparator = ',' — to export data in comma-separated format",
      "FieldSeparator = ';' — to export data in comma-separated format",
      "Format = VariableText and FieldSeparator = ',' — to export data in comma-separated format"
    ],
    correct: [1, 5],
    explanation: "Setting Direction to Both allows the XMLport to be used for both import and export, which enables the request page filter options to appear for export operations (Direction = Export alone may not show all filter options). Setting Format to VariableText changes the XMLport output to text format, and setting FieldSeparator to ',' produces comma-separated (CSV) output. These two settings together fulfill both requirements."
  },
  {
    id: 570,
    text: "You are developing a codeunit for a company that uses Business Central. The codeunit must run only during installation of an extension package. You need to complete the codeunit definition. Which SubType and trigger should you use? (Select TWO — one per requirement)",
    type: "multiple",
    choices: [
      "SubType = Install — runs only during extension installation",
      "SubType = Upgrade — runs only during extension installation",
      "SubType = Normal — runs only during extension installation",
      "Trigger: OnInstallAppPerCompany — runs when the extension is installed per company",
      "Trigger: OnUpgradePerCompany — runs when the extension is installed per company",
      "Trigger: OnCheckPreconditionsPerCompany — runs when the extension is installed per company"
    ],
    correct: [0, 3],
    explanation: "To create a codeunit that runs only during extension installation: set SubType to Install (this designates it as an install codeunit, executed only when the extension is first installed). The OnInstallAppPerCompany trigger fires once per company during the installation process, making it the correct trigger for company-specific installation logic. SubType = Upgrade is for upgrade codeunits that run during extension upgrades, not fresh installations."
  },
  {
    id: 571,
    text: "You need to use a query data type to retrieve required data. How should you complete the code?\n\nif QueryA.???()\nthen begin\n  while QueryA.???() do begin\n    // process records\n  end;\nend;",
    type: "multiple",
    choices: [
      "First blank: Open — opens and executes the query",
      "First blank: TopNumberOfRows — opens and executes the query",
      "First blank: Read — opens and executes the query",
      "Second blank: Read — iterates through the query results",
      "Second blank: Open — iterates through the query results",
      "Second blank: Close — iterates through the query results"
    ],
    correct: [0, 3],
    explanation: "A query object in AL must be opened with Open() before records can be read. Open() returns true if the query executes successfully. Then Read() is used in the while loop to iterate through each result row, returning true as long as there are more rows to read. Close() should be called after the loop to release resources. TopNumberOfRows is a method to limit rows, not to open the query."
  },
  {
    id: 572,
    text: "You have a query object named Items Query. You write code using an Items Query query variable. You need to export the Items Query query data to a file. Which SaveAs function should you use?",
    type: "single",
    choices: [
      "A. SaveAsCsv",
      "B. SaveAsHtml",
      "C. SaveAsExcel",
      "D. SaveAsJson"
    ],
    correct: [0],
    explanation: "Query objects in Business Central AL support SaveAsCsv() to export query results to a CSV (comma-separated values) file. This is the standard method for exporting query data to a file format. SaveAsXml and SaveAsJson are also available for XML and JSON formats respectively, but SaveAsCsv is the correct method for exporting to a file in this context based on the exam answer."
  },
  {
    id: 573,
    text: "A company is implementing Business Central with the following report requirements: (1) The report must be loaded for users in a specific location only. (2) Data entered in the request page must be validated before any further processing. (3) A filter must be defined for users based on the Department field defined in user setup. Which triggers should you use for each requirement? (Select THREE — one per requirement)",
    type: "multiple",
    choices: [
      "OnInitReport — report must be loaded for users in a specific location only",
      "OnPreReport — report must be loaded for users in a specific location only",
      "OnAfterGetRecord — report must be loaded for users in a specific location only",
      "OnInitReport — validate data before processing",
      "OnPreReport — validate data before processing",
      "OnPreDataItem — validate data before processing",
      "OnInitReport — define a filter based on Department field in user setup",
      "OnPreReport — define a filter based on Department field in user setup",
      "OnPreDataItem — define a filter based on Department field in user setup"
    ],
    correct: [0, 4, 8],
    explanation: "OnInitReport fires when the report is first loaded/initialized (before the request page), making it ideal for checking user location and conditionally loading the report. OnPreReport fires after the request page is closed and just before data processing begins — this is the correct place to validate data entered on the request page. OnPreDataItem fires before each data item iteration and is the correct place to programmatically set filters (like Department filter from user setup) before records are read."
  },
  {
    id: 574,
    text: "A developer creates a profile for a shop supervisor and adds customizations. Review the profile and customization code, then for each statement select Yes if true:\n\nStatement 1: The Part Time Shop Supervisor profile will be applied only to users with \"Register Time\" = true on User Setup.\nStatement 2: Variables, procedures, and triggers cannot be added on page customization objects.\nStatement 3: Line 10 should use 'extends' instead of 'customizes'.\nStatement 4: In line 18, \"Unit Cost\" will be moved after \"Costing Method\".",
    type: "multiple",
    choices: [
      "YES — The profile will be applied only to users with Register Time = true",
      "YES — Variables, procedures, and triggers cannot be added on page customization objects",
      "YES — Line 10 should use extends instead of customizes",
      "YES — Unit Cost will be moved after Costing Method in line 18"
    ],
    correct: [1, 3],
    explanation: "Statement 1 is false (NO): Profile objects do not have a condition based on User Setup fields like 'Register Time'. Profiles are assigned to users manually or via configuration, not automatically based on User Setup fields. Statement 2 is true (YES): Page customization objects are restricted — you can only modify layout and visibility, not add code (variables, procedures, triggers are not allowed). Statement 3 is false (NO): 'customizes' is the correct keyword for page customization objects; 'extends' is used for page extension objects. Statement 4 is true (YES): The moveafter(\"Unit Cost\"; \"Costing Method\") call moves \"Unit Cost\" to appear after the \"Costing Method\" field."
  },
  {
    id: 575,
    text: "You create a procedure to check if a purchase order has lines. The procedure returns false for purchase order P0000 even though it has purchase lines.\n\nThe code uses:\n- Line 05: PurchaseLine.SetRange(\"Document Type\", PurchaseHeader.\"Document Type\")\n- Line 06: PurchaseLine.SetRange(\"No.\", PurchaseHeader.\"No.\")\n- Line 07: exit(not PurchaseLine.IsEmpty())\n\nFor each statement, select Yes if true:\nStatement 1: Add Clear(PurchaseLine) before line 01.\nStatement 2: Add PurchaseLine.SetFilter('Line No.', '>0') after line 06.\nStatement 3: Change the filter on line 06 from a \"No.\" field to a \"Document No.\" field.\nStatement 4: Remove \"not\" in line 07.",
    type: "multiple",
    choices: [
      "YES — Add Clear(PurchaseLine) before line 01",
      "YES — Add PurchaseLine.SetFilter('Line No.', '>0') after line 06",
      "YES — Change the filter on line 06 from \"No.\" field to \"Document No.\" field",
      "YES — Remove \"not\" in line 07"
    ],
    correct: [2],
    explanation: "Statement 3 is true (YES): The Purchase Line table uses \"Document No.\" (not \"No.\") as the field that links to the Purchase Header \"No.\". Filtering on \"No.\" of the Purchase Line table would be filtering on the line's own \"No.\" field which is not the document reference field. The correct filter should be PurchaseLine.SetRange(\"Document No.\", PurchaseHeader.\"No.\"). Statement 1 is false: Clear() on a Record variable resets it but doesn't affect filters in a meaningful way for this bug. Statement 2 is false: Line No. > 0 is not the relevant fix. Statement 4 is false: Removing 'not' would reverse the logic (returning true when empty)."
  },
  {
    id: 576,
    text: "A company is setting up a sandbox environment. You observe these issues in Visual Studio Code: (1) When you open the User Settings window, no AL commands are available. (2) In the Problems tab, the error 'The target page Customer List for the extension object is not found' is displayed. Which solution resolves each issue?",
    type: "single",
    choices: [
      "Issue 1: Install the AL Language extension; Issue 2: Download symbols from the correct server",
      "Issue 1: Install the AL Language extension; Issue 2: Change the target page name in the extension object",
      "Issue 1: Reload Visual Studio Code; Issue 2: Download symbols (AL: Download Symbols) so the page is found",
      "Issue 1: Reload the AL project; Issue 2: Add the page to the sandbox environment"
    ],
    correct: [2],
    explanation: "Issue 1 (no AL commands in User Settings): The solution is to reload/restart Visual Studio Code or ensure the AL Language extension is properly activated — the AL commands become available after the extension is loaded. Issue 2 (target page not found): This error typically occurs when symbols have not been downloaded or are outdated. Running 'AL: Download Symbols' synchronizes the local symbols with the target server, making the Customer List page available to the extension object. These correspond to solutions 3 and 2 respectively in the exam context."
  },
  {
    id: 577,
    text: "A company has an on-premises Business Central instance named TEST. The instance uses Windows authorization and a developer services port of 7149. Visual Studio Code is installed on the same server. You create a new AL project but cannot download the symbols. The launch.json contains: server: http://localhost, serverInstance: DEV, authentication: Windows. You need to download the symbols. Which two actions should you perform? (Select TWO)",
    type: "multiple",
    choices: [
      "A. Check which server the instance is installed on and replace http://localhost with the correct IP address.",
      "B. Add the \"port\": 7149 parameter to launch.json.",
      "C. Change the \"name\" parameter to TEST.",
      "D. Change the \"authentication\" parameter to UserPassword.",
      "E. Change the \"serverInstance\" parameter to TEST."
    ],
    correct: [1, 4],
    explanation: "Two issues prevent symbol download: (B) The developer services port 7149 is not specified in launch.json — without the correct port, VS Code cannot connect to the Business Central server. Add \"port\": 7149 to launch.json. (E) The serverInstance is set to 'DEV' but the actual instance name is 'TEST' — the serverInstance must match the actual Business Central server instance name. The server (localhost) and authentication (Windows) are already correctly configured since VS Code is on the same server."
  },
  {
    id: 578,
    text: "You are creating a test codeunit for a company that uses Business Central. The company requires the following list of choices while posting a sales order: Ship, Invoice, Ship & Invoice. You must create a test codeunit that automatically selects one of these options. You need to create the test codeunit. Which handler should you use?",
    type: "single",
    choices: [
      "A. SendNotificationHandler",
      "B. ConfirmHandler",
      "C. StrMenuHandler",
      "D. MessageHandler"
    ],
    correct: [2],
    explanation: "StrMenuHandler is the specific handler type required for intercepting StrMenu() calls that present a list of string options (Ship, Invoice, Ship & Invoice). This question asks which specific handler to use — unlike a conceptual question about handler methods in general, this tests knowledge of the specific handler attribute [StrMenuHandler]. When code under test calls StrMenu(), the StrMenuHandler intercepts the dialog and programmatically selects an option. MessageHandler handles Message() dialogs, ConfirmHandler handles Confirm() dialogs, and SendNotificationHandler handles notification events."
  }
];
