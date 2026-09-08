/*
 * Context restored from PL900-3-verified-questions-and-answers.md.
 *
 * The PDF import converted matching, hotspot, and ordering questions into
 * multiple-choice combinations. In many cases, the answer-area labels were
 * lost, leaving numbered answers with nothing to match. Keep the original
 * question IDs and answer keys, but add the missing numbered context.
 */
var PL900_QUESTION_CONTEXTS = {
  9005: ["Helps jump-start application development by providing business logic, security, and integrations.", "A set of records used to store data."],
  9007: ["Customers submit support requests through a website.", "Support requests are created and stored.", "Technicians are notified when a new request is entered.", "Technicians enter weekly status reports from a mobile app."],
  9012: ["Manage users and groups.", "Assign the Environment Maker role to a user."],
  9013: ["Build automated workflows that access multiple data sources.", "Create custom apps for specific business needs.", "Design interactive data visualizations."],
  9014: ["Field technicians capture a defective product's location and photo on a mobile device.", "Sales representatives use views and dashboards in a sales app.", "External customers access company data through a website."],
  9015: ["Show a date-of-birth field only when a traveler is under 18.", "Guide every travel agent through the same customer process.", "Send a confirmation email when a reservation is complete."],
  9016: ["Provide the fastest response time for each geographic location.", "Create isolated test and production copies of apps and data."],
  9022: ["How many trial environments must a five-person team create so every member can build independently?", "How many Dataverse databases are required for each environment?"],
  9027: ["View account analytics.", "Send a manager an approval request when a purchase exceeds $10,000.", "Provide a website chatbot that answers customer questions."],
  9035: ["Create no-code automated workflows that connect multiple systems.", "Create an app with a custom user experience.", "Create a mobile app that uses device capabilities."],
  9039: ["Bring the historical loan data into Dataverse.", "Prepare the model by learning from the historical data.", "Make the trained model available for use.", "Consume the model in a business app or automation."],
  9040: ["Validate data across fields regardless of which app creates it.", "Guide users through a consistent sequence of data-entry tasks.", "Accelerate development with a standard set of common business tables."],
  9041: ["Identify products that have no labels or serial numbers.", "Identify customers who might not pay invoices on time."],
  9042: ["Allow technicians to submit support requests through an app.", "Store customer data and synchronize it with Dynamics 365 Finance.", "Notify technicians when a new support request is entered."],
  9044: ["Automate a workflow.", "Start an action when an event occurs.", "Create a custom business application."],
  9045: ["Choose the type of app for a customizable internal video-streaming experience.", "Add video playback to the app by using drag-and-drop.", "Apply consistent company colors throughout the app."],
  9051: ["Import data from an Excel workbook automatically every day.", "Provide a chatbot that assists customers who need support."],
  9053: ["Run an automation from a Power Apps app when a condition is met.", "Identify the component whose operations are exposed as actions and triggers."],
  9057: ["Represent a pet owner while reusing standard person-related columns.", "Represent pet-specific data.", "Associate each pet record with its owner record."],
  9058: ["Keep an app's data below the Dataverse for Teams capacity limit.", "Give professional developers full Dataverse capabilities such as APIs and plug-ins."],
  9062: ["Combine workbook data into a chart that users can analyze.", "Show top departmental metrics and alert users when thresholds are reached.", "Show sales charts that users can filter by region."],
  9064: ["Select the combination that contains three valid ways to distribute or expose a Power BI dashboard to coworkers."],
  9068: ["Create dashboards that contain sales information for one store.", "Share those dashboards with store managers."],
  9069: ["Provide a phone-friendly reporting experience.", "Let users query data with natural language.", "Load and combine data from files."],
  9070: ["Display a chart that compares incoming calls with wait time and pin it to a dashboard.", "Notify a specific user when the number of waiting support calls exceeds 20.", "Display metrics from different related datasets."],
  9071: ["Select the combination that contains two valid Power BI distribution methods that support coworker access and collaboration."],
  9073: ["Quickly create an app for a complex Dataverse-backed business process with little or no code.", "Create a simple app with a highly customizable user-interface layout."],
  9074: ["Run an automation from an app when a condition is met.", "Identify the component that supplies actions and triggers for a service."],
  9082: ["Allow users to receive alerts when data exceeds specified limits.", "Let users filter data and export it to Excel for further analysis."],
  9083: ["Analyze high-level KPIs to make decisions.", "Drill down into the details behind a visual."],
  9085: ["Improve performance by reducing the effective size of large tables.", "Cache imported data locally for analysis."],
  9088: ["Show quarterly sales-to-date relative to a goal.", "Show the monthly sales trend for all regions.", "Show year-to-date sales as a percentage by region."],
  9089: ["Make the dashboard visible to coworkers.", "Add a report visual to the dashboard.", "Load Excel data into the dashboard."],
  9100: ["Create dashboards.", "Create reports.", "Create calculated columns.", "Configure security.", "Configure sharing."],
  9102: ["Dashboard A displays a lock when the accountant opens it.", "Dashboard B displays outdated data even though daily refresh is configured."],
  9106: ["Collaboratively onboard new suppliers and distributors.", "Publish discussions and announcements for a community."],
  9108: ["Display the date, time, and location of upcoming internal meetings.", "Create a meeting request from within the app.", "Display a customer's photo when viewing a contact record."],
  9112: ["Start a new Power Apps app.", "Add the required controls and components.", "Save the app.", "Make the app available to users."],
  9113: ["Select the combination containing three valid reasons an editable canvas app might not appear in Power Apps Studio."],
  9117: ["Administration navigation element.", "Sales Log navigation element.", "Customers navigation element."],

  9123: ["Implement user authentication for the solution.", "Send data to a OneNote notebook in the same tenant."],
  9124: ["Synchronize three proprietary data sources that each require a different connector.", "Create three apps that all read from SharePoint lists.", "Create three scheduled flows that all copy data to Azure Data Lake."],
  9125: ["Store additional doctor profile data outside the Account and Contact tables.", "Store the doctor's specialty on the profile form.", "Let users choose one of ten insurance companies."],
  9128: ["Select the combination containing all supported locations where a maker can change a model-driven view's default filter and sort order."],
  9133: ["Integrate an app with external data and services.", "Automate a process across applications.", "Create an easily customized front end."],
  9134: ["Build a mobile app that uses the device camera and location.", "Detect objects in images."],
  9143: ["Define relationships between tables.", "Create data-entry forms.", "Define business rules and processes.", "Create views that show related information."],
  9145: ["Ensure authors securely access their own data.", "Apply a consistent design to site pages.", "Allow the public to read book announcements without signing in."],
  9146: ["Display one Dataverse record.", "Display records from a SharePoint list.", "Display multiple Dataverse records."],
  9148: ["Let a record owner grant another user access to the record.", "Transfer record ownership to another user.", "Associate the current record with another record."],
  9151: ["Select the combination containing three services or events that Power Automate can use to start a flow."],
  9158: ["Retrieve the five newest posts from the company's social page.", "Write the retrieved posts to the product database.", "Combine the author and link values into one value.", "Run the flow every hour."],
  9160: ["Runs automatically after a specified event.", "Guides a user through a defined set of stages and tasks.", "Runs at a specified date, time, or interval.", "Starts on demand."],
  9167: ["Allow Power Automate to communicate with a third-party application.", "Periodically detect changes in the third-party application."],
  9169: ["Ensure every team member follows the same task-completion steps.", "Let a user manually email the project lead after completing a task.", "Send a weekly list of completed tasks automatically."],
  9170: ["Start a flow when a user selects a button.", "Start a flow when a record is created.", "Guide a user through a series of steps in a model-driven app."],
  9171: ["Retrieve data from Microsoft Excel.", "Retrieve data from Azure Data Lake.", "Retrieve data from GitHub."],
  9172: ["Define how the flow starts.", "Add the next operation to the flow.", "Choose the service and operation that sends the text.", "Configure the operation's values.", "Store the completed flow."],
  9173: ["Start a flow when a user selects a button in a canvas app.", "Start a flow when a user selects a button in the Power Automate mobile app."],
  9178: ["Send an email automatically when a record changes.", "Ensure every salesperson follows the same sales process."],
  9179: ["Start processing when a weekly status report with an escalation is submitted.", "Branch based on whether the report contains an escalation request."],
  9180: ["Repeat actions until a condition becomes true.", "Choose among several branches based on a value.", "Choose between true and false branches."],
  9181: ["Create the interface where a team member selects a project-health response.", "Create the on-demand automation invoked by the interface.", "Branch according to the selected response.", "Send the appropriate email or mobile notification."],
  9190: ["Check the edited flow for errors and warnings.", "Run the flow with previously processed data.", "Observe the flow while it runs."],
  9194: ["Detect a newly uploaded Excel workbook by checking the source periodically.", "Start synchronization immediately when a user selects a button on the Account form."],
  9196: ["Type of app that can use the business rule.", "Result when City is set to New York while the rule condition tests for London.", "Form on which this Contact-table business rule is enforced."],
  9207: ["Let external customers sign in to a website and view ticket progress.", "Send high-value refund requests to managers for approval in Teams.", "Embed a picture gallery in the Customer Service app."],
  9210: ["Create and monitor cloud flows and initiate process mining.", "Start instant flows in the field and manage notifications.", "Create robotic process automation for Windows."],
  9224: ["Start when an email arrives at the support address.", "Evaluate whether the email is high priority.", "Add a row containing the email details to Excel."],
  9227: ["Find packaged solutions that fill Power BI capability gaps.", "Find a partner to help build a proof of concept."],
  9228: ["Import Excel data into Dataverse.", "Send the imported data to the ERP system."],
  9236: ["Compact form for mobile devices.", "Primary form for entering and editing record data.", "Compact record representation used in lookup results."],
  9237: ["Show a hidden field when a check box is selected.", "Display a list of customers and selected customer columns."],
  9244: ["Build a custom interface in Dynamics 365 that looks up a SharePoint repair item and adds notes.", "Create online real-time visualizations and dashboards for the repair team.", "Notify an agent in Teams and email the customer when a repair is completed."],

  9248: ["Show Order and Batch charts together.", "Guide workers through the standard picking and shipping process.", "List orders and allow users to reorder view columns.", "Require a shelf number when an aisle location is entered."],
  9249: ["Provide a fully customizable layout, design, and color scheme.", "Connect to multiple data sources.", "Guide users through data entry with a business process flow.", "Scan barcodes with a mobile device."],
  9253: ["Replace free-text City entry with a controlled list of values.", "Restrict the Postal Code column to four characters.", "Remove the time portion from the Last On Hold date/time column."],
  9254: ["Salespeople photograph receipts and enter purchase details on mobile devices.", "Accountants view and update a shared Excel document on mobile devices."],
  9263: ["Collect customer input and save it to one Dataverse row.", "Display multiple rows from a Dataverse table."],
  9264: ["Choose the Dataverse environment that will host the site.", "Choose the site template.", "Provide the site name and web address."],
  9267: ["Create a site where users submit applications online.", "Give Dynamics 365 customers access to knowledge and support resources.", "Create a site containing only a home page."],
  9269: ["Test the model's performance.", "Use the model from Power Apps or Power Automate.", "Build the model and add training data."],
  9275: ["Compare a current value with a defined target.", "Identify values outside the normally expected range.", "Find patterns in time-series data."],
  9279: ["Recognize that the employee wants to request time off.", "Ask the employee for a location.", "Recognize the city in the employee's response.", "Create the request in the HR system."],
  9282: ["Update data through an API hosted in Azure.", "Update files in SharePoint document-library folders.", "Ingest and transform data into Dataverse with a dataflow."],
  9284: ["Work in the environment containing the target Dataverse database.", "Choose Dataverse as the starting data source.", "Establish the Dataverse connection.", "Choose the table for the generated app."],
  9286: ["Create the appropriate type of flow for automating a local Windows application.", "Capture the user's data-entry actions.", "Expose values that the user supplies when the automation runs."],
  9287: ["Audit store displays with a tablet-specific layout.", "Create sales orders by following a business process flow.", "Display data from Dataverse, Excel, and SharePoint in one app."],
  9289: ["Detect negative language in an online review.", "Email the customer service manager when a negative review is found."],
  9292: ["Place multiple KPI widgets on one canvas.", "Visualize data as a line chart."],
  9293: ["Send a text automatically when a submitted report includes an escalation.", "Send a reminder every Sunday at 8 PM to users who have not submitted a report."],
  9295: ["Create a custom trade-show interface for entering potential customers.", "Create an interface for maintaining converted customers in SharePoint.", "Show dashboard metrics for customer conversions by trade show."],
  9298: ["Provide a responsive site where customers register and prepay from mobile devices.", "Host the registration experience that integrates with a PCI-compliant payment provider."],
  9299: ["Show the date, time, and location of upcoming meetings.", "Send a meeting request from the app.", "Categorize a real-world item from a photograph."],
  9300: ["Identify the selected gallery control.", "Choose the studio command used to test the app.", "Identify what must change to display dates as DD/MM/YYYY."],
  9305: ["Allow each salesperson to customize a view without affecting others.", "Let IT publish a view change that applies to everyone."],
  9307: ["On Monday, interact with a local website to record weekend events.", "Post a Teams message on demand when a staff member calls in sick.", "Send a Teams approval automatically when an email with a specified subject arrives."],
  9311: ["Store doctor profile data outside the Account and Contact tables.", "Store the doctor's specialty.", "Let users select one of ten insurance companies."],
  9312: ["Identify the flow's trigger step.", "Identify the other step that uses the same connector as Get response details."],
  9313: ["Create an app that connects to multiple data sources.", "Provide scalable, secure business-data storage.", "Define reusable business logic for multiple apps.", "Update a SharePoint list every weekday."],
  9322: ["Give salespeople read access to vendor inventory that the company does not maintain.", "Maintain company products with a guided approval process for sales discounts."],
  9324: ["Recognize keywords or questions that indicate the user's issue.", "Store a user's response for later use.", "Extract a specific type of information from a response."],
  9325: ["List appointments occurring in the next two weeks.", "Show customer-type and completed-appointment charts from the sitemap.", "Access notes, emails, and activities for one customer.", "Hide address columns when an appointment is marked online."],
  9328: ["Capture the actions needed to build the desktop automation.", "Execute the desktop flow during testing and validation."],
  9335: ["Reuse the existing customer data structure.", "Store the total number of leads.", "Set a flag automatically when total leads reaches 50."],
  9336: ["Define the doctor profile data structure.", "Define the doctor's specialty attribute.", "Store one doctor's set of profile values."],
  9340: ["Start when a new item is added to the SharePoint issue list.", "Send the acknowledgement email.", "Post the alert to the customer service team's Teams channel."],
  9343: ["Use a separate screen to create a new task.", "Make the layout scroll correctly on phones and tablets.", "Display and browse the list of spices."],
  9349: ["Open the tool used to create cloud flows.", "Describe the required automation in natural language.", "Have Copilot create the flow.", "Verify connections and test the flow.", "Confirm the completed automation."],
  9351: ["Add the receptionist to the drop-down control's data.", "Store the app changes.", "Make the saved version live.", "Give the receptionist access to the app."],
  9352: ["Let customers submit support requests through an app.", "Store customer data and synchronize it with Dynamics 365 Finance.", "Notify technicians when a new support request is entered."],
  9356: ["Display complex KPI and SLA visualizations in Teams.", "Store and host application data for Teams apps.", "Provide an extensible interface for updating SharePoint-list data."],
  9360: ["Show a hidden field when a check box is selected.", "Display related contacts and selected contact columns on the Account form."],
  9362: ["Enable business users to create custom applications without professional developers.", "Enable business users to automate repetitive processes and connect Microsoft 365 services."],
  9363: ["Update data through an API hosted in Azure.", "Update files in SharePoint document-library folders."],
  9365: ["Select the combination containing the three site properties that Copilot for site creation derives from a natural-language prompt."],
  9369: ["Let the coworker add or edit flow actions.", "Let the coworker run the flow but not delete it.", "Let the coworker view run history in the Power Automate maker portal."]
};

