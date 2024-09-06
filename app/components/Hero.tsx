import { useEffect, useState } from "react";

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const videoHeight = windowWidth / (16 / 9);
  return (
    <>
      <div
        className="relative w-full overflow-hidden md:-mt-[4rem] sm: -mt-[2rem] mh-[30rem]"
        style={{ height: videoHeight }}
      >
        <div
          className="absolute inset-0 z-10 bg-black opacity-50 "
          style={{ clipPath: "inset(3.5rem 0 4rem 0)" }}
        ></div>
        <div
          className="absolute inset-0 z-0 w-full h-full overflow-hidden"
          style={{ clipPath: "inset(4rem 0 4rem 0)" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover border-0"
            src="https://www.youtube.com/embed/LggkCxxlsKA?autoplay=1&loop=1&controls=0&modestbranding=1&playlist=LggkCxxlsKA"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        ;
      </div>
    </>
  );
}
