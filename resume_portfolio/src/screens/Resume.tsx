import "/src/App.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <h2 className="section-title">Resume</h2>

      {/* Education Section */}
      <section className="resume-section">
        <h3 className="resume-subtitle">Education</h3>
        <div className="resume-item">
          <h4>Bachelor of Science in Computer Information Systems</h4>
          <p>Minor in Business Management</p>
          <p>University of South Carolina</p>
          <p>Graduated May 2024</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="resume-section">
        <h3 className="resume-subtitle">Technical Skills</h3>
        <ul className="skills-list">
          <li>React.js & React Router</li>
          <li>TypeScript & JavaScript (ES6+)</li>
          <li>Firebase (Firestore, Auth)</li>
          <li>Flutter & Dart</li>
          <li>Tailwind CSS & CSS3</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="resume-section">
        <h3 className="resume-subtitle">Experience Highlights</h3>
        <ul className="experience-list">
          <li>
            Junior Software Developer at Colangelo Group Engineering and
            Manufacturing Services (CGEMS)
          </li>
          <li>Software Development Intern – Belay Technologies</li>
          <li>
            Senior Capstone Project Developer – University of South Carolina
          </li>
        </ul>
      </section>

      {/* Download Resume Button */}
      <section className="resume-section">
        <a
          href="/files/Zenker-Resume.pdf"
          download
          className="download-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume (PDF)
        </a>
      </section>
    </div>
  );
}
