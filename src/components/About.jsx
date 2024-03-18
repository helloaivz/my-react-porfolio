import React from "react";

const About = ({content}) => { 
  return (
    <div name="about" id="about" className="w-full md:h-screen bg-[#0a192f] text-gray-300 p-5">
      <div className="md:flex md:flex-col justify-center items-center w-full md:h-full">
        <div className=" py-16 rounded-md bg-cyan-800 md:flex md:flex-col justify-center items-center md:w-4/6">
          <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 mb-4">
            <div className="sm:text-center md:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid md:grid-cols-2 sm:grid-cols-1 gap-8 px-4">
            <div className="sm:text-center md:text-right text-4xl font-bold">
              <p>
              {content?.fields.about_caption}
              </p>
            </div>
            <div  className="sm:text-left ">
              <p>
                {content?.fields.about_main_details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;