
import { useEffect, useRef } from "react";
import gsap from "gsap";

const DeviceFrame = ({ device, frameImg, screens, step = 1, pause = 2 }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || screens.length < 2) return;

    let playing = true;

    const loopOnce = () => {
      if (!playing) return;
      gsap.to(track, {
        yPercent: -100 / screens.length,
        duration: step,
        ease: "power2.inOut",
        onComplete: () => {
          track.appendChild(track.firstElementChild);
          gsap.set(track, { yPercent: 0 });
          if (playing) gsap.delayedCall(pause, loopOnce);
        },
      });
    };

    gsap.set(track, { yPercent: 0 });
    gsap.delayedCall(pause, loopOnce);

    return () => {
      playing = false;
      gsap.killTweensOf(track);
      gsap.set(track, { yPercent: 0 });
    };
  }, [screens, step, pause]);

  return (
    <div className={`screen ${device}-pic`}>
      <img src={frameImg} alt={device} />
      <div className="pic" ref={trackRef}>
        {screens.map((src, i) => (
          <img key={i} src={src} alt={`${device} 화면 ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default DeviceFrame;
