const Contact = () => {
  return (
    <section className="contact" style={{ height: "100vh" }} id="contact">
      <h1 className="heading">Contact Us</h1>
      <div className="contactform">
        <div className="left">
          <div className="section">
            <i className="bx bxs-phone-call" />
            <h4>Call Me</h4>
            <p>+91 99999999999</p>
          </div>
          <div className="section">
            <i className="bx bxl-gmail" />
            <h4>Email</h4>
            <p>lawtech@gmail.com</p>
          </div>
          <div className="section">
            <i className="bx bx-current-location" />
            <h4>Location</h4>
            <p>Banglore - Karnataka</p>
          </div>
        </div>
        <div className="right">
          <div className="name-email">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
            <input
              type="email"
              name="email"
              id="name"
              placeholder="Enter your email"
            />
          </div>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            defaultValue={""}
          />
          <button>Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
