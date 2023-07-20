# Software Requirements | v1

## Vision

### What is the vision of this product?

**Product Vision**:

We envision an application that empowers Helen House to seamlessly manage its member data and daily operations. Our goal is to transform the way this nonprofit interacts with its members, making check-in, registration, and data management not only efficient but also secure and insightful.

We believe in the potential of technology to significantly enhance the crucial work done by nonprofits such as Helen House, providing a safe and supportive space for the LGBTQ+ community in rural areas. By streamlining data intake and registration, our application will free up the valuable time of staff members, allowing them to focus more on the people they serve and less on paperwork.

At the heart of our vision is the protection of sensitive information. Our application will leverage state-of-the-art security protocols to ensure the highest level of data protection, meeting and exceeding both state and federal guidelines for data privacy.

Simultaneously, our application will offer intuitive data access and analysis tools, enabling Helen House to understand their members' needs better, track important trends, and provide hard data when applying for grants and funding.

Ultimately, our vision is to provide a robust, secure, and user-friendly application that aids Helen House in their mission to serve their community, fostering a safe, inclusive, and supportive environment for every individual who walks through their doors.


### What pain point does this project solve?

This product addresses several pain points that currently plague Helen House's operations:

1. **Inefficient Data Entry and Management**: One of the primary challenges Helen House staff currently face is the excessive time spent on manual data entry and management. Transferring information from paper sign-in sheets to a digital format is time-consuming and prone to human error. Our application would automate this process, saving staff considerable time that could be better spent on their core responsibilities of serving the community.

2. **Incomplete Data Collection**: The current paper sign-in sheet system often results in incomplete data as members may not consistently use it or may not provide all the needed information. This incomplete data can skew insights and undermine efforts to secure more funding. Our digital solution will encourage more consistent data input by making the check-in process simpler and faster. It also allows for required fields to ensure all necessary information is captured.

3. **Difficulty Accessing and Analyzing Data**: Extracting insights from a paper-based system or a basic digital spreadsheet can be a challenging task. Our product will include an interface that makes data querying and report generation straightforward, helping Helen House to generate robust reports to aid their strategic planning and advocacy efforts.

4. **Lack of Data Security**: Paper-based systems and basic digital databases may not offer the level of security required for the sensitive information Helen House collects. Our application prioritizes data security, ensuring that member data is kept confidential and secure, in line with regulatory requirements.

5. **Inability to Effectively Advocate for Grants**: Without comprehensive, reliable data, advocating for further funding or grants can be a complex task. The insights derived from our application's data analysis tools will provide compelling, data-driven narratives to support grant applications and funding requests.

In essence, this product is designed to alleviate the administrative burden on the staff, streamline the member check-in process, and leverage collected data in a way that can drive Helen House's mission forward.


### Why should we care about your product?

We should care about this product for several pivotal reasons:

1. **Operational Efficiency**: The application reduces time spent on data entry, freeing up resources for Helen House staff to focus on supporting the LGBTQ+ youth community.

2. **Data Accuracy**: With the digitized system, data collection becomes more complete and consistent, improving the quality of member insights.

3. **Grant Support**: The product's ability to generate data-driven reports can strengthen grant applications, contributing to the sustainability and growth of the nonprofit's programs.

4. **Data Security**: Given the sensitive nature of the collected data, the robust security measures of our product ensure member information is protected.

Overall, this tool is crucial for enhancing operational efficiency, promoting data-driven decision-making, and ensuring the nonprofit's longevity and impact.

****

## Updated Scope (In/Out)

**IN - What will your product do:**

- **Member Registration Data Management:** The product will manage and organize member registration data in a cloud-based database. This will include securely storing and indexing member demographics, contact information, and any specific needs.

- **Admin Query Functionality:** The product will provide a backend interface for the admin to query the collected data. Admins will be able to generate reports on different demographic parameters and access individual member information.

- **Check-In/Check-Out Data Management:** The system will record and manage data from members' check-in/check-out activities, including time, date, and the mood reported by the members.