var PL900_TEXT_REVISIONS = {
  9003: "You are a customer service manager. You need to create a Power Pages site where customers can securely view and update their own support cases. Which data source should the site use to store and expose the customer and case data?",
  9017: "You have version 1.0.0.0 of a published Power Apps app. You create and publish version 2.0.0.0, and then restore the previous version. How many versions are displayed on the app's Versions tab?",
  9121: "A company has a Power Apps app that is used by most employees. The company is expanding into other countries and regions. You need to translate text generated in the app in near real time. Which service should you recommend?",
  9364: "A company uses Microsoft Teams as its primary collaboration tool. Which statements about using Microsoft Power Platform with Teams are true? Select all that apply."
};

var PL900_DATA_REVISIONS = {
  9002: {
    text: "A company uses the browser-based Dynamics 365 Sales Hub app. Which app should users install to access Dynamics 365 data from mobile devices?",
    choices: ["Dynamics 365 Remote Assist", "Dynamics 365 Finance", "Dynamics 365 for Phones"],
    correct: [2]
  },
  9003: {
    choices: ["Dynamics 365 connector", "Microsoft SharePoint", "Microsoft Azure Storage", "Microsoft Dataverse"],
    correct: [3]
  },
  9017: {
    choices: ["One version", "Two versions", "Three versions", "Four versions"],
    correct: [2]
  },
  9023: {
    text: "A company is creating a canvas app to track and analyze customer visits at its retail stores. The visit data is stored on-premises at each store. The app must make that data available when users launch it. Which tool should you use?",
    choices: ["Connector", "Microsoft Dataverse", "Data source", "Power Automate", "On-premises data gateway"],
    correct: [4]
  },
  9027: {
    text: "A company wants to extend Dynamics 365 Sales with Microsoft Power Platform. Which application should it use for each requirement?"
  },
  9033: {
    text: "A company plans to use AI Builder to improve business performance. Which three AI Builder model types can the company use? Select all that apply.",
    choices: ["Linear regression", "Prediction", "Object detection", "Anomaly detection", "Text classification"],
    correct: [1, 2, 4]
  },
  9037: {
    text: "What is a benefit of deploying Microsoft 365 and Dynamics 365 apps in the same tenant?",
    choices: [
      "Use Microsoft Dataverse to connect to application data.",
      "Set up Microsoft 365 groups once to grant permissions to all data.",
      "Users can access both Microsoft 365 and Dynamics 365 by using single sign-on (SSO)."
    ],
    correct: [2]
  },
  9048: {
    choices: ["Microsoft Dataverse", "Business process flow", "Table metadata", "Business rule"],
    correct: [0]
  },
  9046: {
    text: "You want to create a Power Apps app with a custom sitemap for navigating between tables, dashboards, and other components. Which type of app should you create?",
    choices: ["Model-driven app", "Canvas app", "Power Pages site", "Canvas app created from a template"],
    correct: [0]
  },
  9047: {
    text: "A company is building apps that connect to several data sources and respond to events from those services. Which two operation types do connectors expose? Select all that apply.",
    choices: ["Plug-ins", "Actions", "Triggers"],
    correct: [1, 2]
  },
  9049: {
    choices: ["Demo website", "Live production website", "Test chat feature"],
    correct: [0]
  },
  9052: {
    text: "A Contact-table business rule requires a telephone number, fax number, or email address when a record is created. You must remove the fax-number condition. Which two approaches correctly update the rule? Select all that apply.",
    choices: [
      "Save a copy, change the copy, and deactivate or delete the original rule.",
      "Deactivate the rule, change its condition, and reactivate it.",
      "Take a snapshot of the rule and change the snapshot.",
      "Change the active rule without activating the updated version."
    ],
    correct: [0, 1]
  },
  9056: {
    text: "A company is evaluating AI Builder. Which statements about prebuilt AI Builder models are true? Select all that apply.",
    choices: [
      "Prebuilt AI Builder models are pretrained and ready to interpret business data.",
      "Prebuilt AI Builder models are available for both Power Automate and Power Apps."
    ],
    correct: [0, 1]
  },
  9063: {
    text: "You have a Power BI report. Which statements are true? Select all that apply.",
    choices: [
      "You can export data from a visualization in a Power BI report.",
      "You can show the data behind a report visual without exporting it.",
      "You can export data to view supporting data for a KPI."
    ],
    correct: [0, 1, 2]
  },
  9079: {
    text: "You are building Power BI visualizations for a team. Which statements are true? Select all that apply.",
    choices: [
      "Power BI can retrieve data from no more than two sources for each dashboard.",
      "Power BI visualizations can be used in canvas apps and model-driven apps.",
      "Power BI can display charts and list boxes on dashboards."
    ],
    correct: [1, 2]
  },
  9095: {
    text: "User1 shares a Power BI dashboard with User2, who works for another company. User2 can view it and forwards the sharing email to User3. User3 can view dashboards that he creates, but the forwarded link returns an error. Why?",
    choices: [
      "User3 must upgrade Power BI.",
      "User2 must sign out before User3 can sign in.",
      "Forwarding the email does not share the dashboard with User3.",
      "User1 used the wrong organizational account for Power BI."
    ],
    correct: [2]
  },
  9096: {
    text: "A company plans to implement Power BI. Which statements are true? Select all that apply.",
    choices: [
      "Power BI Report Builder is the only tool used to create reports for the Power BI service.",
      "The Power BI service can include calculated columns.",
      "Power BI Desktop can include calculated columns."
    ],
    correct: [1, 2]
  },
  9119: {
    text: "You create a canvas app by using the Generate from data feature and connect it to a Microsoft SharePoint list. Which statements are true? Select all that apply.",
    choices: [
      "A screen is generated that contains a browsable list of SharePoint list items.",
      "A screen is generated that allows users to update SharePoint list items."
    ],
    correct: [0, 1]
  },
  9098: {
    text: "You are viewing a shared Power BI report in the Power BI service. You need to add one visual to a dashboard as a tile. Which action should you use?"
  },
  9204: {
    choices: ["One connector", "Two connectors", "Three connectors", "Four connectors"],
    correct: [1]
  },
  9222: {
    text: "You create a Microsoft Power Automate flow. Which of the following statements are true? Select all that apply.",
    choices: [
      "A Power Automate flow button requires a user to provide input before the button can be selected.",
      "A Power Automate flow can only be triggered from virtual buttons in software.",
      "None of the above statements are true."
    ],
    correct: [2]
  },
  9138: {
    text: "A tutoring company has deployed a model-driven app for administration staff and a canvas app for teachers. Which statements are true? Select all that apply.",
    choices: [
      "Teachers can access the canvas app from desktop and mobile devices.",
      "Assigning security roles is the only action required to grant access to the canvas app.",
      "Administration staff can create personal views and dashboards in the model-driven app."
    ],
    correct: [0, 2]
  },
  9139: {
    choices: [
      "Add the app to a solution.",
      "Publish the app.",
      "Add a Power Apps component framework (PCF) control to the app."
    ],
    correct: [1]
  },
  9144: {
    text: "You are creating a canvas app that will be used in several countries and regions. Which statements are true? Select all that apply.",
    choices: [
      "The canvas app authoring environment adapts to the language setting of the author.",
      "When a canvas app runs on a mobile device, it adopts the app author's language.",
      "Numbers and dates in a Power Apps app automatically conform to the regional and language settings of the user's device."
    ],
    correct: [0, 2]
  },
  9168: {
    text: "For which scenarios can you use Power Automate? Select all that apply.",
    choices: [
      "Notify team members when a response is recorded in Microsoft Forms.",
      "Save email attachments to OneDrive for Business when an email is received.",
      "Receive notifications when negative comments about the company are posted on Twitter."
    ],
    correct: [0, 1, 2]
  },
  9185: {
    text: "A company plans to connect Power Apps to custom services for which no connectors are available. Which statements about custom connectors are true? Select all that apply.",
    choices: [
      "Custom connectors for customer-specific services do not require Microsoft review and certification.",
      "You can build a custom connector once and reuse it in Power Apps and Power Automate.",
      "You can make a custom connector publicly available to all Power Platform users without Microsoft certification."
    ],
    correct: [0, 1]
  },
  9179: {
    text: "A company uses weekly project status reports that can include escalation requests. Which Power Automate components should it use?"
  },
  9181: {
    text: "A company is creating a project health-check solution with Power Apps and Power Automate. Which four actions should it perform in sequence?"
  },
  9191: {
    choices: [
      "Create a custom connector.",
      "Create a cloud flow that exports and imports the changed data.",
      "Export all data to Azure Blob Storage."
    ],
    correct: [1]
  },
  9195: {
    text: "Which statements about Power Automate capabilities are true? Select all that apply.",
    choices: [
      "You can trigger a Power Automate flow when an Excel or Word file is uploaded to a SharePoint site.",
      "You can use a Power Automate desktop flow to open a website and perform an action that creates a file.",
      "You can use a connector in a Power Automate cloud flow to retrieve data from a third-party data source."
    ],
    correct: [0, 1, 2]
  },
  9197: {
    text: "A tutoring company has deployed a model-driven app for administration staff and a canvas app for teachers. Which statements are true? Select all that apply.",
    choices: [
      "Teachers can access the canvas app by using a browser or the Power Apps mobile app.",
      "Administration staff can create personal views and dashboards in the model-driven app."
    ],
    correct: [0, 1]
  },
  9208: {
    text: "You are developing a Copilot Studio agent for a company. Which statements are true? Select all that apply.",
    choices: [
      "You must create a topic to specify how the agent responds to a user.",
      "You can use prebuilt entities or custom entities."
    ],
    correct: [0, 1]
  },
  9215: {
    text: "You add a Microsoft Teams action to an existing Power Automate cloud flow. The flow must run tomorrow and post messages both to a central-office channel and to your direct chat. What should you do next?",
    choices: [
      "Add parameters to the action.",
      "Turn the flow on.",
      "Create a connection.",
      "Save the flow."
    ],
    correct: [3]
  },
  9223: {
    text: "Which statements about Power Automate are true? Select all that apply.",
    choices: [
      "A Power Automate cloud flow can be added to a solution by using the Power Automate mobile app.",
      "Power Automate for desktop is an application that must be installed on a computer.",
      "Business process flows can be created by using the Power Automate portal."
    ],
    correct: [1, 2]
  },
  9239: {
    text: "A company plans to use Power BI to visualize data. Which statements are true? Select all that apply.",
    choices: [
      "Power BI lets users create and consume visualizations in one view by using data from several sources.",
      "Microsoft Power Platform uses Microsoft SQL Server databases to securely store and manage data used by business applications."
    ],
    correct: [0]
  },
  9234: {
    text: "A canvas app uses an Excel spreadsheet containing pet records. Users must be able to enter the pet's attributes and save a new record. What is the minimum number of controls required?",
    choices: [
      "One control: an edit form.",
      "Two controls: an edit form and a button.",
      "Three controls: a text input, a date picker, and a combo box.",
      "Four controls: a text input, a date picker, a combo box, and a button."
    ],
    correct: [1]
  },
  9235: {
    text: "A user creates a canvas app from a data source. Which three screens are generated? Select all that apply.",
    choices: ["Welcome screen", "Edit/create screen", "Browse screen", "Details screen", "Delete screen"],
    correct: [1, 2, 3]
  },
  9242: {
    text: "You test a business process flow in a sandbox environment. After testing, you must copy only the business process flow to a production environment, without data or unrelated modifications. What should you do?",
    choices: [
      "Export the default solution.",
      "Create a view and export the view.",
      "Add the business process flow to a separate solution and export that solution.",
      "Export the form that contains the business process flow to a separate solution."
    ],
    correct: [2]
  },
  9251: {
    text: "An airline wants to use Power Apps for its lost-luggage desk. Which two questions help determine whether to build a canvas app or a model-driven app? Select all that apply.",
    type: "multiple",
    choices: [
      "Which data sources will be used?",
      "Which Microsoft Entra ID users or groups will use the app?",
      "Will the app be used on mobile or tablet devices?",
      "Does the app require a specific layout?",
      "Will the app builders have coding skills?"
    ],
    correct: [0, 3]
  },
  9256: {
    text: "A company is assigning Power Platform solutions to departments. Facilities technicians must photograph warehouse equipment with mobile devices and record its condition. Which department's requirement should be implemented with a canvas app?",
    choices: ["Facilities", "Finance", "Customer service", "Marketing"],
    correct: [0]
  },
  9276: {
    text: "You create a canvas app from a spreadsheet by using Start from data. Customer records appear in a list on the Browse screen. You need to modify a property of the control that displays the records. Which control should you modify?",
    choices: ["Display form", "Icon", "Search", "Gallery"],
    correct: [3]
  },
  9294: {
    text: "A company uses a model-driven app to record customer orders. Each new Dataverse customer record must include a manually entered alphanumeric customer identification number. Which Dataverse component should you add to the Customer table?",
    choices: ["Column", "Relationship", "Dataflow", "Table"],
    correct: [0]
  },
  9293: {
    text: "A canvas app collects weekly project status reports. The solution must send escalation texts immediately and remind non-submitters every Sunday. Which flow types should it use?"
  },
  9295: {
    text: "A company records trade-show leads, maintains converted customers in SharePoint, and reports conversion rates. Which tools should it use?"
  },
  9309: {
    text: "Workers submit automobile defect sheets for manager review, but required information is often missing. Which Power Platform service should create a digital defect sheet with validation rules that require completion before submission?",
    choices: ["AI Builder model", "Power Apps app", "Power Automate cloud flow", "Power BI report"],
    correct: [1]
  },
  9310: {
    text: "Business users need natural-language assistance when creating Power Platform apps and automations. Which feature should they use?",
    choices: ["Copilot", "AI Builder", "Microsoft 365", "Power Automate"],
    correct: [0]
  },
  9319: {
    text: "You create a canvas app from a spreadsheet by using Start from data. Customer records appear in a list on the Browse screen. You need to filter the control that displays the records. Which control should you modify?",
    choices: ["Display form", "Icon", "Search", "Gallery"],
    correct: [3]
  },
  9327: {
    text: "A manufacturer uses an on-premises ERP application with SQL Server and an outdated web interface. It needs a modern interface that allows users to read and write ERP data. The data must remain in the ERP application, and costs must be minimized. Which two Power Platform features should you recommend? Select all that apply.",
    choices: ["Dataverse", "Connector", "Power BI report", "Power Apps", "Dataflow"],
    correct: [1, 3]
  },
  9259: {
    text: "A company uses a model-driven app to manage its sales process. You are creating a Power Automate cloud flow that sends a Teams message when a new order is recorded in Dataverse. Which flow component determines when the flow starts?",
    choices: ["An action", "A formula", "A trigger"],
    correct: [2]
  },
  9263: {
    choices: [
      "1. List | 2. Basic form",
      "1. Basic form | 2. Basic form",
      "1. List | 2. List",
      "1. Basic form | 2. List"
    ],
    correct: [3]
  },
  9273: {
    text: "You want to build and train a no-code machine-learning model that can generate predictions in Power Automate cloud flows. Which service should you use?",
    choices: ["AI Builder", "Azure Cognitive Services", "Azure Machine Learning", "Azure Cognitive Search"],
    correct: [0]
  },
  9302: {
    choices: [
      "Trigger a request for approval from a senior manager for high-value expenses.",
      "Upload and process a PDF file.",
      "Transfer a conversation to a live agent when the copilot cannot answer the question."
    ],
    correct: [2]
  },
  9326: {
    text: "A company is implementing Microsoft Power Platform. Which capability is available with Managed Environments?",
    choices: ["Pipelines", "Additional Dataverse capacity", "Longer cloud-flow run-history retention"],
    correct: [0]
  },
  9348: {
    text: "A company plans to implement a ticketing application using Microsoft Dataverse. Customers must be able to sign in through an external website and view details about their open cases. Which Microsoft Power Platform solution should the company use?",
    choices: ["Power Pages site", "Model-driven app", "Canvas app"],
    correct: [0]
  },
  9343: {
    text: "You are creating a canvas app to organize a SharePoint list of spices. Which controls should you use for each requirement?"
  },
  9331: {
    text: "An environmental agency uses Specimen and Species tables in Microsoft Dataverse. The Specimen table has a Species lookup, Owner columns, a Name primary-name column, and a Specimen GUID column. Which statements are true? Select all that apply.",
    choices: [
      "Many specimens can be associated with one species.",
      "The Specimen table is organization-owned.",
      "The Name column is the primary key of the Specimen table."
    ],
    correct: [0]
  },
  9360: {
    choices: [
      "1. Form | 2. View",
      "1. View | 2. Form",
      "1. Form | 2. Form",
      "1. View | 2. View"
    ],
    correct: [0]
  },
  9363: {
    choices: [
      "1. Standard connector | 2. Custom connector",
      "1. Standard connector | 2. Standard connector",
      "1. Custom connector | 2. Custom connector",
      "1. Custom connector | 2. Standard connector"
    ],
    correct: [3]
  },
  9367: {
    text: "You create a canvas app for a company. A professional developer must be able to edit the app but must not be able to delete it. Which permission should you grant when sharing the app?",
    choices: ["User", "Owner", "Co-owner"],
    correct: [2]
  }
};

