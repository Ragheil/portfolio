import '../styles/Footer.css'; // Make sure the path is correct


const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ragheil Atacador</p>
    </footer>
  );
};

export default Footer;
