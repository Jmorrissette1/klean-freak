import MonthlyWashesBar from "./components/MonthlyWashesBar";
import CareersSection from "./components/CareerSection";

export default function Home() {
  return <div>
    <div className="heroSectionD centeredColumn">
      <div className="heroTextBox">
      <h2 className="heroH2">GIVE YOUR CAR A</h2>
      <h1 className="heroH1">FEEL GOOD KLEAN</h1>
      <p className="heroP">Welcome to Klean Freak, where your car gets the VIP treatment it deserves. Discover the power of perfectly klean every freakin’ time.</p>
      </div>
      </div>
      
      <MonthlyWashesBar />
      <section className="aboutUsSection">
        <div className="aboutUsTextBox">
          <h1>About Us</h1>
          <p>At Klean Freak Car Wash, here is a great place for some SEO keywords to describe the car washes in detail. 
            We could list out the details of our vacuums, touchless washes, tunnel washes, self-wash stations and anything else we have 
            to offer to our community in our two convenient locations in Kitsap County.
          </p>
        </div>
      </section>
      <CareersSection />
    </div>;

}
