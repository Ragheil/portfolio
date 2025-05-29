import '../styles/home.css'; // CSS file with all styles

const Home = () => {
  return (
    <section className="home container">
      <div className="hero">
        {/* Profile Image */}
        <div className="profile-image">
          <img src="/images/profile2.jpg" alt="Profile" />
        </div>

        {/* Hero Content */}
        <h1 className="animate-text">Hi, I'm a Passionate Developer</h1>
        <p className="animate-text">I am a junior developer with a strong foundation in web and mobile development. Skilled in
                creating efficient, user-friendly applications and quick to adapt to new technologies.
                Committed to delivering quality work, solving real-world problems, and continuously
                improving in a fast-paced tech environment</p>

        {/* CTA Button */}
        {/* <a href="projects" className="cta-button animate-button">View My Work</a> */}

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://github.com/Ragheil" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ragheil-atacador-5a9a671b0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://web.facebook.com/ragheil.atacador.8" target="_blank" rel="noopener noreferrer">Facebook</a>

          {/* <a href="https://www.linkedin.com/in/ragheil-atacador-5a9a671b0/" target="_blank" rel="noopener noreferrer">LinkedIn</a> */}

          <a href="mailto:atacadorragheil@gmail.com">Email</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
