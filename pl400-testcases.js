// PL-400: Microsoft Power Platform Developer
// Case Studies (scenario-based test cases)

const PL400_TEST_CASES = [
  {
    key: "contoso-hr",
    label: "Contoso HR Automation",
    description: "Contoso HR system integration and automation case study",
    scenario: "Contoso Ltd. is modernizing its HR department. The company uses a legacy HR system that exposes a REST API, and they want to integrate it with Power Platform. They need a Power Apps model-driven app for HR managers to manage employee onboarding, a Power Automate flow to notify managers when new employees are created, and a Dataverse-based solution to store employee and department data. The IT team has set up a custom connector for the legacy HR API. Your role is to design and configure this solution.",
    questions: [
      {
        id: 1001,
        text: "Contoso needs to ensure that the Employee table in Dataverse is only accessible by users with the 'HR Manager' security role. Which approach correctly restricts table access to this role?",
        type: "single",
        choices: [
          "Assign the 'HR Manager' security role to all HR managers and remove Basic User access to the Employee table for all other roles",
          "Enable column-level security on all columns of the Employee table",
          "Set the Employee table ownership to 'User or Team' and share records individually",
          "Create a separate Dataverse environment accessible only to HR managers"
        ],
        correct: [0],
        explanation: "The correct approach is to configure the 'HR Manager' security role to grant access to the Employee table, and ensure that no other roles have access. Assigning the security role to the HR managers while removing access from other roles implements the principle of least privilege at the table level."
      },
      {
        id: 1002,
        text: "The HR team wants the onboarding flow to send an approval request to the department manager before a new employee record becomes active. Which Power Automate feature should be used?",
        type: "single",
        choices: [
          "Parallel branch in the flow",
          "The Approvals connector with 'Start and wait for an approval'",
          "A Dataverse business rule",
          "An HTTP webhook action"
        ],
        correct: [1],
        explanation: "The Approvals connector in Power Automate, specifically the 'Start and wait for an approval' action, sends an approval request to a specified user and pauses the flow until a response is received. This is the recommended approach for human-in-the-loop approval processes."
      },
      {
        id: 1003,
        text: "The custom connector for the legacy HR API uses API key authentication. Where should the API key be stored to avoid hard-coding it in the flow?",
        type: "single",
        choices: [
          "In a canvas app variable",
          "As an environment variable of type Secret",
          "In a SharePoint list",
          "In the flow's description field"
        ],
        correct: [1],
        explanation: "Environment variables of type Secret securely store sensitive values like API keys in the solution. They can be referenced in flows and apps without exposing the value directly, and the actual value can be set differently per environment during deployment."
      },
      {
        id: 1004,
        text: "Contoso wants to export the HR solution from the development environment and import it into production. The solution should prevent customizers in production from modifying the core tables and flows. Which solution export type should be used?",
        type: "single",
        choices: [
          "Unmanaged solution",
          "Managed solution",
          "Partial solution",
          "Patched solution"
        ],
        correct: [1],
        explanation: "A managed solution prevents modification of its components in the target environment (production). This protects the integrity of the solution and ensures that customizations are only made in the development environment and deployed through the ALM process."
      },
      {
        id: 1005,
        text: "The model-driven app must show a custom status field that calculates the onboarding stage (Pending, In Progress, Complete) based on the values of three checklist columns. Which Dataverse feature achieves this without requiring a plugin?",
        type: "single",
        choices: [
          "Rollup column",
          "Calculated column with a formula",
          "Power Automate flow updating the field on every change",
          "Business rule that sets the field value"
        ],
        correct: [1],
        explanation: "A calculated column evaluates a formula based on other columns in the same row and returns the result. Since the onboarding stage depends only on columns in the same record, a calculated column with conditional logic (IIF/SWITCH) is the appropriate no-code solution."
      }
    ]
  },
  {
    key: "fabrikam-portal",
    label: "Fabrikam Customer Portal",
    description: "Customer-facing Power Pages portal integration case study",
    scenario: "Fabrikam Inc. is building a customer self-service portal using Power Pages (formerly Power Apps Portals). Customers should be able to register, log in, view their open service cases, submit new cases, and receive automated email updates. The data is stored in Dataverse. The development team needs to configure authentication, table permissions, and integration with Power Automate for notifications.",
    questions: [
      {
        id: 2001,
        text: "Fabrikam wants to allow customers to register and log in using their Microsoft accounts (Azure AD). Which authentication provider should be configured in Power Pages?",
        type: "single",
        choices: [
          "Local authentication with email and password",
          "OpenID Connect with Azure Active Directory as the identity provider",
          "SAML 2.0 with a third-party identity provider",
          "Basic authentication"
        ],
        correct: [1],
        explanation: "Power Pages supports OpenID Connect (OIDC) for Azure AD authentication. By configuring Azure AD as the OpenID Connect identity provider, customers can sign in using their Microsoft accounts. This is the recommended approach for integrating with Microsoft identity platforms."
      },
      {
        id: 2002,
        text: "Fabrikam needs to allow authenticated customers to view only their own service cases in the portal. Which configuration achieves this?",
        type: "single",
        choices: [
          "Set the Case table to Organization ownership and grant everyone read access",
          "Configure Table Permissions for the Case table with Contact scope and associate them with the Authenticated Users web role",
          "Create a separate Dataverse environment per customer",
          "Use column-level security to hide case data from other customers"
        ],
        correct: [1],
        explanation: "Table Permissions with Contact scope restrict a portal user's access to only the records that belong to their associated Contact record. Associating these permissions with the Authenticated Users web role ensures only logged-in customers can access their own cases."
      },
      {
        id: 2003,
        text: "The portal needs to send an automated confirmation email when a customer submits a new case. Which approach integrates best with Power Pages?",
        type: "single",
        choices: [
          "A JavaScript script in the portal's web template",
          "A Power Automate cloud flow triggered when a new Case row is created in Dataverse",
          "A Dataverse plugin registered on the Create message of the Case table",
          "A scheduled Power Automate flow that checks for new cases every minute"
        ],
        correct: [1],
        explanation: "A Power Automate cloud flow with the Dataverse 'When a row is added' trigger fires immediately when a new Case is created from the portal. The flow can then send a confirmation email using the Outlook or SendGrid connector. This is the recommended low-code approach."
      },
      {
        id: 2004,
        text: "A developer needs to display custom HTML and Liquid template code on a portal page that queries Dataverse and displays the results. Which Power Pages component should be used?",
        type: "single",
        choices: [
          "Basic Form",
          "Advanced Form",
          "Web Template",
          "Content Snippet"
        ],
        correct: [2],
        explanation: "Web Templates in Power Pages allow developers to write custom HTML combined with Liquid templating language. Liquid can query Dataverse data using 'fetchxml' or 'entitylist' tags and render dynamic content. This is the component used for custom page layouts."
      },
      {
        id: 2005,
        text: "Fabrikam wants to prevent anonymous (unauthenticated) users from submitting cases through the portal. What must be configured to enforce this?",
        type: "multiple",
        choices: [
          "Remove Create permission from the Anonymous Users web role's Table Permissions for the Case table",
          "Enable SSL on the portal website",
          "Redirect the form to the login page when an anonymous user attempts to access it",
          "Set the portal's authentication settings to require login for all pages",
          "Remove the Case table from Dataverse"
        ],
        correct: [0, 2],
        explanation: "Two measures are needed: (1) Remove Create permission from the Anonymous Users Table Permission so that even if the form is accessed, the server won't allow creating a record. (2) Configure the page/form to redirect unauthenticated users to the login page, preventing access to the submission form in the first place."
      }
    ]
  }
];
