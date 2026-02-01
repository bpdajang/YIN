import React from "react";
import Kinako from "../Assets/Profile/Kinako.jpeg";
import Zanunga from "../Assets/Profile/Zanunga.jpeg";
import Babitimo from "../Assets/Profile/Babitimo.jpeg";
import Marcella from "../Assets/Profile/Marcella.jpeg";
import Devai from "../Assets/Profile/Devai.jpeg";
import Burjwok from "../Assets/Profile/Burjwok.jpeg";
import Missa from "../Assets/Profile/Missa.jpeg";
import Jenifer from "../Assets/Profile/Jennifer.jpeg";
import Ganniko from "../Assets/Profile/Ganniko.png";

const OurTeam = () => {
  return (
    <section className="w-screen bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Team Section */}
      <div
        id="our-team"
        className="w-[95%] ml-2 bg-white rounded-2xl shadow-lg *:mt-3 my-10  px-5 md:ml-5 sm:px-6 md:px-8 lg:px-10"
      >
        <div className="text-center mb-12 pt-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-600 text-lg">
            Meet the dedicated professionals driving our mission forward
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Founder & Executive Director */}
          <div className="text-center mb-10">
            <div className="w-36 h-40 bg-gradient-to-br from-green-400 to-blue-500 square-full mx-auto mb-4 flex items-center justify-center">
              <img
                src={Kinako}
                alt="Kinako Denis Elia Dazangapai"
                className="w-full h-full object-cover square-full"
              />
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

          {/* Project Coordinator */}
          <div className="text-center mb-10">
            <div className="w-36 h-40 bg-gradient-to-br from-yellow-400 to-green-500 square-full mx-auto mb-4 flex items-center justify-center">
              <img
                src={Devai}
                alt="Devai Peter"
                className="w-full h-full object-cover square-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Devai Peter
            </h3>
            <p className="text-yellow-600 font-medium">
              Deputy executive director{" "}
            </p>
            <p className="text-gray-600 mt-2">
              Assists in strategic planning, program oversight, and stakeholder
              engagement.
            </p>
          </div>

          {/* Program Manager */}
          <div className="text-center mb-10">
            <div className="w-36 h-40 bg-gradient-to-br from-purple-400 to-pink-500 square-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
              <img
                src={Zanunga}
                alt="Zanunga Ferida"
                className="w-full h-48 relative -bottom-4 square-full"
              />
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

          {/* Director of Programs and Impact Activities */}
          <div className="text-center mb-10">
            <div className="w-36 h-40 bg-gradient-to-br from-blue-400 to-indigo-500 square-full mx-auto mb-4 flex items-center justify-center">
              <img
                src={Babitimo}
                alt="Babitimo Innocent"
                className="w-full h-full object-cover square-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Jackson Philip Zereda
            </h3>
            <p className="text-blue-600 font-medium">
              Director of Programs and Impact Activities
            </p>
            <p className="text-gray-600 mt-2">
              Leads program design, implementation, and impact assessment.
            </p>
          </div>

          {/* Activities Coordinator */}
          <div className="text-center mb-10">
            <div className="w-36 h-40 bg-gradient-to-br from-red-400 to-orange-500 overflow-hidden square-full mx-auto mb-4 flex items-center justify-center">
              <img
                src={Marcella}
                alt="Marcella Nunu"
                className="w-full h-60 relative top-5 square-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Marcella Nunu
            </h3>
            <p className="text-red-600 font-medium">
              Operation and administrative manager
            </p>
            <p className="text-gray-600 mt-2">
              Designs and manages events, trainings, and participant engagement.
            </p>
          </div>

          {/* IT & Media Lead */}
          <div className="text-center mb-10">
            <div className="w-36 h-40 bg-gradient-to-br from-indigo-400 to-purple-500 square-full mx-auto mb-4 flex items-center justify-center">
              <img
                src={Burjwok}
                alt="Burjwok Paulo Deng"
                className="w-full h-full object-cover square-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Burjwok Paulo Deng
            </h3>
            <p className="text-indigo-600 font-medium">
              Communication and Innovation lead
            </p>
            <p className="text-gray-600 mt-2">
              Manages IT infrastructure, digital media, and online presence.
            </p>
          </div>

          {/* Assistance Communication and Innovation lead */}
          <div className="text-center mb-10">
            <div className="w-36 h-40 bg-gradient-to-br from-pink-400 to-red-500 square-full mx-auto mb-4 flex items-center justify-center">
              <img
                src={Missa}
                alt="Missa George"
                className="w-full h-full object-cover square-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Missa George
            </h3>
            <p className="text-pink-600 font-medium">
              Assistance Communication and Innovation lead
            </p>
            <p className="text-gray-600 mt-2">
              Supports media production, content creation, and communication
              strategies.
            </p>
          </div>

          {/* Advocacy and partnerships Coordinator */}
          <div className="text-center mb-10">
            <div className="w-36 h-40 bg-gradient-to-br from-pink-400 to-red-500 square-full mx-auto mb-4 flex items-center justify-center">
              <img
                src={Jenifer}
                alt="Jenifer Mongozingbare Ngbidigi"
                className="w-full h-full object-cover square-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Jenifer Mongozingbare Ngbidigi
            </h3>
            <p className="text-green-400 font-medium">
              Advocacy and partnerships Coordinator
            </p>
            <p className="text-gray-600 mt-2">
              Manages stakeholder relationships, advocacy efforts, and
              partnership development.
            </p>
          </div>

          {/* Deputy Advocacy and partnerships Coordinator */}
          <div className="text-center mb-10">
            <div className="w-36 h-40 bg-gradient-to-br from-pink-400 to-green-300 square-full mx-auto mb-4 flex items-center justify-center">
              <img
                src={Ganniko}
                alt="Gaaniko Abel Mark"
                className="w-full h-full object-cover square-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Gaaniko Abel Mark
            </h3>
            <p className="text-yellow-400 font-medium">
              Deputy Advocacy and partnerships Coordinator
            </p>
            <p className="text-gray-600 mt-2">
              Manages stakeholder relationships, advocacy efforts, and
              partnership development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
