const TOPICS = {
    AI: { label: 'AI in Appian', color: '#4f7fff' },
    DocCenter: { label: 'DocCenter', color: '#7b5ea7' },
    Process: { label: 'Process Models', color: '#06b6d4' },
    Integration: { label: 'Integrations', color: '#22c55e' },
    Testing: { label: 'Testing', color: '#f59e0b' },
    RPA: { label: 'RPA / Robots', color: '#ef4444' },
    ACD201: { label: 'ACD201 Exam Bank', color: '#ff6b35' }
};

// ============================================================
// ALL QUESTIONS (1-148)
// ============================================================
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
    }
];

let questions = [];
let current = 0;
let selected = [];
let submitted = false;
let score = { all: { correct: 0, total: 0 } };
let history = [];
let timerInterval = null;
let seconds = 0;
let currentTopic = 'all';
let wrongOnly = false;
let wrongIndices = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('total-q-count').textContent = ALL_QUESTIONS.length;
    document.getElementById('multi-count').textContent = ALL_QUESTIONS.filter(q => q.type === 'multi').length;
    Object.keys(TOPICS).forEach(k => { score[k] = { correct: 0, total: 0 }; });
    showHome();
});

function showHome() { show('home'); hide('quiz'); hide('results'); hide('review'); stopTimer(); updateSidebarScores(); }
function goHome() { showHome(); }
function showResults() { show('results'); hide('quiz'); hide('review'); stopTimer(); }
function showReview() { show('review'); hide('results'); renderReview(); }
function show(id) { document.getElementById(id).style.display = 'block'; }
function hide(id) { document.getElementById(id).style.display = 'none'; }

function filterTopic(topic) {
    currentTopic = topic;
    document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-' + (topic === 'all' ? 'all' : topic)).classList.add('active');
}

function startQuiz() {
    const doShuffle = document.getElementById('opt-shuffle').checked;
    const doTimer = document.getElementById('opt-timer').checked;
    const doWrongOnly = document.getElementById('opt-wrong-only').checked;

    wrongOnly = doWrongOnly;
    let pool = ALL_QUESTIONS;
    if (currentTopic !== 'all') pool = pool.filter(q => q.topic === currentTopic);
    if (doWrongOnly && wrongIndices.length > 0) {
        pool = pool.filter((_, i) => wrongIndices.includes(ALL_QUESTIONS.indexOf(_)));
    }
    if (pool.length === 0) { alert('No questions match the current filter.'); return; }

    questions = doShuffle ? shuffle([...pool]) : [...pool];
    current = 0;
    history = [];
    Object.keys(score).forEach(k => { score[k] = { correct: 0, total: 0 }; });

    hide('home'); show('quiz'); hide('results'); hide('review');
    if (doTimer) { seconds = 0; document.getElementById('timer').style.display = 'inline'; startTimer(); }
    else { document.getElementById('timer').style.display = 'none'; }
    renderQuestion();
}

function startQuizWrongOnly() { wrongOnly = true; document.getElementById('opt-wrong-only').checked = true; startQuiz(); }

