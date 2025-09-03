import Menulist from "./Menulist";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

//메뉴 외 영역 클릭 시 메뉴 닫힘 기능 추가

const Mobilemenu = ({ onClose }) => {
  return createPortal (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <IoMdClose />
        </button>
        <Menulist device={true} />
      </div>
    </div>,
    document.body
  );
};

export default Mobilemenu;
