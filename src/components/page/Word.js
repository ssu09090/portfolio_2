import { useState } from "react";
import PageLayout from "../main/PageLayout";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Word = () => {
  const [isFlip, setIsFlip] = useState(false);

  const toggleFlip = () => setIsFlip(!isFlip);

  const titleRef = useRef(null);
  const touchRef = useRef(null);

  const overviewRef = useRef(null);
  const designRef = useRef(null);
  const userRef = useRef(null);
  const workRef = useRef(null);
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
      workRef.current,
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
            심심이랑 끝말잇기
          </h1>
          <div className="btn-wrap">
            <a
              href="https://zrr.kr/JSHcFx"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              와이어프레임
            </a>
            <a
              href="https://ssu09090.github.io/parkin/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              SITE
            </a>
            <a
              href="https://github.com/ssu09090/parkin"
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
              <li>제작기간 : 6월 24일 (1일)</li>
              <li>제작 기여도 : 100% (개인 프로젝트)</li>
              <li>사용된 스킬 : Figma, React, SCSS, Open API</li>
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
                  src={`${process.env.PUBLIC_URL}/images/screen/ss_1.png`}
                  alt="사이트화면"
                />
              </div>
              <div className="screen-mockup2">
                <img
                  src={`${process.env.PUBLIC_URL}/images/device/mobile.png`}
                  alt="모바일"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/screen/ss_2.png`}
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
              <p>
                어린 시절 즐겼던 대화 챗봇 ‘심심이’를 벤치마킹하여 끝말잇기
                게임으로 구현
              </p>
            </div>
            <div className="overview2">
              <h3>프로젝트 목표</h3>
              <p>
                1. 우리말샘 Open API를 연동하여 실제 단어 기반의 끝말잇기 게임
                구현 <br />
                2. React 기반으로 입력 및 출력 구조로 구성해 구현
              </p>
            </div>
            <div className="overview3">
              <h3>UI 설계</h3>
              <p>
                Figma를 이용한 디자인 시스템 구축 후 코드 구현, <br />
                Flex 기반의 모바일 중심 카드형 레이아웃으로 구성
              </p>
            </div>
            <div className="overview4">
              <h3>차별화</h3>
              <p>
                API가 단어를 반환하지 못할 경우에도 직접 입력을 유도하는
                방식으로 <br />
                사용자 경험이 중단되지 않도록 구성
              </p>
            </div>
            <div className="overview5">
              <h3>구현한 기능</h3>
              <p>
                사용자가 입력한 단어를 바탕으로 API를 호출하고, 결과를 화면에
                출력하는 구조를 구현 <br />
                실제 존재하는 단어만으로 이어지게 제한, 끝말잇기 규칙에 맞게
                흐름이 이어지도록 구현
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
                src={`${process.env.PUBLIC_URL}/images/detail/color_3.png`}
                alt="색상차트"
              />
            </div>
            <div className="design-typo">
              <h3>Typography</h3>
              <img
                src={`${process.env.PUBLIC_URL}/images/detail/typo_3.png`}
                alt="사용폰트"
              />
            </div>
          </div>
        </section>

        {/* USER FLOW */}
        <section className="user" ref={workRef}>
          <h1>WORK FLOW</h1>
          <img
            src={`${process.env.PUBLIC_URL}/images/detail/work_3.png`}
            alt="단어출력흐름도"
          />
        </section>

        {/* RETRACE */}
        <section className="retrace" ref={retraceRef}>
          <h1>RETRACE</h1>
          <div className="retrace-wrap">
            <div className="retrace1">
              <h3>문제점</h3>
              <p>
                Open API를 연동하면서 단어를 받아오는 API 특성의 데이터 형식이
                익숙하지 않아 구조를 파악하고 필터링하는 데 문제가 발생했습니다.
              </p>
            </div>
            <div className="retrace2">
              <h3>해결방법</h3>
              <p>
                공식 문서를 참고하면서 필터 조건으로 2글자 이상, 하이픈 제외
                등을 적용했습니다. <br />
                예외 상황에서는 메세지를 추가해 사용자가 게임의 상태를 확인할 수
                있게 적용하였습니다.
              </p>
            </div>
            <div className="retrace3">
              <h3>개선방안</h3>
              <p>
                중복 단어 입력 방지나 이전 단어 체크 기능, 난이도 조절 기능,
                타이머 등 요소도 추가하면 <br />좀 더 완성도 높은 게임이 될 것
                같습니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Word;
