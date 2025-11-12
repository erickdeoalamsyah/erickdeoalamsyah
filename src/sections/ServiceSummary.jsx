import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Particles from "../components/Particle"; 
gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  // 1. State untuk melacak status hover
  const [isHovering, setIsHovering] = useState(false);
  // 2. State untuk menyimpan posisi mouse yang dihitung dari konten depan
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 3. Fungsi untuk menangani pergerakan mouse pada konten utama
  const handleMouseMove = (e) => {
    // Mendapatkan batas div konten
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Menghitung posisi mouse dalam koordinat terstandarisasi (-1 hingga 1)
    // Ini penting agar cocok dengan sistem koordinat OGL/WebGL
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    
    setMousePosition({ x, y });
    setIsHovering(true); // Pastikan status hover aktif saat mouse bergerak
  };

  useGSAP(() => {
    // Kode GSAP ScrollTrigger Anda
    gsap.to("#title-service-1", { xPercent: 20, scrollTrigger: { target: "#title-service-1", scrub: true } });
    gsap.to("#title-service-2", { xPercent: -30, scrollTrigger: { target: "#title-service-2", scrub: true } });
    gsap.to("#title-service-3", { xPercent: 100, scrollTrigger: { target: "#title-service-3", scrub: true } });
    gsap.to("#title-service-4", { xPercent: -100, scrollTrigger: { target: "#title-service-4", scrub: true } });
    ScrollTrigger.refresh();
  });

  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center contact-text-responsive relative min-h-screen">
      
      {/* Latar Belakang Partikel (z-0) */}
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
          
          // PROPS BARU: Meneruskan posisi kursor dari depan
          externalMouseX={mousePosition.x}
          externalMouseY={mousePosition.y}
          
          // Prop yang sudah ada
          forceHoverState={isHovering} 
          hoverIntensity={3} 
          rotateOnHover={isHovering} 
        />
      </div>

      {/* Konten Utama (z-10) */}
      <div
        className="relative z-10 space-y-4 pt-20 pb-20 "
        // Menangkap event mouse di sini
        onMouseMove={handleMouseMove} // Menangkap pergerakan mouse
        onMouseLeave={() => setIsHovering(false)} // Menghentikan hover saat keluar
      >
        {/* Konten Teks Anda */}
        <div id="title-service-1">
          <p className="bg-gradient-to-b from-white via-slate-300 to-slate-400 bg-clip-text text-transparent">Architucture</p>
        </div>
        <div
          id="title-service-2"
          className="flex items-center justify-center gap-3 translate-x-16"
        >
          <p className="font-normal bg-gradient-to-b from-white via-slate-300 to-slate-400 bg-clip-text text-transparent">Development</p>
          <div className="w-10 h-1 md:w-32 bg-white" />
          <p className="bg-gradient-to-b from-white via-slate-300 to-slate-400 bg-clip-text text-transparent">Deployment</p>
        </div>
        <div
          id="title-service-3"
          className="flex items-center justify-center gap-3 -translate-x-48"
        >
          <p className="bg-gradient-to-b from-white via-slate-300 to-slate-400 bg-clip-text text-transparent">APIs</p>
          <div className="w-10 h-1 md:w-32 bg-white" />
          <p className="italic bg-gradient-to-b from-white via-slate-300 to-slate-400 bg-clip-text text-transparent">Frontends</p>
          <div className="w-10 h-1 md:w-32 bg-white" />
          <p className="bg-gradient-to-b from-white via-slate-300 to-slate-400 bg-clip-text text-transparent">Scalability</p>
        </div>
        <div id="title-service-4" className="translate-x-48">
          <p className="bg-gradient-to-b from-white via-slate-300 to-slate-400 bg-clip-text text-transparent">Databases</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;