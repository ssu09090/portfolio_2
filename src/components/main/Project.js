import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const listRef = useRef(null);

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

    // 각 project-item 개별 애니메이션
    if (listRef.current) {
      const items = listRef.current.querySelectorAll(".project-item");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div>
      <div id="P"></div>
      <section className="projects">
        <div className="project-info">
          <h1  ref={titleRef} className="neon-title">MY PROJECTS</h1>
          <p className="pj-ment">
            실무 감각을 키우기 위해 직접 설계하고 제작한 웹 프로젝트들 입니다.
            <br />
            기획, UI디자인, 퍼블리싱, 프론트엔드 구현까지 전 과정에
            참여하였습니다.
          </p>
          <p className="warning">
            크롬 접속시 '위험한 사이트' 경고가 있어도 <br />
            '안전하지 않은 사이트'로 접속해주세요
          </p>
        </div>

        <div className="projects-list"  ref={listRef}>
          <div className="project-item project1">
            <img
              className="zf"
              src={`${process.env.PUBLIC_URL}/images/project/zeroflow_thumnail.png`}
              alt="제로플로우"
              onMouseOver={(e) =>
                (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/project/zeroflow_thumnail2.png`)
              }
              onMouseOut={(e) =>
                (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/project/zeroflow_thumnail.png`)
              }
            />
            <div className="project-detail">
              <h3>Zero Flow</h3>
              <p className="explain">
                상품목록, 상세페이지, 쇼핑카트 흐름까지 구현한 <br />팀 기반의
                친환경 재활용 용품 쇼핑몰 사이트 프로젝트
              </p>
              <p className="use">Figma, Illustrator, React, SCSS</p>
              <div className="btn-wrap">
                <button className="btn" onClick={() => navigate("/Zero")}>
                  MORE
                </button>
                <a
                  href="https://ssu09090.github.io/ZeroFlow/"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SITE
                </a>
                <a
                  href="https://github.com/ssu09090/ZeroFlow"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-item project2">
            <img
              className="pin"
              src={`${process.env.PUBLIC_URL}/images/project/pin_thumnail.png`}
              alt="핀"
              onMouseOver={(e) =>
                (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/project/pin_thumnail2.png`)
              }
              onMouseOut={(e) =>
                (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/project/pin_thumnail.png`)
              }
            />
            <div className="project-detail">
              <h3>P’IN</h3>
              <p className="explain">
                주차장 기능 홍보 및 할인 쿠폰 발급을 구현한 웹 기반 사이트의 팀
                프로젝트
              </p>
              <p className="use">Figma, Illustrator, React, SCSS, Supabase</p>
              <div className="btn-wrap">
                <button className="btn" onClick={() => navigate("/Pin")}>
                  MORE
                </button>
                <a
                  href="https://ssu09090.github.io/parkin/"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SITE
                </a>
                <a
                  href="https://github.com/ssu09090/parkin"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div class="project-item project3">
            <img
              className="word"
              src={`${process.env.PUBLIC_URL}/images/project/endword_thumnail.png`}
              alt="심심이"
              onMouseOver={(e) =>
                (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/project/endword_thumnail2.png`)
              }
              onMouseOut={(e) =>
                (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/project/endword_thumnail.png`)
              }
            />
            <div class="project-detail">
              <h3>심심이랑 끝말잇기</h3>
              <p class="explain">
                Open API사용으로 AI와 끝말잇기 컨셉 <br />
                사용자와 컴퓨터가 번갈아가며 단어를 이어가는 텍스트기반 게임
              </p>
              <p class="use">Figma, React, 우리말 샘 API 연동, SCSS</p>
              <div class="btn-wrap">
                <button className="btn" onClick={() => navigate("/Word")}>
                  MORE
                </button>
                <a
                  href="https://ssu09090.github.io/endword/"
                  class="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SITE
                </a>
                <a
                  href="https://github.com/ssu09090/endword"
                  class="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div class="project-item project4">
            <img
              className="quiz"
              src={`${process.env.PUBLIC_URL}/images/project/quiz_thumnail.png`}
              alt="훈민정음"
              onMouseOver={(e) =>
                (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/project/quiz_thumnail2.png`)
              }
              onMouseOut={(e) =>
                (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/project/quiz_thumnail.png`)
              }
            />
            <div class="project-detail">
              <h3>훈민정음</h3>
              <p class="explain">
                OX 퀴즈를 풀고 점수를 알 수 있는 인터랙티브한 퀴즈 웹 게임
              </p>
              <p class="use">Figma, React, SCSS</p>
              <div class="btn-wrap">
                <button className="btn" onClick={() => navigate("/Quiz")}>
                  MORE
                </button>
                <a
                  href="https://ssu09090.github.io/quiz/"
                  class="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SITE
                </a>
                <a
                  href="https://github.com/ssu09090/quiz"
                  class="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div class="project-item project5">
            <img
              className="star"
              src={`${process.env.PUBLIC_URL}/images/project/byeoljogak_thumnail.png`}
              alt="별조각마켓"
              onMouseOver={(e) =>
                (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/project/byeoljogak_thumnail2.png`)
              }
              onMouseOut={(e) =>
                (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/project/byeoljogak_thumnail.png`)
              }
            />
            <div class="project-detail">
              <h3>별조각마켓</h3>
              <p class="explain">
                정적 HTML 기반의 블로그형 형식의 퍼블리싱 프로젝트
              </p>
              <p class="use">Figma, HTML, CSS, SCSS</p>
              <div class="btn-wrap">
                <button className="btn" onClick={() => navigate("/Star")}>
                  MORE
                </button>
                <a
                  href="https://ssu09090.github.io/Byeoljogak/"
                  class="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SITE
                </a>
                <a
                  href="https://ssu09090.github.io/Byeoljogak"
                  class="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
