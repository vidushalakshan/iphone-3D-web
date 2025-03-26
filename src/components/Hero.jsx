import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils/index.js";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handlevideoSrc = () => {
    if (window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo);
    }
    else {
        setvideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handlevideoSrc);
    return () => {
      window.removeEventListener("resize", handlevideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12  w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc} loop>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
