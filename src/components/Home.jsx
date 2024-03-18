import React from 'react';
import { Link } from "react-scroll"; 

const Home = ({content}) => {
  return (
    <div name="home" className="md:h-screen w-full bg-[#0a192f]">
    <div className="max-w-screen-lg mx-auto sm:flex sm:flex-col items-center justify-center md:h-full px-4 md:flex-row p-20  w-full">
      <div className="sm:flex sm:flex-col justify-center md:h-full md:p-10">
      <h2 className="text-4xl lg:text-7xl font-bold text-white">
          {content?.fields.landing_caption}
      </h2>
        <p className="text-gray-500 py-4 max-w-md">
            {content?.fields.landing_main_text}
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              
            </span>
          </Link>
        </div>
      </div>
      <div className="rounded-2xl mx-auto md:w-2/3 border-none ">
      <iframe src="https://giphy.com/embed/paTz7UZbPfTZFRYnnB" width="420" height="450" frameBorder="0" class="giphy-embed" allowFullScreen="No"></iframe>
      </div>
    </div>
  </div>
  );
};
export default Home