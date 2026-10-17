function Projects() {
  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>

      <div className="projects">

        <div className="card">
          <h3>Health Tracker</h3>
          <p>
            A simple web project for tracking daily health
            information and maintaining healthy habits.
          </p>

          <button onClick={() => alert("Health Tracker project is coming soon!")}>
            View Project
          </button>
        </div>

        <div className="card">
          <h3>To-Do App</h3>
          <p>
            A simple application for managing daily tasks
            and keeping track of completed activities.
          </p>

          <button onClick={() => alert("To-Do App project is coming soon!")}>
            View Project
          </button>
        </div>

        <div className="card">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website to showcase my
            profile, skills, and projects.
          </p>

          <button onClick={() => alert("Portfolio project is already in progress!")}>
            View Project
          </button>
        </div>

      </div>
    </section>
  );
}

export default Projects;
