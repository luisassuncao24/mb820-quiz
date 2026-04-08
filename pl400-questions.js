var pl400Questions = [
  {
    id: 1001,
    text: 'A company manages electric utility equipment. Technicians use Dynamics 365 Field Service mobile app plus a canvas app for maintenance history. Managers currently use a Power BI dashboard but now must work in the field from a single screen.',
    type: 'single',
    choices: [
      'Add the maintenance history app to the Field Service Mobile app.'
    ],
    correct: [0],
    explanation: 'This keeps managers on the same field experience used by technicians and avoids switching between apps.',
  },
  {
    id: 1005,
    text: 'Canvas app must support delegation for filtering/sorting over large datasets.',
    type: 'multiple',
    choices: [
      'SQL Server',
      'Common Data Service (Dataverse)'
    ],
    correct: [0, 1],
    explanation: 'Both are delegation-friendly data sources.',
  },
  {
    id: 1010,
    text: 'Using Liquid templates in a Power Apps portal to display dynamic content.',
    type: 'multiple',
    choices: [
      'Content snippet',
      'Web page',
      'Web template'
    ],
    correct: [0, 1, 2],
    explanation: 'These are the portal artefacts where Liquid can be used directly.',
  },
  {
    id: 1013,
    text: 'Public-facing Power Apps portal: need to change the layout of a specific web page.',
    type: 'multiple',
    choices: [
      'Select the portal app and then select Manage',
      'Select the portal app and then select Edit'
    ],
    correct: [0, 1],
    explanation: 'Both approaches let you work on page layout/content from the portal side.',
  },
  {
    id: 1021,
    text: 'Power Apps maker building a chatbot. The bot must recognize geographic attributes for additional functionality.',
    type: 'single',
    choices: [
      'Slot filling'
    ],
    correct: [0],
    explanation: 'Used to extract structured attributes like geography from user input.',
  },
  {
    id: 1022,
    text: 'Power Apps solution redeployment after deleting a column, modifying views, and adding charts to dashboards.',
    type: 'single',
    choices: [
      'Update the solution.'
    ],
    correct: [0],
    explanation: 'These are standard solution changes that fit an update, not a new solution or patch.',
  },
  {
    id: 1023,
    text: 'Model-driven app users are members of Azure AD security-group team; one user is missing from Team Members and cannot use the app.',
    type: 'single',
    choices: [
      'Add User1 to the group that owns the team.'
    ],
    correct: [0],
    explanation: 'The user must be in the Azure AD group linked to the Dataverse team.',
  },
  {
    id: 1059,
    text: 'Need to display Dataverse data on a Power Apps portal page.',
    type: 'single',
    choices: [
      'Liquid'
    ],
    correct: [0],
    explanation: 'Liquid is the native server-side templating language for Power Pages/portals.',
  },
  {
    id: 1071,
    text: 'Need to find the integer value for an option set when using a non-.NET language.',
    type: 'single',
    choices: [
      'Use Web API and use a PicklistAttributeMetadata request'
    ],
    correct: [0],
    explanation: 'This exposes option-set metadata and corresponding integer values without requiring the .NET Organization Service.',
  },
  {
    id: 1074,
    text: 'Rollup fields for insurance exposure/risk are not updating immediately when a policy is created.',
    type: 'single',
    choices: [
      'Create a plug-in that uses the CalculateRollupFieldRequest method for the rollup field and trigger it on Create of the policy entity'
    ],
    correct: [0],
    explanation: 'This recalculates immediately instead of waiting for the scheduled rollup job.',
  },
  {
    id: 1075,
    text: 'Public survey page on company website must write data into Dataverse without explicit user credentials.',
    type: 'single',
    choices: [
      'Client secret'
    ],
    correct: [0],
    explanation: 'An application identity with client secret is appropriate for server-side or app-to-app authentication without interactive user sign-in.',
  },
  {
    id: 1076,
    text: 'Managed solution import fails because a form with OnLoad/OnSave scripts is missing a component.',
    type: 'single',
    choices: [
      'The web resources were not added to the form before adding the form to the solution'
    ],
    correct: [0],
    explanation: 'Form dependencies must be associated so the solution includes everything needed during import.',
  },
  {
    id: 1082,
    text: 'Group2 must not read a sensitive column; Group1 must be able to read it.',
    type: 'single',
    choices: [
      'Create a field-level security profile for Group1 users to grant the users access to the column'
    ],
    correct: [0],
    explanation: 'With field-level security enabled, only users/profiles granted access can read the secured column.',
  },
  {
    id: 1086,
    text: 'Change tracking is enabled on Account. Need to retrieve delta data by using Organization Service and C#.',
    type: 'single',
    choices: [
      'RetrieveEntityChangesRequest'
    ],
    correct: [0],
    explanation: 'This is the SDK message designed for retrieving tracked changes.',
  },
  {
    id: 1087,
    text: 'Need to delete TableA, but a lookup to TableA appears on a form in TableB, and a delete error occurs.',
    type: 'single',
    choices: [
      'Remove the lookup field to TableA on the TableB form'
    ],
    correct: [0],
    explanation: 'The form-level dependency blocks deletion.',
  },
  {
    id: 1095,
    text: 'Real-time workflow populates a lookup with a default value. Managed solution imported to test causes "Record is not available" when creating a record.',
    type: 'single',
    choices: [
      'Use the Configuration Migration Tool to extract the lookup table data from development and import it to test'
    ],
    correct: [0],
    explanation: 'The lookup data itself must exist in the target environment.',
  },
  {
    id: 1107,
    text: 'Custom page used as contextual dialog in a model-driven app must receive two parameters as a concatenated string split by pipe (|).',
    type: 'multiple',
    choices: [
      'Left(Param("recordId"), Find("|", Param("recordId")) - 1)',
      'Right(Param("recordId"), Len(Param("recordId")) - Find("|", Param("recordId")))'
    ],
    correct: [0, 1],
    explanation: 'These formulas split the string into the left and right values around the delimiter.',
  },
  {
    id: 1109,
    text: 'SolutionA developer needs a new development environment. SolutionA changes must not interfere with SolutionB customizations, even though solutions share components.',
    type: 'single',
    choices: [
      'Import SolutionA as unmanaged and SolutionB as managed'
    ],
    correct: [0],
    explanation: 'SolutionA must remain editable for development. SolutionB should be protected from interference by being installed as managed.',
  },
  {
    id: 1112,
    text: 'Four developers each work in isolated environments refreshed from source control as managed layer. Changes must later be merged into a base solution in a shared sandbox.',
    type: 'single',
    choices: [
      'Export each developer\'s solution as unmanaged'
    ],
    correct: [0],
    explanation: 'Unmanaged export is appropriate for merging isolated development work into a shared base solution.',
  },
  {
    id: 1116,
    text: 'Developers spend many hours deploying customizations to downstream environments and do not have access to IDEs.',
    type: 'single',
    choices: [
      'Use the maker portal'
    ],
    correct: [0],
    explanation: 'Deployment pipelines in the maker portal fit this requirement better than configuration migration packages.',
  },
  {
    id: 1117,
    text: 'Need to debug a plug-in issue from a Germany environment in a separate environment while respecting EU data-boundary compliance.',
    type: 'single',
    choices: [
      'Create a new sandbox environment. Register the plug-in'
    ],
    correct: [0],
    explanation: 'This supports isolated debugging without copying EU-bound data into the company\'s default region.',
  },
  {
    id: 1120,
    text: 'Solution uses access team templates. Users cannot access rows.',
    type: 'single',
    choices: [
      'Add the users to the Access Team Members subgrid'
    ],
    correct: [0],
    explanation: 'Access team templates grant row access when users are added to the access team members list for the record.',
  },
  {
    id: 1134,
    text: 'HoTspor - A company uses Dynamics 365 Sales and the Microsoft Online Services portal The mul lect OptionSet field data type is not supported in the portal. You need to copy the selected field value to the text field How should you configure the Organization service request? To...',
    type: 'single',
    choices: [
      'Use InputParameters[\'Target\']; retrieve attribute metadata for target field; evaluate flags based on returned metadata'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 1187,
    text: 'Trigger a business rule when the main form is saved in Dynamics 365 Sales.',
    type: 'single',
    choices: [
      'Set the scope of the business rule to Entity.'
    ],
    correct: [0],
    explanation: 'Set the scope of the business rule to Entity.',
  },
  {
    id: 1188,
    text: 'Automatically send an email notification to the sales manager when a business process completes.',
    type: 'single',
    choices: [
      'Create a workflow on the process-completed trigger.'
    ],
    correct: [0],
    explanation: 'Create a workflow on the process-completed trigger.',
  },
  {
    id: 1190,
    text: 'Customer business process flow includes custom entities and four stages for each entity; one stage has 15 steps. Identify the design flaw.',
    type: 'single',
    choices: [
      'Suggested answer: maximum number of custom entities exceeded.'
    ],
    correct: [0],
    explanation: 'Suggested answer: maximum number of custom entities exceeded.',
  },
  {
    id: 1200,
    text: 'Insurance company recalculates risk exposure and risk profile immediately after a policy is created.',
    type: 'single',
    choices: [
      'Create new fields and use a plug-in on the insurance policy create event.'
    ],
    correct: [0],
    explanation: 'Create new fields and use a plug-in on the insurance policy create event.',
  },
  {
    id: 1201,
    text: 'Cloud flow processes a list of records using a loop. Determine when a variable should be initialized.',
    type: 'single',
    choices: [
      'Initialize the variable before the loop.'
    ],
    correct: [0],
    explanation: 'Initialize the variable before the loop.',
  },
  {
    id: 1205,
    text: 'Scheduled automation retrieves a rotated API key for a third-party API without a built-in connector.',
    type: 'single',
    choices: [
      'Use environment variables.'
    ],
    correct: [0],
    explanation: 'Use environment variables.',
  },
  {
    id: 1229,
    text: 'Canvas app loan form. LoanAmount should immediately change background color based on threshold values.',
    type: 'single',
    choices: [
      'Add a formula to the LoanAmount field.'
    ],
    correct: [0],
    explanation: 'Add a formula to the LoanAmount field.',
  },
  {
    id: 1236,
    text: 'Custom connector definition must not be visible to the end user.',
    type: 'single',
    choices: [
      'Use visibility parameter = internal.'
    ],
    correct: [0],
    explanation: 'Use visibility parameter = internal.',
  },
  {
    id: 1256,
    text: 'Display a dialog when a form opens or when a grid on the form is sorted.',
    type: 'single',
    choices: [
      'Subgrid OnLoad'
    ],
    correct: [0],
    explanation: 'Subgrid OnLoad fires on initial load and on subgrid refresh/sort scenarios.',
  },
  {
    id: 1264,
    text: 'Implement a solution for displaying a timer / duration / automatic refresh in a model-driven app.',
    type: 'single',
    choices: [
      'Canvas component'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 1276,
    text: 'Publicly accessible survey page must update data from the page to Dataverse; users do not require individual Dataverse credentials.',
    type: 'single',
    choices: [
      'OAuth 2.0'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 1278,
    text: 'Public survey page to Common Data Service environment with authentication requirements.',
    type: 'single',
    choices: [
      'OAuth 2.0'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 1306,
    text: 'Plug-in faz múltiplos pedidos a um serviço web externo e não deve sofrer timeout quando o serviço demora a responder.',
    type: 'single',
    choices: [
      'Set the HTTP connection KeepAlive property to false. Extraído do texto OCR da página renderizada.'
    ],
    correct: [0],
    explanation: 'Set the HTTP connection KeepAlive property to false. Extraído do texto OCR da página renderizada.',
  },
  {
    id: 1351,
    text: 'Custom validation with message on form.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'The rendered source page marks suggested answer A.',
  },
  {
    id: 1352,
    text: 'Custom validation and output parameters in plug-in.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'The rendered source page marks suggested answer B.',
  },
  {
    id: 1353,
    text: 'Tracing service used to display validation guidance.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'The rendered source page marks suggested answer B.',
  }
];