/*
 * The source PDF numbers 369 entries, but five numbers contain no question
 * body (131, 192, 220, 280, and 350). The original import also skipped ten
 * real questions. Restore those ten here while preserving their PDF numbers.
 */
var PL900_MISSING_QUESTIONS = [
  {
    id: 9070,
    text: "You are creating a Power BI screen for a call center. Match each requirement to the Power BI component that meets it.",
    type: "single",
    choices: [
      "1. Tile | 2. Alert | 3. DirectQuery",
      "1. Dashboard | 2. Subscription | 3. Import",
      "1. Report | 2. Alert | 3. Import",
      "1. Tile | 2. Subscription | 3. DirectQuery"
    ],
    correct: [0],
    explanation: "A pinned chart is a tile, threshold notifications use alerts, and DirectQuery can query related datasets without importing them."
  },
  {
    id: 9122,
    text: "A company plans to create a canvas app that connects to three databases, each of which uses a different proprietary format. What is the minimum number of connectors required?",
    type: "single",
    choices: ["Zero", "One", "Two", "Three"],
    correct: [3],
    explanation: "Each distinct proprietary data source requires its own connector."
  },
  {
    id: 9171,
    text: "You are creating a Power Automate flow. Match each data-retrieval requirement to the component you should use.",
    type: "single",
    choices: [
      "1. Connector | 2. Connector | 3. Connector",
      "1. Expression | 2. Connector | 3. Formula",
      "1. Formula | 2. Expression | 3. Connector",
      "1. Connector | 2. Formula | 3. Expression"
    ],
    correct: [0],
    explanation: "Power Automate uses connectors to access Excel, Azure Data Lake, and GitHub."
  },
  {
    id: 9183,
    text: "A business plans to use AI Builder. Which actions can it perform? Select all that apply.",
    type: "multiple",
    choices: [
      "Use a text-classification model to retrieve text and analyze its meaning.",
      "Tag Instagram posts that mention a new product.",
      "Send the number of product mentions to a Power BI dashboard."
    ],
    correct: [0, 1, 2],
    explanation: "The PDF's marked response is incorrect; the verification record confirms that all three actions are supported."
  },
  {
    id: 9219,
    text: "Which statements about custom connectors are true? Select all that apply.",
    type: "multiple",
    choices: [
      "Custom connectors use public or private APIs to connect to external data sources.",
      "Custom connectors cannot be used in Power Automate.",
      "A connector operation can be an action or a trigger."
    ],
    correct: [0, 2],
    explanation: "Custom connectors can be used by Power Automate, and connector operations are exposed as actions or triggers."
  },
  {
    id: 9250,
    text: "A canvas app stores information in SharePoint. A user currently copies that information into Microsoft Dataverse manually. You need to automate the transfer. What should you create?",
    type: "single",
    choices: [
      "A Power Automate cloud flow that uses the SharePoint and Dataverse connectors.",
      "A Power Apps component framework control that runs when the app loads.",
      "A business process flow that calls a desktop flow.",
      "A Power Apps component framework control that runs when the app saves.",
      "A cloud flow that only uses an email connector."
    ],
    correct: [0],
    explanation: "The source's highlighted option says to use no connectors and is defective. Moving data between SharePoint and Dataverse requires their connectors."
  },
  {
    id: 9281,
    text: "Which statements about Power Automate capabilities are true? Select all that apply.",
    type: "multiple",
    choices: [
      "You can trigger a flow when an Excel or Word file is uploaded to a SharePoint site.",
      "A desktop flow can open a cloud-based application and perform an action that creates a file.",
      "A connector in a cloud flow can insert third-party data into a data source used by a Power Apps app."
    ],
    correct: [0, 1, 2],
    explanation: ""
  },
  {
    id: 9330,
    text: "Which statements about pinning Power BI content to a dashboard are true? Select all that apply.",
    type: "multiple",
    choices: [
      "You must create a dashboard before you can pin a visual to it.",
      "Dashboards are created inside workspaces.",
      "You can pin an entire report page to a dashboard."
    ],
    correct: [1, 2],
    explanation: "A dashboard can be created as part of the pinning process; dashboards live in workspaces, and an entire report page can be pinned."
  },
  {
    id: 9333,
    text: "A company uses a model-driven app to track inquiries and orders. It wants customers to review orders and add inquiries through a self-service Power Pages site. Which statements describe Power Pages benefits? Select all that apply.",
    type: "multiple",
    choices: [
      "Power Pages always requires users to sign in before they can view or add information.",
      "Power Pages sites work across supported desktop and mobile browsers without device-specific configuration.",
      "Power Pages connects natively to the same Dataverse environment used by the model-driven app."
    ],
    correct: [1, 2],
    explanation: "Power Pages supports both anonymous and authenticated access, responsive browser experiences, and native Dataverse connectivity."
  },
  {
    id: 9342,
    text: "You are creating a Power Pages site. Which two Copilot features are identified in the source as available in Power Pages design studio? Select all that apply.",
    type: "multiple",
    choices: [
      "Generate copy text.",
      "Create automation that runs when a user submits data.",
      "Create AI-generated images.",
      "Create a webchat interface for site users.",
      "Create a site interface from a short description."
    ],
    correct: [3, 4],
    explanation: "The source's exam-era intended answers are webchat and creating an interface from a description. Newer product capabilities may also make generated text defensible."
  }
];

