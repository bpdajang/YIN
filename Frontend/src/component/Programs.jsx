import React from "react";

const Programs = () => {
  const programs = [
    {
      title: "Leadership & Time Management",
      description:
        "Training sessions and mentorship to build leadership and organizational skills.",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.7-JhZpjdVhkIGJkXCFfNOAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Career Guidance",
      description:
        "Counseling, panels, and goal-setting workshops for career pathways.",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.tibMqsrwd7fioLjugMaIWwHaFV?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Cover Letter & CV Writing",
      description:
        "Hands-on clinics to craft professional resumes and cover letters.",
      image:
        "https://tse2.mm.bing.net/th/id/OIF.Bwb5W7OCmkoXLyswKdT9zQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Mental Health Awareness",
      description:
        "Workshops and peer support for resilience and emotional well-being.",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.E6ulU1nBE7QGHCHCbTw2rgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Physical Health & Wellness",
      description: "Sessions on nutrition, hygiene, and preventive health.",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.Vg_zAnorR4i3XdvnFaZWHAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Skill Development Workshops",
      description:
        "Soft and technical skills including communication, digital literacy, and entrepreneurship.",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.RP-ReJRvNoqN1iNh-lifmQHaEp?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Community Service Projects",
      description:
        "Youth-led initiatives to engage in civic responsibility and social impact.",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.aM2FurwLF9a7_RqhZd4ZqAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Networking Events",
      description:
        "Forums, mentorship fairs, and alumni meetups to connect youth with opportunities.",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.9hnModR7z7-HR0w5K39b-QHaGC?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Programs & Focus Areas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={program.image}
                alt={program.title}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{program.title}</h2>
              <p>{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
