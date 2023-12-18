const Hero = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="container">
          <div className="left">
            <h1 style={{ color: "white" }}>Turn Your Judiciary </h1>
            <h1 style={{ color: "white" }}>Dream Into Reality</h1>
            <p style={{ color: "white" }}>
              Revolutionize Your Prelims + Mains + Interview
              <br />
              Preparation in an Integrated Manner.
            </p>
            <p className="highlight">
              #1 Most Downloaded Judicial Services App
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignSelf: "flex-start",
                marginTop: 20,
                gap: 10,
              }}
            >
              <img src="./Assets/play-store.webp" alt="" srcSet="" />
              <img src="./Assets/app-store.png" alt="" srcSet="" />
            </div>
          </div>
          <div className="right">
            <img src="./Assets/1-edited.png" alt="" srcSet="" />
          </div>
        </div>
      </section>
      <div className="lovebanner">
        Lawtech - Loved by millions of user. ⭐⭐⭐⭐⭐
      </div>
    </>
  );
};
export default Hero;
