// MB-820: Case Studies — Scenario-based practice test cases

const TEST_CASES = [
  {
    key: "alpine",
    label: "Alpine Case Study",
    description: "13 scenario-based questions from the Alpine Ski House case study, covering housekeeping, POS integration, non-conformities, and custom API design in Business Central.",
    questions: [
      {
        id: 301,
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
    questions: [
      {
        id: 401,
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
    key: "case3",
    label: "Case Study 3",
    description: "Coming soon — this case study has not yet been added.",
    questions: []
  }
];
