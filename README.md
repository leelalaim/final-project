# Project dev gallery

[![Netlify Status](https://api.netlify.com/api/v1/badges/08f479bf-ac87-43ca-aa68-ce75a25b8e44/deploy-status)](https://app.netlify.com/sites/dev-gallery/deploys)

Replace this readme with your own information about your project.

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

It started with the idea of wanting to have a plattform to share deployed projects in the Bootcamp. All the information is available on either GitHub or sometimes in Slack, but it's not very easily accessible. You have to click through users repo's to get to their README-files to find the deployed links. With this website we hoped to make sharing easier. We also wanted users to be able to sort projects to be able to find those relevant to them. You can sort by Stack, BootCamp, Week and User.

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

We began planning the projects in Trello with task-cards, in Miro with a project-board and a pitch done in Notion. These different tools were updated throughout the project when we didn't know how to apply different features we came up with. 

At first we set up a basic backend to sign up and login users as well as display all the projects uploaded to the website. After this we began building the frontend the way we wanted it. We created three reducers to handle different parts of the state: user, projects and ui.
User-reducer handles the authentication of the website.
Project-reducer handles that filtering and displaying of the projects.
UI-reducer only handles loading.

The next big task was the filtering....

When filtering was done styling and authentication remained. The authentication was very similiar to our previous project with the exception of how we chose to require authentication for different paths. We wanted the upload function to be sing-in required as well as the delete functionallity (so you could only delete your own projects)


## View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
