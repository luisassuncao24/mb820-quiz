var pl400Questions2 = [
  {
    id: 2006,
    text: 'Client is deploying Dynamics 365 Finance / Field Service without third-party add-ons and must choose appropriate solutions.',
    type: 'multiple',
    choices: [
      'Warehouse employees can scan barcodes in Dynamics 365 Finance → Out-of-the-box',
      'Communicate technician location by text message from Dynamics 365 Field Service → Power Automate'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2008,
    text: 'Order processing app will execute complex business logic and integrate with external systems. Large orders may take up to six minutes and must complete in one operation.',
    type: 'single',
    choices: [
      'A webhook that connects to an Azure Function'
    ],
    correct: [0],
    explanation: 'Chosen because it supports long-running external processing better than workflow/custom action options.',
  },
  {
    id: 2009,
    text: 'Not-for-profit agency replacing manual volunteer registration/onboarding with a portal solution.',
    type: 'multiple',
    choices: [
      'Create a portal by using a portal template → Customer self-service portal',
      'Manage volunteer registration → Webform'
    ],
    correct: [0, 1],
    explanation: 'Confirmed from the highlighted suggested answer in the uploaded screenshot/page crop.',
  },
  {
    id: 2012,
    text: 'Migrating to Power Platform and creating plug-ins. Need the isolation mode.',
    type: 'single',
    choices: [
      'Sandbox'
    ],
    correct: [0],
    explanation: 'Recommended isolation mode for Dataverse/Dynamics plug-ins.',
  },
  {
    id: 2014,
    text: 'Azure custom app parses resumes and stores contact/skills information in Dataverse.',
    type: 'single',
    choices: [
      'Web API'
    ],
    correct: [0],
    explanation: 'Best fit for an external Azure application writing to Dataverse.',
  },
  {
    id: 2016,
    text: 'Interpret Web API call against RelationshipDefinitions?$select=SchemaName.',
    type: 'single',
    choices: [
      'Retrieve the list of relationships between tables.'
    ],
    correct: [0],
    explanation: 'The call queries relationship metadata and returns relationship schema names.',
  },
  {
    id: 2017,
    text: 'Power Automate flow uses Dataverse List Rows and only needs a subset of Account data.',
    type: 'multiple',
    choices: [
      'Full name of the primary contact → Expand Query = primarycontactid($select=fullname)',
      'Account with the highest credit limit → Row count = 1 and Sort By = creditlimit desc'
    ],
    correct: [0, 1],
    explanation: 'Uses expand for related contact data and descending sort with row count 1 for the top credit limit row.',
  },
  {
    id: 2019,
    text: 'Power Pages website with Power Virtual Agents topics. Need to use a bot on website, create Bot Framework skills, and create support requests without human interaction.',
    type: 'multiple',
    choices: [
      'Use a bot on the website → Power Virtual Agents',
      'Create Bot Framework skills → Power Virtual Agents',
      'Create support request from the bot → Power Automate'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2025,
    text: 'Virtual table scenario. Solution proposes a calculated column on the virtual table.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Calculated columns are not the right approach for the stated virtual-table goal in this question series.',
  },
  {
    id: 2028,
    text: 'Custom plug-in reads entity image in Dataverse. Need how to access the information.',
    type: 'single',
    choices: [
      'Register a post image by using the Plug-in Registration Tool and then read the post image in the entity image from the context object.'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2030,
    text: 'Solution proposes enabling auditing on a virtual table column for the requirement.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Virtual table auditing in the proposed way does not satisfy the goal for this question.',
  },
  {
    id: 2031,
    text: 'Solution uses a GUID as the primary key for the virtual table.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'A GUID works as a unique identifier for virtual-table integration.',
  },
  {
    id: 2033,
    text: 'Virtual table scenario. Solution: create a calculated column on the virtual table.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Retained separately because these series questions are independent.',
  },
  {
    id: 2035,
    text: 'Model-driven app form loads slowly. Need control types that can improve performance.',
    type: 'multiple',
    choices: [
      'Timeline',
      'Quick view form',
      'Lookup'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2048,
    text: 'University / opportunity access scenario. Solution gives organization-level access by security role.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Would grant broader access than required.',
  },
  {
    id: 2049,
    text: 'Same university scenario. Solution uses access team templates and grants access to members from two departments.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'Access teams allow controlled record-level collaboration across departments.',
  },
  {
    id: 205200,
    text: 'Offline-capable canvas app expression with Patch/collection logic. — 1. Saves data to CDS when reconnecting after losing network connection',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 205201,
    text: 'Offline-capable canvas app expression with Patch/collection logic. — 2. Collection created by Patch contains all contacts not saved to CDS',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 205202,
    text: 'Offline-capable canvas app expression with Patch/collection logic. — 3. Expression updates existing contacts in CDS',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 205203,
    text: 'Offline-capable canvas app expression with Patch/collection logic. — 4. Expression handles loss of connection to CDS',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 205500,
    text: 'Evaluate statements to prevent a real-time workflow privilege error. — Changing Append To on Account to Organization',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 205501,
    text: 'Evaluate statements to prevent a real-time workflow privilege error. — Adding Environment Maker role',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 205502,
    text: 'Evaluate statements to prevent a real-time workflow privilege error. — Adding System Customizer gives more access than needed',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 205503,
    text: 'Evaluate statements to prevent a real-time workflow privilege error. — Setting Building privileges to User',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2057,
    text: 'School district/student/class-history Dataverse design.',
    type: 'multiple',
    choices: [
      'Table ownership for the class record table → User or Team',
      'Relationship of the class history table to the student table → Many-to-one',
      'Behavior of the relationship between the class history table and the student table → Referential'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2077,
    text: 'Use column mapping in a model-driven app to map child and parent values.',
    type: 'multiple',
    choices: [
      'Map the value of a Choices column on the child table to the value of a Choices column on the parent table',
      'Map the value of columns on both the child table quick create and main forms to the value for the same columns on the parent table'
    ],
    correct: [0, 1],
    explanation: 'These are supported mapping scenarios when data types and contexts align.',
  },
  {
    id: 2081,
    text: 'Need an alternate key using Name and Email from ERP data during Dataverse mapping.',
    type: 'single',
    choices: [
      'Create a key in the Account table in Dataverse'
    ],
    correct: [0],
    explanation: 'An alternate key is defined directly on the Dataverse table.',
  },
  {
    id: 209400,
    text: 'Console app uses ExecuteMultipleRequest with CreateRequest for Account and Contact. — 1. When the connection string or credentials are invalid, an error message is sent to the application terminal',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'The code prints LastCrmError when service is not ready. ContinueOnError is false, so a failure in the first request stops later requests.',
  },
  {
    id: 209401,
    text: 'Console app uses ExecuteMultipleRequest with CreateRequest for Account and Contact. — 2. When a similar account exists, the account will still be created',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'The code prints LastCrmError when service is not ready. ContinueOnError is false, so a failure in the first request stops later requests.',
  },
  {
    id: 209402,
    text: 'Console app uses ExecuteMultipleRequest with CreateRequest for Account and Contact. — 3. A contact record will always be created',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'The code prints LastCrmError when service is not ready. ContinueOnError is false, so a failure in the first request stops later requests.',
  },
  {
    id: 2096,
    text: 'Which permissions does a managed identity have on Dataverse data?',
    type: 'single',
    choices: [
      'permissions assigned to the corresponding application user'
    ],
    correct: [0],
    explanation: 'Managed identity permissions flow through the Dataverse application user/security roles.',
  },
  {
    id: 2097,
    text: 'Import two managed solutions in sequence. Solution A sets name length to 75 and adds categoryid to the Account form; Solution B sets name length to 100 and adds territoryid to the same section.',
    type: 'multiple',
    choices: [
      'Column → Length is 100',
      'Form → Both columns appear in the Account Information section'
    ],
    correct: [0, 1],
    explanation: 'The later managed layer wins for the same column property, while additive form customizations accumulate.',
  },
  {
    id: 2129,
    text: 'HoTsPoT - Fabrikam, Inc, has two divisions as shown in the Business Unit exhibit. (Click the Business Unit tab) Business Units lieu Acne Susiness Unde] More Adions = a New a @ (x G PunwWorttiow... [5] Sut Diteg [CV name 4 ain Prone weoste Parent Business Yo Fabrikam Fabrikam P...',
    type: 'single',
    choices: [
      'Yes; No; No'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2156,
    text: 'Choose web resource types for image quality and localized text in a model-driven app.',
    type: 'single',
    choices: [
      'Image in resized image scenario = SVG; return language-localized text = RESX'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2177,
    text: 'Improve form performance for account retrieval and visibility logic in an OnLoad JavaScript scenario.',
    type: 'single',
    choices: [
      'O material aparenta sugerir C; confirmar em revisão final se necessário.'
    ],
    correct: [0],
    explanation: 'O material aparenta sugerir C; confirmar em revisão final se necessário.',
  },
  {
    id: 2179,
    text: 'ExecuteMultiple / ExecuteTransaction-style code: determine behavior of responses, faults, and access to created IDs.',
    type: 'single',
    choices: [
      'No; Yes; No; Yes'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2183,
    text: 'Interpret two Power Automate expressions: 1) outputs(\'Get_Item\')?[\'statusCode\'] 2) from?(\'@result(\'MyScope\')\')',
    type: 'single',
    choices: [
      '1 = Return the statuscode at runtime 2 = Return all the results from all actions from MyScope'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2189,
    text: 'Power Virtual Agents bot in Environment1 must access a Power Automate flow created in the default environment.',
    type: 'single',
    choices: [
      'Add the Power Automate flow to a solution in Environment1; export the solution from the default environment and import it into Environment1.'
    ],
    correct: [0],
    explanation: 'Add the Power Automate flow to a solution in Environment1; export the solution from the default environment and import it into Environment1.',
  },
  {
    id: 2213,
    text: 'JavaScript button on entity form/view calls another JavaScript function from a different web resource and errors.',
    type: 'single',
    choices: [
      'Add the missing web resource as a dependency.'
    ],
    correct: [0],
    explanation: 'Add the missing web resource as a dependency.',
  },
  {
    id: 2214,
    text: 'PCF control for phone-number area-code validation must retrieve valid area codes when a contact record opens.',
    type: 'single',
    choices: [
      'Call webAPI.retrieveMultipleRecords in updateView.'
    ],
    correct: [0],
    explanation: 'Call webAPI.retrieveMultipleRecords in updateView.',
  },
  {
    id: 2216,
    text: 'Determine whether icons/tooltip logic behave as expected in an annual revenue display column.',
    type: 'single',
    choices: [
      'No; No; Yes'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2224,
    text: 'OpenForm + data parameter scenario. Solution says to add an event handler for the data parameter to the receiving form.',
    type: 'single',
    choices: [
      'Material-source suggested answer: No.'
    ],
    correct: [0],
    explanation: 'Material-source suggested answer: No.',
  },
  {
    id: 2225,
    text: 'OpenForm + data parameter scenario. Solution says to add a web resource that sets formContext.data.attributes.',
    type: 'single',
    choices: [
      'Material-source suggested answer: No.'
    ],
    correct: [0],
    explanation: 'Material-source suggested answer: No.',
  },
  {
    id: 2230,
    text: 'Canvas app gallery of contacts. Users must search by last name, email address, and country/region, and sort by last name then country/region.',
    type: 'multiple',
    choices: [
      'Outer function → SortByColumns',
      'Inner function → Search'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2232,
    text: 'OpenForm scenario. Solution says to export the solution, edit customizations.xml, and add a querystringparameter element to the XML.',
    type: 'single',
    choices: [
      'Material-source suggested answer: No.'
    ],
    correct: [0],
    explanation: 'Material-source suggested answer: No.',
  },
  {
    id: 2238,
    text: 'Contact form phone-field script. Determine which messages appear in Business Phone notification area and in the form notification area.',
    type: 'single',
    choices: [
      'No; Yes; No; Yes'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2241,
    text: 'Model-driven app. Need to configure the associated JavaScript web resource name when adding an event handler to the form.',
    type: 'single',
    choices: [
      'Library'
    ],
    correct: [0],
    explanation: 'The “Library” field stores the JavaScript web resource reference. The “Function” field identifies which function inside that library will execute.',
  },
  {
    id: 2259,
    text: 'Custom API defined as a function does not appear in $metadata and returns an error when called.',
    type: 'single',
    choices: [
      'Set is Private = False so the custom API is discoverable in metadata and callable.'
    ],
    correct: [0],
    explanation: 'Set is Private = False so the custom API is discoverable in metadata and callable.',
  },
  {
    id: 2273,
    text: 'Assignments entity delta-link / JSON snippet interpretation.',
    type: 'multiple',
    choices: [
      'You can use the JSON segment to retrieve a list of changes to assignment records referenced in the segment. → Yes',
      'Is the delta link token valid? → Yes'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2350,
    text: 'Series question about integration and HTTP timeout/response-time constraint.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2370,
    text: 'Partilha de oportunidades entre departamentos em Dynamics 365 Sales.',
    type: 'single',
    choices: [
      'Yes',
      'No'
    ],
    correct: [0],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 2377,
    text: 'Power Platform app com Azure Service Bus / Service Bus namespace permissions.',
    type: 'single',
    choices: [
      'Send; Listen'
    ],
    correct: [0],
    explanation: 'A explicação na página indica que são necessárias permissões para enviar e receber mensagens.',
  }
];