function GetInTouch() {
  return (
    <section className="get-in-touch" id="contact">
      <h2>Get in Touch</h2>
      <p>Have a question or want to work together? Feel free to reach out!</p>

      <div className="contact-info">
        <p>
          Email:{" "}
          <a href="mailto:ramonhufancia@gmail.com">ramonhufancia@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+639272611416</a>
        </p>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Ramon Hufancia. All rights reserved.
      </p>
    </section>
  );
}

export default GetInTouch;
