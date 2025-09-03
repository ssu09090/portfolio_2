import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaFeatherAlt } from "react-icons/fa";
import { FaHandPointUp } from "react-icons/fa";
import { FaWaveSquare } from "react-icons/fa";
import { FaStairs } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Aboutme = () => {
  const titleRef = useRef(null);

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
  }, []);

  return (
    <div>
      <div id="A"></div>
      <section className="about-me">
        <h1 ref={titleRef} className="neon-title">ABOUT ME</h1>
        <div className="profile-wrap">
          <div className="profile">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.png`}
              alt="프로필 이모지 사진"
            />
            <p>
              협업을 통해 더 나은 사용자 경험을 제공하는 <br />
              문제 해결형 개발자 <strong>정수진</strong> 입니다
            </p>
          </div>
          <div className="resume">
            <div className="contact">
              <h3>Contact</h3>
              <p>
                <IoCall className="icon" />
                　010-2447-6983
              </p>
              <p>
                <IoMail className="icon" />
                　iso99jsj@naver.com
              </p>
            </div>
            <div className="work">
              <h3>Work Experience</h3>
              <p className="date">2024.11 ~ 2025.02</p>
              <p>이플네이처 - 화장품 패키지 디자이너</p>
              <br />
              <p className="date">2022.02 ~ 2024.03</p>
              <p>제노포커스 - 품질관리연구원</p>
            </div>
            <div className="education">
              <h3>Education</h3>
              <div>
                <p className="date">2025.08</p>
                <p>
                  MBC 아카데미 컴퓨터교육센터 <br />
                  웹디자인, 웹퍼블리셔 과정 수료
                </p>
              </div>
              <div>
                <p className="date">2022.02</p>
                <p>한국교통대학교 식품영양학 졸업</p>
              </div>
              <div>
                <p className="date">2018.02</p>
                <p>신탄진고등학교 졸업</p>
              </div>
            </div>
            <div className="license">
              <h3>License</h3>
              <div>
                <p className="date">2025.08</p>
                <p>GTQi 1급</p>
              </div>
              <div>
                <p className="date">2025.07</p>
                <p>컴퓨터그래픽기능사 필기</p>
              </div>
              <div>
                <p className="date">2025.07</p>
                <p>웹디자인개발기능사 필기</p>
              </div>
              <div>
                <p className="date">2024.09</p>
                <p>GTQ 1급</p>
              </div>
              <div>
                <p className="date">2018.08</p>
                <p>2종 보통 운전면허</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEYWORDS */}
      <section className="keywords">
        <div>
          <h2>My Keywords</h2>
        </div>
        <div className="keywords-wrap">
          <p>
            섬세함 <FaFeatherAlt />
          </p>
          <p>
            사용자경험 <FaHandPointUp />
          </p>
          <p>
            자연스러움 <FaWaveSquare />
          </p>
          <p>
            꾸준함 <FaStairs />
          </p>
        </div>
        <div className="intro-ment">
          <p>
            HTML, CSS, JavaScript 기반 웹 퍼블리싱 경험과 React 프로젝트 경험을
            통해 <br />
            UI/UX를 고려한 인터페이스를 구현해왔습니다. <br />
            사용자가 편리하게 느낄 수 있는 화면을 만드는 동시에, <br />
            Git과 협업 툴을 적극 활용하여 원활한 팀워크를 이끌어왔습니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
