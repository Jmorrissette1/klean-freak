import MonthlyWashesBar from "./components/MonthlyWashesBar";
import CareersSection from "./components/CareerSection";
import WashPackages from "./components/WashPackages";
import AboutUs from "./components/AboutUs";
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
     
      <WashPackages />
      <AboutUs />
      <CareersSection />
    </div>;

}
