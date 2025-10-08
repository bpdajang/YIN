import React from "react";

const OurTeam = () => {
  return (
    <div>
      {/* Team Section */}
      <div
        id="our-team"
        className="bg-white rounded-2xl shadow-lg p-8 *:mt-10 my-10 ml-10 mr-[-50px] "
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-600 text-lg">
            Meet the dedicated professionals driving our mission forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Founder & Executive Director */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">KD</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Kinako Denis Elia Dazangapai
            </h3>
            <p className="text-green-600 font-medium">
              Founder & Executive Director
            </p>
            <p className="text-gray-600 mt-2">
              Provides vision, strategy, and leadership for all organizational
              activities.
            </p>
          </div>

          {/* Program Manager */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">ZF</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Zanunga Ferida
            </h3>
            <p className="text-purple-600 font-medium">Program Manager</p>
            <p className="text-gray-600 mt-2">
              Oversees planning, implementation, quality assurance, and impact
              evaluation.
            </p>
          </div>

          {/* Assistant Program Manager */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">BI</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Babitimo Innocent
            </h3>
            <p className="text-blue-600 font-medium">
              Assistant Program Manager
            </p>
            <p className="text-gray-600 mt-2">
              Supports program delivery, logistics, and facilitator liaison.
            </p>
          </div>

          {/* Activities Coordinator */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">MN</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Marcella Nunu
            </h3>
            <p className="text-red-600 font-medium">Activities Coordinator</p>
            <p className="text-gray-600 mt-2">
              Designs and manages events, trainings, and participant engagement.
            </p>
          </div>

          {/* Project Coordinator */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">DP</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Devai Peter
            </h3>
            <p className="text-yellow-600 font-medium">Project Coordinator</p>
            <p className="text-gray-600 mt-2">
              Manages project lifecycles, monitoring budgets, timelines, and
              outputs.
            </p>
          </div>

          {/* IT & Media Lead */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">BP</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Burjwok Paulo Deng
            </h3>
            <p className="text-indigo-600 font-medium">IT & Media Lead</p>
            <p className="text-gray-600 mt-2">
              Handles web development, social media, and multimedia content.
            </p>
          </div>

          {/* Finance Lead */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">HB</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Hipaingba Bernadetha
            </h3>
            <p className="text-pink-600 font-medium">Finance Lead</p>
            <p className="text-gray-600 mt-2">
              Oversees finances, budgeting, accounting, and compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
