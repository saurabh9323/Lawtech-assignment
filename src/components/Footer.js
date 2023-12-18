const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "160px",
        // flexDirection: "column",
        backgroundColor: "#00283f",
        color: "white",
        height: "50px",
        alignItems: "center",
      }}
    >
      <div>
        <h2 style={{ color: "white" }}>© 2023 Edzorb Law Private Limited</h2>
      </div>
      <div>
        <ul
          style={{
            display: "flex",

            // flexDirection: "column",
            backgroundColor: "#00283f",
            color: "white",
            alignItems: "center",
          }}
        >
          <li
            style={{
              textDecoration: "none",
              listStyle: "none",
              padding: "10px",
            }}
          >
            <a style={{ color: "white", padding: "20px" }}>Home</a>
          </li>
          <li>
            <a style={{ color: "white", padding: "20px" }}> Courses</a>
          </li>
          <li>
            <a style={{ color: "white", paddingRight: "20px" }}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
