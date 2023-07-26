## Project: Helen House Application - Frontend

### Authors

- [Francisco Sanchez](https://github.com/c0d3cisco)
- [Heather Holcomb](https://github.com/holcombheather)
- [Katherine Lee](https://github.com/KatiLee)
- [Malik Sadiki-Torres](https://github.com/MalikTorres)
- [Nick Mullaney](https://github.com/nickmullaney)
- [Ike Steoger](https://github.com/IkeSteoger)

### Problem Domain

The Helen House Application aims to solve the need for a secure and efficient database application that can handle large amounts of demographic data and simplify the process of data collection for Helen House, a rural LGBTQ+ youth center. By providing easy querying and reporting functionalities, this application aims to digitize their current paper-based data collection, enhance data accuracy, improve accessibility, and facilitate the generation of insights for grant applications. Additionally, the application includes a feature that allows users to check-in and check-out, automatically populating relevant data into the database.

### Usage of Auth0

- Auth0, a third-party authentication and authorization service, is a crucial component of the Helen House Application, responsible for managing user authentication and access control.
- Leveraging Auth0's capabilities, the application handles user registration, login, and user session management in a secure manner.
- Auth0 supports various authentication methods, including social login with popular platforms such as Google and Facebook, as well as traditional username/password-based authentication.
- Utilizing Auth0 allows the application to offload the complexities of authentication, security best practices, token management, and identity verification to a dedicated service, ensuring a robust and secure authentication process.
- Moreover, Auth0's flexibility enables easy integration with various identity providers, offering users the option to choose from multiple login options, thereby enhancing user experience and accessibility.
- To manage user permissions and restrict access to specific features or data based on user roles and levels of authorization, the application implements Auth0's role-based access control.

### Links and Resources

- [Trello Board](https://trello.com/invite/b/KisbuKmx/ATTI8636c0c7dd7edb956f96bd8d8b9555f89A203B63/agile-board-template-trello) for project tracking and management.
- [Figjam Planning](https://www.figma.com/file/3gpv4BCuYd3Oa3jwod3ynt/Helen-House-Application?type=whiteboard&node-id=0-1&t=64W7tHiuBvOmf8GS-0)
- [Team Agreement](https://github.com/MissionDrivenDevs/helen-house-backend/blob/dev/teamAgreement.md) to define collaboration guidelines and expectations within the team.
- [GitHub Actions CI/CD](https://github.com/MissionDrivenDevs/helen-house-frontend/actions) for continuous integration and deployment automation.
- [Requirements](./requirements.md) to document the project's functional and non-functional requirements.
- [Auth0](https://auth0.com/) (Third-party authentication and authorization service) for handling user authentication securely.
- [Backend Repo](https://github.com/MissionDrivenDevs/helen-house-backend)

### Important Information

Email Used: helenhouse867@gmail.com
Password: Helenhouse@2023

#### Front End

Front-End Hosted through Render.com

Front-End URL:[https://helen-house-frontend.onrender.com/](https://helen-house-frontend.onrender.com/)

#### Back End

Back-End Hosted through Render.com

Back-End URL: [https://helen-house-backend-v3uq.onrender.com](https://helen-house-backend-v3uq.onrender.com)

#### Auth0

Auth0 Hosted through Auth0.com

Auth0 URL: [https://manage.auth0.com/dashboard/us/dev-3c6lxg8hjpdu1ria/applications](https://manage.auth0.com/dashboard/us/dev-3c6lxg8hjpdu1ria/applications)
### Collaborators

- We extend our gratitude to the Helen House Project Team for giving us the opportunity to work on this meaningful project aimed at supporting LGBTQ+ youth.
- Special thanks to Tylene, Ryan, Sara, and Amanda for their valuable collaborative input throughout the development process.
- We also appreciate ChatGPT for assisting us with code corrections and testing features during the project's development.

### Setup

#### How to Initialize/Run Your Application

To set up the application, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm i` in the project's root directory.
3. Rename the `.env.sample` file to `.env` and make any configuration changes required for your environment.
4. Start the application by running the command `npm start`.

#### Tests

To run the tests for the application, follow these steps:

1. After installing the dependencies using `npm i`, run the command `npm test`.

#### UML

![UML](./assets/uml.png)

## Detailed Component Overview and Interactions:

1. **Frontend**:
   - The frontend serves as the user interface of the application, allowing users to interact with the system.
   - It is built using web technologies such as HTML, CSS, and JavaScript, and renders the user interface elements.
   - Users interact with the frontend through forms, buttons, and navigation elements.

2. **Backend**:
   - The backend, built using technologies like Node.js and Express.js, handles business logic, data processing, and interactions with the database.
   - It receives incoming requests from the frontend through APIs and responds with the necessary data or actions.
   - The backend implements the application's core functionalities, such as user authentication, data validation, and database operations.

3. **Database**:
   - The database stores all the application's data, including user information, demographic data, and check-in/check-out records.
   - It can be implemented using various database systems, such as MySQL or MongoDB, depending on the project's requirements.
   - The backend communicates with the database to store and retrieve data as needed by the frontend and performs CRUD operations.

4. **APIs (Application Programming Interfaces)**:
   - APIs define the communication protocols that allow the frontend and backend to interact seamlessly.
   - The backend exposes a set of APIs that the frontend can call to perform specific actions or retrieve data from the server.
   - APIs ensure secure and efficient data exchange between the frontend and backend.

5. **User Interface (UI)**:
   - The UI, designed using web technologies like HTML and CSS, provides users with a visually appealing and user-friendly interface.
   - It captures user input, validates it when necessary, and presents data to users in a readable format.
   - The frontend renders the UI based on the data received from the backend, ensuring a smooth user experience.

6. **Authentication and Authorization**:
   - The authentication and authorization component manages user identity verification and access control to the application's features.
   - Auth0, a third-party service, handles user registration, login, and session management securely.
   - Auth0 provides various authentication methods, including social login and traditional username/password-based login.
   - Additionally, it supports role-based access control, allowing the application to restrict user access based on their roles and permissions.

## Interaction Between Components:

1. **User Interaction with Frontend**:
   - Users interact with the frontend's user interface by filling out forms, clicking buttons, and navigating through different sections of the application.

2. **Frontend to Backend Communication**:
   - When a user interacts with the frontend, the frontend makes API calls to the backend, sending data or requesting specific actions.

3. **Backend Business Logic and Database Interaction**:
   - Upon receiving requests from the frontend, the backend processes the data, applies business logic, and interacts with the database.

4. **Database Storage and Retrieval**:
   - The database stores all application data, and the backend communicates with it to perform CRUD operations and retrieve data requested by the frontend.

5. **Backend to Frontend Communication**:
   - After processing requests and obtaining the required data, the backend sends a response back to the frontend.

6. **Authentication and Authorization Flow**:
   - When a user attempts to access certain parts of the application or perform specific actions, the frontend sends authentication data to the backend.
   - The backend verifies the user's identity and checks their authorization level based on their roles and permissions to allow or deny access to certain features.
