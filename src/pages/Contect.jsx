import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ECellContact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
      });

      gsap.from(rightRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    // Add real submission logic here
  };

  return (
    <section
      ref={sectionRef}
      className=" text-white bg-black px-4 sm:px-6 py-10 md:py-20 "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Info + Map */}
        <div
          ref={leftRef}
          className="mx-auto w-11/12 max-w-md space-y-5 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700">
            Contact E-Cell
          </h2>
          <p className="text-base sm:text-lg ">
            We at E-Cell foster entrepreneurial spirit, empower students to
            innovate, and connect them with industry leaders. Reach out to us!
          </p>
          <p className="  ">
            📧{" "}
            <a
              href="mailto:ecell@example.com"
              className="text-blue-600 underline"
            >
              ecell@example.com
            </a>
            <br />
            📞{" "}
            <a href="tel:+918102685851" className="text-blue-600 underline">
              +91 8102685851
            </a>
          </p>
          <div className="relative w-full">
            <img
              src="https://t3.ftcdn.net/jpg/03/15/44/56/360_F_315445649_00DrF55vABpPacVw63X6Cqq00UWNMWqD.jpg"
              alt="World Map"
              className="w-full max-h-64 object-cover rounded-xl border shadow-lg"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md">
              We are here
            </button>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          ref={rightRef}
          onSubmit={handleSubmit}
          className="mx-auto w-11/12 max-w-md bg-transparent border border-gray-200 shadow-xl rounded-2xl p-5 sm:p-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Prince Sharma"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ceoprinceraj@gmail.com"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="8102685851"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your message here..."
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full active:scale-95 cursor-pointer bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ECellContact;