import Link from 'next/link';

const Poulsbo = () => {
  return <div className="centeredColumn">
      <div className="locationBox">
            <div className="locationTextBox">
                <h1 className="pageH1">Poulsbo</h1>
                <div>
                    <div>Phone: <Link href="tel:+3606163276"><strong>360-616-3276</strong></Link></div>
                    <div>Email: <Link href="mailto:info@kleanfreakcarwash.com"><strong>info@kleanfreakcarwash.com</strong></Link></div>
                    <div>Address: 21205 Olhava Way NW,<br /> Poulsbo, WA 98370</div>
                </div>

                <div>
                    <div><strong>Hours:</strong></div>
                    <div>Open 8 AM to 8 PM!</div>
                </div>
            </div>
        
            <div className="locationTextBox">
                <strong>Wash Features</strong>
                <ul> 
                    <li>Express Exterior Tunnel </li>
                    <li>120 HP of Drying Power</li>
                    <li>3 Minute Wash Time</li>
                    <li><strong>Free</strong> Vacuums with <strong> wash purchase</strong></li>
                    <li>Complimentary Micro Towels</li>
                    <li>Memberships Available</li>
                    <li>Eco Friendly Chemicals</li>
                    <li>Friendly Staff.</li>
                    <li>Open 7 days a week (Minus Weather Closures and Holidays)</li>
                </ul>
            </div>
            <div className="googleMap"><iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.349664021825!2d-122.6638054232711!3d47.75527167769884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549023c1a3276761%3A0xfea2be528d64d6cd!2s21205%20Olhava%20Way%20NW%2C%20Poulsbo%2C%20WA%2098370!5e0!3m2!1sen!2sus!4v1708369129564!5m2!1sen!2sus"
                    width="600" height="420" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        
        </div>



        </div>
};

export default Poulsbo;
