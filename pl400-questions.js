// PL-400: Microsoft Power Platform Developer
// Proficient / scenario-based questions

const pl400Questions = [
  // ── Create a Technical Design ────────────────────────────────────────────
  {
    id: 1,
    text: "A developer needs to create a custom connector that integrates a third-party REST API with Power Platform. The API uses OAuth 2.0 with the authorization code flow. Which configuration section in the custom connector wizard should be used to define the OAuth 2.0 settings?",
    type: "single",
    choices: [
      "General",
      "Security",
      "Definition",
      "Test"
    ],
    correct: [1],
    explanation: "The Security section of the custom connector wizard is where authentication settings are configured, including OAuth 2.0 with the authorization code flow. This is where you define the client ID, client secret, authorization URL, and token URL."
  },
  {
    id: 2,
    text: "A company wants to enforce a business rule in Dataverse that prevents saving a record when the revenue field is negative. Which two approaches can achieve this without writing any client-side code? (Select TWO)",
    type: "multiple",
    choices: [
      "Business rule with a condition and Show error message action",
      "Calculated column",
      "Power Automate cloud flow triggered on record creation",
      "Business rule with a condition and Lock or unlock fields action",
      "Column-level security profile"
    ],
    correct: [0, 2],
    explanation: "A Business rule with a condition and Show error message action will prevent saving on the form client-side. A Power Automate cloud flow triggered on record creation/update can also validate and reject records server-side. Both approaches require no custom client-side JavaScript."
  },
  // ── Configure Microsoft Dataverse ────────────────────────────────────────
  {
    id: 3,
    text: "A developer needs to ensure that only users with the System Administrator role can read a specific column in a Dataverse table. What feature should be used?",
    type: "single",
    choices: [
      "Column-level security profiles",
      "Table permissions",
      "Record-level sharing",
      "Team-based security roles"
    ],
    correct: [0],
    explanation: "Column-level security profiles in Dataverse allow you to restrict read, create, and update access to specific columns to only those users or teams that are members of the profile. This is the correct feature for restricting access to individual columns."
  },
  {
    id: 4,
    text: "You are designing a Dataverse solution that requires storing data shared across multiple environments without duplication. Which table type should be used?",
    type: "single",
    choices: [
      "Standard table",
      "Virtual table",
      "Elastic table",
      "Activity table"
    ],
    correct: [1],
    explanation: "Virtual tables allow data stored in external systems to be represented as Dataverse tables without physically storing the data in Dataverse. This avoids duplication while making external data available across environments through the Dataverse API."
  },
  // ── Create and configure Power Apps ─────────────────────────────────────
  {
    id: 5,
    text: "A canvas app developer needs to display a collection of product images retrieved from SharePoint. Each image must link to a detail screen when tapped. Which control is best suited for this requirement?",
    type: "single",
    choices: [
      "Data table",
      "Gallery with an Image control inside",
      "List box",
      "Form control"
    ],
    correct: [1],
    explanation: "A Gallery control can display a collection of records (including images from SharePoint) and supports an OnSelect property for navigation to a detail screen when an item is tapped. An Image control inside the gallery renders each record's image."
  },
  {
    id: 6,
    text: "Which two statements about model-driven app views are correct? (Select TWO)",
    type: "multiple",
    choices: [
      "System views can be edited and deleted by any user",
      "Personal views are only visible to the user who created them",
      "Public views are available to all users with access to the table",
      "System views can be hidden from the app but not deleted",
      "Views can reference columns from related tables using FETCHXML"
    ],
    correct: [1, 2],
    explanation: "Personal views are created by individual users and are only visible to them. Public views are created by administrators or customizers and are available to all users who have access to the table. System views cannot be deleted (they can only be deactivated or hidden)."
  },
  // ── Configure business process automation ────────────────────────────────
  {
    id: 7,
    text: "A company needs to send an approval email whenever a new expense report is submitted in Dataverse, wait for the approval response, and then update the expense report status. Which Power Platform feature is best suited?",
    type: "single",
    choices: [
      "Canvas app with a button trigger",
      "Power Automate cloud flow with the Approvals connector",
      "Business rule in Dataverse",
      "Classic workflow in Dataverse"
    ],
    correct: [1],
    explanation: "Power Automate cloud flows with the Approvals connector support multi-step approval workflows with email notifications and waiting for responses. This is the recommended modern approach for approval scenarios in Power Platform."
  },
  {
    id: 8,
    text: "You need to configure a business process flow (BPF) in Dataverse that spans two tables: Opportunity and Quote. Which statement about this configuration is correct?",
    type: "single",
    choices: [
      "A BPF cannot span more than one table",
      "Cross-table BPFs require a custom plugin",
      "You can add a second table by using the Expand Entity option in the BPF designer",
      "Only the N:N relationship can be used to connect tables in a BPF"
    ],
    correct: [2],
    explanation: "The Business Process Flow designer supports cross-entity (cross-table) flows. You can expand to a second entity using the 'Expand Entity' option, which allows the BPF to include stages from a related table like Quote after the Opportunity stages."
  },
  // ── Extend the user experience ───────────────────────────────────────────
  {
    id: 9,
    text: "A developer needs to add a custom button to the model-driven app command bar that calls a Power Automate flow with the selected record's ID. Which modern approach should be used?",
    type: "single",
    choices: [
      "Ribbon Workbench",
      "Command Bar Designer in the Power Apps maker portal",
      "JavaScript web resource added to the form",
      "Site map editor"
    ],
    correct: [1],
    explanation: "The Command Bar Designer (available in the Power Apps maker portal under the model-driven app editor) is the modern, no-code approach for adding and configuring commands including ones that trigger Power Automate flows with record context."
  },
  {
    id: 10,
    text: "Which two types of PCF (Power Apps Component Framework) controls exist? (Select TWO)",
    type: "multiple",
    choices: [
      "Field controls",
      "Dataset controls",
      "Form controls",
      "View controls",
      "Canvas controls"
    ],
    correct: [0, 1],
    explanation: "PCF supports two types of controls: Field controls (bound to a single field/column on a form) and Dataset controls (bound to a view or dataset, used to render lists of records). These are the two component types defined in the PCF manifest."
  },
  // ── Extend the platform ──────────────────────────────────────────────────
  {
    id: 11,
    text: "A developer is writing a Dataverse plug-in that needs to run synchronously and prevent a record from being saved if a validation rule fails. Which message and stage should the plug-in be registered on?",
    type: "single",
    choices: [
      "Post-operation, asynchronous",
      "Pre-validation, synchronous",
      "Pre-operation, synchronous",
      "Post-operation, synchronous"
    ],
    correct: [2],
    explanation: "A Pre-operation synchronous plug-in runs before the database operation and can throw an InvalidPluginExecutionException to cancel the save. Pre-validation runs before security checks, while Pre-operation is the correct stage for blocking saves with access to the full execution context."
  },
  {
    id: 12,
    text: "When should you use a Dataverse plug-in instead of a Power Automate cloud flow? (Select TWO)",
    type: "multiple",
    choices: [
      "When you need to perform complex real-time validation that cancels the database transaction",
      "When you need to send an email notification after a record is created",
      "When sub-millisecond response time is required for synchronous operations",
      "When the logic must be triggered by a scheduled recurrence",
      "When you need server-side logic that works even without a licensed Power Automate user"
    ],
    correct: [0, 2],
    explanation: "Plug-ins are preferable when you need synchronous real-time logic that can roll back the transaction (not possible with cloud flows), or when very low latency is required. Cloud flows add overhead due to their asynchronous nature and are not suitable for blocking transactional operations."
  },
  // ── Develop integrations ─────────────────────────────────────────────────
  {
    id: 13,
    text: "A developer needs to query Dataverse data from an external application using the Web API. The query must retrieve all active Account records where the annual revenue is greater than 1,000,000, including only the name and revenue columns. Which OData query option correctly filters and selects these columns?",
    type: "single",
    choices: [
      "$filter=statecode eq 0 and revenue gt 1000000&$select=name,revenue",
      "$where=statecode=0 and revenue>1000000&$columns=name,revenue",
      "$filter=statuscode eq 1&$select=name,revenue",
      "$query=active and revenue gt 1000000&$fields=name,revenue"
    ],
    correct: [0],
    explanation: "The Dataverse Web API uses OData syntax. $filter with statecode eq 0 (Active) and revenue gt 1000000 correctly filters the records. $select=name,revenue returns only those columns. The other options use incorrect query syntax not supported by OData/Dataverse."
  },
  {
    id: 14,
    text: "You are building a Power Pages (portals) website that needs to display Dataverse records to anonymous users. Which configuration must be set up to allow anonymous access to Dataverse table data?",
    type: "single",
    choices: [
      "Grant System Administrator access to the anonymous user role",
      "Configure Table Permissions with the Anonymous Users web role",
      "Disable column-level security for the table",
      "Set the table ownership to Organization"
    ],
    correct: [1],
    explanation: "Power Pages uses Table Permissions to control which records and operations external users (including anonymous users) can access. The Anonymous Users web role must be configured with appropriate Table Permissions to allow unauthenticated access to Dataverse data."
  }
];
