import PageLayout from "../main/PageLayout";
import DeviceFrame from "../system/DeviceFrame";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pin = () => {
  const titleRef = useRef(null);
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

    // 스크롤 애니메이션
    const sections = [
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
            P’IN
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

        {/* Desktop Section */}
        <section className="page-section desktop">
          <div className="site-view">
            <DeviceFrame
              device="desktop"
              frameImg={`${process.env.PUBLIC_URL}/images/device/desktop.png`}
              screens={[
                `${process.env.PUBLIC_URL}/images/screen/p_1.png`,
                `${process.env.PUBLIC_URL}/images/screen/p_2.png`,
                `${process.env.PUBLIC_URL}/images/screen/p_3.png`,
                `${process.env.PUBLIC_URL}/images/screen/p_4.png`,
              ]}
            />
          </div>
          <ul className="survey">
            <li>
              제작기간 : <br />
              2025년 7월 21일 ~ 2025년 7월 30일 (총 10일)
            </li>
            <li>
              사용된 스킬 : <br />
              Figma, React, SCSS, GSAP
            </li>
            <li>
              프로젝트 설명 : <br />
              주차장 주요 기능을 소개하는 브랜드형 홍보 웹사이트
            </li>
          </ul>
        </section>

        {/* Tablet Section */}
        <section className="page-section tablet">
          <div className="site-view">
            <DeviceFrame
              device="tablet"
              frameImg={`${process.env.PUBLIC_URL}/images/device/tablet.png`}
              screens={[
                `${process.env.PUBLIC_URL}/images/screen/p_5.png`,
                `${process.env.PUBLIC_URL}/images/screen/p_6.png`,
              ]}
            />
          </div>
          <ul className="survey">
            <li>
              프로젝트 목표 : <br />
              　1. 반응형 UI/UX로 모든 디바이스 최적화
              <br />
              　2. React와 DB 연결 구조를 활용한 쿠폰 발급 기능 구현
              <br />
              　3. 플로팅 메뉴에 닫기 버튼 기능 추가
            </li>
            <li>
              UI 디자인 방식 : <br />
              Figma로 디자인 시스템 구축 후 코드 구현
            </li>
            <li>
              레이아웃 : <br />
              Flex, Grid, Circle 기반으로 레이아웃 제작
            </li>
            <li>
              라이브러리 :<br /> React-Router, React-Icons, Canvas Confetti
            </li>
          </ul>
        </section>

        {/* Mobile Section */}
        <section className="page-section mobile">
          <div className="site-view">
            <DeviceFrame
              device="mobile"
              frameImg={`${process.env.PUBLIC_URL}/images/device/mobile.png`}
              screens={[
                `${process.env.PUBLIC_URL}/images/screen/p_8.png`,
                `${process.env.PUBLIC_URL}/images/screen/p_9.png`,
                `${process.env.PUBLIC_URL}/images/screen/p_10.png`,
                `${process.env.PUBLIC_URL}/images/screen/p_11.png`,
                `${process.env.PUBLIC_URL}/images/screen/p_12.png`,
                `${process.env.PUBLIC_URL}/images/screen/p_13.png`,
              ]}
            />
          </div>
          <ul className="survey">
            <li>
              제작 기여도 : 75% (5인 팀 프로젝트) <br />
              · 발표 담당으로 PPT 제작 보조 및 사이트 기능 설명/시연
              <br />· 메인페이지 컨텐츠 레이아웃과 개별 컴포넌트 구현
              <br />· 이미지 제작 및 스타일링으로 디테일한 UI/UX 구성 주도
              <br />
              · React Router로 페이지 간 이동 부드럽게 구현
              <br />· GSAP으로 메인페이지 인터랙션 구현
              <br />· Canvas Confetti로 쿠폰 발급 시 보상감 시각화
            </li>
          </ul>
        </section>

        {/* Design System */}
        <section className="design" ref={designRef}>
          <h1>DESIGN SYSTEM</h1>
          <div className="system">
            <div className="design-color">
              <h3>Color Scheme</h3>
              <img
                src={`${process.env.PUBLIC_URL}/images/detail/color_2.png`}
                alt="색상차트"
              />
            </div>
            <div className="design-typo">
              <h3>Typography</h3>
              <img
                src={`${process.env.PUBLIC_URL}/images/detail/typo_2.png`}
                alt="사용폰트"
              />
            </div>
          </div>
        </section>

        {/* User Flow */}
        <section className="user" ref={userRef}>
          <h1>USER FLOW</h1>
          <img
            src={`${process.env.PUBLIC_URL}/images/detail/user_2.png`}
            alt="사용자 흐름도"
          />
        </section>

        {/* Work Flow */}
        <section className="user" ref={workRef}>
          <h1>WORK FLOW</h1>
          <img
            src={`${process.env.PUBLIC_URL}/images/detail/work_2.png`}
            alt="쿠폰 발급 흐름도"
          />
        </section>

        {/* Retrace */}
        <section className="retrace" ref={retraceRef}>
          <h1>RETRACE</h1>
          <div className="retrace-wrap">
            <div className="retrace1">
              <h3>문제점</h3>
              <p>
                컴포넌트의 기능과 역할이 복잡해져 <br />
                파일이 길어지고 반복 코드가 많아 유지보수에 어려움이 발생했습니다
              </p>
            </div>
            <div className="retrace2">
              <h3>해결방법</h3>
              <p>
                글꼴, 버튼 등 공통 컴포넌트를 분리해 재사용성을 확보했습니다 <br />
                코드 중복을 줄이도록 구조를 개선했습니다
              </p>
            </div>
            <div className="retrace3">
              <h3>개선방안</h3>
              <p>
                컴포넌트 분리 기준을 기능 단위로 재정비하고 <br />
                상태 관리를 고려해 유지보수성을 강화시킬 예정입니다
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Pin;
