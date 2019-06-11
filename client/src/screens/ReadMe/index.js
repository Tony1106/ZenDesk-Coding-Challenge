import React from "react";
//Use tool: Convert Readme file to JSX
export default function ReadMe() {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 id="project-title" className>
          Project Title
        </h1>
        <p className>Zendesk coding challenge</p>
        <h2 id="summary" className>
          Summary
        </h2>
        <p className>This is the project build on Node JS and React. </p>
        <h3 id="backend-" className>
          Backend:{" "}
        </h3>
        <ul className>
          <li className>
            Base on microservices architecture, the server works like an API
            Gateway, it is not only working with Zendesk service but also work
            with other services when scaling up. The clients will communicate
            with this API gateway and never know the microservices behind.
          </li>
          <li className>
            It can slow down our service but it will help front end side more
            easy to communicate with the REST API and easy to manage traffic and
            detect when the services down.
          </li>
          <li className>
            This server talks directly with Zendesk API, for pagination, Zendesk
            already has it own so I just implement it dynamic endpoint from the
            client. Ex:{" "}
            <a
              href="http://localhost:4000/tickets?per_page=10&page=2"
              className
            >
              http://localhost:4000/tickets?per_page=10&amp;page=2
            </a>
            , the server will take 2 queries per
            <em className>
              page &amp; page and change it to{" "}
              <a
                href="https://tony1106.zendesk.com/api/v2/tickets?per"
                className
              >
                https://tony1106.zendesk.com/api/v2/tickets?per
              </a>
            </em>
            page=10&amp;page=2.
          </li>
        </ul>
        <p className>.</p>
        <pre className>
          <code className>
            ├── src{"                    "}
            {"\n"}│{"   "}├── core{"                    "}# Load and config all
            needed library like express, MongoDB, logger,... {"\n"}│{"   "}├──
            api{"                     "}# Create axios instance for each service
            like: Zendesk{"\n"}│{"   "}├── routes{"                  "}#
            Register the modules{"\n"}│{"   "}├── modules{"                 "}#
            Place where contains all the microservices {"\n"}│{"   "}├{"   "}└──
            Zendesk{"             "}# Zendesk module{"\n"}│{"   "}├{"       "}
            └── Controller{"      "}# Receive request and communicate with
            Zendesk services.{"\n"}│{"   "}├{"       "}└── Model{"           "}#
            Communicate with internal database for tracking and detect service
            fail.{"\n"}│{"   "}├{"       "}└── Route{"           "}# Create
            endpoint for service.{"\n"}│{"   "}└── ...{"                 "}
            {"\n"}└── test{"\n"}└── ...
          </code>
        </pre>
        <p className>
          <img
            alt="alt text"
            title="Software architecture"
            src="https://imgur.com/KL2bugC"
            className
          />
          ### Front end: - With high scalability, React and Redux is a good
          choice. In this project, I didn't use Redux for state management but
          for real project, It's definitely a great idea to start with. - This
          project I just create-react-app bootstrap to start the project with
          add-on libraries: react-router-dom, react-toasts, postcss-loader,
          node-sass. - For styling, I use SCSS and component module to style the
          component, it will help to scale up the project more easily in the
          future. Also, I use Bootstrap to take advantage with their library.
        </p>
        <h3 id="testing-" className>
          Testing:{" "}
        </h3>
        <p className>
          I was underestimating the time for making the backend &amp; front end
          from scratch and the complexity and huge work when doing React Test.
          So in this project, I can't make 100% test coverage. - Test library:
          Jest, Enzyme, supertest. - I do unit test for both server and client.
          - Server: test all helper function and API test by suppertest. -
          Client: test some component and their behaviour with Enzyme
        </p>
        <h2 id="how-to-start" className>
          How to start
        </h2>
        <p className>Clone the project:</p>
        <pre className>
          <code className>
            git clone git@github.com:Tony1106/ZenDesk-Coding-Challenge.git
          </code>
        </pre>
        <p className>Install root dependency:</p>
        <pre className>
          <code className>npm install</code>
        </pre>
        <p className>Install server &amp; client dependency:</p>
        <pre className>
          <code className>
            npm run installServer{"\n"}npm run installClient
          </code>
        </pre>
        <p className>
          Create and paste the line below to .env file at /server directory
        </p>
        <pre className>
          <code className>
            DB_PORT=4000{"\n"}DB_NAME=ZENDESK_CODING_CHALLANGE{"\n"}
            ZENDESK_USERNAME=buiminhtien06@gmail.com{"\n"}
            ZENDESK_PASSWORD=123456
          </code>
        </pre>
        <p className>Start the project: At root directory:</p>
        <pre className>
          <code className>npm run start</code>
        </pre>
        <h2 id="how-to-" className>
          How to{" "}
        </h2>
        <h2 id="authors" className>
          Authors
        </h2>
        <ul className>
          <li className>
            <strong className>Tony Bui</strong> --StackOverflow-429 reps--
          </li>
          <li className>
            <p className>
              Stack:{" "}
              <a
                href="https://stackoverflow.com/users/9694174/tony-bui"
                className
              >
                https://stackoverflow.com/users/9694174/tony-bui
              </a>
            </p>
          </li>
          <li className>
            <p className>
              Linkedin:{" "}
              <a href="https://www.linkedin.com/in/tienbui06/" className>
                https://www.linkedin.com/in/tienbui06/
              </a>
            </p>
          </li>
          <li className>
            Git:{" "}
            <a href="https://github.com/Tony1106" className>
              https://github.com/Tony1106
            </a>
          </li>
          <li className>Phone: 0449 701 109</li>
        </ul>
      </div>
    </div>
  );
}
