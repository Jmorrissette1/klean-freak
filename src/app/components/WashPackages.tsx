"use client";
import { useEffect, useRef, useState } from "react";

export default function WashPackages() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="washesSection" ref={sectionRef}>
      <div className={`washesIntro slideLeft ${visible ? "slideIn" : ""}`}>
        <h2 className="washesTitle">OUR WASHES</h2>
        <p className="washesDescription">
          At Klean Freak Car Wash, we understand that our customers have
          different needs. We are proud to offer multiple packages in both
          single wash and Unlimited Wash Memberships to suit all wheels of
          life that visit.
        </p>
      </div>

      <div className={`washCard washCardRed slideRight ${visible ? "slideIn" : ""}`} style={{ transitionDelay: "0.1s" }}>
        <h3>ULTIMATE FREAK</h3>
        <p className="washCardP">The Ultimate Freak Wash Package is our highest level wash.</p>
        <div className="washCardFooter">
          <div className="washPricing">
            <p>$16/SINGLE</p>
            <p>$42/UNLIMITED</p>
          </div>
          <button>LEARN MORE</button>
        </div>
      </div>

      <div className={`washCard washCardBlue slideLeft ${visible ? "slideIn" : ""}`} style={{ transitionDelay: "0.3s" }}>
        <h3>SUPER FREAK</h3>
        <p className="washCardP">The Super Freak Wash Package is our middle level wash.</p>
        <div className="washCardFooter">
          <div className="washPricing">
            <p>$13/SINGLE</p>
            <p>$32/UNLIMITED</p>
          </div>
          <button>LEARN MORE</button>
        </div>
      </div>

      <div className={`washCard washCardGray slideRight ${visible ? "slideIn" : ""}`} style={{ transitionDelay: "0.5s" }}>
        <h3>KLEAN FREAK</h3>
        <p className="washCardP">The Klean Freak Wash Package is our basic level wash.</p>
        <div className="washCardFooter">
          <div className="washPricing">
            <p>$10/SINGLE</p>
            <p>$23/UNLIMITED</p>
          </div>
          <button>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
}