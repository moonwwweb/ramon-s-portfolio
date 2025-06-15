function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <h3>© {new Date().getFullYear()} Ramon Hufancia</h3>
        <p>
          &nbsp;&nbsp;• &nbsp;&nbsp;Feel free to reach out via email or give me
          a call. I’d be happy to connect!
        </p>
        <ul className="footer-links">
          <li>
            <a href="mailto:ramonhufancia@gmail.com">ramonhufancia@gmail.com</a>
          </li>
          <li>+639272611416</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
