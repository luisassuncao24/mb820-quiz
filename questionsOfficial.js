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
    explanation: "Only Statement 2 is true (YES): The Content-Type should be 'application/json' since the request sends JSON data, not 'text/plain'. Statement 1 is false (NO): The response should be read from the response message's content (ResponseMessage.Content.ReadAs), not from the request Content object — however this is a separate concern from the Content-Type fix and the answer key marks it as NO because ResponseMessage is an HttpResponseMessage and its Content property's ReadAs is the correct approach, which is not what line 16 does. Statement 3 is false (NO): The Authorization header is correctly set per-request via Headers.Add after GetHeaders, which is the valid approach. Statement 4 is false (NO): WriteFrom correctly writes the request body text into the HttpContent object; replacing it with ReadAs would attempt to read from an empty content object."
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
  }
];
