import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Startup = () => {
  const containerRef = useRef(null);
  const fundsRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate main title
      gsap.from(".section-title", {
        opacity: 0,
        x: -60,
        scale: 0.8,
        rotation: -5,
        duration: 1,
        ease: "power3.out",
      });

      // Animate all section groups except funds-raised
      gsap.utils
        .toArray(".section-group:not(.funds-raised)")
        .forEach((section, i) => {
          gsap.from(section, {
            opacity: 0,
            x: -80,
            scale: 0.85,
            rotation: -3,
            duration: 1,
            delay: 0.3 * i,
            ease: "power3.out",
          });
        });

      // Animate Funds Raised on scroll
      const fundsTl = gsap.timeline({
        scrollTrigger: {
          trigger: fundsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      fundsTl.from(fundsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      const obj = { val: 0 };
      fundsTl.to(obj, {
        val: 2.5,
        duration: 1,
        ease: "power1.out",
        onUpdate() {
          if (countRef.current) {
            const val = obj.val.toFixed(2);
            countRef.current.innerHTML = `<span class="text-4xl">₹${val}</span> Crores+ raised by our startups through seed funding and grants.`;
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-6xl mx-auto flex flex-col gap-14 py-10 px-4 sm:px-6 md:px-8 lg:px-10"
    >
      {/* Section Title */}
      <h1 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold font-[Orbitron] text-center">
        Achievements
      </h1>

      {/* Our Startups */}
      <div className="section-group flex flex-col gap-6">
        <h2 className="text-2xl font-bold font-[Orbitron] sm:text-3xl md:text-4xl text-blue-600 underline underline-offset-8 decoration-red-500">
          Our Startups
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {/* Only GymPass */}
          <div className="p-6 bg-gray-200 shadow-md rounded-xl text-gray-700 text-sm sm:text-base leading-relaxed">
            <strong className="block text-lg sm:text-xl font-semibold mb-2 text-blue-700">
              Startup 1: GymPass
            </strong>
            GymPass is a fitness-tech startup revolutionizing how India accesses gyms.
            It offers flexible, pay-per-use access to a wide network of partner gyms,
            eliminating the need for long-term memberships. Users—including students,
            travelers, and fitness enthusiasts—can discover nearby gyms and check in using
            a QR-based system, with real-time, hourly billing. At the same time, GymPass
            helps local gyms boost visibility and footfall through a centralized platform,
            creating a win-win for users and fitness centers alike.
          </div>
        </div>
      </div>

      {/* Funds Raised */}
      <div
        ref={fundsRef}
        className="section-group funds-raised flex flex-col gap-2"
      >
        <h2 className="text-2xl font-[Orbitron] sm:text-3xl md:text-4xl font-semibold text-blue-600 underline underline-offset-8 decoration-green-500">
          Funds Raised
        </h2>
        <p
          ref={countRef}
          className="text-base sm:text-lg mt-1"
          dangerouslySetInnerHTML={{
            __html:
              '<span class="text-4xl">₹0.00</span> Crores+ raised by our startups through seed funding and grants.',
          }}
        />
      </div>

      {/* Entrepreneurs Mentored */}
      <div className="section-group flex flex-col gap-2">
        <h2 className="text-2xl font-[Orbitron] sm:text-3xl md:text-4xl font-semibold text-blue-600 underline underline-offset-8 decoration-yellow-400">
          Entrepreneurs Mentored
        </h2>
        <p className="text-base sm:text-lg mt-1">
          30+ students mentored through bootcamps, 1-on-1s, and workshops.
        </p>
      </div>
    </div>
  );
};

export default Startup;