/*
 * Final integrity pass. These corrections were verified against PL900.pdf and
 * the question-by-question verification record. They intentionally run after
 * the earlier import repairs so that no OCR fragment can overwrite them.
 */
var PL900_FINAL_REVISIONS = {
  9001: {
    text: "You publish a new version of a Power Apps app and then restore the previous version. How many versions are displayed on the app's Versions tab?",
    choices: ["One version", "Two versions", "Three versions", "Four versions"],
    correct: [2]
  },
  9008: {
    choices: [
      "Dynamics 365 Sales and Microsoft 365 must be in the same tenant to allow single sign-on (SSO).",
      "You must install an AppSource product to enable SSO between Dynamics 365 Sales and Microsoft 365."
    ],
    correct: [0]
  },
  9012: {
    choices: [
      "1. Microsoft Entra admin center | 2. Microsoft Entra admin center",
      "1. Power Platform admin center | 2. Microsoft Entra admin center",
      "1. Microsoft Entra admin center | 2. Power Platform admin center",
      "1. Power BI admin portal | 2. Power Platform admin center"
    ],
    correct: [2]
  },
  9013: {
    text: "A rapidly growing company provides Microsoft 365 licenses to all employees. The company wants users to build apps, automate business processes, and analyze data without requiring IT expertise or professional development skills. Which tools should you recommend?"
  },
  9016: {
    choices: [
      "1. Security group | 2. Environment",
      "1. Environment | 2. Environment",
      "1. Environment | 2. SharePoint library",
      "1. Security group | 2. SharePoint library"
    ],
    correct: [1]
  },
  9021: {
    text: "A company is evaluating managed and unmanaged Power Platform solutions. Which statements about managed solutions are true? Select all that apply."
  },
  9024: {
    text: "Which statement about Dataverse security roles is true?",
    choices: [
      "Security roles are modified in the Microsoft Entra admin center.",
      "A separate security role must be assigned to every Dataverse table.",
      "Neither statement is true."
    ],
    correct: [2]
  },
  9030: {
    text: "A company plans to use standard and custom connectors with industry-standard and proprietary data sources. Which statement is true?"
  },
  9034: {
    choices: [
      "Users can send messages from Dynamics 365 Sales to personal email accounts without restrictions.",
      "Business users can create Power Apps for the needs of different departments.",
      "Business users can use Power Automate to automate processes across Microsoft 365 and Dynamics 365.",
      "Power Platform requires the company to standardize all mobile devices on one vendor."
    ],
    correct: [1, 2]
  },
  9044: {
    choices: [
      "1. Power Automate | 2. Power Automate | 3. Power Apps",
      "1. Power Apps | 2. Power Automate | 3. Power Automate",
      "1. Power Automate | 2. Power Apps | 3. Power Automate",
      "1. Power Apps | 2. Power Apps | 3. Power Automate"
    ],
    correct: [0]
  },
  9050: {
    text: "You plan to use the Business Card Reader and Sentiment Analysis prebuilt AI Builder models. Which statement is true?",
    choices: [
      "The Business Card Reader model can be used with both Power Automate and Power Apps.",
      "The Sentiment Analysis model can be used only with Power Automate."
    ],
    correct: [0]
  },
  9051: {
    choices: [
      "1. Power BI | 2. Power Automate",
      "1. Copilot Studio | 2. Power Automate",
      "1. Power Automate | 2. Copilot Studio",
      "1. Azure Data Lake | 2. Custom connector"
    ],
    correct: [2]
  },
  9054: {
    text: "A coworker is creating a Power Apps app that must synchronize data automatically from an external source. No suitable Microsoft-approved connector is available. What should you recommend?",
    choices: [
      "Create a custom connector.",
      "Ask the external system owner to send the data once a week.",
      "Use Power Automate without a connector.",
      "Request that Microsoft create a new connector.",
      "Use Azure Service Bus without defining a connector."
    ],
    correct: [0]
  },
  9061: {
    text: "You publish a Power BI app and give team members permission to view its reports. Which statement about the published app is true?",
    choices: [
      "The published app is stored in the team's SharePoint site for users to install.",
      "Changes that a consumer makes to an installed dashboard automatically update the original published app.",
      "Neither statement is true."
    ],
    correct: [2]
  },
  9064: {
    text: "You create a Power BI dashboard that displays data from Dynamics 365 Customer Engagement. Which three methods can you use to share or expose the dashboard to coworkers? Select all that apply.",
    type: "multiple",
    ordered: false,
    choices: [
      "Give coworkers access through a Power BI workspace.",
      "Publish the content as a Power BI app.",
      "Embed the relevant Power BI reports for coworkers.",
      "Export the data to Dataverse and require coworkers to rebuild the dashboard.",
      "Export the data to Excel and require coworkers to import it into Power BI."
    ],
    correct: [0, 1, 2]
  },
  9068: {
    choices: [
      "1. Power BI Desktop only | 2. Power BI service only",
      "1. Power BI service only | 2. Power BI service only",
      "1. Power BI Desktop only | 2. Power BI Desktop only",
      "1. Power BI service only | 2. Power BI Desktop only"
    ],
    correct: [1]
  },
  9071: {
    text: "You create a Power BI dashboard that displays Common Data Model data. Which two methods can give coworkers access and support collaboration? Select all that apply.",
    type: "multiple",
    ordered: false,
    choices: [
      "Give coworkers access through a Power BI workspace.",
      "Publish the content as a Power BI app.",
      "Export the data to Excel and reimport it after every change.",
      "Use a flow to export the data to SQL Server."
    ],
    correct: [0, 1]
  },
  9072: {
    text: "A Power BI report must combine the City and State columns from Dynamics 365 Sales into one column. What should you do?",
    choices: ["Use Power Query Editor to merge the columns.", "Import the data.", "Export the data to Excel.", "Create a view."],
    correct: [0]
  },
  9077: {
    text: "A regional sales manager uses Power BI reports and dashboards. Which feature should be used for each requirement?\n\nRequirements/scenarios in order:\n1. Email report or dashboard updates to sales associates on a schedule.\n2. Measure whether the sales associates use the reports and dashboards.\n\nSelect the answer option that correctly matches every numbered item.",
    choices: [
      "1. Subscribe | 2. Usage metrics",
      "1. Export | 2. Favorites",
      "1. Usage metrics | 2. Subscribe",
      "1. Publish to web | 2. Performance Analyzer"
    ],
    correct: [0]
  },
  9081: {
    text: "A Power BI report page named RevReceived shows gross revenue. You need an almost identical page that shows net revenue. What should you do?",
    choices: [
      "Modify the existing RevReceived page.",
      "Import the RevReceived page into the same report.",
      "Copy each visual manually to a blank page.",
      "Duplicate the page and then update the duplicate."
    ],
    correct: [3]
  },
  9082: {
    choices: [
      "1. Reports | 2. Dashboards",
      "1. Dashboards | 2. Reports",
      "1. Dashboards | 2. Dashboards",
      "1. Reports | 2. Reports"
    ],
    correct: [1]
  },
  9083: {
    choices: [
      "1. Report | 2. Dashboard",
      "1. Power BI service | 2. Dashboard",
      "1. Dashboard | 2. Report",
      "1. Dashboard | 2. Power BI service"
    ],
    correct: [2]
  },
  9084: {
    choices: ["Power BI workspace", "Microsoft Dataverse", "Power BI dataflows", "Power Platform admin center", "Power BI Desktop"],
    correct: [4]
  },
  9085: {
    text: "A company analyzes many large datasets in Power BI and must reduce their performance impact. Which feature should be used for each requirement?",
    choices: [
      "1. Import | 2. Aggregations",
      "1. DirectQuery | 2. DirectQuery",
      "1. Import | 2. Import",
      "1. Aggregations | 2. Import"
    ],
    correct: [3]
  },
  9090: {
    text: "A Power BI report must combine the City and State columns from Dynamics 365 Sales into one column. Which Power Query operation should you use?",
    choices: ["Import data", "Create a view", "Merge columns"],
    correct: [2]
  },
  9103: {
    text: "Which statement about creating and distributing Power BI reports is true?"
  },
  9106: {
    choices: [
      "1. Community portal | 2. Partner portal",
      "1. Partner portal | 2. Customer self-service portal",
      "1. Customer self-service portal | 2. Community portal",
      "1. Partner portal | 2. Community portal"
    ],
    correct: [3]
  },
  9113: {
    text: "A user cannot find a canvas app under Apps > Can edit in Power Apps Studio. Which three conditions can explain why the editable app is missing? Select all that apply.",
    type: "multiple",
    ordered: false,
    choices: [
      "The user selected the wrong environment.",
      "The user is not a co-owner of the app.",
      "The app was not shared with the user as a co-owner.",
      "The environment does not contain a Dataverse database."
    ],
    correct: [0, 1, 2]
  },
  9117: {
    text: "A model-driven app's sitemap must contain an Administration area, a Sales Log group, and a Customers subarea. Which option correctly identifies each sitemap component type?"
  },
  9120: {
    text: "Which statement about running Power Apps apps is true?",
    choices: [
      "Power Apps apps can run only on mobile devices.",
      "Power Apps apps can run only with Dynamics 365 products.",
      "An app automatically grants access to every data source that it uses.",
      "None of these statements is true."
    ],
    correct: [3]
  },
  9124: {
    text: "A company creates canvas apps and cloud flows. What is the minimum number of connectors required for each scenario?",
    choices: [
      "1. Three | 2. One | 3. One",
      "1. One | 2. Three | 3. One",
      "1. Three | 2. Three | 3. Three",
      "1. One | 2. One | 3. Three"
    ],
    correct: [0]
  },
  9127: {
    text: "Licensed users have not been assigned permissions to another environment but can create and edit Power Apps canvas apps. In which environment are they working?",
    choices: ["Production environment", "Default environment", "Sandbox environment"],
    correct: [1]
  },
  9128: {
    text: "A company must change the default filter and sort order of a model-driven app view. In which three maker locations can the changes be made? Select all that apply.",
    type: "multiple",
    ordered: false,
    choices: [
      "Power Apps maker portal",
      "Solution Explorer",
      "App Designer",
      "Azure DevOps",
      "Visual Studio"
    ],
    correct: [0, 1, 2]
  },
  9129: {
    text: "Which statement about embedding a canvas app is true?",
    choices: [
      "A canvas app can be embedded in a Microsoft Forms form.",
      "A canvas app can be embedded directly in an Excel worksheet.",
      "A canvas app can be embedded in a model-driven app."
    ],
    correct: [2]
  },
  9130: {
    text: "Which statement about customizing a canvas app is true?"
  },
  9134: {
    choices: [
      "1. AI Builder | 2. Canvas app",
      "1. Model-driven app | 2. Power Automate",
      "1. Canvas app | 2. AI Builder",
      "1. Power Pages | 2. Canvas app"
    ],
    correct: [2]
  },
  9135: {
    text: "A Power Apps developer can create apps, connections, and flows but cannot access company data. Which predefined Dataverse security role should you assign so the developer can use company data in an app?",
    choices: ["Environment Maker", "System Customizer", "Delegate", "Basic User"],
    correct: [3]
  },
  9136: {
    text: "You create a model-driven app for a department. Which two actions make the app available to department members? Select all that apply.",
    choices: [
      "Publish the app to AppSource.",
      "Deploy the app to each user's environment by using PowerShell.",
      "Share the app.",
      "Assign the required security role."
    ],
    correct: [2, 3]
  },
  9141: {
    text: "Which statement about embedding Power Apps in Microsoft SharePoint and Teams is true?",
    choices: [
      "Users can interact with canvas apps directly in Microsoft SharePoint and Teams.",
      "Users can interact with model-driven apps directly in both Microsoft SharePoint and Teams."
    ],
    correct: [0]
  },
  9149: {
    text: "You overwrite a Power Automate flow by editing and saving it. Which two options can preserve a separate version that you can return to? Select all that apply.",
    type: "multiple",
    ordered: false,
    choices: ["Export", "Rename", "Save As", "Share"],
    correct: [0, 2]
  },
  9151: {
    text: "Which three services or event sources can trigger a Power Automate flow? Select all that apply.",
    type: "multiple",
    ordered: false,
    choices: [
      "Microsoft Dataverse",
      "Outlook or Microsoft 365",
      "A Windows desktop event",
      "Lifecycle Services",
      "Microsoft 365 admin center"
    ],
    correct: [0, 1, 2]
  },
  9157: {
    text: "A service manager must approve each new work order before a worker is dispatched. Which type of flow should you create?",
    choices: ["Plug-in", "Approval flow", "Business rule", "Team flow", "Scheduled flow"],
    correct: [1]
  },
  9163: {
    text: "Management must receive a mobile notification whenever a sales opportunity is created in Dynamics 365 Sales. Which two components should invoke the notification process? Select all that apply.",
    type: "multiple",
    ordered: false,
    choices: ["AI Builder", "Power BI", "Power Automate", "Microsoft Dataverse connector"],
    correct: [2, 3]
  },
  9164: {
    text: "A company uses Microsoft 365, SharePoint Online, and Dynamics 365 Sales. It must synchronize data daily from an external SQL Server instance, send reports automatically to executives, and route high-value opportunities to a sales manager for approval. Which two tools or components should you recommend? Select all that apply."
  },
  9166: {
    text: "A Power Automate flow emails each new Dynamics 365 Sales opportunity to a sales manager who has left the company. How should you update the flow for the new sales manager?",
    choices: [
      "Give the new manager access to the former manager's mailbox.",
      "Prompt a user to enter an email address every time the flow runs.",
      "Create another flow that forwards the former manager's messages.",
      "Change the recipient in the existing flow's To field."
    ],
    correct: [3]
  },
  9187: {
    choices: ["AI Builder", "Power Apps", "Business events", "Power Automate", "Microsoft Dataverse"],
    correct: [2, 3]
  },
  9188: {
    text: "A company uses email for approvals and manually copies operational data into Excel. Which solution should be used for each requirement?\n\nRequirements/scenarios in order:\n1. Create an approval workflow.\n2. Use the same data as Dynamics 365 Field Service for charts and reports.\n\nSelect the answer option that correctly matches every numbered item.",
    choices: [
      "1. Power Automate | 2. Dataverse and Power BI",
      "1. Dynamics 365 workflow notifications | 2. Excel",
      "1. Outlook rules | 2. A flat-file integration",
      "1. AI Builder | 2. An AppSource add-on"
    ],
    correct: [0]
  },
  9193: {
    choices: ["Power Automate mobile app", "Web browser", "Desktop recorder", "Dynamics 365"],
    correct: [0, 1]
  },
  9196: {
    text: "A Contact-table business rule hides the State/Province column only when City equals London. Which option correctly describes the rule's behavior and scope?\n\nRequirements/scenarios in order:\n1. Type of app that can use the rule.\n2. Result when City is New York.\n3. Form on which the Contact-table rule is enforced.\n\nSelect the answer option that correctly matches every numbered item."
  },
  9198: {
    text: "A company must connect Power Apps and Power Automate to custom services for which no standard connectors exist. Which statement is true?",
    choices: [
      "Every organization-only custom connector requires Microsoft certification.",
      "A custom connector can be built once and reused by Power Apps and Power Automate.",
      "A connector can be published for every Power Platform customer without Microsoft certification."
    ],
    correct: [1]
  },
  9205: {
    text: "A company plans to use premium connectors in canvas apps and Power Automate cloud flows. Which statements are true? Select all that apply.",
    choices: [
      "An appropriate Power Apps or Power Automate license is required to create solutions that use premium connectors.",
      "Makers must create premium connectors before they can use an existing premium connector.",
      "Premium connectors can be used in both canvas apps and Power Automate cloud flows."
    ],
    correct: [0, 2]
  },
  9212: {
    text: "Which statement about a Copilot Studio agent's greeting and live-agent handoff is true?",
    choices: [
      "A customer must always restate all previously collected information after a live-agent handoff.",
      "The greeting topic can be customized for an agent."
    ],
    correct: [1]
  },
  9216: {
    text: "A Power Automate flow sends text messages automatically when a receptionist receives a shipment email. Which component connects to the email service and supplies the event that starts the flow?"
  },
  9217: {
    text: "Which statement about Power Platform environments and Dataverse is true?"
  },
  9237: {
    choices: [
      "1. View | 2. Form",
      "1. Form | 2. View",
      "1. Table | 2. Form",
      "1. Column | 2. Table"
    ],
    correct: [1]
  },
  9228: {
    choices: [
      "1. Trigger | 2. Action",
      "1. Action | 2. Action",
      "1. Action | 2. Trigger",
      "1. Trigger | 2. Trigger"
    ],
    correct: [1]
  },
  9227: {
    choices: [
      "1. AppSource | 2. Microsoft partner directory",
      "1. AppSource | 2. Azure Marketplace",
      "1. Azure Marketplace | 2. AppSource",
      "1. Lifecycle Services | 2. AppSource"
    ],
    correct: [1]
  },
  9241: {
    text: "Which statement about sharing Power Apps apps and views is true?",
    choices: [
      "Sharing either a model-driven app or a canvas app always sends every user an email containing the app link.",
      "Canvas apps, model-driven apps, and shared apps use identical security-role and permission assignment.",
      "Both personal views and system views must be published before any user can use them.",
      "None of these statements is true."
    ],
    correct: [3]
  },
  9253: {
    choices: [
      "1. Edit the existing column | 2. Create a new Choice column | 3. Create a new date column",
      "1. Create a new text column | 2. Edit the existing column | 3. Create a new date column",
      "1. Create a new Choice column | 2. Edit the existing column | 3. Edit the existing column",
      "1. Edit the existing column | 2. Edit the existing column | 3. Create a new Choice column"
    ],
    correct: [2]
  },
  9262: {
    text: "Which two capabilities does Power Pages provide? Select all that apply.",
    type: "multiple",
    ordered: false,
    choices: [
      "Support for multilingual websites",
      "Low-code websites hosted as a service",
      "OData feeds as the only supported data source",
      "A different custom style generated automatically for every user"
    ],
    correct: [0, 1]
  },
  9263: {
    text: "You create a Power Pages site that shares Microsoft Dataverse data with authenticated external customers. Which component should you use for each requirement?"
  },
  9277: {
    text: "Which statement about Power Automate flow triggers and sharing is true?"
  },
  9278: {
    text: "A company uses dataflows to import data into Microsoft Dataverse. Which statements are true? Select all that apply.",
    choices: [
      "Every Power Automate connector is automatically available as a dataflow connector.",
      "Power Query can shape and transform data in a dataflow.",
      "A dataflow can run on a schedule to refresh data in Dataverse."
    ],
    correct: [1, 2]
  },
  9285: {
    text: "A Copilot Studio agent helps employees check vacation balances and answer policy questions. Which statement is true?",
    choices: [
      "The agent can use an action to retrieve a user's vacation balance.",
      "Topics represent entities such as the name of an office.",
      "A user must enter an exact trigger phrase for the agent to respond."
    ],
    correct: [0]
  },
  9289: {
    choices: [
      "1. Power Automate | 2. Sentiment analysis",
      "1. Sentiment analysis | 2. Power Automate",
      "1. Object detection | 2. Power BI",
      "1. Text recognition | 2. Copilot Studio"
    ],
    correct: [1]
  },
  9292: {
    choices: [
      "1. Report | 2. Dashboard",
      "1. Dashboard | 2. Report",
      "1. Dataset | 2. Dashboard",
      "1. Dashboard | 2. Dataset"
    ],
    correct: [1]
  },
  9298: {
    text: "A company needs a mobile-friendly, PCI-compliant experience where customers can register and prepay for a seminar. Which component should be used for each requirement?",
    choices: [
      "1. Canvas app | 2. Power Pages",
      "1. Power Pages | 2. Canvas app",
      "1. Model-driven app | 2. Power Pages",
      "1. Power Pages | 2. Power Pages"
    ],
    correct: [3]
  },
  9300: {
    text: "A canvas app contains a Company Holidays gallery. Which option correctly identifies the controls or settings for each requirement?\n\nRequirements/scenarios in order:\n1. Identify the selected gallery control.\n2. Choose the Power Apps Studio command used to test the app.\n3. Identify what must change to display dates as DD/MM/YYYY.\n\nSelect the answer option that correctly matches every numbered item."
  },
  9312: {
    text: "A Power Automate cloud flow starts from a Microsoft Forms submission. Which step meets each requirement?\n\nRequirements/scenarios in order:\n1. Identify the trigger step.\n2. Identify the other step that uses the same connector as Get response details.\n\nSelect the answer option that correctly matches every numbered item.",
    choices: [
      "1. When a new response is submitted | 2. When a new response is submitted",
      "1. Get response details | 2. Start an approval",
      "1. Start an approval | 2. Send an email for approval",
      "1. Send an email for approval | 2. Get response details"
    ],
    correct: [0]
  },
  9317: {
    text: "A Power Pages site lets customers track existing support requests and create new ones. Which data source should store the support requests?",
    choices: ["SharePoint", "Microsoft Dataverse", "SQL Server", "Excel"],
    correct: [1]
  },
  9318: {
    text: "Which statement about Microsoft Dataverse capabilities is true?",
    choices: [
      "Dataverse can be hosted either in the cloud or on-premises.",
      "Dataverse includes a common schema of business objects by default.",
      "Every Dataverse instance supports up to 8 TB of storage."
    ],
    correct: [1]
  },
  9322: {
    choices: [
      "1. Canvas app | 2. Canvas app",
      "1. Model-driven app | 2. Canvas app",
      "1. Canvas app | 2. Model-driven app",
      "1. Model-driven app | 2. Model-driven app"
    ],
    correct: [2]
  },
  9328: {
    choices: [
      "1. Run | 2. Recorder",
      "1. Recorder | 2. Run",
      "1. Recorder | 2. Subflow",
      "1. Subflow | 2. Run"
    ],
    correct: [1]
  },
  9346: {
    text: "A company uses Dynamics 365 Sales and needs a low-configuration interface for back-office staff. Existing custom tables must be visible, the experience must resemble Dynamics 365 Sales, and users must be able to create and edit data. Which capability should you recommend?"
  },
  9347: {
    text: "A canvas app must start a complex, multistep workflow whenever a user selects a custom button. Which Power Platform service should the app use?"
  },
  9359: {
    text: "An office manager must send employees an SMS reminder on the night before each scheduled all-hands meeting. Which type of Power Automate cloud flow should be created?",
    choices: ["Automated cloud flow", "Instant cloud flow", "Scheduled cloud flow"],
    correct: [2]
  },
  9362: {
    text: "A company has no professional developers. Which two Power Platform benefits should executives understand? Select all that apply.",
    type: "multiple",
    ordered: false,
    choices: [
      "Business users can create custom applications with Power Apps.",
      "Business users can automate repetitive Microsoft 365 processes with Power Automate.",
      "Power Platform permits unrestricted forwarding to personal email accounts.",
      "Power Platform requires every mobile device to use the same vendor."
    ],
    correct: [0, 1]
  },
  9365: {
    text: "Which three site properties can Copilot for Power Pages derive from a natural-language site-creation prompt? Select all that apply.",
    type: "multiple",
    ordered: false,
    choices: ["Site name", "Web address or URL", "Home page", "Forms", "Lists"],
    correct: [0, 1, 2]
  },
  9366: {
    text: "A company needs a proof-of-concept website for external vendors to access warranty information. The team has described the desired site in natural language. Which feature should create the site quickly?",
    choices: ["Visual Studio Code", "Copilot for site creation", "Power Apps maker portal", "Power Pages design studio"],
    correct: [1]
  }
};

