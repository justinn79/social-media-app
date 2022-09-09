# Social Media Application

A MERN application where users can create and display posts containing the uploaders name, title, message, and image on the main page

## Built with:
* React - Frontend framework for the UI
* MongoDB - Database to store the information of the post inputted by the user
* Express - Used to create the routing of the application based on client requests
* Node - Back-end javascript runtime environment
* Redux - Used for state management

## Live Demo
<a href="https://socialmedia-application.netlify.app/">Click here for a Live Demo!</a>

## Local Setup:
```
Within the terminal at the root directory of this project:

cd client - Navigate into the client folder
npm install - Install the dependencies within the client folder
npm start - Running the client

-----Server is already running on Heroku----------

If you would like to run the application within your own database:

cd server - Navigate into the server folder
npm install - Install the dependencies within the server folder
Edit the url variable within client/src/api/index.js to point to the backend route ("http://localhost:5000/posts")
Create a .env file within the server folder with a PORT number and a CONNECTION URL to your database
npm start - Running the server
```
