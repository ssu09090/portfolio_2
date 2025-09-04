import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Scroll = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="scroll-buttons">
      {showButton && (
        <>
          <button onClick={scrollToTop} className="top-btn">
            <FaArrowUp />
          </button>
          <button onClick={scrollToBottom} className="bottom-btn">
            <FaArrowDown />
          </button>
        </>
      )}
    </div>
  );
};

export default Scroll;
