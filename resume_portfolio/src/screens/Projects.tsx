import "/src/App.css";

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="section-title">My Projects</h2>

      <div className="project-list">
        {/* Project 1 */}
        <div className="project-item">
          <h4 className="project-title">Clear Task - Task Management App</h4>
          <p className="project-description">
            Developed a cross-platform task management app using Flutter and
            Firebase, featuring user authentication, real-time data syncing, and
            notifications to help users stay organized and productive.
          </p>
          <a
            href="https://github.com/bzenker29/clear-task"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-item">
          <h4 className="project-title">Company Website - CGEMS</h4>
          <p className="project-description">
            Created the official website for Colangelo Group Engineering and
            Manufacturing Services using React.js and Tailwind CSS. Implemented
            responsive design, product showcases, and contact forms.
          </p>
          <a
            href="https://cgems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Website
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-item">
          <h4 className="project-title">Portfolio Website</h4>
          <p className="project-description">
            Designed and built my personal portfolio website to showcase my
            skills, experience, and projects using React and React Router for
            navigation.
          </p>
          <a
            href="https://your-portfolio-url.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
