import React, { useState } from "react"; // Import useState
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import Orb from "../components/BgServices";
import Particles from "../components/Particle";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  // 1. State untuk melacak status hover pada konten utama
  const [isHovering, setIsHovering] = useState(false);

  useGSAP(() => {
    // Kode GSAP ScrollTrigger Anda
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
    ScrollTrigger.refresh();
  });

  return (
    // Kontainer induk: relative dan min-h-screen
    <section className="mt-20 overflow-hidden font-light leading-snug text-center contact-text-responsive relative min-h-screen">
      <div className="absolute inset-0 z-0 min-h-screen">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          hue={220}
          hoverIntensity={3}
          forceHoverState={isHovering}
          rotateOnHover={isHovering}
        />
      </div>

      {/* 4. Konten Utama - Di Depan (z-10) */}
      <div
        className="relative z-10 space-y-4 pt-20 pb-20"
        // 5. Menangkap event mouse dari konten depan dan mengupdate state
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Konten Teks Anda */}
        <div id="title-service-1">
          <p>Architucture</p>
        </div>
        <div
          id="title-service-2"
          className="flex items-center justify-center gap-3 translate-x-16"
        >
          <p className="font-normal">Development</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p>Deployment</p>
        </div>
        <div
          id="title-service-3"
          className="flex items-center justify-center gap-3 -translate-x-48"
        >
          <p>APIs</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p className="italic">Frontends</p>
          <div className="w-10 h-1 md:w-32 bg-gold" />
          <p>Scalability</p>
        </div>
        <div id="title-service-4" className="translate-x-48">
          <p>Databases</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;
