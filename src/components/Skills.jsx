import React from 'react';

const Skills = ({content}) => {
  return (
    <div name='skills' className='w-full md:h-screen bg-[#0a192f] text-gray-300 p-5'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full md:h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 text-2xl'>{content?.fields.skills_header}</p>
          </div> 
          <div className='w-full grid grid-cols-4 md:grid-cols-8 gap-8 text-center md:py-8'>
          {content?.fields.skills.map((skill, index) => {
              return (
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-center" key={index}>
                  <p className="my-6">{skill.name}</p>
                  <p className="my-6 text-center block "><img  className="inline" src={skill.logo} width="80"/></p>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
};
export default Skills;