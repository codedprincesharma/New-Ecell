import { FaLinkedin } from 'react-icons/fa';

const Mentor = () => {
  const mentors = [
    {
      name: "Dr. Sandip Kr. Ojha",
      title: "Electrical Engineering",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEyYi0Q4gzf4g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1667653362189?e=1756944000&v=beta&t=SsulWTW-KBS3vKEbx-QRiU26hYsbarGegJSULF7nDpk",
      linkedin: "https://www.linkedin.com/in/dr-sandip-ojha-2b4b3715?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Mr. Debadatta Ghosh",
      title: "AEI Engineering",
      image: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/debadatta-ghosh-76a8519b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Mr. Tilak Raj Maiti",
      title: "Biotechnology Engineering",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFGuEL8_jIFjw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723137573845?e=1756944000&v=beta&t=M8XFeaDGbwYQuXzys2_HjCFz4X8506cvZnrmmznXkPI",
      linkedin: "https://www.linkedin.com/in/dr-tilak-raj-maity-44971089?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Mentors</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-yellow-50 text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{mentor.name}</h3>
              <p className="text-gray-500">{mentor.title}</p>
              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-600 hover:text-blue-800 transition"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentor;