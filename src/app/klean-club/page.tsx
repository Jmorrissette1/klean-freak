const KleanClub = () => {
  return (
    <div>
      <section className="pageContent">
        <div className="rinsedFormContainer">
          <iframe
            src="https://kleanfreak.app.rinsed.co/checkout_forms/1"
            className="rinsed-frame"
            width="90%"
            height="1300px"
            sandbox="allow-scripts allow-forms"
            scrolling="no"
            style={{
              border: "none",
              display: "inline-block",
              overflow: "hidden",
            }}
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default KleanClub;
