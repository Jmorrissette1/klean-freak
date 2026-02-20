"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CareersSection() {
  const [visible, setVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="careersSection">
      <div className="careersBox">
        <Image
          ref={imgRef}
          src="/Employee.png"
          alt="employee"
          width={615}
          height={560}
          className={`employeeImg ${visible ? "fadeIn" : ""}`}
        />
        <div className="careersTextBox">
          <p>LOOKING FOR A FUN AND REWARDING PLACE TO WORK?</p>
          <p>Klean Freak Car Wash is looking to add a new car wash attendant to our team. Apply Today!</p>
          <button>Careers</button>
        </div>
      </div>
    </section>
  );
}
