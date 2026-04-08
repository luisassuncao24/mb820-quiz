// PL-400: Microsoft Power Platform Developer
// Foundational / conceptual questions

const pl400Questions2 = [
  // ── Power Platform fundamentals ──────────────────────────────────────────
  {
    id: 101,
    text: "Which Power Platform component is used to automate repetitive tasks and integrate with external services?",
    type: "single",
    choices: [
      "Power Apps",
      "Power BI",
      "Power Automate",
      "Power Virtual Agents"
    ],
    correct: [2],
    explanation: "Power Automate (formerly Microsoft Flow) is the Power Platform component designed for automating workflows and integrating with hundreds of external services through connectors."
  },
  {
    id: 102,
    text: "What is the primary data platform for Power Platform?",
    type: "single",
    choices: [
      "Azure SQL Database",
      "Microsoft Dataverse",
      "SharePoint Lists",
      "Azure Cosmos DB"
    ],
    correct: [1],
    explanation: "Microsoft Dataverse (formerly Common Data Service) is the primary data platform for Power Platform. It provides a cloud-based storage service that enables secure data storage and business logic."
  },
  {
    id: 103,
    text: "Which two types of Power Apps can be created? (Select TWO)",
    type: "multiple",
    choices: [
      "Canvas apps",
      "Script apps",
      "Model-driven apps",
      "Backend apps",
      "Query apps"
    ],
    correct: [0, 2],
    explanation: "Power Apps supports two main types: Canvas apps (where you design the UI by dragging and dropping elements on a canvas with full layout control) and Model-driven apps (where the UI is generated automatically based on the Dataverse data model)."
  },
  {
    id: 104,
    text: "What is a solution in the context of Power Platform?",
    type: "single",
    choices: [
      "A compiled binary package deployed to Azure",
      "A container that holds customizations and components for transport between environments",
      "A Power BI report package",
      "An Azure DevOps pipeline configuration"
    ],
    correct: [1],
    explanation: "A solution in Power Platform is a container that holds customizations such as apps, flows, tables, and other components. Solutions are used to transport these customizations between environments (e.g., from development to production)."
  },
  {
    id: 105,
    text: "What is the difference between a managed and unmanaged solution?",
    type: "single",
    choices: [
      "Managed solutions can be edited; unmanaged solutions cannot",
      "Unmanaged solutions can be edited; managed solutions have restrictions on modification",
      "Managed solutions are for canvas apps only",
      "Unmanaged solutions cannot be exported"
    ],
    correct: [1],
    explanation: "Unmanaged solutions allow full editing and are typically used in development environments. Managed solutions are deployed to non-development environments; their components have restrictions on modification and are meant to protect the solution's integrity."
  },
  // ── Dataverse fundamentals ───────────────────────────────────────────────
  {
    id: 106,
    text: "What is a Dataverse environment?",
    type: "single",
    choices: [
      "A virtual machine that hosts Power Platform",
      "An isolated space that stores data, apps, and flows and enforces security boundaries",
      "A subscription tier for licensing",
      "A development IDE for Power Platform"
    ],
    correct: [1],
    explanation: "A Dataverse environment is an isolated container that stores data (in Dataverse tables), apps, flows, and other components. Each environment has its own security model and is used to separate development, testing, and production workloads."
  },
  {
    id: 107,
    text: "Which two relationship types are supported between Dataverse tables? (Select TWO)",
    type: "multiple",
    choices: [
      "One-to-Many (1:N)",
      "One-to-One (1:1)",
      "Many-to-Many (N:N)",
      "Zero-to-Many (0:N)",
      "Hierarchical (parent-child)"
    ],
    correct: [0, 2],
    explanation: "Dataverse natively supports One-to-Many (1:N) and Many-to-Many (N:N) table relationships. One-to-Many is the most common relationship, while N:N uses an intersect table. One-to-One relationships are not a native Dataverse relationship type."
  },
  {
    id: 108,
    text: "What is the purpose of a lookup column in Dataverse?",
    type: "single",
    choices: [
      "To perform text searches across all columns",
      "To reference a record in another (or the same) table, creating a relationship",
      "To store calculated values based on other columns",
      "To define a primary key for the table"
    ],
    correct: [1],
    explanation: "A lookup column in Dataverse stores a reference (foreign key) to a record in another table. It creates a Many-to-One relationship between the current table and the target table, allowing you to associate records."
  },
  {
    id: 109,
    text: "Which column type in Dataverse automatically calculates its value based on a formula using other columns in the same row?",
    type: "single",
    choices: [
      "Rollup column",
      "Calculated column",
      "Currency column",
      "Choice column"
    ],
    correct: [1],
    explanation: "Calculated columns in Dataverse use a formula based on values in the same row to compute their value automatically when a record is retrieved. Rollup columns aggregate values from related records."
  },
  {
    id: 110,
    text: "What is the correct statement about Dataverse security roles?",
    type: "single",
    choices: [
      "A user can only have one security role at a time",
      "Security roles define what operations users can perform on specific tables and records",
      "Security roles can only be applied to individual users, not teams",
      "Security roles apply only to model-driven apps"
    ],
    correct: [1],
    explanation: "Dataverse security roles define CRUD (Create, Read, Update, Delete) permissions on tables and records for users or teams. A user can have multiple security roles, and roles apply across all Dataverse-connected apps."
  },
  // ── Power Automate fundamentals ───────────────────────────────────────────
  {
    id: 111,
    text: "What is the difference between a cloud flow and a desktop flow in Power Automate?",
    type: "single",
    choices: [
      "Cloud flows run in Azure; desktop flows run locally to automate UI-based tasks",
      "Cloud flows can only use Dataverse; desktop flows can use any connector",
      "Desktop flows are always scheduled; cloud flows are always triggered by events",
      "There is no functional difference; they are just different names for the same flow type"
    ],
    correct: [0],
    explanation: "Cloud flows run in the cloud and automate digital tasks using connectors and APIs. Desktop flows (Robotic Process Automation / RPA) run locally on a machine and automate UI-based tasks, including legacy applications that do not have APIs."
  },
  {
    id: 112,
    text: "What is an environment variable in Power Platform solutions?",
    type: "single",
    choices: [
      "A variable stored in an Azure Key Vault",
      "A solution component that stores parameter values that can differ between environments",
      "A global JavaScript variable used in canvas apps",
      "A column in a Dataverse table"
    ],
    correct: [1],
    explanation: "Environment variables are solution components that store configuration values (like a SharePoint site URL or API endpoint) that can be set differently per environment. This avoids hard-coding environment-specific values in flows and apps."
  },
  {
    id: 113,
    text: "Which connector action is used in Power Automate to retrieve multiple records from Dataverse that match a filter condition?",
    type: "single",
    choices: [
      "Get a row by ID",
      "List rows",
      "Get rows (deprecated)",
      "Search rows"
    ],
    correct: [1],
    explanation: "The 'List rows' action in the Dataverse connector (modern) retrieves multiple records that match a specified filter expression. 'Get a row by ID' retrieves a single record by its primary key."
  },
  {
    id: 114,
    text: "A developer needs a Power Automate flow to run only on weekdays at 9 AM. Which trigger should be used?",
    type: "single",
    choices: [
      "When an HTTP request is received",
      "Recurrence trigger",
      "When a Dataverse row is created",
      "Automated cloud flow trigger"
    ],
    correct: [1],
    explanation: "The Recurrence trigger allows you to schedule a flow at specific intervals. It supports specifying days of the week, which enables running only on weekdays. Other trigger types are event-based or HTTP-based."
  },
  {
    id: 115,
    text: "What happens when a Power Automate cloud flow action fails and no error handling is configured?",
    type: "single",
    choices: [
      "The flow retries the failed action indefinitely",
      "The flow marks itself as succeeded and continues",
      "The flow run is marked as failed and subsequent actions are skipped by default",
      "The flow sends an automatic email notification to the flow owner"
    ],
    correct: [2],
    explanation: "By default, when an action in a Power Automate cloud flow fails, the run is marked as Failed and subsequent actions are skipped. To handle failures, you can configure 'Configure run after' settings on subsequent actions to run on failure."
  },
  // ── Canvas app fundamentals ───────────────────────────────────────────────
  {
    id: 116,
    text: "What does the Patch() function do in Power Apps?",
    type: "single",
    choices: [
      "Retrieves a record from a data source",
      "Creates or updates records in a data source",
      "Deletes a record from a data source",
      "Filters a collection of records"
    ],
    correct: [1],
    explanation: "The Patch() function in Power Apps creates or modifies records in a data source. It can create a new record by passing Defaults(DataSource) or update an existing record by providing its record identity. It's the primary way to write data to a data source in canvas apps."
  },
  {
    id: 117,
    text: "What is the purpose of the OnStart property of a canvas app?",
    type: "single",
    choices: [
      "It runs when the user navigates to a new screen",
      "It defines the app's data connections",
      "It runs once when the app is launched, before any screen is shown",
      "It handles errors that occur during app execution"
    ],
    correct: [2],
    explanation: "The OnStart property runs once when the app is first launched, before any screen is displayed. It is commonly used to initialize variables, load collections, or set global state that the app needs from the start."
  },
  {
    id: 118,
    text: "Which formula is used to navigate to another screen in a canvas app?",
    type: "single",
    choices: [
      "Navigate(ScreenName)",
      "Go(ScreenName)",
      "LoadScreen(ScreenName)",
      "Route(ScreenName)"
    ],
    correct: [0],
    explanation: "The Navigate() function is used in canvas apps to navigate to a different screen. It accepts the screen name as the first parameter and an optional transition type as the second parameter (e.g., ScreenTransition.Fade)."
  },
  {
    id: 119,
    text: "What is a delegation warning in Power Apps, and why does it matter?",
    type: "single",
    choices: [
      "A warning that a control is deprecated and will be removed",
      "A warning that only a subset of records may be processed because the data source cannot execute the formula server-side",
      "A warning that the app has too many screens",
      "A warning that a connector license is required"
    ],
    correct: [1],
    explanation: "Delegation occurs when Power Apps sends a formula to the data source for processing. When a function cannot be delegated (e.g., complex filters not supported by the data source), a delegation warning appears and Power Apps applies the formula only to a limited set of records (by default, up to 500)."
  },
  {
    id: 120,
    text: "Which two built-in functions can be used to work with local collections in canvas apps? (Select TWO)",
    type: "multiple",
    choices: [
      "Collect()",
      "Patch()",
      "ClearCollect()",
      "Filter()",
      "Lookup()"
    ],
    correct: [0, 2],
    explanation: "Collect() adds records to a local collection (creates it if it doesn't exist). ClearCollect() clears the collection first and then adds records. Both are used to work with in-memory collections in canvas apps. Filter() and Lookup() work with data sources and collections but don't modify them."
  }
];