var PL900_AUDIT_REVISIONS = {
  9005: {
    text: "You need to explain the major components of the Common Data Model and their functions. Match each term to its definition."
  },
  9007: {
    text: "You manage support at a rapidly growing company. Customers and technicians need a better experience when logging and responding to support requests. You also need weekly visibility into technicians' work. Which tools meet the company's needs?",
    explanation: "Power Pages lets external customers submit requests, Dataverse stores them, Power Automate notifies technicians, and a canvas app supports mobile status entry."
  },
  9010: {
    text: "A company plans to implement Power Platform applications without development tools or plug-ins. Which actions can users perform? Select all that apply."
  },
  9014: {
    choices: [
      "1. Canvas app | 2. Model-driven app | 3. Power Pages site",
      "1. Model-driven app | 2. Canvas app | 3. Power Pages site",
      "1. Model-driven app | 2. Power Pages site | 3. Canvas app",
      "1. Power Pages site | 2. Model-driven app | 3. Canvas app"
    ],
    correct: [0]
  },
  9019: {
    text: "A company must prevent inappropriate sharing of customer data and block connections to data sources unless users have explicit access. Which two DLP policy scopes should you recommend? Select all that apply.",
    choices: [
      "Office cloud policy",
      "Group Policy Object",
      "Tenant-level DLP policy",
      "Preset security policy",
      "Environment-level DLP policy"
    ],
    correct: [2, 4]
  },
  9022: {
    choices: [
      "1. One per environment | 2. One per user",
      "1. One per user | 2. One per environment",
      "1. One per tenant | 2. One per user",
      "1. One per tenant | 2. One per environment"
    ],
    correct: [1]
  },
  9024: {
    text: "Which statement about Dataverse security roles is true?",
    choices: [
      "Security roles are modified in the Microsoft Entra admin center.",
      "A separate security role must be assigned to every Dataverse table.",
      "Security roles define table privileges and are assigned to users or teams."
    ],
    correct: [2]
  },
  9028: {
    choices: [
      "Power BI reports can display both aggregated and detailed data.",
      "A Power BI report can combine related data from multiple sources."
    ],
    correct: [0, 1]
  },
  9029: {
    choices: [
      "Send emails to every subscriber without evaluating message content.",
      "Synchronize an external database without a connector.",
      "Collect data from several sources and display trends without applying an AI model.",
      "Interpret images and perform an action based on the image.",
      "Detect patterns in data and predict outcomes."
    ],
    correct: [3, 4]
  },
  9030: {
    text: "A company plans to use standard and custom connectors with industry-standard and proprietary data sources. Which statement is true?",
    choices: [
      "A custom connector cannot be used when a standard connector exists.",
      "Custom connectors are supported only in instant flows.",
      "Standard and custom connectors cannot be used in the same flow or app.",
      "Custom connectors can be used alongside standard connectors in flows and apps."
    ],
    correct: [3]
  },
  9035: {
    choices: [
      "1. Power Apps | 2. Power Automate | 3. Power Apps",
      "1. Power Apps | 2. Power Apps | 3. Power Automate",
      "1. Power Automate | 2. Power Automate | 3. Power Apps",
      "1. Power Automate | 2. Power Apps | 3. Power Apps"
    ],
    correct: [3]
  },
  9036: {
    text: "A company uses Dynamics 365 Supply Chain Management and Dynamics 365 Finance. Business data must be synchronized between the systems and stored in one shared location. What should you use?",
    choices: ["Azure IoT Central", "Microsoft Entra ID", "SQL Server", "Microsoft Dataverse"],
    correct: [3]
  },
  9041: {
    choices: [
      "1. Prediction | 2. Form processing",
      "1. Object detection | 2. Prediction",
      "1. Object detection | 2. Object detection",
      "1. Prediction | 2. Object detection"
    ],
    correct: [1]
  },
  9042: {
    text: "A rapidly growing support team needs a better way to log, store, and respond to support requests. Which tools meet the company's needs?"
  },
  9043: {
    text: "A business is evaluating AI Builder and related Power Platform integrations. Which actions are supported? Select all that apply.",
    choices: [
      "Use text classification alone to perform sentiment analysis for ServiceNow incidents.",
      "Tag Instagram posts that mention a new product.",
      "Send the number of product mentions to Power BI for a dashboard."
    ],
    correct: [1, 2]
  },
  9045: {
    text: "A retail director publishes weekly videos about new initiatives and goals. The company needs an internal Power Apps application that streams the videos. Which objects should you use?",
    explanation: "A canvas app provides the customizable layout, a media control streams the videos, and a theme applies consistent company colors."
  },
  9052: {
    explanation: "To change an active business rule safely, either save a modified copy and retire the original rule, or deactivate the rule, modify it, and reactivate it."
  },
  9048: {
    text: "A Power Apps application must display purchase information from a legacy point-of-sale system. The purchases must be linked to customer accounts and product sales in Dynamics 365 Commerce. Which component should you use?"
  },
  9053: {
    choices: [
      "1. Power Automate flow | 2. Connector",
      "1. Connector | 2. Power Automate flow",
      "1. Power Automate flow | 2. Power Automate flow",
      "1. Connector | 2. Connector"
    ],
    correct: [0]
  },
  9055: {
    text: "A toy company uses an AI Builder text-classification model to monitor customer feedback for specific keywords. Which two components can initiate engineering reviews and schedule worker training when negative feedback is received? Select all that apply.",
    choices: ["Copilot Studio", "Common Data Model", "Canvas app", "Power Automate"],
    correct: [2, 3]
  },
  9057: {
    text: "An animal hospital must store owner details, pet details, and the relationship between each pet and owner in Dataverse while minimizing customization. Which component should it use for each requirement?"
  },
  9058: {
    choices: [
      "1. Dataverse | 2. Dataverse for Teams",
      "1. Dataverse for Teams | 2. Dataverse",
      "1. Dataverse for Teams | 2. Dataverse for Teams",
      "1. Dataverse | 2. Dataverse"
    ],
    correct: [1]
  },
  9061: {
    text: "You publish a Power BI app and give team members permission to view its reports. Which statement about the published app is true?",
    choices: [
      "The published app is stored in the team's SharePoint site for users to install.",
      "Changes that a consumer makes to an installed dashboard automatically update the original published app.",
      "Workspace changes appear in the published app only after the app is updated and republished."
    ],
    correct: [2]
  },
  9062: {
    choices: [
      "1. Report | 2. Dashboard | 3. Report",
      "1. Dashboard | 2. Report | 3. Report",
      "1. Report | 2. Report | 3. Dashboard",
      "1. Dashboard | 2. Dashboard | 3. Report"
    ],
    correct: [0]
  },
  9066: {
    choices: [
      "Uninstall the application and reinstall a previously exported package.",
      "Delete the application and recreate it manually.",
      "Restore the previous application version."
    ],
    correct: [2]
  },
  9073: {
    choices: [
      "1. Canvas app | 2. Model-driven app",
      "1. Model-driven app | 2. Model-driven app",
      "1. Model-driven app | 2. Canvas app",
      "1. Canvas app | 2. Canvas app"
    ],
    correct: [2]
  },
  9080: {
    text: "A manufacturing company uses Internet of Things (IoT) devices to monitor warehouse temperatures. Which Power BI feature should display the readings on a near-real-time dashboard?",
    choices: ["Scheduled-refresh dataset", "Streaming dataset", "Content-pack dataset", "Power BI dataflow", "Quick Insights"],
    correct: [1]
  },
  9086: {
    choices: ["Custom data connector", "Published Power BI app", "Power Automate flow"],
    correct: [1]
  },
  9093: {
    text: "A multi-page Power BI report must show each salesperson only the data for that person's sales region. Which security feature should you use?"
  },
  9097: {
    text: "A company needs one page of visualizations containing:\n- Invoices from a third-party ERP system.\n- Client-call counts from Microsoft Dataverse.\n- Data from an Excel file.\n\nWhich Power BI component should you use?"
  },
  9102: {
    choices: [
      "1. Scheduled refresh has not run | 2. Dataset permissions",
      "1. Dataset permissions | 2. Dataset permissions",
      "1. Dataset permissions | 2. Scheduled refresh has not run",
      "1. Scheduled refresh has not run | 2. Scheduled refresh has not run"
    ],
    correct: [2]
  },
  9104: {
    text: "A user receives a \"User not found\" error when signing in to a Power Pages site, even though the sign-in information is correct. What should you do to expose the detailed cause?",
    choices: ["Disable custom error messages.", "Create a custom error message.", "Enable Lifecycle Services diagnostics.", "Enable maintenance mode."],
    correct: [0]
  },
  9111: {
    text: "A company's customer-facing applications must comply with the General Data Protection Regulation (GDPR). Which two features help meet the requirements? Select all that apply.",
    choices: ["Force periodic changes to security questions.", "Capture dated consent.", "Block identified minors."],
    correct: [1, 2]
  },
  9113: {
    text: "A user cannot find a canvas app under Apps > Can edit in Power Apps Studio. Which three conditions can explain why the editable app is missing? Select all that apply.",
    type: "multiple",
    ordered: false,
    choices: [
      "The user selected the wrong environment.",
      "The user has not been assigned the System Customizer role.",
      "The user is not a co-owner of the app.",
      "The app has not been shared with the user.",
      "The environment does not contain a Dataverse database."
    ],
    correct: [0, 2, 3]
  },
  9115: {
    choices: [
      "Tables are added by dragging them onto an app canvas.",
      "A view definition is created in the components area of the app designer.",
      "You must save, validate, and publish the app before others can see the changes."
    ],
    correct: [2]
  }
};

