import Link from "next/link";

const Silverdale = () => {
  return  <div className="centeredColumn"><div className="locationBox">
            <div className="locationTextBox">
                <h1 className="pageH1">Silverdale</h1>
                <div className="textBlock">
                    <div className="pageH4">Phone:<Link href="tel:+3606163276">360-616-3276 </Link> </div>
                    <div className="pageH4">Email: <Link href="mailto:info@kleanfreakcarwash.com">info@kleanfreakcarwash.com</Link></div>
                    <div className="pageH4">Address:9550 Ridgetop Blvd,<br /> Silverdale, WA 98383</div>
                </div>

                <div className="textBlock">
                    <div className="pageH3"><strong>Hours:</strong></div>
                    <div>Open 24 hours!</div>
                </div>
            </div> 
            <div className="locationTextBox">
                <div className="pageH3"><strong>Wash Features</strong></div>
                <ul className="locationFeaturesList">
                    <li>#2 Touchless In Bay Automatics.</li>
                    <li>#4 Self Serve Wash Bays.</li>
                    <li>3 Minute Wash Time</li>
                    <li><strong>Free</strong> Vacuums with <strong> wash purchase</strong></li>
                    <li>Complimentary Micro Towels</li>
                    <li>Memberships Available</li>
                    <li>Eco Friendly Chemicals</li>
                    <li>Friendly Staff.</li>
                    <li>Open 24 hours for customer convenience.</li>
                </ul>
            </div>
            </div>
            <div className="google-map"><iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.856234343713!2d-122.68203566346624!3d47.65312142030314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54903aebc0b25671%3A0xc59c96801613f03a!2s9550%20Ridgetop%20Blvd%20NW%2C%20Silverdale%2C%20WA%2098383!5e0!3m2!1sen!2sus!4v1708386783251!5m2!1sen!2sus"
                    width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
      
};

export default Silverdale;
