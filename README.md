# Social-Network-API
   ![License](https://img.shields.io/badge/License-MIT-blue.svg)
 
   ## Description
   The Social Network API is a Node.js and Express.js backend leveraging MongoDB with Mongoose to power a lightweight social media experience. Users can post thoughts, react to friends’ posts, and manage their friend connections—replicating core social networking functionality. By using a NoSQL database, the API efficiently stores and retrieves unstructured data at scale. All CRUD operations for users and thoughts are fully implemented with RESTful routes, while nested routes handle reactions and friendships. End-to-end testing is performed in Insomnia to ensure reliable API behavior.
 
   ## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [Technologies](#technologies)
   - [Walkthrough Video](#walkthrough-video)
   - [URL Link](#url-link)
   - [Contributing](#contributing)
   - [Contributors](#contributors)
   - [Tests](#tests)
   - [License](#license)
 
   ## Installation
   
   1. Git clone: git@github.com:https://github.com/jyotikanwarhr/Social_network_api
 
   2. Navigate to the project directory: cd Social-Network-API
 
   3. Right click the root package.json file and click open in integrated terminal
 
   4. Inside the terminal install the dependencies with the command: npm i
 
   5. Start MongoDB locally in the terminal by running the command: mongod, or via MongoDB Atlas
 
   6. After dependencies are installed run the application with the command: npm start
 
   ## Usage
   To test the API:
 
   1. Run the application using npm start in your terminal.
 
   2. Use Insomnia, Postman or any API client to make GET, POST, PUT, and DELETE requests to the available endpoints.
 
   3. The API supports:
 
     - Creating, reading, updating, and deleting users and thoughts
     - Adding and removing friends
     - Reacting to and removing reactions from thoughts
 
   4. This application is not deployed; all testing is done locally via an API client.
 
   ## Technologies
  ![Express.js Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
 
  ![MongoDB Badge](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
 
  ![Mongoose Badge](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
 
  ![TypeScript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
 
  ![npm Badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
 
   ## Walkthrough Video
   A demo of the application can be found at the following link: 
 
   ## URL Link
   There is no URL link to this application.
   
   ## Contributing
   No contributions are needed for this project.
 
   ## Contributors
   Thank you to the professor and TA's for all you help with this challenge!
 
   1. Joem Casusi - Tutor
   2. Quentin Jones - TA
 
   ## Tests
 
   1. Make sure the latest version of mongoDB is installed, check by using the command: mongo --version in your terminal
 
   2. Run the server at the package JSON in your root level inside your terminal run the command: npm start
 
   3. Open Insomnia and test routes like:
 
     - GET localhost:3001/api/users
     - POST localhost:3001/api/thoughts
     - PUT localhost:3001/api/users/userId
     - DELETE localhost:3001/api/users/userId
 
   4. Verify proper JSON responses and database updates:
   
     - If route requires information under your http or localhost:3001 address click body
     - Then for structured select JSON
     - Inside this body make it a object by using curly braces {}
     - Fill the information that is require inside the object like so 
     {
 	"username": "Jyoti",
 	"email": "test@email.com"
     }
 
   ## License
   This project is licensed under the MIT license.
 