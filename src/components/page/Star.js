import { useEffect, useRef } from "react";

import PageLayout from "../main/PageLayout";
import DeviceFrame from "../system/DeviceFrame";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Star = () => {
  const titleRef = useRef(null);
  const overviewRef = useRef(null);
  const designRef = useRef(null);
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
      overviewRef.current,
      designRef.current,
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
        {/* 타이틀 + 버튼 */}
        <div className="page-title">
          <h1 ref={titleRef} className="neon-title">
            별조각마켓
          </h1>
          <div className="btn-wrap">
            <a
              href="https://zrr.kr/WnnpDw"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              와이어프레임
            </a>
            <a
              href="https://ssu09090.github.io/Byeoljogak/index.html"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              SITE
            </a>
            <a
              href="https://github.com/ssu09090/ssu09090.github.io/tree/main/Byeoljogak"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* 화면 프리뷰 */}
        <section className="star_page">
          <div className="survey">
            <ul>
              <li>제작기간 : 5월 7일 (1일)</li>
              <li>제작 기여도 : 100% (개인 프로젝트)</li>
              <li>사용된 스킬 : Figma, HTML, CSS, SCSS</li>
            </ul>
          </div>
          <div className="star_view">
            <div className="desktop-pic">
              <DeviceFrame
                device="desktop"
                frameImg={`${process.env.PUBLIC_URL}/images/device/desktop.png`}
                screens={[
                  `${process.env.PUBLIC_URL}/images/screen/star_1.png`,
                  `${process.env.PUBLIC_URL}/images/screen/star_2.png`,
                  `${process.env.PUBLIC_URL}/images/screen/star_3.png`,
                  `${process.env.PUBLIC_URL}/images/screen/star_4.png`,
                ]}
              />
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="overview" ref={overviewRef}>
          <h1>OVERVIEW</h1>
          <div className="overview-wrap">
            <div className="overview1">
              <h3>프로젝트 설명</h3>
              <p>
                HTML 기반의 플리마켓 콘셉트로 구성된 블로그형 기업 홈페이지
                퍼블리싱
              </p>
            </div>
            <div className="overview2">
              <h3>프로젝트 목표</h3>
              <p>
                플리마켓 브랜드의 분위기와 정체성을 시각적으로 효과적으로 전달{" "}
                <br />
                정적인 웹사이트 구성 안에서도 풍부한 정보 전달을 고려한 섹션
                설계
              </p>
            </div>
            <div className="overview3">
              <h3>UI 설계</h3>
              <p>
                Figma를 이용한 디자인 시스템 구축 후 코드를 구현, <br />
                Flex 기반의 카드형 레이아웃으로 구성
              </p>
            </div>
            <div className="overview4">
              <h3>차별화</h3>
              <p>
                일러스트, 폰트, 파스텔톤 컬러 활용 등으로 감성적이고 따뜻한
                비주얼을 구성 <br />
                사용자가 직관적으로 정보에 접근하도록 시맨틱 태그 기반으로
                구조를 설계
              </p>
            </div>
            <div className="overview5">
              <h3>구현한 기능</h3>
              <p>
                카드형 레이아웃을 활용해 서비스 소개가 사용자에게 직관적으로
                전달되도록 구성 <br />
                스크롤 탑 버튼 구현으로 기본적인 인터랙션 요소를 포함
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
                src={`${process.env.PUBLIC_URL}/images/detail/color_5.png`}
                alt="색상차트"
              />
            </div>
            <div className="design-typo">
              <h3>Typography</h3>
              <img
                src={`${process.env.PUBLIC_URL}/images/detail/typo_5.png`}
                alt="사용폰트"
              />
            </div>
          </div>
        </section>

        {/* RETRACE */}
        <section className="retrace" ref={retraceRef}>
          <h1>RETRACE</h1>
          <div className="retrace-wrap">
            <div className="retrace1">
              <h3>문제점</h3>
              <p>
                감성적인 톤앤매너를 유지하면서도 레이아웃 정렬을 맞추는 데
                어려움을 겪었습니다 <br />
                배경 이미지와 텍스트 대비 조정을 반복하며 많은 시간이 소요됐습니다
              </p>
            </div>
            <div className="retrace2">
              <h3>해결방법</h3>
              <p>
                컬러 팔레트를 명확히 지정 후 텍스트와 배경 대비를 조절해 <br />
                SCSS를 적극적으로 활용해 레이아웃과 컴포넌트의 스타일을 일관되게
                유지했습니다
              </p>
            </div>
            <div className="retrace3">
              <h3>개선방안</h3>
              <p>
                추후 반응형으로 설계해 모든 디바이스에도 적용이 필요합니다 <br />
                콘텐츠 정렬 기준을 명확히 하고, 레이아웃 구조를 유연하게 설계해
                개선할 예정입니다
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Star;
