// MB-820: Case Studies — Scenario-based practice test cases

const TEST_CASES = [
  {
    key: "alpine",
    label: "Alpine Case Study",
    description: "13 scenario-based questions from the Alpine Ski House case study, covering housekeeping, POS integration, non-conformities, and custom API design in Business Central.",
    scenario: "Alpine Ski House is a ski resort that has commissioned a Business Central extension called Housekeeping Management to digitise their resort operations. The extension tracks room incidents and non-conformities raised against vendor deliveries (linked to purchase receipts), provides a Housekeeping Role Center for staff, and integrates with on-site POS (Point of Sale) terminals to pull ticket sales data into Business Central. An external Property Management System (PMS) provider needs a custom REST API to read room availability, and a canvas app built on Power Apps consumes the same APIs. The development team must also implement a proper Install codeunit for first-time setup, a Singleton configuration table, picture upload/download for room incidents, and an auto-populated Room Incident table.",
    questions: [
      {
        id: 301,
        context: "The Non-conformity page must include a comments field where employees can describe vendor quality issues in detail, supporting rich multi-line text.",
        text: "You need to define the properties of the comments field of the Non-conformity page. Which two selections correctly configure this field? (Select ALL that apply)",
        type: "multiple",
        choices: [
          "MultiLine = True",
          "MultiLine = False",
          "ExtendedDataType = RichContent",
          "ExtendedDataType = LongContent",
          "NotBlank = True",
          "DataType = RichContent"
        ],
        correct: [0, 2],
        explanation: "The comments field should have MultiLine = True to allow multi-line text input, and ExtendedDataType = RichContent to support rich text formatting with the extended data type property."
      },
      {
        id: 302,
        context: "The Non-conformity table tracks vendor quality issues. The Non-conformity Number uses a formatted alphanumeric code (e.g., NC24-001), and the Non-conformity Date records only the date the issue was identified (no time component needed).",
        text: "You need to define the data types for the fields of the Non-conformity table. Which two data types should you use? (Select TWO)",
        type: "multiple",
        choices: [
          "Integer for the Non-conformity Number field",
          "DateTime for the Non-conformity Date field",
          "Char for the Non-conformity Number field",
          "Date for the Non-conformity Date field",
          "Code for the Non-conformity Number field"
        ],
        correct: [3, 4],
        explanation: "The Non-conformity Number field uses Code (alphanumeric, suitable for formatted values like NC24-001). The Non-conformity Date field uses Date — only the date is needed, not the time component (which DateTime would add)."
      },
      {
        id: 303,
        context: "The Housekeeping extension has three UI requirements: show insights in the Housekeeping Role Center, display additional Room information as a side panel, and provide a first-time setup wizard.",
        text: "You need to select the appropriate page types for the reporting and setup requirements. Which three selections correctly match each requirement? (Select THREE)",
        type: "multiple",
        choices: [
          "Requirement 1 — Display relevant insights in the Housekeeping Role Center: HeadLinePart",
          "Requirement 1 — Display relevant insights in the Housekeeping Role Center: CardPart",
          "Requirement 2 — Display additional information for the Room table: CardPart",
          "Requirement 2 — Display additional information for the Room table: FactBox",
          "Requirement 3 — Configure the first installation: NavigatePage",
          "Requirement 3 — Configure the first installation: StandardDialog"
        ],
        correct: [0, 2, 4],
        explanation: "HeadLinePart is the correct type for showing headline insights in a Role Center. CardPart is used to show related additional information for a table (as a FactBox panel). NavigatePage is the setup wizard pattern used for first-run installation experiences."
      },
      {
        id: 304,
        context: "The Room Incident page must allow staff to attach and download photos of room incidents. Images are stored in a Media field and must be retrieved using a TempBlob approach with stream operations.",
        text: "You need to download a stored picture from the Room Incident page. Which three code segment completions are correct? (Select THREE)",
        type: "multiple",
        choices: [
          "First call: TempBlob.CreateOutStream(IncidentOutStream)",
          "First call: TempBlob.CreateInStream(IncidentInStream)",
          "Second call: TempBlob.CreateInStream(IncidentInStream)",
          "Second call: TempBlob.CreateOutStream(IncidentOutStream)",
          "Third call: DownloadFromStream(IncidentInStream, 'Download Incident Picture', '', ImageFilter, FileName)",
          "Third call: DownloadFromStream(IncidentOutStream, 'Download Incident Picture', '', ImageFilter, FileName)"
        ],
        correct: [0, 2, 4],
        explanation: "To download a Media field: first create an OutStream on TempBlob to copy the image data into it, then create an InStream on the same TempBlob to read from it, then pass that InStream to DownloadFromStream so the user can save the file."
      },
      {
        id: 305,
        context: "The POS terminal API codeunit reads data from external POS endpoints. It must be isolated from the rest of the extension (internal access), and it reads directly from the POS endpoints without needing a terminal identifier passed in.",
        text: "You need to create the codeunit to read the POS terminal APIs. Which two code segment completions are correct? (Select TWO)",
        type: "multiple",
        choices: [
          "Access = Internal",
          "Access = Public",
          "Permissions = TableData \"POS Information\" = rdx",
          "Permissions = TableData \"POS Information\" = RMDX",
          "procedure readAPI()",
          "procedure readAPI(PosNo: Integer)"
        ],
        correct: [0, 4],
        explanation: "Access = Internal restricts the codeunit so it cannot be called from outside the extension, isolating the task-specific code. The procedure readAPI() takes no parameters because it reads directly from the POS terminal API endpoints without needing an identifier passed in."
      },
      {
        id: 306,
        context: "The Install codeunit runs once when the Housekeeping app is first installed. It must retrieve the current module version and perform an isolated task that cannot be called from outside the codeunit.",
        text: "You need to create the Install codeunit for the Housekeeping app. Which two selections correctly complete the requirements? (Select TWO)",
        type: "multiple",
        choices: [
          "Requirement 1 — Data type to obtain the module version: ModuleInfo",
          "Requirement 1 — Data type to obtain the module version: ModuleDependencyInfo",
          "Requirement 1 — Data type to obtain the module version: SessionInformation",
          "Requirement 2 — Start of the isolated task procedure declaration: local procedure",
          "Requirement 2 — Start of the isolated task procedure declaration: global procedure",
          "Requirement 2 — Start of the isolated task procedure declaration: procedure"
        ],
        correct: [0, 3],
        explanation: "ModuleInfo is the AL data type used to get the metadata (including version) of the current application. local procedure isolates the method so it cannot be called from outside the codeunit, fulfilling the requirement to keep task-specific code inaccessible from other parts of the application."
      },
      {
        id: 307,
        context: "The Receipt No. field in the Non-conformity table links each non-conformity to the vendor's purchase receipt. The field must filter receipts so only receipts from the vendor on the non-conformity record are shown.",
        text: "You need to define the properties for the Receipt No. field in the Non-conformity table. Which three code segment completions are correct? (Select THREE)",
        type: "multiple",
        choices: [
          "First: TableRelation",
          "First: FieldRelation",
          "Second: \"Buy-from Vendor No.\"",
          "Second: \"Vendor No.\"",
          "Third: = field",
          "Third: = filter"
        ],
        correct: [0, 2, 4],
        explanation: "The complete expression is: TableRelation = \"Purch. Rcpt. Header\".\"No.\" where(\"Buy-from Vendor No.\" = field(\"Vendor No.\")); — TableRelation links to the purchase receipt header table, filtered by the buy-from vendor matching the vendor on the non-conformity record."
      },
      {
        id: 308,
        context: "The PMS provider needs a REST API endpoint to read room availability. The API follows the standard Business Central URL pattern: /api/{APIPublisher}/{APIGroup}/{APIVersion}/companies({id})/{EntitySetName}. The publisher is 'alpine', the group is 'integration', and the entity set is 'rooms'.",
        text: "You need to provide the correct API endpoint to the PMS provider for the RoomsAPI page. Which three URL segment selections are correct? (Select THREE)\n\nBase URL: https://api.businesscentral.dynamics.com/v2.0/myTenant/myEnvironment/api/___/___/v2.0/companies({companyId})/___",
        type: "multiple",
        choices: [
          "First segment: alpine",
          "First segment: integration",
          "Second segment: alpine",
          "Second segment: integration",
          "Third segment: rooms",
          "Third segment: room"
        ],
        correct: [0, 3, 4],
        explanation: "The endpoint follows the pattern .../api/{APIPublisher}/{APIGroup}/{APIVersion}/companies({id})/{EntitySetName}. With APIPublisher='alpine', APIGroup='integration', APIVersion='v2.0', and EntitySetName='rooms', the URL is: .../api/alpine/integration/v2.0/companies({companyId})/rooms"
      },
      {
        id: 309,
        context: "A canvas app built on Power Apps needs to connect to the RoomsAPI page. Custom API pages defined in Business Central extensions are available through the standard API endpoint — no additional publishing step is required.",
        text: "You need to access the RoomsAPI custom API page from the canvas app. What should you do?",
        type: "single",
        choices: [
          "Use the default API configuration in Business Central.",
          "Enable the APIs for the Business Central online environment.",
          "Open the Web Services page and publish the RoomsAPI page as a web service.",
          "Include in the extension a codeunit of type Install that publishes RoomsAPI."
        ],
        correct: [0],
        explanation: "Custom API pages defined in Business Central extensions are automatically accessible through the standard API endpoint without any additional publishing. The default API configuration in Business Central handles this — no web service registration is needed."
      },
      {
        id: 310,
        context: "The ticketAPI page is used by the Power BI analytics team to analyse POS sales data. The page must be optimised to reduce the load on the primary database by routing read queries to a replica.",
        text: "You need to improve performance when the ticketAPI page is used to analyze POS data in Power BI. What should you do?",
        type: "single",
        choices: [
          "Set the ODataReadonlyGetEnabled parameter to True in the Business Central admin center.",
          "Set the AccessByPermission property to Read on the ticketAPI API page.",
          "Enable read scale-out on the Business Central database.",
          "Set the DataAccessIntent property to ReadOnly on the ticketAPI API page."
        ],
        correct: [3],
        explanation: "Setting DataAccessIntent = ReadOnly on an API page tells Business Central to route read-only queries to a read-only database replica, reducing load on the primary database and improving query performance for analytics scenarios."
      },
      {
        id: 311,
        context: "The non-conformity configuration table must follow the standard Business Central pattern for a settings/setup table (exactly one record). The page must prevent users from inserting additional configuration records.",
        text: "You need to create the configuration table and page for the non-conformity functionality. Which three selections correctly match each requirement? (Select THREE)",
        type: "multiple",
        choices: [
          "Requirement 1 — Design pattern for the setup table: Singleton",
          "Requirement 1 — Design pattern for the setup table: Adapter",
          "Requirement 2 — Data type of the primary key field: Code",
          "Requirement 2 — Data type of the primary key field: Integer",
          "Requirement 3 — Property to prevent users from adding records: InsertAllowed",
          "Requirement 3 — Property to prevent users from adding records: InitValue"
        ],
        correct: [0, 2, 4],
        explanation: "Setup tables use the Singleton pattern (exactly one record ever exists). The primary key of a Singleton table is a Code field set to a fixed constant value. InsertAllowed = false on the page prevents users from inserting new records, enforcing the single-record constraint."
      },
      {
        id: 312,
        context: "The non-conformity entity follows the standard Business Central document pattern (like a sales order): a header record holds the main non-conformity details, and separate lines hold the individual non-conforming items.",
        text: "You need to define the table structure for the non-conformity entity. What should you use?",
        type: "single",
        choices: [
          "A document history table to introduce the non-conformity entities",
          "A document table to introduce the non-conformity entities",
          "A supplemental table to introduce the non-conformity lines"
        ],
        correct: [1],
        explanation: "Non-conformities follow the document pattern: a header table (document table) holds the main non-conformity record (number, vendor, status, etc.), and a separate lines table holds the individual non-conforming items. This matches the standard Business Central document design pattern."
      },
      {
        id: 313,
        context: "When a new Room Incident record is created, the Incident Date and Status fields must be populated automatically. The date must reflect the Business Central work date (not the OS date), and Status should default to Open.",
        text: "You need to populate the Incident Date and Status fields automatically in the Room Incident table. Which two selections are correct? (Select TWO)",
        type: "multiple",
        choices: [
          "Instruction: \"Incident Date\" := WorkDate(); \"Status\" := Status::Open;",
          "Instruction: \"Incident Date\" := Today(); \"Status\" := 1;",
          "Instruction: \"Incident Date\" := CurrentDateTime(); \"Status\" := Status::Open;",
          "Trigger: OnInsert",
          "Trigger: OnModify",
          "Trigger: OnRename"
        ],
        correct: [0, 3],
        explanation: "WorkDate() returns the work date configured in Business Central (not Today(), which is the OS date). Status::Open uses the proper enum value syntax. The OnInsert trigger fires when a new record is first created, which is exactly when the default Incident Date and Status should be set."
      }
    ]
  },
  {
    key: "contoso",
    label: "Contoso Case Study",
    description: "12 scenario-based questions from the Contoso Manufacturing case study, covering extension lifecycle, telemetry, REST APIs, AL development patterns, debugging, and upgrade codeunits in Business Central.",
    scenario: "Contoso Manufacturing is a production company that relies on a custom Business Central extension called ISSUE BASE (developed by a partner). The team now needs to evolve the extension: safely deprecate unused fields and procedures (Description field, Clone procedure) without breaking dependent extensions, ensure the extension survives major Business Central upgrades, adopt the facade design pattern for the Issue Management module, expose Issues via a read-only API page for a mobile app, call a subcontractor's REST API using HTTP basic authentication, monitor SOAP web service calls via KQL telemetry queries in Application Insights, configure snapshot debugging properly, and log partner-only telemetry signals. An upgrade codeunit must also migrate data from the obsolete Issue Category table to the new Issue Type table.",
    questions: [
      {
        id: 401,
        context: "The ISSUE BASE extension (v2.0.0.0) must phase out a Description field and a Clone procedure that existed in v1.0.0.0. Other extensions may depend on these symbols, so the removal must follow the correct two-step deprecation lifecycle.",
        text: "You need to handle removal of the Description field and the Clone procedure without breaking other extensions. Which three actions should be performed? (Select THREE)",
        type: "multiple",
        choices: [
          "Set the Clone procedure as ObsoleteState = Pending and ObsoleteReason = 'Not in use' in version 2.0.0.0.",
          "Set the Description field as ObsoleteState = Pending and ObsoleteReason = 'Not in use' in version 2.0.0.0.",
          "Set the Description field as ObsoleteState = Removed; in version 2.0.0.1.",
          "Remove the Description field in version 2.0.0.0.",
          "Set the Clone procedure as ObsoleteState = Removed; in version 2.0.0.1.",
          "Remove the Clone procedure in version 2.0.0.0.",
          "Remove the Description field from the Issue table in version 2.0.0.1.",
          "Add the [Obsolete('')] attribute to the Clone procedure in version 2.0.0.0."
        ],
        correct: [1, 2, 7],
        explanation: "The correct sequence is: (1) Set the Description field as ObsoleteState = Pending with a reason in v2.0.0.0 to warn dependent extensions. (2) Add the [Obsolete('')] attribute to the Clone procedure in v2.0.0.0 — procedures use the Obsolete attribute rather than ObsoleteState directly. (3) Set the Description field as ObsoleteState = Removed in v2.0.0.1 to finalize the removal after the pending period."
      },
      {
        id: 402,
        context: "After a major Business Central platform upgrade, the ISSUE BASE extension is no longer present in the tenant. The team needs to identify what could have caused this.",
        text: "You need to determine why the extension does not appear in the tenant after a major Business Central upgrade. What are two possible reasons? (Select TWO)",
        type: "multiple",
        choices: [
          "A. The extension was published as a DEV extension.",
          "B. The extension was not compatible with the new version within 60 days of the first notification.",
          "C. The extension was published as PTE, and the Platform parameter was not updated in the app.json file.",
          "D. The extension was published as PTE, and the Platform and Runtime parameters were not updated in the app.json file.",
          "E. The extension was not compatible with the new version within 90 days of the first notification."
        ],
        correct: [0, 4],
        explanation: "DEV extensions are not preserved across major upgrades — they are removed automatically. PTEs that are not made compatible within 90 days of the first notification email are also automatically uninstalled after the upgrade. 60 days (option B) is incorrect; the grace period is 90 days."
      },
      {
        id: 403,
        context: "The mobile app must read Issue records from Business Central using an API page during production working hours. The API must be read-only, use the replica database for performance, and support GET operations only.",
        text: "You need to create an API page that allows the mobile app to use the production environment during working hours and supports only GET operations. Which two property settings correctly complete the code segment? (Select TWO)",
        type: "multiple",
        choices: [
          "InsertAllowed = false",
          "DelayedInsert = true",
          "DataAccessIntent = ReadOnly",
          "ModifyAllowed = false",
          "Editable = false",
          "UsageCategory = Lists"
        ],
        correct: [2, 4],
        explanation: "DataAccessIntent = ReadOnly routes queries to a read-only replica and makes the page read-only for API consumers. Editable = false prevents modifications through the API, restricting it to GET operations only. These two together fulfill the requirement of a read-only API that uses the production replica."
      },
      {
        id: 404,
        context: "The Issue Management module must send data to a subcontractor's REST API. The API is secured with HTTP basic authentication. The call is a POST request and the credentials must be Base64-encoded.",
        text: "You need to write the code to call the subcontractor's REST API secured with basic authentication. Which four code segment completions are correct? (Select FOUR)",
        type: "multiple",
        choices: [
          "Header name: 'Authentication'",
          "Header name: 'Authorization'",
          "Header name: 'Authoriation'",
          "Header name: 'Authenticacion'",
          "Basic auth value: Base64Convert.FromBase64(Username + ':' + Password)",
          "Basic auth value: Base64Convert.ToBase64(Username + ':' + Password)",
          "Basic auth value: Base64Convert.ToBase64(Username) + Base64Convert.ToBase64(Password)",
          "Basic auth value: Username + ':' + Password",
          "Write request body: httpContent := Body",
          "Write request body: httpContent.Clear()",
          "Write request body: httpContent.WriteFrom(Body)",
          "HTTP call: httpClient.Post(Url, HttpContent)",
          "HTTP call: httpClient.Post(Url, HttpContent, Response)",
          "HTTP call: httpClient.Post(Url, HttpContent, ResponseMessage)",
          "HTTP call: httpClient.Send(Url, HttpContent, ResponseMessage)"
        ],
        correct: [1, 5, 10, 13],
        explanation: "Basic authentication uses the 'Authorization' header (standard HTTP header name). The value must be Base64-encoded as 'username:password' using Base64Convert.ToBase64(Username + ':' + Password). The request body is written using httpContent.WriteFrom(Body). The HTTP POST call returns the response in a variable via httpClient.Post(Url, HttpContent, ResponseMessage)."
      },
      {
        id: 405,
        context: "The team suspects unwanted SOAP web service calls are being made to the tenant. They want to use Application Insights KQL queries over the last seven days to identify such calls. Telemetry event RT0008 captures incoming web service requests.",
        text: "You need to determine if there are unwanted incoming SOAP web service calls in your tenant during the last seven days. Which two KQL queries should you use? (Select TWO)",
        type: "multiple",
        choices: [
          "A. traces | where timestamp > ago(7d) | where customDimensions has 'RT0008' | where customDimensions.category !in ('ODataV4', 'ODataV3', 'Api')",
          "B. traces | where timestamp > ago(7d) | where customDimensions has 'RT0008' | where customDimensions.category == 'SOAP'",
          "C. traces | where timestamp > ago(7d) | where customDimensions == 'RT0008' | where customDimensions.category == 'SOAP'",
          "D. traces | where timestamp > ago(7d) | where customDimensions has 'RT0008' | where customDimensions.category != 'ODataV4'",
          "E. traces | where timestamp > ago(7d) | where customDimensions has 'RT0008' | where customDimensions.category !in ('ODataV4', 'Api')"
        ],
        correct: [0, 1],
        explanation: "RT0008 is the telemetry event ID for incoming web service requests. Option B is the most specific SOAP filter. Option A is also valid because excluding ODataV4, ODataV3, and Api effectively isolates SOAP calls. Option C incorrectly uses == instead of 'has' for customDimensions. Option D is too broad (excludes only ODataV4). Option E misses ODataV3."
      },
      {
        id: 406,
        context: "A developer configured snapshot debugging with breakOnNext: 'WebClient' and userId: 'YOURUSERNAME' (the username string), but the debugger does not start correctly for the target user's session.",
        text: "You need to determine why snapshot debugging does not start correctly with the given configuration (breakOnNext: 'WebClient', userId: 'YOURUSERNAME'). What is the cause of the problem?",
        type: "single",
        choices: [
          "A. The 'userId' parameter must have the GUID of the user specified, not the username.",
          "B. The 'breakOnNext' parameter is not set to 'WebServiceClient'.",
          "C. The 'userId' parameter is specified, and the next user session that is specified in the 'breakOnNext' parameter is snapshot debugged.",
          "D. The 'executionContext' parameter is not set to 'Debug'."
        ],
        correct: [0],
        explanation: "The 'userId' parameter in snapshot debugging requires the GUID of the user, not the username string. Providing the username ('YOURUSERNAME') instead of the user's GUID prevents the debugger from correctly identifying and attaching to the target user's session."
      },
      {
        id: 407,
        context: "The mobile app needs to trigger the Copy action on a specific Issue record through the Business Central Issue API. The action is decorated with [ServiceEnabled] in the API page definition.",
        text: "You need to call the Issue API action (Copy) from the mobile application. Which action endpoint should you use?",
        type: "single",
        choices: [
          "A. POST /issues(88122e0e-5796-ec11-bb87-000d3a392eb5)/Microsoft.NAV.copy",
          "B. PATCH /issues(88122e0e-5796-ec11-bb87-000d3a392eb5)/Microsoft.NAV.Copy",
          "C. POST /issues(88122e0e-5796-ec11-bb87-000d3a392eb5)/Copy",
          "D. GET /issues(88122e0e-5796-ec11-bb87-000d3a392eb5)/Microsoft.NAV.Copy",
          "E. POST /issues(88122e0e-5796-ec11-bb87-000d3a392eb5)/Microsoft.NAV.Copy"
        ],
        correct: [4],
        explanation: "Business Central API actions decorated with [ServiceEnabled] are called using POST. The action name is prefixed with 'Microsoft.NAV.' and the casing must match exactly — 'Copy' with a capital C. Option A uses lowercase 'copy'. Option B uses PATCH. Option C omits the required 'Microsoft.NAV.' prefix. Therefore E is the only correct endpoint."
      },
      {
        id: 408,
        context: "Contoso wants to monitor their Business Central SaaS tenant using Azure Application Insights. The Application Insights resource must be in Contoso's own Azure subscription. After setup, the team needs to verify that telemetry signals appear correctly.",
        text: "You need to configure telemetry for the SaaS tenant and test whether the ingested signals are displayed. Which three actions are required? (Select THREE)",
        type: "multiple",
        choices: [
          "Select the Application Insights, select Log and then inspect the traces.",
          "Select the environment in the Admin Center and place the connection string in the Application Insights Connection String field.",
          "Create an Azure Application Insights instance by using the Azure Portal in the partner's subscription.",
          "Create an Azure Application Insights instance by using the Azure Portal in Contoso's subscription.",
          "Select the Application Insights instance, select Events, and then inspect the traces.",
          "Select the Sessions menu and then select Restart Environment."
        ],
        correct: [0, 1, 3],
        explanation: "The correct sequence is: (1) Create an Azure Application Insights instance in Contoso's own Azure subscription (not the partner's, since Contoso wants its own telemetry). (2) In the Business Central Admin Center, select the environment and enter the Application Insights connection string. (3) Open the Application Insights instance, select Logs, and query the traces table to verify the signals appear. The 'Events' blade (option 4) and Restart Environment (option 5) are not part of this flow."
      },
      {
        id: 409,
        context: "The Issue Management module must follow the Business Central facade design pattern: a public-facing codeunit exposes the PostIssue method, while an internal implementation codeunit contains the actual logic. External extensions (like ISSUE EXT) can call the public façade but not the internal implementation.",
        text: "You need to implement the Issue Management module following Business Central design patterns and expose the PostIssue method. Which four actions are required? (Select FOUR)",
        type: "multiple",
        choices: [
          "Create a PostIssue procedure in the 'Issue Management' codeunit, and in it call the PostIssue method defined in the 'Issue Management Impl' codeunit.",
          "Create a codeunit named 'Issue Management Impl', and set the value of Access property to Public.",
          "Create a local procedure named PostIssueImpl in the 'Issue Management' codeunit.",
          "Create a codeunit named 'Issue Management', and set the value of Access property to Public.",
          "Create a codeunit named 'Issue Management Impl', and set the value of Access property to Internal.",
          "Create a PostIssue procedure in the 'Issue Management' codeunit, and in it call the PostIssueImpl method.",
          "Create a PostIssue procedure in the 'Issue Management Impl' codeunit and add the needed code to the procedure."
        ],
        correct: [0, 3, 4, 6],
        explanation: "The Business Central facade pattern requires: (1) A public 'Issue Management' codeunit as the façade (Access = Public). (2) An internal 'Issue Management Impl' codeunit containing the actual implementation (Access = Internal, so ISSUE EXT cannot call it directly). (3) The implementation procedure in 'Issue Management Impl'. (4) A matching public procedure in 'Issue Management' that delegates to the implementation codeunit. This separates the public API from the internal implementation."
      },
      {
        id: 410,
        context: "The ISSUE EXT table extension (part of a separate extension) needs to read the IssueTotal variable defined in the base Issue table in ISSUE BASE. The access modifier must allow table extensions to read it, while still restricting access from all other contexts.",
        text: "You need to create the correct access modifier for the IssueTotal variable in the Issue table so that the ISSUE EXT tableextension can access it. Which variable declaration should you use?",
        type: "single",
        choices: [
          "A. Internal var IssueTotal: Decimal",
          "B. Var IssueTotal: Decimal",
          "C. Public var IssueTotal: Decimal",
          "D. Local var IssueTotal: Decimal",
          "E. Protected var IssueTotal: Decimal"
        ],
        correct: [4],
        explanation: "Protected access allows a variable to be accessed from tableextensions of the same table, which is exactly what ISSUE EXT needs. Public would expose it to all extensions. Internal would limit access to within the same extension (ISSUE BASE only). Local would limit access to within the same procedure. The Protected modifier is the correct choice for a variable that must be accessible to extensions of the table."
      },
      {
        id: 411,
        context: "The upgrade codeunit for ISSUE BASE must migrate all data row by row from the obsolete Issue Category table to the new Issue Type table. The data is company-specific and the migration must run once per company.",
        text: "You need to write an Upgrade codeunit and use the DataTransfer object to move data row by row from the obsolete Issue Category table to the new Issue Type table. Which two selections are correct? (Select TWO)",
        type: "multiple",
        choices: [
          "Upgrade codeunit trigger: OnValidateUpgradePerCompany",
          "Upgrade codeunit trigger: OnValidateUpgradePerDatabase",
          "Upgrade codeunit trigger: OnUpgradePerDatabase",
          "Upgrade codeunit trigger: OnUpgradePerCompany",
          "DataTransfer method: CopyFields",
          "DataTransfer method: CopyRows",
          "DataTransfer method: SetTables",
          "DataTransfer method: TransferFields"
        ],
        correct: [3, 5],
        explanation: "OnUpgradePerCompany runs once per company and is the correct trigger when data is company-specific (as most business data in Business Central is). OnUpgradePerDatabase runs once for the entire database and is used for database-level objects. CopyRows copies entire rows from the source table to the destination table, which is required when moving data row by row. CopyFields copies individual field values between two tables that share the same row structure."
      },
      {
        id: 412,
        context: "When the business process in Contoso's custom application fails, an error must be logged in telemetry. The signal must be visible only in the partner's Application Insights instance — not in Contoso's tenant telemetry. The data in the signal describes system behaviour, not personal or customer data.",
        text: "You need to log an error in telemetry when the business process in the custom application for Contoso fails. The signal must only be visible in the partner's telemetry. Which three settings correctly complete the code segment? (Select THREE)",
        type: "multiple",
        choices: [
          "Verbosity: Critical",
          "Verbosity: Normal",
          "Verbosity: Verbose",
          "Verbosity: Warning",
          "DataClassification: AccountData",
          "DataClassification: CustomerContent",
          "DataClassification: OrganizationIdentifiableInformation",
          "DataClassification: SystemMetadata",
          "TelemetryScope: All",
          "TelemetryScope: CustomerContent",
          "TelemetryScope: ExtensionPublisher"
        ],
        correct: [0, 7, 10],
        explanation: "Verbosity = Critical is used for error-level events that require immediate attention. DataClassification = SystemMetadata is the correct classification for telemetry signals that describe system behavior (not personal/customer data). TelemetryScope = ExtensionPublisher ensures the custom telemetry signal is sent only to the partner's Application Insights instance (the extension publisher's telemetry), not to Contoso's tenant telemetry — which is exactly the requirement."
      }
    ]
  },
  {
    key: "fabrikam",
    label: "Fabrikam Case Study",
    description: "10 scenario-based questions from the Fabrikam Inc. case study, covering AL extension development, API design, XMLport, translations, report layouts, telemetry, and upgrade codeunits in Business Central.",
    scenario: "Fabrikam Inc. is a manufacturing company that needs a custom Business Central extension called Quality Control (v1.0.0.2). The extension manages Subcontract Documents and their relationship with vendors. Key deliverables include: an upgrade codeunit to migrate data from the obsolete Issue Category table to Issue Type when upgrading from v1.0.0.1; an Excel report with two worksheets (posted and unposted Subcontract Documents) for the control department; a read-only Vendor API page for the accounting department; vendor deletion logic that cascades or blocks based on posted status; InstructionalText for empty Description and Comments fields; conditional bold formatting on the Subcontract Document List; CaptionML-based translations into English (US) and Spanish (Spain); proper Application Insights configuration in app.json without deprecation warnings; an XMLport to export G/L entries as XML for external accounting analysis; and a customer API query with aggregation sorted descending by quantity.",
    questions: [
      {
        id: 501,
        context: "The Quality Control extension is being upgraded from v1.0.0.1 (currently installed in the database) to v1.0.0.2 (the version being deployed). The upgrade codeunit calls NavApp.GetCurrentModuleInfo() inside OnUpgradePerCompany.",
        text: "You need to evaluate the version values of the Quality Control extension (v1.0.0.1 installed, v1.0.0.2 being deployed) to decide how to update it. NavApp.GetCurrentModuleInfo(myInfo) is called in OnUpgradePerCompany. Which two values can you obtain? (Select TWO)",
        type: "multiple",
        choices: [
          "A. AppVersion = 1.0.0.1",
          "B. AppVersion = 1.0.0.2",
          "C. DataVersion = 0.0.0.0",
          "D. DataVersion = 1.0.0.1",
          "E. DataVersion = 1.0.0.2"
        ],
        correct: [1, 3],
        explanation: "In an Upgrade codeunit, NavApp.GetCurrentModuleInfo returns info about the version being installed (the new version). AppVersion is the version of the new app being deployed — 1.0.0.2. DataVersion is the version of the data currently in the database — the last successfully installed version, which is 1.0.0.1. This allows the upgrade code to determine what transformation is needed."
      },
      {
        id: 502,
        context: "The control department needs a report listing Subcontract Documents that downloads as Excel only. The report must contain two separate worksheets: one for posted documents and one for unposted documents. The existing report definition includes a Word layout section that must be removed.",
        text: "You need to develop the Subcontract Documents Excel List report for the control department. The report must download as Excel only, with two worksheets (posted and unposted). For each statement, is it correct (Yes) or not (No)?",
        type: "multiple",
        choices: [
          "A. Delete lines 31–35 (Word layout section). Change line 5 to DefaultLayout = Excel;",
          "B. Delete lines 31–35 (Word layout section). Change line 5 to DefaultRenderingLayout = excelLayout; and add ExcelLayoutMultipleDataSheets = true; after line 6.",
          "C. Change property on line 5 to DefaultRenderingLayout = excelLayout; and add ExcelLayoutMultipleDataSheets = true; after line 6 (keep existing lines)."
        ],
        correct: [1],
        explanation: "Option B is the only correct approach. You must remove the Word layout rendering block (lines 31–35) because the report must only produce Excel output. The correct modern property is DefaultRenderingLayout = excelLayout (not DefaultLayout). To support two worksheets, ExcelLayoutMultipleDataSheets = true must be added. Option A uses the deprecated DefaultLayout property. Option C keeps the Word layout, which would still allow Word output."
      },
      {
        id: 503,
        context: "The accounting department needs an API that exposes vendor information from Business Central. The page must be read-only, use the replica database for performance, and be accessible as a standard Business Central API page (not a web service or query).",
        text: "You need to create the Fabrikam Vendor API page for the accounting department. It must expose vendor information, use the replica database for performance, and be an API. Which three code segment completions are correct? (Select THREE)",
        type: "multiple",
        choices: [
          "page 50101 \"Fabrikam Vendor API\"",
          "query 51011 \"Fabrikam Vendor API\"",
          "pageextension 50101 \"Fabrikam Vendor API\"",
          "PageType = API;",
          "QueryType = API;",
          "PageType = List;",
          "DataAccessIntent = ReadWrite;",
          "DataAccessIntent = ReadOnly;",
          "InsertAllowed = false;",
          "ModifyAllowed = false;"
        ],
        correct: [0, 3, 7],
        explanation: "A page object (not query or pageextension) must be created with PageType = API to define a custom API page. DataAccessIntent = ReadOnly routes queries to the read-only replica database to improve performance, which is a stated requirement. The object type must be 'page', as 'query' with QueryType = API is a different concept used for query-based APIs."
      },
      {
        id: 504,
        context: "The quality department requires that when a Vendor record is deleted, all non-posted Subcontract Documents for that vendor are automatically removed. If any posted Subcontract Documents exist for the vendor, deletion must be blocked with an error message.",
        text: "You need to create the code for the Subcontract Documents table to meet the quality department requirement: when a vendor is deleted, remove non-posted Subcontract Document records; block deletion if posted records exist. Which three code segment completions are correct? (Select THREE)",
        type: "multiple",
        choices: [
          "codeunit 50100 Vendor",
          "table 50100 \"Vendor Control\"",
          "tableextension 50100 \"Vendor Control\" extends Vendor",
          "tableextension 50100 \"Vendor Control\" extends \"Subcontract Documents\"",
          "trigger OnDelete()",
          "trigger OnModify()",
          "procedure OnDeleteSubcontractDocument()",
          "Confirm(errLbl)",
          "Error(errLbl)",
          "Message(errLbl)"
        ],
        correct: [2, 4, 8],
        explanation: "A tableextension of the Vendor table is the correct approach — this allows hooking into the standard Vendor table's triggers without modifying it directly. The OnDelete trigger fires when a Vendor record is deleted, which is when we want to cascade or block. Error(errLbl) is the correct function to block deletion and show a non-confirmable error message when posted subcontract documents exist (Confirm would allow the user to override; Message does not stop execution)."
      },
      {
        id: 505,
        context: "The Description and Comments fields on the Subcontract Document page must display a brief in-field guide when the field is empty, helping employees understand what to enter. The guide must disappear automatically once the user starts typing.",
        text: "You need to add a property to the Description and Comments fields so that employees see a brief guide when the field is empty, and the guide disappears once they start entering values. Which property should you add?",
        type: "single",
        choices: [
          "A. InstructionalText",
          "B. ToolTip",
          "C. Description",
          "D. Caption"
        ],
        correct: [0],
        explanation: "InstructionalText is the Business Central page field property that displays placeholder/hint text inside the field when it is empty, and automatically disappears once the user starts typing. ToolTip shows on hover but does not appear inside the field. Description is a developer comment property. Caption changes the field label, not the in-field hint."
      },
      {
        id: 506,
        context: "On the Subcontract Document List page, the Amount field must be displayed in bold whenever the Posted field is true, helping users quickly identify posted documents at a glance.",
        text: "You need to apply the correct formatting to the Amount field on the Subcontract Document List page so that it appears in bold when the Posted field is true. Which field definition should you use?",
        type: "single",
        choices: [
          "A. field(Amount; Rec.Amount) { Style = Strong; StyleExpr = true; }",
          "B. field(PostedRec; Rec.Posted) { Style = None; StyleExpr = Rec.Amount > 0; }",
          "C. field(PostedRec; Rec.Posted) { Style = Strong; StyleExpr = Rec.Posted = true; }",
          "D. field(Amount; Rec.Amount) { Style = Strong; StyleExpr = Rec.Posted = true; }",
          "E. field(Amount; Rec.Amount) { Style = None; StyleExpr = Rec.Posted = true; }"
        ],
        correct: [3],
        explanation: "Option D is correct: the field being styled is Amount (Rec.Amount), Style = Strong applies bold formatting, and StyleExpr = Rec.Posted = true makes the bold conditional on the Posted field being true. Option A always applies bold (StyleExpr = true is not conditional). Option B/C apply the style to the Posted field itself rather than Amount. Option E uses Style = None which removes formatting rather than applying bold."
      },
      {
        id: 507,
        context: "The Subcontract Docs extension must support multilingual users. The Description and Comments fields must be translatable into English (US) and Spanish (Spain), with the translations stored directly in the table definition (not via XLIFF workflow).",
        text: "You need to configure the Subcontract Docs extension to translate Description and Comments fields into English (US) and Spanish (Spain), stored in the table. Which three actions are required? (Select THREE)",
        type: "multiple",
        choices: [
          "Complete the value for CaptionML for each field with eNU='...'; eSP='...';",
          "Add the setting \"features\": [\"TranslationFile\"] in the app.json file.",
          "Open the table Subcontract Documents.",
          "Add the CaptionML property for each field.",
          "Use the build command AL: Package in Visual Studio Code to generate the .xlf folder.",
          "Open the Subcontract Document List page.",
          "Translate the generated .xlf file."
        ],
        correct: [0, 2, 3],
        explanation: "The correct sequence is: (1) Open the Subcontract Documents table — translations must be stored at the table level, not the page level. (2) Add the CaptionML property to each field that needs translation. (3) Complete the CaptionML value with the format eNU='English text'; eSP='Spanish text'; for each field. The TranslationFile feature and .xlf workflow are a different translation approach (XLIFF) and are not required here since CaptionML stores translations directly in the table."
      },
      {
        id: 508,
        context: "The development team needs to configure app.json so that Application Insights telemetry is enabled without generating compile-time deprecation warnings. The extension targets the Business Central 2024 wave 1 online environment.",
        text: "You need to configure the app.json file for the development department's extension. Telemetry must be monitored through Application Insights (without compile-time warnings), and the extension targets Business Central 2024 wave 1 online. Which two settings are correct? (Select TWO)",
        type: "multiple",
        choices: [
          "applicationInsightsConnectionString",
          "applicationInsightsKey",
          "Cloud",
          "Extension",
          "OnPrem"
        ],
        correct: [0, 2],
        explanation: "applicationInsightsConnectionString is the current recommended property for Application Insights integration in app.json; the older applicationInsightsKey property is deprecated and causes compile-time warnings. The target environment for Business Central online is 'Cloud' (not 'Extension' or 'OnPrem'). Using the deprecated key would trigger the warning that the quality department wants to avoid."
      },
      {
        id: 509,
        context: "The accounting department needs to export G/L entries as an XML file for external accounting analysis between two dates. The XMLport must be write-only (export only — no import capability) and must source data from accounting transaction records.",
        text: "You need to define the XMLport properties for the Fabrikam Accounting export. The file must be XML format, export-only (no import), and contain accounting movements from G/L entries. Which three code segment completions are correct? (Select THREE)",
        type: "multiple",
        choices: [
          "Format = FixedText;",
          "Format = VariableText;",
          "Format = Xml;",
          "Direction = Both;",
          "Direction = Export;",
          "Direction = Import;",
          "SourceTable = \"Subcontract Documents\"",
          "SourceTable = \"G/L Account\"",
          "SourceTable = \"G/L Entry\""
        ],
        correct: [2, 4, 8],
        explanation: "Format = Xml generates XML output as required. Direction = Export makes the XMLport write-only — it cannot receive/import data, which is the security requirement. The source table must be \"G/L Entry\" (not \"G/L Account\") because the requirement is to export accounting movements (transactions/journal entries) between two dates, which are stored in G/L Entry records, not in the G/L Account master."
      },
      {
        id: 510,
        context: "A customer API query must expose customer_Number, customer_Name, and the sum of Outstanding Quantity on Sales Order Lines (as qty) for the accounting team. Results must be sorted in descending order by qty, and only Sales Order lines (not other document types) must be included.",
        text: "You need to modify the API Customer Lines query code to expose customer_Number, customer_Name, and qty (sum of Outstanding Quantity on Sales Order Lines, sorted descending by qty). For each statement, is it correct (Yes) or not (No)?",
        type: "multiple",
        choices: [
          "A. Add two lines: OrderBy = descending(\"Outstanding Quantity\"); between lines 8–9, and Method = Sum; between lines 24–25.",
          "B. Add three lines: OrderBy = descending(qty); between lines 8–9, DataItemTableFilter = \"Document Type\" = filter('Order'); between lines 22–23, and Method = Sum; between lines 24–25.",
          "C. Add three lines: OrderBy = descending(qty); between lines 8–9, DataItemTableFilter = \"Document Type\" = const('Order'); between lines 22–23, and Method = Sum; between lines 24–25."
        ],
        correct: [2],
        explanation: "Option C is the only correct answer. OrderBy must reference the query column alias 'qty' (not the raw field name 'Outstanding Quantity'). The DataItemTableFilter must restrict to Sales Order lines using const('Order') — 'const' is the correct AL filter type for matching a specific enum/option value. 'filter' (option B) would interpret the value as a filter expression string rather than a constant match. Method = Sum is required to aggregate the Outstanding Quantity values."
      }
    ]
  }
];
