import { useEffect, useRef } from "react";
import gsap from "gsap";

const upcomingEvents = [
  {
    date: "July 6, 2025",
    title: "Success Story & Insights",
    description:
      "Get ready to be inspired! A power-packed session with Pradeep Motwani, CEO of Terrablu Climate Technologies Pvt. Ltd. Learn how he turned challenges into opportunities in the climate tech space. Discover real-life lessons, startup strategies, and actionable insights.",
  },
];

const pastEvents = [
  {
    title: "From Idea to Launch – Entrepreneur Essentials",
    description:
      "We organized a power-packed webinar featuring Jitender Singh Dahiya, CEO of TrustXpay & PayKio. He shared insights on transforming ideas into ventures and FinTech strategies. Watch the recording: https://www.youtube.com/live/b6AajuiPmf4?si=5JNRLhd4vcbsgLMn",
  },
  {
    title: "Phone-A-Friend: Alumni Outreach Initiative",
    description:
      "We launched a heartfelt initiative to reconnect with alumni and support final-year students through mentorship, job referrals, and community-building.",
  },
  {
    title: "Pitch Desk: Master Your Startup Pitch!",
    description:
      "An exclusive offline workshop in collaboration with Unblue. Attendees received pitch training from Shark Tank veterans with personalized feedback and market insights.",
  },
  {
    title: "Empowered Her: Women Entrepreneurs Quiz",
    description:
      "An engaging online quiz on Unstop celebrating women-led ventures, empowerment, and awareness. This short event honored the impact of women in business.",
  },
];

const Event = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Upcoming Events Animation: Fade in from below
      gsap.from(".event-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Past Events Animation: Slide in from left with skew
      gsap.from(".past-event-card", {
        opacity: 1,
        x: -40,
        skewX: 5,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.5,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black text-white">
      <section
        ref={containerRef}
        className=" max-w-6xl mx-auto px-6 py-16 mt-24"
        aria-label="Event Section"
      >
        {/* ------------------ Upcoming Events ------------------ */}
        <h2 className="text-4xl font-extrabold text-center mb-12 font-[Orbitron]">
          Upcoming Events
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {upcomingEvents.map(({ date, title, description }, index) => (
            <article
              key={index}
              className="event-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-[#111]"
              tabIndex={0}
              aria-labelledby={`event-title-${index}`}
              aria-describedby={`event-desc-${index}`}
            >
              <time
                className="text-sm text-blue-500 font-semibold mb-2 block"
                dateTime={new Date(date).toISOString()}
              >
                {date}
              </time>
              <h3
                id={`event-title-${index}`}
                className="text-xl font-bold mb-3 font-[Orbitron]"
              >
                {title}
              </h3>
              <p id={`event-desc-${index}`} className="leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* ------------------ Past Events ------------------ */}
        <h2 className="text-4xl font-extrabold text-center mt-24 mb-12 font-[Orbitron]">
          Past Events
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {pastEvents.map(({ title, description }, index) => (
            <article
              key={index}
              className="past-event-card p-6 bg-[#1a1a1a] rounded-lg border border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 font-[Orbitron]">
                {title}
              </h3>
              <p className="leading-relaxed whitespace-pre-wrap">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Event;