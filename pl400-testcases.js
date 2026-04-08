var PL400_TEST_CASES = [
  {
    key: 'bellows_sports',
    label: 'Bellows Sports',
    description: 'Bellows Sports case study',
    scenario: 'Bellows Sports case study.',
    questions: [
      {
        id: 9378,
        text: 'Configurar app com envio de emails, mostrar Sponsor field e notificação.',
        type: 'multiple',
        choices: [
          'Send required emails → Power Automate flow',
          'Display the Sponsor field → Business rule',
          'Display the notification → Onload script'
        ],
        correct: [0, 1, 2],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9393,
        text: 'Resolver rendering issue for buttons e adicionar email button no registration form.',
        type: 'multiple',
        choices: [
          'Resolve rendering issue for New and Save buttons → Add addRibbonDebug=true to the end of the application URL',
          'Add email button for registration form → Use Ribbon Workbench'
        ],
        correct: [0, 1],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9421,
        text: 'Select data types for required fields.',
        type: 'multiple',
        choices: [
          'Division → Option Set',
          'End date → Date Only',
          'Tournament owner → Lookup'
        ],
        correct: [0, 1, 2],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      }
    ],
  },
  {
    key: 'adventure_works',
    label: 'Adventure Works',
    description: 'Adventure Works case study',
    scenario: 'Adventure Works case study.',
    questions: [
      {
        id: 9064,
        text: 'Custom Package entity needs delivery-efficiency calculation and a data type for delivery time with display transformations.',
        type: 'multiple',
        choices: [
          'Calculate the efficiency of the delivery → DIFFINMINUTES(Created On, Delivery Time)',
          'Select the data type for delivery that has additional transformations applied before display → Duration'
        ],
        correct: [0, 1],
        explanation: 'Duration stores values in minutes but presents them in a user-friendly time format.',
      },
      {
        id: 9065,
        text: 'Move solutions from development instance to production instance in CDS.',
        type: 'multiple',
        choices: [
          'Make changes in development, export as managed, and import to production',
          'Clone a patch in development, make changes, export, and import to production'
        ],
        correct: [0, 1],
        explanation: 'Both are valid ALM approaches for managed deployments.',
      },
      {
        id: 9066,
        text: 'Package a reusable PCF component for deployment into a model-driven app.',
        type: 'multiple',
        choices: [
          'pac solution init --publisher-name <publisher> --publisher-prefix <prefix>',
          'pac solution add-reference --path <control path>',
          'msbuild /t:build /restore'
        ],
        correct: [0, 1, 2],
        explanation: 'Initialize a solution project, reference the control, then build the solution package.',
      },
      {
        id: 9067,
        text: 'In a parent-child model-driven app scenario, new child rows created from the parent form must automatically inherit values from the parent to reduce errors.',
        type: 'single',
        choices: [
          'Map table columns from the parent record to the child record'
        ],
        correct: [0],
        explanation: 'Relationship column mapping is the out-of-box approach for prepopulating child records from a parent.',
      },
      {
        id: 9068,
        text: 'Register a plug-in so accounts of relationship type Customer receive an account number if one was not provided.',
        type: 'multiple',
        choices: [
          '2. Register New Step with Message → Update, Primary Entity = Account, Event Pipeline Stage = PreOperation',
          '3. Register New Image, set Image type → PreImage, and include accountnumber as a parameter'
        ],
        correct: [0, 1],
        explanation: 'PreOperation is the right place to set values before commit; a pre-image avoids unnecessary retrievals.',
      },
      {
        id: 9386,
        text: 'Relacionar tools com requisitos.',
        type: 'multiple',
        choices: [
          'Online sales orders → Logic Apps',
          'Customer survey → Power Automate'
        ],
        correct: [0, 1],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9429,
        text: 'Select appropriate component for each requirement.',
        type: 'multiple',
        choices: [
          'Making list scroll up/down → Flip grid',
          'Number of store visits → Linear gauge',
          'Purpose of visit → Option set'
        ],
        correct: [0, 1, 2],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      }
    ],
  },
  {
    key: 'contoso_pharmaceuticals',
    label: 'Contoso Pharmaceuticals',
    description: 'Contoso Pharmaceuticals case study',
    scenario: 'Contoso Pharmaceuticals case study.',
    questions: [
      {
        id: 9069,
        text: 'Need to attach a PDF copy of a doctor\'s medical license to each row in a custom Doctors table.',
        type: 'single',
        choices: [
          'Navigate to Table options and enable attachments'
        ],
        correct: [0],
        explanation: 'Attachments are enabled at table level.',
      },
      {
        id: 9070,
        text: 'Configure Package Deployer package that includes custom code and sample data.',
        type: 'multiple',
        choices: [
          'File that you must edit to include custom code → PackageTemplate.cs',
          'File to edit to include sample data → ImportConfig.xml',
          'Value for the Copy to Output Directory setting → Copy Always'
        ],
        correct: [0, 1, 2],
        explanation: 'PackageTemplate.cs hosts custom code. ImportConfig.xml controls sample data/solution content. Copy Always ensures package files are present at build output.',
      },
      {
        id: 9091,
        text: 'Contoso Pharmaceuticals case study. Assign the minimum environmental security role to each user type.',
        type: 'multiple',
        choices: [
          'UserA → Environment Maker',
          'UserB → System Administrator',
          'UserC → System Customizer',
          'All employees → Basic User'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'Matches the permissions described: maker, full owner/admin, customizer, and minimal end-user access.',
      },
      {
        id: 9381,
        text: 'Roles mínimos para customizar system, ver system jobs e ver todos os dados.',
        type: 'multiple',
        choices: [
          'Create customizations in the system → System Customizer only',
          'View all system job entities → System Administrator only',
          'View all data stored in system entities → System Administrator only'
        ],
        correct: [0, 1, 2],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9387,
        text: 'Processos: criar Slack notification, mudar priority field, garantir informação em leads.',
        type: 'multiple',
        choices: [
          'Create a Slack notification from a lead → Power Automate',
          'Change the priority field → Business rule',
          'Ensure appropriate information is added to leads → Business process flow'
        ],
        correct: [0, 1, 2],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9415,
        text: 'Configure the table with the appropriate types.',
        type: 'multiple',
        choices: [
          'Driver’s name field on customer record → Lookup',
          'Auto-populate Retail data field → Calculated',
          'Doctor’s name field in Doctor’s entity → Text'
        ],
        correct: [0, 1, 2],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9416,
        text: 'Map environment management security roles.',
        type: 'multiple',
        choices: [
          'UserA → Environment Maker',
          'UserB → System Administrator',
          'User C → System Customizer',
          'All employees → Common Data Service User'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9418,
        text: 'Set up security to meet requirements.',
        type: 'multiple',
        choices: [
          'supervisors → Field level security',
          'salespeople → Security roles',
          'developers → Security roles'
        ],
        correct: [0, 1, 2],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9420,
        text: 'Assign security roles to groups of users.',
        type: 'multiple',
        choices: [
          'Manager → System Administrator',
          'Sales representative → Basic User'
        ],
        correct: [0, 1],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      }
    ],
  },
  {
    key: 'northwind_electric_cars',
    label: 'Northwind Electric Cars',
    description: 'Northwind Electric Cars case study',
    scenario: 'Northwind Electric Cars case study.',
    questions: [
      {
        id: 9407,
        text: 'Implement driving record check functionality.',
        type: 'multiple',
        choices: [
          'Trigger a driving record check → After the address validation field is saved to Dataverse',
          'Perform a driving record check → Cloud flow'
        ],
        correct: [0, 1],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9409,
        text: 'Configure address validation API.',
        type: 'multiple',
        choices: [
          'Address validation message → northwind_ValidateAddress',
          'Execution mode → Synchronous'
        ],
        correct: [0, 1],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9410,
        text: 'Design functionality to process background check results.',
        type: 'multiple',
        choices: [
          'Select an implementation pattern → Event-based',
          'Apply stage changes to Dataverse → Update'
        ],
        correct: [0, 1],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9412,
        text: 'Integrate with address validation API and evaluate statements.',
        type: 'multiple',
        choices: [
          'You must replace ACTIONNAME in line 427 with northwind_ValidateAddress. → Yes',
          'Calling the address validation API from the submit action eliminates the error reported by users. → Yes'
        ],
        correct: [0, 1],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      }
    ],
  },
  {
    key: 'proseware',
    label: 'Proseware',
    description: 'Proseware case study',
    scenario: 'Proseware case study.',
    questions: [
      {
        id: 9088,
        text: 'Proseware recruiting case study. Need to store designations/certifications for candidates and support multiple designations per contact.',
        type: 'single',
        choices: [
          'Create a new table that has an N:N relationship with the Contact table'
        ],
        correct: [0],
        explanation: 'A many-to-many structure supports multiple designations per candidate and reuse of designation records across candidates.',
      },
      {
        id: 9089,
        text: 'Proseware case study. Need to stop a field used by a PCF control from updating the Dataverse record.',
        type: 'multiple',
        choices: [
          'Make the field read-only',
          'Call the setSubmitMode(\'never\') function on the field'
        ],
        correct: [0, 1],
        explanation: 'Read-only prevents edits; setSubmitMode(\'never\') stops the field from being submitted on save.',
      },
      {
        id: 9090,
        text: 'Proseware case study. Need to track referrals independently of completed applications and support multiple referrals per candidate.',
        type: 'single',
        choices: [
          'Create a new Referral table with required lookup columns to the Contact, SystemUser, and JobPosting tables'
        ],
        correct: [0],
        explanation: 'This decouples referrals from application completion and supports multiple referrals per candidate.',
      },
      {
        id: 9141,
        text: 'Case study: determine whether a FetchXML query meets requirements for counting interviews / recommendations.',
        type: 'single',
        choices: [
          'Yes; Yes; No'
        ],
        correct: [0],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9247,
        text: 'Configure manifest elements for the PCF control used to display local time.',
        type: 'multiple',
        choices: [
          'Property → of-type="DateAndTime.DateAndTime"',
          'Type-Group → <type>Whole.None</type>'
        ],
        correct: [0, 1],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9248,
        text: 'Resolve issue with the new command button where the context input parameter is null.',
        type: 'single',
        choices: [
          'Pass the value PrimaryControl to the function in the action definition.'
        ],
        correct: [0],
        explanation: 'Editorial note: this differs from the site’s suggested answer (C). For a ribbon/command button scenario, passing PrimaryControl in the command definition is the stronger technical fit.',
      },
      {
        id: 9249,
        text: 'Implement ribbon display rules to control availability for the scoring command button.',
        type: 'multiple',
        choices: [
          'Configure button visibility for recruiters → CustomRule',
          'Configure visibility for the button based on the mode for the form → FormStateRule'
        ],
        correct: [0, 1],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9250,
        text: 'Configure the PCF control to display team members for interview scheduling.',
        type: 'single',
        choices: [
          'Inputs needed are: - identifier for the hiring manager - time-zone offset for the job candidate This allows retrieval of direct reports and ordering by time-zone proximity to the candidate.'
        ],
        correct: [0],
        explanation: 'Inputs needed are: - identifier for the hiring manager - time-zone offset for the job candidate This allows retrieval of direct reports and ordering by time-zone proximity to the candidate.',
      },
      {
        id: 9287,
        text: 'Case study question from the source material.',
        type: 'single',
        choices: [
          'Manual review recommended.'
        ],
        correct: [0],
        explanation: 'Manual review recommended.',
      },
      {
        id: 9288,
        text: 'Case study question from the source material.',
        type: 'single',
        choices: [
          'Manual review recommended.'
        ],
        correct: [0],
        explanation: 'Manual review recommended.',
      },
      {
        id: 9289,
        text: 'Case study question from the source material.',
        type: 'single',
        choices: [
          'Manual review recommended.'
        ],
        correct: [0],
        explanation: 'Manual review recommended.',
      },
      {
        id: 9290,
        text: 'Case study question from the source material.',
        type: 'single',
        choices: [
          'Manual review recommended.'
        ],
        correct: [0],
        explanation: 'Manual review recommended.',
      },
      {
        id: 9291,
        text: 'Case study question from the source material.',
        type: 'single',
        choices: [
          'Manual review recommended.'
        ],
        correct: [0],
        explanation: 'Manual review recommended.',
      },
      {
        id: 9298,
        text: 'Determine the root cause of the issue reported by interviewers not receiving notifications when interview records are created for an existing person of interest.',
        type: 'single',
        choices: [
          'The plug-in used to synchronize the Person of Interest field from Contact to Interview was not triggered.'
        ],
        correct: [0],
        explanation: 'Editorial note: this differs from the site’s suggested answer (B). The practical failure is that synchronization does not run in the creation scenario, so the Interview record does not reflect Person of Interest and downstream notification logic is not reached.',
      },
      {
        id: 9299,
        text: 'Plug-in code retrieves contact fullname, finds recruiters from active applications, and sends emails.',
        type: 'single',
        choices: [
          '- You can use data from the contact’s name without explicitly retrieving the value from the fullname column. -> No - You can use the same plug-in to send notifications to interviewers. -> Yes - Recruiters only receive a single email notification per applicant. -> No'
        ],
        correct: [0],
        explanation: 'The code explicitly retrieves fullname, can be adapted for other recipients, and may send multiple emails depending on the recruiter/application records returned.',
      },
      {
        id: 9300,
        text: 'Implement scoring for all individuals and for a specific individual.',
        type: 'multiple',
        choices: [
          'Initiate process for all individuals → Custom process action and plug-in',
          'Calculate for a specific individual → JavaScript code'
        ],
        correct: [0, 1],
        explanation: 'The global process should run from a reusable server-side/action entry point, while the specific individual calculation is triggered by the form command/button.',
      }
    ],
  },
  {
    key: 'northwind_traders',
    label: 'Northwind Traders',
    description: 'Northwind Traders case study',
    scenario: 'Northwind Traders case study.',
    questions: [
      {
        id: 9092,
        text: 'Northwind case study. A solution containing a Power Automate flow fails to import because a required component is missing.',
        type: 'single',
        choices: [
          'custom connector'
        ],
        correct: [0],
        explanation: 'The flow depends on the custom connector that exposes the external Web API.',
      },
      {
        id: 9161,
        text: 'Start of a new case study. Background and requirements were captured, but the first answer was not reliably extracted.',
        type: 'single',
        choices: [
          'Case study de arranque; primeira resposta não foi extraída com segurança.'
        ],
        correct: [0],
        explanation: 'Case study de arranque; primeira resposta não foi extraída com segurança.',
      },
      {
        id: 9206,
        text: 'Northwind case study. Configure a Dataverse trigger and action in Power Automate so researchers can update account records with data from the Web API even without edit privileges.',
        type: 'multiple',
        choices: [
          'Change Type → Added or Modified',
          'Update a row connection type → Service principal'
        ],
        correct: [0, 1],
        explanation: 'Validated in chat from user-provided clearer images.',
      },
      {
        id: 9209,
        text: 'Northwind case study. Implement a reusable solution to encapsulate parameterized Dataverse queries.',
        type: 'multiple',
        choices: [
          'Create a custom process action that uses a custom workflow activity to perform the Dataverse queries',
          'Define the input parameters for the Dataverse queries',
          'Run the real-time workflow by using the Dataverse connector'
        ],
        correct: [0, 1, 2],
        explanation: 'Validated in chat from user-provided clearer images. Note editorial: wording is slightly awkward because the source mixes custom process action and real-time workflow terminology.',
      },
      {
        id: 9251,
        text: 'Configure the row filter on the Dataverse trigger so only records with DataId are processed.',
        type: 'single',
        choices: [
          'new_dataid ne null'
        ],
        correct: [0],
        explanation: 'Matches the column name used in the case study and filters only rows with a non-null DataId.',
      },
      {
        id: 9252,
        text: 'Ensure data returned from the Web API corresponds to the correct environment.',
        type: 'single',
        choices: [
          'environment variables'
        ],
        correct: [0],
        explanation: 'Environment variables let the connector/solution use environment-specific values without hardcoding.',
      },
      {
        id: 9253,
        text: 'Configure the custom connector to incorporate the environment name and DataId in the Web API URL.',
        type: 'multiple',
        choices: [
          'Create a policy template that uses the Set host URL template.',
          'Set the operation to dataservice.',
          'Set the subdomain of the URL template to: dataservice-@connectionParameters(\'EnvironmentName\')',
          'Set the path of the URL template path to: enrich/@queryParameters(\'DataId\')'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'This matches the answer-area screenshot provided in chat and the case-study requirement to compose the URL dynamically.',
      }
    ],
  },
  {
    key: 'city_power_light',
    label: 'City Power & Light',
    description: 'City Power & Light case study',
    scenario: 'City Power & Light case study.',
    questions: [
      {
        id: 9036,
        text: 'City Power & Light case study. Data model design steps for protecting PII on Contact while enabling the required app design.',
        type: 'multiple',
        choices: [
          'Select the Contact table',
          'Modify a column',
          'Enable column security',
          'Create column security profile'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'Confirmed from the screenshot you later sent for Q36.',
      },
      {
        id: 9037,
        text: 'Planning Hub / Power Platform case study question.',
        type: 'single',
        choices: [
          'Create application users in the target environment / use the recommended admin configuration shown by the suggested answer'
        ],
        correct: [0],
        explanation: 'This one should be polished later from the original page, but the answer letter from OCR is C.',
      },
      {
        id: 9038,
        text: 'Another City Power & Light case-study item.',
        type: 'single',
        choices: [
          'Use the recommended solution indicated by the suggested answer'
        ],
        correct: [0],
        explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
      },
      {
        id: 9104,
        text: 'City Power & Light case study. Need to deploy the correct Planning Hub solution and remove a column after deployment.',
        type: 'multiple',
        choices: [
          'Solution to deploy → Claim submission portal',
          'How to export → Export the unmanaged solution as managed',
          'Remove the column after the deployment → Upgrade'
        ],
        correct: [0, 1, 2],
        explanation: 'Managed export is the right production artifact; component removal is applied through solution upgrade.',
      },
      {
        id: 9105,
        text: 'City Power & Light case study. Funding application issue loads information incorrectly to the test system after deployment.',
        type: 'single',
        choices: [
          'environment variable'
        ],
        correct: [0],
        explanation: 'Environment variables are the correct way to separate environment-specific configuration like endpoints or keys.',
      },
      {
        id: 9210,
        text: 'City Power & Light case study. Build automation for the Planning Hub application.',
        type: 'multiple',
        choices: [
          'Retrieve data → Excel Online for Business',
          'Approve the submission in Microsoft Teams → Approvals',
          'Record the result of the API upload → Dataverse'
        ],
        correct: [0, 1, 2],
        explanation: 'Validated in chat from user-provided clearer images.',
      },
      {
        id: 9303,
        text: 'Questão ligada ao case study do bloco 301-320.',
        type: 'single',
        choices: [
          'Conteúdo visível nas páginas renderizadas, mas sem extração suficientemente limpa para fixar resposta com confiança alta.'
        ],
        correct: [0],
        explanation: 'Conteúdo visível nas páginas renderizadas, mas sem extração suficientemente limpa para fixar resposta com confiança alta.',
      },
      {
        id: 9304,
        text: 'Questão ligada ao mesmo case study.',
        type: 'single',
        choices: [
          'Necessita confirmação manual no material-source antes de publicação final.'
        ],
        correct: [0],
        explanation: 'Necessita confirmação manual no material-source antes de publicação final.',
      },
      {
        id: 9355,
        text: 'City Power & Light eligibility assessment issue.',
        type: 'single',
        choices: [
          'The rendered source page marks suggested answer B.'
        ],
        correct: [0],
        explanation: 'The rendered source page marks suggested answer B.',
      }
    ],
  },
  {
    key: 'common_voice',
    label: 'Common Voice',
    description: 'Common Voice case study',
    scenario: 'Common Voice case study.',
    questions: [
      {
        id: 9026,
        text: 'Common Voice style case study from OCR. Need recommended app type for the described scenario.',
        type: 'single',
        choices: [
          'Canvas application for the Sales function'
        ],
        correct: [0],
        explanation: 'Derived from the OCR suggested answer. Revisit wording when polishing the final publication version.',
      },
      {
        id: 9027,
        text: 'Same case study sequence; choose the right approach for another requirement.',
        type: 'single',
        choices: [
          'Use a plug-in / customization-based approach as indicated by the suggested answer'
        ],
        correct: [0],
        explanation: 'This item should be normalized in a later cleanup pass because OCR on the options is noisy.',
      }
    ],
  }
];