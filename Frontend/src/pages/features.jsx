import React from "react";
import {
  FaGraduationCap,
  FaShieldAlt,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";

const ResourcesPage = () => {
  const features = [
    {
      id: 1,
      title: "Expert Training",
      description:
        "Gain valuable skills and knowledge from industry experts through comprehensive training programs designed to accelerate your professional growth.",
      icon: FaGraduationCap,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Safe Space",
      description:
        "Join a supportive community to share ideas and grow together in an inclusive environment that values every voice and perspective.",
      icon: FaShieldAlt,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Mentorship & Personalized Sessions",
      description:
        "Receive one-on-one guidance for career development and goal setting with experienced mentors who understand your unique journey.",
      icon: FaUsers,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Interactive Workshops",
      description:
        "Engage in hands-on learning to enhance leadership and time management skills through practical exercises and real-world scenarios.",
      icon: FaChalkboardTeacher,
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="w-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div id="resources" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Features
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we empower your growth through expert guidance,
            supportive community, and transformative learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8">
                <div
                  className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Journey?
            </h2>
            <p className="text-gray-600 mb-6">
              Join a number of people who are accelerating their careers with
              our comprehensive platform.
            </p>
            <button
              onClick={() =>
                (window.location.href =
                  "https://docs.google.com/forms/d/e/1FAIpQLSc4Jt5jKc1e2BCS4lJ2vWTC95gi1gp8zxF0FwNa4PO6aSvBFg/viewform?usp=header")
              }
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPage;
