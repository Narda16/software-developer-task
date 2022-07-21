# User Management system :technologist:

This is my solution to the software developer task from Mistral.

## Application's main features:

  - View a list of all available users
  - Edit existing user
  - Delete user
  - Create a new user
  - Assign permissions to the user
  - View assigned permissions to the user

Upon starting the application, the User List page should show up. Table on that page is supporting:

  - ordering from ascending to descending
  - ordering from descending to ascending
  - filtering
  - pagination (10 users per page)

## Used Technologies

  1. React - frontend
  2. NodeJs/Express - backend
  3. MongoDB - database

## Used Frontend Libraries

  1. create-react-app - create react app
  2. @reduxjs/toolkit and react-redux - global state management
  3. react-router-dom - routing functionality
  4. react-show-more-text
  5. axios - fetching data
  6. @mui/material - style
  7. @mui/icons-material - style icons
  8. @mui/x-data-grid - table grid

## Used Backend Libraries

  1. cors - cross origin communication
  2. dotenv - storing secret data
  3. express - node framework
  4. mongoose - communications with MongoDB
  5. bcrypt - password security platform
  6. nodemon - automatically restarting the node application

## Running Application

To get a local copy up and running follow these simple steps:

 1. Clone the repository

    `https://github.com/Narda16/software-developer-task.git`

 2. Install NPM packages

  - Go to client folder and run `npm install`
  - Go to server folder and run `npm install`

 3. Seeding database

  - Go to server folder and run `npm run seed`

  Note: With every new seed previous data from database will be erased.

  4. Start the project
   
   - Go to server folder and run `npm start`
   - Go to client folder and run `npm start`