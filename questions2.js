// MB-820: Microsoft Dynamics 365 Business Central Developer
// Practice Questions — Expanded Set (100 questions)

const questionsSet2 = [
  {
    id: 201,
    text: "What best describes Microsoft Dynamics 365 Business Central?",
    type: "single",
    choices: [
      "A CRM-only platform for large enterprises",
      "A cloud ERP solution for small and medium-sized businesses",
      "A database engine for custom desktop apps",
      "A mobile operating system for retail devices"
    ],
    correct: [1],
    explanation: "Business Central is a cloud ERP (Enterprise Resource Planning) solution designed for small and medium-sized businesses, covering finance, supply chain, service management, and more."
  },
  {
    id: 202,
    text: "Which business areas are highlighted as supported by Business Central? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Finance",
      "Supply chain",
      "Social media marketing only",
      "Service management"
    ],
    correct: [0, 1, 3],
    explanation: "Business Central supports Finance, Supply chain, and Service management among its core functional areas. It does not specialize in social media marketing."
  },
  {
    id: 203,
    text: "In the three-tier Business Central architecture, which layer processes business logic and communication with the database?",
    type: "single",
    choices: [
      "Presentation tier",
      "Service tier",
      "Data tier",
      "Browser tier"
    ],
    correct: [1],
    explanation: "The Service tier (middle tier) is responsible for executing business logic and managing communication between the presentation tier and the data tier."
  },
  {
    id: 204,
    text: "Which are key components of Business Central? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "AL language",
      "Extensions",
      "BC Server",
      "Physical paper archive only"
    ],
    correct: [0, 1, 2],
    explanation: "Business Central's key components include the AL programming language, the Extensions model, and the BC Server. Physical paper archives are not a component."
  },
  {
    id: 205,
    text: "What is a typical SaaS update characteristic in Business Central?",
    type: "single",
    choices: [
      "Updates must always be manually installed from DVDs",
      "Updates are automatic and managed by Microsoft",
      "Updates are available only every 5 years",
      "Updates require uninstalling the database first"
    ],
    correct: [1],
    explanation: "In SaaS (Software as a Service), Microsoft manages and automatically deploys updates, removing the burden of manual installation from customers."
  },
  {
    id: 206,
    text: "Which practices are recommended for update management? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Use sandboxes first",
      "Test in staging",
      "Follow semantic versioning",
      "Skip major updates indefinitely"
    ],
    correct: [0, 1, 2],
    explanation: "Best practices include testing updates in sandbox and staging environments and following semantic versioning. Skipping major updates indefinitely is not recommended."
  },
  {
    id: 207,
    text: "Which licensing edition is described as the core ERP including finance, sales, purchasing, and inventory?",
    type: "single",
    choices: [
      "Team Member",
      "Device",
      "Essentials",
      "Premium Lite"
    ],
    correct: [2],
    explanation: "The Essentials license is the core ERP edition covering Finance, Sales, Purchasing, and Inventory. Premium adds Manufacturing and Service Management on top."
  },
  {
    id: 208,
    text: "Which security-related concepts are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Role-based security",
      "Entitlements",
      "SaaS uses Azure Active Directory for authentication",
      "All users should always be SUPER users"
    ],
    correct: [0, 1, 2],
    explanation: "Business Central uses role-based security, entitlements to control feature access, and Azure Active Directory for authentication in SaaS. Granting SUPER to all users is a security anti-pattern."
  },
  {
    id: 209,
    text: "What is the main purpose of the Base App in Business Central?",
    type: "single",
    choices: [
      "It stores only UI themes",
      "It contains core ERP functionality",
      "It replaces the database server",
      "It is used only for telemetry"
    ],
    correct: [1],
    explanation: "The Base App contains the core ERP functionality of Business Central, including standard tables, pages, codeunits, and reports."
  },
  {
    id: 210,
    text: "Which steps belong to bringing an app to AppSource? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Develop the app",
      "Validate the app",
      "Package the app",
      "Submit it to Microsoft Partner Center"
    ],
    correct: [0, 1, 2, 3],
    explanation: "The full AppSource publishing process includes developing, validating (running AppSourceCop and tests), packaging the .app file, and submitting through Microsoft Partner Center."
  },
  {
    id: 211,
    text: "Before updating an app, what should happen to deprecated objects?",
    type: "single",
    choices: [
      "They must be turned into Role Centers",
      "They should be marked with ObsoleteState",
      "They must be converted into APIs",
      "They should be deleted without warning"
    ],
    correct: [1],
    explanation: "Deprecated objects should be marked with the ObsoleteState property (Pending or Removed) to give dependent extensions time to migrate before the objects are fully removed."
  },
  {
    id: 212,
    text: "Which are listed as core development tools/environments? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "VS Code with AL Language extension",
      "Business Central sandbox",
      "Docker containers",
      "Microsoft Paint"
    ],
    correct: [0, 1, 2],
    explanation: "Core development tools include VS Code with the AL extension, BC sandboxes for testing, and Docker containers for local development. Microsoft Paint is not a development tool."
  },
  {
    id: 213,
    text: "In app.json, what does the id represent?",
    type: "single",
    choices: [
      "The server port number",
      "The unique GUID for the app",
      "The SQL database name",
      "The user permission set"
    ],
    correct: [1],
    explanation: "The id field in app.json is a GUID (Globally Unique Identifier) that uniquely identifies the extension/app across the platform."
  },
  {
    id: 214,
    text: "Which settings can be found in launch.json? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "server",
      "startupObjectType",
      "tenant",
      "reportlayout"
    ],
    correct: [0, 1, 2],
    explanation: "launch.json contains connection settings like server, tenant, and startupObjectType. Report layout is defined in AL objects, not in launch.json."
  },
  {
    id: 215,
    text: "What is the main benefit of using multiple AL extensions in one workspace?",
    type: "single",
    choices: [
      "It prevents debugging",
      "It allows each extension to keep its own app.json",
      "It forces all objects into one file",
      "It removes the need for dependencies"
    ],
    correct: [1],
    explanation: "A multi-root workspace allows each extension to maintain its own app.json with independent settings, while still being able to reference sibling extensions as dependencies."
  },
  {
    id: 216,
    text: "What is a Role Center page mainly used for?",
    type: "single",
    choices: [
      "Importing XML files",
      "Acting as a dashboard for a specific user role",
      "Replacing the SQL engine",
      "Creating telemetry traces only"
    ],
    correct: [1],
    explanation: "A Role Center is the home page (dashboard) tailored for a specific user role, showing KPIs, activities, and quick links relevant to that role."
  },
  {
    id: 217,
    text: "Which are common page types in Business Central? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Card",
      "List",
      "Worksheet",
      "Query"
    ],
    correct: [0, 1, 2],
    explanation: "Card, List, and Worksheet are common page types. Query is a separate AL object type used for data retrieval, not a page type."
  },
  {
    id: 218,
    text: "Which property is commonly used to bind a page to its table?",
    type: "single",
    choices: [
      "SourceTable",
      "RequestFilterFields",
      "DataItemLink",
      "APIPublisher"
    ],
    correct: [0],
    explanation: "The SourceTable property on a page object binds the page to a specific table, making the table's fields available on the page."
  },
  {
    id: 219,
    text: "Which of the following are standard table triggers in Business Central AL? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "OnInsert",
      "OnDelete",
      "OnModify",
      "OnRename"
    ],
    correct: [0, 1, 2, 3],
    explanation: "The four main table triggers are OnInsert, OnDelete, OnModify, and OnRename, which fire when records are inserted, deleted, modified, or renamed respectively."
  },
  {
    id: 220,
    text: "What is a recommended rule for table extensions?",
    type: "single",
    choices: [
      "Change primary keys whenever possible",
      "Avoid changing primary keys",
      "Remove all standard fields",
      "Use them only in on-premises systems"
    ],
    correct: [1],
    explanation: "Table extensions should avoid changing primary keys because this can cause breaking changes for existing data and dependent objects."
  },
  {
    id: 221,
    text: "Why are enums preferred over option fields?",
    type: "single",
    choices: [
      "They reduce database size to zero",
      "They support better extensibility",
      "They eliminate permissions",
      "They can only be used in reports"
    ],
    correct: [1],
    explanation: "Enums can be extended by other apps via enum extensions, making them far more extensible than classic option fields, which cannot be extended."
  },
  {
    id: 222,
    text: "Which statements about reports are correct? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Reports can document invoices and orders",
      "Reports can be analytical",
      "Reports can use request pages",
      "Reports always require an RDLC layout"
    ],
    correct: [0, 1, 2],
    explanation: "Reports can document transactions, be used analytically, and offer request pages for filtering. However, reports do not always require RDLC—they can use Word, Excel, or no layout (processing-only)."
  },
  {
    id: 223,
    text: "Which report layout is described as especially useful for financial reports and data exports?",
    type: "single",
    choices: [
      "Word layout",
      "XML layout",
      "Excel layout",
      "JSON layout"
    ],
    correct: [2],
    explanation: "Excel layouts are ideal for financial reports and data exports because they allow users to leverage Excel's analytical and pivot table capabilities directly."
  },
  {
    id: 224,
    text: "Which are valid uses of XMLports? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Data migration",
      "Integration with external systems",
      "Exporting data for archiving",
      "Designing Role Centers"
    ],
    correct: [0, 1, 2],
    explanation: "XMLports are used for data migration, integration with external systems, and exporting/archiving data. Designing Role Centers is done with page objects."
  },
  {
    id: 225,
    text: "In an XMLport, what does the Direction property define?",
    type: "single",
    choices: [
      "Whether the file is encrypted",
      "Whether the XMLport imports, exports, or does both",
      "Whether the data goes to Azure only",
      "Whether the object is a report substitute"
    ],
    correct: [1],
    explanation: "The Direction property of an XMLport specifies whether it is used for Import, Export, or Both, controlling the data flow direction."
  },
  {
    id: 226,
    text: "Which XMLport node types are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Element",
      "Text",
      "Attribute",
      "Field"
    ],
    correct: [0, 1, 2],
    explanation: "XMLport node types include Element, Text, and Attribute. 'Field' is not a node type in XMLport—fields are mapped within elements/attributes."
  },
  {
    id: 227,
    text: "What is a key advantage of codeunits?",
    type: "single",
    choices: [
      "They can replace all pages automatically",
      "They support encapsulation and reusable logic",
      "They can only run during installation",
      "They eliminate the need for tests"
    ],
    correct: [1],
    explanation: "Codeunits encapsulate business logic into reusable procedures, promoting clean architecture, separation of concerns, and code reuse across the application."
  },
  {
    id: 228,
    text: "Which statements about installation and upgrade codeunits are correct? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Install codeunits run when the extension is installed",
      "Upgrade codeunits help migrate data between versions",
      "Install codeunits are used to define report layouts",
      "Upgrade codeunits can transform obsolete data"
    ],
    correct: [0, 1, 3],
    explanation: "Install codeunits execute on first installation to set up defaults. Upgrade codeunits run during version upgrades to migrate data. Neither type is used for report layout definitions."
  },
  {
    id: 229,
    text: "Why are event subscribers considered non-invasive customization?",
    type: "single",
    choices: [
      "They modify Microsoft base code directly",
      "They respond to published events without changing base code",
      "They run only in SQL Server",
      "They replace permissions automatically"
    ],
    correct: [1],
    explanation: "Event subscribers listen for published events and execute custom logic without modifying the base application code, making them upgrade-safe and non-invasive."
  },
  {
    id: 230,
    text: "What is an interface in AL?",
    type: "single",
    choices: [
      "A database table subtype",
      "A contract of method signatures to be implemented by codeunits",
      "A page used for onboarding",
      "A report request page"
    ],
    correct: [1],
    explanation: "An AL interface defines a contract (set of method signatures) that implementing codeunits must fulfill, enabling polymorphism and plug-and-play behavior."
  },
  {
    id: 231,
    text: "Which are best practices for permission sets? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Use granular permission sets",
      "Avoid giving SUPER access unless necessary",
      "Test permissions with a non-admin user",
      "Grant full access by default to everyone"
    ],
    correct: [0, 1, 2],
    explanation: "Best practices include granular permission sets, restricting SUPER access, and validating permissions with non-admin users. Granting full access to everyone is a security risk."
  },
  {
    id: 232,
    text: "What do entitlements determine?",
    type: "single",
    choices: [
      "The user's browser theme",
      "Which permission sets are available based on license and extensions",
      "The SQL collation",
      "The API route name"
    ],
    correct: [1],
    explanation: "Entitlements define which permission sets a user can be assigned based on their license type and installed extensions, acting as a gating layer above permission sets."
  },
  {
    id: 233,
    text: "Which tools are mentioned for troubleshooting permissions? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Permission Recorder",
      "Permissions Test Page",
      "User Groups",
      "Telemetry Analyzer"
    ],
    correct: [0, 1, 2],
    explanation: "The Permission Recorder, Permissions Test Page, and User Groups are used for diagnosing and managing permissions. The Telemetry Analyzer focuses on performance and errors, not permissions."
  },
  {
    id: 234,
    text: "Why use queries in Business Central?",
    type: "single",
    choices: [
      "They replace all pages",
      "They offer better performance for large datasets",
      "They are required for every report",
      "They can only read one table"
    ],
    correct: [1],
    explanation: "Queries provide better performance for retrieving and aggregating data from large datasets, especially when joining multiple tables, compared to using page record sets."
  },
  {
    id: 235,
    text: "Queries are especially useful when: (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Retrieving joined data from multiple tables",
      "Exposing data via OData",
      "Building Role Centers or dashboards",
      "Replacing all posting routines"
    ],
    correct: [0, 1, 2],
    explanation: "Queries excel at joining multiple tables, can be exposed via OData for external consumption, and serve as efficient data sources for dashboards. They do not replace posting routines."
  },
  {
    id: 236,
    text: "What are profiles in AL used for?",
    type: "single",
    choices: [
      "Managing HTTP authentication headers",
      "Defining the layout and experience for different user roles",
      "Storing JSON payloads",
      "Building API pages only"
    ],
    correct: [1],
    explanation: "Profiles in AL define the Role Center and UI customizations for specific user roles, controlling what each role sees as their home page and navigation experience."
  },
  {
    id: 237,
    text: "Which onboarding aids are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Assistance Mode",
      "Assisted Setup",
      "Teaching Tips",
      "Onboarding Checklist"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Business Central provides multiple onboarding tools: Assistance Mode (contextual help), Assisted Setup (guided wizards), Teaching Tips (inline UI hints), and Onboarding Checklist (task-based getting-started guide)."
  },
  {
    id: 238,
    text: "Which table type usually stores configuration, such as Sales & Receivables Setup?",
    type: "single",
    choices: [
      "Master table",
      "Document table",
      "Setup table",
      "Ledger table"
    ],
    correct: [2],
    explanation: "Setup tables store configuration data and typically use the single-record pattern. The Sales & Receivables Setup table is a classic example."
  },
  {
    id: 239,
    text: "Which master data standards are recommended? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Use consistent naming and numbering conventions",
      "Validate required fields",
      "Use templates for quick creation",
      "Duplicate master data whenever possible"
    ],
    correct: [0, 1, 2],
    explanation: "Master data best practices include consistent naming/numbering, field validation, and using templates. Duplicating master data creates maintenance problems and inconsistencies."
  },
  {
    id: 240,
    text: "Which are recommended file-handling practices in SaaS? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Use streams",
      "Use Temp Blob",
      "Use File Management codeunits",
      "Depend on direct server file system access"
    ],
    correct: [0, 1, 2],
    explanation: "In SaaS, direct file system access is not available, so the recommended approach is to use streams, Temp Blob for temporary storage, and File Management codeunits."
  },
  {
    id: 241,
    text: "What does Error(Message) do in AL?",
    type: "single",
    choices: [
      "Shows a message and continues normally",
      "Stops execution and rolls back the transaction",
      "Logs telemetry only",
      "Changes user permissions"
    ],
    correct: [1],
    explanation: "The Error() function stops code execution immediately and rolls back the current transaction, displaying the error message to the user."
  },
  {
    id: 242,
    text: "Which error-handling approaches are noted? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "TestField",
      "AssertError",
      "TryFunction",
      "Confirm"
    ],
    correct: [0, 1, 2],
    explanation: "TestField validates field values and raises errors, AssertError is used in tests to verify expected errors, and TryFunction catches errors without rolling back transactions. Confirm is for user prompts, not error handling."
  },
  {
    id: 243,
    text: "What is the Business Central Test Toolkit?",
    type: "single",
    choices: [
      "A SQL tuning wizard",
      "A Microsoft-provided app with test libraries and standard tests",
      "A browser plugin",
      "A reporting layout editor"
    ],
    correct: [1],
    explanation: "The Test Toolkit is a Microsoft-provided application containing test libraries (like Library - Sales, Library - Purchase) and standard test codeunits for automated testing."
  },
  {
    id: 244,
    text: "Which testing practices are recommended? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Always run tests in isolated environments",
      "Use test isolation",
      "Integrate tests into the CI/CD pipeline",
      "Run tests directly against live production data"
    ],
    correct: [0, 1, 2],
    explanation: "Best practices include isolated test environments, test isolation (using TransactionModel), and CI/CD integration. Running tests against live production data is dangerous and should be avoided."
  },
  {
    id: 245,
    text: "What is the standard testing pattern mentioned for test codeunits?",
    type: "single",
    choices: [
      "Read-Post-Delete",
      "Arrange-Act-Assert",
      "Open-Close-Restart",
      "Import-Export-Archive"
    ],
    correct: [1],
    explanation: "The Arrange-Act-Assert (AAA) pattern is the standard: Arrange sets up test data, Act executes the functionality, and Assert verifies the expected outcome."
  },
  {
    id: 246,
    text: "Which telemetry signals are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "AL code execution",
      "Errors and warnings",
      "Page and report usage",
      "API calls and integrations"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Business Central emits telemetry for AL code execution, errors/warnings, page and report usage, and API calls/integrations, all of which can be monitored via Application Insights."
  },
  {
    id: 247,
    text: "Which service is recommended for production telemetry monitoring in SaaS?",
    type: "single",
    choices: [
      "Azure Application Insights",
      "OneDrive",
      "Microsoft Word",
      "Device Manager"
    ],
    correct: [0],
    explanation: "Azure Application Insights is the recommended service for monitoring Business Central SaaS telemetry, providing dashboards, alerts, and KQL query capabilities."
  },
  {
    id: 248,
    text: "Which HTTP communication objects are listed? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "HttpClient",
      "HttpRequestMessage",
      "HttpResponseMessage",
      "HttpContent"
    ],
    correct: [0, 1, 2, 3],
    explanation: "AL provides HttpClient for sending requests, HttpRequestMessage and HttpResponseMessage for building/reading HTTP messages, and HttpContent for the request/response body."
  },
  {
    id: 249,
    text: "Which REST method is typically used to retrieve data?",
    type: "single",
    choices: [
      "POST",
      "PUT",
      "GET",
      "DELETE"
    ],
    correct: [2],
    explanation: "GET is the standard HTTP method for retrieving data without side effects. POST creates resources, PUT updates them, and DELETE removes them."
  },
  {
    id: 250,
    text: "Which JSON-related types are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "JsonObject",
      "JsonArray",
      "JsonToken",
      "JsonTextReader"
    ],
    correct: [0, 1, 2, 3],
    explanation: "AL includes JsonObject, JsonArray, and JsonToken for JSON manipulation. JsonTextReader is also referenced as a type for reading JSON text streams."
  },
  {
    id: 251,
    text: "In the three-tier architecture, which tier includes browser, desktop, or mobile apps?",
    type: "single",
    choices: [
      "Data tier",
      "Service tier",
      "Presentation tier",
      "API tier"
    ],
    correct: [2],
    explanation: "The Presentation tier contains the client applications (browser-based web client, desktop app, or mobile app) that users interact with directly."
  },
  {
    id: 252,
    text: "Which characteristics are associated with the on-premises deployment model? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Customer controls servers",
      "Customer manages updates",
      "Requires local setup",
      "Uses subscription-based licensing only"
    ],
    correct: [0, 1, 2],
    explanation: "On-premises deployments give customers control over their servers, require them to manage updates, and need local infrastructure setup. Subscription licensing is not exclusive to on-premises."
  },
  {
    id: 253,
    text: "Which SaaS monitoring tool is integrated with Business Central to collect telemetry and application insights?",
    type: "single",
    choices: [
      "Azure DevOps Boards",
      "Azure Application Insights",
      "Windows Event Viewer only",
      "SQL Profiler"
    ],
    correct: [1],
    explanation: "Azure Application Insights is explicitly cited as the monitoring tool for Business Central SaaS, enabling telemetry collection and analysis."
  },
  {
    id: 254,
    text: "Which integration options does Business Central support for connecting with external systems? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "APIs",
      "OData",
      "Power Platform connectors",
      "COBOL adapters"
    ],
    correct: [0, 1, 2],
    explanation: "Business Central supports integration through APIs, OData web services, and Power Platform connectors. COBOL adapters are not a named integration option."
  },
  {
    id: 255,
    text: "For on-premises environments, what is normally required for updates?",
    type: "single",
    choices: [
      "Microsoft performs all upgrades automatically",
      "Updates must be downloaded and installed by the customer or partner",
      "Updates are impossible after installation",
      "Reinstalling Windows is always required"
    ],
    correct: [1],
    explanation: "In on-premises deployments, the customer or their partner is responsible for downloading and installing updates, unlike SaaS where Microsoft handles this automatically."
  },
  {
    id: 256,
    text: "Which are listed as best practices before applying updates? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Use test environments",
      "Monitor performance after updates",
      "Review release notes",
      "Ignore extension compatibility"
    ],
    correct: [0, 1, 2],
    explanation: "Before applying updates: use test/staging environments, review the release notes for breaking changes, and monitor performance afterward. Extension compatibility must always be checked."
  },
  {
    id: 257,
    text: "Which licensing edition includes manufacturing and service management in addition to Essentials features?",
    type: "single",
    choices: [
      "Team Member",
      "Device",
      "Premium",
      "Trial"
    ],
    correct: [2],
    explanation: "The Premium license includes everything in Essentials plus Manufacturing and Service Management (Jobs/Projects in newer versions) modules."
  },
  {
    id: 258,
    text: "Which statements about apps in Business Central are correct? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Apps extend the base application",
      "Apps can be installed from AppSource",
      "Apps can be custom-built",
      "Apps must always modify the base source code directly"
    ],
    correct: [0, 1, 2],
    explanation: "Apps extend Business Central without touching the base code. They can be installed from AppSource or built custom by partners. Modifying base source code directly is not supported or recommended."
  },
  {
    id: 259,
    text: "What is created during the packaging step for an AL app?",
    type: "single",
    choices: [
      "An .alpackages folder",
      "An .app file",
      "A SQL backup file",
      "A report dataset"
    ],
    correct: [1],
    explanation: "The packaging step compiles the AL extension into an .app file (a zip-format archive), which is the deployable artifact for Business Central extensions."
  },
  {
    id: 260,
    text: "Which validations are part of the app validation stage before AppSource publishing? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "AppSourceCop analysis",
      "CodeCop analysis",
      "Tests for functionality",
      "Paint-based UI review"
    ],
    correct: [0, 1, 2],
    explanation: "AppSource validation includes AppSourceCop (AppSource-specific rules), CodeCop (general code quality rules), and functional test execution. There is no paint-based UI review."
  },
  {
    id: 261,
    text: "What should happen when breaking changes are introduced in an app update?",
    type: "single",
    choices: [
      "They should be hidden from users",
      "They should be documented and minimized",
      "They should be applied only in telemetry",
      "They should be added without version changes"
    ],
    correct: [1],
    explanation: "Breaking changes must be documented clearly and minimized wherever possible. Version numbers should reflect the severity of changes (major version bump for breaking changes)."
  },
  {
    id: 262,
    text: "Which of the following are required or commonly used properties in an AL extension's app.json file? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "name",
      "publisher",
      "dependencies",
      "screenshots"
    ],
    correct: [0, 1, 2, 3],
    explanation: "app.json includes name, publisher, dependencies (for referencing other extensions), and screenshots (for AppSource marketplace listing)."
  },
  {
    id: 263,
    text: "What is the purpose of the runtime field in app.json?",
    type: "single",
    choices: [
      "It stores the user's role center",
      "It defines the runtime version",
      "It binds a page to a source table",
      "It controls SQL indexing"
    ],
    correct: [1],
    explanation: "The runtime field in app.json specifies the minimum AL runtime version that the extension targets, affecting which language features and APIs are available."
  },
  {
    id: 264,
    text: "Which launch.json entries are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "serverInstance",
      "schemaUpdateMode",
      "enableLongRunningSqlStatements",
      "target"
    ],
    correct: [0, 1, 2, 3],
    explanation: "launch.json can contain serverInstance (BC server name), schemaUpdateMode (how schema changes are applied), enableLongRunningSqlStatements (for debugging), and target (SaaS or OnPrem)."
  },
  {
    id: 265,
    text: "What is required when debugging AL extensions?",
    type: "single",
    choices: [
      "Power BI Desktop only",
      "A launch.json configuration",
      "A report extension object",
      "A permission set extension"
    ],
    correct: [1],
    explanation: "Debugging AL extensions in VS Code requires a launch.json file that defines the connection to the BC server or sandbox where the debugger will attach."
  },
  {
    id: 266,
    text: "Which debugging practices are noted? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Use breakpoints",
      "Attach to sandbox or container",
      "Use AL code comments as the only debugger",
      "Configure launch.json first"
    ],
    correct: [0, 1, 3],
    explanation: "Effective debugging involves setting breakpoints, attaching to a sandbox or Docker container, and configuring launch.json. Code comments alone are not a debugging strategy."
  },
  {
    id: 267,
    text: "What is a key structural element of a Role Center?",
    type: "single",
    choices: [
      "API publishers",
      "Cues with indicators for KPIs",
      "XML attributes",
      "Query filters only"
    ],
    correct: [1],
    explanation: "Cues (CueGroups) with numeric indicators are a key structural element of Role Centers, giving users an at-a-glance view of important KPIs like open orders or overdue payments."
  },
  {
    id: 268,
    text: "Which best practices are recommended for Role Centers? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Keep them simple",
      "Make them role-specific",
      "Use CueGroups to organize KPIs",
      "Fill them with all company data for every role"
    ],
    correct: [0, 1, 2],
    explanation: "Role Center best practices include keeping them clean and simple, tailoring them to specific roles, and organizing KPIs with CueGroups. Overloading them with irrelevant data is counterproductive."
  },
  {
    id: 269,
    text: "Which page type is mainly used for line-oriented processing and batch work?",
    type: "single",
    choices: [
      "Card",
      "Worksheet",
      "Role Center",
      "API page"
    ],
    correct: [1],
    explanation: "Worksheet pages are designed for line-oriented data entry and batch processing tasks, such as general journals or item journals, where users work with multiple rows simultaneously."
  },
  {
    id: 270,
    text: "Which page extension capabilities are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Add fields",
      "Add actions",
      "Add parts",
      "Modify existing pages"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Page extensions can add fields, add actions (to action bars), add parts (FactBoxes or sub-pages), and modify properties of existing page elements."
  },
  {
    id: 271,
    text: "Which page extension property group is referenced for controlling layout changes?",
    type: "single",
    choices: [
      "addlast, addafter, moveafter",
      "APIPublisher, APIGroup, APIVersion",
      "DataItemLink, DataItemTableView, ReqFilterFields",
      "ODataKeyFields, DelayedInsert, RefreshOnActivate"
    ],
    correct: [0],
    explanation: "Layout positioning keywords like addlast, addafter, addfirst, addmoveafter are used in page extensions to control where new controls are placed relative to existing ones."
  },
  {
    id: 272,
    text: "Which of the following statements about table keys in Business Central are correct? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Primary keys exist",
      "Secondary keys can be unique or non-unique",
      "Secondary keys can only be one per table",
      "Keys affect how data is organized"
    ],
    correct: [0, 1, 3],
    explanation: "Tables have a primary key and can have multiple secondary keys. Secondary keys can be unique or non-unique, and keys determine physical/logical data organization and query performance."
  },
  {
    id: 273,
    text: "What is said about changing primary keys in table extensions?",
    type: "single",
    choices: [
      "It is recommended",
      "It should be avoided",
      "It is mandatory for all customizations",
      "It is required for AppSource validation"
    ],
    correct: [1],
    explanation: "Changing primary keys in table extensions should be avoided because it can cause data migration issues, break existing code, and fail AppSource validation."
  },
  {
    id: 274,
    text: "Which of the following statements about Business Central report layouts are correct? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "RDLC is client-side",
      "Word layouts are useful for business documents",
      "Excel layouts are useful for tabular exports",
      "Processing-only reports have no layout"
    ],
    correct: [0, 1, 2, 3],
    explanation: "RDLC renders client-side, Word layouts are great for business documents (invoices/letters), Excel suits tabular data exports, and processing-only reports execute code without producing a visual output."
  },
  {
    id: 275,
    text: "What is the purpose of a report request page?",
    type: "single",
    choices: [
      "To render the final dataset",
      "To let users define filters and options before running the report",
      "To replace report layouts",
      "To handle AL event subscriptions"
    ],
    correct: [1],
    explanation: "The report request page appears before the report runs, allowing users to set date filters, sort options, and other parameters that control the report's output."
  },
  {
    id: 276,
    text: "Which report design best practices are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Keep the data model lean",
      "Use SetRange/SetFilter to control data",
      "Avoid unnecessary joins and nested items",
      "Always add every field from every table"
    ],
    correct: [0, 1, 2],
    explanation: "Report best practices include keeping the data model lean, using SetRange/SetFilter to limit data, and avoiding unnecessary joins. Adding every field from every table creates bloat and poor performance."
  },
  {
    id: 277,
    text: "What is a substitute report used for?",
    type: "single",
    choices: [
      "Replacing a standard report with a customized one",
      "Exporting XML files",
      "Creating telemetry events",
      "Managing API versions"
    ],
    correct: [0],
    explanation: "A substitute report allows a custom report to replace a standard one when triggered from standard Business Central processes, without modifying base code."
  },
  {
    id: 278,
    text: "Which XMLport properties are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Format",
      "UseRequestPage",
      "FieldSeparator",
      "PreserveWhitespace"
    ],
    correct: [0, 1, 2, 3],
    explanation: "XMLport properties include Format (XML or Variable/Fixed text), UseRequestPage (show request page before running), FieldSeparator (for CSV/text formats), and PreserveWhitespace (text handling)."
  },
  {
    id: 279,
    text: "What is the main role of XmlName/field appearance control in XMLports?",
    type: "single",
    choices: [
      "It changes SQL keys",
      "It controls how nodes appear in the model/output",
      "It grants permissions",
      "It creates page actions"
    ],
    correct: [1],
    explanation: "The XmlName property and field appearance settings in XMLports control how the nodes are named and structured in the XML or text output, ensuring correct formatting."
  },
  {
    id: 280,
    text: "Which XMLport best practices are listed? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Keep node hierarchy clean and logical",
      "Avoid unnecessary nested nodes",
      "Validate imported data before insertion",
      "Always write directly to posted tables first"
    ],
    correct: [0, 1, 2],
    explanation: "XMLport best practices include clean node hierarchies, avoiding unnecessary nesting, and validating imported data before inserting. Writing directly to posted tables bypasses important business rules."
  },
  {
    id: 281,
    text: "What is highlighted as a benefit of codeunits besides reusability?",
    type: "single",
    choices: [
      "Automatic UI rendering",
      "Performance efficiency for background or batch processing",
      "Built-in licensing control",
      "Mandatory use for all fields"
    ],
    correct: [1],
    explanation: "Besides reusability, codeunits provide performance efficiency, especially for background jobs and batch processing where logic runs server-side without UI overhead."
  },
  {
    id: 282,
    text: "What are install codeunits used for? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Running once when an extension is installed",
      "Initializing setup",
      "Setting default values",
      "Managing report Excel formulas"
    ],
    correct: [0, 1, 2],
    explanation: "Install codeunits run once on extension installation to initialize setup records and set default values. They are not used for managing report Excel formulas."
  },
  {
    id: 283,
    text: "What are upgrade codeunits primarily intended for?",
    type: "single",
    choices: [
      "Styling role centers",
      "Migrating or transforming data between extension versions",
      "Replacing HTTP methods",
      "Defining API routes"
    ],
    correct: [1],
    explanation: "Upgrade codeunits execute during extension version upgrades to migrate, transform, or clean up data that needs to be updated to match the new version's data model."
  },
  {
    id: 284,
    text: "Which event types are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Integration events",
      "Business events",
      "Trigger events",
      "Profile events"
    ],
    correct: [0, 1, 2],
    explanation: "Business Central supports Integration events (for external/internal integrations), Business events (significant business actions), and Trigger events (built-in object triggers). Profile events are not an event category."
  },
  {
    id: 285,
    text: "What makes business events important?",
    type: "single",
    choices: [
      "They are intended for external systems",
      "They always change database keys",
      "They are only for Role Centers",
      "They remove the need for AL code"
    ],
    correct: [0],
    explanation: "Business events are designed to notify external systems or other extensions when significant business actions occur (like posting an invoice), enabling decoupled integrations."
  },
  {
    id: 286,
    text: "Why use interfaces in AL? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Promote flexibility",
      "Support plug-and-play behavior",
      "Enable unit testing and mocking",
      "Replace all tables"
    ],
    correct: [0, 1, 2],
    explanation: "AL interfaces promote flexibility by decoupling callers from implementations, support plug-and-play by allowing different codeunit implementations, and enable mocking in unit tests. They do not replace tables."
  },
  {
    id: 287,
    text: "What is the purpose of permission sets in Business Central?",
    type: "single",
    choices: [
      "To define the app icon",
      "To bundle access rights to objects and operations",
      "To manage API publishers",
      "To schedule background tasks"
    ],
    correct: [1],
    explanation: "Permission sets bundle together the access rights (read, insert, modify, delete, execute) to specific objects, which can then be assigned to users or user groups."
  },
  {
    id: 288,
    text: "Which object access levels are referenced in permission sets? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Read",
      "Insert",
      "Modify",
      "Delete"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Permission sets define RIMD access: Read, Insert, Modify, and Delete (plus Execute for codeunits/reports). All four are standard access levels."
  },
  {
    id: 289,
    text: "What are system or extension-generated permission sets under entitlements used for?",
    type: "single",
    choices: [
      "Granting access automatically when required by license or extension behavior",
      "Creating page layouts",
      "Renaming table fields",
      "Replacing user groups"
    ],
    correct: [0],
    explanation: "System/extension-generated permission sets under entitlements are automatically granted to users when their license or installed extensions require specific access, without manual assignment."
  },
  {
    id: 290,
    text: "Which common permission issues are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Users cannot access a page or report",
      "Background tasks fail due to missing execute permissions",
      "Data is visible but not editable",
      "JSON parsing fails because of permissions"
    ],
    correct: [0, 1, 2],
    explanation: "Common permission issues include inaccessible pages/reports, background job failures from missing execute rights, and read-only data when modify permission is absent. JSON parsing failures are not permission-related."
  },
  {
    id: 291,
    text: "What does DataItem in a query represent?",
    type: "single",
    choices: [
      "An XML node",
      "A table in the query",
      "A report request field",
      "A telemetry alert"
    ],
    correct: [1],
    explanation: "In an AL query object, a DataItem represents a table that the query reads from, similar to a FROM clause in SQL."
  },
  {
    id: 292,
    text: "Which query join concepts are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "DataItemLink",
      "Inner join",
      "Outer joins must be handled via logic",
      "Queries only support text joins"
    ],
    correct: [0, 1, 2],
    explanation: "DataItemLink creates inner joins between DataItems. Outer joins are not natively supported and must be handled with additional logic. Queries support all data types, not just text."
  },
  {
    id: 293,
    text: "How can queries help with reports?",
    type: "single",
    choices: [
      "They can act as a reusable data source, especially for joined or aggregated data",
      "They replace layouts completely",
      "They create entitlement sets",
      "They are only for OData"
    ],
    correct: [0],
    explanation: "Queries can serve as the data source for reports, providing pre-joined, aggregated, or filtered datasets that improve performance and reusability across multiple reports."
  },
  {
    id: 294,
    text: "Which UI personalization concepts are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Profiles link to Role Centers",
      "Views are saved filters and sort orders",
      "Views help users access relevant data quickly",
      "Profiles are the same as permission sets"
    ],
    correct: [0, 1, 2],
    explanation: "Profiles define Role Centers (what users see as their home page), and views are saved filter/sort configurations on list pages. Profiles and permission sets are different concepts."
  },
  {
    id: 295,
    text: "What is Assistance Mode intended to do?",
    type: "single",
    choices: [
      "Compile AL code",
      "Guide users through understanding the UI with help content",
      "Replace assisted setup",
      "Publish apps to AppSource"
    ],
    correct: [1],
    explanation: "Assistance Mode provides contextual help and guidance to users, helping them understand what fields and pages do by surfacing relevant help content inline."
  },
  {
    id: 296,
    text: "Which onboarding checklist facts are noted? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "It is shown to new users",
      "It helps them get started",
      "It can include links and tasks",
      "It automatically changes posting routines"
    ],
    correct: [0, 1, 2],
    explanation: "The onboarding checklist is shown to new users to help them get started, and it can contain task items with links to guided setup pages. It does not modify posting routines."
  },
  {
    id: 297,
    text: "In the data process model, what do journals represent?",
    type: "single",
    choices: [
      "Only archived PDF files",
      "Intermediate data entry before posting",
      "Final posted records",
      "User profile metadata"
    ],
    correct: [1],
    explanation: "Journals (like General Journal, Item Journal) represent the intermediate stage where transactions are entered and validated before being permanently posted to ledger tables."
  },
  {
    id: 298,
    text: "Which functional table types are listed? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Master tables",
      "Document tables",
      "Journal tables",
      "Ledger tables"
    ],
    correct: [0, 1, 2, 3],
    explanation: "The main functional table types in Business Central are Master tables (customers, items), Document tables (orders, invoices), Journal tables (temporary entry), and Ledger tables (permanent posted entries)."
  },
  {
    id: 299,
    text: "Which document standard is recommended?",
    type: "single",
    choices: [
      "Avoid standard posting routines",
      "Use header-line structure",
      "Remove posting dates",
      "Store posted entries in journals"
    ],
    correct: [1],
    explanation: "Business Central uses a header-line document structure (e.g., Sales Header + Sales Lines) as the standard pattern for all document types, ensuring consistency and compatibility with posting routines."
  },
  {
    id: 300,
    text: "Which design pattern recommendations are mentioned? (Select ALL that apply)",
    type: "multiple",
    choices: [
      "Single-record pattern for setup tables",
      "Factory pattern for creating documents from master data",
      "Event-driven pattern for extending behavior without modifying base code",
      "Duplicate logic pattern for every extension"
    ],
    correct: [0, 1, 2],
    explanation: "Recommended patterns include single-record for setup tables, factory pattern for document creation, and event-driven for non-invasive extensions. Duplicating logic is an anti-pattern that creates maintenance problems."
  }
];
