import { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const titleRef = useRef(null);
  const mentRef = useRef(null);

  useEffect(() => {
    //네온
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        duration: 1,
        repeat: -1,
        yoyo: true,
        textShadow: `
          0 0 5px #80ff00,
          0 0 5px #80ff00,
          0 0 5px #80ff00,
          0 0 5px #80ff00
        `,
        ease: "power1.inOut",
      });
    }

    // 타자 효과
    if (mentRef.current) {
      const letters = mentRef.current.querySelectorAll("span");
      gsap.fromTo(
        letters,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.1,
          ease: "power2.out",
          repeat: -1,
          repeatDelay: 1.5,
          yoyo: true,
        }
      );
    }
  }, []);

  const text1 =
    "단순한 화면 구현을 넘어, 사용자와 소통하는 인터페이스를 만드는";
  const text2 = "프론트엔드 개발자 정수진의 포트폴리오입니다";

  return (
    <div id="header">
      <div className="header-title">
        <h2>FRONTEND</h2>
        <h1 ref={titleRef} className="neon-title">
          PORTFOLIO
        </h1>
      </div>
      <div className="header-ment" ref={mentRef}>
        <p>
          {text1.split("").map((char, i) => (
            <span key={`line1-${i}`}>{char}</span>
          ))}
        </p>
        <p>
          {text2.split("").map((char, i) => (
            <span key={`line2-${i}`}>{char}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Header;
