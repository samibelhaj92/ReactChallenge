import imgone from "../image/proj1.jpg";
import imgtwo from "../image/proj2.jpg";
import imgthree from "../image/proj3.jpg";
import imgfour from "../image/proj4.jpg";
function Project() {
    return (
        <section id="projects">
        <h2 className="text-important">Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <img src={imgone} alt="project" />
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>
          <div className="project-card">
            <img src={imgtwo} alt="project" />
            <h3>Project 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>
          <div className="project-card">
            <img src={imgthree} alt="project" />
            <h3>Project 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>
          <div className="project-card">
            <img src={imgfour} alt="project" />
            <h3>Project 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>
        </div>
      </section>
    )
  }
  export default Project