- **Data Security:** The product will ensure that the data is securely stored and accessed, with strict authentication and authorization protocols to protect sensitive information.

- **Front-End User Interface:** The product will now include a basic front-end user interface for the member check-in and admin page, designed for user-friendly navigation and basic interaction with the system's back-end functionalities.

**OUT - What will your product not do:**

- **Chat Functionality**: The product won't encompass a chat or communication system. As a different team is already developing this feature, it lies beyond the current project scope. However, a link might be established to integrate their development into our system in future updates.

- **Mobile Application:** The deployment of a mobile app version of the software is not within the current project's scope. This element could be considered for future development, depending on user needs and project feasibility.

- **Additional Features:** Other features that may have been mentioned previously, such as advanced analytics, integration with other systems, or more sophisticated elements of the front-end interface, are not within the current project's scope. The priority for this stage is building out the core functionality for data management and initiating the development of a basic user interface.

***

## Minimum Viable Product
*What will your MVP functionality be?*

The MVP (Minimum Viable Product) for this project will include the following functionality:

1. **Secure Database**: A secure, cloud-based database that meets regulatory requirements, which will serve as the foundation for all collected user data.

2. **Member Registration**: The MVP will replace the existing 4 page membership form with a secure, digitized solution for member intake. This will include basic CRUD (Create, Read, Update, Delete) operations to ensure the data can be effectively managed.
    - **Authentication and Authorization**: The system will implement security policies to ensure that only authorized administrators can access the member intake data.

3. **Check-In/Check-Out System**: Replacing the existing paper-based sign-in system, the MVP will digitally manage member check-ins and check-outs, capturing key data like time, date, and reported mood of members.

4. **Basic Reporting and Querying Capabilities**: Admins will have the capability to perform basic queries and generate reports from the member registration and check-in/check-out data, enabling them to generate insights from the data.

5. **Front-End User Interface**: The MVP will include a user-friendly and visually appealing front-end interface, designed to provide a delightful user experience while interacting with our system's functionalities.

This MVP focuses on establishing a secure, user-friendly, and effective digital solution for managing member data and operations at Helen House, setting a solid foundation for future feature expansion.

## Stretch
*What stretch goals are you going to aim for?*

1. **Custom Mobile Styling**: If time and resources permit, we aim to build a custom styling that is responsive to various screen sizes including mobile devices and tablets. The goal is to ensure the interface provides a seamless user experience across various platforms while maintaining its user-friendly nature.

2. **Enhanced Excel Integration**: We plan to extend the integration with Excel, facilitating the ability to pull data from the database into a familiar format for more in-depth analysis. This would not only provide a visual exploration of the data but also potentially leverage Excel's built-in data analysis tools for better insights and decision-making.

These stretch goals, while not essential to the functionality of our MVP, would greatly enhance the user experience and the utility of the system for Helen House staff.

***

## Functional Requirements
*List the functionality of your product.*

Based on the provided MVP and project scope, here's the core functionality of our product:

1. **Admin User Management**:
    - An admin can create and delete user accounts in the system.
    - An admin can update user profile information, such as access rights.

2. **Member Registration Data Management**:
    - An admin can input new member information from the intake form into the system.
    - An admin can update existing member information in the system.
    - An admin can delete member records as needed.

3. **Data Querying and Reporting**:
    - An admin can query demographic information of members, based on various parameters.
    - An admin can generate reports based on these queries.

4. **Daily Youth Count Management**:
    - An admin can record member check-in data in the system.
    - An admin can update check-in data as needed.
    - An admin can view aggregated data on member check-in activities.

These functions are designed to digitize and streamline Helen House's data management process, while also ensuring that sensitive member information is securely handled.


## Data Flow

