import './App.css';

function App() {
  return (
    <div>
      <nav>
        <h2>Iyere Ambrose</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a
          href="https://github.com/iyereambrose"
          target="_blank"
          rel="noreferrer"
          className="nav-github"
        >
          GitHub Profile ↗
        </a>

      </nav>

      <main id="home">
        <div className="hero-content">
          <h1>Hi, I'm Iyere Ambrose</h1>

          <h2>Full-Stack Software Engineer</h2>

          <p>
            I build scalable, secure, and maintainable web applications
            using Java, Spring Boot, React, MongoDB, Docker, Kubernetes,
            Jenkins, and AWS.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="hero-button">
              View My Projects
            </a>

            <a
              href="/Iyere_Ambrose_CV.pdf"
              className="secondary-button"
              download="Iyere_Ambrose_CV.pdf"
            >
              Download CV
            </a>

          </div>
        </div>
      </main>
      <section id="about" className="about-section">
        <h2>About Me</h2>

        <p>
          I am a passionate Full-Stack Software Engineer focused on building
          reliable, scalable, and user-friendly applications. I specialize
          in backend development with Java and Spring Boot, while also
          building responsive frontend applications with React.
        </p>

        <p>
          I have experience working with RESTful APIs, microservices,
          MongoDB, Docker, Kubernetes, Jenkins, and AWS. I enjoy solving
          technical problems, learning new technologies, and building
          solutions that create real-world value.
        </p>

      </section>

      <section id="skills" className="skills-section">
        <h2>My Skills</h2>

        <div className="skills-container">
          <div className="skill-card">Java</div>
          <div className="skill-card">Spring Boot</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">MongoDB</div>
          <div className="skill-card">RESTful APIs</div>
          <div className="skill-card">Microservices</div>
          <div className="skill-card">Docker</div>
          <div className="skill-card">Kubernetes</div>
          <div className="skill-card">Jenkins</div>
          <div className="skill-card">AWS</div>
          <div className="skill-card">Git & GitHub</div>
        </div>
      </section>

      
      <section id="projects" className="projects-section">
        <h2>Featured Projects</h2>

        <div className="projects-container">
          <div className="project-card">
            <h3>Hospital Management System</h3>

            <p>
              A full-stack hospital management application for managing
              patients, doctors, appointments, and medical records.
            </p>

            <span>
              React • Node.js • Express • MongoDB
            </span>

            <a
              href="https://github.com/iyereambrose/hospital_project-mongoDB-"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          <div className="project-card">
            <h3>Login, Signup and BMI App</h3>

            <p>
              A React project featuring user login and signup interfaces
              and a Body Mass Index (BMI) application.
            </p>

            <span>
              React • JavaScript • CSS
            </span>

            <a
              href="https://github.com/iyereambrose/react-project-LoginSignup-and-Bmi-"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          <div className="project-card">
            <h3>Book Service — Microservices</h3>

            <p>
              A book-service project demonstrating backend development
              with Java and Spring Boot.
            </p>

            <span>
              Java • Spring Boot • Microservices
            </span>

            <a
              href="https://github.com/iyereambrose/book-service"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>


      <section id="experience" className="experience-section">
        <h2>Professional Experience</h2>

        <div className="experience-card">
          <h3>Frontend — Wema Bank Plc</h3>
          <p className="experience-date">2024 – Till date</p>

          <p>
            Designed and developed responsive, user-friendly web interfaces
            using HTML, CSS, JavaScript, and React. Integrated frontend
            applications with RESTful APIs to ensure seamless communication
            with backend services. Tested and debugged applications to improve
            performance, usability, and cross-browser compatibility.
            Collaborated on software development projects to deliver functional,
            accessible, and visually appealing web applications.
          </p>
        </div>

        <div className="experience-card">
          <h3>Software Engineering Training — NIIT, Iponri, Lagos</h3>
          <p className="experience-date">2023 – 2024</p>

          <p>
            Developed practical skills in software engineering, programming,
            web development, databases, and modern application development.
          </p>
        </div>

        <div className="experience-card">
          <h3>IT Instructor — Ralp-Tech Communication Nigeria Ltd</h3>
          <p className="experience-date">2019 – 2023</p>

          <p>
            Provided IT training and technical guidance, helping students
            develop practical computer and software skills.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Let's Work Together</h2>

        <p>
          I'm open to software engineering opportunities, collaborations,
          and projects where I can build useful and scalable solutions.
        </p>

        
        <div className="contact-links">
          
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=iyereambrose60@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email Me
          </a>


          <a
            href="https://github.com/iyereambrose"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          
          <a
            href="https://www.linkedin.com/in/ambrose-iyere-640602329"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Iyere Ambrose. All rights reserved.</p>
          <p>Built with React and CSS.</p>
        </footer>
    </div>
  );
}

export default App;
