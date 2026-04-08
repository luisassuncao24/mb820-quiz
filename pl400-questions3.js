var pl400Questions3 = [
  {
    id: 3007,
    text: 'Model-driven app integration requirements: use SharePoint Online for document storage and Exchange Online for email.',
    type: 'multiple',
    choices: [
      'Email → Server-side synchronization',
      'Document storage → Server-based integration'
    ],
    correct: [0, 1],
    explanation: 'This is the exact mapping shown in the suggested answer on page 6 of the uploaded 1-20 PDF.',
  },
  {
    id: 3011,
    text: 'Need to incorporate an Azure skill bot for each class into a homework bot used with Power Virtual Agents.',
    type: 'multiple',
    choices: [
      'Register the skill bot in Azure Active Directory',
      'Create a manifest for the skill bot',
      'Register the skill bot in Power Virtual Agents'
    ],
    correct: [0, 1, 2],
    explanation: 'Order reconstructed from the suggested answer image/OCR; this one may deserve a final visual re-check later.',
  },
  {
    id: 3015,
    text: 'Need to choose the right data source object for three integration requirements.',
    type: 'multiple',
    choices: [
      'Support records that use an integer as a primary key → Custom connector',
      'Ensure that data can be read and updated → Custom connector',
      'Ensure that data is available to all Microsoft Dataverse clients → Virtual entity'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3018,
    text: 'Canvas app must search user sign-in information in Azure AD through an Azure Function returning JSON.',
    type: 'multiple',
    choices: [
      'Create a custom connector by using the Azure Function API',
      'Create an API definition for the Azure Function'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3029,
    text: 'Solution proposes an alternate key as the primary key for a virtual table.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'A GUID/appropriate unique key satisfies the virtual-table identity requirement in this item.',
  },
  {
    id: 3032,
    text: 'Dataverse plug-in must create a follow-up task for a new account. Choose the three code blocks in order.',
    type: 'multiple',
    choices: [
      '1. Entity account → (Entity)context.InputParameters["Target"];',
      '2. Entity followuptask → new Entity("task"); followuptask["subject"] = "Send e-mail to the new customer"; followuptask["regardingobjectid"] = account.ToEntityReference();'
    ],
    correct: [0, 1],
    explanation: 'Confirmed from the screenshot you later sent for Q32.',
  },
  {
    id: 3039,
    text: 'Choose business logic solutions for a model-driven app: phone-number formatting and percentage calculations, without custom development when possible.',
    type: 'multiple',
    choices: [
      'Phone number formatting → Business rule',
      'Percentage calculation → Formula column'
    ],
    correct: [0, 1],
    explanation: 'Confirmed from the screenshot you later sent for Q39.',
  },
  {
    id: 3042,
    text: 'Canvas app over Dataverse Contacts. Default list all contacts, filter by last name when text entered, add Full Salutation column, sort by surname.',
    type: 'multiple',
    choices: [
      'SortByColumns',
      'AddColumns',
      'Filter',
      'Concatenate',
      '"Last Name"'
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3044,
    text: 'Canvas app should keep a local collection of overdue SharePoint tasks and minimize outbound calls.',
    type: 'single',
    choices: [
      'ClearCollect(projectTasks, Filter(Tasks, \'DueDate\' < Now()))'
    ],
    correct: [0],
    explanation: 'Confirmed from the screenshot you later sent for Q44.',
  },
  {
    id: 3058,
    text: 'Data storage mechanism mapping question.',
    type: 'multiple',
    choices: [
      'Existing licensing / high-scale reference data → appropriate scalable data store (review once more)',
      'Red light camera photos → Azure Storage Blob',
      'Violation information → Elastic/Dataverse-style storage as shown in the suggested answer'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3060,
    text: 'Assign the right security option for three app scenarios involving managers, probability fields, and shared territory access.',
    type: 'multiple',
    choices: [
      'Sales managers can view salespeople records in their business unit → Role-based security',
      'Only sales managers can view sales probability data → Field-level security',
      'Sales representatives and new hires in the same territory share access to sales records → Record-level security'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 306100,
    text: 'Synchronize SQL Server-based .NET application data into Dataverse/CDS by using UpsertRequest against Account with accountnumber as key-like value. — 1. Creating a new field to store the record identifier resolves the error',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Upsert requires a defined alternate key. With an alternate key on accountnumber, Dataverse will create when the key is not found and update when it is found.',
  },
  {
    id: 306101,
    text: 'Synchronize SQL Server-based .NET application data into Dataverse/CDS by using UpsertRequest against Account with accountnumber as key-like value. — 2. Creating an alternate key that uses accountnumber resolves the error',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'Upsert requires a defined alternate key. With an alternate key on accountnumber, Dataverse will create when the key is not found and update when it is found.',
  },
  {
    id: 306102,
    text: 'Synchronize SQL Server-based .NET application data into Dataverse/CDS by using UpsertRequest against Account with accountnumber as key-like value. — 3. If an account exists only with name = Contoso and no accountnumber, a new record is created',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'Upsert requires a defined alternate key. With an alternate key on accountnumber, Dataverse will create when the key is not found and update when it is found.',
  },
  {
    id: 306103,
    text: 'Synchronize SQL Server-based .NET application data into Dataverse/CDS by using UpsertRequest against Account with accountnumber as key-like value. — 4. If an account exists with account number CO-555, a new account record is created',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Upsert requires a defined alternate key. With an alternate key on accountnumber, Dataverse will create when the key is not found and update when it is found.',
  },
  {
    id: 3062,
    text: 'Select Dataverse relationship behaviors for delete/assign requirements.',
    type: 'multiple',
    choices: [
      'When a primary record is deleted, associated referential records must also be deleted → Parental',
      'When a record is assigned to a user, all referencing active records must also be assigned → Cascade User Owned',
      'When a primary record is deleted, the associated record must not be deleted → Referential'
    ],
    correct: [0, 1, 2],
    explanation: 'Parental cascades delete; Referential prevents cascading delete; Cascade User Owned cascades certain actions only for user/team-owned related rows.',
  },
  {
    id: 3079,
    text: 'Canvas apps and cloud flows use a CMS URL stored in an environment variable. Production URL is updated directly after deployment.',
    type: 'multiple',
    choices: [
      'Canvas app sessions open during the update → Development',
      'Canvas app sessions launched after the update → Production',
      'Power Automate flows that have been saved after the update → Production'
    ],
    correct: [0, 1, 2],
    explanation: 'Existing running sessions can hold prior values. Newly launched/saved artifacts use the current environment-variable value.',
  },
  {
    id: 3099,
    text: 'Managed solution imported to production has Account table auditing disabled because a First Party layer sits above it. Need to enable the Auditing setting.',
    type: 'multiple',
    choices: [
      'Create a blank solution and move Account table customizations from the original solution to the blank solution. Export the new solution as managed from development and import it to production',
      'Remove the Account table from the original solution. Export the solution as managed from development and import it to production by using the Upgrade setting',
      'Delete the new solution from the development and production environments',
      'Add the Account table and all customizations of this table to the original solution',
      'With the Account table, export the original solution as managed from development and import it to production by using the Upgrade setting'
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: 'This sequence is the one indicated by the source material to realign layering and then reapply the intended customization.',
  },
  {
    id: 3101,
    text: 'Single-tenant custom connector deployment. Proposed solution: publish the custom connector to AppSource.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'AppSource is not the right distribution model for a tenant-restricted internal connector.',
  },
  {
    id: 3127,
    text: 'DRAG DROP - You are creating a model-driven app. Users need to see only the entities in the app navigation that are relevant to their role and their method of accessing the app. You need to restrict entities on the sub-areas in the SiteMap. Which properties should you use? To ...',
    type: 'multiple',
    choices: [
      'Subarea visibility by security role → Privileges; subarea visibility by access method /',
      'client → Client'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3139,
    text: 'Configure components for a model-driven time-tracking app.',
    type: 'multiple',
    choices: [
      'Project Name discoverable in Advanced Find → View; display estimated duration as',
      'start/end dates during time entry → Quick Create'
    ],
    correct: [0, 1],
    explanation: 'Nota de reserva: os componentes extraídos por OCR devem ser confirmados antes da publicação final.',
  },
  {
    id: 3149,
    text: 'Determine which security roles / permissions to assign for the Power Apps Checker application user.',
    type: 'single',
    choices: [
      'OCR parcial; rever print original antes de publicação.'
    ],
    correct: [0],
    explanation: 'OCR parcial; rever print original antes de publicação.',
  },
  {
    id: 3158,
    text: 'Source OCR did not preserve the answer reliably.',
    type: 'single',
    choices: [
      'OCR parcial; rever print original antes de publicação.'
    ],
    correct: [0],
    explanation: 'OCR parcial; rever print original antes de publicação.',
  },
  {
    id: 3160,
    text: 'Source OCR did not preserve the final answer reliably.',
    type: 'single',
    choices: [
      'OCR parcial; rever print original antes de publicação.'
    ],
    correct: [0],
    explanation: 'OCR parcial; rever print original antes de publicação.',
  },
  {
    id: 3165,
    text: 'Use URL parameters to troubleshoot form events in a model-driven app.',
    type: 'single',
    choices: [
      'Form OnLoad = DisableFormLibraries; Column OnChange = DisableFormLibraries'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3170,
    text: 'Use Monitor to troubleshoot a model-driven app form issue.',
    type: 'single',
    choices: [
      '1. Create a new Monitor session for the app 2. Use the inline option and select form 3. Have the user reproduce the issue'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3171,
    text: 'Troubleshoot a command button and save behavior by using URL parameters. OCR preserved only part of the exact parameter names.',
    type: 'multiple',
    choices: [
      'Command button visibility → ribbondebug=true; unexpected form save behavior =',
      'flags → DisableFormCommanding? / extraqs debug parameter (review source)'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3185,
    text: 'Choose implementation methods for business logic with minimal code. Requirements include: access current and new values when data is updated; run on a schedule.',
    type: 'multiple',
    choices: [
      'Access current and new values when data is updated → Plug-in',
      'Run on a schedule → Power Automate flow'
    ],
    correct: [0, 1],
    explanation: 'Confirmed from highlighted suggested answer.',
  },
  {
    id: 3193,
    text: 'Add a custom slider control to a specific step in a business process flow.',
    type: 'multiple',
    choices: [
      'Configure custom controls on a related table form',
      'Copy custom control configurations to the business process flow form',
      'Import customizations into the Microsoft Dataverse environment'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3203,
    text: 'Model-driven app on Opportunities. Minimize code to notify sales over $50,000 and show sponsors field over $1,000,000.',
    type: 'multiple',
    choices: [
      'Opportunity over $50,000 → Power Automate cloud flow',
      'Opportunity over one million dollars → Business rule'
    ],
    correct: [0, 1],
    explanation: 'Taken from the highlighted suggested answer.',
  },
  {
    id: 3207,
    text: 'Resolve access-related issues using least privilege when Entra ID groups manage environment- and team-level permissions.',
    type: 'multiple',
    choices: [
      'Unable to access a single environment → Microsoft Entra ID group',
      'Unable to update Account rows → Security role',
      'Unable to access rows owned by the human resources team → Team',
      'Unable to create a sandbox environment → Microsoft Power Platform'
    ],
    correct: [0, 1, 2, 3],
    explanation: 'Validated in chat from user-provided clearer images.',
  },
  {
    id: 3208,
    text: 'Power Automate List rows action against Accounts table with >15,000 rows. Need to manage large volumes and return data from related contact records.',
    type: 'multiple',
    choices: [
      'Manage a large number of records → Skip token',
      'Return information from related contact records → Expand query'
    ],
    correct: [0, 1],
    explanation: 'Validated in chat from user-provided clearer images.',
  },
  {
    id: 3221,
    text: 'Modify RibbonDiffXml so a custom JavaScript ribbon button shows messages in the user\'s language (e.g., French instead of English).',
    type: 'multiple',
    choices: [
      'Box 1 → CrmParameter',
      'Box 2 → UserLcid'
    ],
    correct: [0, 1],
    explanation: 'Validated in chat from user-provided clearer images.',
  },
  {
    id: 3222,
    text: 'Create a reusable PCF component for date of birth and validate that the applicant is not a minor. Complete the manifest.',
    type: 'multiple',
    choices: [
      'Box 1 → AdultDatePicker',
      'Box 2 → DateandTime.DateOnly',
      'Box 3 → bound'
    ],
    correct: [0, 1, 2],
    explanation: 'Validated in chat from user-provided clearer images.',
  },
  {
    id: 3226,
    text: 'Add a button to a model-driven form that manually invokes JavaScript.',
    type: 'single',
    choices: [
      'Use the Ribbon Workbench.'
    ],
    correct: [0],
    explanation: 'Use the Ribbon Workbench.',
  },
  {
    id: 3227,
    text: 'PCF manifest resource load order.',
    type: 'single',
    choices: [
      'CSS order = 1 HTML order = 1'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3233,
    text: 'Deploy a new PCF control using Power Apps CLI and a new solution.',
    type: 'multiple',
    choices: [
      'Create a solution',
      'Add a solution reference to the project',
      'Build the project and solution',
      'Deploy the solution'
    ],
    correct: [0, 1, 2, 3],
    explanation: 'Taken from the highlighted suggested answer.',
  },
  {
    id: 3234,
    text: 'Development environment notifications must display department-specific wording using values that power users can customize.',
    type: 'multiple',
    choices: [
      'Create an empty environment variable named Custom Text Placeholder',
      'Create a JavaScript function to retrieve the value from the custom text placeholder and display the notification',
      'Export the solution'
    ],
    correct: [0, 1, 2],
    explanation: 'Taken from the highlighted suggested answer. Review exact wording if final publication needs the full original phrasing.',
  },
  {
    id: 3242,
    text: 'Define a reusable PCF component manifest for a survey capture control. Need correct property type and feature usage.',
    type: 'multiple',
    choices: [
      'property latitude of-type-group → Decimal',
      'uses-feature name → Utility'
    ],
    correct: [0, 1],
    explanation: 'Validated from the answer-area screenshot provided in chat.',
  },
  {
    id: 3243,
    text: 'Single Power Apps component used on both tablet devices and phones. Complete code segment with the correct client/runtime detection methods.',
    type: 'single',
    choices: [
      '- Use getClient to detect client type (for example, "Mobile") - Use getFormFactor to detect specific device form factor'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3255,
    text: 'Post-operation plug-in updating Account unintentionally triggers a synchronous third-party ISV plug-in.',
    type: 'single',
    choices: [
      'Use UpdateRequest with BypassCustomPluginExecution and Organization service Execute to bypass synchronous custom plug-ins.'
    ],
    correct: [0],
    explanation: 'Use UpdateRequest with BypassCustomPluginExecution and Organization service Execute to bypass synchronous custom plug-ins.',
  },
  {
    id: 3257,
    text: 'Managed solution import to production does not reflect changes to a column-bound PCF code component.',
    type: 'single',
    choices: [
      'Increment the control version in manifest.xml and reimport the solution.'
    ],
    correct: [0],
    explanation: 'Increment the control version in manifest.xml and reimport the solution.',
  },
  {
    id: 3258,
    text: 'OnSave JavaScript handler uses preventDefault(), retrieves account credithold asynchronously, and conditionally opens a confirm dialog.',
    type: 'single',
    choices: [
      '- The code cancels the normal save operation of the form. -> Yes - A confirmation dialog box is displayed if the credithold value is true. -> No - The record will save if the credithold value is false. -> No'
    ],
    correct: [0],
    explanation: 'preventDefault() cancels the normal save immediately; because retrieval is async, the later if block does not behave as a synchronous gate for the original save.',
  },
  {
    id: 3260,
    text: 'Implement visual hints in the custom connector.',
    type: 'single',
    choices: [
      'Editorial note: this differs from the site’s suggested answer (B, D). Extending the OpenAPI definition for DataId and updating the DataId description is the more useful end-user hint configuration.'
    ],
    correct: [0],
    explanation: 'Editorial note: this differs from the site’s suggested answer (B, D). Extending the OpenAPI definition for DataId and updating the DataId description is the more useful end-user hint configuration.',
  },
  {
    id: 3261,
    text: 'HTTP property values for a Web API request that updates account rows.',
    type: 'multiple',
    choices: [
      'Method → PATCH',
      'Header → If-None-Match: null'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3271,
    text: 'Configure custom connector security components.',
    type: 'multiple',
    choices: [
      'Ensure Dynamics 365 security is in place → Security roles',
      'Capture application usage from public sites → API key',
      'Configure a website login that does not need encryption → Basic authentication'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3277,
    text: 'Complete Plug-in Registration Tool steps for an Azure Function webhook / service endpoint.',
    type: 'multiple',
    choices: [
      'Select Register New Web Hook.',
      'Enter the endpoint URL.',
      'Register a New Step (or the relevant step on Create of SalesOrder).'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3279,
    text: 'Map user security issues to Power Platform / Teams / exfiltration controls.',
    type: 'multiple',
    choices: [
      'User is not able to sign in to a Power Apps app from home → Conditional access',
      'User is not able to use a social media connector in a flow that uses the Microsoft Teams connector → DLP policy',
      'User is not able to forward email messages to an address in another domain → Exfiltration blocking'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3292,
    text: 'Choose HTTP methods for Dataverse Web API actions.',
    type: 'multiple',
    choices: [
      'Create a column → POST',
      'Update a column for an existing row → PATCH'
    ],
    correct: [0, 1],
    explanation: 'Validated from the answer-area screenshot provided in chat.',
  },
  {
    id: 3293,
    text: 'Plug-in registered in post-operation stage when custom_field3 is updated.',
    type: 'multiple',
    choices: [
      'You can avoid retrieving the changed entity by using plug-in images. → Yes',
      'You can avoid updating the changed entity by registering the plug-in in the pre-operation stage. → Yes'
    ],
    correct: [0, 1],
    explanation: 'Validated from the answer-area screenshot provided in chat.',
  },
  {
    id: 3294,
    text: 'Choose custom connector security type for external systems.',
    type: 'multiple',
    choices: [
      'Accounts receivable → OAuth 2.0',
      'Bing Maps → API key'
    ],
    correct: [0, 1],
    explanation: 'Client credentials grant type maps to OAuth 2.0; unique identifier in query string maps to API key.',
  },
  {
    id: 3360,
    text: 'Register synchronous plug-in that throws InvalidPluginExecutionException when request fails; goal is response under 60s.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3361,
    text: 'Integração que envia created records para um REST API. A solução proposta regista um plug-in assíncrono que faz o HTTP request e lança InvalidPluginExecutionException quando o request falha.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'A resposta sugerida visível na página é B. Em cenário assíncrono, lançar InvalidPluginExecutionException não resolve o requisito de conseguir identificar corretamente o motivo da resposta 500 do serviço externo.',
  },
  {
    id: 3362,
    text: 'Integração REST API com Azure Service Bus queue e Azure Function para processar mensagens.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 3371,
    text: 'Criar componente PCF com Microsoft package.',
    type: 'multiple',
    choices: [
      'Create a code component project',
      'Implement code component logic',
      'Create a solution project and add the code component project as a reference',
      'Build the code component in release mode'
    ],
    correct: [0, 1, 2, 3],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  }
];