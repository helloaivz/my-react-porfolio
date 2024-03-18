import React from 'react'

import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-[#0a192f] sm:flex justify-center items-center p-4 '>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full md:h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                
            </div>
            <div className='pb-8 flex flex-col justify-center w-full md:h-full items-center text-white'>
            <h3 className='text-white flex justify-between items-center text-4xl font-bold text-white p-10'>Let's get in touch!</h3>
            <ul>
          <li className='w-[260px] h-[60px] flex justify-between items-center ml-[-100px]'>
            
          <SocialIcon network="linkedin" href="https://www.linkedin.com/in/aivie-baranao" /> <a
              className='flex justify-between items-center w-full text-gray-300 p-5'
              href='https://www.linkedin.com/in/aivie-baranao'
            >
               Linkedin 
            </a>
          </li>
          <li className='w-[260px] h-[60px] flex justify-between items-center ml-[-100px]'>
            
          <SocialIcon network="github" href="www.github.com/helloaivz/" /> <a
              className='flex justify-between items-center w-full text-gray-300 p-5'
              href='https://github.com/helloaivz/'
            >
               Github 
            </a>
          </li>
          <li className='w-[260px] h-[60px] flex justify-between items-center ml-[-100px]'>
            
          <SocialIcon network="email" href="www.github.com/helloaivz/" /> <a
              className='flex justify-between items-center w-full text-gray-300 p-5'
              href='mailto:aivz.villanueva@gmail.com'
            >
               Email 
            </a>
          </li>
        </ul>
        </div>
        </div>
    </div>
  )
}
export default Contact