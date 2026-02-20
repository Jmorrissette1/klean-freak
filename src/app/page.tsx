import MonthlyWashesBar from "./components/MonthlyWashesBar";
import Image from "next/image"

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
      <section className="careersSection">
        <div className="careersBox">
        <div>
        <Image src="/Employee.png" alt="employee" width={500} height={488}></Image>
        </div>
        <div>
        <p>LOOKING FOR A FUN AND REWARDING PLACE TO WORK?</p>
        <p>Klean Freak Car Wash is looking to add a new car wash attendant to our team. Apply Today!</p>
        </div>
        <button>Careers</button>
        </div>
        
      </section>
    </div>;

}