To illustrate the data flow within the application for this initial phase of the product, here's a "happy path" scenario from the time an admin begins using the app to when they're done:

  1. Admin Login: An admin starts by logging into the system using their unique credentials. The system authenticates the user and authorizes them to access the specific functionalities according to their admin level.

  2. Member Registration: When a new member arrives, the admin inputs the member's details into the member intake form in the application. The data entered includes the member's demographic information, contact details, and health concerns.

  3. Data Storage: Once the form is submitted, the system processes the data and stores it securely in the cloud-based database. It also indexes the data to facilitate quick retrieval and querying in the future.

  4. Member Check-In: When a member checks in at the center, the admin enters the member's check-in data into the system, including time, date, and reported mood. The system updates this information in the database linked to the member's profile.

  5. Data Query and Reporting: The admin can query the database to retrieve specific data sets or demographic information. The system processes the query request, retrieves the relevant data from the database, and presents it in a readable format for the admin. The admin can also generate reports based on the queried data.

  6. Check-Out and Logoff: When the member checks out, the admin updates this information in the system. The check-out data is processed and stored in the database. Once the admin has finished their tasks, they can safely log out of the system.

Please note that the above scenario describes an ideal interaction with the system in this initial phase of product development that is focused on backend functionality. Exception handling, such as dealing with incorrect data input or unauthorized access attempts, is also an essential part of the data flow but is not described in this "happy path" scenario. This also excludes any additional functionality when the front end is build out in the next phase of product development.

## Non-Functional Requirements

Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

**Non-functional Requirement 1: Security**

Security is a paramount non-functional requirement for our application, as it will be handling sensitive data, including personal identifiable information (PII) and health-related data. We will ensure the security of the application through several mechanisms:

- **Authentication**: Only authorized users will have access to the application. User credentials will be stored securely using hashing techniques to prevent unauthorized access.
- **Authorization**: Different users will have different levels of access rights, limiting what data they can see or modify.
- **Data Encryption**: All data transmitted between the client application and the server will be encrypted to prevent data interception.
- **Regular Auditing**: The system will maintain logs of data access and modifications for auditing purposes, which will help detect any potential security breaches and hold users accountable for their actions.

**Non-functional Requirement 2: Usability**

Usability refers to how user-friendly and intuitive an application is. Our application will aim to be highly usable, minimizing the learning curve for the staff at Helen House, many of whom may not be technologically advanced. Here's how we'll implement usability:

- **Intuitive Design**: The application will have a clear and straightforward interface, with all major features easily accessible. The design will be minimalistic to avoid clutter and confusion.
- **User Guidance**: The system will provide tool-tips and guidance messages to help users understand how to perform tasks within the application.
- **Error Messages**: If something goes wrong or if the user makes an error, the application will provide clear and helpful error messages to guide the user in resolving the issue.
- **Responsive Layout**: The application will be designed to work well on various devices and screen sizes, ensuring a consistent user experience regardless of how users access the system.

**Non-functional Requirement 3: Maintainability**

Maintainability is the ease with which an application can be maintained to isolate and correct defects or their cause, repair faults, meet new requirements, make future maintenance easier, or cope with a changed environment. For our application, we will ensure maintainability through:

- **Modular Design**: We will develop the application following a modular approach. This means breaking the system down into separate, interchangeable components that each fulfill a clear, single purpose. This design will make it easier to update or modify one part of the application without affecting others.
- **Code Quality**: We will follow best coding practices, including comprehensive commenting and proper naming conventions, to make it easier for any developer to understand and modify the code.
- **Documentation**: We will create extensive documentation, including system design documents and user manuals, which can be referenced for future maintenance or enhancement tasks.

**Non-functional Requirement 4: Testability**

Testability refers to the degree to which an application supports testing in a given test context. This includes the application's ability to be effectively and efficiently tested at different levels (unit, integration, system) and its capability to provide adequate testing feedback. Here's how we will implement testability:

- **Unit Testing**: Our codebase will be structured in a way that makes it easy to write and run unit tests for individual components. These tests will ensure that each part of the application behaves as expected.
- **Integration Testing**: We will also design our application to support integration testing, ensuring that the different components work well together.
- **Test Automation**: We will use test automation tools to execute tests, compare the actual outcomes to predicted outcomes, set up test preconditions, and other test control and reporting functions.
- **Error Logging**: Our application will have robust error logging and reporting to help quickly identify, replicate, and fix issues identified during the testing process.