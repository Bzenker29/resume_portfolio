import "/src/App.css";

export default function Home() {
  return (
    <div className="container text-center home-page">
      <div className="row align-items-start">
        {/* Profile Image */}
        <div className="col-md-4 col-sm-12 mb-4">
          <img
            src="/images/graduation.JPG"
            className="img-style img-thumbnail"
            alt="Grad Photo"
          />
        </div>

        {/* Profile Bio & Contact */}
        <div className="col-md-8 col-sm-12 text-start">
          <h2 className="mb-3">Bradley Zenker</h2>
          <p>
            Hi, I’m Bradley Zenker — a junior software developer with experience
            in React, TypeScript, and Firebase. I enjoy building clean,
            responsive web apps that solve real-world problems.
          </p>
          <p>
            I have a Bachelor of Science in Computer Information Systems with a
            minor in Business Management from the University of South Carolina.
            I’m passionate about combining technology and business to create
            solutions that make a difference.
          </p>

          {/* Contact Info */}
          <ul className="list-group contact-list">
            <li className="list-group-item">📧 bzenker29@gmail.com</li>
            <li className="list-group-item">📞 443-784-9199</li>
            <li className="list-group-item">
              💼{" "}
              <a
                href="https://www.linkedin.com/in/bradley-zenker-2980a5278/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="list-group-item">
              💻{" "}
              <a
                href="https://github.com/bzenker29"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
