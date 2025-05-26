import '../styles/about.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <section className="about container">
      {/* Profile Photo */}
      <div className="profile-photo">
        {/* <img src="/images/profile.png" alt="Profile" /> */}
        <img src="/images/profile2.jpg" alt="Profile" />
      </div>

      {/* Main Content */}
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am a junior developer with a strong foundation in web and mobile development. Skilled in 
          creating efficient, user-friendly applications and quick to adapt to new technologies. 
          Committed to delivering quality work, solving real-world problems, and continuously 
          improving in a fast-paced tech environment.
        </p>

        <div className="profile">
          <h3>Education</h3>
          <div className="education-item">
            <strong>University of Science and Technology of Southern Philippines</strong>
            BS in Information Technology (2021 – 2025)  
            GPA: 1.80 (highest is 1.00)
          </div>
          <div className="education-item">
            <strong>Iponan National High School</strong>
            TVL - Computer System Servicing (2019 – 2021)  
            GPA: 92.75 (highest is 100)
          </div>
          <div className="education-item">
            <strong>Iponan National High School</strong>
            Junior High (2015 – 2019)
          </div>
          <div className="education-item">
            <strong>Getulio Elementary School</strong>
            Elementary Education (2006 – 2015)
          </div>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>React Native / React.js</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Firebase, Supabase, MySQL, Hostinger</li>
            <li>Python, PHP, Java, Git</li>
          </ul>
        </div>

        <div className="languages">
          <h3>Languages</h3>
          <ul>
            <li>Ilonggo (C2)</li>
            <li>Bisaya (C2)</li>
            <li>Filipino (C1)</li>
            <li>English (B2)</li>
          </ul>
        </div>

        {/* 🔥 New Button to Preview Resume */}
        <div className="resume-preview-button">
          <button onClick={() => window.open('/file/Ragheil_Atacador_RESUME.pdf', '_blank')}> Preview Resume </button>
        </div>  

      </div>
    </section>
  );
};

export default About;
