import React from "react";

function Projects() {
  return (
    <section id="projects">
      <div>
        <h2>
          Download my resume <a href="#resume">here</a>!
        </h2>
        <p>Front-end Proficiencies</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>responsive design</li>
            <li>Bootstrap</li>
        </ul>
        <p>Back-end Proficiencies</p>
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
