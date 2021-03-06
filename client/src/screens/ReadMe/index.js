import React from "react";
//Use tool: Convert Readme file to JSX
export default function ReadMe() {
  return (
    <div className="jumbotron">
      <div className="container">
        <div>
          <h1>
            <a id="Project_Title_0" />
            Project Title
          </h1>
          <p>Zendesk coding challenge</p>
          <h2>
            <a id="Summary_4" />
            Summary
          </h2>
          <p>This is the project build on Node JS and React.</p>
          <h3>
            <a id="Backend_8" />
            Backend:
          </h3>
          <ul>
            <li>
              Base on microservices architecture, the server works like an API
              Gateway, it is not only working with Zendesk service but also work
              with other services when scaling up. The clients will communicate
              with this API gateway and never know the microservices behind.
            </li>
            <li>
              It can slow down our service but it will help front end side more
              easy to communicate with the REST API and easy to manage traffic
              and detect when the services down.
            </li>
            <li>
              This server talks directly with Zendesk API, for pagination,
              Zendesk already has it own so I just implement it dynamic endpoint
              from the client. Ex:{" "}
              <a href="http://localhost:4000/tickets?per_page=10&page=2">
                http://localhost:4000/tickets?per_page=10&amp;page=2
              </a>
              , the server will take 2 queries per_page &amp; page and change it
              to{" "}
              <a href="https://tony1106.zendesk.com/api/v2/tickets?per_page=10&page=2">
                https://tony1106.zendesk.com/api/v2/tickets?per_page=10&amp;page=2
              </a>
              .
            </li>
          </ul>
          <p>.</p>
          <pre>
            <code>
              ├── src{"                    "}
              {"\n"}│{"   "}├── core{"                    "}# Load and config
              all needed library like express, MongoDB, logger,... {"\n"}│
              {"   "}├── api{"                     "}# Create axios instance for
              each service like: Zendesk{"\n"}│{"   "}├── routes
              {"                  "}# Register the modules{"\n"}│{"   "}├──
              modules{"                 "}# Place where contains all the
              microservices {"\n"}│{"   "}├{"   "}└── Zendesk{"             "}#
              Zendesk module{"\n"}│{"   "}├{"       "}└── Controller{"      "}#
              Receive request and communicate with Zendesk services.{"\n"}│
              {"   "}├{"       "}└── Model{"           "}# Communicate with
              internal database for tracking and detect service fail.{"\n"}│
              {"   "}├{"       "}└── Route{"           "}# Create endpoint for
              service.{"\n"}│{"   "}└── ...{"                 "}
              {"\n"}└── test{"\n"}└── ...{"\n"}
            </code>
          </pre>
          <p>
            <img
              src="https://i.imgur.com/KL2bugC.png"
              alt="alt text"
              title="Software architecture"
            />
          </p>
          <h3>
            <a id="Front_end_28" />
            Front end:
          </h3>
          <ul>
            <li>
              With high scalability, React and Redux is a good choice. In this
              project, I didn’t use Redux for state management but for real
              project, It’s definitely a great idea to start with.
            </li>
            <li>
              This project I just create-react-app bootstrap to start the
              project with add-on libraries: react-router-dom, react-toasts,
              postcss-loader, node-sass.
            </li>
            <li>
              For styling, I use SCSS and component module to style the
              component, it will help to scale up the project more easily in the
              future. Also, I use Bootstrap to take advantage with their
              library.
            </li>
          </ul>
          <p>.</p>
          <pre>
            <code>
              ├── src{"                    "}
              {"\n"}│{"   "}├── components{"             "}# Re-use component
              for project{"\n"}│{"   "}├── constant{"               "}# All
              constant. For ex: can set pagination per_page for ticket.{"\n"}│
              {"   "}├── containers{"             "}# Container contain small
              components{"\n"}│{"   "}├── screen{"                 "}# All
              screen like: Home, About, Readme{"\n"}│{"   "}├── styles
              {"                 "}# Contain SCSS theming style or helper like:
              variable, mixin...{"\n"}│{"   "}├── ultils{"                 "}#
              Helper function.{"\n"}│{"   "}├── App.scss{"               "}#
              Global styles{"\n"}│{"   "}├── App.js{"                 "}#
              Register route{"\n"}│{"   "}└── ...{"                 "}
              {"\n"}└── test{"\n"}└── ...{"\n"}
            </code>
          </pre>
          <p>***Dynamic Change UI:</p>
          <ul>
            <li>
              Visit <code>src/constant</code>.
            </li>
            <li>
              Change the number of ticket per page by change the variable{" "}
              <code>per_page</code>.
            </li>
            <li>
              Change the max characters of the decription on the Home page by
              change the variable <code>maxDescriptionLength</code>.
            </li>
          </ul>
          <h3>
            <a id="Testing_53" />
            Testing:
          </h3>
          <p>
            I was underestimating the time for making the backend &amp; front
            end from scratch and the complexity and huge work when doing React
            Test. So in this project, I can’t make 100% test coverage.
          </p>
          <ul>
            <li>Test library: Jest, Enzyme, supertest.</li>
            <li>I do unit test for both server and client.</li>
            <li>
              Server: test all helper function and API test by suppertest.
            </li>
            <li>Client: test some component and their behaviour with Enzyme</li>
          </ul>
          <h2>
            <a id="How_to_start_62" />
            How to start
          </h2>
          <p>Clone the project:</p>
          <pre>
            <code>
              git clone git@github.com:Tony1106/ZenDesk-Coding-Challenge.git
              {"\n"}
            </code>
          </pre>
          <p>Install root dependency:</p>
          <pre>
            <code>npm install{"\n"}</code>
          </pre>
          <p>Install server &amp; client dependency:</p>
          <pre>
            <code>
              npm run installServer{"\n"}npm run installClient{"\n"}
            </code>
          </pre>
          <p>
            Create and paste the line below to .env file at /server directory
          </p>
          <pre>
            <code>
              DB_PORT=4000{"\n"}DB_NAME=ZENDESK_CODING_CHALLANGE{"\n"}
              ZENDESK_USERNAME=buiminhtien06@gmail.com{"\n"}
              ZENDESK_PASSWORD=123456{"\n"}
            </code>
          </pre>
          <p>
            Start the project:
            <br />
            At root directory:
          </p>
          <pre>
            <code>npm run start{"\n"}</code>
          </pre>
          <p>
            Optional to use MongoDB to tracking services request success or
            fail.
          </p>
          <pre>
            <code>mongod{"\n"}</code>
          </pre>
          <h2>
            <a id="What_I_learn_from_this_project_100" />
            What I learn from this project
          </h2>
          <ul>
            <li>
              Learn about microservices architecture and create an API Gateway.
            </li>
            <li>
              Learn about testing library <code>suppertest</code> to test the
              API.
            </li>
            <li>Learn about Enzyme and Jest to test React Component.</li>
          </ul>
          <h2>
            <a id="Authors_108" />
            Authors
          </h2>
          <ul>
            <li>
              <p>
                <strong>Tony Bui</strong> --StackOverflow-429 reps–
              </p>
            </li>
            <li>
              <p>
                Stack:{" "}
                <a href="https://stackoverflow.com/users/9694174/tony-bui">
                  https://stackoverflow.com/users/9694174/tony-bui
                </a>
              </p>
            </li>
            <li>
              <p>
                Linkedin:{" "}
                <a href="https://www.linkedin.com/in/tienbui06/">
                  https://www.linkedin.com/in/tienbui06/
                </a>
              </p>
            </li>
            <li>
              <p>
                Git:{" "}
                <a href="https://github.com/Tony1106">
                  https://github.com/Tony1106
                </a>
              </p>
            </li>
            <li>
              <p>Phone: 0449 701 109</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
