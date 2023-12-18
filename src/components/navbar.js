const Navbar = () => {
  return (
    <div className="nav" style={{ backgroundColor: "#01324e" }}>
      <img
        src="https://edzorblaw.com/wp-content/uploads/2023/05/legal-rumble-2-logo.png"
        alt=""
      />
      <nav>
        <li>
          <a href="#home" className="active">
            <i className="bx bxs-home" />
            <span className="nav-item">Home</span>
          </a>
        </li>
        <li>
          <a href="#course">
            <i className="bx bxs-slideshow" />{" "}
            <span className="nav-item">Courses</span>
          </a>
        </li>
        <li>
          <a href="#testimonials">
            <i className="bx bxs-slideshow" />
            <span className="nav-item">Testimonials</span>
          </a>
        </li>
        <li>
          <a href="#plans">
            <i className="bx bxs-offer" />
            <span className="nav-item">Plans</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="bx bxs-contact" />
            <span className="nav-item">Contact</span>
          </a>
        </li>
      </nav>
      <button className="login">
        <i className=" bx bxs-log-in" />
        Login
      </button>
    </div>
  );
};

export default Navbar;
