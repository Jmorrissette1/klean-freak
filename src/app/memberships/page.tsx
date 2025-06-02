const Memeberships = () => {
  return (
    <div>
      Membership Page
      <section className="pageContent">
        <div className="rinsedFormContainer">
          <iframe
            src="https://kleanfreak.app.rinsed.co/ticket_forms/34"
            loading="lazy"
            className="rinsed-frame"
            style={{
              border: "none",
              display: "inline-block",
              width: "90%",
              height: "800px",
            }}
          ></iframe>
          <div className="membership-link">
            Dont have a Account? <a href="kleanclub.html">SIGN UP</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Memeberships;
