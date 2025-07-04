import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";

const teamData = {
  "Core Team": [
    {
      name: "Ishmit Anand",
      role: "Head",
      img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176851/Ishmit_Anand_HEAD_wz7eks.jpg",
      linkedin: "https://www.linkedin.com/in/ishmit-anand-2300ab24b/",
    },
    {
      name: "Prakash Kumar",
      role: "Co-Head",
      img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176890/Prakash_Kumar_CO-HEAD_fjdllh.jpg",
      linkedin: "https://www.linkedin.com/in/prakash1606/",
    },
    {
      name: "Pranjal Kumar",
      role: "Treasurer",
      img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176891/Pranjal_Kumar_TREASURE_yroyvy.jpg",
      linkedin: "https://www.linkedin.com/in/pranjal-kumar-6b1710234/",
    },
    {
      name: "Shashank Vijay",
      role: "General Secretary",
      img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176894/Shashank_Vijay_GENERAL_SECRETARY_ewcwuu.jpg",
      linkedin: "https://www.linkedin.com/in/shashank-vijay-60a80a24b/",
    },
    {
      name: "Sakshi Sharma",
      role: "Event & Management Head",
      img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176895/Sakshi_Sharma_EVENT_MANAGEMENT_HEAD_d4op1c.jpg",
      linkedin: "https://www.linkedin.com/in/sakshi-sharma-04585824b/",
    },
    {
      name: "Ayushi Srivastava",
      role: "Technical Head",
      img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176813/Ayushi_Srivastava_TECHNICAL_HEAD_lachjc.jpg",
      linkedin: "https://www.linkedin.com/in/ayushi-srivastava-25aaa6266/",
    },
    {
      name: "Abhishek Raj",
      role: "Administration Head",
      img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176676/Abhishek_Raj_ADMINISTRATION_HEAD_bje9mk.jpg",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "Arpita Basu",
      role: "Media Head",
      img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176758/Arpita_Basu_MEDIA_HEAD_udkbmp.jpg",
      linkedin: "https://www.linkedin.com/in/arpita-basu-953181251/",
    },
    {
      name: "Yuvika Sinha",
      role: "Membership Head",
      img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176893/Yuvika_Sinha_MEMBERSHIP_HEAD_kucwij.jpg",
      linkedin: "https://www.linkedin.com/in/yuvika-sinha-33a379260/",
    },
    {
      name: "Aquib Azmi",
      role: "Sponsorship Head",
      img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176723/Aquib_Azmi_SPONSORSHIP_HEAD_yzuhyi.png",
      linkedin: "https://www.linkedin.com/in/aquibtheazmi001/",
    },

    {
      name: "Subid Thakur",
      role: "Content Head",
      img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176892/Subid_Thakur_CONTENT_HEAD_trkp4n.png",
      linkedin: "https://www.linkedin.com/in/subid-thakur-261682337/",
    },

    {
      name: "Ranjeet Kumar Rajak",
      role: "Graphic Designer Head",
      img: "https://res.cloudinary.com/dnmqqz49x/image/upload/v1751176893/Ranjeet_Kumar_Rajak_GD_HEAD_hjtawq.jpg",
      linkedin: "https://www.linkedin.com",
    },
  ],
  "PR Team": [
    {
      name: "Saumya Ranjan",
      role: "PR",
      img: "//",
      linkedin: "https://www.linkedin.com/in/saumya-ranjan-a50624252",
    },
    {
      name: "Abhishek Kumar",
      role: "PR",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQGw1fMgbuQBbw/profile-displayphoto-shrink_400_400/B4EZV35QzYHgAg-/0/1741473255691?e=1753315200&v=beta&t=27hfV10yX5pIeP-TeeSxOzm7QQ5_0y8IlQGUg_SqDjQ",
      linkedin:
        "https://media.licdn.com/dms/image/v2/D4E03AQGw1fMgbuQBbw/profile-displayphoto-shrink_400_400/B4EZV35QzYHgAg-/0/1741473255691?e=1753315200&v=beta&t=27hfV10yX5pIeP-TeeSxOzm7QQ5_0y8IlQGUg_SqDjQ",
    },
    {
      name: "Aman Raj",
      role: "PR",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQFTxhwRmHYwsw/profile-displayphoto-shrink_400_400/B4EZZsNXYsHEAg-/0/1745572165664?e=1753315200&v=beta&t=RYTcijOF2TN-HtyTJnh4SuRFuU1wqdp508_sF8POQS4",
      linkedin:
        "https://www.linkedin.com/in/aman-roy-5172972ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Deeya Gurung ",
      role: "PR",
      img: "../public/pr/diya.jpeg",
      linkedin:
        "https://www.linkedin.com/in/aman-roy-5172972ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Keshav Kashyap",
      role: "PR",
      img: "//",
      linkedin: "https://www.linkedin.com/in/saumya-ranjan-a50624252",
    },
    {
      name: "Prasanna Dondaputti",
      role: "PR",
      img: "//",
      linkedin: "",
    },
    {
      name: "Aritri Pradhan",
      role: "PR",
      img: "//",
      linkedin:
        "https://www.linkedin.com/in/aritri-pradhan-272949353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Abhishek Raj",
      role: "PR",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQHvx8bQPX75pA/profile-displayphoto-shrink_800_800/B4EZU.6IVAHcAk-/0/1740517182104?e=1753315200&v=beta&t=YxYF0mqADXRlbrrUG1zqvyup4IXQoUiLStp7aIzSe3U",
      linkedin:
        "https://www.linkedin.com/in/abhishek-raj-9bb029343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ishmit Anand",
      role: "PR",
      img: "https://media.licdn.com/dms/image/v2/D5603AQFfIkWgMn4i4Q/profile-displayphoto-shrink_400_400/B56ZXi11rAGsAg-/0/1743267519998?e=1753315200&v=beta&t=HbU4JzKhBcSe_x4nc7dQt4KoywZfKMmgWRUJIh-Xxcc",
      linkedin: "https://www.linkedin.com/in/ishmit-anand-2300ab24b",
    },
    {
      name: "SUBID THAKUR",
      role: "PR",
      img: "//",
      linkedin:
        "https://www.linkedin.com/in/subid-thakur-261682337/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BDqwZYVO1SXW53O271Ycfuw%3D%3D",
    },
    {
      name: "Ridhi pandey",
      role: "PR",
      img: "//",
      linkedin:
        "https://www.linkedin.com/in/ridhi-panday-40a400367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Priyanshu Kumar",
      role: "PR",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQHLtzHEf55HQg/profile-displayphoto-shrink_400_400/B4EZWVgSPyGYAk-/0/1741970024563?e=1753315200&v=beta&t=zLqLI6zZ5xHKhuNjuyFucDfeVo8MugYvC86Bd40Fbxs",
      linkedin:
        "https://www.linkedin.com/in/priyanshu-kumar-9b16a5301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Himanshu Raj",
      role: "PR",
      img: "https://media.licdn.com/dms/image/v2/D5603AQG4FpNZbqRJfg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713650102041?e=1753315200&v=beta&t=cAGo8ZXOJYXRY2D3kCE_COFJZECE1mY5EoAibiX0mso",
      linkedin:
        "https://www.linkedin.com/in/himanshu-raj-a7b274291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ayush Kumar Gupta",
      role: "PR",
      img: "",
      linkedin:
        "https://www.linkedin.com/in/ayush-gupta-2166b5293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "CHANCHAL KUMAR DAS",
      role: "PR",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQFGx4D-62CTMg/profile-displayphoto-shrink_400_400/B4EZbGVUPmHwAg-/0/1747084200004?e=1753315200&v=beta&t=wwnlXo2xW-hSHyzP_WcT3RwPli-y3EkFwBAjJaIL7bs",
      linkedin:
        "https://www.linkedin.com/in/chanchal-kumar-das-ab6446365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "SAURAV KUMAR GUPTA",
      role: "PR",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQFc7iO3H-eOrw/profile-displayphoto-shrink_400_400/B4EZb8Y8JvGcAg-/0/1747991119832?e=1753315200&v=beta&t=LLXVAOA4UYgwgrwjzOcQ2mT-eSKO3dYC6zdRe-iAMtY",
      linkedin:
        "https://www.linkedin.com/in/saurav-kumar-gupta-3916a7306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Aman Kumar Amar",
      role: "PR",
      img: "https://media.licdn.com/dms/image/v2/D4D03AQGaNHhwS8RwnA/profile-displayphoto-shrink_400_400/B4DZSJf70fHIAg-/0/1737473639268?e=1753315200&v=beta&t=JhNPwQLcmPZxOjcnY2i-XJGfhJVpi1y6_3NzGC3wP7o",
      linkedin:
        "https://www.linkedin.com/in/aman-kr-amar-771500348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Amit Sharma",
      role: "PR",
      img: "https://media.licdn.com/dms/image/v2/D4D03AQGKdpNyhCvGfg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731576089502?e=1753315200&v=beta&t=uPq0x3iigMDkFUAzNoolZkVAt6F92v18xQkaISPDYuA",
      linkedin: "https://www.linkedin.com/in/amit-sharma-213060292",
    },
    {
      name: "Jakaria Eunus Hussain",
      role: "PR",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQH9PcrqHcrJKg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715148540221?e=1753315200&v=beta&t=FWbT5riM4ljWQitpfJMv1qXeuWdivH9QG6m3A8f0RUw",
      linkedin: "https://in.linkedin.com/in/jakaria-eunus-hussain-784b12307",
    },
  ],
  "Tech Team": [
    {
      name: "Priyanshu Singha Roy",
      role: "Backend Developer",
      img: "https://media.licdn.com/dms/image/v2/D5635AQE1xpNdDBi5-A/profile-framedphoto-shrink_400_400/B56ZbfhYKUHUAc-/0/1747506791628?e=1752210000&v=beta&t=PmBsR0g1IQqZ2ss2RxCMapM1R8Yv0E1fYrrMqt0cMf4",
      linkedin: "https://www.linkedin.com/in/priyanshu-singha-roy-557624294/",
    },
    {
      name: "Prince Sharma",
      role: "FullStack Developer",
      img: "https://media.licdn.com/dms/image/v2/D5603AQEmn00nuFBMnw/profile-displayphoto-shrink_400_400/B56ZbaYEAcGoAg-/0/1747420463936?e=1756944000&v=beta&t=2WOiENcFnTo_oHRL-S0ho1cS3Y7DpUhq4ZuLN7g6cLo",
      linkedin: "https://www.linkedin.com/in/prince-sharma-raj-065544330/",
    },
  ],
  "Graphic Designer": [
    {
      name: "Riya Singh",
      role: "GD",
      img: "",
      linkedin: "https://www.linkedin.com/in/riya-singh-0a756025a/",
    },

    {
      name: "Ranjeet Kumar Rajak ",
      role: "GD",
      img: "",
      linkedin:
        "https://www.linkedin.com/in/ranjeet-kumar-rajak-10b5752a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },

    {
      name: "Aditya kumar",
      role: "GD",
      img: "",
      linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
    },
    {
      name: "Jakaria Eunus Hussain",
      role: "GD",
      img: "",
      linkedin: "https://in.linkedin.com/in/jakaria-eunus-hussain-784b12307",
    },
    {
      name: "QADIR EQBAL",
      role: "GD",
      img: "",
      linkedin: "https://www.linkedin.com/in/qadireqbal",
    },
  ],
  "Content Writer": [
    {
      name: "Bitan Sangram ",
      role: "Content Writter",
      img: "",
      linkedin:
        "https://www.linkedin.com/in/bitansangram?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },

    {
      name: "Nitin Raj",
      role: "Content Writter",
      img: "",
      linkedin:
        "https://www.linkedin.com/in/nitin-raj-434263284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },

    {
      name: "Raj Shekhar",
      role: "Content Writter",
      img: "",
      linkedin: "https://www.linkedin.com/in/shekhar1819",
    },
  ],
  "Video Editor": [
    {
      name: "Sumit Raj Bharti",
      role: "Video Editor",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGXWDGXK1bWnw/profile-displayphoto-shrink_400_400/B56ZcVQu8.HEAg-/0/1748408398552?e=1756944000&v=beta&t=WgyxfzGNkWD8o1oYPv_ifFbc_dnx7bFc1CLAyPlew8k",
      linkedin:
        "https://www.linkedin.com/in/sumit-raj-bharti-0292aa2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Priyanshu Kumar",
      role: "Video Editor",
      img: "",
      linkedin:
        "https://www.linkedin.com/in/priyanshu-kumar-a1b01232b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
     
  Photographer: [
    {
      name: "Gouri Shankar Mahato ",
      role: "Photographer",
      img: "",
      linkedin:
        "https://www.linkedin.com/in/gouri-shankar-mahato-bb5787351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Soumyadeep Patra",
      role: "Photographer",
      img: "",
      linkedin:
        "https://www.linkedin.com/in/soumyadeep-patra-a1932a308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
};

const placeholderImg = "https://via.placeholder.com/150";

const TeamSection = () => {
  const [selectedTeam, setSelectedTeam] = useState(Object.keys(teamData)[0]);

  // const teamData = async () => {
  //   try {
  //     const response = await axios.get("https://api.example.com/team");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   teamData();
  // }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white bg-[url('data:image/svg+xml,%3Csvg width=%2218%22 height=%2218%22 viewBox=%220 0 18 18%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%222%22 height=%222%22 fill=%22%23666666%22/%3E%3C/svg%3E')]">
      <motion.div
        className="p-6 max-w-7xl mx-auto py-20"
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
          <span className="text-blue-500 font-extrabold text-4xl">E-Cell</span>{" "}
          Members
        </motion.h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(teamData).map((team) => (
            <motion.button
              key={team}
              onClick={() => setSelectedTeam(team)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full cursor-pointer text-sm sm:text-base transition duration-300 font-medium shadow-sm ${
                selectedTeam === team
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-blue-100"
              }`}
            >
              {team}
            </motion.button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTeam}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {teamData[selectedTeam].map((member, index) => (
              <motion.div
                key={index}
                className="group bg-white text-black border rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="relative w-28 h-28 mb-4 overflow-hidden rounded-full bg-gray-200">
                  <img
                    loading="lazy"
                    src={member.img || placeholderImg}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h2 className="text-xl font-semibold">
                  {member.name || "No Name"}
                </h2>
                <p className="text-gray-600 mb-3">{member.role || "No Role"}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
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
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TeamSection;
