import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {
  const text = `I build secure, high-performance full-stack apps
    with smooth UX to drive growth 
    not headaches.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px
  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);
  return (
    <section id="services" className=" mt-20 min-h-screen rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Service"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-gradient-to-b from-[#0d021a] via-[#12052a] to-slate-950 border-t-3 border-blue-950"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-sm md:text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${itemIndex}`} className="py-2">
                    {/* Row */}
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-[auto_1fr] sm:items-baseline">
                      {/* Left: number + title */}
                      <div className="flex items-baseline gap-4 min-w-0">
                        <span className="w-8 shrink-0 text-lg text-white tabular-nums">
                          0{itemIndex + 1}
                        </span>
                        <h3 className="text-xl sm:text-3xl leading-tight text-white" >
                          {item.title}
                        </h3>
                      </div>

                      {/* Right: description (full right on ≥sm) */}
                      <p className="text-sm sm:text-base sm:justify-self-end sm:text-right text-white/60">
                        {item.description}
                      </p>
                    </div>

                    {/* Divider */}
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-3 bg-white/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
