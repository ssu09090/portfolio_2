import { useState } from "react";

const Footer = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <div>
      <div id="C"></div>
      <div className="end">
        <div className="contact-wrap">
          <h1>
            사용자의 경험을 디자인하고
            <br />
            코드로 구현하는 <br />
            프론트엔드 개발자를 꿈꿉니다.
          </h1>

          <div className="contact-info">
            <p>이름 : 정수진</p>
            <p>연락처 : 010-2447-6983</p>
            <p>이메일 : iso99jsj@naver.com</p>
          </div>

          <div className="contact-link">
            <div className="git">
              <a
                href="https://github.com/ssu09090"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="insta">
              <a
                href="https://www.instagram.com/studio.surok?igsh=aTI1cW56N3ZyNG0="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon/insta.png`}
                  alt="인스타그램연결"
                />
              </a>
            </div>

            <div className="kakao">
              <button type="button" onClick={() => setShowQR(true)}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon/talk.png`}
                  alt="카톡qr"
                />
              </button>
            </div>

            <div className="line">
              <a
                href="https://line.me/ti/p/Ha94RJmzuS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon/line.png`}
                  alt="라인qr"
                />
              </a>
            </div>
            <div className="messenger"></div>
          </div>
        </div>
      </div>

      {/* QR 모달 */}
      {showQR && (
        <div className="qr-overlay" onClick={() => setShowQR(false)}>
          <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={`${process.env.PUBLIC_URL}/images/kakao_qr.png`}
              alt="카카오톡QR"
            />
          </div>
        </div>
      )}
      <div className="copyrighter">
        <p>본 페이지는 개인 포트폴리오용으로 제작되었습니다.</p>
        <p>© 2025 Sujin Jeong. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
