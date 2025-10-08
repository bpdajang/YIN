import React from "react";
import { useState } from "react";

const HomePage = () => {
  const [OpenModal, setOpenModal] = useState(false);

  return (
    <section className="w-screen">
      <div id="home" className="container rounded-full w-screen">
        <div
          className=" min-h-screen overflow-hidden hero bg-base-200 bg-cover bg-center max-w-screen-2xl rounded-sm"
          style={{
            backgroundImage:
              "url(https://www.famu.edu/academics/undergraduate-academics/honors-program/img/Club_Organization_2_640x480.jpg)",
          }}
        >
          <div className="hero-overlay bg-green-600 bg-opacity-60"></div>
          <div className="hero-content text-neutral-content flex mt-2 flex-col place-items-start text-center">
            <div className="max-w-2xl mt-10 justify-center">
              <h1 className="mb-5 text-7xl font-bold">
                Empowering Future Leaders
              </h1>
              <p className="mb-5">
                Through knowledge and Action, we nurture the next generation of
                changemakers.
              </p>
              <div className="sm:flex sm:flex-row sm:space-x-6 sm:justify-center flex flex-col space-y-5 items-center">
                <button className="btn btn-secondary mt-5 w-56 text-white  bg-blue-600 border-blue-600 border-2 font-semibold rounded-lg shadow-md transition duration-300 transform hover:bg-transparent hover:scale-105 target:hover:bg-blue-600">
                  <a href="/about">Learn more</a>
                </button>
                <button className="btn btn-secondary w-56 text-white bg-transparent border-blue-600 border-2 font-semibold rounded-lg shadow-md transition duration-300 transform hover:bg-blue-600 hover:scale-105">
                  <a href="/contact">Contact Us</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {OpenModal && <Modal closeModal={setOpenModal} />} */}
    </section>
  );
};

export default HomePage;