var PL900_ADVANCED_AUDIT_REVISIONS = {
  9254: {
    choices: [
      "1. Model-driven app | 2. Canvas app",
      "1. Model-driven app | 2. Model-driven app",
      "1. Canvas app | 2. Canvas app",
      "1. Canvas app | 2. Model-driven app"
    ],
    correct: [2]
  },
  9250: {
    explanation: "A Power Automate cloud flow can read the SharePoint data and write it to Dataverse by using the corresponding connectors."
  },
  9255: {
    text: "A company creates canvas apps that use a data source from its sales team. To meet company device policies, you must determine the available canvas-app formats. Which two app formats should you select? Select all that apply.",
    choices: ["Android", "iOS", "Mobile", "Desktop", "Tablet"],
    correct: [2, 4]
  },
  9256: {
    text: "A company is undergoing a digital transformation by using Microsoft Power Platform. Customer service needs an external support site for unlicensed customers. Facilities technicians need to photograph warehouse equipment with mobile devices and record its condition. Finance needs to copy invoice details from a shared mailbox into the finance system. Marketing needs to identify keywords and phrases in customer feedback. For which department should you develop a canvas app?",
    choices: ["Facilities", "Finance", "Customer service", "Marketing"],
    correct: [0]
  },
  9257: {
    text: "A user requests the removal of the Fax column from the standard Account form shown in a model-driven app. Which form should you open in the app designer?",
    choices: ["Account", "Information", "Summary"],
    correct: [1]
  },
  9260: {
    text: "A company uses Dynamics 365 Supply Chain Management. When a sales order is created for a customer managed by a specific user, an Outlook task must remind the user to perform any required follow-up activities. Which feature should you use?"
  },
  9265: {
    choices: ["Forums", "Home page", "Summary", "Search results", "Contact us"],
    correct: [1, 3, 4]
  },
  9271: {
    choices: [
      "Prediction",
      "Object detection",
      "Anomaly detection",
      "Conversational language understanding",
      "Category classification"
    ],
    correct: [0, 1, 4]
  },
  9272: {
    choices: [
      "Power Virtual Agents",
      "Microsoft Azure Cognitive Services",
      "AI Builder Language Detection model",
      "Microsoft Dynamics 365 Remote Assist for mobile"
    ],
    correct: [1, 2]
  },
  9274: {
    text: "A company uses a cloud app built by the IT department. The app has a publicly available API for managing employee availability. You are creating an automated Power Automate cloud flow that sends an email to an employee's manager when the employee is recorded as sick in the app. Which type of connector should you use?",
    choices: ["Custom", "Premium", "Standard"],
    correct: [0]
  },
  9275: {
    text: "A company uses Power BI and wants to use AI Insights to make data-driven decisions. Which insight type should you use for each requirement?"
  },
  9284: {
    text: "A company creates a new Microsoft Dataverse instance to store customer information. Customer service agents require a simple, three-screen canvas app to interact with the Dataverse data. Which four actions should you perform in sequence?"
  },
  9287: {
    choices: [
      "1. Canvas app | 2. Canvas app | 3. Model-driven app",
      "1. Canvas app | 2. Model-driven app | 3. Canvas app",
      "1. Model-driven app | 2. Canvas app | 3. Canvas app",
      "1. Model-driven app | 2. Model-driven app | 3. Canvas app"
    ],
    correct: [1]
  },
  9288: {
    text: "You save and publish a view named My USA Accounts. The view is sorted by Address 1: City, filters Address 1: Country/Region to the United States, and filters Owner to the current user. Which statement is true?",
    choices: [
      "When you create a new account in the city of Boston, it will be shown as the second row.",
      "All users will see the same number of rows in this view.",
      "To switch to this view, users should choose Accounts with USA addresses from the dropdown list.",
      "None of the above statements are true."
    ],
    correct: [3]
  },
  9290: {
    text: "You are building a canvas app that allows users to record expenses. The app will also support screen readers for users with visual impairments. You need a tool that identifies potential accessibility issues and suggests app changes. Which tool should you use?"
  },
  9293: {
    choices: [
      "1. Automated cloud flow | 2. Automated cloud flow",
      "1. Scheduled cloud flow | 2. Scheduled cloud flow",
      "1. Scheduled cloud flow | 2. Automated cloud flow",
      "1. Automated cloud flow | 2. Scheduled cloud flow"
    ],
    correct: [3]
  },
  9295: {
    choices: [
      "1. Power Apps | 2. Power BI | 3. Power Apps",
      "1. Power BI | 2. Power Apps | 3. Power Apps",
      "1. Power Apps | 2. Power Apps | 3. Power BI",
      "1. Power BI | 2. Power BI | 3. Power Apps"
    ],
    correct: [2]
  },
  9296: {
    text: "A company uses an AI Builder prebuilt model to enhance its data. The model does not provide good results for the company's unique data. How should you increase prediction accuracy?",
    choices: [
      "Add more data to the prebuilt model.",
      "Add Microsoft Dataverse to the environment.",
      "Build a custom AI Builder model.",
      "Insert the prebuilt model's AI Builder control into a canvas app."
    ],
    correct: [2]
  },
  9300: {
    text: "A canvas app contains a Company Holidays gallery. Which option correctly identifies the control or setting for each requirement?"
  },
  9301: {
    text: "A tutoring company has deployed a model-driven app for administration staff and a canvas app for teachers. Which statements are true? Select all that apply."
  },
  9304: {
    text: "You review a Power BI report about a company's sales data. An insight notification shows that one store's sales value exceeded its target in the previous quarter. Which insight is shown?"
  },
  9305: {
    text: "A company uses a model-driven app for its sales team. The sales manager wants each team member to modify a view without affecting other users. The IT manager wants to publish a view update for all users. Which view type meets each requirement?",
    choices: [
      "1. Personal view | 2. Public view",
      "1. Personal view | 2. Personal view",
      "1. Public view | 2. Personal view",
      "1. Public view | 2. Public view"
    ],
    correct: [0]
  },
  9308: {
    choices: ["Power BI", "Power Pages", "Canvas app", "Model-driven app"],
    correct: [1]
  },
  9312: {
    text: "A Power Automate cloud flow starts from a Microsoft Forms submission. Which step meets each requirement?"
  },
  9315: {
    choices: [
      "Power Pages design studio",
      "Visual Studio Code",
      "Portal Management app",
      "Power Automate maker portal"
    ],
    correct: [0]
  },
  9318: {
    text: "Which statement about Microsoft Dataverse capabilities is true?",
    type: "single",
    ordered: false,
    choices: [
      "Dataverse can be hosted in the cloud and on-premises.",
      "Dataverse includes a common schema of business objects by default.",
      "Dataverse can support up to 8 TB of storage per instance."
    ],
    correct: [1]
  },
  9331: {
    text: "An environmental agency uses Specimen and Species tables in Microsoft Dataverse. The Specimen table has a Species lookup, an Owner column, a Name primary-name column, and a Specimen GUID column. Which statement is true?"
  },
  9334: {
    text: "A company shares a Power BI dashboard with you. You need to add a visual by using Power BI Q&A. What should you use to create the visual?"
  },
  9339: {
    text: "An enterprise company is evaluating the Microsoft Power Platform security model. What is the lowest level at which authorization can be applied?",
    choices: ["Tenant", "Row", "Environment", "Column"],
    correct: [3]
  },
  9341: {
    text: "You are using Microsoft Copilot Studio to create an agent for your Power Pages site. The agent must restart the conversation when user input is unrecognized. What should you configure?",
    choices: ["Trigger", "Fallback topic", "AI features", "Error message"],
    correct: [1]
  },
  9342: {
    text: "You plan to deploy a Power Pages site for common customer requests. You want Copilot to add a conversational experience for site users and create the site's interface from a short description. Which two features meet the requirements? Select all that apply.",
    explanation: "A webchat interface provides the conversational experience, and description-based site creation generates the requested interface."
  },
  9352: {
    text: "You manage the support team at a rapidly growing company. Support technicians need a better experience when logging and responding to support requests. Which tools should you recommend to meet the company's needs?"
  },
  9355: {
    text: "You are building a Power Pages site. Microsoft Entra ID authentication is already configured. You add a page that is visible to all users. The page must display coupon information relating only to the company of the user who is signed in. Which security feature should you recommend?"
  },
  9357: {
    text: "You are creating a data model in Dataverse for an event-planning company. Individuals can register for multiple events during a cycle. When planners create an event, the individuals' details must copy to the new event automatically. Organizations must be blocked from registering. You create the Events table. Which Dataverse component should you use to complete the model?"
  },
  9361: {
    choices: ["Input", "Gallery", "List box", "Combo box"],
    correct: [1]
  }
};

