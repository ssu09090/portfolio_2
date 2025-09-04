import PageLayout from "../main/PageLayout";
import DeviceFrame from "../system/DeviceFrame";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Zero = () => {
  const titleRef = useRef(null);
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
    // 스크롤 애니메이션
    const sections = [designRef.current, userRef.current, retraceRef.current];
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
            Zero Flow
          </h1>
          {/* 버튼들 */}
          <div className="btn-wrap">
            <a
              href="https://zrr.kr/HdtTYU"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              와이어프레임
            </a>
            <a
              href="https://ssu09090.github.io/ZeroFlow/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              SITE
            </a>
            <a
              href="https://github.com/ssu09090/ZeroFlow"
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
                `${process.env.PUBLIC_URL}/images/screen/zf_1.png`,
                `${process.env.PUBLIC_URL}/images/screen/zf_2.png`,
                `${process.env.PUBLIC_URL}/images/screen/zf_3.png`,
                `${process.env.PUBLIC_URL}/images/screen/zf_4.png`,
              ]}
            />
          </div>
          <ul className="survey">
            <li>
              제작기간 : <br />
              2025년 7월 7일 ~ 2025년 7월 14일 (총 8일)
            </li>
            <li>
              사용된 스킬 : <br />
              Figma, React, SCSS, GSAP
            </li>
            <li>
              프로젝트 설명 : <br />
              친환경 제품 판매 및 지속가능한 소비에 대한 실천 유도를 제안하는
              쇼핑몰
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
                `${process.env.PUBLIC_URL}/images/screen/zf_5.png`,
                `${process.env.PUBLIC_URL}/images/screen/zf_6.png`,
              ]}
            />
          </div>
          <ul className="survey">
            <li>
              프로젝트 목표 : <br />
              　1. JSON 데이터를 기반으로 UI 구성에 활용
              <br />
              　2. 반응형 UI/UX로 모든 디바이스에 최적화되도록 구현
              <br />
              　3. GSAP 스크롤 애니메이션으로 사용자 집중 유도를 위해 효과 구현
            </li>
            <li>
              UI 디자인 방식 : <br />Figma를 이용한 디자인 시스템 구축 후 코드 구현
            </li>
            <li>레이아웃 : <br />Flex 및 Grid 기반으로 카드 형태 레이아웃 제작</li>
            <li>라이브러리 : <br />React-Icons, React-Router</li>
          </ul>
        </section>

        {/* Mobile Section */}
        <section className="page-section mobile">
          <div className="site-view">
            <DeviceFrame
              device="mobile"
              frameImg={`${process.env.PUBLIC_URL}/images/device/mobile.png`}
              screens={[
                `${process.env.PUBLIC_URL}/images/screen/zf_11.png`,
                `${process.env.PUBLIC_URL}/images/screen/zf_12.png`,
                `${process.env.PUBLIC_URL}/images/screen/zf_13.png`,
              ]}
            />
          </div>
          <ul className="survey">
            <li>
              제작 기여도 : 60% (5인 팀 프로젝트) <br />
              · 문서 담당으로 발표 PPT를 제작하고 발표자를 도와 대본을 제작
              <br />
              · 제품 상세페이지의 레이아웃 구성을 주도
              <br />
              · 쇼핑카트 컴포넌트를 구현을 담당하며 반응형 UI를 적용
              <br />
              · UI 스타일을 주도 하며 브랜드 이미지 제작을 담당
              <br />
              · 쇼핑카트에 제품 추가, 삭제, 수량 수정, 금액 계산을 구현
              <br />· 메인페이지 Header UI/UX 설계 및 GSAP 구현을 주도
            </li>
          </ul>
        </section>

        <section className="design" ref={designRef}>
          <h1>DESIGN SYSTEM</h1>
          <div className="system">
            <div className="design-color">
              <h3>Color Scheme</h3>
              <img
                src={`${process.env.PUBLIC_URL}/images/detail/color_1.png`}
                alt="색상차트"
              />
            </div>
            <div className="design-typo">
              <h3>Typography</h3>
              <img
                src={`${process.env.PUBLIC_URL}/images/detail/typo_1.png`}
                alt="사용폰트"
              />
            </div>
          </div>
        </section>

        <section className="user" ref={userRef}>
          <h1>USER FLOW</h1>
          <img
            src={`${process.env.PUBLIC_URL}/images/detail/user_1.png`}
            alt="사용자 흐름도"
          />
        </section>
        <section className="retrace" ref={retraceRef}>
          <h1>RETRACE</h1>
          <div className="retrace-wrap">
            <div className="retrace1">
              <h3>문제점</h3>
              <p>
                팀원 간의 Git 브랜치 관리 및 협업 방식의 이해도 차이로
                <br />
                병합 충돌과 데이터 관리 실수가 자주 발생했습니다.
              </p>
            </div>
            <div className="retrace2">
              <h3>해결방법</h3>
              <p>
                커뮤니케이션을 통해 풀/푸시 시간을 정해두고 병합을 시도했습니다.
                <br />
                또한 데이터를 효율적으로 관리하기 위한 방법을 서로 공유하며
                진행했습니다.
              </p>
            </div>
            <div className="retrace3">
              <h3>개선방안</h3>
              <p>
                팀원 간 이해도를 맞추도록 Git 사용법, 브랜치 전략에 대해
                <br />
                공통 가이드 문서를 제작하고 공유할 계획입니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Zero;
