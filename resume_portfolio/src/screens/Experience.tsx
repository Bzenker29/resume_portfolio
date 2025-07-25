import "/src/App.css";

export default function Experience() {
  return (
    <div className="experience-container">
      <h2 className="section-title">What I’ve Done</h2>

      <div className="experience-list">
        {/* Junior Software Developer */}
        <div className="experience-item">
          <h4 className="experience-role">Junior Software Developer</h4>
          <p className="experience-company">
            Colangelo Group Engineering and Manufacturing Services (CGEMS)
          </p>
          <p className="experience-details">
            Built and maintained the company website using React.js and Tailwind
            CSS. Developed and integrated a Firestore database to manage backend
            data. Contributed to internal tools that improved workflow
            efficiency.
          </p>
          <p className="experience-dates">July 2025 – Present</p>
        </div>

        {/* Capstone Project Developer */}
        <div className="experience-item">
          <h4 className="experience-role">Capstone Project Developer</h4>
          <p className="experience-company">University of South Carolina</p>
          <p className="experience-details">
            Designed and built a task management app using Flutter and Firebase
            for a senior capstone project. Collaborated with a team to implement
            features like user authentication, task tracking, and cloud syncing.
          </p>
          <p className="experience-dates">August 2024 – May 2025</p>
        </div>

        {/* Internship */}
        <div className="experience-item">
          <h4 className="experience-role">
            Junior Software Development Intern
          </h4>
          <p className="experience-company">Belay Technologies</p>
          <p className="experience-details">
            Assisted in developing web applications using modern JavaScript
            frameworks. Collaborated with cross-functional teams to implement
            new features and improve user experience. Participated in code
            reviews and testing to ensure software quality.
          </p>
          <p className="experience-dates">May 2024 - August 2024</p>
        </div>
      </div>
    </div>
  );
}
