# Project Title

Zendesk coding challenge

## Summary

This is the project build on Node JS and React. 

### Backend: 
- Base on microservices architecture, the server works like an API Gateway, it is not only working with Zendesk service but also work with other services when scaling up. The clients will communicate with this API gateway and never know the microservices behind. 
- It can slow down our service but it will help front end side more easy to communicate with the REST API and easy to manage traffic and detect when the services down.
- This server talks directly with Zendesk API, for pagination, Zendesk already has it own so I just implement it dynamic endpoint from the client. Ex: http://localhost:4000/tickets?per_page=10&page=2, the server will take 2 queries per_page & page and change it to https://tony1106.zendesk.com/api/v2/tickets?per_page=10&page=2.

.

    ├── src                    
    │   ├── core                    # Load and config all needed library like express, MongoDB, logger,... 
    │   ├── api                     # Create axios instance for each service like: Zendesk
    │   ├── routes                  # Register the modules
    │   ├── modules                 # Place where contains all the microservices 
    │   ├   └── Zendesk             # Zendesk module
    │   ├       └── Controller      # Receive request and communicate with Zendesk services.
    │   ├       └── Model           # Communicate with internal database for tracking and detect service fail.
    │   ├       └── Route           # Create endpoint for service.
    │   └── ...                 
    └── test
    └── ...
![alt text](https://i.imgur.com/KL2bugC.png "Software architecture")
### Front end: 
- With high scalability, React and Redux is a good choice. In this project, I didn't use Redux for state management but for real project, It's definitely a great idea to start with. 
- This project I just create-react-app bootstrap to start the project with add-on libraries: react-router-dom, react-toasts, postcss-loader, node-sass.
- For styling, I use SCSS and component module to style the component, it will help to scale up the project more easily in the future. Also, I use Bootstrap to take advantage with their library.

### Testing: 
I was underestimating the time for making the backend & front end from scratch and the complexity and huge work when doing React Test. So in this project, I can't make 100% test coverage. 
- Test library: Jest, Enzyme, supertest.
- I do unit test for both server and client.
- Server: test all helper function and API test by suppertest.
- Client: test some component and their behaviour with Enzyme



## How to start
Clone the project:

```
git clone git@github.com:Tony1106/ZenDesk-Coding-Challenge.git
```

Install root dependency:

```
npm install
```
Install server & client dependency:

```
npm run installServer
npm run installClient
```
Create and paste the line below to .env file at /server directory

```
DB_PORT=4000
DB_NAME=ZENDESK_CODING_CHALLANGE
ZENDESK_USERNAME=buiminhtien06@gmail.com
ZENDESK_PASSWORD=123456
```
Start the project:
At root directory:

```
npm run start
```

## What I learn from this project

- Learn about microservices architecture and create an API Gateway.
- Learn about testing library ```suppertest``` to test the API.
- Learn about Enzyme and Jest to test React Component.



## Authors

- **Tony Bui** --StackOverflow-429 reps--
- Stack: https://stackoverflow.com/users/9694174/tony-bui

- Linkedin: https://www.linkedin.com/in/tienbui06/

- Git: https://github.com/Tony1106
- Phone: 0449 701 109
