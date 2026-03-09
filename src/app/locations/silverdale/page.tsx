import LocationHero from "@/app/components/LocationHero";
import MonthlyWashesBar from "@/app/components/MonthlyWashesBar";
import WhatToExpect from "@/app/components/WhatToExpect";


const silverdaleSteps = [
  {
    img: "/Preparing.png",
    title: "PREPARING YOUR VEHICLE FOR YOUR WASH:",
    points: [
      "Roll up windows",
      "Fold in mirrors",
      "Unscrew radio antennas",
      "Clean out truck beds",
      "Remove excess mud, dirt, and snow",
    ],
    highlight: "This helps keep your vehicle and the wash equipment safe!",
  },
  {
    img: "/Attendant.png",
    title: "AFTER YOU PAY, OUR ATTENDANTS ASSIST YOU:",
    points: [
      "Guiding your vehicle into the tunnel wheel track",
      "Tell you to put car in neutral, take hands off the steering wheel, and feet off the gas and brake pedals",
      "Begin to powerwash the excess bugs and grime",
      "Brush the windows with soap for a better clean",
    ],
  },
  {
    img: "/EnjoyWash.png",
    title: "TIME TO ENJOY THE WASH:",
    points: [
      "The wash will take approximately four minutes",
      "Turn off the air recirculation setting to smell the fun scents we use in the wash",
      "Wait until your vehicle stops moving after the dryers to put your vehicle into drive and safely exit the wash tire track.",
    ],
  },
  {
    img: "/ExitWash.png",
    title: "AFTER EXITING THE WASH TUNNEL YOU CAN:",
    points: ["Pull into one of our empty free vacuum stalls"],
  },
];

const Silverdale = () => {
  return  <div className="centeredColumn">
      <LocationHero
        bgImage="/Silverdale-Hero.png"
        name="SILVERDALE"
        services="TOUCHLESS | SELF WASH"
        phone="360-616-3276"
        address="9550 Ridgetop Blvd NW"
        hours="OPEN 24 HOURS!"
      />
    
            <div>
                <WhatToExpect steps={silverdaleSteps}></WhatToExpect>
            </div>
        <div>
            <MonthlyWashesBar />
        </div>
  </div>
};

export default Silverdale;
