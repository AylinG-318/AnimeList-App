---
Anime List App: 
----
Netlify Link: https://boisterous-bubblegum-05dc60.netlify.app/
Heroku Link: https://anime-list-27.herokuapp.com/api/users

Third Party API Utilized: 
Jikan: https://docs.api.jikan.moe/#tag/anime

---
About the App
---
This anime list app, currently titled "Out of Touch", is a website to keep track of anime titles. It is a functional CRUD app, albeit one that could use major improvements. Currently, a user of the website is able to create a user, edit a user's details, delete a user, and add to their list. 

Adding to a user's list is the main feature of the application --
Going to either the "Top 50", "Random Anime", or "Search" sections of the website will provide the user with a method to add anime to their list.
What must first be done is to select a user. After that, a user can add an anime to their list. 
Once that is done, the page must be refreshed. 

The project's major limitation is the lack of a global state. This hinders several vital areas of the project, and imposes unfair limitations on the user. 
Redux implementation will be a future (and most immediate) goal for the project. 

---
Wireframing
---
![image](https://www.figma.com/file/0zx7vZQ4nzEBNsKG3C7POq/Untitled?node-id=0%3A1)
![image](https://www.figma.com/file/0zx7vZQ4nzEBNsKG3C7POq/Untitled?node-id=2%3A2)

---
Technologies Used: 
---
Node.js
MongoDB/Mongoose
Express
React

---
Dependencies
---
Backend:
dotenv
nodemon
cors
morgan

Frontend:
react-router-dom
react-bootstrap
axios

---
Features (MVP)
---
React router
Minimal Boostrap
Full CRUD operation
Third Party API utilization

---
Upcoming Features
---
Redux Implementation - For multiple additions to a user's list from one API call.
User Authorization - To prevent vandalism of other user's pages. 
Mature Content Filter - To give users some ease of mind while searchinng for anime or getting random selections. 
Better CSS Implementation - Current implementation is subpar. 

---
Endpoints for CRUD
---
GET all users: https://anime-list-27.herokuapp.com/api/users
GET user by ID: https://anime-list-27.herokuapp.com/api/users/:id
POST Create a user: https://anime-list-27.herokuapp.com/api/users
PUT Update user: https://anime-list-27.herokuapp.com/api/users
DELETE user by ID: https://anime-list-27.herokuapp.com/api/users

---
Schema
---

const User = new Schema( 
    {
        username: {type: String, required: true},
        email: {type: String, required: true},
        listArray: {type: Array, required:true, default: []}
    },
    {timestamps: true}
);

(Quite simple, isn't it? The third party API does most of the work--- It takes the id numbers listed in "listArray" and displays our data that way.) 

