import React from "react";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Aryan Raj",
    photo:
      "https://media.licdn.com/dms/image/v2/D4D03AQHMdDWNHQfvbg/profile-displayphoto-shrink_400_400/B4DZUIH2MeHAAg-/0/1739598030689?e=1753315200&v=beta&t=8CuyE2xw9n-PNF_CV598rEVxQSh3-B3MZrPZiSGyd44",
    designation: "Co-Founder",
    description:
      "Tech Innovator | AI & Blockchain Enthusiast | Author | Startup Explorer | Content Creator",
    linkedin: "https://www.linkedin.com/in/aryan-raj-754326231/",
  },
  // Add more founders if needed
];

const FounderSection = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <motion.div
        className="p-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-10 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Meet the{" "}
          <span className="text-red-500 font-extrabold">Founders</span>
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="group bg-white text-black border rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative w-28 h-28 mb-4 overflow-hidden rounded-full bg-gray-200">
                <img
                  src={founder.photo}
                  alt={founder.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h2 className="text-xl font-semibold">{founder.name}</h2>
              <p className="text-blue-600 font-medium mt-1 mb-1">
                {founder.designation}
              </p>
              <p className="text-sm text-gray-700 mb-3">{founder.description}</p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-2 font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
                  2.761 2.239 5 5 5h14c2.761 0 
                  5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 
                  20.25h-3v-11h3v11zm-1.5-12.5c-.966 
                  0-1.75-.791-1.75-1.75 0-.966.784-1.75 
                  1.75-1.75s1.75.784 
                  1.75 1.75c0 .959-.784 
                  1.75-1.75 1.75zm13.25 
                  12.5h-3v-5.5c0-1.373-.5-2.25-1.75-2.25-1.083 
                  0-1.625.728-1.896 
                  1.393-.097.236-.121.566-.121.898v5.459h-3s.04-8.857 
                  0-9.75h3v1.38c.399-.615 
                  1.115-1.49 2.717-1.49 1.984 
                  0 3.471 1.296 3.471 4.083v5.777z"
                  />
                </svg>
                LinkedIn
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FounderSection;