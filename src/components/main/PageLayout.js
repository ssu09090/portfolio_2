import { useNavigate } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";
import { FaArrowUp, FaArrowDown, FaHouse } from "react-icons/fa6";
import { useEffect, useState } from "react";

const PageLayout = ({ children }) => {
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);

  // 스크롤 버튼 표시 여부
  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 300); // 300px 이상 내려가면 버튼들 나타남
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="pagelayer">
      {/* 뒤로가기 버튼 */}
      <div className="back-wrap">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <GrLinkPrevious />
        </button>
      </div>

      {/* 페이지별 콘텐츠 */}
      {children}

      {/* 스크롤 & 홈 버튼 (조건부 렌더링) */}
      {showScroll && (
        <div className="scroll-btns">
          <button className="scrolltop" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
          <button className="scrolldown" onClick={scrollToBottom}>
            <FaArrowDown />
          </button>
          <button className="home-btn" onClick={() => navigate("/")}>
            <FaHouse />
          </button>
        </div>
      )}
    </div>
  );
};

export default PageLayout;
