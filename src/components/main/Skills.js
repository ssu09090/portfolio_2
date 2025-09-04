import { useEffect, useRef, useState } from "react";
import skillsData from "../../assets/skillsData.js";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const toolsRef = useRef(null);
  const gridRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1440px)");
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  const repeatedData = isDesktop
    ? [...skillsData, ...skillsData, ...skillsData] //데스크탑: 무한루프용 3set
    : [...skillsData]; // 모바일/태블릿: 1set

  //글씨 네온
  useEffect(() => {
    const neonAnim = (el) => {
      if (el) {
        gsap.to(el, {
          duration: 1,
          repeat: -1,
          yoyo: true,
          textShadow: `
          0 0 5px #80ff00,
          0 0 10px #80ff00,
          0 0 10px #80ff00
        `,
          ease: "power1.inOut",
        });
      }
    };

    neonAnim(skillsRef.current);
    neonAnim(toolsRef.current);
  }, []);

  // 반응형 애니메이션
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 1439px)", () => {
      const items = gridRef.current.querySelectorAll(".skills-icon");
      gsap.fromTo(
        items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    mm.add("(min-width: 1440px)", () => {
      const track = gridRef.current.querySelector(".skills-track");
      gsap.fromTo(
        track,
        { xPercent: 0 },
        {
          xPercent: -33.33,
          ease: "linear",
          duration: 15,
          repeat: -1,
        }
      );
    });

    return () => mm.revert();
  }, [isDesktop]);

  return (
    <div>
      <div id="S"></div>
      <section className="skills">
        <h1>
          <span ref={skillsRef}>
            SKILLS{" "}
          </span>
          <span ref={toolsRef} className="neon-title">
            & TOOLS
          </span>
        </h1>
        <div className="skills-slider" ref={gridRef}>
          <ul className="skills-track skills-grid">
            {repeatedData.map((skill, i) => (
              <li key={i} className="skills-icon">
                <figure>
                  <img src={skill.src} alt={skill.alt} />
                  <figcaption>{skill.label}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Skills;