var PL900_WORKLOAD_AUDIT_REVISIONS = {
  9123: {
    choices: [
      "1. Power Automate | 2. Microsoft Azure",
      "1. Custom connector | 2. Azure Function",
      "1. Custom connector | 2. Custom connector",
      "1. Microsoft Azure | 2. Power Automate"
    ],
    correct: [3]
  },
  9126: {
    choices: [
      "Send the URL for the app to coworkers.",
      "Publish the app.",
      "Create a flow for the app.",
      "Share the app."
    ],
    correct: [3]
  },
  9128: {
    choices: [
      "Power Apps maker portal",
      "Solution Explorer",
      "Microsoft Azure DevOps",
      "App Designer",
      "Microsoft Visual Studio"
    ],
    correct: [0, 1, 3]
  },
  9129: {
    explanation: "Canvas apps can be embedded in model-driven app forms; Microsoft Forms and Excel worksheets do not provide the same direct canvas-app embedding."
  },
  9130: {
    choices: [
      "You can customize buttons and menu items in canvas apps but cannot reorder the screens.",
      "You can add sections to your canvas app forms at any time.",
      "Screens can be added only when the canvas app is created.",
      "You can edit buttons in a Power Apps app only by using a third-party application.",
      "None of the above statements are true."
    ],
    correct: [4]
  },
  9132: {
    choices: ["Customizations", "Data sources", "Actions", "Tables", "Triggers"],
    correct: [2, 4]
  },
  9133: {
    text: "A company is considering implementing Power Apps to help manage business processes. Users need to understand the purposes and benefits of Power Apps components. Match each benefit to its tool."
  },
  9137: {
    choices: ["Power Automate flows", "Power BI", "Customer Service Insights", "Copilot Studio agents"],
    correct: [3]
  },
  9139: {
    choices: [
      "Add the app to a solution.",
      "Publish the app.",
      "Share the app.",
      "Add a Power Apps component framework (PCF) control to the app."
    ],
    correct: [1]
  },
  9140: {
    choices: ["Formula", "Gallery", "Connector", "Calculated column"],
    correct: [0]
  },
  9142: {
    text: "A company is considering implementing Power Platform and must minimize development costs. For which three scenarios should you consider implementing Power Pages? Select all that apply.",
    choices: [
      "A customer support website that includes knowledge-base search",
      "A public website that supports multilingual communities with forums",
      "A secure website for mobile users that is available only by using a VPN",
      "A secure website for vendors accessing data stored in Dataverse"
    ]
  },
  9145: {
    text: "A company publishes e-books for independent authors. The company wants to implement a Power Pages site to announce upcoming books to the general public. Which features should you use?"
  },
  9146: {
    text: "A company is building a Power Pages site. Which page component should you use for each requirement?"
  },
  9150: {
    text: "A Power Automate flow sends an email to a project manager when a team member marks a task as complete. Project leads must validate task completion before the email is sent. Which component should you add to the flow?",
    choices: ["Process argument", "Condition", "Expression", "Trigger", "Solution"],
    correct: [1]
  },
  9151: {
    choices: [
      "Lifecycle Services",
      "Microsoft 365 admin center",
      "Microsoft Dataverse",
      "Microsoft 365 Outlook",
      "Windows desktop"
    ],
    correct: [2, 3, 4]
  },
  9153: {
    choices: ["Power Apps", "For a selected row", "Manually trigger a flow"],
    correct: [0]
  },
  9154: {
    choices: ["Microsoft Excel", "Microsoft Dataverse", "Office 365 Users"],
    correct: [1]
  },
  9158: {
    text: "You plan to use Power Automate to monitor what people say about your company's products and store the feedback for research and development. Which component should you use for each requirement?"
  },
  9162: {
    choices: ["Task flow", "Dynamics 365 workflow", "Business process flow", "Power Automate"],
    correct: [3]
  },
  9166: {
    choices: [
      "Modify the flow and list the new manager in the From field.",
      "Modify the flow and list the new manager in the To field.",
      "Grant the new manager access to the departed manager's inbox.",
      "Modify the flow to prompt for an email address in the To field.",
      "Create another flow that forwards the opportunity emails."
    ],
    correct: [1]
  },
  9173: {
    choices: [
      "1. Power Apps | 2. Manually trigger a flow",
      "1. For a selected file (OneDrive for Business) | 2. Power Apps",
      "1. Manually trigger a flow | 2. For a selected file (OneDrive for Business)",
      "1. Manually trigger a flow | 2. Power Apps"
    ],
    correct: [0]
  },
  9174: {
    choices: [
      "Common Data Service",
      "Dynamics 365",
      "Dynamics 365 Finance and Operations",
      "Dynamic Signal"
    ],
    correct: [2]
  },
  9175: {
    choices: ["Business process flow", "AI Builder", "Business rule", "Virtual Agent"],
    correct: [0]
  },
  9176: {
    choices: [
      "Navigate to the Power Automate admin center and view the projects.",
      "Navigate to the Action Items section of the Power Automate portal.",
      "Enable Repair Tips for the flow.",
      "Navigate to the flow and view its run history.",
      "Navigate to the Power Automate portal and view notifications."
    ]
  },
  9178: {
    text: "You plan to create a model-driven app for a company that sells plants and garden supplies.",
    choices: [
      "1. Automated cloud flow | 2. Scheduled cloud flow",
      "1. Business process flow | 2. Automated cloud flow",
      "1. Automated cloud flow | 2. Business process flow",
      "1. Scheduled cloud flow | 2. Business process flow"
    ],
    correct: [2]
  },
  9179: {
    text: "A company collects weekly project status reports. Which Power Automate component should implement each requirement?",
    choices: [
      "1. Trigger | 2. Condition",
      "1. Condition | 2. Trigger",
      "1. Action | 2. Condition",
      "1. Trigger | 2. Action"
    ],
    correct: [0]
  },
  9180: {
    text: "You are creating a Power Automate solution. Which control action should you use for each function in the flow?"
  },
  9182: {
    text: "You are building a Power Automate flow to manage sales. The sales team saves quotes as PDF files in a OneDrive folder. You create a SharePoint list to manage follow-ups to quotes. The flow must copy the customer name, phone number, and potential-sale amount from each quote into the list. Which AI Builder model should you use?"
  },
  9183: {
    explanation: "AI Builder and connected Power Platform services can classify text, tag relevant social posts, and publish the resulting metrics to Power BI."
  },
  9186: {
    choices: [
      "When a record is displayed in a view",
      "When a record is deleted",
      "When a record is created",
      "When a record is updated",
      "When a record is read"
    ],
    correct: [1, 2, 3]
  },
  9187: {
    text: "A company uses Dynamics 365 Supply Chain Management. When a sales order is created for a customer managed by a specific user, an Outlook task must remind the user to perform any required follow-up activities. Which two features should you use? Select all that apply.",
    choices: ["AI Builder", "Power Apps", "Business events", "Power Automate", "Microsoft Dataverse"],
    correct: [2, 3]
  },
  9188: {
    text: "A company uses email for approvals and manually copies operational data into Excel. Which solution should be used for each requirement?",
    choices: [
      "1. Power Automate | 2. Microsoft Dataverse and Power BI",
      "1. Dynamics 365 workflow | 2. Microsoft Excel",
      "1. Outlook rules | 2. Microsoft Dataverse",
      "1. AI Builder | 2. Power BI"
    ],
    correct: [0]
  },
  9189: {
    text: "Service representatives must schedule a customer's next six-month checkup while leaving the client site. The flow must be started from the service-call screen on a phone. Which type of flow should replace the proposed business process flow?",
    choices: ["Business process flow", "Scheduled cloud flow", "Action", "Instant cloud flow"],
    correct: [3]
  },
  9190: {
    choices: [
      "1. Flow Checker | 2. Test | 3. Test",
      "1. Test | 2. Flow Checker | 3. Test",
      "1. Test | 2. Test | 3. Flow Checker",
      "1. Flow Checker | 2. Flow Checker | 3. Test"
    ],
    correct: [0]
  },
  9191: {
    text: "You are implementing Power Apps for a company. Data from a proprietary online accounting system must update Microsoft Dataverse automatically every four hours without creating duplicates. Only changed data must be added, and thousands of records are added each hour. What should you do?"
  },
  9194: {
    choices: [
      "1. Push trigger | 2. Push trigger",
      "1. Polling trigger | 2. Push trigger",
      "1. Push trigger | 2. Polling trigger",
      "1. Polling trigger | 2. Polling trigger"
    ],
    correct: [1]
  },
  9196: {
    text: "A Contact-table business rule hides the State/Province column only when City equals London. Which option correctly describes the rule's behavior and scope?",
    choices: [
      "1. Contact table main forms | 2. Model-driven apps | 3. The State/Province column remains visible",
      "1. Model-driven apps | 2. Contact table main forms | 3. The State/Province column remains visible",
      "1. The State/Province column remains visible | 2. Contact table main forms | 3. Model-driven apps",
      "1. Model-driven apps | 2. The State/Province column remains visible | 3. Contact table main forms"
    ],
    correct: [3]
  },
  9199: {
    choices: ["Customizations", "Actions", "Tables", "Triggers"],
    correct: [1, 3]
  },
  9201: {
    choices: [
      "Power Platform connector",
      "Microsoft Azure Data Lake",
      "Data Migration Framework",
      "Power Virtual Agents"
    ],
    correct: [0]
  },
  9206: {
    text: "A colleague shares an automated cloud flow with you. The flow starts when a new account is added to a model-driven app, sends an approval in Microsoft Teams, updates the account after approval, and sends a welcome email. Which connector provides the trigger?"
  },
  9210: {
    choices: [
      "1. Power Automate for desktop | 2. Power Automate mobile | 3. Power Automate portal",
      "1. Power Automate portal | 2. Power Automate mobile | 3. Power Automate for desktop",
      "1. Power Automate mobile | 2. Power Automate portal | 3. Power Automate for desktop",
      "1. Power Automate mobile | 2. Power Automate for desktop | 3. Power Automate portal"
    ],
    correct: [1]
  },
  9213: {
    choices: [
      "Microsoft Power Platform admin center",
      "Microsoft Power BI service",
      "Microsoft Power BI Desktop",
      "Microsoft Power BI mobile app"
    ]
  },
  9214: {
    text: "You are creating a report in the Power BI service by using a dataset. In which two ways can you add a visual? Select all that apply.",
    choices: [
      "Select a visual",
      "Use Power BI Q&A",
      "Drag a field onto the canvas",
      "Pin a page from another report",
      "Pin a visual from another report"
    ],
    correct: [0, 2]
  },
  9221: {
    text: "You are developing a Microsoft Power Platform solution that uses data stored in Excel, Dataverse, and Azure SQL. You must display several visualizations without moving the data out of its source locations. Which tool should you use?"
  },
  9224: {
    choices: [
      "1. Action | 2. Condition | 3. Action",
      "1. Trigger | 2. Action | 3. Action",
      "1. Action | 2. Action | 3. Trigger",
      "1. Action | 2. Trigger | 3. Action"
    ],
    correct: [1]
  },
  9227: {
    choices: [
      "1. AppSource | 2. Lifecycle Services",
      "1. AppSource | 2. Azure Marketplace",
      "1. Azure Marketplace | 2. AppSource",
      "1. Lifecycle Services | 2. Azure Marketplace"
    ],
    correct: [1]
  },
  9228: {
    choices: [
      "1. Trigger | 2. Action",
      "1. Action | 2. Action",
      "1. Action | 2. Trigger",
      "1. Business process flow | 2. Action"
    ],
    correct: [1]
  },
  9229: {
    text: "You are designing Power BI dashboards and reports to analyze a company's financial data. You must analyze the past three years of data from the accounting system and ensure that dashboards display only the required data. What are two possible ways to achieve the goal? Select all that apply.",
    choices: [
      "Create aggregations.",
      "Import data into Microsoft Dataverse.",
      "Share dashboards.",
      "Create calculated columns."
    ]
  },
  9230: {
    text: "Which statements about Copilot Studio agents in Microsoft Teams are true? Select all that apply.",
    choices: [
      "Copilot Studio agents can be created directly in Microsoft Teams.",
      "Copilot Studio agents can use the bot-testing feature directly within Microsoft Teams."
    ]
  },
  9232: {
    choices: [
      "Prebuilt tables, forms, and views reduce development time.",
      "The same app works on mobile devices, tablets, and PCs.",
      "The app can continue using Excel as its data source.",
      "Staff and anonymous users can both use the app."
    ],
    correct: [0, 1]
  },
  9233: {
    choices: [
      "Dynamics 365 Remote Assist",
      "Dynamics 365 Business Central",
      "Dynamics 365 Finance",
      "Dynamics 365 for Phones"
    ],
    correct: [3]
  },
  9237: {
    choices: [
      "1. View | 2. Form",
      "1. Form | 2. View",
      "1. Table | 2. Column",
      "1. Column | 2. Table"
    ],
    correct: [1]
  },
  9238: {
    text: "A company uses a model-driven app. You add several columns to a form. Users state that the new columns do not appear. What should you do?",
    choices: [
      "Create a Power Automate flow.",
      "Create a business rule.",
      "Copy the form and rename it.",
      "Ensure columns are in only one section of the form.",
      "Publish the form."
    ],
    correct: [4]
  },
  9241: {
    choices: [
      "Sharing either a model-driven app or a canvas app always sends every user an email containing the app link.",
      "Administrators assign security roles and permissions identically for canvas apps, model-driven apps, and shared apps.",
      "Both personal views and system views must be published before any user can use them.",
      "None of the above statements are true."
    ],
    correct: [3]
  }
};

