"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const services = [
  { img: "/Vacuums.png", title: "VACUUMS", desc: "With every wash at both our Silverdale and Poulsbo locations, you get complimentary vacuum access. Clear out sand, rain-soaked pine needles, pet hair, and everyday mess before you hit the road again." },
  { img: "/Touchless.png", title: "TOUCHLESS", desc: "In Silverdale, our Touchless Wash is built for rain-soaked roads and everyday PNW grime. High-pressure water and advanced detergents cut through mud, salt, and buildup - all without brushes touching your vehicle. Delivering a safe, no-contact clean that protects your finish." },
  { img: "/SelfWash.png", title: "SELF-WASH", desc: "Available in Silverdale, our Self-Wash bays let you wash your vehicle at your own pace. It’s a straightforward option for drivers who prefer a hands-on approach and want to focus on the areas that need attention." },
  { img: "/Tunnel.png", title: "TUNNEL", desc: "This is where we add details about our tunnel wash and SEO keywords." },
  { img: "/DetailBay.png", title: "DETAIL BAY", desc: "This is where we add details about our detail bay and SEO keywords." },
  { img: "/AirDry.png", title: "AIR DRY", desc: "This is where we add details about our air dry stations and SEO keywords." },
];

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export default function AboutUs() {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const perPage = isMobile ? 1 : 3;
  const pages = chunkArray(services, perPage);
  const totalPages = pages.length;


  useEffect(() => {
    setPage(0);
  }, [isMobile]);

  const prevPage = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const nextPage = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <section className="aboutUsSection">
      <h2 className="aboutUsTitle">ABOUT US</h2>
      <p className="aboutUsDescription">
        How dirty did you get today? Here in Kitsap County, dirt isn’t a problem, it’s proof you’re doing life right. We built our washes for the real PNW kind of dirt. Offering self-wash bays and touchless washes in Silverdale, tunnel washes, and our signature Mud Bath option in Poulsbo, and free vacuums at both convenient locations. We’re here to get your vehicle clean, so you can get back out there.
      </p>

      <div className="carouselContainer">
        <div className="carouselSlide">
          {pages[page].map((service, i) => (
            <div className="serviceCard" key={i}>
              <Image
                src={service.img}
                alt={service.title}
                width={300}
                height={200}
                className="serviceImg"
              />
              <h3 className="serviceTitle">{service.title}</h3>
              <p className="serviceDesc">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="carouselControls">
          <div className="carouselProgress">
            {pages.map((_, i) => (
              <div
                key={i}
                className={`carouselDot ${i === page ? "carouselDotActive" : ""}`}
              />
            ))}
          </div>
          <div className="carouselNav">
            <button onClick={prevPage} className="carouselBtn">&lt;</button>
            <span>{page + 1}/{totalPages}</span>
            <button onClick={nextPage} className="carouselBtn">&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
}