import { useEffect, useRef } from "react";
import gsap from "gsap";

const images = [
  "https://media.licdn.com/dms/image/v2/D4D22AQFuUGkHhPzKLA/feedshare-shrink_1280/B4DZQL0CVYHwAk-/0/1735364989852?e=1753920000&v=beta&t=EHWdsUQqXcATLORDTmTNEpH8MTgsJ7bkvLkjoPq8BRI",
  "https://media.licdn.com/dms/image/v2/D4D22AQGxlDdFZtwKWw/feedshare-shrink_1280/B4DZbdOFk2IAAk-/0/1747468181594?e=1753920000&v=beta&t=DySM50gRG_8K66RSRMkGXZopj6RYZGBFrkW33TIWOlc",
  "https://media.licdn.com/dms/image/v2/D4D22AQGNvt5eeaWVeA/feedshare-shrink_1280/B4DZbTGf1hGUAk-/0/1747298421226?e=1753920000&v=beta&t=cTXGNwJ7XDoMPjWR-QxjFWTBBa9-rfcYa6eNJiEFOQI",
  "https://media.licdn.com/dms/image/v2/D5622AQEcwx53pQsi9A/feedshare-shrink_800/feedshare-shrink_800/0/1726064783122?e=1753920000&v=beta&t=wZve-OqYxnY4xyKCIpNFGmQ9XNBcCEf-dOM6V7SyIVU",
  "https://media.licdn.com/dms/image/v2/D4D22AQFxE_dQZzmgog/feedshare-shrink_800/feedshare-shrink_800/0/1730352586962?e=1753920000&v=beta&t=mxHJxrTaMG7T0ie1o22FDGA3l6dGgJy08lxWPWvHfOE",
];

const FLIP_WORDS = ["Impact", "Works"];
const FLIP_INTERVAL = 2000;
const MARQUEE_DURATION = 10;

export default function ECellMarquee() {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const wordRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const wordEl = wordRef.current;
    if (!marquee || !wordEl) return;

    // Marquee animation
    const totalWidth = marquee.scrollWidth / 2;
    gsap.set(marquee, { x: 0 });
    animationRef.current?.kill();

    animationRef.current = gsap.to(marquee, {
      x: -totalWidth,
      ease: "none",
      duration: MARQUEE_DURATION,
      repeat: -1,
      modifiers: {
        x: (x) => {
          let val = parseFloat(x);
          if (val <= -totalWidth) val += totalWidth;
          return val + "px";
        },
      },
    });

    // Flip word animation
    let index = 0;
    const flipWords = () => {
      gsap.to(wordEl, {
        rotateX: 90,
        duration: 0.3,
        ease: "none",
        onComplete: () => {
          wordEl.textContent = FLIP_WORDS[index];
          index = (index + 1) % FLIP_WORDS.length;
          gsap.fromTo(
            wordEl,
            { rotateX: -90 },
            { rotateX: 0, duration: 0.3, ease: "none" }
          );
        },
      });
    };

    const interval = setInterval(flipWords, FLIP_INTERVAL);

    return () => {
      animationRef.current?.kill();
      clearInterval(interval);
    };
  }, []);

  const pauseMarquee = () => animationRef.current?.pause();
  const resumeMarquee = () => animationRef.current?.resume();

  return (
    <section className="relative w-[90%] bg-black mx-auto py-6 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="font-extrabold text-2xl md:text-3xl">
          Our{" "}
          <span
            className="text-blue-600 font-[Orbitron]"
            ref={wordRef}
            style={{
              display: "inline-block",
              minWidth: "80px",
              transformStyle: "preserve-3d",
            }}
          >
            Impact
          </span>{" "}
          in HIT Haldia
        </h1>
        <p className="text-lg md:text-xl mt-2 text-white">
          A showcase of our achievements, moments, and milestones.
        </p>
      </div>

      {/* Marquee */}
      <div
        className="overflow-hidden relative"
        onMouseEnter={pauseMarquee}
        onMouseLeave={resumeMarquee}
      >
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 h-full w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div
          ref={marqueeRef}
          className="flex gap-6 sm:gap-10 items-center w-fit"
          style={{ willChange: "transform" }}
        >
          {[...images, ...images].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`E-Cell showcase ${i + 1}`}
              className="h-20 w-20 sm:h-24 sm:w-24 md:h-36 md:w-36 rounded-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
              draggable={false}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}