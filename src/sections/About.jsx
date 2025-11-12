import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// const About = () => {
//   const text = `Passionate about clean architecture
//     I build scalable, high-performance solutions
//     from prototype to production`;
//   const aboutText = `Obsessed with building fast, intuitive apps—from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel.
//   When I’m not shipping:
// ⚡️ Open-sourcing my latest experiment (or hacking on yours)
// 🎥 Teaching devs on Twitch/YouTube—because rising tides lift all ships
// 🧗 Rock climbing (problem-solving with real stakes)
// 🎸 Strumming chords while CI pipelines pass (multitasking at its finest)`;
const About = () => {
  const text = `Clean architecture, premium UX
I turn business needs into scalable systems
From first brief to production`;

  const aboutText = `Full-stack web developer who ships end-to-end. I translate requirements into clear domain models, pick the right stack, and deliver responsive, polished interfaces (React/Vue + TypeScript, GSAP/Framer Motion) backed by secure, efficient APIs (Node.js/Express, REST/GraphQL, Auth/RBAC) and optimized data layers (PostgreSQL/MySQL/Mongo via Prisma). I use Strapi for content workflows and n8n for automation/integration so teams move faster.

On the ops side, I set up CI/CD (GitHub Actions), containerize with Docker, and run on VPS/cloud with Nginx, SSL, and caching. Observability with Prometheus/Grafana and structured logging keeps performance predictable and incidents short. The goal is simple: ship quickly, stay reliable, and leave a codebase the team enjoys maintaining.`;

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.80,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className=" pt-20 min-h-screen bg-gradient-to-b from-slate-950 to-black/70 rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/profileErick.png"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full text-sm md:text-2xl "} />
      </div>
    </section>
  );
};

export default About;
