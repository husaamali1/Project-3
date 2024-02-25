# Project-3
# Infinite Wheels

My website Infinite Wheels functions as an online car shop. Here, you can explore a diverse range of cars, read detailed information about each one, and navigate easily. The design is kept simple with the inclusion of pictures (not yet implemented) and user-friendly clicks, making the process of buying or selling a car effortless. Infinite Wheels serves as a meeting place for car enthusiasts, providing a platform to connect and facilitate easy transactions.

## Deployment
Access Infinite Wheels at [Infinite Wheels](https://infinite-wheels-b5e907416190.herokuapp.com/).

## Technologies Used
- **Frontend:** React
- **Backend:** JavaScript, with Mongoose for database management, JsonWebToken for security, dotenv for managing environment variables, and React Router Dom for page navigation.

## Project Duration
The project was developed from Thursday, December 7th, to Sunday, December 17th, as a solo endeavor.

## Brief
The goal was to create a fully functional application, integrating custom APIs to support CRUD operations (Create, Read, Update, Delete). This required leveraging JavaScript and various packages such as mongoose, jsonwebtoken, dotenv, and React Router Dom.

## Planning and Implementation
I will now show you how I have planned my backend. I started by drawing a wireframe to help me visualise my files and now I can go ahead and implement everything. It really helped me a lot getting through this project. 
[image upload]
After completing my backend, I had already drafted my wireframe for the client side. I was fully prepared to commence the creation process and witness my implementation come to fruition.
[image upload]
This is my wireframe for the frontend, making the structuring of my page much more straightforward. 

My initial page was the homepage where I displayed my list of cars. The "carSingle" path allows users to click on a specific car to view further details. The "portfolio" page requires registration and login for access. On the "carSingle" page, I included options to update and delete the car, although I acknowledge that I need to work on hiding these buttons for users who do not own the car, a priority for future improvements.

The wireframe for my portfolio page involved meticulous planning, encompassing three pages. Initially, I focused on structuring the portfolio page, where users can list their cars. 

Clicking on a listed car leads to another path where users can update or delete their car. The "carSingle" page offers these options only if the user owns the car; otherwise, unauthorised users could cause chaos by modifying or removing other people's listings. To address this, I need to ensure that the buttons are hidden to prevent users from encountering 401 errors indicating unauthorised access.
[image upload] [image upload]

## Development Process
Day 1: Setting Up the Backend
I started my project by setting up the backend. I created the models for cars and users using MongooseDB and made sure my index.js was configured correctly so my server would work and display my webpage. I also set up .env files for both the frontend and backend to securely manage configuration settings. This how I implemented them: [image upload] [image upload]


Day 2: Database Seeding and User Functions
The next day, I focused on populating my database. I wrote scripts in my seed.js file to add data and delete old entries. Then, I moved on to the controllers folder and worked on the user functions for registration, login, and portfolio management. I made sure all the routes were functioning properly by testing them with Insomnia, correcting any errors I found along the way. This is how i set out my seed.js file: [image upload]

This is how i got my Register, Login and Portfolio functions to work: [image upload]


	
Day 3: Frontend Infrastructure
On the third day, I started setting up my frontend by creating a client folder with Vite. This set me up with all the necessary files like src and package.json. I organised my code into components, styles, and utilities folders. I then built and tested critical components such as AllCars, CarCreate, CarSingle, and Nav, as well as an error page for user navigation issues.


Day 4: Authentication and Error Handling
I dedicated this day to debugging and enhancing the user experience, especially on the singleCar page. Most of my time was spent on the registration and login components, ensuring the security and functionality of user authentication.


Day 5: Styling and Update Page
I applied Bootstrap to style my application, focusing first on the navigation and logo. Although I found Bootstrap challenging initially, it became easier as I worked more with it. After styling, I built the update page, which was crucial for users to edit and delete listings. This how i started getting handy with bootstrap and how I used it style and make navbar and logo have a clean look: [image upload]

  
Day 6: Portfolio Page Challenges
I tackled the portfolio page, which turned out to be quite the attempt. It was crucial for me to position the update and delete buttons correctly and display each user's listings accurately. By the end of the day, I had fixed all the errors and even managed to link back to the singleCar page for edits. This is how my portfolio ended up at the end: [image upload]

This is how I needed to have my singlePage to look so everything i implemented was in place: [image upload]

Day 7: Final Touches on the Portfolio
On this day, I fine-tuned the portfolio page's styling and worked out some last-minute changes in the registration feature. After confirming that my application met all the MVP requirements, I introduced a DisplayCars component that optimised the car display process. This code below will show you what will be on my getAllCars page this made it less messy for my getAllCars component which made my code more clean and easier to read: [image upload]



Day 8: Implementing Active User Features
I spent the entire day working on active user functionality. It was challenging and took a significant amount of time to resolve, but with my instructor's help, I succeeded. Completing this project on my own, meant to be a group effort, was an incredibly rewarding learning experience. This how it looked like for my active users for them to login and logout: [image upload]



Day 9: Security and Preparing for Launch
The final day was dedicated to testing and securing the application's routes.
I faced persistent issues with the image upload feature and ultimately decided to postpone it to ensure the rest of the application was polished and ready for launch.


## Key Wins
[image upload]
I was most satisfied with this particular piece of code because I crafted a function where, once you're logged in, the register and login buttons are replaced by logout and portfolio options. Conversely, when you log out, the register and login options reappear. Additionally, I'm quite pleased with my progress in mastering Bootstrap to enhance the aesthetics of my page. While it's not perfect, I'm content with the learning process. Initially, Bootstrap was challenging, but diving into this project has significantly simplified its usage for me.

## Challenges
The most intriguing challenges I encountered involved resolving the 401 and 404 errors. They led me to conduct research and review class recordings to gain a better understanding. Once I grasped the meaning of these errors, I knew where to investigate. I systematically experimented and played around to identify their origins. Another issue was some of my functions getting executed. This taught me the importance of refraining from executing functions that are not actively in use. I learned to proceed methodically, addressing one component at a time to ensure everything operates correctly.


## Key Learnings
This project provided an incredible learning experience, and I gained extensive knowledge. Working on it alone allowed me to enhance my problem-solving skills, plan comprehensively, and significantly boosted my confidence in full-stack development. Initially, I had doubts about completing it independently, but I successfully finished the project. While there are several features, such as image implementation, that I would have liked to include but couldn't, it's something I plan to address in the future. I used this project as a means to overcome daily challenges, putting in maximum effort. When faced with difficulties, I made sure to give my best and sought support when needed.

## Current Bugs
I've identified a bug in my webpage where the edit and delete buttons are not hidden for users who are not the owners. This is the only known bug to my knowledge at the moment.

## Future Improvements
For future improvements, I aim to enhance my styling further. While there have been improvements compared to my last project, I want to refine it even more. Additionally, I acknowledge the need to improve my time management, as I am dissatisfied that I couldn't incorporate images in a timely manner for this project.
