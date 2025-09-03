import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import MobileMenu from "./Mobilemenu";
import TabletMenu from "./Tabletmenu";

import { IoMenuSharp } from "react-icons/io5";


const Menu = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 530);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 모바일 화면 크기 감지
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 530;
      setIsMobile(mobile);

      // 모바일 사이즈 이상일 때 자동으로 메뉴 닫기
      if (!mobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="menu-wrap" className={isScrolled ? "scrolled" : ""}>
      <div
        className="home-btn"
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0})
        }}
      >
        <p> HOME</p>
      </div>
      {isMobile ? (
        <>
          {!menuOpen && (
            <button className="open-menu" onClick={() => setMenuOpen(true)}>
              <IoMenuSharp />
            </button>
          )}
          {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
        </>
      ) : (
        <TabletMenu />
      )}
    </div>
  );
};

export default Menu;