function startTimer() {
    stopTimer();
    timerInterval = setInterval(() => {
        seconds++;
        const m = String(Math.floor(seconds / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        document.getElementById('timer').textContent = m + ':' + s;
    }, 1000);
}
function stopTimer() { if (timerInterval) { clearInterval(timerInterval); timerInterval = null; } }

function renderQuestion() {
    submitted = false;
    selected = [];
    const q = questions[current];

    document.getElementById('progress-bar').style.width = Math.round((current / questions.length) * 100) + '%';
    document.getElementById('progress-text').textContent = `${current + 1} / ${questions.length}`;
    document.getElementById('q-number').textContent = `Question ${current + 1} of ${questions.length}`;

    const t = TOPICS[q.topic];
    document.getElementById('q-category').innerHTML =
        `<span style="background:${t.color};width:8px;height:8px;border-radius:50%;display:inline-block"></span> ${t.label}`;

    document.getElementById('unknown-tag').style.display = q.unknown ? 'inline-flex' : 'none';

    const scenEl = document.getElementById('q-scenario');
    if (q.scenario) { scenEl.textContent = q.scenario; scenEl.style.display = 'block'; }
    else scenEl.style.display = 'none';

    const noteEl = document.getElementById('q-note');
    if (q.type === 'multi') { noteEl.textContent = '⚡ Select ALL correct answers'; noteEl.style.display = 'block'; }
    else noteEl.style.display = 'none';

    document.getElementById('q-text').textContent = q.text;

    const optEl = document.getElementById('options');
    optEl.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    q.options.forEach((opt, i) => {
        const type = q.type === 'multi' ? 'checkbox' : 'radio';
        const label = document.createElement('label');
        label.className = 'opt-label';
        label.setAttribute('data-index', i);
        label.innerHTML = `<input type="${type}" name="opt" value="${i}"><span class="opt-letter">${letters[i]}</span><span>${opt}</span>`;
        // Assicuriamoci che il listener sia applicato correttamente
        label.addEventListener('click', function (e) {
            // Previeni il comportamento predefinito e gestisci il click
            e.preventDefault();
            toggleOption(i);
        });
        optEl.appendChild(label);
    });

    document.getElementById('btn-submit').style.display = 'inline';
    document.getElementById('btn-submit').disabled = true;
    document.getElementById('btn-next').style.display = 'none';
    document.getElementById('explanation').style.display = 'none';
}

function toggleOption(idx) {
    if (submitted) return;
    const q = questions[current];
    if (q.type === 'multi') {
        if (selected.includes(idx)) selected = selected.filter(i => i !== idx);
        else selected.push(idx);
    } else {
        selected = [idx];
    }
    // Aggiorna UI
    document.querySelectorAll('.opt-label').forEach((el, i) => {
        el.classList.toggle('selected', selected.includes(i));
    });
    document.getElementById('btn-submit').disabled = selected.length === 0;
}

function submitAnswer() {
    submitted = true;
    const q = questions[current];
    const correct = q.correct;
    const isCorrect = arraysEqual(selected.slice().sort(), correct.slice().sort());
    const globalIdx = ALL_QUESTIONS.indexOf(q);

    score['all'].total++;
    score[q.topic].total++;
    if (isCorrect) { score['all'].correct++; score[q.topic].correct++; }
    else { if (!wrongIndices.includes(globalIdx)) wrongIndices.push(globalIdx); }

    document.querySelectorAll('.opt-label').forEach((el, i) => {
        const isCorrectOpt = correct.includes(i);
        const isSelectedOpt = selected.includes(i);
        if (isCorrectOpt && isSelectedOpt) el.classList.add('correct');
        else if (!isCorrectOpt && isSelectedOpt) el.classList.add('wrong');
        else if (isCorrectOpt && !isSelectedOpt) el.classList.add('reveal-correct');
        el.style.pointerEvents = 'none';
    });

    const expEl = document.getElementById('explanation');
    expEl.style.display = 'block';
    document.getElementById('result-badge').innerHTML = isCorrect
        ? '<div class="result-badge ok">✓ Correct</div>'
        : '<div class="result-badge ko">✗ Incorrect</div>';
    document.getElementById('exp-text').textContent = q.explanation || '';

    history.push({ q, selected: [...selected], wasCorrect: isCorrect });
    document.getElementById('btn-submit').style.display = 'none';
    document.getElementById('btn-next').style.display = 'inline';
    updateSidebarScores();
}

function nextQuestion() {
    current++;
    if (current >= questions.length) showFinalResults();
    else renderQuestion();
}

function showFinalResults() {
    hide('quiz'); show('results'); stopTimer();
    const total = score['all'].total;
    const correct = score['all'].correct;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

    const ring = document.getElementById('score-ring');
    ring.style.setProperty('--pct', pct + '%');
    ring.style.background = `conic-gradient(${pct >= 70 ? 'var(--green)' : pct >= 50 ? 'var(--yellow)' : 'var(--red)'} ${pct}%, var(--border) 0)`;
    document.getElementById('score-pct').textContent = pct + '%';
    document.getElementById('results-title').textContent = pct >= 80 ? '🎉 Excellent!' : pct >= 60 ? '👍 Good job!' : '📚 Keep practicing!';
    document.getElementById('results-sub').textContent = `${correct} correct out of ${total} questions`;

    const grid = document.getElementById('results-grid');
    grid.innerHTML = Object.keys(TOPICS).map(k => {
        const s = score[k];
        if (!s || s.total === 0) return '';
        const p = Math.round((s.correct / s.total) * 100);
        return `<div class="r-card">
      <div class="topic-name">${TOPICS[k].label}</div>
      <div class="topic-score-big" style="color:${TOPICS[k].color}">${s.correct}/${s.total}</div>
      <div style="font-size:12px;color:var(--muted)">${p}%</div>
      <div class="topic-bar"><div class="topic-bar-fill" style="width:${p}%;background:${TOPICS[k].color}"></div></div>
    </div>`;
    }).join('');
}

function renderReview() {
    const list = document.getElementById('review-list');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    list.innerHTML = history.map((h, idx) => {
        const q = h.q;
        const icon = h.wasCorrect ? 'ok' : 'ko';
        const iconChar = h.wasCorrect ? '✓' : '✗';
        const t = TOPICS[q.topic];
        const optsHtml = q.options.map((opt, i) => {
            const isCorrect = q.correct.includes(i);
            const wasSelected = h.selected.includes(i);
            let cls = '';
            if (isCorrect) cls = 'correct';
            else if (wasSelected) cls = 'wrong-selected';
            if (!isCorrect && !wasSelected) return '';
            return `<div class="review-opt ${cls}">${letters[i]}: ${opt} ${isCorrect ? '✓' : '✗'}</div>`;
        }).join('');

        return `<div class="review-item">
      <div class="review-header" onclick="toggleReview(${idx})">
        <div class="review-icon ${icon}">${iconChar}</div>
        <div class="review-q">
          <span style="font-size:11px;color:${t.color};margin-right:6px">${t.label}</span>
          ${q.text.length > 90 ? q.text.substring(0, 90) + '…' : q.text}
        </div>
        <span style="color:var(--muted);font-size:12px">▼</span>
      </div>
      <div class="review-body" id="rev-body-${idx}">
        <div style="padding-top:10px">${optsHtml}</div>
        ${q.explanation ? `<div class="review-exp">💡 ${q.explanation}</div>` : ''}
      </div>
    </div>`;
    }).join('');
}

function toggleReview(idx) {
    const body = document.getElementById('rev-body-' + idx);
    body.classList.toggle('open');
}

function updateSidebarScores() {
    const fmt = (k) => {
        const s = score[k];
        if (!s || s.total === 0) return '–';
        return `${s.correct}/${s.total}`;
    };
    document.getElementById('sc-all').textContent = fmt('all');
    Object.keys(TOPICS).forEach(k => {
        const el = document.getElementById('sc-' + k);
        if (el) el.textContent = fmt(k);
    });
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function arraysEqual(a, b) { return a.length === b.length && a.every((v, i) => v === b[i]); }