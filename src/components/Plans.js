const Plans = () => {
  return (
    <section className="plans" id="plans">
      <h1 className="heading">Premium plans</h1>
      <div className="container">
        <div className="card">
          <img src="./Assets/plan1.png" alt="" srcSet="" />
          <h4>Marks Enchancement Program</h4>
          <h5 className="sp">90 days Tapasya</h5>
          <p>✅Visual Learning QBank</p>
          <p>✅Simplified Notes</p>
          <p>✅EPIC Mains Test Series with Detailed Evaluation</p>
          <p>❌MEP 90 days Tapasya</p>
          <p style={{ textDecoration: "underline", alignSelf: "center" }}>
            Check All Features
          </p>
          <button>
            Buy Now
            <i className="bx bx-chevron-left bx-flip-horizontal" />
          </button>
        </div>
        <div className="card">
          <img src="./Assets/plan2.png" alt="" srcSet="" />
          <h4>Judgement Writing</h4>
          <h5 className="sp">Power Pack</h5>
          <p>✅Visual Learning QBank</p>
          <p>✅Simplified Notes</p>
          <p>✅EPIC Mains Test Series with Detailed Evaluation</p>
          <p>❌MEP 90 days Tapasya</p>
          <p style={{ textDecoration: "underline", alignSelf: "center" }}>
            Check All Features
          </p>
          <button>
            Buy Now
            <i className="bx bx-chevron-left bx-flip-horizontal" />
          </button>
        </div>
        <div className="card">
          <img src="./Assets/plan3.png" alt="" srcSet="" />
          <h4>Renewal Premium+</h4>
          <h5 className="sp">High Retention</h5>
          <p>✅Visual Learning QBank</p>
          <p>✅Simplified Notes</p>
          <p>✅EPIC Mains Test Series with Detailed Evaluation</p>
          <p>❌MEP 90 days Tapasya</p>
          <p style={{ textDecoration: "underline", alignSelf: "center" }}>
            Check All Features
          </p>
          <button>
            Buy Now
            <i className="bx bx-chevron-left bx-flip-horizontal" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Plans;
