"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const services = [
  { img: "/Vacuums.png", title: "VACUUMS", desc: "This is where we add details about our vacuums and SEO keywords." },
  { img: "/Touchless.png", title: "TOUCHLESS", desc: "This is where we add details about our touchless stations and SEO keywords." },
  { img: "/SelfWash.png", title: "SELF-WASH", desc: "This is where we add details about our self-wash stations and SEO keywords." },
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

  // Reset page if switching between mobile/desktop changes total pages
  useEffect(() => {
    setPage(0);
  }, [isMobile]);

  const prevPage = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const nextPage = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <section className="aboutUsSection">
      <h2 className="aboutUsTitle">ABOUT US</h2>
      <p className="aboutUsDescription">
        At Klean Freak Car Wash, here is a great place for some SEO keywords to
        describe the car washes in detail. We could list out the details of our
        vacuums, touchless washes, tunnel washes, self-wash stations and anything
        else we have to offer to our community in our two convenient locations in
        Kitsap County.
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