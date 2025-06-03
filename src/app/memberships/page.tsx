const Memeberships = () => {
  return (
    <div>
      <section className="pageContent">
        <div className="rinsedFormContainer">
          <iframe
            src="https://kleanfreak.app.rinsed.co/ticket_forms/34"
            loading="lazy"
            className="rinsed-frame"
            width="100%"
            height="1000px"
            sandbox="allow-scripts allow-forms"
            scrolling="no"
            style={{
              border: "none",
              display: "inline-block",
              overflow: "hidden",
            }}
          ></iframe>
        </div>
        <div className="membership-link">
          Dont have a Account? <a href="kleanclub.html">SIGN UP</a>
        </div>
      </section>
      <script
        src="https://kleanfreak.app.rinsed.co/frame_parent.js"
        defer
      ></script>
    </div>
  );
};

export default Memeberships;
