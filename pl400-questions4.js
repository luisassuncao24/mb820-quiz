var pl400Questions4 = [
  {
    id: 4002,
    text: 'Staffing company portal/jobs scenario. Need portal/app/invitation setup for employers and job candidates.',
    type: 'multiple',
    choices: [
      'Create the job listings portal → Custom self-service portal for both employers and job candidates',
      'Create an app that lists available positions → Model-driven app with push notifications',
      'Create the app for employers seeking temporary employees → Webform with target set to the job custom entity',
      'Invitation parameters for job candidates → Configure a value for Execute Workflow on Redeeming Contact only',
      'Invitation parameters for approved job candidates → Configure a value for Assigned to Account only'
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4003,
    text: 'Bakery order management canvas apps. Need nearest bakery for delivery, ETA/ready notification for pickup orders, and email newsletter with minimal custom code.',
    type: 'multiple',
    choices: [
      'Determine closest store → Power Automate flow',
      'Estimate prep time and notify customer → New screen in an existing order canvas app',
      'Send newsletter by email → Power Automate flow triggered from an email button'
    ],
    correct: [0, 1, 2],
    explanation: 'Uses low-code/out-of-box components and existing app structure.',
  },
  {
    id: 4004,
    text: 'Create a custom connector for a canvas app that will call an API. Need files the API developers can provide.',
    type: 'multiple',
    choices: [
      'OpenAPI definition',
      'Postman collection'
    ],
    correct: [0, 1],
    explanation: 'Both can be imported directly into a custom connector.',
  },
  {
    id: 4024,
    text: 'Model-driven app for bicycle financing. Need calculated payment column and a validation reminder pop-up before save, preferring out-of-box features first.',
    type: 'multiple',
    choices: [
      'Calculate payments → Customize the app',
      'A pop-up box must appear → Configure an out-of-box feature'
    ],
    correct: [0, 1],
    explanation: 'Confirmed from the screenshot you later sent for Q24.',
  },
  {
    id: 4034,
    text: 'Virtual table scenario. Solution: create a custom connector.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'The OCR suggested answer points to No for this item.',
  },
  {
    id: 4045,
    text: 'Dataverse security/team setup. Need privilege type, access levels, and team type.',
    type: 'multiple',
    choices: [
      'Privilege provided to edit accounts → Security role',
      'Access level for the Account table → User Update',
      'Access level for the Notes table → User Append To',
      'Team type to assign privileges to → Microsoft Entra ID Security Group'
    ],
    correct: [0, 1, 2, 3],
    explanation: 'Read from the suggested answer section in the uploaded PDF.',
  },
  {
    id: 4046,
    text: 'Need right Dataverse table types for IoT sensor data vs device configuration.',
    type: 'multiple',
    choices: [
      'Sensor IoT data → Elastic table',
      'Sensor device configuration → Standard table'
    ],
    correct: [0, 1],
    explanation: 'Read from the suggested answer section in the uploaded PDF.',
  },
  {
    id: 4050,
    text: 'Choose data storage mechanisms for traffic-violation solution.',
    type: 'multiple',
    choices: [
      'Existing vehicle licensing data → Azure Cosmos DB',
      'Red light camera photos → Azure Storage Blob',
      'Information about traffic violations → Dataverse'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4053,
    text: 'Configure Dataverse relationship behavior so completed tasks keep ownership while open tasks are reassigned with the account.',
    type: 'multiple',
    choices: [
      'Relationship behavior type → Referential',
      'Behavior for assigned action → Cascade Active'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4054,
    text: 'Prepare model-driven app plus settings/reference data for deployment across environments using Package Deployer.',
    type: 'multiple',
    choices: [
      'Create a Dynamics 365 Package project in Visual Studio',
      'Add solution and data files to the PkgFolder in the project',
      'Define the solution and data files in ImportConfig.xml',
      'Build the package'
    ],
    correct: [0, 1, 2, 3],
    explanation: 'Recovered from OCR. More than one order may have been accepted by the exam, but this is one valid order.',
  },
  {
    id: 4056,
    text: 'Choose relationship options in Dataverse.',
    type: 'multiple',
    choices: [
      'Visualize records as a hierarchy in a model-driven app → one-to-many relationship',
      'Records in one entity must be able to reference only a single record in another entity → one-to-many relationship',
      'Any record in one entity must be able to be referenced by any record in another entity → many-to-many relationship'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4063,
    text: 'Dynamics 365 Sales approval field for high-value opportunity qualification must be secured so only sales managers can use it.',
    type: 'multiple',
    choices: [
      'Enable field security in the Approval field',
      'Create a new field security profile',
      'Set the field permissions for the new field to enable read, update, and create, and add the sales manager as a member of the field security profile'
    ],
    correct: [0, 1, 2],
    explanation: 'Field-level security is the correct control for protecting a sensitive field while granting controlled access.',
  },
  {
    id: 4072,
    text: 'Travel company must track which regions clients have traveled to and the dates of travel.',
    type: 'multiple',
    choices: [
      'On the main form for ContactRegion, add lookup fields for Contact and Region, and a date field for the visit date',
      'Create the Region entity',
      'Create an intersect entity named ContactRegion and create N:1 relationships to Contact and Region'
    ],
    correct: [0, 1, 2],
    explanation: 'This creates a many-to-many-like model with additional data (visit date), so an explicit intersect/custom table is required.',
  },
  {
    id: 4073,
    text: 'Troubleshoot Power Apps solution checker and a JavaScript web resource issue.',
    type: 'multiple',
    choices: [
      'Solution checker reports errors for one solution but not another → A canvas app in the first solution has errors',
      'Error on the web resource code → The code uses the following rule: web-use-strict-mode'
    ],
    correct: [0, 1],
    explanation: 'The JavaScript comparison issue points to use of non-strict equality.',
  },
  {
    id: 4078,
    text: 'Fitness studio solution: members follow trainer programs; members need to see exercises in their calendars.',
    type: 'multiple',
    choices: [
      'Fitness program → Standard table with User or Team ownership',
      'Exercise → Activity table with User or Team ownership'
    ],
    correct: [0, 1],
    explanation: 'Exercises fit calendar/activity behavior. Fitness programs are regular business data.',
  },
  {
    id: 4080,
    text: 'Healthcare center app needs custom tables for doctors and prescription medications. Medication data must reference prescription data from an external database.',
    type: 'multiple',
    choices: [
      'Store information about doctors → Standard',
      'Store information about prescription medications → Virtual'
    ],
    correct: [0, 1],
    explanation: 'Doctors are native structured business data. External prescription data is best surfaced through virtual tables.',
  },
  {
    id: 408300,
    text: 'Interpret an automation-process error log snippet related to Microsoft Teams posting. — 1. The error is generated by a flow action',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'The payload includes a Teams/group identifier and points to a Power Automate-style action rather than an auth failure.',
  },
  {
    id: 408301,
    text: 'Interpret an automation-process error log snippet related to Microsoft Teams posting. — 2. The code represents an authentication error',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'The payload includes a Teams/group identifier and points to a Power Automate-style action rather than an auth failure.',
  },
  {
    id: 408302,
    text: 'Interpret an automation-process error log snippet related to Microsoft Teams posting. — 3. The code does not declare a Team ID',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'The payload includes a Teams/group identifier and points to a Power Automate-style action rather than an auth failure.',
  },
  {
    id: 408400,
    text: 'Review C# code that retrieves an Account, reads numberofemployees, and conditionally updates customersizecode. — 1. Does the Retrieve method use the correct parameters?',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'The id parameter type is incorrect for Retrieve. Updating customersizecode does not update numberofemployees, and GetAttributeValue<int> returns default(int) when the value is absent.',
  },
  {
    id: 408401,
    text: 'Review C# code that retrieves an Account, reads numberofemployees, and conditionally updates customersizecode. — 2. Will a plug-in triggered on update of numberofemployees execute after Update?',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'The id parameter type is incorrect for Retrieve. Updating customersizecode does not update numberofemployees, and GetAttributeValue<int> returns default(int) when the value is absent.',
  },
  {
    id: 408402,
    text: 'Review C# code that retrieves an Account, reads numberofemployees, and conditionally updates customersizecode. — 3. Will an exception be thrown if numberofemployees is null?',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'The id parameter type is incorrect for Retrieve. Updating customersizecode does not update numberofemployees, and GetAttributeValue<int> returns default(int) when the value is absent.',
  },
  {
    id: 4085,
    text: 'Need a Web API request header/preference to retrieve changes from an Account table.',
    type: 'single',
    choices: [
      'odata.deltaLink'
    ],
    correct: [0],
    explanation: 'Delta links are used for change tracking.',
  },
  {
    id: 4093,
    text: 'Canvas app uses a data source with Id, Value1, Value2. Need one function for updating a single row by Id/Value1 and one for deleting all rows with a given Value1.',
    type: 'multiple',
    choices: [
      'Modify knowing Id and Value1 → UpdateIf',
      'Delete knowing Value1 → RemoveIf'
    ],
    correct: [0, 1],
    explanation: 'UpdateIf targets records that match a condition and modifies them; RemoveIf deletes rows that match a condition.',
  },
  {
    id: 4098,
    text: 'Delete custom_text column from Solution A when Solution B still has a view that references it. CORRECT ANSWER (one valid order): 1. Remove the referenced custom_text column from the Solution B view in the source environment 2. Export Solution B as managed from the source environment and import Solution B to the destination environment 3. Delete the custom_text column in the source environment 4. Export Solution A as managed from the source environment and import Solution A to the destination environment NOTES / WHY: Dependencies must be removed from downstream solution components before the column can be deleted.',
    type: 'single',
    choices: [
      'Dependencies must be removed from downstream solution components before the column can be deleted.'
    ],
    correct: [0],
    explanation: 'Dependencies must be removed from downstream solution components before the column can be deleted.',
  },
  {
    id: 4100,
    text: 'Single-tenant custom connector must be moved to production. Solution proposes adding the connector to a managed solution, exporting, and importing to production.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'Moving a custom connector via a managed solution is a normal deployment approach for production. The fact that the connector is single-tenant does not invalidate solution-based deployment.',
  },
  {
    id: 4102,
    text: 'Single-tenant custom connector deployment. Proposed solution: use maker portal to export the connector directly and import it to production.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Custom connectors are moved via solutions; you do not directly export/import the connector alone in the maker portal as the deployment artifact.',
  },
  {
    id: 4103,
    text: 'Single-tenant custom connector deployment. Proposed solution: export/import the connector by using Postman.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Postman is not the deployment mechanism for moving a Power Platform custom connector between environments.',
  },
  {
    id: 4108,
    text: 'Choose table types for large unstructured data in Dataverse and structured data that remains outside Dataverse.',
    type: 'multiple',
    choices: [
      'Unstructured data inside Dataverse → Elastic',
      'Structured data outside Dataverse → Virtual'
    ],
    correct: [0, 1],
    explanation: 'Elastic tables fit high-scale Dataverse storage. Virtual tables surface external structured data without storing it in Dataverse.',
  },
  {
    id: 4115,
    text: 'Configure Managed Environments so users are routed to their own personal developer environments and can view plug-in tracing output.',
    type: 'multiple',
    choices: [
      'Direct users to personal developer environments → Enable environment routing',
      'View tracing service output → Enable logging to the plug-in trace log'
    ],
    correct: [0, 1],
    explanation: 'These settings directly enable the requested behaviors.',
  },
  {
    id: 4123,
    text: 'Build a SharePoint link that opens a Dataverse contact form and prepopulates values without navigating through the model-driven app.',
    type: 'single',
    choices: [
      'main.aspx; etn; extraqs; entityrecord'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4132,
    text: 'HOTSPOT - You are developing a model-driven app for the purchasing department of an organization. You provision a new test environment and a security role, You select users to test the apps and assign the users to a security group named Tests6. Ifthe tests succeed, a nager per...',
    type: 'multiple',
    choices: [
      'Only test users access test environment → separate environment / security role mapping;',
      'production-only data access → production environment / appropriate access control'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4136,
    text: 'DRAG DROP - You are creating 2 model-driven app. Users need to see only the entities in the app navigation that are relevant to their role and their method of accessing the app. You need to restrict entities on the sub-areas in the eMap. Which properties should you use? To ans...',
    type: 'single',
    choices: [
      'Office: Filtergroup; Privileges: Client; SKU/Link style requirement: review source (OCR partial)'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4140,
    text: 'Choose Power Fx commands for three form buttons in a Power Platform solution.',
    type: 'single',
    choices: [
      'Button1 = Now() only; Button2 = Switch or If(); Button3 = IsMatch(TextInput.Text, "emergency", Contains & IgnoreCase)'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4180,
    text: 'Choose business process flow components for a Request for Quote process.',
    type: 'multiple',
    choices: [
      'Scope of request for quote → Step; credit checks only for new users = Branching',
      'condition; merge all paths into main flow → Stage'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4181,
    text: 'Grant Application screen shows a validation message when Grant Amount exceeds the maximum allowed. Determine which Power Platform capability displays the message and what should be updated to stop it.',
    type: 'multiple',
    choices: [
      'Capability → Business rule',
      'To stop the message → Update the business rule'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4186,
    text: 'Power Automate flow retrieves data from a proprietary database. Determine what must be shared so the flow works for other users.',
    type: 'single',
    choices: [
      'Share the custom connector and share the flow with users.'
    ],
    correct: [0],
    explanation: 'Share the custom connector and share the flow with users.',
  },
  {
    id: 4191,
    text: 'Delete BusinessRule1 from production after it was deployed as managed, while keeping dev/prod aligned.',
    type: 'multiple',
    choices: [
      'In the development environment, navigate to Solutions',
      'Select the solution that has BusinessRule1, navigate to the appropriate entity, and delete the rule',
      'Export the solution as managed and import it in the production environment'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4192,
    text: 'Power Apps canvas app is used in Microsoft Teams. App runs slowly in Teams; test users cannot add the personal app.',
    type: 'multiple',
    choices: [
      'Issue 1 → Change settings in app to preload app',
      'Issue 2 → Change permission for the custom app in Teams'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4194,
    text: 'Determine which feature should be used for each claims-process requirement: same approval process, routing to approvers at each stage, and showing/hiding fields based on values.',
    type: 'multiple',
    choices: [
      'Same approval process → Business process flow',
      'Route to approvers at each stage → Power Automate flow',
      'Show or hide fields based on values → Business rules'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4202,
    text: 'Microsoft Power Virtual Agents chatbot authenticates with Microsoft Teams only. Select variables that return information about the logged-in user.',
    type: 'single',
    choices: [
      'UserDisplayName and UserID.'
    ],
    correct: [0],
    explanation: 'UserDisplayName and UserID.',
  },
  {
    id: 4204,
    text: 'Model-driven app must automatically receive purchase-order updates and allow quick entry of new orders.',
    type: 'multiple',
    choices: [
      'Automatically receive purchase order updates → Connector with polling trigger',
      'Add new purchase orders → Account name'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4211,
    text: 'A client requires the system to send an email from a button on the customer contact form using JavaScript.',
    type: 'single',
    choices: [
      'Recommended editorial answer: Xrm.WebApi.online.executeMultiple() and Xrm.WebApi.online.execute(). The source suggested answer shows C,D, but calling an action is better aligned with execute / executeMultiple than createRecord.'
    ],
    correct: [0],
    explanation: 'Recommended editorial answer: Xrm.WebApi.online.executeMultiple() and Xrm.WebApi.online.execute(). The source suggested answer shows C,D, but calling an action is better aligned with execute / executeMultiple than createRecord.',
  },
  {
    id: 4215,
    text: 'JavaScript OnChange handler updates a primary contact phone based on Account telephone1. Determine whether each statement is true.',
    type: 'single',
    choices: [
      'No; No; No'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4217,
    text: 'Review JavaScript / XHR code and determine whether statements about async loading, equality operators and audit/debug behavior are true.',
    type: 'single',
    choices: [
      'Yes; Yes; No'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4218,
    text: 'Implement custom functionality in a Power Apps portal using JavaScript. Choose valid entities.',
    type: 'single',
    choices: [
      'Web pages and Entity lists.'
    ],
    correct: [0],
    explanation: 'Web pages and Entity lists.',
  },
  {
    id: 4219,
    text: 'Web API design: choose operation type for side-effect-free operations, side-effect operations, and named structured types with properties.',
    type: 'multiple',
    choices: [
      'No side effects / further composition → Functions',
      'Side effects / data modification → Actions',
      'Named structured types with properties → Complex types'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4220,
    text: 'Single-page web application uses Dataverse Web API and must authenticate with OAuth.',
    type: 'single',
    choices: [
      'Use Microsoft Authentication Library (MSAL).'
    ],
    correct: [0],
    explanation: 'Use Microsoft Authentication Library (MSAL).',
  },
  {
    id: 4223,
    text: 'Deploy a Power Apps component framework control using the Power Apps CLI and a new solution.',
    type: 'multiple',
    choices: [
      'Create a solution',
      'Add a solution reference to the project',
      'Build the project and solution',
      'Deploy the solution'
    ],
    correct: [0, 1, 2, 3],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4228,
    text: 'Business process flow + JavaScript. Determine the result of running each code segment.',
    type: 'multiple',
    choices: [
      'Segment 1 → hides only the control in the body of the form',
      'Segment 2 → adds an event handler to enable a function when the business process flow stage changes'
    ],
    correct: [0, 1],
    explanation: 'Taken from the highlighted suggested answer.',
  },
  {
    id: 4235,
    text: 'Use Dynamics 365 Sales Web API to retrieve metadata information. Choose the Web API query property for entity, attribute, relationship and global option set.',
    type: 'multiple',
    choices: [
      'Entity → LogicalName',
      'Attribute → LogicalName',
      'Relationship → SchemaName',
      'Global Option Set → Name'
    ],
    correct: [0, 1, 2, 3],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4237,
    text: 'JavaScript updates a primary contact phone from Account telephone1. Determine whether each statement is true.',
    type: 'single',
    choices: [
      'Yes; No; No'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4239,
    text: 'Configure the preference header for a Web API request to retrieve table changes.',
    type: 'single',
    choices: [
      'Use odata.track-changes.'
    ],
    correct: [0],
    explanation: 'Use odata.track-changes.',
  },
  {
    id: 4240,
    text: 'Complete a PCF component manifest by inserting the correct XML markup in the control element.',
    type: 'single',
    choices: [
      'Material-source suggested answer: B.'
    ],
    correct: [0],
    explanation: 'Material-source suggested answer: B.',
  },
  {
    id: 4244,
    text: 'Implement JavaScript custom functionality in a Power Apps portal.',
    type: 'single',
    choices: [
      'Use Web pages and Web resources. This is the suggested answer shown on the source page.'
    ],
    correct: [0],
    explanation: 'Use Web pages and Web resources. This is the suggested answer shown on the source page.',
  },
  {
    id: 4254,
    text: 'Create rules for command buttons that display only if predefined conditions are met.',
    type: 'multiple',
    choices: [
      'Website link to the current form → PageRule',
      'Sum of two form fields → ValueRule'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4280,
    text: 'Configure a customer lookup based on email activity using Power Fx / form expression.',
    type: 'single',
    choices: [
      '- Use IsBlank where null/empty text must be checked - Use AsType to branch by record type and read type-specific fields'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4296,
    text: 'Choose plug-in stage to add vaccination details before a proof of vaccination card is created.',
    type: 'single',
    choices: [
      'PreOperation'
    ],
    correct: [0],
    explanation: 'Use PreOperation to modify the entity inside the transaction before the operation completes.',
  },
  {
    id: 4297,
    text: 'Configure environment before creating a custom connector to Microsoft Graph API.',
    type: 'multiple',
    choices: [
      'Enable connector to authenticate with Microsoft Azure Active Directory → Register Application and specify permissions',
      'Enable Postman calls to be available for the custom connector → Open Postman and create collections'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4305,
    text: 'Cloud flow com ação List rows; processar 10.000 registos numa única execução.',
    type: 'single',
    choices: [
      '- Return the first 5,000 records and use @odata.nextLink to retrieve the remaining records. - Turn on pagination and set the threshold to 10,000. Extraído do texto OCR da página renderizada.'
    ],
    correct: [0],
    explanation: '- Return the first 5,000 records and use @odata.nextLink to retrieve the remaining records. - Turn on pagination and set the threshold to 10,000. Extraído do texto OCR da página renderizada.',
  },
  {
    id: 4372,
    text: 'Canvas app test / abrir app em browser e publicar teste.',
    type: 'multiple',
    choices: [
      'Select a test suite',
      'Select Copy play link',
      'Publish the test',
      'Open a browser and paste the URL for the app into the address bar'
    ],
    correct: [0, 1, 2, 3],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4379,
    text: 'Custom connector certified by Microsoft; definir owner e localização de stackOwner.',
    type: 'multiple',
    choices: [
      'Who owns the connector? → Contoso, Ltd.',
      'Where is the stackOwner property defined? → apiProperties.json'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 4427,
    text: 'Set components for steps in a retail analytics/sentiment pipeline.',
    type: 'multiple',
    choices: [
      'outbound text → action',
      'new customers in the store → condition',
      'number of customers in the store → data operation'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  }
];