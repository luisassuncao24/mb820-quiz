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
    key: "case2",
    label: "Case Study 2",
    description: "Coming soon — this case study has not yet been added.",
    questions: []
  },
  {
    key: "case3",
    label: "Case Study 3",
    description: "Coming soon — this case study has not yet been added.",
    questions: []
  }
];
