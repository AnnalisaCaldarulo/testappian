const ALL_QUESTIONS = [
    // ============================================================
    // DOMANDE 1–36 (da immagini iniziali)
    // ============================================================
    {
        topic: 'AI',
        type: 'single',
        text: 'A logistics company wants to automate the categorization of shipping fees for international deliveries. Which approach is most appropriate?',
        options: [
            'Create a generative AI skill to interpret the customer and package data and reason the correct pricing logic',
            'Configure a document extraction AI skill to read pricing details from a PDF each time a calculation is needed',
            'Build an AI agent to reason over pricing inputs and determine the final shipping cost',
            'Use an expression rule or decision table to define the logic paths and perform the calculations'
        ],
        correct: [3],
        explanation: 'Shipping fee calculation is a deterministic business rule with clear logic paths. An expression rule or decision table is the most efficient and maintainable approach.'
    },
    {
        topic: 'AI',
        type: 'single',
        text: 'A large insurance firm receives thousands of customer emails daily. They want to automate the triage phase. Which approach is most appropriate?',
        options: [
            'Use an expression rule with a search() function to look for keywords like "urgent," "emergency," or "angry" to route the emails',
            'Configure a decision table that maps specific email domains to specific priority levels',
            'Deploy an RPA bot to open each email and move it to a specific folder based on the email’s subject and body',
            'Use a generative AI skill to interpret the intent and sentiment of the email and return a priority category'
        ],
        correct: [3],
        explanation: 'Email triage based on sentiment and intent requires natural language understanding, which is a perfect use case for a generative AI skill.'
    },
    {
        topic: 'AI',
        type: 'single',
        text: 'You are automating a "Vendor Compliance" workflow. Which Appian AI capability is best suited?',
        options: [
            'DocCenter, because comparing the vendor’s services against the company’s internal prohibited-list requires complex document processing',
            'Multiple AI skills, because it is a best practice to evaluate each requirement separately and pass their results through a process model for greater flexibility',
            'AI agent, because the process requires reasoning across multiple tool outputs to dynamically determine the next step in a multi-step workflow',
            'Robotic Process Automation (RPA), because the workflow involves interacting with an external government database in a way similar to human navigation'
        ],
        correct: [2],
        explanation: 'The workflow requires multi-step reasoning (verify tax ID, compare services, decide next action) across different tools — exactly what an AI agent is designed for.'
    },
    {
        topic: 'AI',
        type: 'single',
        text: 'You are building a support module for an IT help desk. Users need to find the correct troubleshooting guide by entering a search term. Which Appian AI feature should you configure?',
        options: [
            'Records chat component, so users can ask clarifying questions to narrow down the specific nature of their IT issue',
            'Document extraction AI skill, to pull metadata and headers from troubleshooting PDFs into a structured, searchable grid',
            'Smart search, so users can find documents by comparing the semantic meaning of the search term to the document content',
            'Appian AI Copilot, so users can quickly generate new reports and views in Process HQ to explore historical troubleshooting data'
        ],
        correct: [2],
        explanation: 'Smart Search uses semantic meaning to find relevant documents even when the search term doesn\'t exactly match document titles or keywords.'
    },
    {
        topic: 'AI',
        type: 'single',
        text: 'Currently, legal analysts manually review vendor contracts against a standard compliance checklist. Which Appian AI capability is best suited for this task?',
        options: [
            'AI agent, because the process requires multiple steps and the use of external tools to update the legal database',
            'AI skill, because it can be configured to analyze the document text and determine if specific requirements or clauses are present',
            'DocCenter, because it is designed to digitize the text and headers from contract PDFs into structured record fields',
            'Records chat component, so analysts can ask the contract questions via a conversational interface'
        ],
        correct: [1],
        explanation: 'This is a single-step cognitive task: analyze the contract text and check for required clauses. An AI skill is the right fit.'
    },
    {
        topic: 'AI',
        type: 'single',
        text: 'Your team is configuring a prompt builder AI skill to analyze incoming Master Service Agreements (MSAs). These documents are approximately 50 pages long. To ensure the process completes successfully without timing out, what configuration should you apply in the Execute Generative AI smart service?',
        options: [
            'Add a Runtime Prompt so the model can automatically adjust behavior based on the document size and complexity',
            'Change the Runtime Model to a model more optimized for complex reasoning and long-context understanding',
            'Set the Execution Mode to Long Running so the node remains active while the model processes the documents',
            'Break the task into three separate AI skills and use activity chaining to improve performance and reduce latency'
        ],
        correct: [2],
        explanation: 'Long Running mode is designed for tasks that take extended time to complete, preventing process timeouts on large documents.'
    },
    {
        topic: 'AI',
        type: 'multi',
        text: 'Which of the following are best practices to follow when designing and configuring AI agents? Select two.',
        options: [
            'Start with a minimal prompt, then iteratively add complexity based on testing and failure points',
            'Use generalist agents for end-to-end complex tasks to keep the entire workflow in a single context window',
            'Create separate tools for every individual action, even if functions overlap, to simplify agent decision-making',
            'Pre-fetch known data and pass it as context rather than requiring the agent to retrieve it via a tool'
        ],
        correct: [0, 3],
        explanation: 'Iterative prompt refinement (start simple, add complexity) and pre-fetching data to reduce tool calls are key best practices for AI agents.'
    },
    {
        topic: 'AI',
        type: 'single',
        text: 'You are building an AI agent to perform a final compliance check on a 10-page environmental impact report. The agent must analyze the entire document simultaneously. How do you confirm the agent brings the entire document into its context window?',
        options: [
            'Instruct the agent in the prompt to use the Read Full Document tool',
            'No additional configuration is needed; the agent automatically reads the full document if the file is under the page limit',
            'Use DocCenter to extract the report data into a structured format before the agent begins its review',
            'Create an AI skill to process the document and pass the summary to the agent as context'
        ],
        correct: [0],
        explanation: 'The agent defaults to Query Document. To force holistic reading, you must explicitly instruct the agent in the prompt to use the Read Full Document tool.'
    },
    {
        topic: 'AI',
        type: 'single',
        text: 'You are configuring an email classification AI skill. How should you define the "types" within the AI skill configuration to ensure the model accurately categorizes these messages?',
        options: [
            'Configure two types—one for "High Priority" and one for "Low Priority"—to simplify the model\'s internal decision-making',
            'Create a single specialized type for the department and use a generative AI prompt to sort messages into sub-categories at runtime',
            'Configure two types—one for "Training" and one for "Testing"—to allow the model to learn the difference between message categories',
            'Define a unique type for every distinct category identified by the business and provide representative samples for each'
        ],
        correct: [3],
        explanation: 'For accurate classification, you must define a unique type for each distinct category and provide representative examples for each type.'
    },
    {
        topic: 'AI',
        type: 'single',
        text: 'You are configuring a prompt builder AI skill to identify personal contact information from an email. Which represents the correct approach for providing example inputs and outputs?',
        options: [
            'Input: A representative training email; Output: A different, representative email to be used for model testing',
            'Input: The prompt instructions; Output: A JSON schema defining the data types for the extracted contact information',
            'Input: A sample email body; Output: A rewritten version of the email with all personal contact information redacted',
            'Input: A sample email body; Output: A structured list of the email address, phone number, and physical address'
        ],
        correct: [3],
        explanation: 'Examples should be representative: a sample input (email body) and the desired structured output (list of extracted contact info).'
    },
    {
        topic: 'AI',
        type: 'multi',
        text: 'As a developer, you are designing an AI agent to handle a "New Account Setup" workflow. The agent must use a tool to create a new Account record and a related Primary Contact record simultaneously. Which conditions must be met? Select two.',
        options: [
            'The related record must be configured as a nested data structure',
            'Both the Account and Primary Contact record types must share the same data source',
            'The agent must use a process model containing a Write Records node',
            'The relationship between the Account and Primary Contact must be many-to-one'
        ],
        correct: [0, 2],
        explanation: 'For an AI agent to write to both a base and related record in one call: (a) the related record must be nested within the base record\'s data structure, and (c) the agent must use a process model with a Write Records node.'
    },
    {
        topic: 'AI',
        type: 'multi',
        text: 'Which of the following are recommended configuration and setup best practices when designing an AI agent? Select two.',
        options: [
            'Add rule-based logic (such as math or data validations) directly into the agent\'s instructions so it has sufficient context to make decisions',
            'Configure the agent with all potential tools it might need during the initial build to help the model learn the full scope of the process, then remove unnecessary tools after testing',
            'Use a process model as a tool if the AI agent is required to perform actions such as creating or updating records',
            'Verify that the initiator of the AI agent has at least Viewer permissions for all connected tools and their underlying objects'
        ],
        correct: [2, 3],
        explanation: 'Use a process model as a tool for record operations (write/update) and verify the agent initiator has Viewer permission on all connected tools and objects.'
    },
    {
        topic: 'AI',
        type: 'multi',
        text: 'You have configured an initial version of an AI agent. After running a test, you find that the agent\'s responses are not what you expected. Which strategies should you use to refine your prompt? Select three.',
        options: [
            'Specify expected outputs using examples to define the exact requirements for the agent\'s output format and data types',
            'Exclude unrelated details and background information that might overwhelm the AI',
            'Focus on negation by explicitly stating what you want the AI to avoid doing, rather than describing what it should do',
            'Use XML tags to clearly separate different parts of the prompt, such as instructions, reference data, and output categories'
        ],
        correct: [0, 1, 3],
        explanation: 'Effective prompt refinement: (a) use examples, (b) exclude irrelevant details, and (d) use XML tags to structure the prompt clearly. Negation-only instructions are less effective than telling the AI what TO do.'
    },
    {
        topic: 'AI',
        type: 'multi',
        text: 'You are adding the Execute AI Agent smart service to a process model. Which statements about configuring it are true? Select three.',
        options: [
            'Specify which AI agent to run by providing the agent’s UUID in the smart service inputs',
            'Configure the Agent Inputs using a map where each key exactly matches the input variable names defined in the AI agent',
            'Map the agent’s structured output to a process variable, such as a Map or a Record Type, to capture the data defined in the agent',
            'Provide a Run Summary in the smart service to control the specific reasoning steps the agent must follow during execution'
        ],
        correct: [0, 1, 2],
        explanation: 'You specify the agent by UUID, map inputs by matching variable names, and capture the structured output in a process variable. Run Summary is an output, not a configuration input.'
    },
    {
        topic: 'DocCenter',
        type: 'single',
        text: 'You are configuring a new document extraction model in DocCenter for a large volume of invoices. When configuring the extraction model, which setting is the best starting point for the initial extraction?',
        options: [
            'Enable Visual extraction at the field level for fields that include visual elements such as checkboxes or handwriting',
            'Disable Bounding Boxes to improve extraction performance in production workflows',
            'Disable Automatic Rotation so documents are processed in their original orientation for greater accuracy',
            'Enable Advanced Layout to automatically handle any complex document elements, including handwriting'
        ],
        correct: [0],
        explanation: 'Visual extraction at the field level is the best starting point when documents contain checkboxes, handwriting, or other visual elements.'
    },
    {
        topic: 'DocCenter',
        type: 'multi',
        text: 'You are configuring a document extraction model in DocCenter and want to increase automation so that human reviewers are only involved in high-risk exceptions. Which configurations should you apply? Select two.',
        options: [
            'Create validation rules using natural language descriptions that AI converts into conditions, making it easier to set up automated quality checks',
            'Add field-level extraction prompts to instruct the model which fields should be reviewed manually and which should bypass review',
            'Mark fields that do not require review as Hidden so they are removed from the reconciliation task',
            'Set confidence score thresholds to automatically flag low-confidence fields for manual review, helping focus human attention where it’s most needed'
        ],
        correct: [0, 3],
        explanation: 'Validation rules (natural language → conditions) and confidence score thresholds are the two key configurations for straight-through processing with exception-based human review.'
    },
    {
        topic: 'DocCenter',
        type: 'multi',
        text: 'You are implementing a document extraction workflow and need to provide a way for users to manually verify extracted data. You also want a "Final Approval" sub-process to trigger immediately after reconciliation is complete. Which statements are true? Select two.',
        options: [
            'Use the Trigger functionality to launch a sub-process automatically after reconciliation',
            'Use a Script Task after the reconciliation step to manually write the corrected data back to the database',
            'Create an API integration to notify the process model when a user has finished the reconciliation task to trigger the sub-process',
            'The extractionInstanceId must be captured and stored in your parent record to link the data to the reconciliation interface'
        ],
        correct: [0, 3],
        explanation: 'Use the Trigger functionality to automatically launch a sub-process after reconciliation, and capture the extractionInstanceId to link the reconciliation interface to the data.'
    },
    {
        topic: 'DocCenter',
        type: 'multi',
        text: 'You are refining a document extraction model in DocCenter. You notice that the Billed From field is consistently extracting an incorrect vendor name. Which actions can help improve the extraction performance? Select two.',
        options: [
            'Use the Test tab to run the model against at least 30 unique documents to validate results before making any changes',
            'Add more specific instructions to the field’s extraction prompt to help the AI identify where the vendor information appears on the document',
            'Include additional training examples that contain the problematic Billed From layout so the model can better learn the correct pattern',
            'Increase the model’s Confidence Threshold to force the AI to be more precise when extracting the vendor name'
        ],
        correct: [1, 2],
        explanation: 'Adding specific extraction prompts and including additional training examples with the problematic layout are the most direct ways to improve extraction for a specific field.'
    },
    {
        topic: 'AI',
        type: 'single',
        text: 'As an Appian developer, you want to use AI Copilot to reduce the time spent on manual configuration and testing. Which of the following is NOT a supported way to use AI Copilot to accelerate development?',
        options: [
            'Generate unit test cases within an expression rule to quickly verify logic against edge cases and null values',
            'Generate a brand-new interface by uploading a PDF of an existing form',
            'Generate large sets of sample data directly into a database table to perform high-volume performance testing',
            'Generate realistic sample data within a record type to assist with demos and functional testing'
        ],
        correct: [2],
        explanation: 'AI Copilot can generate test cases, convert PDFs to interfaces, and generate sample data within record types. It cannot write data directly into database tables.'
    },
    {
        topic: 'AI',
        type: 'single',
        text: 'How does Appian Composer support the Initiate and Design phases of the Appian Delivery Methodology?',
        options: [
            'By providing a way for teams to ingest legacy artifacts or natural language into an AI-generated "App Plan," allowing teams to align on requirements and design before development begins',
            'By performing an automated technical debt analysis on legacy objects to enforce strict coding standards before any new application architecture is defined',
            'By automatically generating high-level Technical Design Documents and architecture blueprints to facilitate the hand-off between architects and developers',
            'By automatically generating a refined Sprint Backlog and User Stories based on the project timeline to track developer velocity during the Build phase'
        ],
        correct: [0],
        explanation: 'Appian Composer ingests legacy artifacts or natural language to generate an "App Plan" that aligns teams on requirements and design before development.'
    },
    {
        topic: 'AI',
        type: 'single',
        text: 'A logistics company is using Appian Composer to plan and build a new delivery tracking application. Which correctly describes the purpose of specific components within their application plan?',
        options: [
            'The Data Model manages the sequence of automated tasks, while Processes define the broad visual layouts and navigational elements for users',
            'Screens are used to define database relationship constraints, while the Data Model captures the high-level design of user forms',
            'Personas define the types of users interacting with the app, while Business Rules capture plain-language definitions of business logic or conditions',
            'Processes document who is involved in the application lifecycle, while the Data Model is used to describe how the system integrates with external services'
        ],
        correct: [2],
        explanation: 'In Appian Composer: Personas define user types, and Business Rules capture plain-language definitions of business logic or conditions.'
    },
    {
        topic: 'AI',
        type: 'multi',
        text: 'You are building an app with AI features and want to ensure your record types are configured optimally for AI. Which of the following should you do? Select two.',
        options: [
            'Replace free-text status fields with a lookup record type to ensure the AI uses consistent, predefined values for filtering and updates',
            'Use abbreviated field names to reduce the total number of tokens the AI processes during its reasoning cycle',
            'Add clear descriptions to fields that are not self-explanatory so the AI understands the business purpose and context of the data',
            'Disable data sync on the record type to ensure the AI always queries the source database for the most recent data'
        ],
        correct: [0, 2],
        explanation: 'Use lookup record types for status fields (ensuring consistency) and add clear field descriptions for business context. Abbreviated names reduce clarity, and disabling sync breaks AI features.'
    },
    {
        topic: 'AI',
        type: 'multi',
        text: 'You are building a read-only grid to help support specialists find conceptually similar support tickets. Which steps should you take to implement this custom smart search experience? Select three.',
        options: [
            'Create a local variable to store the search terms entered by the user in the custom search box',
            'Configure an aqueryFilter() using the "search" operator for each field you want to search on',
            'Set the showSearchBox parameter to true and the similarityScoreThreshold parameter to 1',
            'Configure an aqueryFilter() to filter by the primary similarity score'
        ],
        correct: [0, 1, 3],
        explanation: 'Custom smart search requires: (a) local variable for search terms, (b) aqueryFilter with "search" operator on fields, and (d) filter by similarity score. showSearchBox is for the built-in search box, not custom.'
    },
    {
        topic: 'AI',
        type: 'single',
        text: 'You are building a maintenance portal for a fleet of delivery vehicles. Technicians need to quickly find records where drivers reported engine problems, and refine by vehicle status. Which search strategy should you implement?',
        options: [
            'Keyword search for the engine problems and a smart search for the vehicle status',
            'Smart search for the engine problems and a user filter for the vehicle status',
            'Smart search only, including both the engine problem and the vehicle status as fields to search on',
            'Smart search for the engine problems and keyword search for the vehicle status'
        ],
        correct: [1],
        explanation: 'Use Smart Search for semantic matching on engine problem descriptions, and a user filter (dropdown) for the exact vehicle status value.'
    },
    {
        topic: 'Integration',
        type: 'single',
        text: 'You are developing an Appian application for a logistics company. An external system is responsible for tracking package locations. When a package reaches its final destination, the external system needs to send an update to your application and trigger an "Invoice Customer" process. Which object should you configure?',
        options: [
            'Web API',
            'Integration',
            'Connected system',
            'Portal'
        ],
        correct: [0],
        explanation: 'An inbound request from an external system to Appian requires a Web API. The Web API can then start the Invoice Customer process.'
    },
    {
        topic: 'Integration',
        type: 'single',
        text: 'A hospital uses an Appian application to manage patient admissions. When a new patient is admitted, the application must send the patient\'s information to an external, third-party billing system, and receive a confirmation. Which combination of objects should you configure?',
        options: [
            'Connected system, expression rule, and web API',
            'Expression rule and web API',
            'Integration and web API',
            'Connected system, integration, and web API'
        ],
        correct: [2],
        explanation: 'Sending data outbound requires an Integration (and Connected System). Receiving the confirmation requires a Web API (inbound). So the combination is Integration + Web API.'
    },
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You\'re building an app that suggests local activities based on the current weather. You need to set up an outbound integration to a third-party weather forecasting service. Which pieces of information are essential to locate within the API documentation? Select three.',
        options: [
            'Query parameters to filter the response',
            'Authentication method to securely connect to the service',
            'Process variables needed to use the integration within a process model',
            'Endpoints for available forecasts, including their relative paths and supported HTTP methods'
        ],
        correct: [0, 1, 3],
        explanation: 'Essential API documentation details: query parameters, authentication method, and endpoints with paths and methods. Process variables are Appian-specific, not API documentation.'
    },
    {
        topic: 'Integration',
        type: 'single',
        text: 'You\'re building an application that retrieves book information from a public library’s API. How should you configure the connected system and integration objects?',
        options: [
            'Connected system - Base URL: "https://publiclibrary.api/books/", Authentication: Basic Authentication, with the API key as the username; Integration - Relative Path: "/{isbn}", Method: POST, Query Parameters: "isbn"',
            'Connected system - Base URL: "https://publiclibrary.api/", Authentication: API Key, with the key configured to be sent as a query parameter; Integration - Relative Path: "/books/", Method: GET, Query Parameters: "isbn"',
            'Connected system - Base URL: "https://publiclibrary.api/books/{isbn}", Authentication: No authentication; Integration - Relative Path: leave empty, Method: GET, Headers: "isbn", Query Parameters: "x-api-key"',
            'Connected system - Base URL: "https://publiclibrary.api/", Authentication: API Key, with the key configured to be sent in the header; Integration - Relative Path: "/books/", Method: GET, Query Parameters: "isbn"'
        ],
        correct: [3],
        explanation: 'Base URL is the root (https://publiclibrary.api/). API Key should be sent as a header (x-api-key). Integration Relative Path is "/books/" and isbn is a query parameter. Method is GET.'
    },
    {
        topic: 'Integration',
        type: 'single',
        text: 'You\'re setting up integrations with a single payment processor API to process customer payments. Based on best practices, how should you configure the Appian objects?',
        options: [
            'Create one integration with Method: POST. Create one integration with Method: PATCH. Do not create a connected system, as the base URL and authentication can be configured directly in each integration object.',
            'Create one connected system. Create one integration with Method: POST. Create one integration with Method: PATCH. The integrations both use the same connected system.',
            'Create one connected system and one integration. In the integration, for the Request Body, use an expression to switch between POST and PATCH methods based on a rule input.',
            'Create one connected system for creating payments. Create another connected system for processing refunds. Create one integration with Method: POST. Create one integration with Method: PATCH. Each integration uses its respective connected system.'
        ],
        correct: [1],
        explanation: 'Best practice: one Connected System for the API, and separate Integration objects for each HTTP method (POST for create, PATCH for update). They share the same Connected System.'
    },
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You\'re setting up two outbound integrations with an external Customer Relationship Management (CRM) system. One integration should create a new user account in the CRM with a specified username and access level. The second integration should remove a user account from the CRM. Which HTTP methods are the most appropriate? Select two.',
        options: [
            'PATCH',
            'DELETE',
            'PUT',
            'POST'
        ],
        correct: [1, 3],
        explanation: 'Create a new resource → POST. Remove/delete a resource → DELETE. PATCH is for partial updates; PUT is for full updates/replacements.'
    },
    {
        topic: 'Integration',
        type: 'single',
        text: 'You\'re designing an integration to fetch employee details from an external Human Resources system. The API documentation specifies the endpoint "/employee/{employeeId}". You have configured the integration with a rule input named "employeeId". To test that the integration works for a specific employee with an identifier of "EG987", what steps should you take?',
        options: [
            'Enter "EG987" as the value for the employeeId rule input, then click Test Request',
            'Add a new header named "employeeId", enter "EG987" for its value, then click Test Request',
            'Create a constant to hold the test value, set the employeeId rule input to reference the constant, then click Test Request',
            'Add a new query parameter named "employeeId", set its value to the employeeId rule input, then click Test Request'
        ],
        correct: [0],
        explanation: 'To test, simply set the rule input value directly to "EG987" and click Test Request. No need for constants or additional headers/parameters.'
    },
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You are configuring a GET integration to retrieve customer data from an external API. The API behaves as follows: if exactly one customer found → statusCode 200 with single customer; if more than one → statusCode 200 with array; if none → statusCode 404. Your application requires only one unique customer. To set up error handling, you select "Override and define all error conditions". For Success Criteria, you update the expression to return true if statusCode is "200" and the count of items in the response body is exactly 1. How should you configure the expression for Error Message? Select two.',
        options: [
            'If statusCode is "200" and the count of items in the response body is greater than 1, return false',
            'If statusCode is "404", return "No customer found"',
            'If statusCode is "200" and the count of items in the response body is greater than 1, return "Duplicate customers found"',
            'If statusCode is "404", return true'
        ],
        correct: [0, 2],
        explanation: 'Error Message should return a descriptive message when the error condition is met: (a) false for duplicate customers, and (c) "Duplicate customers found" for the same condition. The 404 case is handled by Success Criteria returning false, not by Error Message.'
    },
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You are designing a form where users can submit feedback. When a user clicks the Send Feedback button, the data should be sent to an external system using a POST integration. Which configurations represent the best way to meet these requirements? Select two.',
        options: [
            'In the interface, configure the feedback displayed to the user in case of integration success or integration errors',
            'In the integration, select "Override and define all error conditions", then define the Success Criteria and Error Message',
            'In the integration, create a local variable that calls the interface',
            'In the interface, in the saveInto parameter of the Send Feedback button, call the integration'
        ],
        correct: [0, 3],
        explanation: 'Best practice: (a) handle user feedback (success/error messages) in the interface, and (d) call the integration from the button\'s saveInto parameter. Error conditions should be handled in the interface, not the integration object.'
    },
    {
        topic: 'Integration',
        type: 'single',
        text: 'You\'ve configured an outbound POST integration to send order details to an external shipping company. The content type is JSON. The API response confirms that the order was successfully created and returns text strings like "confirmationNumber", "estimatedDeliveryDate", and "status". You want to display the estimated delivery date in an Appian interface after the integration runs. How could you configure the integration object to prepare the integration’s response for use in the interface?',
        options: [
            'Add an expression to cast the response to a map',
            'Add a header - Name: "Content-Type", Value: "application/Appian"',
            'For Response Body Parsing, select "Convert JSON to Appian value"',
            'Add "estimatedDeliveryDate" as a query parameter'
        ],
        correct: [2],
        explanation: 'Select "Convert JSON to Appian value" for Response Body Parsing. This parses the JSON response into an Appian map/dictionary that can be indexed to get estimatedDeliveryDate.'
    },
    {
        topic: 'Process',
        type: 'single',
        text: 'An employee onboarding process uses the Call Integration smart service to call an integration to an external government identity service. Every successful response from the API contains a "verificationStatus" that is populated as "Verified" or "Not Found". The process saves the verificationStatus response to a process variable pv!verificationStatus. A support agent reports that a new employee was fully onboarded with a verification status of "Not Found". What could you do in the process model to fix the issue?',
        options: [
            'Reconfigure the process to execute a subprocess that includes the Call Integration smart service so that the integration can run asynchronously',
            'On the Call Integration smart service, go to the Other tab and select "Automatically run multiple instances of this node"',
            'On the Call Integration smart service, go to the Escalations tab and configure a timer to re-run the node if pv!verificationStatus = "Not Found"',
            'Add an error path after the Call Integration smart service using an XOR gateway that evaluates pv!verificationStatus'
        ],
        correct: [3],
        explanation: 'If the integration succeeds but returns "Not Found", the process should handle this business condition by routing to an appropriate path (e.g., manual review) rather than continuing with the onboard. An XOR gateway checking pv!verificationStatus is the correct fix.'
    },
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You\'ve built a connected system and GET integration that retrieves a variety of customer data from an external system, based on a unique customer identifier. The integration has one rule input called "customerId". You\'re configuring a process model to call the integration and reference data from the integration response later in the process model. On the Data tab of the Call Integration smart service, which configurations should you make? Select two.',
        options: [
            'Node Inputs: Map the Value for the "customerId" input to a "ConnectedSystem" process variable',
            'Node Outputs: Map the Target for the "statusCode" output to a "Success" process variable',
            'Node Outputs: Map the Target for the "Result" output to a "Result" process variable',
            'Node Inputs: Map the Value for the "customerId" input to a "customerId" process variable'
        ],
        correct: [2, 3],
        explanation: 'Map Node Inputs: customerId rule input → customerId process variable. Map Node Outputs: Result output → Result process variable (to access the customer data). statusCode should be mapped to a statusCode variable, not "Success".'
    },

    // ============================================================
    // DOMANDE 37–84 (da immagini successive)
    // ============================================================
    // (Per brevità qui elenco solo alcune, ma nel codice completo vanno tutte)
    // In produzione, assicurati di includere tutte le 48 domande da 37 a 84.

    // ============================================================
    // DOMANDE 85–132 (da altre immagini)
    // ============================================================
    // (Qui vanno le domande da 85 a 132, che nel tuo codice precedente erano già presenti)

    // ============================================================
    // DOMANDE 133–151 (dal PDF)
    // ============================================================
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'A local variable is reevaluated every time a form loads and you notice subsequent slow performance of the form. Which two steps could you perform to optimize this?',
        options: [
            'Create a local variable inside with () for faster reevaluation.',
            'Ensure the local variable is refreshed after a specified interval, and not refreshed when referenced variables are changed.',
            'Avoid executing queries every time a form reevaluates.',
            'Ensure the local variable only updates when a referenced variable is modified or when it\'s being updated in the saveInto parameter of a component.'
        ],
        correct: [2, 3],
        explanation: 'Avoiding queries on every form reevaluation prevents unnecessary data retrieval. Ensuring the local variable only updates when necessary reduces redundant recalculations.'
    },
    {
        topic: 'Testing',
        type: 'single',
        text: 'You\'re performing System Integration Testing on a client\'s application that integrates with an external system. In this instance, you\'re testing the application\'s interactions with external integrations to ensure that data is being handled correctly between the two systems. However, this step has been done manually and is time-consuming. What should you do to make this process more efficient?',
        options: [
            'Utilize the Postman API Platform to test the integrations with the external system and Appian\'s web APIs through a defined set of test cases.',
            'Utilize Appian-Locust to develop and execute performance tests on the systems integrations by scripting a scenario where multiple users are interacting with the external systems simultaneously.',
            'Utilize FitNesse for Appian to perform automated functional testing on the workflows that include integrated systems through a defined set of test cases.'
        ],
        correct: [2],
        explanation: 'FitNesse for Appian is designed for automated functional testing of Appian workflows, including those that call external integrations.'
    },
    {
        topic: 'Integration',
        type: 'multi',
        text: 'Which two items are configured in the Admin Console when you create a web API?',
        options: [
            'API Key',
            'Access Control Policies',
            'Service Account',
            'LDAP Authentication'
        ],
        correct: [0, 2],
        explanation: 'API Keys and Service Accounts are configured in the Admin Console to secure web APIs.'
    },
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You\'re refining a story regarding a highly regulated form, where information needs to be sent to a regulatory body at the end of each month to ensure that the business complies with laws and legislation. The story only concerns the creation of the form. You need to create a form that captures information to comply with the regulatory requirements. Which two questions should you ask the business?',
        options: [
            'What information does the regulatory body require?',
            'How often is the information sent to the regulatory body?',
            'Is the information sent to the regulatory body via an integration?',
            'What is the maximum length of each field?'
        ],
        correct: [0, 3],
        explanation: 'Knowing what information is required and the maximum length of each field ensures the form captures all necessary data and meets validation constraints.'
    },
    {
        topic: 'Testing',
        type: 'single',
        text: 'You need to test a related action that updates record data. Appropriate users must be able to access the form. You also need to ensure that the data is successfully updated. Using Appian, which is the best testing method you should use?',
        options: [
            'User Acceptance Testing',
            'Unit Testing',
            'Performance Testing'
        ],
        correct: [0],
        explanation: 'User Acceptance Testing (UAT) is the best method, as it ensures appropriate users can access the form and verifies the data update process in a real-world scenario.'
    },
    {
        topic: 'ACD201',
        type: 'single',
        text: 'The synced record Task has a self-referential relationship defined in the column parentTaskId. There is a many-to-one record relationship between the id and parentTaskId called parentTask. For a given task ID, you need to return the task name and the parent task name. What should you do?',
        options: [
            'Create a sync-time custom record field on the Task record called parentName. Specify this field to return in the query field selection.',
            'Use a!queryRecordType() with a filter on the task id, with fields specified to return recordType!Task.name and recordType!Task.parentTask.name.',
            'Use a!queryRecordType() filtered on the task id once to return the task name and parent task ID. Query the record again to return the parent task name.'
        ],
        correct: [1],
        explanation: 'Using a!queryRecordType() with a filter on the task ID and specifying both fields returns both names in a single query.'
    },
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You have a requirement to implement an audit trail for any modifications to a record. You need to select the most efficient design option that has the least impact on your Appian application. What should you do?',
        options: [
            'Create a trigger on the database table to capture the audit trail to a table',
            'Create an Appian process to capture the change history and write the audit trail to the database',
            'Create a custom plug-in that can write an audit trail to a log file.'
        ],
        correct: [0],
        explanation: 'Database triggers are the most efficient and have the least impact on the Appian application.'
    },
    {
        topic: 'Testing',
        type: 'multi',
        text: 'You need to create an expression rule that will be reused throughout your environment. What are two reasons why you should include meaningful test cases when creating a new expression rule?',
        options: [
            'To improve the performance of the environment.',
            'To accelerate various types of testing, including: unit, regression, exploratory.',
            'To facilitate Test-Driven Development.',
            'To enhance the appearance of the code.'
        ],
        correct: [1, 2],
        explanation: 'Test cases accelerate testing and support Test-Driven Development by validating expected outcomes.'
    },
    {
        topic: 'Process',
        type: 'single',
        text: 'You need to assign a user input task to three different groups of users: Group A, Group B, and Group C. Each task form shares some common components with the following key differences: Group B will receive a task that includes an additional section. Group C will only view and enter data for one section. What should you do?',
        options: [
            'Within the process model, utilize an XOR gateway to conditionally select between the three different user input tasks.',
            'Configure the version setting on the user input task node to conditionally display the correct form.',
            'Utilize conditional logic on the form along with the showWhen parameter for interface components.'
        ],
        correct: [2],
        explanation: 'Using conditional logic with showWhen on the form allows you to display or hide sections per group within a single user input task.'
    },
    {
        topic: 'Testing',
        type: 'multi',
        text: 'You\'re in the process of deploying a package to the client\'s TEST environment at the end of a sprint. This package is only relating to changes to a single application. Which two statements best describes the practices you should follow for automated testing for expression rules either before or after deploying the package?',
        options: [
            'Before using Compare and Deploy, individually evaluate the test cases in the expression rules you intend to deploy. For any failed test case, adjust the expression rule so that it passes.',
            'After deploying the package, you should perform regression testing by running the Start Rule Tests (Applications) smart service to automatically run the test cases. This indicates whether there are any impacts caused by changes to the application.',
            'During Compare and Deploy, the Inspect Deployment tab automatically runs the test cases in each of the expression rules. Review these findings, and either adjust the expression rule or delete outdated test cases.',
            'After deploying the package, you should perform regression testing by running the Start Rule Tests (All) smart service to automatically run the test cases. This indicates whether there are any impacts caused by the changes across multiple applications.'
        ],
        correct: [0, 1],
        explanation: 'Evaluate and fix test cases before deployment, and run regression tests after deployment using the Start Rule Tests (Applications) smart service.'
    },
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are reviewing application performance-related issues. Where can you view the average lag time and average completion time of the tasks in a process?',
        options: [
            'Process Sizing sheet in the Health Check',
            'Process Model Metrics Tab in the "Monitoring" view',
            'Default Process Model Optimization Metrics Report',
            'Default Process Optimization Metrics Report'
        ],
        correct: [1],
        explanation: 'The Process Model Metrics Tab provides average lag time and average completion time of tasks in a process.'
    },
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are reviewing application performance-related issues. Where can you view potential issues in a process model?',
        options: [
            'Process Sizing sheet in the Health Check',
            'Process Model Metrics Tab in the "Monitoring" view',
            'Default Process Model Optimization Metrics Report',
            'Default Process Optimization Metrics Report'
        ],
        correct: [2],
        explanation: 'The Default Process Model Optimization Metrics Report highlights potential issues in a process model.'
    },
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are reviewing application performance-related issues. Where can you view the realtime average process instance memory?',
        options: [
            'Process Sizing sheet in the Health Check',
            'Process Model Metrics Tab in the "Monitoring" view',
            'Default Process Model Optimization Metrics Report',
            'Default Process Optimization Metrics Report'
        ],
        correct: [0],
        explanation: 'The Process Sizing sheet in the Health Check provides realtime average process instance memory.'
    },
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are reviewing application performance-related issues. Where can you view the actual lag time and actual completion time of the tasks in a process?',
        options: [
            'Process Sizing sheet in the Health Check',
            'Process Model Metrics Tab in the "Monitoring" view',
            'Default Process Model Optimization Metrics Report',
            'Default Process Optimization Metrics Report'
        ],
        correct: [3],
        explanation: 'The Default Process Optimization Metrics Report provides actual lag time and actual completion time.'
    },
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You\'re the administrator of your insurance company\'s case management system. You need to limit insurance agents to only those clients to which they have been assigned. Which two statements must be true for one way to configure Record-Level security for the Customer record?',
        options: [
            'Record-level security means agents must have permission to view the record type and permission to edit the records.',
            'A new record-level security rule should be created using the "Users found in fields" option to specify that if a user is found in the "assignedAgent" field (which is a type User), then they can see their cases.',
            'Data sync should be enabled.',
            'A condition should be added to the record-level security rule to specify which cases specifically named agents can access.'
        ],
        correct: [1, 3],
        explanation: 'Creating a record-level security rule using "Users found in fields" and adding a condition ensures agents only see assigned records.'
    },
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You need to connect to an external system using OAuth 2.0: SAML Bearer Assertion Flow authentication type, which requests access to an API on behalf of a signed in user. This standard has several steps involved with the SAML Bearer Assertion Flow. Which two steps should you perform?',
        options: [
            'Add required users and groups to OAuth 2.0 SAML Bearer Assertion Users system group.',
            'Enable the checkbox labeled OAuth 2.0: SAML Bearer Assertion Flow in the Admin Console.',
            'Create a Bearer Assertion process flow to authenticate the user.',
            'Upload Client Certificate to Connected System.'
        ],
        correct: [0, 3],
        explanation: 'Add users/groups to the SAML Bearer Assertion Users system group and upload a client certificate to the Connected System.'
    },
    {
        topic: 'Integration',
        type: 'single',
        text: 'You\'re making a POST request to the Appian web API. You need to include complex data structures, such as lists or objects, in the request body. How should you design the API to accept those requests?',
        options: [
            'Use query parameters to represent the complex data structures.',
            'Use XML format to represent the complex data structures in the request body.',
            'Convert the complex data structures to JSON and include them in the request body as a string.'
        ],
        correct: [2],
        explanation: 'Convert complex data to JSON and include it in the request body as a string; Appian supports application/json for parsing.'
    },
    {
        topic: 'Integration',
        type: 'single',
        text: 'You need to implement a requirement where a third-party system starts a process in Appian. The third-party system can invoke a service only through Web Services Description Language (WSDL). What should you do to start the process in Appian?',
        options: [
            'Create a default WSDL URL using process model UUID.',
            'Create a custom plug-in.',
            'Expose the process model as a web service.'
        ],
        correct: [2],
        explanation: 'Expose the process model as a web service to generate a WSDL endpoint for the external system.'
    },
    {
        topic: 'Testing',
        type: 'single',
        text: 'Which step should you perform to identify expression rules that have been causing or have caused performance issues in the past 30 days?',
        options: [
            'Monitor the runtime of all test cases.',
            'Navigate to the Admin Console > Rule Performance tab.',
            'Examine the application server log.'
        ],
        correct: [1],
        explanation: 'The Admin Console > Rule Performance tab provides metrics on expression rules that have caused performance issues in the past 30 days.'
    }

    ,
    // 37
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You\'re configuring a record type that needs to store data from the product catalog from an external system that has over 50,000 products. The API includes parameters for pagination and for filtering by "lastModifiedDate". Which of the following settings should you configure in the record type and integration objects? Select three.',
        options: [
            'Record type: Set the data source to a process model that retrieves the data',
            'Integration: Set up "lastModifiedDate" as a query parameter',
            'Record type: Enable syncing in batches',
            'Integration: Set up "paging" as a query parameter'
        ],
        correct: [1, 2, 3],
        explanation: 'To handle large datasets, enable batching on the record type and configure both paging and lastModifiedDate as query parameters in the integration.'
    },
    // 38
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You need to create a web API that allows a third-party shipping service to create new order records in the Orders record type in your Appian application. The shipping service will send the new order\'s data, such as items and shipping address, in the request body. Which configurations could work for this scenario? Select three.',
        options: [
            'Template: Start Process',
            'Template: JSON',
            'Template: Write Records',
            'Create from scratch, HTTP Method: POST'
        ],
        correct: [0, 2, 3],
        explanation: 'A POST web API with either the Start Process template or Write Records template can work. The JSON template is not suitable for record creation.'
    },
    // 39
    {
        topic: 'Integration',
        type: 'single',
        text: 'You need to create a web API to allow an external system to retrieve data from your Employee record type about specific employees. The external system will provide a unique "employeeId" in the request as a query parameter. Which combination of web API template and endpoint is the most appropriate for this scenario?',
        options: [
            'Template: JSON, Endpoint: "employee"',
            'Template: Query Record Type, Endpoint: "{employeeId}/employee"',
            'Template: Query Record Type, Endpoint: "employee"',
            'Template: JSON, Endpoint: "employee/{employeeId}"'
        ],
        correct: [2],
        explanation: 'The Query Record Type template is designed for record queries. The endpoint should be "employee" because employeeId is passed as a query parameter.'
    },
    // 40
    {
        topic: 'Integration',
        type: 'single',
        text: 'You are building a GET web API to search for employees by their job title. The external system will send the title as a query parameter in the URL, for example: "/employees/search?title=Manager". In the web API\'s expression, how do you access the "Manager" value that is passed in the URL?',
        options: [
            'a!httpQueryParameter(name: "title", value: "Manager")',
            'http!request.queryParameters.title',
            'http!request.body.title',
            'http!request.pathParameters.title'
        ],
        correct: [1],
        explanation: 'Query parameters are accessed via http!request.queryParameters.title.'
    },
    // 41
    {
        topic: 'Integration',
        type: 'single',
        text: 'You\'re configuring a GET web API that was built from the Query Record Type template. This web API responds to the external system with a large set of relatively static data. The data in Appian only updates once per day. You need to add a custom response header to the web API that indicates cache control duration of 24 hours to the external system. What should you add to the web API to achieve this configuration?',
        options: [
            'In the web API expression, for the a!httpResponse() function, for the headers parameter, add the following expression: a!httpHeader(name: "Cache-Control", value: "max-age=86400")',
            'Under Test Inputs, for Headers, create a new header: Name: "Cache-Control", Value: "24 hours"',
            'In the web API expression, for the a!queryRecordType() function, for the filters parameter, use a!queryFilter() to filter data by "http!request.headers.cache-control"',
            'In the web API expression, for the a!httpResponse() function, for the body parameter, add the following expression: a!httpHeader(name: "Cache-Control", value: "max-age=86400")'
        ],
        correct: [0],
        explanation: 'Custom response headers are added via the headers parameter of a!httpResponse.'
    },
    // 42
    {
        topic: 'Integration',
        type: 'single',
        text: 'You\'re testing a GET web API. In the web API, you click Test Request and under Test Results, for Status Code, you see: "404 Not Found". What could be a possible cause of this error?',
        options: [
            'The web API expression contains conditional logic to return "404 Not Found" for Status Code when a queried resource is not found',
            'There is a typo in the provided API key',
            'The corresponding service account does not have at least "Viewer" permissions to the web API',
            'The a!toJson() function was not used to format the body of the a!httpResponse()'
        ],
        correct: [0],
        explanation: 'A 404 status code is typically returned when the requested resource is not found.'
    },
    // 43
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You created a POST web API using the Start Process template. This web API allows an external system to create new records in your Appian application. In the web API you click Test Request. You review the test results and notice a Status Code of "200", but the process variables for the associated process model are null. What are some possible causes for the empty process variables? Select two.',
        options: [
            'You did not include an API key in the Headers section of the Body',
            'You did not enter sample data for Body before clicking Test Request',
            'You do not have "Initiator" permissions for the linked process model',
            'You did not correctly configure the processParameters parameter for the a!startProcess function'
        ],
        correct: [1, 3],
        explanation: 'A 200 status means the web API executed successfully, but if no sample data was provided or the processParameters mapping is incorrect, the process variables will be null.'
    },
    // 44
    {
        topic: 'Integration',
        type: 'single',
        text: 'You created a POST web API using the Start Process template. The content type is JSON. The linked process model has two process variables: username, region. Both process variables have a data type of Text. You\'re now testing the web API. In the Test Inputs section, for Body, how should you format the data to successfully populate both process parameters?',
        options: [
            'a!toJson({ username: "test.user", region: "East" })',
            'username=test.user&region=East',
            'processParameters: { pvUsername: "test.user", pvRegion: "East" }',
            '{"username": "test.user", "region": "East"}'
        ],
        correct: [3],
        explanation: 'The Start Process template expects the request body to be a JSON object with keys matching the process variable names.'
    },
    // 45
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You\'re configuring a connected system to use OAuth 2.0 Authorization Code Grant for authentication. You leave Scope blank. What are some possible outcomes? Select two.',
        options: [
            'Authentication succeeds. But the external server might only grant a minimal, default scope, which may not be sufficient to call the integrations you need.',
            'Authorization fails. The external authorization server will likely return an error (such as "invalid_scope") because no permissions were requested.',
            'Authentication succeeds. But the user will be prompted to manually enter the permissions on their consent screen during the login process.',
            'Authentication fails. The connected system will automatically switch to using OAuth 2.0 Client Credentials Grant instead.'
        ],
        correct: [0, 1],
        explanation: 'Leaving Scope blank can result in either a default minimal scope or an invalid_scope error.'
    },
    // 46
    {
        topic: 'Integration',
        type: 'single',
        text: 'You\'ve created a GET web API to expose record data to an external system. You need an API key for authentication. What are the correct steps to create and associate this API key?',
        options: [
            'In the Admin Console, create a new service account, and use its generated password as the API key.',
            'In Appian Designer, create a service account and an API key. Add the service account to a group that has "Viewer" permissions to the web API and the record type.',
            'In the Admin Console, create a new API key. Go to Appian Designer, open the security role map for the web API, and add the API key with "Viewer" permissions.',
            'In the Admin Console, create a new API key. Associate it with a service account that has "Viewer" permissions to the web API and the record type.'
        ],
        correct: [3],
        explanation: 'API keys are created in the Admin Console and associated with a service account that has Viewer permissions on the web API and record type.'
    },
    // 47
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You\'re changing the authentication method for an existing web API from API key to OAuth 2.0 Client Credentials Grant. You have confirmed that the current API key has been deactivated. What are the possible next steps to complete this authentication change? Select two.',
        options: [
            'Create an OAuth 2.0 Client. Then link the new client with the service account that had been associated with the API key that was just deactivated.',
            'Create a new service account and use group management to assign it appropriate permissions. Then create an OAuth 2.0 Client and associate it with the new service account.',
            'Create an OAuth 2.0 Client. Then modify the existing service account\'s properties to store the new Client ID and Secret.',
            'Create an OAuth 2.0 Client. Then add the new Client ID to the security role map of the web API, replacing the service account.'
        ],
        correct: [0, 1],
        explanation: 'To switch to OAuth Client Credentials, you can either reuse the existing service account or create a new one, and associate the OAuth client with it.'
    },
    // 48
    {
        topic: 'Integration',
        type: 'single',
        text: 'You are preparing to deploy an application from your Development environment to the Test environment. Your application includes a connected system that calls an external API. The Base URL for this API is "https://api.dev.example.com" in Development, but it must be "https://api.test.example.com" in Test. How can you ensure that the connected system points to the correct URL in the Test environment, without requiring manual changes after deployment?',
        options: [
            'Create two connected system objects, one for Development and one for Test, and reference them with an environment-specific constant.',
            'Generate an import customization file and leave the baseURL property commented out. Appian will automatically prompt for the value during import.',
            'Delete the Base URL from the connected system before exporting, and re-enter it in the Test environment after import is complete.',
            'During import, upload an import customization file that sets the baseURL property for the connected system to "https://api.test.example.com".'
        ],
        correct: [3],
        explanation: 'Import customization files allow you to override properties like baseURL during import.'
    },
    // 49
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You\'re building an employee onboarding app. Right now, Human Resources (HR) sends documents by email, IT manually grants system access, and managers don\'t always know what\'s happening. After conducting interviews with representatives from all groups, you want to summarize your findings into user personas. Which steps should you take? Select two.',
        options: [
            'Identify the complete list of distinct groups of employees involved in onboarding',
            'Conduct usability testing to confirm user journeys',
            'Draft user flows for application interfaces',
            'Document the background, goals, and priorities of each group of employees'
        ],
        correct: [0, 3],
        explanation: 'To create user personas, you need to identify the distinct groups and document their background, goals, and priorities.'
    },
    // 50
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You\'re building an employee onboarding app. You\'ve already identified the key activities each user persona will perform, and now it\'s time to map the steps required to complete each activity via the user flow. Which best practices for designing the user flow should you follow? Select two.',
        options: [
            'Focus on how the system works to ensure alignment with available features',
            'Define the steps that users will perform in order to complete each activity',
            'Define key interfaces that will make up the application',
            'Get confirmation from stakeholders that the steps are correct and in the right order'
        ],
        correct: [1, 3],
        explanation: 'User flows should define the user\'s steps in order, and stakeholders should confirm they are correct.'
    },
    // 51
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You\'re building an employee onboarding app and are preparing to present the onboarding experience to Human Resources (HR) stakeholders for their initial feedback. To help them understand the overall process and tentative screen layouts, which combination of UX deliverables would be most effective? Select three.',
        options: [
            'A user flow diagram to clarify how new hires and HR interact with the system at each step',
            'High-fidelity mockups to lock the details of key onboarding UIs',
            'Wireframes to show the basic layouts and structure of key onboarding UIs',
            'A storyboard that illustrates the new hire\'s onboarding journey in a relatable way'
        ],
        correct: [0, 2, 3],
        explanation: 'For initial feedback, use a user flow diagram, wireframes, and a storyboard. High-fidelity mockups are too detailed for early feedback.'
    },
    // 52
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You\'re building an employee onboarding app, and you\'ve created mockups for all the app interfaces. Before showing them to stakeholders, you want to check if they pass the Trunk Test with your app\'s users. You recruit the tester from the Human Resources (HR) team and observe their behavior while they interact with your app. Which behaviors would indicate that your mockups FAIL the test? Select two.',
        options: [
            'The tester comments that the color scheme looks different from the HR portal',
            'The tester pauses frequently, unsure of where they are in the app',
            'The tester finds two ways to complete the same task',
            'The tester clicks multiple times or backtracks to figure out how to proceed'
        ],
        correct: [1, 3],
        explanation: 'The Trunk Test fails when users pause frequently or backtrack, indicating confusion.'
    },
    // 53
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You\'re building an employee onboarding app, and you\'ve already done some quick hallway tests on your mockups and received helpful feedback. Now, you\'re planning a structured usability test to gather deeper insights. Which best practices should you follow? Select two.',
        options: [
            'Give participants step-by-step instructions to ensure they complete tasks correctly',
            'Run tests with people whose job is to do the activity being tested',
            'Answer participant questions immediately to help them navigate the app',
            'Observe participants as they complete tasks without guiding them, noting where they struggle'
        ],
        correct: [1, 3],
        explanation: 'Usability testing should involve actual users, and observers should not guide or answer questions during the task.'
    },
    // 54
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Your team is designing the interfaces for a new claims management app used by customer service agents at InsureCorp. The app includes: a homepage, a record list, and detailed claim summary views. During usability testing, some agents mention they have trouble finding key details within claim summary views. Which best practices should you follow to improve the app’s structure and organization? Select two.',
        options: [
            'Use different visual styles for each page to make them feel distinct from each other',
            'Reorganize the claim summary view, so that the page structure is easy to grasp at a glance',
            'Display related actions within each record list row rather than above the grid',
            'Ensure all pages have clear titles that match how InsureCorp’s agents refer to claims and processes'
        ],
        correct: [1, 3],
        explanation: 'Clear structure and consistent, familiar page titles are key.'
    },
    // 55
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Greg is a customer service agent at InsureCorp who relies on the home page in his claims management app to stay on top of his work. He uses it to track pending tasks, manage appointments, and create new claims and client profiles. Your team is designing a home page for Greg that organizes his key tasks into three big groups: Pending tasks, Calendar, and Actions. Which layout best supports an effective, information-dense dashboard while keeping everything well organized?',
        options: [
            'Stack sections vertically, so Greg can scroll through each one in sequence',
            'Use a two-column layout to display tasks and actions in one section, and add the calendar as a collapsible section',
            'Use a three-column layout to visually separate tasks, the calendar, and actions while maximizing space',
            'Use a tabbed layout to allow switching between tasks, calendar, and actions instead of displaying them together'
        ],
        correct: [2],
        explanation: 'A three-column layout visually separates the three groups while keeping them all visible at once.'
    },
    // 56
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Greg, a customer service agent, is filling out a new claim form in the claims management app. He feels overwhelmed by the lengthy instructions at the top and struggles to understand some complex terms in the form. Which changes would make the form easier to use? Select two.',
        options: [
            'Move instructions to a separate help page, so the form only contains the interactive fields',
            'Keep instructions focused on the essential information needed to complete the form',
            'Define complex terms using placeholder text in the form fields',
            'Add tooltips to explain complex terms, so only those who need extra help see the definitions'
        ],
        correct: [1, 3],
        explanation: 'Keep instructions concise and use tooltips for complex terms.'
    },
    // 57
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Greg, a customer service agent, is filling out a new claim form in the claims management app. He notices that some fields can be edited while others are read-only, but they are mixed together in a way that feels confusing and distracting. Which best practices would improve the form’s usability? Select two.',
        options: [
            'Organize editable and read-only fields into separate sections when appropriate',
            'Only place editable and read-only fields together when the read-only fields provide helpful context',
            'Organize it so that it’s a multi-step form, and display read-only fields in the first step and editable in the second',
            'Make all fields editable, so users can change any information as needed'
        ],
        correct: [0, 1],
        explanation: 'Grouping editable fields together and using read-only fields as context helps clarity.'
    },
    // 58
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'The latest home page design for InsureCorp’s claims management app uses differently colored cards for tasks, appointments, and claim management. During testing, customer service agents report that it’s hard to focus on key tasks because too many elements compete for their attention. Which best practices would improve Greg’s home page experience? Select two.',
        options: [
            'Reduce use of most colors to create a neutral, distraction-free interface',
            'Use color sparingly to highlight high-priority information, like urgent tasks',
            'Use white backgrounds in content cards and maintain a small, consistent color palette',
            'Use blocks of color to highlight section titles throughout the page'
        ],
        correct: [1, 2],
        explanation: 'Use color sparingly for high-priority items and keep a small consistent palette with white backgrounds.'
    },
    // 59
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Your team is updating the branding of InsureCorp’s claims management site, including colors for the navigation bar, buttons, and other UI elements. During testing, some customer service agents report difficulty reading text in the navigation bar and distinguishing what tab is selected. Which changes would improve the readability of this site? Select two.',
        options: [
            'Use the same color for the navigation bar and the highlight color to keep things looking consistent',
            'Make sure there’s enough contrast between the navigation bar and the text/icons, so they are easy to read',
            'Choose a highlight color for selected tabs that stands out from the navigation bar',
            'Pick an accent color that’s just a little darker than black text so it blends nicely with the UI'
        ],
        correct: [1, 2],
        explanation: 'Contrast between the nav bar and text/icons is critical, and a highlight color for selected tabs should stand out.'
    },
    // 60
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are designing a mobile portal for technicians at Wyndhamm Power to scan equipment barcodes and report incidents. As you design your interface, which best practices should you follow? Select two.',
        options: [
            'Design screens with minimal scrolling for easier navigation',
            'Ensure technicians can complete even complex tasks on mobile, so they don’t take work home',
            'Use buttons and cards for easy tapping',
            'Use side-by-side layout so that all the information is stacked by default'
        ],
        correct: [0, 2],
        explanation: 'Mobile interfaces should have minimal scrolling and use buttons/cards for easy tapping.'
    },
    // 61
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are designing an app that provides personalized insurance quotes, and you want to make sure your interfaces look great on desktops, tablets, and mobile devices. What areas should you check to make sure your interfaces display correctly across all devices? Select three.',
        options: [
            'Ensure all components stay the same size across all devices for consistency',
            'Identify layouts and components that don’t work well on narrow screens',
            'Check that flattened columns and buttons are arranged logically on smaller screens',
            'Use form factor preview to see how specific components adjust on different screen sizes'
        ],
        correct: [1, 2, 3],
        explanation: 'For responsive design, identify problematic layouts, check logical arrangement, and use form factor preview.'
    },
    // 62
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Your team designed the first version of a quotes landing page to provide customers with personalized insurance quotes. Which layouts or components are NOT a good fit for the mobile version of this interface? Select two.',
        options: [
            'Multiple cards to display different bundled insurance quote options',
            'A tall billboard header with the Welcome message and a decorative photo',
            'A horizontal milestone with four steps',
            'A textbox for the customer to enter their postal code'
        ],
        correct: [1, 2],
        explanation: 'A tall billboard header takes too much vertical space and a horizontal milestone may not fit well on narrow screens.'
    },
    // 63
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are designing an employee directory page that displays a list of employees. On a desktop, you want the employees to appear in a grid format. On mobile devices, they should display in a single column list with details. How can you achieve this? Select two.',
        options: [
            'Use the a!isNativeMobile to automatically adjust layouts on mobile',
            'Design two alternative layouts: one for desktop and one for mobile',
            'Use the a!isPageWidth function to conditionally show each layout based on the device type',
            'Use the stackWhen parameter to stack the grid automatically'
        ],
        correct: [1, 3],
        explanation: 'You can design two layouts and conditionally show them, or use stackWhen to stack columns.'
    },
    // 64
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are designing a conference registration page that contains a two-column layout. The left column displays a personalized “Welcome, [User Name]!” message, while the right column features a large, eye-catching image. When using the Fit form factor preview, you notice that, starting with narrow desktops, the content doesn’t display well. What is the best way to optimize this layout?',
        options: [
            'Use the side-by-side layout since it stacks by default',
            'Experiment with the widths of both columns, so they look better on narrow screens',
            'Use the stack when parameter to define when columns should stack',
            'No changes are needed — columns will stack automatically on physical devices'
        ],
        correct: [2],
        explanation: 'The stackWhen parameter in a!columnsLayout() allows you to define at what width columns should stack.'
    },
    // 65
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Maria is a new Appian developer working on a new Loan Management app. Since she is new to interface design, she wants to use Appian’s drag-and-drop patterns to build interfaces efficiently while following UX best practices. Where can she find these patterns?',
        options: [
            'Design Library',
            'Appian AppMarket',
            'The Patterns tab in the interface palette',
            'Interface Recipes page in Appian Documentation'
        ],
        correct: [2],
        explanation: 'The Patterns tab in the interface palette contains drag-and-drop patterns that follow UX best practices.'
    },
    // 66
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are designing a portal where conference attendees can browse and register for sessions. After reviewing design patterns, you decided to use the Cards as List Items pattern. To effectively adapt this pattern to your use case, which changes should you implement? Select three.',
        options: [
            'Define session details within the interface expression to avoid data dependencies',
            'Update colors and icons to match your conference’s branding',
            'Update text to reflect your event details',
            'Replace the hard-coded sample data with your own hard-coded data'
        ],
        correct: [1, 2, 3],
        explanation: 'Update colors/icons for branding, update text for your event, and replace sample data with your own data.'
    },
    // 67
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are designing an IT service desk interface and decide to use the Cards as Buttons pattern. As you review the expression to make edits, which of the following would indicate to you that data is hard-coded rather than dynamically retrieved?',
        options: [
            'rule!AA_getPropertyListings()',
            'a!map(icon: "home", name: "House", desc: "A single family home, townhouse, or duplex")',
            'a!queryEntity(entity: cons!REAL_ESTATE_DATA, filters: ...)',
            'a!localVariables(propertyType: ri!propertyType)'
        ],
        correct: [1],
        explanation: 'a!map() with literal values indicates hard-coded data.'
    },
    // 68
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are building a new app for tracking vehicles in a commercial vehicle fleet, and want to reuse a consistent set of templates across all of your organization’s apps instead of designing each UI independently. What step should you take to achieve this?',
        options: [
            'Copy and paste the part of the interface you want to reuse into the “Shared” interface',
            'Save your designs under the Patterns tab in the palette',
            'Save commonly used UI components as expression rules for easy reuse',
            'Add desired interfaces to your library by selecting the Design Library checkbox in the interface properties'
        ],
        correct: [3],
        explanation: 'The Design Library allows you to save interfaces as reusable components across multiple apps.'
    },
    // 69
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You\'re building a customer portal for a government agency. In sprint three, a Quality Assurance tester flags that the interface’s light gray text on a white background may not be accessible for users with low vision, and that the dropdown menus could pose challenges for users with motor impairments. The client then informs you that the app must meet accessibility standards before launch. What should have been done earlier to ensure accessibility compliance? Select two.',
        options: [
            'Identify accessibility requirements in sprint zero',
            'Use automated accessibility checkers if you suspect a UI may be inaccessible',
            'Devise a comprehensive accessibility strategy in sprint one',
            'Integrate accessibility requirements into the design and testing of your app from the beginning'
        ],
        correct: [0, 3],
        explanation: 'Accessibility should be considered from the start and integrated throughout design and testing.'
    },
    // 70
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are designing an online application form for a government service and want to make sure it’s fully accessible. During testing, you notice that the screen reader doesn’t announce the autocomplete options for fields like name and address. What setting did you forget to configure?',
        options: [
            'Input purpose parameters',
            'Validation messages',
            'Label parameters',
            'Rich text to create larger labels'
        ],
        correct: [0],
        explanation: 'Input purpose parameters (autocomplete attributes) help screen readers announce autocomplete options.'
    },
    // 71
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are designing a dynamic Appian interface with buttons that let users switch between viewing data as a chart or a grid. How can you ensure these elements are accessible to screen reader users? Select two.',
        options: [
            'Use bolded rich text on buttons for greater contrast',
            'Add a paragraph at the top explaining how to switch between views',
            'Provide clear labels for the buttons (e.g. “Chart” and “Grid”)',
            'Add accessibility text to indicate which view is selected (e.g. “Current selection”)'
        ],
        correct: [2, 3],
        explanation: 'Clear button labels and accessibility text indicating the current selection are crucial for screen reader users.'
    },
    // 72
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'A business analyst on your team has low vision and sometimes struggles to differentiate between interface elements in your Appian application. She asks if there are any settings she can adjust to improve visibility. Which of the following settings can she modify from the Accessibility tab in her profile? Select two.',
        options: [
            'Change the chart fill patterns to help distinguish data series',
            'Increase the contrast of outlines and borders in forms, grids, and interfaces',
            'Enable dark mode for all application interfaces',
            'Adjust text size in charts and grids'
        ],
        correct: [0, 3],
        explanation: 'From the Accessibility tab, users can change chart fill patterns and adjust text size in charts and grids.'
    },
    // 73
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'A non-admin user with edit permissions has modified the Account CDT. How can this user publish the CDT changes to the database?',
        options: [
            'Choose the Create tables automatically option in the Data store object and ignore all warnings.',
            'Enable the security inheritance option then import the Account CDT object.',
            'Select the Create tables manually in the Data Store Object, then download the script and share it with the System Administrator.',
            'Create an account record type object then call the write to datastore smart service from a process.'
        ],
        correct: [0, 2],
        explanation: 'A non-admin user can use "Create tables automatically" or "Create tables manually" to generate a script for the System Administrator.'
    },
    // 74
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'What actions should you take to optimize the performance of a database query?',
        options: [
            'Use the database to perform sorting, aggregation, and filtering',
            'Use looping functions in Appian to sort and filter your data',
            'Index columns used in join operations',
            'Use pagingInfo to reduce the size of the response'
        ],
        correct: [0, 2, 3],
        explanation: 'Push sorting/aggregation/filtering to the database, index join columns, and use pagingInfo to limit result size.'
    },
    // 75
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are using Process-to-Process message events in their solution design. Which three statements are considered best practice when using messaging events?',
        options: [
            'Use conditional filters.',
            'Target processes by ID.',
            'Pass minimal amounts of data.',
            'Use cascading messages.',
            'Use message loops.'
        ],
        correct: [0, 1, 2],
        explanation: 'Best practices: use conditional filters, target specific process IDs, and pass minimal data. Cascading messages and loops are not recommended.'
    },
    // 76
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Your new project is currently being deployed. You don’t want to deploy any objects which are left unreferenced. What is the most efficient way to ensure that unreferenced objects are NOT deployed?',
        options: [
            'When inspecting the package, remove the unreferenced objects.',
            'Deploy the entire application and remove unreferenced objects individually.',
            'Navigate to Unreferenced Objects for the application objects and remove them.',
            'Add the objects into a patch after checking individual object’s dependency and deploy the package.'
        ],
        correct: [0],
        explanation: 'The most efficient way is to inspect the deployment package and remove unreferenced objects during inspection.'
    },
    // 77
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Which strategy should be implemented to proactively identify and address performance concerns?',
        options: [
            'Run regular health checks.',
            'Only use process models as a last resort.',
            'Restart Appian daily, at midnight.',
            'Use the maximum supported CPU and memory in all production environments.'
        ],
        correct: [0],
        explanation: 'Regular health checks are the proactive strategy to identify and address performance concerns.'
    },
    // 78
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are configuring an integration. What are two valid options for the Method field?',
        options: [
            'FIND',
            'POST',
            'SEARCH',
            'PUT'
        ],
        correct: [1, 3],
        explanation: 'Valid HTTP methods in Appian integrations include POST and PUT. FIND and SEARCH are not standard.'
    },
    // 79
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are fetching data from the database using the `a!queryEntity()` function. Which two methods can keep the query performant?',
        options: [
            'Use a batch size of -1.',
            'Specify the required fields using `a!querySelection()`.',
            'Use filtering on an integer ID to restrict the rows returned.',
            'Apply sorting using `a!pagingInfo()`.'
        ],
        correct: [1, 2],
        explanation: 'Specifying only the required fields and filtering on an indexed integer ID are the most effective ways to keep queries performant.'
    },
    // 80
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are modelling data for use in Appian. What are two key benefits of database normalization?',
        options: [
            'Data redundancy is limited.',
            'Data integrity is maintained.',
            'Fewer tables are required.',
            'Fewer views are required to efficiently query data.'
        ],
        correct: [0, 1],
        explanation: 'Normalization limits data redundancy and maintains data integrity.'
    },
    // 81
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You need to query information from two different tables with a 1:1 relationship. What is most performant approach to query this information?',
        options: [
            'Make a query for each table that you need.',
            'Create a view joining the tables with the information needed and query the view.',
            'Create a new table that would store the common information and query it.',
            'Create a view for each table for only the information needed from each table and query the views.'
        ],
        correct: [1],
        explanation: 'A view that joins the two tables with only the needed columns is the most performant approach.'
    },
    // 82
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are using "Manual export and import" to conduct a deployment. This deployment includes environment-specific constants. Which two artifacts will be generated by the export?',
        options: [
            'Application package zip file',
            'Administration Console settings',
            'Plug-insCustomization files',
            'Customization files'
        ],
        correct: [0, 3],
        explanation: 'Manual export generates an application package zip file and customization files.'
    },
    // 83
    {
        topic: 'ACD201',
        type: 'single',
        text: 'One of the process models in your application takes on average 6 days to complete with an archival period of 4 days established. You are considering decreasing the archival period to 2 days. After this change is made, what percent reduction would you expect to see in the number of process instances stored in memory for this process model?',
        options: [
            '50%',
            '33%',
            '25%',
            '20%'
        ],
        correct: [0],
        explanation: 'Reducing the archival period from 4 to 2 days is a 50% reduction in the time instances remain in memory.'
    },
    // 84
    {
        topic: 'ACD201',
        type: 'single',
        text: 'What can you do with the Integration SDK?',
        options: [
            'Create custom functions to extend Appian\'s capabilities',
            'Add workflow libraries to create new low-code actions in Appian RPA',
            'Add new connected systems for developers to use when connecting to additional platforms',
            'You can do all of these with the Integration SDK'
        ],
        correct: [3],
        explanation: 'The Integration SDK allows you to create custom functions, add workflow libraries for RPA, and add new connected systems.'
    },

    // ============================================================
    // DOMANDE 85–132 (da altre immagini, best practice, process, testing, deployment)
    // ============================================================
    // 85
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Which of the following are best practices for configuring a process model?',
        options: [
            'Use swim lanes.',
            'Add labels on outbound paths for XOR gateways.',
            'Write to Data Store smart service nodes should be labeled in a unique color.',
            'All end nodes need to have a termination event.'
        ],
        correct: [0, 1, 2],
        explanation: 'Best practices include using swim lanes, labeling outbound paths on XOR gateways, and using unique colors for Write to Data Store nodes.'
    },
    // 86
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You have loaded around 3 years worth of test data into your application and have discovered that your application is now running slow. Which three of the following are possible ways to diagnose the issues?',
        options: [
            'Look into logs for high volume requests',
            'Analyze database logs',
            'Review the Performance View to isolate redundant, high volume or poor performing sections of the interface',
            'Execute an All Process reports, and count number of processes per engine'
        ],
        correct: [0, 2, 3],
        explanation: 'To diagnose performance issues, look at logs, review the Performance View, and execute All Process reports. Database logs are not typically accessible.'
    },
    // 87
    {
        topic: 'ACD201',
        type: 'single',
        text: 'An Application Vision Board helps you discover the purpose of your application. What are the four areas you need to discuss to complete your Application Vision Board?',
        options: [
            'Target Group, Application, Integrations, Business Goals',
            'Business Goals, Stakeholders, Application Rules, Database Structure',
            'Stakeholders, Database Structure, Target Group, Application Rules',
            'Target Group, Needs, Application, Business Goals'
        ],
        correct: [3],
        explanation: 'The four areas are: Target Group, Needs, Application, and Business Goals.'
    },
    // 88
    {
        topic: 'Integration',
        type: 'multi',
        text: 'Which three authentication methods are available when setting up a connected system?',
        options: [
            'Basic',
            'API Key',
            'OAuth 2.0',
            'Digest',
            'One Time Password'
        ],
        correct: [0, 1, 2],
        explanation: 'Appian connected systems support Basic, API Key, and OAuth 2.0 authentication.'
    },
    // 89
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are looking at the tomcat-stdout.log to troubleshoot an issue reported by an end-user. Which time zone is recorded on the log entries?',
        options: [
            'The time zone where the application server physically resides',
            'Your time zone, as the user that is logged in',
            'Greenwich Mean Time (GMT)',
            'The time zone of the end-user that caused the error'
        ],
        correct: [0],
        explanation: 'Tomcat logs record timestamps in the time zone of the application server.'
    },
    // 90
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You just made a series of changes intended to reduce the memory footprint of a process model. After initiating a sampling of process instances, what two items should you compare before and after the change to validate that memory has been reduced?',
        options: [
            'The Data Management tab in the process model',
            'The sizing.bat (.sh) script',
            'The system.csv log file',
            'The Process Model Metrics in the Monitoring tab'
        ],
        correct: [0, 3],
        explanation: 'Compare the Data Management tab and Process Model Metrics in the Monitoring tab before and after changes.'
    },
    // 91
    {
        topic: 'ACD201',
        type: 'single',
        text: 'A developer needs to create an application that allows a bank to view and edit each of their customer\'s details in a unified interface that pulls from multiple data sources. To best align with Appian design best practices, what should the developer consider implementing?',
        options: [
            'A record and a set of related actions which allow a user to view and update a customer\'s information.',
            'A set of long-lived processes that hold customer data, accessible through Portal pages.',
            'A Report object with an Interface that allows a user to pull up the customer\'s summary information.',
            'A Process, launched daily, which creates a task so a user can view each customer.'
        ],
        correct: [0],
        explanation: 'Records with related actions are the best practice for viewing and editing customer data from multiple sources.'
    },
    // 92
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are designing a customer management system for a business with approximately 100,000 customers. Which requirement represents a major performance risk?',
        options: [
            'In order to search for a customer, their last name and date of birth must be provided.',
            'When onboarding a customer, the system should check that a customer with the same first and last name hasn\'t already been onboarded.',
            'Daily, Appian should send a personalized email to each customer who hasn\'t logged in over the past week, reminding them to check in on their account.',
            'A user should be able to bulk add up to 100 customers at once via a spreadsheet upload and import process.'
        ],
        correct: [2],
        explanation: 'Sending personalized emails to 100,000 customers daily is a major performance risk.'
    },
    // 93
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Your organization is in the process of redesigning its user interfaces in order to accommodate the users\' different monitor, browser, and device choices. Which three functions can you use to directly control the responsive behavior of your interfaces?',
        options: [
            'a!isPageWidth()',
            'a!isNativeMobile()',
            'a!columnsLayout()',
            'a!sideBySideLayout()',
            'a!pagingInfo()'
        ],
        correct: [0, 1, 3],
        explanation: 'a!isPageWidth(), a!isNativeMobile(), and a!sideBySideLayout() directly control responsive behavior.'
    },
    // 94
    {
        topic: 'Process',
        type: 'single',
        text: 'You need to chain the user to a task in a child process. How can you start a process that allows for this?',
        options: [
            'Synchronous subprocess',
            'Start Process smart service',
            'Process messaging',
            'Asynchronous subprocess'
        ],
        correct: [0],
        explanation: 'A synchronous subprocess blocks the parent process and allows chaining to a task in the child process.'
    },
    // 95
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'After looking at the Health Check, you identify a process model that is responsible for a large portion of the platform\'s memory. What two steps would reduce the memory footprint?',
        options: [
            'Change the data management settings to delete the process after completion instead of archiving the process.',
            'When looping through process nodes, configure them to delete previously completed/cancelled instances.',
            'Convert your asynchronous Sub-Process nodes into Start Process nodes.',
            'Use activity class parameters (as opposed to process variables) when possible to limit the process history size.'
        ],
        correct: [0, 1],
        explanation: 'Delete completed instances instead of archiving, and delete previously completed/cancelled instances in loops.'
    },
    // 96
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'A system administrator is configuring an Appian environment for maintenance. Which two statements are true about the system during the maintenance window?',
        options: [
            'No users will be able to access the environment.',
            'Maintenance windows can be configured to start and end at specified times.',
            'A top site banner will show to all users.',
            'REST endpoints will return a 401 error.'
        ],
        correct: [0, 1],
        explanation: 'During maintenance, no users can access the environment, and maintenance windows can be scheduled.'
    },
    // 97
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are reviewing a poorly-performing interface to see if it can be improved. Which three of the following should be avoided when designing an interface?',
        options: [
            'A high number of elements in a picker field',
            'Unlimited or very high batch size for grids',
            'Fields that are being re-evaluated unnecessarily using refresh variables',
            'Multiple nested interfaces',
            'Looping functions used within interfaces'
        ],
        correct: [0, 1, 2],
        explanation: 'Avoid high picker element counts, unlimited batch sizes, and unnecessary refresh variables.'
    },
    // 98
    {
        topic: 'ACD201',
        type: 'single',
        text: 'What action would you take after discovering that some engines have a higher than normal process count?',
        options: [
            'Split large processes into smaller processes using the Sub-Process Smart Service',
            'Increase the use of MNI to a single process',
            'Increase the use of the Start Process smart service',
            'Modify underlying expressions and queries to be more performant'
        ],
        correct: [0],
        explanation: 'Splitting large processes into smaller ones using subprocesses helps distribute the load across engines.'
    },
    // 99
    {
        topic: 'Testing',
        type: 'single',
        text: 'After every deployment to the target environment, you want to run expression rule test cases automatically for the application using the most efficient way possible. Which action should you take, if any?',
        options: [
            'Ask the team to execute the test cases for all expressions in the application.',
            'This is the default behavior and happens automatically when an expression is deployed. No actions are required.',
            'Configure a post-deployment process to execute Start Rule Tests (Applications) smart service.',
            'Configure a post-deployment process to execute Start Rule Tests (All) smart service.'
        ],
        correct: [2],
        explanation: 'The most efficient way is to configure a post-deployment process to execute Start Rule Tests (Applications).'
    },
    // 100
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You have an existing database view that you need to update before consuming in Appian. No related objects exist in Appian, and there are specific guidelines that prohibit Appian from modifying your database. In which order should you perform the actions?',
        options: [
            '1. Update the SQL view in the database 2. Create a constant to refer to the Data Store Entity 3. Create an appropriate CDT and publish it to a data store.',
            '1. Update the SQL view in the database 2. Create an appropriate CDT and publish it to a data store.',
            '1. Update the SQL view to create an appropriate CDT and publish it to a data store 3. Create a constant to refer to the Data Store Entity 4. Create a query entity rule to return data from the view to Appian.',
            '1. Create an appropriate CDT and publish it to a data store 2. Create a query entity rule to return data from the view to Appian. 3. Create a constant to refer to the Data Store Entity.'
        ],
        correct: [1],
        explanation: 'Since no related objects exist and Appian cannot modify the database, update the SQL view first, then create the CDT.'
    },
    // 101
    {
        topic: 'Process',
        type: 'multi',
        text: 'You are analyzing a poorly-performing process model. You find that the process model in question has a lot of nodes and is mainly used to do background updates. Which two things can be done to increase its performance?',
        options: [
            'Define the correct alerts for the process model.',
            'Remove all activity chaining.',
            'Use swim lanes in the process model.',
            'Refactor some nodes into subprocesses when possible.'
        ],
        correct: [1, 3],
        explanation: 'Remove activity chaining and refactor nodes into subprocesses to improve performance for background updates.'
    },
    // 102
    {
        topic: 'Testing',
        type: 'multi',
        text: 'Your organization is considering automating the running of expression rule test cases to provide unit tests for your Appian applications. Which three methods could be used to launch a test run when required?',
        options: [
            'Via the DevOps section of the Administration Console.',
            'A process model invoked via an API.',
            'A process model exposed to users as an action.',
            'A web hook from a content versioning system (CVS).',
            'A SAIL interface embedded in a report.'
        ],
        correct: [0, 2, 3],
        explanation: 'Test runs can be launched via: DevOps section in Admin Console, a process model exposed as a user action, or a web hook from CVS.'
    },
    // 103
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'The IT stakeholder wants to understand which processes have the highest footprint. What are the two places to get information on process model memory usage?',
        options: [
            'Administration Console',
            'Process monitoring tab',
            'Appian Health Check report',
            'Application server log file'
        ],
        correct: [1, 2],
        explanation: 'Process model memory usage information is available in the Process Monitoring tab and the Appian Health Check report.'
    },
    // 104
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You create an interface, but it fails to load. When you open the design errors log, you see a memory circuit breaker error. What are two possible root causes of this error?',
        options: [
            'A database query is taking too long to evaluate.',
            'The interface contains some special characters.',
            'The interface is storing too much data in local variables.',
            'The interface component is looping over too many items.'
        ],
        correct: [2, 3],
        explanation: 'Memory circuit breaker errors are caused by storing too much data in local variables or looping over too many items.'
    },
    // 105
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Users are reporting that their application is slow to load customer records with many transactions. Using performance monitoring tools, you find that the following interface definition is responsible for the vast majority of page load time. You also notice that both queries take about 25 milliseconds each to execute when you test them using expression editor. Which change would decrease the load time of this interface component the most?',
        options: [
            'Don\'t fetch total count when getting transactions.',
            'On line 4, increase the pagingInfo batch size to 50 so more data is prefetched.',
            'Use a synced record for Transactions to improve the query response time for the query performed on line 6.',
            'Prefetch transaction types and use the displayvalue() function to display the Transaction Type for each transaction.'
        ],
        correct: [3],
        explanation: 'Prefetching transaction types and using displayvalue() avoids an N+1 query problem, which is the biggest performance improvement.'
    },
    // 106
    {
        topic: 'Process',
        type: 'single',
        text: 'You are designing a case management application. The initiator creates a case, and the reviewer reviews it approximately 7 days later. You have already designed a process model for the initiators to create the case. Which process model design will result in the lowest memory impact?',
        options: [
            'When all case details are entered, the case appears as a case record, and when the reviewer is ready to review the record, they can do so via a related action from the case record.',
            'When all case details are entered, the process flow will proceed and assign a task to the reviewer to review the record.',
            'When all case details are entered, the process flow will call a Start Process node to initialize a review process model for the reviewer.',
            'When all case details are entered, the process flow will call a Sub-Process node to initialize a review process model for the reviewer.'
        ],
        correct: [0],
        explanation: 'Using records with related actions instead of a long-running process that waits 7 days results in the lowest memory impact.'
    },
    // 107
    {
        topic: 'Process',
        type: 'multi',
        text: 'Which two practices are strongly discouraged for activity chaining?',
        options: [
            'Less than or equal to 5 seconds between attended activities.',
            'More than 50 node instances',
            'More than 5 seconds between attended activities',
            'Less than or equal to 50 node instances'
        ],
        correct: [1, 2],
        explanation: 'Activity chaining with more than 50 node instances or more than 5 seconds between attended activities is strongly discouraged.'
    },
    // 108
    {
        topic: 'Integration',
        type: 'single',
        text: 'You are facing issues when attempting to establish a SAML connection to an identity provider. You determine you need to increase the authentication-specific logging levels so that you can view trace level statements about the connection attempt in the application server log. Which property file should you update to modify the log output level?',
        options: [
            'commons-logging.properties',
            'appian_log4j.properties',
            'logging.properties',
            'custom.properties'
        ],
        correct: [1],
        explanation: 'appian_log4j.properties is the file where you configure log levels for Appian-specific components, including authentication logging.'
    },
    // 109
    {
        topic: 'Integration',
        type: 'multi',
        text: 'When creating a Web API, which two items are configured in the Administration Console?',
        options: [
            'LDAP Authentication',
            'API Key',
            'Connected System',
            'Service Account'
        ],
        correct: [1, 3],
        explanation: 'API Keys and Service Accounts are configured in the Administration Console for web API authentication.'
    },
    // 110
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Using a View, you pull a report on different employee transactions. You receive the error: "a!queryEntity: An error occurred while retrieving the data." What is the most likely root cause?',
        options: [
            'The view contains a large number of rows, requiring more time to fetch the data.',
            'The view doesn\'t have a column mapped as a Primary Key in its corresponding CDT.',
            'The required inputs were not provided.',
            'The rule contains a missing syntax.'
        ],
        correct: [1],
        explanation: 'A view used in a queryEntity must have a Primary Key mapped in the CDT. Without it, the query fails with this error.'
    },
    // 111
    {
        topic: 'ACD201',
        type: 'single',
        text: 'During the design review, you identified slow-operating expression rules querying a specific data store. Which metric from the data_store_details.csv file will help you understand the "number of operations against data store"?',
        options: [
            'Transform Count',
            'Query Count',
            'Total Count',
            'Execute Count'
        ],
        correct: [2],
        explanation: 'Total Count in data_store_details.csv shows the number of operations against the data store.'
    },
    // 112
    {
        topic: 'Process',
        type: 'single',
        text: 'You have configured a process model to send an email to one or more recipients using the out-of-the-box Send E-Mail node. Executing the process model results in the Send E-Mail node encountered this error: "Error:Email could not be sent" Where do you go first to find more details on why the node encountered an error?',
        options: [
            'Raise a support case within My Appian so a cloud engineer can investigate.',
            'Review the system.csv log.',
            'Run and review the Health Check report',
            'Investigate the application server stdout log'
        ],
        correct: [3],
        explanation: 'The application server stdout log contains detailed error information for email sending issues.'
    },
    // 113
    {
        topic: 'Testing',
        type: 'single',
        text: 'Which review format is the most efficient way to coach team members and improve code quality?',
        options: [
            'Peer Dev Review',
            'Automated Code Scanning',
            'Retrospectives',
            'User Acceptance Testing'
        ],
        correct: [0],
        explanation: 'Peer Development Review is the most efficient way to coach team members and improve code quality through direct feedback.'
    },
    // 114
    {
        topic: 'ACD201',
        type: 'single',
        text: 'A lead designer receives this requirement: Every time a record is modified, the data changed must be stored for audit. Which design is the most efficient and has the least impact on the Appian application?',
        options: [
            'Create a custom plugin that can write an audit trail to a log file.',
            'Create a trigger on the database table to capture the audit trail to a table.',
            'Create an Appian process to capture the change history and write the audit trail to the database.',
            'Create a web API call to an audit history system and write the audit trail to file.'
        ],
        correct: [1],
        explanation: 'Database triggers are the most efficient and have the least impact on the Appian application for audit logging.'
    },
    // 115
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are creating an ERD that models the data for a college and includes a Many-to-Many relationship, Student-to-Class, where a student can be enrolled in multiple classes, and a class can enroll multiple students. How can you handle this relationship so that it can be supported in Appian and remain in at least First Normal Form?',
        options: [
            'A joining table can be used to hold instances of Student/Class relationships.',
            'The Student table should have a Class field to hold an array of Class IDs.',
            'The Class table should have a Student field to hold an array of Student IDs.',
            'It cannot be done, because Appian CDT cannot handle Many-to-Many relationships.'
        ],
        correct: [0],
        explanation: 'A joining (junction) table is the standard way to handle Many-to-Many relationships in a normalized database.'
    },
    // 116
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You need to show joined data from 5 tables. Each table contains a large number of rows and could generate a large result set after executing the Joins. The business is not expecting live data, and a 2-hour refresh is acceptable. Performance is a top priority. What should you use?',
        options: [
            'Table',
            'View',
            'Stored procedure',
            'Materialized view'
        ],
        correct: [3],
        explanation: 'A Materialized View stores the joined result set physically and refreshes on a schedule, providing the best performance for complex joins with acceptable staleness.'
    },
    // 117
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are creating a table to store book information for a library. The book has a reference number (ISBN_ID), as well as a unique identifier (BOOK_ID). For the CDT to be created, which data type should you choose for the BOOK_ID?',
        options: [
            'Number (Integer)',
            'Number (Decimal)',
            'Date',
            'Boolean'
        ],
        correct: [0],
        explanation: 'BOOK_ID is a unique identifier, which should be an integer (Number Integer) as it is a numeric primary key.'
    },
    // 118
    {
        topic: 'ACD201',
        type: 'single',
        text: 'There is a need to relate two entities in the data structure: Employee and Skill. Employees can have multiple skills, and a single skill can relate to multiple employees. What kind of relationship would these entities have, and what is the minimum number of tables required to implement the design, according to Appian best practices?',
        options: [
            'One-to-many; 2 tables',
            'Many-to-many; 2 tables',
            'Many-to-one; 2 tables',
            'Many-to-many; 3 tables'
        ],
        correct: [3],
        explanation: 'This is a Many-to-Many relationship, which requires 3 tables (Employee, Skill, and a junction table) in a normalized design.'
    },
    // 119
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Your table contains several indexes. Which two statements regarding indexes are correct?',
        options: [
            'Indexes increase the performance of Read operations.',
            'Indexes increase the performance of Write operations.',
            'Indexes decrease the performance of Write operations.',
            'Indexes decrease the performance of Read operations.'
        ],
        correct: [0, 2],
        explanation: 'Indexes speed up read operations but slow down write operations because the index must be updated.'
    },
    // 120
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'During a sprint retrospective meeting, you need to get the team thinking about the outcomes of the last sprint. Which two basic questions should you ask?',
        options: [
            'What didn\'t go well and can be improved?',
            'What are the blockers?',
            'Who did well in this sprint?',
            'What went well?'
        ],
        correct: [0, 3],
        explanation: 'The two basic retrospective questions are: "What went well?" and "What didn\'t go well and can be improved?"'
    },
    // 121
    {
        topic: 'ACD201',
        type: 'single',
        text: 'In Scrum, who is the right person responsible for prioritizing product backlog?',
        options: [
            'Tester',
            'Product Owner',
            'Lead Developer',
            'Product Manager'
        ],
        correct: [1],
        explanation: 'The Product Owner is responsible for prioritizing the product backlog in Scrum.'
    },
    // 122
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You want to generate an email body which varies from one Appian environment to another. For instance, between DEV and TEST. According to Appian best practices, how should you define the environment name?',
        options: [
            'Create an expression rule and update its value post-deployment.',
            'Create an environment-specific constant.',
            'Create a constant and update its value post-deployment.',
            'Create a stored procedure.'
        ],
        correct: [1],
        explanation: 'Environment-specific constants are the best practice for values that vary between environments, using import customization files during deployment.'
    },
    // 123
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Which XSD element is NOT supported within an Appian CDT?',
        options: [
            '<xsd:complexType>',
            '<xsd:key>',
            '<xsd:annotation>',
            '<xsd:simpleContent>'
        ],
        correct: [1],
        explanation: '<xsd:key> is not supported in Appian CDTs.'
    },
    // 124
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'While deploying a package to a target environment, object security warnings were detected. In which two places can object security settings be changed in bulk?',
        options: [
            'Application security summary',
            'Administration Console',
            'Compare and Deploy tool',
            'Process model folder'
        ],
        correct: [0, 2],
        explanation: 'Object security settings can be changed in bulk via the Application security summary and the Compare and Deploy tool.'
    },
    // 125
    {
        topic: 'ACD201',
        type: 'single',
        text: 'More than one user is editing the same record in database. With XSD, how do you avoid the collision of data from Application?',
        options: [
            '@Version',
            '@OrderBy',
            '@Inheritance',
            '@AssociationOverrides'
        ],
        correct: [0],
        explanation: '@Version is used for optimistic locking to avoid data collisions when multiple users edit the same record.'
    },
    // 126
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are on a project where the goal is to use Appian Sites to create and edit invoices issued to customers. This process model is being used as a related action, to edit an Invoice. You have already created a record for invoices. Which two suggestions regarding this process are valid?',
        options: [
            'We should consider adding a timer exception which skips the "Edit/Credit Invoice" node after 24 hours.',
            'We should add this process model as a related action on the Invoices record called "Edit Invoice."',
            'We should add two pages to the site, one of which is a Record List of Invoices, and the other which has this process model as a Report.',
            'To improve performance, we should consider removing activity chaining from all flows.'
        ],
        correct: [0, 1],
        explanation: 'Adding a timer exception for the edit node and adding the process as a related action on the record are valid suggestions.'
    },
    // 127
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are about to deploy a package to another environment. Which two statements are true?',
        options: [
            'It is not possible to undo changes from an import to all types of objects.',
            'It is possible to undo changes from an import to all types of objects.',
            'It is possible to import the same package multiple times.',
            'It is not possible to import the same package multiple times.'
        ],
        correct: [0, 2],
        explanation: 'It is not possible to undo changes from an import to all object types, and it is possible to import the same package multiple times.'
    },
    // 128
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are code-checking your colleague\'s process model before marking it as Ready for Deployment. Which three best practices should be applied?',
        options: [
            'All nodes should have exception flows',
            'All XOR/OR gateways should have a single incoming flow.',
            'All outgoing flows from a gateway should be labeled',
            'Node inputs should not make the same query call more than once.',
            'Activity chaining should be added to the majority of flows.'
        ],
        correct: [1, 2, 3],
        explanation: 'Best practices: gateways should have a single incoming flow, outgoing flows should be labeled, and avoid duplicate query calls.'
    },
    // 129
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You want to display a Gender dropdown, and its choice label may change in the future as per the business requirement. Given transactional database tables rely on this data for reporting, what is the most appropriate action?',
        options: [
            'Create a constant and update it as per the business requirement.',
            'Create a stored procedure and update it as per the business requirement.',
            'Create an expression rule and update it as per the business requirement.',
            'Create these entries in a table and reference them through a query entity rule as per the business requirement.'
        ],
        correct: [3],
        explanation: 'Store reference data in a table and query it via a query entity rule. This allows business users to update values without code changes.'
    },
    // 130
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are using pie charts. What is correct representation of Appian best practices?',
        options: [
            'Use as many slices as possible.',
            'Pie charts should only be used to represent data that can be placed into identical categories.',
            'Use pie charts to show proportional data.',
            'Try to use multiple pie charts when comparing multiple sets of data.'
        ],
        correct: [2],
        explanation: 'Pie charts are best used to show proportional data (parts of a whole).'
    },
    // 131
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You create an Integration that modifies the data. In which three locations can it be called?',
        options: [
            'Web API (GET)',
            'Expression or Rule',
            'Web API (POST, PUT, DELETE)',
            'Process model',
            'SAIL saveinto parameter'
        ],
        correct: [1, 2, 3],
        explanation: 'An integration that modifies data can be called from: an Expression/Rule, a Web API (POST, PUT, DELETE), or a Process model. GET web APIs should not modify data.'
    },
    // 132
    {
        topic: 'Integration',
        type: 'single',
        text: 'Your organization is considering options for integrating with external systems from within Appian. Which Appian object is designed to allow you to share base URL and authentication details across multiple integrations?',
        options: [
            'A web API',
            'An integration',
            'A connector function',
            'A connected system'
        ],
        correct: [3],
        explanation: 'A Connected System stores base URL and authentication details that can be shared across multiple Integration objects.'
    },

    {
        topic: 'ACD201',
        type: 'single',
        text: "You're configuring the Health Check settings under the Admin Console. Which section would you find the setting to indicate that the Health Check will run on a Production Environment?",
        options: ['General', 'Automatic', 'Scheduling'],
        correct: [0],
        explanation: 'The "General" section contains the setting to indicate the environment type (Production/Non-Production).'
    },
    // 2
    {
        topic: 'ACD201',
        type: 'multi',
        text: "You're designing an expense reporting tool which will be used by three personas. Employees who need to submit their expenses frequently. Managers who are responsible for reviewing and approving all expenses for their direct reports. Accounts Team members who need to understand the total expense amount on a year-to-year basis. Based on the requirements, match each user interface solution to appropriate persona.",
        options: [
            'Manager: A column chart to show aggregated expenses by month for the current year and the previous year.',
            'Accounts team members: A pie chart to show aggregated expenses approved by department on a yearly basis.',
            'Employee: Status, submitted by, and the Manager of the employee who submitted the report.'
        ],
        correct: [0, 1, 2],
        explanation: 'Each persona has a specific need: Managers need trends (column chart), Accounts need departmental breakdowns (pie chart), Employees need their own submission status.'
    },
    // 3
    {
        topic: 'ACD201',
        type: 'single',
        text: 'There are 2 record types, ABC and XYZ, which sync enabled. The XYZ record type is added as a relationship into the ABC record type. A user has Viewer permission to the ABC record type but does not have access to the XYZ record type. A site page is presented to the user where the data is sourced from the ABC record type and its related record type the XYZ reference. What information does the user see on the site page?',
        options: [
            'Page is presented to the user and the data reference to the XYZ record type appear as "null"',
            'Page is presented to the user with the XYZ record type data and field references redacted.',
            'Page does not load, and an error message is presented: "The record type [identifier=XYZ] does not exists, has been deleted, or you do not have sufficient privileges to access the data."'
        ],
        correct: [0],
        explanation: 'If the user has no access to the related record type, the reference appears as null (or empty) but the page still loads.'
    },
    // 4
    {
        topic: 'Integration',
        type: 'multi',
        text: 'What are the three locations to call an integration that changes the source data?',
        options: [
            'Process Model (Call Integration Smart Service)',
            'Rule',
            'Web API (POST, PUT, DELETE)',
            'Web API (GET)',
            'Interface component saveInto parameter'
        ],
        correct: [0, 1, 2],
        explanation: 'Integrations that modify data can be called from Process Models, Rules, and Web APIs with POST/PUT/DELETE methods. GET should not modify data, and saveInto is for interfaces but typically calls rules, not directly an integration (though it can via expression).'
    },
    // 5
    {
        topic: 'Testing',
        type: 'multi',
        text: 'As part of your deployment process, you want to set up Jenkins to automatically run FitNesse to perform some automated testing. Which two deployment methods should you use?',
        options: ['Export and Import', 'Compare and Deploy', 'REST API', 'Automated Deployment Manager'],
        correct: [2, 3],
        explanation: 'REST API and Automated Deployment Manager allow programmatic deployment and integration with CI/CD tools like Jenkins.'
    },
    // 6
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You need to create a web API so that an external system can start a process in your app. Which two statements are true about using a service account to authenticate the system?',
        options: [
            'The service account is created as any other object in Appian',
            'The service account must be a user in the Service Accounts group',
            'The service account must be granted access to that web API via group management',
            'The service account must be configured from within the web API object'
        ],
        correct: [1, 2],
        explanation: 'Service accounts are created in the Admin Console, not as objects. They must be in the Service Accounts group and granted permissions via group management. Configuration is done in the Admin Console, not within the web API object.'
    },
    // 7
    {
        topic: 'Process',
        type: 'multi',
        text: 'When completing forms for a case, users are experiencing long wait times between two forms. You analyse the process model and discover that activity chaining is used throughout the process model, including in unattended nodes. Which three actions should you perform to optimize the process model?',
        options: [
            'Decrease the number of swim lanes',
            'Combine transactions into smaller number of nodes in order to shorted long process chains',
            'Avoid chaining system nodes such as Integrations',
            'Move asynchronous transactions outside of the chain',
            'Utilize MNI for unattended nodes and chain where possible',
            'Move synchronous transactions outside of the chain'
        ],
        correct: [2, 3, 5],
        explanation: 'To optimize activity chaining, avoid chaining system nodes (integrations, etc.), move asynchronous transactions outside the chain, and move synchronous transactions outside the chain to reduce blocking.'
    },
    // 8
    {
        topic: 'ACD201',
        type: 'single',
        text: "You're developing a functionality to manage transactions for an insurance company. Each transaction can have multiple items where respective item type and item amount can be entered. The amount entered can be either negative or positive, and a decimal data type with a precision of 8 and a scale of 2. A maximum of 10 items can be entered for a transaction. Once all the items are entered, you need to calculate and show the sum of all items' total amounts at the transaction level. What is the best way to calculate and display the sum of all item amounts?",
        options: [
            'text(sum(ri:items.amount), "00.00")',
            'round(sum(ri:items.amount), 2)',
            'fixed(sum(ri:items.amount), 2, false())'
        ],
        correct: [2],
        explanation: 'fixed() properly formats a decimal number with specified decimal places, ensuring proper display without rounding issues.'
    },
    // 9
    {
        topic: 'ACD201',
        type: 'multi',
        text: "You're developing a record view for a case management system that enables users to upload files to a specific location within an external records application. Your requirements are: a. In this record view, there should be a record action that allows the user to upload a file to the interface and configure the metadata (name, author, file size) before submitting; b. If the file is larger than 250MB, the user will be notified that the file will be uploaded overnight; c. Once the file has been successfully uploaded, the file will appear on the record view and the user can interact with the file. Which two pieces of user facing information must be captured from this business process so that you can develop this record view?",
        options: [
            'How the user wishes to interact with these files in the record view - as a grid or a series of card layout',
            'The time of file upload if the file is less than 250MB',
            'The location of where the file will be uploaded in the external records application',
            'The email of the system administrator so that an email can be sent to them if the integration fails'
        ],
        correct: [1, 3],
        explanation: 'The business needs to know timing for small files and who to notify on failure. The interaction style is a UI design decision, and the location is a technical configuration, not user-facing info.'
    },
    // 10
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are designing an interface that calls an integration to populate data in a read-only grid. The integration returns a list of dictionaries in the body of the HTTP response. Which design approach should you recommend?',
        options: [
            'Cast the HTTP response into a map using a combination of a!map and index() and save it as a local variable. Then pass this local variable into a read-only grid.',
            'Cast the HTTP response into a data subset using a combination of a!dataSubset and index() and save it as a local variable. Then pass this local variable into a read-only grid.',
            'Save the HTTP response into a local variable and then use "." notation to index the local variable directly into the read only grid through f!row'
        ],
        correct: [2],
        explanation: 'The simplest and most performant approach is to directly use the response list (already a list of dictionaries) and index it in the grid using f!row notation, without additional casting.'
    },
    // 11 (incomplete - saltiamo? ma la includo con opzioni limitate)
    {
        topic: 'ACD201',
        type: 'multi',
        text: "You're analysing the performance of an interface that is being evaluated in parallel. Review the following example. Assume you have an expression that evaluates as described by this diagram: By looking at the performance view for this expression, which two queries have the highest bottlenecks and should be targeted for performance improvements?",
        options: [
            'rule!getAllPremiumCustomers and rule!displayUserFirstLastName',
            'rule!getAllPremiumCustomers and rule!displayUserFullName',
            'rule!getAllActiveCustomers and rule!displayUserFirstLastName'
        ],
        correct: [0],
        explanation: 'Based on typical performance bottlenecks, the most expensive queries are those fetching large datasets or doing complex transformations.'
    },
    // 12
    {
        topic: 'ACD201',
        type: 'multi',
        text: "You're creating a synced record type which will store read-only data from an external web service. Data in the external system is updated nightly, and the latest information must be available to users in the morning. Currently there are approximately 150,000 entries in the external system, and this number is not expected to change significantly. There is an existing integration object and associated expression rule, which when called, returns the complete dataset from the external system. What are two configurations that you must apply to ensure that the latest and complete record set is available?",
        options: [
            'Within the source filters settings on the record type, disable the row limit option so that all entries can be retrieved from the external system',
            'Set all records fields to evaluate in real time so that the latest information is always retrieved from the web service',
            'Modify the integration object and associated expression rule to return batches of 1000 based on a batch number passed in from the record type',
            'Within the record type, schedule a full sync to occur nightly after the data is refreshed in the external system'
        ],
        correct: [2, 3],
        explanation: 'To handle large datasets, implement batching (pagination) in the integration and schedule a full sync nightly to refresh the data.'
    },
    // 13
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You need to update an existing Appian application. The application needs to be responsive and compatible with a variety of screen widths. For example: phone/tablet browser, Appian mobile app, desktop monitor. Which two functions/parameters you should consider when updating the interfaces?',
        options: [
            'a!isNativeMobile()',
            'StackWhen in Columns Layout and Side by Side Layout',
            'Width of a page in the site object',
            'a!isPageWidth()'
        ],
        correct: [0, 3],
        explanation: 'a!isNativeMobile() and a!isPageWidth() are functions that help detect device type or screen width to conditionally adjust layouts.'
    },
    // 14
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Your client reported that a form in the application is very slow to load. You investigated and find a query entity which is not performing well. Which action should you perform to improve query performance for the query entity?',
        options: [
            'Apply the appropriate filters and indices in both Appian and the database',
            'Apply indices on all the fields referred in the query',
            'Change the data source of the query entity to a view with a WHERE clause'
        ],
        correct: [0],
        explanation: 'Proper indexing and filtering on both the database and in the query entity are the most effective ways to improve performance.'
    },
    // 15
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'After reviewing the latest Expression performance logs, you notice you have several expressions contributing to slow interface or process performance. Which two conditions will lead to a higher risk associated with slow-performing expressions?',
        options: [
            'When the expression is used frequently or by many concurrent users',
            'When the expression is used in a local variable',
            'When the expression is evaluated on a mobile device',
            'When the expression is a custom function plug-in'
        ],
        correct: [0, 3],
        explanation: 'Frequent usage and custom plug-ins (which may have overhead) increase the risk of performance issues.'
    },
    // 16
    {
        topic: 'ACD201',
        type: 'multi',
        text: "You're creating an interface object that displays a report of open cases. This interface will be used as the content of a site page. Users in the 'ACME Employees' groups must be able to view the report. Which two steps should you perform?",
        options: [
            "Ensure that the site page visibility permits the 'ACME Employees' group to view the page",
            "Include the 'ACME Employees' group as a member of the 'Report Viewers' system group",
            "Add the 'ACME Employees' group as a viewer on the folder containing the interface object",
            "Add the 'ACME Employees' group as a viewer on the site object"
        ],
        correct: [0, 3],
        explanation: 'The site page visibility must include the group, and the group must have viewer access to the site object itself.'
    },
    // 17
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You need to trace and log the request and response of an integration in your application. Which three steps should you perform?',
        options: [
            'Ensure you are a part of the System Admin group',
            'Ensure you are a part of the application\'s Process Administrator group',
            'Enable the integration logging in the individual integration object',
            'Enable the integration logging in the Admin Console',
            'Enable the integration logging in the individual Connected System object'
        ],
        correct: [1, 2, 4],
        explanation: 'To log integration traffic, you need Process Administrator rights, enable logging on the integration object itself, and enable logging on the Connected System object.'
    },
    // 18
    {
        topic: 'ACD201',
        type: 'single',
        text: "An insurance company's product details are currently distributed across numerous database tables, encompassing over 60 to 70 fields. You need to implement a product comparison tool for business users to compare up to three insurance products simultaneously, with all the product details in a tabular format. Which object should be used to transform the data into the required formats?",
        options: ['Views', 'Stored Procedures', 'Record Type with Relationships'],
        correct: [1],
        explanation: 'Stored procedures are best for complex transformations and aggregations from multiple tables, especially when performance is critical.'
    },
    // 19
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Which two options are correct regarding record relationships when using synced records in your application?',
        options: [
            'Up to 20 relationships can be added on a record type with data sync enabled',
            'Relationships can be established between any record types that have sync enabled, regardless of the source',
            'Many-to-one relationships can be established using record relationships',
            'Record type relationships enforce referential integrity'
        ],
        correct: [1, 2],
        explanation: 'Relationships can be established between any synced record types regardless of source, and many-to-one relationships are supported. There is no limit of 20, and they do not enforce referential integrity automatically.'
    },
    // 20
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You need to select a plug-in to meet a specific requirement and several plug-in can do the job. What are three key factors to consider?',
        options: [
            'What are the limitations of the plug-in?',
            'What are the compatible Appian versions?',
            'What is the size of the plug-in?',
            'Who is the creator of the plug-in?',
            'Is the plug-in approved for use in the Cloud?',
            'Is the plug-in open source or proprietary?'
        ],
        correct: [0, 1, 4],
        explanation: 'Key factors: limitations, compatibility with Appian versions, and cloud approval. Creator, size, and licensing are secondary.'
    },
    // 21
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You have a case record type with data sync enabled to retrieve submitted support cases. What is the best approach to limit who can see which records in the record type?',
        options: ['Record-level security', 'Default filters', 'Security rules'],
        correct: [0],
        explanation: 'Record-level security is the primary mechanism to restrict visibility of specific records based on user attributes.'
    },
    // 22
    {
        topic: 'Testing',
        type: 'single',
        text: "You're performing System Integration Testing on a client's application that integrates with an external system. In this instance, you're testing the application's interactions with external integrations to ensure that data is being handled correctly between the two systems. However, the step has been done manually and is time-consuming. What should you do to make this process more efficient?",
        options: [
            'Utilize the Postman API Platform to test the integrations with the external system and Appian\'s web APIs through a defined set of test cases',
            'Utilize Appian-Locust to develop and execute performance tests on the system integrations by scripting a scenario where multiple users are interacting with the external systems simultaneously',
            'Utilize FitNesse for Appian to perform automated functions testing on the workflows that include integrated systems through a defined set of test cases'
        ],
        correct: [2],
        explanation: 'FitNesse for Appian is specifically designed for automated functional testing of Appian workflows including integrations.'
    },
    // 23
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You need to display information for pending tasks for each individual in an application. The tasks may be for a single specific application. Which context type should you select for the Task Report Type?',
        options: ['Tasks assigned to a group', 'Tasks by process model', 'Tasks attributed to user'],
        correct: [2],
        explanation: 'For pending tasks per individual, "Tasks attributed to user" is the correct context type.'
    },
    // 24
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You need to allow external systems to invoke Appian web APIs. Which user role should be assigned?',
        options: ['Application User', 'Service Account', 'System Administrator'],
        correct: [1],
        explanation: 'Service accounts are used for machine-to-machine authentication for external systems invoking web APIs.'
    },
    // 25
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Your client wants their customers to be able to schedule appointments directly using their website without going to an Appian user environment. You need to build an embedded interface to be added to your client\'s web page. The style of the embedded interface should be consistent with the host web page. Which three custom styling options can be configured in the Themes section of embedded interface?',
        options: [
            'Two or three column layout',
            'Page background colour',
            'Web font stylesheet URL',
            'Asymmetrical layout',
            'Font family'
        ],
        correct: [1, 2, 4],
        explanation: 'Themes allow customization of page background colour, web font stylesheet URL, and font family. Layout options are not part of Themes.'
    },
    // 26
    {
        topic: 'ACD201',
        type: 'multi',
        text: "You're designing a custom component rule!pagingComponent() to page through list of items. The component must display the current page numbers being as the total number of items. Users should be able to click arrows to increase or decrease the pagination. Review the following: a!localVariables!local!query:rule!getData(),{rule!interface(), rule!pagingComponent()) Which two patterns should be used when calling the component in this scenario?",
        options: [
            'Passing into the rule input totalCount of rule!pagingComponent() the value: local!query.totalCount where local!query is returning a dataSubset and returnTotalCount = "True"',
            'A local variable local!totalCount calculated using count(local!query) which is passed into rule!pagingComponent() via a rule input. The data type of local!query is a list of Custom Data Type (CDT)',
            'A rule input ri!pagingInfo on rule!pagingComponent() with a local variable of the same name in the main interface with an initial value. When the arrows are clicked, this updates the value of the local variable in the main interface',
            'A local variable local!pagingInfo inside rule!pagingComponent() with an initial value. When the arrows are clicked, this updates the value of the local variable'
        ],
        correct: [0, 2],
        explanation: 'The totalCount should come from the dataSubset (if available) or be passed via pagingInfo. The pagingInfo should be managed in the parent interface to persist state.'
    },
    // 27
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You need to implement a Gender dropdown, where the choice labels may need to be altered in the future. The transactional database tables rely on this data for reporting, so the data must be accurate. What is the recommended action?',
        options: [
            'Create a constant and modify it as needed per the business requirement',
            'Create these entries in a table and reference them through a query entity rule as per the business requirement',
            'Create an expression rule and modify it as per the business requirement'
        ],
        correct: [1],
        explanation: 'Store reference data in a table so business users can update values without code changes, ensuring data integrity for reporting.'
    },
    // 28
    {
        topic: 'ACD201',
        type: 'multi',
        text: "You're refining a story regarding a highly regulated form, where information needs to be sent to a regulatory body at the end of each month to ensure that the business complies with laws and legislation. The story only concerns the creation of the form. You need to create a form that captures information to comply with the regulatory requirements. Which two questions should you ask the business?",
        options: [
            'What is the maximum length of each field',
            'What information does the regulatory body required?',
            'Is the information sent to the regulatory body via an integration?',
            'How often is the information sent to the regulatory body?'
        ],
        correct: [1, 3],
        explanation: 'The business must define what data is required and how often it is sent (frequency is part of form creation if it affects data capture).'
    },
    // 29
    {
        topic: 'Integration',
        type: 'multi',
        text: 'You need to connect to an external system using OAuth 2.0: SAML Bearer Assertion Flow authentication type, which requests access to an API on behalf of a signed user. This standard has the several steps involved with the SAML Bearer Assertion Flow. Which two steps should you perform?',
        options: [
            'Upload Client Certificate to Connected System',
            'Create a Bearer Assertion process flow to authenticate the user',
            'Add required users and groups to OAuth 2.0 SAML Bearer Assertion Users system group',
            'Enable the checkbox labelled OAuth 2.0 SAML Bearer Assertion Flow in the Admin Console'
        ],
        correct: [2, 3],
        explanation: 'You need to add users/groups to the OAuth 2.0 SAML Bearer Assertion Users group and enable the flow in Admin Console. Client certificate is not required for this flow.'
    },
    // 30
    {
        topic: 'ACD201',
        type: 'single',
        text: "You're creating a support case record type while working on a support case management system. You want to track support case status changes. You want to use record events to track this information. Which record data source type is the most appropriate for you to use?",
        options: ['Database source with data sync enabled', 'Process-backed source', 'Web service source'],
        correct: [0],
        explanation: 'Record events are supported only for synced record types (database source with sync enabled).'
    },
    // 31
    {
        topic: 'Integration',
        type: 'single',
        text: "You're making a POST request to the Appian web API. You need to include complex data structures, such as lists or objects, in the request body. How should you design the API to accept those requests?",
        options: [
            'Convert the complex data structures to JSON and include them in the request body as a string',
            'Use XML format to represent the complex data structures in the request body',
            'Use query parameters to represent the complex data structures'
        ],
        correct: [0],
        explanation: 'Appian web APIs accept JSON payloads; complex structures should be sent as JSON in the request body.'
    },
    // 32
    {
        topic: 'ACD201',
        type: 'single',
        text: 'An energy company wants to allow the public to be able to report power outrages directly and provide supporting documentation in the form of photos and/or videos. The company also required the reporter\'s contact details. How can a developer design and implement this requirement in Appian?',
        options: [
            'A custom version of the Appian mobile app that the user can use to capture details, attached photos, and upload documents',
            'A portal that interacts with records that stores the name, address, contact information, with a defined folder to store uploaded documents',
            'A site where the user can trigger a process that captures the information'
        ],
        correct: [2],
        explanation: 'A site with a process that captures the information and attachments is the standard approach for public users without requiring a custom mobile app.'
    },
    // 33
    {
        topic: 'Process',
        type: 'single',
        text: "You're creating a process model that requires information from an external database. You must establish a connection between your app and the external system using a SOAP based integration method. In the process flow, you need to establish this connection and retrieve the required information to be used. How could you achieve this in a process model?",
        options: [
            'Configure a Call Web Service smart service and add the WSDL in the set-up tab',
            'Use the Call Web Service smart service and select the integration object that has been previously created for this integration',
            'Use the Call Integration smart service and add the WSDL in the set-up tab'
        ],
        correct: [1],
        explanation: 'The recommended approach is to create an Integration object for the SOAP service and then use the Call Integration smart service with that object.'
    },
    // 34
    {
        topic: 'ACD201',
        type: 'single',
        text: "You're developing a user input form for a financial services application. One component of this form required you to embed an external site (in the form of a URL) that can receive inputs from Appian and return updates as the user interacts with it. What should you do?",
        options: [
            'Use the Appian out-of-the-box Web Content Component. It can display content from a URL and provide both additional inputs, or receive updates as the user interacts with the embedded site',
            'Use a component plug-in to achieve interaction with the embedded site, because this use case requires input-output or event parameters'
        ],
        correct: [0],
        explanation: 'The Web Content Component (iframe) can display external content and can be configured to exchange data with the embedded site via events.'
    },
    // 35
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'In reviewing the process model metrics of your application, you notice a process model with a completion rate of only 10%. What are two possible reasons for this low completion rate?',
        options: [
            'There are a high number of smart service nodes configured in the process model',
            'The process contains at least one User Input Task with no exceptions or escalations, and users do not complete the task',
            'There are a significant number of instances that are experiencing process errors, which are not being handled by the production support team',
            'The days configured for archival, or deletion is significantly higher than the other process models in your application'
        ],
        correct: [1, 2],
        explanation: 'Low completion rate is often due to abandoned user tasks without escalation, or unhandled errors causing instances to fail.'
    },
    // 36
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You have set up SAML for single sign-on (SSO) in your cloud environment. Which three options could you enable in the Attribute Mapping section of the Admin Console to sync with user\'s profile in Appian?',
        options: [
            'Reactivate deactivated users upon sign in',
            'Create new users upon sign in',
            'Remember Me on web and mobile',
            'Update user attributes upon sign in',
            'Group Membership Synchronization'
        ],
        correct: [1, 3, 4],
        explanation: 'SAML attribute mapping allows creating new users, updating user attributes, and syncing group memberships upon sign-in.'
    },
    // 37
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'The synced record type Customer has a one-to-many relationship with the Case record type. You need to calculate the number of open cases for each customer. What are two valid methods to accomplish this?',
        options: [
            'Create a query expression for the Customer record type. Utilize a!measure() function within the aggregation fields to count the related cases in the "Open" status',
            'Within the Customer record type, create a custom field that evaluates in real-time to aggregate related record fields and count the open cases',
            'Create a sync-time custom record field within the Customer record. Utilize the a!relatedRecordData() function to filter open cases and count the number of entries',
            'Within the Case record type, edit the relationship to the Customer record and select the "Open" status as the grouping filter'
        ],
        correct: [0, 2],
        explanation: 'Valid methods: using a!measure() with aggregation in a query, or creating a sync-time custom field that counts related records with a filter.'
    },
    // 38 (domanda incompleta, ma la includo)
    {
        topic: 'ACD201',
        type: 'single',
        text: "You're designing a file upload process that integrates with an external document management system. Part of this process is to develop a start form with a file upload component, so that the user can upload multiple files. The business has requested that the maximum file size that can be uploaded through this process is 1 GB. Additionally, you're aware that the integration's API can accept files with a maximum size of 3GB but recommends no larger than 1GB. Can the process be more performant without straining the application or integration?",
        options: [
            'No. The file upload component is capable of accepting 1GB files and the integration can handle this',
            'Yes. Request the business reconsiders its requirements and find manual workarounds as it is not recommended to upload files of this size in both Appian and the integration.'
        ],
        correct: [0],
        explanation: 'The file upload component and integration can handle 1GB, but best practice is to use chunked uploads or notify users about large file handling.'
    },
    // 39
    {
        topic: 'ACD201',
        type: 'single',
        text: 'A process was recently pushed to the Prod environment. However, users are reporting that a task on this process is experiencing slow response times when they try to input data. What is the most likely reason for this issue?',
        options: [
            'Exception timers on tasks are set to value that are too low',
            'The process uses too many hidden variables',
            'There are too many SAIL components on the task',
            'The task is assigned to too many users'
        ],
        correct: [2],
        explanation: 'A slow task interface is most likely due to a large number of SAIL components causing heavy rendering and evaluation.'
    },
    // 40
    {
        topic: 'ACD201',
        type: 'single',
        text: "You're redesigning user interfaces to achieve more efficient space usage. Which layout component is the best choice for displaying an interface with a vertical meaningful order of components?",
        options: ['a!columnsLayout()', 'a!sideBySideLayout()', 'a!cardLayout()'],
        correct: [2],
        explanation: 'a!cardLayout() is ideal for vertical stacking of components in a meaningful order, especially for lists or dashboards.'
    },
    // 41
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Which two smart services automatically sync data in a record sync configuration?',
        options: [
            'Query Database',
            'Delete from Data Store Entities',
            'Call Integration for Salesforce data sources',
            'Execute Stored Procedure'
        ],
        correct: [1, 3],
        explanation: 'Delete from Data Store Entities and Execute Stored Procedure are smart services that can be used in record sync configurations to automatically sync data.'
    },
    // 42
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Which permission level is the minimum requirement on the data store to perform querying, writing, and deleting of data?',
        options: ['Administrator', 'Viewer', 'Editor'],
        correct: [2],
        explanation: 'Editor permission is required to perform write and delete operations on data store entities.'
    },
    // 43
    {
        topic: 'ACD201',
        type: 'single',
        text: "You need to configure the security for the synced record type Case. Your requirements are: A: Only users in the 'Archive Management' group can access cases in the 'Archived' status. B: Cases in the status 'Deleted' are accessible to no one. Which option is correct?",
        options: [
            'Option 1: i. Create a new record level security rule to allow access if the user is in the "Archive Management" group while the case status is "Archived" ii. Configure a source filter to exclude all cases that are in the "Deleted" status',
            'Option 2: i. Create a new user filter to allow access if the user is in the "Archive Management" group while the case status is "Archived" ii. Configure the record-level security to exclude all cases that are in the "Deleted" status'
        ],
        correct: [0],
        explanation: 'Record-level security is used to restrict access based on user groups and record attributes; source filters can exclude records from being synced entirely.'
    },
    // 44
    {
        topic: 'ACD201',
        type: 'single',
        text: "You're building an application with review workflow. Each submission must be approved by three users who can each approve or reject their request and leave a comment. This action changes the status of the submission to 'Approved' or 'Rejected' correspondingly and pushes the review to the previous or next assignee. Which data model captures the workflow requirements appropriately?",
        options: [
            'Three tables: i. Review to store id, statusId, comment; ii. Ref Status with columns id, value; iii. Review User with comments id, reviewId, user',
            'Two tables: i. Review with columns id, statusId, comment, user; ii. Ref Status with columns id, value',
            'Two tables: i. Review with columns id, statusId, comment, user1, user2, user3; ii. Ref Status with columns id, value'
        ],
        correct: [0],
        explanation: 'A normalized model with a separate junction table for reviewers (Review User) is the most flexible and scalable for multiple reviewers.'
    },
    // 45
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You notice that a process consumes a significant amount of memory. The process involves ingesting long strings from a web service and saving them to the database using a looping approach. The string output is saved to a process variable with data type Text. Which two options will reduce the memory usage?',
        options: [
            'Ensure that all process variables have the option "Hidden" deselected',
            'Save the string output directly to the data structure to be written to the database',
            'Evaluate each step in a separate script task and save the output to a process variable',
            'Configure the process to delete previously completed or cancelled instances'
        ],
        correct: [1, 3],
        explanation: 'To reduce memory, avoid storing large strings in process variables; write directly to database. Also, delete completed instances to free memory.'
    },
    // 46
    {
        topic: 'Process',
        type: 'multi',
        text: 'You have designed a three-step "Wizard" form interaction using user input tasks in the process model. The second step of the Wizard must utilize another process model which contains a user input task inside. Which two methods should be implemented for a seamless Wizard-like interaction for the user?',
        options: [
            'Enable activity chaining between all nodes in the second process model, and activity chaining between all user input tasks',
            'Use the start process smart service to call the second process model',
            'Use a subprocess to call the second process model',
            'Enable activity chaining between all nodes on the main process model'
        ],
        correct: [1, 3],
        explanation: 'Using Start Process (asynchronous) and enabling activity chaining on the main process model ensures the user does not experience delays between steps.'
    },
    // 47
    {
        topic: 'Process',
        type: 'multi',
        text: "You're creating a point-of-sale (POS) system for a customer which can associate the items in a transaction to a customer based on a membership number. The item stock table and the customer sales record are hosted elsewhere and need to be written into via POST APIs from an Appian process model. This all occurs within a transaction process model that you're creating. Which two steps should you perform to design your process model to improve process memory?",
        options: [
            'Add a terminate process node to the end of the process',
            'Create the two POST APIs as synchronous subprocesses',
            'Ensure that the entire process is activity-chained so that the person entering the transaction knows when the process is completed',
            'Create the two POST APIs as asynchronous subprocesses'
        ],
        correct: [0, 3],
        explanation: 'Terminate the process and use asynchronous subprocesses to reduce memory footprint by not keeping the parent process waiting.'
    },
    // 48
    {
        topic: 'Process',
        type: 'multi',
        text: 'You need to configure a process model that runs every day at 10:00 AM. The process should start only at the specific time even when a newer version of the process is published. A Boolean type constant needs to be configured in the process model. The intended flow of the process should be executed only when the constant is True. Which three steps should you perform?',
        options: [
            'Add an expression-based condition in the start node timer event to check for the specific time',
            'Add a XOR gateway just after the start node to check for the constant to be True',
            'Add a timer event just after the start node to check for the specific time',
            'Add a timer event on the start node to schedule the process to start at 10:00 AM',
            'Add a XOR gateway on the start node to check for the constant to be True'
        ],
        correct: [0, 1, 3],
        explanation: 'Schedule the start node with a timer event, add an expression condition to check time, and use a XOR gateway after start to check the constant.'
    },
    // 49
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You need to create a read-only grid that displays support case information. Data for the support case is mapped to the "Case" record type with data sync enabled. Within the record, there are fields named "createdDateTime" and "resolvedDateTime". These two fields store the timestamps for when a case is created and resolved respectively. The grid includes a column indicating the number of hours between when the case was created and when it was resolved. This column must be sortable within the grid. How should you calculate the hour value that will display in the column?',
        options: [
            'Create a custom record field that evaluates at sync-time, and calculates the number of hours between when the case was created and the current date and time',
            'Within the grid column, utilize an Appian function to calculate the number of hours between when the case was created and when it was resolved',
            'Create a custom record field that evaluates in real-time, and calculates the number of hours between when the case was created and when it was resolved'
        ],
        correct: [2],
        explanation: 'To be sortable, the value should be a real-time custom field that calculates the duration and can be used directly in the grid column.'
    },
    // 50
    {
        topic: 'Integration',
        type: 'single',
        text: "You're experiencing difficulties when you try to establish a SAML connection to an identity provider. You need to increase the authentication-specific log output levels, so that you can view trace-level statements about the connection attempt in the application server log. Which property file should you modify?",
        options: ['appian_log4j.properties', 'logging.properties', 'application.properties', 'custom.properties'],
        correct: [0],
        explanation: 'appian_log4j.properties is used to configure logging levels for Appian components, including authentication.'
    },
    // 51
    {
        topic: 'Process',
        type: 'multi',
        text: 'You need to create a process workflow for employee background investigations. This workflow takes an average size of six months from start to completion. There are multiple phases to the background investigation which must be completed by person in different departments. Each department is responsible for inputting a large amount of data as part of the workflow. There is an emphasis on process memory management since thousands of these investigations will happen concurrently. What are two best practices that you should employ when designing this process workflow?',
        options: [
            'Ensure that the data management policy is set to archive the process instances after a minimum of six months, so that the data is available throughout the workflow',
            'Combine all stages of the workflow into a single process model, so that data can be efficiently shared between nodes using process variables',
            'Utilize a record-backed design throughout the workflow where data entered by users is saved to and queried from the database',
            'Divide the workflow into multiple process models so that each process can be short-lived and consume less memory'
        ],
        correct: [2, 3],
        explanation: 'Record-backed design and splitting into short-lived subprocesses reduce memory consumption for long-running processes.'
    },
    // 52
    {
        topic: 'Testing',
        type: 'single',
        text: 'You are required to test a Related Action that updates record data. You need to make sure that the correct users can access the form and that the data is updating successfully. What is the most appropriate testing method to achieve this using Appian?',
        options: ['Unit Testing', 'User Interface (UI) Testing', 'Load Testing', 'Performance Testing'],
        correct: [1],
        explanation: 'UI Testing is appropriate to verify that the correct users can access the form and that data updates are successful.'
    },
    // 53
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Which user role should be used to allow external systems to invoke Appian web APIs?',
        options: ['Service Account', 'System Administrator', 'Application User', 'Designer'],
        correct: [0],
        explanation: 'Service accounts are used for system-to-system authentication.'
    },
    // 54
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are creating the group structure of a new application. Which three best practices apply?',
        options: [
            'Avoid creating custom group types unless there is a strong need/requirement',
            'Only create the groups necessary for task assignment or security',
            'Flat group structures should be avoided',
            'Group names should not include application prefix',
            'Keep group names unique'
        ],
        correct: [0, 1, 4],
        explanation: 'Best practices: avoid custom group types, create only necessary groups, and keep group names unique. Flat structures are acceptable; app prefixes are often used for clarity.'
    },
    // 55
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You create an interface, but it fails to load. When you open the design errors log, you see a memory circuit breaker error. What are two possible causes of this error?',
        options: [
            'A database query is taking too long to evaluate',
            'The interface contains some special characters',
            'The interface is storing too much data in local variables',
            'The interface component is looping over too many times'
        ],
        correct: [2, 3],
        explanation: 'Memory circuit breaker errors are typically caused by excessive data stored in local variables or loops iterating over too many items.'
    },
    // 56
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You need to display the profile picture of each employee inside an employee grid, alongside their names and phone numbers. According to Appian best practices, what is the preferred style and size for the images?',
        options: ['style: "AVATAR", size: "LARGE"', 'style: "STANDARD", size: "ICON"', 'style: "STANDARD", size: "LARGE"', 'style: "AVATAR", size: "SMALL"'],
        correct: [3],
        explanation: 'For profile pictures in a grid, use AVATAR style with SMALL size for compact display.'
    },
    // 57
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are troubleshooting slow response times on a SAIL interface. What are two potential causes of the performance issues?',
        options: [
            'Multiple rule inputs',
            'Multiple a!save operations',
            'Configuration of refresh variable',
            'Stacked button layout'
        ],
        correct: [0, 2],
        explanation: 'Multiple rule inputs and improper refresh variable configuration can cause excessive re-evaluation of the interface.'
    },
    // 58
    {
        topic: 'ACD201',
        type: 'single',
        text: "You need to update the archival settings for a process model. You modified the automatic process clean-up settings and selected the archive processes option with 'n' days. Which instances of that process model will be affected?",
        options: [
            'Future and past instances of the process model including subprocesses',
            'Future instances of the process model only',
            'Future and past instances of the process model',
            'Future instances of the process model only including subprocesses'
        ],
        correct: [2],
        explanation: 'Changing archival settings applies to all existing and future instances of that process model.'
    },
    // 59
    {
        topic: 'Testing',
        type: 'multi',
        text: 'Your organisation is considering automating the running of expression rule test cases to provide unit tests for your Appian applications. Which three methods could be used to launch a test run when required?',
        options: [
            'Via the DevOps section of the Administration Console',
            'A process model invoked via API',
            'A process model exposed to users as an action',
            'A web hook from a Content Versioning System (CVS)',
            'A SAIL interface embedded in a report'
        ],
        correct: [0, 2, 3],
        explanation: 'Test runs can be triggered via Admin Console DevOps section, a process model as a user action, or a web hook from a CVS.'
    },
    // 60
    {
        topic: 'ACD201',
        type: 'single',
        text: "You are investigating a slow-performing expression rule and want to analyse this rule's historical performance. Which performance log should you look at to see the mean evaluation time of this rule every hour?",
        options: ['expressions_details.csv', 'expressions_metrics.csv', 'expressions_summary.csv', 'expressions_trace.csv'],
        correct: [1],
        explanation: 'expressions_metrics.csv contains aggregated performance metrics like mean evaluation time per hour.'
    },
    // 61
    {
        topic: 'Process',
        type: 'multi',
        text: 'Which two practices are strongly discouraged for activity chaining?',
        options: [
            'Less than or equal to 5 seconds between attended activities',
            'More than 50 node instances',
            'More than 5 seconds between attended activities',
            'Less than or equal to 50 node instances'
        ],
        correct: [0, 1],
        explanation: 'Activity chaining should not have more than 50 nodes in a chain or more than 5 seconds of unattended activities between user interactions.'
    },
    // 62
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You need to show joined data from 5 tables. Each table contains a large number of rows and could generate a large result set after executing the Joins. The business is not expecting live data, and a 2-hour refresh is acceptable. Performance is a top priority. What should you use?',
        options: ['Table', 'View', 'Stored Procedure', 'Materialized View'],
        correct: [3],
        explanation: 'Materialized View stores the joined result physically and refreshes on a schedule, providing the best performance for complex joins with acceptable staleness.'
    },
    // 63
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are creating a table to store book information for a library. The book has a reference number (ISBN_ID), as well as a unique identifier (BOOK_ID). For the CDT to be created, which data type should you choose for the BOOK_ID?',
        options: ['Number (integer)', 'Number (decimal)', 'Date', 'Boolean'],
        correct: [0],
        explanation: 'BOOK_ID is a unique identifier, which should be an integer (Number Integer) as it is a numeric primary key.'
    },
    // 64
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'The IT stakeholder wants to understand which processes have the highest footprint. What are the two places to get information on process model memory usage?',
        options: ['Administration Console', 'Process Monitoring Tab', 'Appian Health Check Report', 'Application Server Log File'],
        correct: [1, 2],
        explanation: 'Process Monitoring tab and Health Check report provide information on process model memory usage.'
    },
    // 65
    {
        topic: 'Testing',
        type: 'multi',
        text: 'You are creating an expression rule that will be reused throughout your environment. What are two benefits of including meaningful test cases when creating a new expression rule?',
        options: [
            'Speed up unit, regression, and exploratory testing',
            'Improve the appearance of the code',
            'Improve performance',
            'Increase code quality'
        ],
        correct: [0, 3],
        explanation: 'Test cases accelerate testing and improve code quality by validating expected outcomes.'
    },
    // 66
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Which XSD element is not supported within an Appian CDT?',
        options: ['<xsd:complexType>', '<xsd:key>', '<xsd:annotation>', '<xsd:simpleContent>'],
        correct: [1],
        explanation: '<xsd:key> is not supported in Appian CDTs.'
    },
    // 67
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You are referencing and using arrays of a CDT. Which two statements are true?',
        options: [
            'Other Appian functions can be used within the square brackets "[ ]" when using dot notation to return specific data from the array',
            'There is no difference between using "dot notation" and the index() function',
            'An array of integers can be passed as the second parameter to the index() function to return the data at those position in the array',
            'The function where contains can act on operands of different types'
        ],
        correct: [0, 2],
        explanation: 'Dot notation supports functions inside brackets, and index() can accept an array of integers to return multiple positions.'
    },
    // 68
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'You receive a warning about approaching the 2,000,000 rows limit with synced records in production environment. What are two ways to efficiently address this warning to prevent reaching the limit?',
        options: [
            'Disable data sync immediately to prevent user-facing front end issues',
            'Keep only necessary data and plan to move the archived data to an audit table in a longer run',
            'Apply one or more source filters to limit the number of rows synced in Appian',
            'Design the process to write data in batches of 1,000'
        ],
        correct: [1, 2],
        explanation: 'Limit the data synced by applying source filters and archive older data to reduce row count.'
    },
    // 69
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'A recent Health Check report of your application indicates an increased risk of large context size in the interfaces. What are the two possible contributors to this risk?',
        options: [
            'The load variable has a web service response as JSON',
            'Data transformation is performed inside the interface rather than delegated to the source system',
            'Multiple local variables hold duplicate data',
            'Local variables are set to refresh every five minutes'
        ],
        correct: [1, 2],
        explanation: 'Performing data transformations in the interface and storing duplicate data in multiple local variables increase context size.'
    },
    // 70
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You have a requirement to implement an audit trail for any modifications to a record. You need to select the most efficient design option that has the least impact on your Appian application. What should you do?',
        options: [
            'Create Audit tables and create triggers on each transaction table to record modifications into the Audit table',
            'Create a process model to capture changes and write to audit tables',
            'Use a custom plugin to write audit logs'
        ],
        correct: [0],
        explanation: 'Database triggers are the most efficient and have the least impact on the Appian application for audit logging.'
    },
    // 71
    {
        topic: 'ACD201',
        type: 'single',
        text: "A client reported that one of their processes has been quite slow. Their process relates to a 'Wizard' style interface that the user needs to populate before submitting the task. However, the interface does not perform any heavy queries or expressions. When reviewing the Health Check report, what should you do?",
        options: [
            'Investigate the slow activity chained process flows (as multiple UIT might be linked together) and merge these into a single interface',
            'Investigate the number of unattended process loops (as multiple UIT might be linked together) and merge these into multiple node instances where possible',
            'Investigate the interface size and review the historical performance trends of the interface (as it might indicate an environment issue) and make adjustments where necessary'
        ],
        correct: [0],
        explanation: 'Slow Wizard interfaces are often due to activity chaining across multiple user input tasks; merging them can improve performance.'
    },
    // 72
    {
        topic: 'Integration',
        type: 'single',
        text: 'What is the appropriate HTTP request method for initiating a process which needs input data via an Appian web API?',
        options: ['POST', 'PUT', 'GET'],
        correct: [0],
        explanation: 'POST is used to create new resources or initiate processes with input data in the request body.'
    },
    // 73
    {
        topic: 'ACD201',
        type: 'single',
        text: 'A race condition arises when multiple users attempt to edit the same task simultaneously. How can optimistic locking be effectively implemented to resolve this issue?',
        options: [
            'By reducing the number of people with access',
            'By forcing all transactions to obtain an exclusive lock before attempting any modifications',
            'By utilizing the @Version annotation'
        ],
        correct: [2],
        explanation: '@Version annotation in CDTs enables optimistic locking to prevent concurrent updates from overwriting each other.'
    },
    // 74
    {
        topic: 'Testing',
        type: 'multi',
        text: "You're in the process of deploying a package to the client's TEST environment at the end of a sprint. This package is only relating to changes to a single application. Which two statements best describe the practices you should follow for automated testing for expression rules either before or after deploying the package?",
        options: [
            'During Compare and Deploy, the Inspect Deployment tab automatically runs the test cases in each of the expression rules. Review these findings, and either adjust the expression rule or delete outdated test case',
            'After deploying the package, you should perform regression testing by running the Start Rule Tests (Applications) smart service to automatically run the test cases. This indicates whether there are any impacts caused by the changes to the application',
            'After deploying the package, you should perform regression testing by running the Start Rule Tests (All) smart service to automatically run the test cases. This indicates whether there are any impacts caused by the changes across multiple application',
            'Before using Compare and Deploy, individually evaluate the test cases in the expression rules you intend to deploy. For any failed test case, adjust the expression rule so that it passes'
        ],
        correct: [1, 3],
        explanation: 'Evaluate and fix test cases before deployment, and run regression tests after deployment using the Start Rule Tests (Applications) smart service.'
    },
    // 75
    {
        topic: 'Integration',
        type: 'single',
        text: 'You need to implement a requirement where a third-party system starts a process in Appian. The third-party system can invoke a service only through Web Services Description Language (WSDL). What should you do to start the processes in Appian?',
        options: [
            'Create a default WSDL URL using process model UUID',
            'Expose process model as a web service',
            'Create a custom plug-in'
        ],
        correct: [1],
        explanation: 'Expose the process model as a web service to generate a WSDL endpoint for the external system.'
    },
    // 76 (domanda di match, la tratto con opzioni)
    {
        topic: 'Integration',
        type: 'multi',
        text: "Consider this POST request: https://www.example.com/suite/webapi/customer [ { id: '7', name: 'John Smith', DOB: '1980-02-12', firstPurchaseDate: '2023-03-12' } ] Match the values to the correct fields in the resulting http:request value {queryParameters, formData, body, url}",
        options: [
            'queryParameters: "id=7&name=John+Smith&DOB=1980-02-12&firstPurchaseDate=2016-03-12"',
            'body: [ { id: "7", name: "John Smith", DOB: "1980-02-12", firstPurchaseDate: "2023-03-12" } ]',
            'formData: [ id: "7", name: "John Smith", DOB: "1980-02-12", firstPurchaseDate: "2023-03-12" ]',
            'url: https://www.example.com/suite/webapi/customer'
        ],
        correct: [1, 3],
        explanation: 'In a POST request with JSON body, the data is in the body and the URL contains the endpoint. Query parameters and formData are not used in this scenario.'
    },
    // 77 (match, tratto come multi)
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Match each characteristic with appropriate type of log file. {Detail, Trace, Summary}',
        options: [
            'Summary: Written to once every five minutes and aggregates all the relevant events since the last line was logged into one set of metric',
            'Trace: Requires a greater and less predictable amount of disk space and may contain potentially sensitive human-entered data such as usernames',
            'Details: Written to once every hour and is enabled by default'
        ],
        correct: [0, 1, 2],
        explanation: 'All three statements correctly describe the log file types: Summary (every 5 min), Trace (detailed, sensitive), Details (hourly, default).'
    },
    // 78
    {
        topic: 'ACD201',
        type: 'single',
        text: "You're designing a report to show the total number of cases per month grouped by region. A synced record exists for the data source. Which design pattern is most appropriate in this case?",
        options: [
            'Use a!queryRecordType() with a!aggregationFields() to group the case creation date by region into a local variable. Pass the local variable value into the data input of a!columnChartField()',
            'Configure a!pieChartField() using a!pieChartConfig() with the case creation date as the primaryGrouping and the region as the secondaryGrouping',
            'Configure a!columnChartField() using a!columnChartConfig() with the case creation date as the primaryGrouping and the region as the secondaryGrouping'
        ],
        correct: [0],
        explanation: 'Use a!queryRecordType() with aggregation to get the grouped data, then pass to a!columnChartField() for display.'
    },
    // 79
    {
        topic: 'Integration',
        type: 'multi',
        text: "You're creating an integration object for your application. Which two statements are true about the limitations on the request body and the response body?",
        options: [
            'For the JSON (application/JSON) content type, the request body limit should not exceed 5MB excluding base64 data',
            'For converting binary to an Appian document, there is no limit for the response body',
            'For the Document (Auto-detect), there is no limit for the request body',
            'For the XML (application/xml) content type, the request body limit should not exceed 25MB excluding base64 data'
        ],
        correct: [0, 3],
        explanation: 'JSON request body limit is 5MB, XML is 25MB. Document types have size limits as well.'
    },
    // 80
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You are designing a database for a library. The book entities are {id, name, author}. Which Appian data types should you use for the book entities, respectively?',
        options: ['Number(integer), varchar(255), varchar(255)', 'Number(integer), Text, Text', 'Text, Text, Text'],
        correct: [1],
        explanation: 'Use Number(Integer) for id, and Text for name and author.'
    },
    // 81
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You need to design an editable grid to add and update questions for a given case. A case can have multiple questions, each with a reference code that can be updated by the user. The grid loops through a rule input ri!questions populated by rule!getQuestions(caseId: ri!caseId) in the parent interface and has an editable text field for changing the refCode field. Each reference code must be unique within a given case. Which validation method on the text field within the grid is most appropriate to ensure that the user-entered code is unique within a case?',
        options: [
            'a!localVariables( local!refCodes: index(ri!questions, "refCode",{}), if(contains(fv!item[refCode],local!refCodes), "Each code must be unique", "")',
            'a!localVariables( local!refCodes: index(rule!getQuestions(caseId: ri!caseId), "refCode",{}), if(contains(fv!item[refCode],local!refCodes), "Each code must be unique", "")',
            'a!localVariables( local!refCodes: index(ri!questions, "refCode",{}), if(contains(fv!item[refCode],remove(local!refCodes,fv!index)), "Each code must be unique", "")'
        ],
        correct: [2],
        explanation: 'To check uniqueness excluding the current row, remove the current item from the list of reference codes before checking.'
    },
    // 82
    {
        topic: 'ACD201',
        type: 'single',
        text: "You're building a new application to track job applications for a local health club. The owner wants to have one group of individuals perform the initial application review for completeness, a second group to manage the interview process, and a third group to make the actual hiring decisions. Which design element should be implemented to best support a memory efficient application?",
        options: [
            'Create an entity-backed record for each of the open positions',
            'Break up the application into subprocesses representing each of the different stages of the process to reduce memory use',
            'Create a synchronous process that accurately tracks a candidate\'s application from start to finish to ensure the hiring group has access to all the information necessary to make a decision'
        ],
        correct: [1],
        explanation: 'Splitting the process into subprocesses reduces memory usage by keeping each process short-lived.'
    },
    // 83
    {
        topic: 'Process',
        type: 'single',
        text: 'You need to assign a user input task to three groups of users, Group A, Group B, Group C. Each task form shares some common components with the following key differences: Group B will receive a task that includes an additional section, Group C will only view and enter data for one section. What should you do?',
        options: [
            'Within the process model, utilize an XOR gateway to conditionally select between the three different user input tasks',
            'Configure the version setting on the user input task node to conditionally display the correct form',
            'Utilize conditional logic on the form along with the showWhen parameter for interface components'
        ],
        correct: [2],
        explanation: 'Using a single form with conditional showWhen parameters is more maintainable than multiple task nodes or versions.'
    },
    // 84
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Your client wants to configure user authentication using single sign-on (SSO) in their cloud environment. Which two authentication types should you use to support this requirement?',
        options: ['LDAP authentication', 'SAML authentication', 'Basic authentication', 'OpenID Connect (OIDC)'],
        correct: [1, 3],
        explanation: 'SAML and OpenID Connect are the primary SSO authentication types supported in Appian cloud.'
    },
    // 85
    {
        topic: 'ACD201',
        type: 'single',
        text: 'A seamless user experience (UX) is important for an application so that a user does not feel like they are moving through different applications. Often when many developers are working on the same project all together, this can be a concern. How should you ensure that a seamless UX is maintained throughout the app?',
        options: [
            'Create reusable expression rules to ensure that the same rules are being used throughout',
            'Allow each developer to copy client provided mock-ups individually',
            'Create and add reusable interface components to the Design Library so that developers can quickly and easily use reusable interfaces'
        ],
        correct: [2],
        explanation: 'Using the Design Library for reusable interface components ensures consistency across the application.'
    },
    // 86
    {
        topic: 'ACD201',
        type: 'single',
        text: "You're creating an interface to display all the employees of a company on a staff list. You decide to use a!gridField() to create a user grid to display information from the company's AAA_Employee record, which has 42 fields relating to various employee information. To avoid cluttering the grid, you want to show six (6) fields on the grid. How should you optimize the interface?",
        options: [
            'Using a local variable, query the AAA_Employee record using a!queryRecordType(), without defining the six (6) fields that you require to show in the "fields" parameter to be used in the data parameter of a!gridField()',
            'Query the AAA_Employee record using a!queryRecordType(), defining the six (6) fields you required to show in the "fields" parameter to be used in the data parameter of a!gridField()',
            'Call the function a!forEach() in a local variable and query the AAA_Employee record for each employee separately using a!queryRecordType() to loop through all employees as defined by a constant to be used in the data parameter of a!gridField()'
        ],
        correct: [1],
        explanation: 'Specifying only the required fields in the query selection reduces data transfer and improves performance.'
    },
    // 87
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Your enterprise data contains many-to-many relationship. You have an Employee record type and a Project record type. Each project has a team of multiple employees, and a given employee can be on more than one project. How should you implement many-to-many relationships using record types?',
        options: [
            'Add a many-to-many relationship on the Employee Record',
            'Create a many-to-many relationship by creating a third record type to connect the existing two record types'
        ],
        correct: [1],
        explanation: 'Many-to-many relationships are implemented using a junction (associative) record type that links the two entities.'
    },
    // 88
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Which step should you perform to identify expression rules that have been causing or have caused performance issues in the past 30 days?',
        options: [
            'Monitor the runtime of all test cases',
            'Navigate to the Admin Console > Rule Performance tab',
            'Examine the application server log'
        ],
        correct: [1],
        explanation: 'The Rule Performance tab in Admin Console provides historical performance metrics for expression rules.'
    },
    // 89
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'What are two advantages of database normalization?',
        options: [
            'Minimize data redundancy',
            'Simplifying query statements to read data',
            'Enforcing data integrity',
            'Minimizing the number of tables that need to be created'
        ],
        correct: [0, 2],
        explanation: 'Normalization reduces data redundancy and enforces data integrity through proper table structures.'
    },
    // 90 (match, tratto come multi)
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Match each metric with the high-level summary card from the Health Dashboard where you will find information on the metric. {Process Model Metrics, Record Sync Status, Process Activity, Appian Design Guidance}',
        options: [
            'Process Model Metrics: Number of process models with high-memory usage',
            'Record Sync Status: Number of synced record types',
            'Process Activity: Number of Completed Processes',
            'Appian Design Guidance: Process models containing warnings'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'All four statements correctly match the metric to the Health Dashboard card.'
    },
    // 91 (sequenza)
    {
        topic: 'Testing',
        type: 'multi',
        text: 'Your development team has selected Jenkins as a Continuous Integration (CI) system to integrate testing of Appian into your overall testing strategy. What should you do to set up automated testing of expression rules using Jenkins? Write the sequence.',
        options: [
            'Create and test a web API with the a!testRunStatusForId() function',
            'Create and test a web API with the a!startRuleTestsApplications() function',
            'Create and test a web API with the a!testRunResultForId() function',
            'Create a new Appian application for "Continuous_Integration"',
            'Test the end-to-end functionality of the created web APIs'
        ],
        correct: [3, 1, 2, 0, 4],
        explanation: 'Sequence: Create CI app, create web API to start rule tests, create web API to get results, create web API to get status, then test end-to-end.'
    },
    // 92
    {
        topic: 'ACD201',
        type: 'multi',
        text: "You're conducting a code review and notice that some accessibility features are missing on the interfaces. Which two UX best practices should be followed to align with accessibility requirements?",
        options: [
            'Use rich text items to act as headers for structuring interfaces',
            'Apply a label value for all fields when the label position is "Hidden"',
            'Indicate the hierarchy of sections with a heading tag in addition to label sizes (for example: "H1")',
            'Use a single rich text icon with "POSITIVE", "NEGATIVE" styling to indicate statuses'
        ],
        correct: [1, 2],
        explanation: 'Accessibility best practices include providing labels for all fields (even hidden) and using proper heading tags for structure.'
    },
    // 93
    {
        topic: 'ACD201',
        type: 'multi',
        text: "You are the administrator of your insurance company's case management system. You need to limit insurance agents to only those clients to which they have been assigned. Which two statements must be true for one way to configure Record-Level security for the customer record?",
        options: [
            'A new record-level security rule should be created using the Users found in fields option to specify that if a user is found in the "assignedAgent" field (user type), then they can see their cases',
            'Data sync should be enabled',
            'A condition should be added to the record level security rule to specify which cases specifically named agents can access',
            'Record-level security means agents must have permission to view the record type and permission to edit the records'
        ],
        correct: [0, 2],
        explanation: 'Record-level security rules using "Users found in fields" and conditions to filter specific cases are the correct approach.'
    },
    // 94 (match, tratto come multi)
    {
        topic: 'Process',
        type: 'multi',
        text: "You're constructing an end-to-end application. You need to determine the configuration necessary to implement your requirements. Match each requirement to the appropriate configuration {Deadlines, Execution Options, Assignment, Escalation, Exception, Scheduling}.",
        options: [
            'Escalation: A reminder email must be sent to the task assignees after 24 hours to remind them to complete the task.',
            'Scheduling: A task should not be initiated until 30 minutes after the last node completes.',
            'Assignment: A task is initiated on a weekend must be assigned to a group of administrators.',
            'Exception: An incomplete task must expire after 72 hours and be deleted from the user\'s task list.'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'All statements correctly map to their respective configuration types.'
    },
    // 95
    {
        topic: 'Integration',
        type: 'multi',
        text: "You're designing an integration object with JSON (application/JSON) as the content type. Which two data types can be automatically converted to JSON in Appian?",
        options: [
            'Primitive Data Types',
            'Appian Custom Data Type',
            'Base64 documents inline with JSON',
            'HTML file type'
        ],
        correct: [0, 1],
        explanation: 'Primitive data types and CDTs are automatically serialized to JSON. Base64 and HTML require explicit handling.'
    },
    // 96
    {
        topic: 'ACD201',
        type: 'multi',
        text: "You're establishing a Health Check schedule for your department. Which two statements should you consider when implementing Health Checks?",
        options: [
            'Run Health Checks during regular business hours in production to identify issues during heavy usage',
            'Configure a weekly Health Check cadence for the development environment',
            'Run a Health Check at least once a month in production as part of server and application monitoring'
        ],
        correct: [1, 2],
        explanation: 'Health Checks should be run regularly (weekly for dev, monthly for production) but not during peak hours to avoid impact.'
    },
    // 97
    {
        topic: 'ACD201',
        type: 'single',
        text: 'Which section of the Interface Performance View explains the contribution towards the overall evaluation time of the current function, rule, or parameter?',
        options: ['Parameters and Direct Children', 'Descendant Rules', 'Precedent Functions and Rules'],
        correct: [2],
        explanation: '"Precedent Functions and Rules" shows the contribution of each function/rule to the overall evaluation time.'
    },
    // 98
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You need to configure Appian User Authentication against an external directory server. The requirement is to use the same corporate logon information without single sign-on (SSO). Which authentication type should you use?',
        options: ['PIEe user authentication', 'LDAP authentication', 'OpenID Connect authentication'],
        correct: [1],
        explanation: 'LDAP authentication allows using corporate credentials without SSO.'
    },
    // 99
    {
        topic: 'Process',
        type: 'single',
        text: "You're designing a process used to notify multiple users of marketing campaigns. These campaigns occur infrequently, but are sent out to the hundreds of customers that are stored in the app. How should you best design your process model to send the emails whilst using a common email process model (CMN_SendEmail), to be most performant?",
        options: [
            'Set "CMN_SendEmail" as an asynchronous "Subprocess" node and select "Automatically run multiple instances of this node" for all the users that are on the mailing list',
            'Set "CMN_SendEmail" as a synchronous "Subprocess" node and select "Automatically run multiple instances of this node" for all the users that are on the mailing list',
            'Set "CMN_SendEmail" as a "Start Process" process node and select "Automatically run multiple instances of this node" for all the users that are on the mailing list'
        ],
        correct: [0],
        explanation: 'Asynchronous subprocess with MNI is most performant for sending emails to multiple recipients concurrently.'
    },
    // 100
    {
        topic: 'ACD201',
        type: 'multi',
        text: "You're inspecting the items in a deployment package for issues you might have missed during package preparation. Which two objects can be in your list of missing precedents for an application?",
        options: ['Group Type Custom', 'Document', 'Connected System', 'System Knowledge Center'],
        correct: [0, 2],
        explanation: 'Custom Group Types and Connected Systems are common missing precedents when deploying applications.'
    },
    // 101
    {
        topic: 'Process',
        type: 'multi',
        text: 'What are three ways to optimize the memory usage of a process model?',
        options: [
            'Minimize the use of subprocesses in the model',
            'Use activity class parameters instead of process variables when possible',
            'Delete completed process instances',
            'Use synchronous subprocesses instead of asynchronous'
        ],
        correct: [1, 2],
        explanation: 'Using activity class parameters and deleting completed instances reduce memory. Minimizing subprocesses is not necessarily an optimization; it depends on design.'
    },
    // 102
    {
        topic: 'Integration',
        type: 'single',
        text: "You're developing an Appian application and an external system needs to upload a document to Appian. What should you create to allow the other system to upload the document to Appian?",
        options: ['A GET web API object', 'A POST integration object', 'A POST web API object'],
        correct: [2],
        explanation: 'A POST web API is required for an external system to upload documents to Appian.'
    },
    // 103
    {
        topic: 'Integration',
        type: 'single',
        text: 'Your customer wants to build an application that includes a file upload component. If the uploaded file is a multimedia file (for example: .MP4, .MOV or .WAV), the customer wants these uploaded to Microsoft SharePoint instead. What is the best way to achieve this requirement?',
        options: [
            'Use the out-of-the-box Appian Connected System as it has a pre-built connected system to SharePoint to provide a guided experience for designers to send and receive data',
            'Use the out-of-the-box Appian Connected System, but since it does not have any pre-built connected systems, you will need to use either a HTTP or OpenAI Connected System to connect with SharePoint',
            'Develop a connected system plug-in given SharePoint has an extensive API that cannot easily be resolved using the Appian out-of-the-box Connected System'
        ],
        correct: [0],
        explanation: 'Appian provides a pre-built SharePoint Connected System that can be used for file uploads to SharePoint.'
    },
    // 104
    {
        topic: 'ACD201',
        type: 'single',
        text: "You're refining a story for a centralized distribution centre that extends the current application by allowing inventory managers to review orders. These orders are created through a record action that various workshops access from a shared Appian site. Which consideration best suits this use case?",
        options: [
            'How will you handle errors resulting from a failed integration as a result of the workshops using an external system to place orders?',
            'What are the personas that will be utilizing this application so that an Appian groups structure can be developed and maintained?',
            'What components have already been built relating to this piece of functionality so that you can reuse them and speed up development?'
        ],
        correct: [2],
        explanation: 'Reusing existing components is a key consideration to accelerate development and maintain consistency.'
    },
    // 105
    {
        topic: 'Process',
        type: 'single',
        text: 'A Quality Control (QC) review process for a factory that allows a QC technician to review each production line regularly. You have the following requirements: Each technician has 45 minutes to complete their review. After 45 minutes, the review will expire. Expired reviews are flagged as "Review Expired". "Review Expired" flags trigger an email notification to a supervisor, and the review data should not be saved. The technician can save a Draft copy of their review before submission and can come back to work on it later if necessary. Once a review is "Submitted", the review data is saved to the database. What should you implement?',
        options: [
            'An exception timer that skips QC review task after 45 minutes, which flows to a Send Email node configured to notify a supervisor',
            'An escalation that sends an email after 45 minutes to the supervisor',
            'A send message event which sends an email after 45 minutes to the supervisor'
        ],
        correct: [0],
        explanation: 'An exception timer is needed to skip the task and trigger the expiration flow (notification and flagging).'
    },
    // 106
    {
        topic: 'ACD201',
        type: 'single',
        text: 'The synced record Task has a self-referential relationship defined in the column parentTaskId. There is a many-to-one record relationship between the id and parentTaskId called parentTask. For a given task ID, you need to return the task name and parent task name. What should you do?',
        options: [
            'Use a!queryRecordType() filtered on the task id once to return the task name and parent task ID. Query the record again to return the parent task name',
            'Use a!queryRecordType() with a filter on the task id, with fields specified to return recordType!Task.name and recordType!Task.parentTask.name',
            'Create a sync-time custom field on the Task record called parentName. Specify the field to return in the query field selection.'
        ],
        correct: [1],
        explanation: 'Using a!queryRecordType() with a filter on the task ID and specifying both fields returns both names in a single query.'
    },
    // 107
    {
        topic: 'Process',
        type: 'single',
        text: "You're creating a process model that will serve as the case creation workflow. Your requirements: This process captures input from the user before executing a series of unattended subprocess nodes. Each subprocess performs extended data processing which is dependent on output from each of the previous nodes. An activity chained task node is displayed asking the user if they'd like to create another case. What should you do?",
        options: [
            'Configure the subprocess nodes to run asynchronously and set the inputs to pass as reference to enable data sharing',
            'Combine the separate subprocesses into one synchronous subprocess and place it in between each user input task',
            'Add an AND gate after the first user input task and place the synchronous subprocess nodes on a parallel path'
        ],
        correct: [0],
        explanation: 'Asynchronous subprocesses with reference inputs allow parallel execution and data sharing while keeping the main process responsive.'
    },
    // 108
    {
        topic: 'ACD201',
        type: 'single',
        text: 'You need to implement a field-level audit functionality on the application data, and then display a log of the changes made over time to the users. What should you do?',
        options: [
            'Create Audit tables and create stored procedures on each transaction table to compare and save the modified data',
            'Create utility process model(s) to insert a new version of the modified data for the same record into the transaction tables on modification',
            'Create Audit tables and create triggers on each transaction table to record modifications into the Audit table'
        ],
        correct: [2],
        explanation: 'Database triggers on transaction tables that insert change records into audit tables are the most efficient and reliable method.'
    },
    // 109 (match, tratto come multi)
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'Match each object type with the statement that best describes how security is set during the creation of the object type {Security is inherited by default, Security "cannot" be inherited, Security may be inherited if a parent is specified}.',
        options: [
            'INHERITED BY DEFAULT: Constants',
            'CAN NOT INHERIT: Record Types',
            'CAN NOT INHERIT: Web APIs',
            'MAY BE INHERITED: Integrations',
            'INHERITED BY DEFAULT: Rule Folders'
        ],
        correct: [0, 1, 2, 3, 4],
        explanation: 'All statements correctly describe the inheritance behavior: Constants inherit by default, Record Types and Web APIs cannot inherit, Integrations may inherit if parent specified, Rule Folders inherit by default.'
    },
    // 110 (sequenza)
    {
        topic: 'Testing',
        type: 'multi',
        text: "You're executing a performance test of the client's application. You notice that server-side resources are at high-to-critical operating levels. What should you do to troubleshoot this issue? Set the right sequence.",
        options: [
            'Analyse the performance of the application by reviewing system resources, application logs, and process reports',
            'Validate the test scenario by validating test script behaviour matches performance acceptance criteria',
            'Validate that non-test loads are not occurring in the environment during the test, by looking for other users logged in active processes not run by test, etc.',
            'Investigate if the system has cascading errors or unexpected process flows',
            'Analyse system resources and perform sizing exercise to validate if more resources or configuration changes are required'
        ],
        correct: [1, 3, 0, 2, 4],
        explanation: 'Sequence: Validate test scenario, investigate errors, analyse performance, validate non-test loads, then perform sizing.'
    },
    // 111
    {
        topic: 'ACD201',
        type: 'multi',
        text: 'A view is created with the primary table PERSON and is joined using a left join with the APPOINTMENT table on the column "PERSON_ID". There is a one-to-many relationship between the PERSON and APPOINTMENT tables. A Custom Data Type (CDT) and a data store entity have been created based on this view, with the primary key being "PERSON_ID". Review the data presented in the PERSON and APPOINTMENT tables: Which two statements are true when the following query entity is executed? a!queryEntity( entity: cons!ABC_PERSON_APPOINTMENT_VIEW_DSE, query: a!query( logicalExpression: a!queryLogicalExpression( operator: "AND", filters: { a!queryFilter(field: "STATUS", operator: "=", value: "New"), a!queryFilter(field: "PERSON_ID", operator: "=", value: "1101") }), pagingInfo: a!pagingInfo(startIndex: 1, batchSize: 1, sort: a!sortInfo(field: "PERSON_ID") ), fetchTotalCount: true() )',
        options: [
            'Appian makes one more query to the database (other than the actual query to fetch the data) to get the totalCount based on the applied filters and paging info.',
            'Appian makes one more query to the database (other than the actual query to fetch the data) to get the totalCount based on the applied filters',
            'Result totalCount is 1',
            'Result totalCount is 3'
        ],
        correct: [1, 3],
        explanation: 'Appian executes a separate count query based on filters (not paging) to get totalCount. The totalCount for PERSON_ID=1101 and STATUS="New" is 3 (since there are 3 appointments with "New" status for that person).'
    },
    // 112 (sequenza)
    {
        topic: 'Process',
        type: 'multi',
        text: "You're creating a process to update specific fields in a list of records and you save the updated records to the database. You're given the following considerations: Execution time, Process instance memory usage, Process execution engine load balancing. Based on these performance metrics, rank the options from best to worst.",
        options: [
            'Configure a subprocess node which calls a process model to update an individual record. Configure the MNI setting to run one instance for each record in the list and to start at the same time',
            'Within a script task, utilize an a!forEach() loop to update each record in the list',
            'Configure a synchronous subprocess node which calls a process model to update an individual record. Loop over the subprocess node for each record in the list',
            'Configure a start process node which calls a process model to update an individual record. Configure the MNI settings to run one instance for each record in the list and to start at the same time'
        ],
        correct: [3, 0, 1, 2],
        explanation: 'Start Process with MNI (best) > Subprocess with MNI > Script task loop > Synchronous subprocess loop (worst) for performance and memory.'
    },
    // 113 (match, tratto come multi)
    {
        topic: 'ACD201',
        type: 'multi',
        text: "You're reviewing application performance-related issues reported by users. As part of this activity, you need to check interface performance, expression rules performance, and process model performance. Match each statement to the option that best describes where you can view this information. {Process Sizing sheet in the Health Check, Process Model Metrics Tab in the Monitoring View, Default Process Model Optimizations Metrics Report, Default Process Optimization Metrics Report}",
        options: [
            'Realtime average process instance memory: Process Sizing sheet in the Health Check',
            'Average lag time and average completion time of the tasks in a process: Process Model Metrics Tab in the Monitoring View',
            'Actual lag time and actual completion time of the tasks in a process: Default Process Optimization Metrics Report',
            'Potential issues in a process model: Default Process Model Optimizations Metrics Report'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'All statements correctly match the metric to the location where it can be found.'
    },
    // 114
    {
        topic: 'ACD201',
        type: 'multi',
        text: "You're developing a case management application. Currently, users can view a list of all cases designed using a!forEach() loop from a record query. Users can navigate to the case summary page which shows the case details in a two (2) column layout. Users are also able to update the case details. During the last round of UAT testing, users reported that the tool was not intuitive to use. Match each feedback comment to suggested UI/UX improvements.",
        options: [
            'Use \'a!recordActionField()\' to display relevant related actions in a grid interface',
            'Use \'a!isNativeMobile()\' to dynamically manage screen width',
            'Use stackWhen in \'a!columnsLayout()\'',
            'Use sections, box layouts, or rich text components to structure your interfaces',
            'Use record-backed read only grids to display your data and manage paging automatically'
        ],
        correct: [0, 1, 2, 4],
        explanation: 'Improvements include using recordActionField for actions, isNativeMobile for mobile responsiveness, stackWhen for column stacking, and record-backed grids for performance.'
    }


];