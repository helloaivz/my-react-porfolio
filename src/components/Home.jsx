import React from 'react';
import me from '../assets/me.png';
import { Link } from "react-scroll"; 

const Home = ({content}) => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
      <h2 className="text-4xl sm:text-7xl font-bold text-white">
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
      <div className="rounded-2xl mx-auto w-2/3 md:w-full">
      <iframe src="https://giphy.com/embed/paTz7UZbPfTZFRYnnB" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
    </div>
  </div>
  );
};
export default Home