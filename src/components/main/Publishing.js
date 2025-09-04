import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Publishing = () => {
  const navigate = useNavigate();
  const cloneTitleRef = useRef(null);
  const publishingTitleRef = useRef(null);
  const practicalTitleRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const neonAnim = (el) => {
      if (el) {
        gsap.to(el, {
          duration: 1,
          repeat: -1,
          yoyo: true,
          textShadow: `
          0 0 5px #80ff00,
          0 0 5px #80ff00,
          0 0 5px #80ff00
        `,
          ease: "power1.inOut",
        });
      }
    };

    neonAnim(cloneTitleRef.current);
    neonAnim(publishingTitleRef.current);
    neonAnim(practicalTitleRef.current);

    // 각 project-item 스크롤 애니메이션
    itemsRef.current.forEach((item) => {
      if (item) {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div>
      {/* CLONE CODING */}
      <section className="clone">
        <h1 ref={cloneTitleRef} className="neon-title">
          CLONE CODING
        </h1>
        <p className="pj-ment">
          실무에서 널리 활용되는 사용자 인터페이스를 직접 구현함으로써,
          <br />
          프론트엔드 구조적 이해와 사용자 경험 흐름에 대한 감각을 체득하고자
          하였습니다. <br />
          단순한 모방을 넘어, 실제 서비스를 코드로 해석하고
          <br />
          재구성하는 과정을 통해 개발 역량을 더욱 견고히 다질 수 있었습니다.
        </p>
        <p className="warning">
          크롬 접속시 '위험한 사이트' 경고가 있어도 <br />
          '안전하지 않은 사이트'로 접속해주세요
        </p>

        <div className="projects-list">
          <div
            className="project-item"
            ref={(el) => (itemsRef.current[0] = el)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/project/tesla_thumnail.png`}
              alt="테슬라"
            />
            <div className="project-detail">
              <h3>1. TESLA</h3>
              <p className="explain">반응형 페이지 구현</p>
              <div className="btn-wrap">
                <button className="btn" onClick={() => navigate("/Tesla")}>
                  MORE
                </button>
                <a
                  href="https://ssu09090.github.io/tesla"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SITE
                </a>
                <a
                  href="https://github.com/ssu09090/ssu09090.github.io/tree/main/tesla"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div class="project-item" ref={(el) => (itemsRef.current[1] = el)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/project/airbnb_thumnail.png`}
              alt="에어비앤비"
            />
            <div class="project-detail">
              <h3>2. AIRBNB</h3>
              <p class="explain">Grid 레이아웃 구현</p>
              <div class="btn-wrap">
                <button className="btn" onClick={() => navigate("/Air")}>
                  MORE
                </button>
                <a
                  href="https://ssu09090.github.io/airbnb"
                  class="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SITE
                </a>
                <a
                  href="https://github.com/ssu09090/ssu09090.github.io/tree/main/airbnb"
                  class="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div class="project-item" ref={(el) => (itemsRef.current[2] = el)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/project/netflix_thumnail.png`}
              alt="넷플릭스"
            />
            <div class="project-detail">
              <h3>3. NETFLIX</h3>
              <p class="explain">React 활용, 오픈 API 연동</p>
              <div class="btn-wrap">
                <button className="btn" onClick={() => navigate("/Net")}>
                  MORE
                </button>
                <a
                  href="https://ssu09090.github.io/netflix/"
                  class="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SITE
                </a>
                <a
                  href="https://github.com/ssu09090/netflix"
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

      {/* PUBLISHING */}
      <section className="publishing">
        <div className="title-wrap">
          <h1 ref={practicalTitleRef} className="neon-title">
            PRACTICAL
          </h1>
          <h1 ref={publishingTitleRef}>PUBLISHING</h1>
        </div>
        <p className="warning">
          크롬 접속시 '위험한 사이트' 경고가 있어도 <br />
          '안전하지 않은 사이트'로 접속해주세요
        </p>

        <div className="publishing-grid">
          <div
            className="project-item"
            ref={(el) => (itemsRef.current[3] = el)}
          >
            <a
              href="https://ssu09090.github.io/postboard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/project/postboard_thumnail.png`}
                alt="게시판"
              />
            </a>
            <ul>
              <li>REACT</li>
              <li>JSON</li>
              <li>SUPABASE</li>
              <li>SASS</li>
            </ul>
            <div className="project-detail">
              <h3>와글와글 게시판</h3>
              <p className="explain">
                데이터베이스 연동 <br />
                등록된 이메일 기반으로 로그인 <br />
                게시글 및 댓글 작성, 수정, 삭제 기능 구현
                <br />
                샘플 로그인 메일 : 1004@sample.com
              </p>
            </div>
          </div>
          <div class="project-item" ref={(el) => (itemsRef.current[4] = el)}>
            <a
              href="https://ssu09090.github.io/myday/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/project/momento_thumnail.png`}
                alt="모멘토"
              />
            </a>

            <ul>
              <li>REACT</li>
              <li>JSON</li>
              <li>OPEN API</li>
              <li>SASS</li>
            </ul>
            <div class="project-detail">
              <h3>MOMENTO</h3>
              <p class="explain">
                날씨 API 연동 <br />
                실시간 날짜 및 시간 확인 기능 <br />
                다크/화이트/갤러리 모드 <br />
                로그인 및 메모 관리 기능 구현
              </p>
            </div>
          </div>
          <div class="project-item" ref={(el) => (itemsRef.current[5] = el)}>
            <a
              href="https://ssu09090.github.io/seasons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/project/seasons_thumnail.png`}
                alt="사계절"
              />
            </a>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
            <div class="project-detail">
              <h3>FOUR SEASONS</h3>
              <p class="explain">
                카테고리 별 이미지 필터링 <br />
                JavaScript로 데이터 분리 관리
              </p>
            </div>
          </div>
          <div class="project-item" ref={(el) => (itemsRef.current[6] = el)}>
            <a
              href="https://ssu09090.github.io/bookstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/project/book_thumnail.png`}
                alt="책 소개"
              />
            </a>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div class="project-detail">
              <h3>북 인트로 페이지</h3>
              <p class="explain">
                3D 회전 애니메이션으로
                <br />책 표지·뒷면·측면을 시각적으로 구성
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publishing;
