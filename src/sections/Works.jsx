import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    if (!previewRef.current) return;

    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from(".project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: { trigger: ".project" },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;
    if (!moveX.current || !moveY.current) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id="work" className="flex flex-col min-h-screen pb-20">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, pIdx) => (
          <div
            key={`${project.id ?? "p"}-${pIdx}`} // unik untuk setiap baris project
            className="project relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(pIdx)}
            onMouseLeave={() => handleMouseLeave(pIdx)}
          >
            {/* overlay */}
            <div
              ref={(el) => (overlayRefs.current[pIdx] = el)}
              className="absolute inset-0 hidden md:block duration-200 bg-gradient-to-b from-gray-500 to-gray-700 -z-10 clip-path"
            />

            {/* title */}
            {/* <div className="flex justify-between px-10 text-white transition-all duration-500 md:group-hover:px-12 md:group-hover:text-black">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.name}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div> */}

            {/* divider */}
            {/* <div className="w-full h-0.5 bg-white/50" /> */}

            {/* frameworks */}
            {/* <div className="flex flex-wrap px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
              {project.frameworks.map((fw, i) => (
                <p
                  key={`${project.id ?? "p"}-fw-${i}`}
                  className="text-gray-200 border-b border-white/20 transition-colors duration-500 md:group-hover:text-black"
                >
                  {fw.name}
                </p>
              ))}
            </div> */}

            {/* description */}
            {/* <div className="text-xs font-semibold px-10 text-gray-400 md:group-hover:text-black md:group-hover:px-12 uppercase">
              <p>{project.description}</p>
            </div>
            <div className="mt-2 text-xs font-semibold px-10 text-gray-400 md:group-hover:text-black md:group-hover:px-12 uppercase">
              <p>KEY IMPACT : {project.impact}</p>
            </div> */}

            {/* title */}
            <div className="flex justify-between px-10 text-white transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.name}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div>

            {/* divider */}
            <div className="mt-1 w-full h-0.5 bg-white/20 " />

            {/* meta row: frameworks • description • impact */}
            <div
              className="
    grid grid-cols-1 gap-4 px-10 py-2
    md:grid-cols-12 md:items-start md:gap-6 md:group-hover:px-12
    transition-[padding,color] duration-500
  "
            >
              {/* Frameworks (chips) */}
              <div className="md:col-span-3">
                <p className="mb-2 text-[10px] md:text-xs tracking-[0.15em] text-white  uppercase">
                  Stack / Tools
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.frameworks.map((fw, i) => (
                    <li
                      key={`${project.id ?? "p"}-fw-${i}`}
                      className="
            text-[10px] md:text-xs uppercase tracking-wider
            rounded-full border border-white/20 text-gray-200
            px-2.5 py-1
            backdrop-blur-[1px] bg-white/0
            transition-colors duration-300
             
          "
                    >
                      {fw.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="mb-2 text-[10px] md:text-xs tracking-[0.15em] text-white uppercase">
                  Overview
                </p>
                <p
                  className="
        text-xs md:text-sm leading-relaxed text-gray-300
        max-w-[68ch]  /* batasi lebar agar rapi */
        [text-wrap:balance]
      "
                >
                  {project.description}
                </p>
              </div>

              {/* Key Impact */}
              <div className="md:col-span-3">
                <p className="mb-2 text-[10px] md:text-xs tracking-[0.15em] text-white uppercase">
                  Key Impact
                </p>
                <div
                  className="
        text-[11px] md:text-xs font-semibold uppercase
        text-gray-300 
        
      "
                >
                  {project.impact}
                </div>
              </div>
            </div>

            {/* mobile preview */}
            <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
              <img
                src={project.bgImage}
                alt={`${project.name}-bg-image`}
                className="object-cover w-full h-full rounded-md brightness-50"
              />
              <img
                src={project.image}
                alt={`${project.name}-image`}
                className="absolute bg-center px-14 rounded-xl"
              />
            </div>
          </div>
        ))}

        {/* desktop floating preview */}
        <div
          ref={previewRef}
          className="fixed -top-2/6 left-0 z-50 overflow-hidden pointer-events-none w-[960px] md:block hidden opacity-0"
        >
          {currentIndex !== null && (
            <img
              src={projects[currentIndex].image}
              alt="preview"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
