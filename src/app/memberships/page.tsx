
const Memeberships = () => {
  return (
    <div>
      <div className="pageContent">
        <div className="rinsedFormContainer">
          <iframe
            src="https://kleanfreak.app.rinsed.co/ticket_forms/34"
            loading="lazy"
            className="rinsed-frame"
            width="100%"
            height="750px"
            sandbox="allow-scripts allow-forms"
            scrolling="no"
            style={{
              border: "none",
              display: "inline-block",
              overflow: "hidden",
            }}
          ></iframe>
            <div><h4 className="pageH4">Cancellation Policy:</h4>
          To cancel your membership, please notify us at least 5 days prior to your next billing cycle. 
          Cancellations made within 5 days of your billing cycle will result in a charge for the upcoming billing period.
        </div>
        </div>
      

      </div>
      <script
        src="https://kleanfreak.app.rinsed.co/frame_parent.js"
        defer
      ></script>
    </div>
  );
};

export default Memeberships;
