# Project Title

Zendesk coding challenge

## Getting Started

This is the project build on Node JS and React. 

Backend: 
- Base on microservices architecture, the server works like an API Gateway, it is not only work with Zendesk service but also work with other service when scale up. The clients will communicate with this API gateway and never know the microservices behind. 
- It can slow down our service but it will help front end side more easy to communicate with the REST API and easy to manage traffic and detect the services down.
- This server talk direcly with Zendesk API, for pagination, Zendesk already has it own so I just implement it dynamic endpoint from client. Ex: http://localhost:4000/tickets?per_page=10&page=2, the server will take 2 query per_page & page and change it to https://tony1106.zendesk.com/api/v2/tickets?per_page=10&page=2.

`
---src
--------core
--------api
--------modules
---------------Zendesk
----------------------Controller
----------------------Model
----------------------Route
`

Front end: 
- With high scability, React and Redux is a good choice. In this project, I didn't use Redux for state management but for real project, It would be a great ideas to start with. 


![img](https://i.imgur.com/Q5oo3Ae.png)

Clone the project:

```
git clone git@github.com:Tony1106/robotToy.git
```

Install dependency:

```
npm install
```

Play with the robot in the terminal:

```
npm run play
```

## How to play

### Place the robot on the table

- The table size set the default at 5x5.
- Input the position and the direction of the robot on the table.
- If the robot gets the wrong input or it not on the table, it will automatically set the default position of the robot is {x: 0, y: 0, f: North}.

### Move the robot

- Simply move the robot by your input.
- Hit the ENTER to move the robot 1 unit in the same direction of the robot.
- Input UP, DOWN, LEFT, RIGHT to move the robot 1 unit UP, DOWN, LEFT, RIGHT. It will change the direction and position of the robot.
- It will ignore the movement if the wrong input.
- It will only change the direction if the robot hit the wall.

## Running the tests

Most of the function already cover by unit testing.
There is some complex movement to test the robot as well.
Run the test:

```
npm run test
```

## Functionality

- `const Table = require('./index')`
- `const robot = new Table(5,5)`: create a table 5x5
- `create()`: create the table for the print() on the console log.
- `place(x,y,f)`: place the robot on the table take a position: x,y and direction f.
- `move(direction)`: move the robot by the direction. The argument `direction` can take UP, DOWN, LEFT, RIGHT or NORTH, SOUTH, WEST, EAST to move the robot or just leave it empty to move the robot 1 unit as its direction.
- `report()`: print the position of the robot to the screen.
- `print()`: print the whole table out the see the robot. The robot will have the symbol: `^ > < ⌄` the show its direction. Require to run the `create()` first.

![img](https://i.imgur.com/tbtITnZ.png)

## Add more function to the robot

To make the robot more functionality, simply just add more method in the `component` folder and register a new method at the `index.js` by using prototype:

```
Table.prototype.method = require("./components/mothod");
```

## Authors

- **Tony Bui** --StackOverflow-429 reps--
- Stack: https://stackoverflow.com/users/9694174/tony-bui

- Linkedin: https://www.linkedin.com/in/tienbui06/

- Git: https://github.com/Tony1106
- Phone: 0449 701 109