var PL900_CONTEXT_AUDIT_REVISIONS = {
  9064: null,
  9071: null,
  9113: null,
  9128: null,
  9158: [
    "Retrieve the five newest posts from the company's Facebook page.",
    "Write the retrieved posts to the product database.",
    "Combine the author and link values into one value.",
    "Run the flow every hour."
  ],
  9151: null,
  9179: [
    "Automatically send a text message based on report submission.",
    "Automatically send an 8 PM reminder based on a missing status report."
  ],
  9188: [
    "Create an approval workflow.",
    "Connect to the operational data used by Dynamics 365 Field Service for charts and reports."
  ],
  9362: null,
  9365: null
};

(function applyPL900ContextRevisions() {
  var banks = [pl900Questions, pl900Questions2, pl900Questions3];
  var replacements = [
    [/\bAccompany\b/g, "A company"],
    [/\bAcompany\b/g, "A company"],
    [/\bArapidly\b/g, "A rapidly"],
    [/\bIfa\b/g, "If a"],
    [/\bAl Builder\b/g, "AI Builder"],
    [/\bAl (?=models?\b)/g, "AI "],
    [/\bPower Bl\b/g, "Power BI"],
    [/\bPower Bi\b/g, "Power BI"],
    [/\bPower BI desktop\b/g, "Power BI Desktop"],
    [/\bPower BI Service\b/g, "Power BI service"],
    [/\bPower Platform Admin center\b/g, "Power Platform admin center"],
    [/\bPower Apps Admin center\b/g, "Power Apps admin center"],
    [/\bPower Apps apps\b/g, "Power Apps applications"],
    [/\bPower Apps app\b/g, "Power Apps application"],
    [/\bPower platform\b/g, "Power Platform"],
    [/\bMicrosoft [Ff]low\b/g, "Power Automate"],
    [/\bCopilot Studio copilot\b/g, "Copilot Studio agent"],
    [/\bBusiness Process Flows\b/g, "Business process flows"],
    [/\bWhich of the following statements are TRUE\?/g, "Which statements are true?"],
    [/\bSharePnint\b/g, "SharePoint"],
    [/\bmodel-\s*driven\b/gi, "model-driven"],
    [/\bepps\b/gi, "apps"],
    [/â€”/g, "—"],
    [/â€™/g, "'"],
    [/â€œ/g, "“"],
    [/â€/g, "”"],
    [/Â»/g, ""],
    [/Â¢/g, ""]
  ];

  function normalizeImportedText(value) {
    if (typeof value !== "string") return value;
    replacements.forEach(function (replacement) {
      value = value.replace(replacement[0], replacement[1]);
    });
    return value;
  }

  function capitalizeInitial(value) {
    if (typeof value !== "string") return value;
    return value.replace(/^(\s*(?:\d+\.\s*)?[^A-Za-z0-9]*)([a-z])/, function (_, prefix, letter) {
      return prefix + letter.toUpperCase();
    });
  }

  function cleanChoiceText(value) {
    value = normalizeImportedText(value);
    if (typeof value !== "string") return value;

    value = value.replace(/^\s*\|\s*/, "");
    value = value
      .replace(/\s*["'â€œâ€,;:]*\|\s*$/, "")
      .trim();

    value = value.split("|").map(function (segment) {
      return capitalizeInitial(segment.trim());
    }).join(" | ");

    return value
      .replace(/\bIOS\b/g, "iOS")
      .replace(/\bIframe\b/g, "IFrame");
  }

  function cleanPromptSuffix(value) {
    if (typeof value !== "string") return value;

    var questionMark = value.lastIndexOf("?");
    if (questionMark < 0) return value;

    var suffix = value.slice(questionMark + 1).trim();
    if (!suffix) return value;
    if (/^Requirements\/scenarios in order:/i.test(suffix)) return value;
    if (/^Select all that apply\.?$/i.test(suffix)) return value;

    var validInstruction = suffix.match(/^Each correct answer presents (?:a complete solution|part of the solution)/i);
    if (validInstruction) {
      return value.slice(0, questionMark + 1) + " " +
        validInstruction[0].replace(/\s+$/, "") + ".";
    }

    return value.slice(0, questionMark + 1);
  }

  Object.keys(PL900_CONTEXT_AUDIT_REVISIONS).forEach(function (id) {
    PL900_QUESTION_CONTEXTS[id] = PL900_CONTEXT_AUDIT_REVISIONS[id];
  });

  PL900_MISSING_QUESTIONS.forEach(function (question) {
    var exists = banks.some(function (bank) {
      return bank.some(function (candidate) {
        return candidate && candidate.id === question.id;
      });
    });
    if (exists) return;

    var targetBank = question.id < 9120
      ? pl900Questions
      : question.id < 9245
        ? pl900Questions2
        : pl900Questions3;
    targetBank.push(question);
  });

  banks.forEach(function (bank) {
    bank.forEach(function (question) {
      if (!question) return;
      var dataRevision = Object.assign(
        {},
        PL900_DATA_REVISIONS[question.id] || {},
        PL900_FINAL_REVISIONS[question.id] || {},
        PL900_AUDIT_REVISIONS[question.id] || {},
        PL900_ADVANCED_AUDIT_REVISIONS[question.id] || {},
        PL900_WORKLOAD_AUDIT_REVISIONS[question.id] || {}
      );
      question.text = normalizeImportedText(dataRevision.text || PL900_TEXT_REVISIONS[question.id] || question.text);
      if (dataRevision.choices) question.choices = dataRevision.choices;
      if (dataRevision.correct) question.correct = dataRevision.correct;
      if (dataRevision.type) question.type = dataRevision.type;
      if (Object.prototype.hasOwnProperty.call(dataRevision, "explanation")) {
        question.explanation = dataRevision.explanation;
      }
      if (Object.prototype.hasOwnProperty.call(dataRevision, "ordered")) {
        question.ordered = dataRevision.ordered;
      }

      question.text = cleanPromptSuffix(question.text)
        .replace(/(?:Instructions:\s*)?For each of the following statements,\s*select Yes (?:if|it) the statement is true[.,]?\s*/gi, "")
        .replace(/Otherwise,?\s*select No[.,]?\s*/gi, "")
        .trim();
      question.text = capitalizeInitial(question.text);
      question.choices = question.choices.map(cleanChoiceText);
      question.explanation = normalizeImportedText(question.explanation);

      if (question.type === "multiple" && question.correct.length < 2) {
        question.type = "single";
        question.ordered = false;
        question.text = question.text
          .replace(/Which of the following statements are TRUE\?\s*Select all that apply\.?/i, "Which statement is true?")
          .replace(/Which statements are true\?\s*Select all that apply\.?/i, "Which statement is true?")
          .replace(/Which statements about ([^?]+) are true\?\s*Select all that apply\.?/i, "Which statement about $1 is true?")
          .trim();
      }

      if (question.type === "single") {
        question.correct = [question.correct[0]];
      } else if (question.type === "multiple") {
        question.ordered = false;
      }

      if (question.id === 9019) {
        question.type = "multiple";
        question.correct = [2, 4];
      }

      if (question.id === 9364) {
        question.choices = [
          "Apps, automations, and data stores can be created directly from Teams.",
          "Power BI content can be added to Teams conversations.",
          "Copilot Studio agents can be published directly to Teams."
        ];
        question.correct = [0, 1, 2];
      }

      var items = PL900_QUESTION_CONTEXTS[question.id];
      if (!items) return;

      var numberedItems = items.map(function (item, index) {
        return (index + 1) + ". " + item;
      }).join("\n");

      var baseText = question.text
        .replace(/\s*Select the option that correctly matches all requirements in the order listed\.\s*$/i, "")
        .trim();

      var importedAnswerArea = baseText.search(/\b(?:To answer|Answer Area|Hot Area|Select and Place)\b/i);
      if (importedAnswerArea >= 0) {
        baseText = baseText.slice(0, importedAnswerArea).trim();
      }

      var duplicatedDetails = baseText.search(
        /\b(?:The|You|A)[^.]{0,180}\bfollowing (?:requirements|information|configuration|actions)\s*:/i
      );
      if (duplicatedDetails >= 40) {
        baseText = baseText.slice(0, duplicatedDetails).trim();
      }

      var duplicatedUseCases = baseText.search(
        /\bThe company needs to identify solutions for three use cases\s*:/i
      );
      if (duplicatedUseCases >= 40) {
        baseText = baseText.slice(0, duplicatedUseCases).trim();
      }

      var graphicInstructions = baseText.search(/\bUse the drop-down menus\b/i);
      if (graphicInstructions >= 40) {
        baseText = baseText.slice(0, graphicInstructions).trim();
      }

      question.text = baseText +
        "\n\nRequirements/scenarios in order:\n" +
        numberedItems +
        "\n\nSelect the answer option that correctly matches every numbered item.";
    });

    bank.sort(function (left, right) {
      return left.id - right.id;
    });
  });
})();
