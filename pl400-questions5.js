var pl400Questions5 = [
  {
    id: 5110,
    text: 'Package a reusable AppSource-delivered control and a JavaScript web resource that will be extended in new project dev environments.',
    type: 'multiple',
    choices: [
      'AppSource control → Managed',
      'JavaScript web resource → Unmanaged'
    ],
    correct: [0, 1],
    explanation: 'AppSource distribution requires managed packaging; developer-extensible project assets should stay unmanaged in dev.',
  },
  {
    id: 5130,
    text: 'Determine the result of adding a new contact field on a form when production already contains managed and unmanaged layers.',
    type: 'single',
    choices: [
      'Column: appended to the end of the existing section; Form: review source layering / managed + unmanaged effects'
    ],
    correct: [0],
    explanation: 'Nota de reserva: a resposta depende de solution layering e pode exigir revisão visual final.',
  },
  {
    id: 5143,
    text: 'Choose RibbonDiffXML elements for a custom command button.',
    type: 'multiple',
    choices: [
      'Existing record form → Enable Rule; user write privilege = Display Rule; prevent bulk',
      'edit → Enable Rule'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 5195,
    text: 'Power Automate expression evaluation scenario.',
    type: 'single',
    choices: [
      'Source page suggests a specific expression matrix but OCR is not clean enough for final site-ready text. Re-review the source if you want this one fully normalized.'
    ],
    correct: [0],
    explanation: 'Source page suggests a specific expression matrix but OCR is not clean enough for final site-ready text. Re-review the source if you want this one fully normalized.',
  },
  {
    id: 5265,
    text: 'Create JavaScript function to format telephone numbers in Dataverse forms.',
    type: 'multiple',
    choices: [
      'Get the global context.',
      'Use the getClientUrl/getWebResourceUrl method to get the library path as needed.',
      'Format and update the relevant column.'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 5268,
    text: 'Map HTTP headers to upsert semantics in Dataverse Web API.',
    type: 'multiple',
    choices: [
      'Upsert to create and update records → If-Match: *',
      'Upsert only to create new records → If-None-Match: *'
    ],
    correct: [0, 1],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 5272,
    text: 'Associate plug-in pipeline stages with purposes.',
    type: 'multiple',
    choices: [
      'Cancel the operation before the database transaction → PreValidation',
      'Change any values for an entity within the database transaction → PreOperation',
      'Modify any properties of the message before it returns to the caller → PostOperation'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 5275,
    text: 'Assign appropriate plug-in functions to pipeline stages.',
    type: 'multiple',
    choices: [
      'Cancel a class if the student is over 16 years old → PreValidation',
      'Update the record image retrieved by the plug-in step and rollback if an error occurs → PreOperation',
      'Add a student to the appropriate class → PostOperation'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 5295,
    text: 'Plug-in in PreOperation Create sets accountnumber from GenerateAccountNumber().',
    type: 'single',
    choices: [
      '- The GenerateAccountNumber method runs if the plug-in step registration is changed to the PostOperation stage. -> No - Creating an account in a model-driven app while excluding a name generates the error message "Account name is missing". -> Yes - The Organization service\'s Update method must run to update the database after setting the accountnumber value. -> No'
    ],
    correct: [0],
    explanation: 'Because the code exits when context.Stage != 20, PostOperation will not run this logic. In PreOperation Create, changing Target is enough; explicit Update is not required.',
  },
  {
    id: 5302,
    text: 'Sequência de ações num cenário de custom connector / integração.',
    type: 'single',
    choices: [
      'A estrutura geral da pergunta é visível na página, mas a sequência exata deve ser revista diretamente no PDF/imagem antes de publicação.'
    ],
    correct: [0],
    explanation: 'A estrutura geral da pergunta é visível na página, mas a sequência exata deve ser revista diretamente no PDF/imagem antes de publicação.',
  },
  {
    id: 5307,
    text: 'Canvas app offline com Microsoft Dataverse.',
    type: 'single',
    choices: [
      'A pergunta aparece no OCR mas a matriz/seleções não ficaram suficientemente nítidas.'
    ],
    correct: [0],
    explanation: 'A pergunta aparece no OCR mas a matriz/seleções não ficaram suficientemente nítidas.',
  },
  {
    id: 5322,
    text: 'Configurar método por requirement em cenário de integração.',
    type: 'single',
    choices: [
      'A imagem mostra seleções marcadas, mas o texto fino do requirement e das opções deve ser revisto no source antes de publicação.'
    ],
    correct: [0],
    explanation: 'A imagem mostra seleções marcadas, mas o texto fino do requirement e das opções deve ser revisto no source antes de publicação.',
  },
  {
    id: 5373,
    text: 'Debug/teste de componente PCF.',
    type: 'single',
    choices: [
      'As seleções estão parcialmente visíveis, mas não com confiança alta para fixação integral.'
    ],
    correct: [0],
    explanation: 'As seleções estão parcialmente visíveis, mas não com confiança alta para fixação integral.',
  },
  {
    id: 5382,
    text: 'Registar plug-in para processo de RH / employee identification card.',
    type: 'multiple',
    choices: [
      'Mandatory drug screening is completed → PreValidation',
      'The application is reviewed and approved → PreOperation',
      'The ID card is printed → PostOperation'
    ],
    correct: [0, 1, 2],
    explanation: 'Refer to official Microsoft Power Platform documentation for a detailed explanation of this topic.',
  },
  {
    id: 5383,
    text: 'Modificar custom process flow e inserir step adicional.',
    type: 'single',
    choices: [
      'A sequência aparece parcialmente, mas a transcrição completa das ações não ficou robusta o suficiente.'
    ],
    correct: [0],
    explanation: 'A sequência aparece parcialmente, mas a transcrição completa das ações não ficou robusta o suficiente.',
  }
];