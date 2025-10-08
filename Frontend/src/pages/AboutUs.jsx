import React from "react";

const AboutUs = () => {
  return (
    <section className="w-screen bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="hero min-h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80)",
          }}
        >
          <div className="hero-overlay bg-gradient-to-r from-green-600/70 to-blue-600/70"></div>
          <div className="hero-content text-left text-neutral-content">
            <div className="max-w-4xl pl-8 md:pl-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-pulse">
                About Us
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Youth Impact Network is a youth‑focused non‑governmental
                organization founded in 2022. Our purpose is to bridge gaps in
                leadership, career readiness, health awareness, and personal
                development among young people. Since inception, we have
                delivered workshops, mentorship programs, and community
                engagement initiatives aimed at transforming youth into
                confident, resourceful agents of change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div
            id="mission-vision"
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed text-center">
              To provide tools, training, platforms, and community opportunities
              so youth can strengthen leadership and management skills, access
              career guidance, enhance their health and well‑being, engage in
              community service, and build meaningful networks.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vision</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed text-center">
              To build a foundation that delivers expert training in leadership,
              career development, and health for young people across
              communities, enabling them to become empowered, responsible, and
              proactive citizens.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Empowerment
              </h3>
              <p className="text-gray-600">
                Enabling youth to take ownership of their growth
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                Striving for high standards in programming and delivery
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Inclusivity
              </h3>
              <p className="text-gray-600">
                Welcoming participants of diverse backgrounds
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600">
                Operating transparently, ethically, and responsibly
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Fostering lasting, community-driven impact
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600">
                Working with partners, institutions, and communities
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Join Our Mission
            </h2>
            <p className="text-white mb-6 text-lg">
              Together, we can create a brighter future for the youth of South
              Sudan
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
