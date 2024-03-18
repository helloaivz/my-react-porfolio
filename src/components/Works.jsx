import React from 'react';
import code from '../assets/code2.png';

const Works = ({content}) => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full md:h-full md:pb-10'>
        <div className='pb-5 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>{content?.fields.work_header}</p>
        </div>
{/* Container */}
              {/* Grid Item */}
   <div className='w-full md:grid md:grid-cols-2 sm:grid-cols-1 gap-4 text-center py-5'>
  {content?.fields.works.map((work, index) => {
    return (
      <div className='w-full inline flex shadow-md shadow-[#040c16] hover:scale-110 duration-500' key={index} >
        <div className='pb-8 w-full flex justify-center items-center inline'>
          <p className="w-40 text-right p-5"><img src={work.work_image}/></p>
          <div className='w-80 text-right p-5'>
          <h4 className=" text-lg font-bold text-white tracking-wider text-left">
            {work.work_title}
          </h4>
          <p className="text-left py-2">
            {work.work_description}
          </p>
          <p className="text-left">
            <a href={work.web_url} >{work.web_url} 
            </a>
          </p>
          </div>
          </div>
        </div>
    );
  })}
  
    </div>
      </div>
    </div>
  );
};
export default Works;