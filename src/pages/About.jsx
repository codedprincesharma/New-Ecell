import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-item").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mt-5 bg-black text-white">
      <section
        ref={containerRef}
        className="max-w-6xl mx-auto px-6 py-15 rounded-lg shadow-md "
      >
        <h2 className="fade-item text-4xl font-extrabold font-[Orbitron] text-blue-500 text-center mb-6">
          About E-Cell HIT Haldia
        </h2>

        <p className="fade-item text-lg leading-relaxed max-w-4xl mx-auto text-center mb-6">
          E-Cell HIT Haldia is the official Entrepreneurship Cell of Haldia Institute of Technology,
          established with a mission to foster the spirit of innovation, leadership, and entrepreneurship among students.
          We aim to empower young minds with the tools, resources, and mindset required to build, innovate,
          and lead in the modern entrepreneurial ecosystem.
        </p>

        <p className="fade-item text-lg leading-relaxed max-w-4xl mx-auto text-center mb-6">
          From conducting inspiring guest sessions and interactive workshops to hosting startup pitch events and case study competitions,
          E-Cell acts as a launchpad for budding entrepreneurs to turn ideas into impactful ventures.
        </p>

        <p className="fade-item text-lg  leading-relaxed max-w-4xl mx-auto text-center mb-8">
          We are proud to be in active collaboration with E-Cell IIT Bombay and E-Cell NIT Hamirpur,
          strengthening our reach, insights, and opportunities through a shared vision for student-led innovation and startup culture.
        </p>

        <h3 className="fade-item text-3xl font-bold text-center mb-4 text-blue-500 font-[Orbitron]">
          Building Of E-Cell
        </h3>

        <p className="fade-item text-lg leading-relaxed max-w-4xl mx-auto text-center mb-4 italic">
          From Midnight Dream to a Thriving Legacy—The E-Cell Journey
        </p>

        <p className="fade-item text-lg leading-relaxed max-w-4xl mx-auto text-center mb-4">
          It all began on an ordinary hostel night—somewhere between a steaming cup of chai and a plate of leftover Maggi.
          Aryan Raj and his roommate Rohan Kumar Singh lay on their creaky beds, gazing at the ceiling fan,
          when an idea quietly sparked into motion: <strong>“Let’s start an E-Cell in our college.”</strong>
        </p>

        <p className="fade-item text-lg leading-relaxed max-w-4xl mx-auto text-center mb-4">
          Not just another student club, but a vibrant, functional Entrepreneurship Cell—
          one that would ignite ideas, support budding startups, and cultivate a culture of innovation on campus.
        </p>

        <p className="fade-item text-lg leading-relaxed max-w-4xl mx-auto text-center mb-4">
          What followed was an intense eight-month journey, filled with rejections, resource crunches,
          administrative hurdles, and sleepless nights. There were days when no one showed up.
          Pitch failures occurred on several occasions. But the dream remained unshaken.
          Slowly, efforts gained momentum. A few believers turned into a core team. That team grew into a movement.
        </p>

        <p className="fade-item text-lg leading-relaxed max-w-4xl mx-auto text-center">
          Workshops were launched, mentorships began, and students started thinking like founders.
          What once began as a late-night whisper became the driving force of HIT’s startup culture—
          the now-thriving <strong>E-Cell HIT Haldia</strong>.
          <br />
          Today, we stand strong because of a passionate group of visionaries who chose action over hesitation
          and built not just an organization but a lasting entrepreneurial legacy.
        </p>
      </section>
    </div>
  );
};

export default About;