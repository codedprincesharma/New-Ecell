import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const IdeaForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Ref for the section to animate
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Idea:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", idea: "" });

    setTimeout(() => setSubmitted(false), 4000); // Reset success message
  };

  return (
    <section ref={sectionRef} className="bg-black text-white  py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Submit Your{" "}
          <span className="text-red-500 font-extrabold font-[Orbitron]">Startup</span> Idea
        </h2>
        <p className="text-white mb-8">
          Have an <span className="text-blue-600 font-[Orbitron]">innovative idea</span>? Let us
          know and we’ll help you take it forward!
        </p>
        {submitted && (
          <p className="text-green-600 text-center text-xl mt-4 font-semibold">
            Thank you! Your idea has been submitted.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Prince Sharma"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium ">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ceoprinceraj.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium ">Your Idea</label>
            <textarea
              name="idea"
              required
              rows={5}
              value={formData.idea}
              onChange={handleChange}
              className="w-full border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your startup idea in brief..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 cursor-pointer active:scale-95 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Idea
          </button>
        </form>
      </div>
    </section>
  );
};

export default IdeaForm;