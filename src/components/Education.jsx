import React from 'react';

const Education = ({content}) => {
  return (
    <div name='education' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Education</p>
              <p className='py-4 text-2xl'>{content?.fields.schools_header}</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {content?.fields.schools.map((school, index) => {
              return (
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500" key={index}>
                    <h4 className="my-4">{school.name}</h4>
                  <p className="my-4">{school.program}</p>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
};
export default Education;