import PageLayout from "../main/PageLayout";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Netflix = () => {
  const titleRef = useRef(null);
  const descRefs = useRef([]);
  const cloneRefs = useRef([]);

  // 이미지 hover 애니메이션
  const handleEnter = (el, direction) => {
    gsap.to(el, {
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = (el) => {
    gsap.to(el, {
      x: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

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

    // 설명 섹션 애니메이션
    if (descRefs.current.length > 0) {
      gsap.fromTo(
        descRefs.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: descRefs.current[0],
            start: "top 40%",
          },
        }
      );
    }

    // 이미지 등장 애니메이션
    if (cloneRefs.current.length > 0) {
      gsap.fromTo(
        cloneRefs.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: cloneRefs.current[0],
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <PageLayout>
      <div className="detail-page">
        <section className="clone_page">
          <div className="clone_info">
            {/* 제목 */}
            <div className="page-title">
              <h1 ref={titleRef} className="neon-title">
                NETFLIX
              </h1>
            </div>

            {/* 설명 섹션 */}
            <div ref={(el) => (descRefs.current[0] = el)}>
              <h3>제작에 사용된 스킬</h3>
              <ul>
                <li>React, SCSS, REST API</li>
              </ul>
            </div>

            <div ref={(el) => (descRefs.current[1] = el)}>
              <h3>프로젝트 설명</h3>
              <ul>
                <li>
                  클론 사이트 : NETFLIX{" "}
                  <a
                    href="https://www.netflix.com/kr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (https://www.netflix.com/kr/)
                  </a>
                </li>
                <li>API 연동으로 영화 이미지 뿐만 아니라 정보를 가져올 수 있음</li>
                <li>이미지 슬라이드를 사용해 동적 UI를 구현</li>
                <li>
                  넷플릭스 클론 코딩으로 슬라이더 기능, 라우팅 처리, API 호출 등을
                  통해 실전 중심의 UI 구현을 경험
                </li>
              </ul>
            </div>

            <div ref={(el) => (descRefs.current[2] = el)}>
              <h3>프로젝트 개요</h3>
              <ul>
                <li>
                  레이아웃 제작 방식 &nbsp;: &nbsp;
                  <span className="mobile-break">
                    <br />
                  </span>
                  Flex 및 Grid를 기반으로 카드 형태의 레이아웃 제작
                </li>
                <li>
                  라이브러리 &nbsp;: &nbsp;
                  <span className="mobile-break">
                    <br />
                  </span>
                  React-Router-DOM, React-Icons, React-Slick, Slick-Carousel,
                  Axios, SASS
                </li>
                <li>
                  제작기간 및 기여도 &nbsp;: &nbsp;
                  <span className="mobile-break">
                    <br />
                  </span>
                  6월 24일 (1일) / 100% (개인 프로젝트)
                </li>
              </ul>
            </div>
          </div>

          {/* 버튼 */}
          <div className="btn-wrap">
            <a
              href="https://ssu09090.github.io/netflix/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              SITE
            </a>
            <a
              href="https://github.com/ssu09090/netflix"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          {/* 이미지 뷰 */}
          <div className="clone_view">
            <img
              ref={(el) => (cloneRefs.current[0] = el)}
              className="chap1"
              src={`${process.env.PUBLIC_URL}/images/screen/n_1.png`}
              alt="사이트화면"
              onMouseEnter={() => handleEnter(cloneRefs.current[0], "left")}
              onMouseLeave={() => handleLeave(cloneRefs.current[0])}
            />
            <img
              ref={(el) => (cloneRefs.current[1] = el)}
              className="chap2"
              src={`${process.env.PUBLIC_URL}/images/screen/n_2.png`}
              alt="사이트화면"
              onMouseEnter={() => handleEnter(cloneRefs.current[1], "right")}
              onMouseLeave={() => handleLeave(cloneRefs.current[1])}
            />
            <img
              ref={(el) => (cloneRefs.current[2] = el)}
              className="chap3"
              src={`${process.env.PUBLIC_URL}/images/screen/n_3.png`}
              alt="사이트화면"
              onMouseEnter={() => handleEnter(cloneRefs.current[2], "left")}
              onMouseLeave={() => handleLeave(cloneRefs.current[2])}
            />
            <img
            className="chap4"
            src={`${process.env.PUBLIC_URL}/images/screen/bottom.png`}
            alt="빈공간"/>
            
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Netflix;
