import React from 'react';
import './Projects.css';
const Projects = () => {
  return (
    <>
      <h1>MY PROJECTS</h1>
      <div className="projects">
        <div class="card" style={{ width: '18rem' }}>
          <div class="card-body">
            <h5 class="card-title">E-commerce</h5>
            <h6 class="card-subtitle mb-2 text-muted">React</h6>
            <img
              className="img_site"
              src="https://i.ibb.co/RPYzkSF/e-commerce.png"
            />
            <a
              href="https://react-eb2zqb.stackblitz.io/"
              target="_blank"
              class="card-link"
            >
              Deployed link
            </a>
            <a
              href="https://github.com/PatilAneesh/E-commerce"
              target="_blank"
              class="card-link"
            >
              Project link
            </a>
          </div>
        </div>
        <div class="card" style={{ width: '18rem' }}>
          <div class="card-body">
            <h5 class="card-title">loopstudios</h5>
            <h6 class="card-subtitle mb-2 text-muted">Landing page</h6>
            <img
              className="img_site"
              src="https://user-images.githubusercontent.com/91588568/175357610-250addd0-ff06-49c7-908d-26b463aa544d.png"
            />
            <a
              href="https://loopstudio-landing-page07.netlify.app/"
              target="_blank"
              class="card-link"
            >
              Deployed link
            </a>
            <a
              href="https://github.com/PatilAneesh/loopstudios-landing-page"
              target="_blank"
              class="card-link"
            >
              Project link
            </a>
          </div>
        </div>
        <div class="card" style={{ width: '18rem' }}>
          <div class="card-body">
            <h5 class="card-title">Facebook</h5>
            <h6 class="card-subtitle mb-2 text-muted">Clone</h6>
            <img
              className="img_site"
              src="https://i.ibb.co/Gxxg0wC/facebook-clone.png"
            />
            <a
              href="https://react-puqpct.stackblitz.io/"
              target="_blank"
              class="card-link"
            >
              Deployed link
            </a>
            <a
              href="https://github.com/PatilAneesh/facebook-clone"
              target="_blank"
              class="card-link"
            >
              Project link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
