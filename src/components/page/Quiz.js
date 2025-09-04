import { useState, useEffect, useRef } from "react";
import PageLayout from "../main/PageLayout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Quiz = () => {
  const [isFlip, setIsFlip] = useState(false);
  const toggleFlip = () => setIsFlip(!isFlip);

  const titleRef = useRef(null);
  const touchRef = useRef(null);

  const overviewRef = useRef(null);
  const designRef = useRef(null);
  const userRef = useRef(null);
  const retraceRef = useRef(null);

  useEffect(() => {
    // 네온 효과
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        duration: 1,
        repeat: -1,
        yoyo: true,
        textShadow: `
           0 0 5px #0099cc,
          0 0 5px #0099cc,
          0 0 5px #0099cc,
          0 0 5px #0099cc
        `,
        ease: "power1.inOut",
      });
    }

    if (touchRef.current) {
      gsap.to(touchRef.current, {
        duration: 1,
        repeat: -1,
        yoyo: true,
        textShadow: `
          0 0 5px #cc0099,
          0 0 5px #cc0099,
          0 0 5px #cc0099,
          0 0 5px #cc0099
        `,
        ease: "power1.inOut",
      });
    }

    // 스크롤 애니메이션
    const sections = [
      overviewRef.current,
      designRef.current,
      userRef.current,
      retraceRef.current,
    ];
    sections.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <PageLayout>
      <div className="detail-page">
        <div className="page-title">
          <h1 ref={titleRef} className="neon-title">
            훈민정음
          </h1>
          <div className="btn-wrap">
            <a
              href="https://zrr.kr/txQ8cZ"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              와이어프레임
            </a>
            <a
              href="https://ssu09090.github.io/quiz/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              SITE
            </a>
            <a
              href="https://github.com/ssu09090/quiz"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* 첫번째 화면 */}
        <section className="screen-cover">
          <div className="screen-summary">
            <ul>
              <li>제작기간 : 6월 13일 (1일)</li>
              <li>제작 기여도 : 100% (개인 프로젝트)</li>
              <li>사용된 스킬 : Figma, React, SCSS, JSON</li>
            </ul>
          </div>

          {/* 모바일 화면 flip */}
          <div className="screen-container">
            <div
              className={`screen-view ${isFlip ? "isflip" : ""}`}
              onClick={toggleFlip}
            >
              <div className="screen-mockup1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/device/mobile.png`}
                  alt="모바일"
                />
                <img
                  className="q"
                  src={`${process.env.PUBLIC_URL}/images/screen/quiz_1.png`}
                  alt="사이트화면"
                />
              </div>
              <div className="screen-mockup2">
                <img
                  src={`${process.env.PUBLIC_URL}/images/device/mobile.png`}
                  alt="모바일"
                />
                <img
                  className="q"
                  src={`${process.env.PUBLIC_URL}/images/screen/quiz_2.png`}
                  alt="사이트화면"
                />
              </div>
            </div>
          </div>
          <div className="touch">
            <p ref={touchRef}>화면을 클릭하세요!</p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="overview" ref={overviewRef}>
          <h1>OVERVIEW</h1>
          <div className="overview-wrap">
            <div className="overview1">
              <h3>프로젝트 설명</h3>
              <p>올바른 국어 사용을 주제로 한 교육용 퀴즈 게임</p>
            </div>
            <div className="overview2">
              <h3>프로젝트 목표</h3>
              <p>
                JSON 데이터 기반의 구조를 활용해 카테고리별 문제 자동 구성 구현
              </p>
            </div>
            <div className="overview3">
              <h3>UI 설계</h3>
              <p>
                Figma를 이용한 디자인 시스템 구축 후 코드를 구현,
                <br />
                Flex 및 Grid 기반의 모바일 중심 카드형 레이아웃으로 구성
              </p>
            </div>
            <div className="overview4">
              <h3>차별화</h3>
              <p>
                카테고리 선택부터 점수 확인까지의 흐름을 자연스럽게 설계 <br />
                정답 여부에 따라 해설이 표시되며 사용자 경험에 맞춰 피드백 출력
              </p>
            </div>
            <div className="overview5">
              <h3>구현한 기능</h3>
              <p>
                React 상태 관리(useState) 및 컴포넌트 단위 구조 설계로 구현{" "}
                <br />
                사용자의 선택과 정답 유무에 따라 점수 집계 시스템을 구현
              </p>
            </div>
          </div>
        </section>

        {/* DESIGN SYSTEM */}
        <section className="design" ref={designRef}>
          <h1>DESIGN SYSTEM</h1>
          <div className="system">
            <div className="design-color">
              <h3>Color Scheme</h3>
              <img
                src={`${process.env.PUBLIC_URL}/images/detail/color_4.png`}
                alt="색상차트"
              />
            </div>
            <div className="design-typo">
              <h3>Typography</h3>
              <img
                src={`${process.env.PUBLIC_URL}/images/detail/typo_4.png`}
                alt="사용폰트"
              />
            </div>
          </div>
        </section>

        {/* USER FLOW */}
        <section className="user" ref={userRef}>
          <h1>USER FLOW</h1>
          <div className="flow-sc">
            <img
              src={`${process.env.PUBLIC_URL}/images/screen/quiz_1.png`}
              alt="사이트화면"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/screen/quiz_2.png`}
              alt="사이트화면"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/screen/quiz_3.png`}
              alt="사이트화면"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/screen/quiz_4.png`}
              alt="사이트화면"
            />
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/detail/user_4.png`}
            alt="사용자 흐름도"
          />
        </section>

        {/* RETRACE */}
        <section className="retrace" ref={retraceRef}>
          <h1>RETRACE</h1>
          <div className="retrace-wrap">
            <div className="retrace1">
              <h3>문제점</h3>
              <p>
                정답 판별, 해설 출력, 점수 계산 등 복합적인 과정을 처리하면서
                혼란이 있었습니다.
              </p>
            </div>
            <div className="retrace2">
              <h3>해결방법</h3>
              <p>
                상태를 나눠서 관리하고, 조건문 처리 방식(if, slice, filter)을
                활용해 <br />
                퀴즈 흐름을 정리해가며 구현했습니다.
              </p>
            </div>
            <div className="retrace3">
              <h3>개선방안</h3>
              <p>
                현재는 문제의 수가 5개로 고정되어 있지만, 데이터를 바꾸면 확장
                가능한 구조인 만큼 <br />
                사용자가 퀴즈 수를 조절할 수 있는 기능을 구현해서 사용자 경험을
                개선하고자 합니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Quiz;
