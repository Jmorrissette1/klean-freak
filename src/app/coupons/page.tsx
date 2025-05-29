import ContentBox from "../components/ContentBox";
const Coupons = () => {
  return (
    <div>
      <ContentBox>
        <iframe
          src="https://kleanfreak.app.rinsed.co/checkout_forms/102"
          className="rinsedFrame"
        ></iframe>
        <script
          src="https://kleanfreak.app.rinsed.co/frame_parent.js"
          defer
        ></script>
      </ContentBox>
    </div>
  );
};

export default Coupons;
