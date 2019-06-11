import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div class="alert alert-primary text-center" role="alert">
          <h1>About Me</h1>
        </div>
        <div className="container">
          <h3 className=" text-primary text-center">Tony Bui</h3>
          <p className="text-center text-danger">Self-taught Developer</p>
          <ul>
            <li>
              <a href="https://stackoverflow.com/users/9694174/tony-bui">
                StackOverFlow - 429 reps
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tienbui06/">Linkedin</a>
            </li>
            <li>
              <a href="https://github.com/Tony1106">Github</a>
            </li>
          </ul>
          <div className="specific d-flex justify-content-center">
            <span class="badge badge-info mr-3">React</span>
            <span class="badge badge-info mr-3">Redux</span>
            <span class="badge badge-info mr-3">Vue JS</span>
            <span class="badge badge-info mr-3">Node JS</span>
            <span class="badge badge-info mr-3">Express</span>
            <span class="badge badge-info mr-3">Laravel</span>
            <span class="badge badge-info mr-3">Firebase</span>
            <span class="badge badge-info mr-3">MongoDB</span>
            <span class="badge badge-info mr-3">Jest</span>
            <span class="badge badge-info mr-3">JavaScript</span>
            <span class="badge badge-info mr-3">SASS</span>
            <span class="badge badge-info mr-3">Bootstrap</span>
            <span class="badge badge-info mr-3">ES6</span>
          </div>

          <p className="text-center">Phone: 0449701106</p>
          <p className="text-center">Email: buiminhtien06@gmail.com</p>
        </div>
      </div>
    );
  }
}
