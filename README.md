# :seedling: myFlix API

myFlix Client is the frontend-side of a movies web application. The application provides users with access to information about different movies, their directors and the movie genre. Users are able to sign up, update their personal information, create a list of their favorite movies and remove movies from their favorite list.

## :speech_balloon: User Stories

- As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I’ve watched or am interested in.  

- As a user, I want to be able to create a profile so I can save data about my favorite movies.

## :key: Key Features 

### Main View

- Returns a list of ALL movies to the user (each listed item with an image, title and description)

- Sorting and filtering

- Ability to select a movie for more details

### Single movie view

- Returns data (description, genre, director, image) about a single movie to the user

- Allows users to add a movie to their list of favorites

### Login view

- Allows users to log in with a username and password

- Registration view

- Allows new users to register (username, password, email, birthday)

### Genre view

- Returns data about a genre, with a name and description

### Director view

- Returns data about a director (name, bio)

### Profile view

- Allows users to update their user info (username, password, email, date of birth)

- Allows existing users to unregister

- Displays favorite movies

- Allows users to remove a movie from their list of favorites

## :hammer_and_wrench: Built With 

- JavaScript

- Node.js

- Express

- MongoDB

## :page_with_curl: Technical Requirements

- The API must be a Node.js and Express application.  

- The API must use REST architecture, with URL endpoints corresponding to the data operations listed above. 

- The API must use at least three middleware modules, such as the body-parser package for reading data from requests and morgan for logging.

- The API must use a “package.json” file. 

- The database must be built using MongoDB.  

- The business logic must be modeled with Mongoose.  

- The API must provide movie information in JSON format.  

- The JavaScript code must be error-free.   

- The API must be tested in Postman.  

- The API must include user authentication and authorization code.  

- The API must include data validation logic.  

- The API must meet data security regulations.  

- The API source code must be deployed to a publicly accessible platform like GitHub.  

- The API must be deployed to Heroku.

## :man_technologist: Get Started

Download the repository on your machine 
```
https://github.com/Popol2411/movie_app.git
```
Install MongoDB
```
npm install mongodb
```
Start the server
```
node index.js
```
#### Endpoints tested with [Postman](https://www.postman.com/) :computer:

Documentation can be found here :point_right: https://github.com/Popol2411/movie_app/blob/main/public/documentation.html

#### Deployment to [Heroku](https://www.heroku.com/) :card_index_dividers: 

#### Documentation with [JSDocs](https://jsdoc.app/) :memo:

## :rocket:
