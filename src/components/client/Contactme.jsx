import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter , FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion } from 'framer-motion';
const Contactme = () => {
  return (
    <div>
        <div className="headcontact py-4" id='cont'>
            <h1 className='underline underline-offset-[12px]
             uppercase font-extrabold text-3xl'>contact me:</h1>
             <p className='pt-8 font-bold'>I am open to new and amazing challenges in Software Engineering(Frontend)
                 so feel free to reach out to me.</p>
        </div>
        <div className="py-4">
          <ul className='flex gap-7 text-3xl text-white'>
                <li className='bg-black rounded-full w-12 h-12 group hover:bg-white duration-500'>
                    <a href="" className='group-hover:text-black 
                    flex justify-center mt-2 duration-500  '>
                        <RiInstagramFill className='group-hover:scale-125 duration-500'/></a></li>
                <li  className='bg-black rounded-full w-12 h-12 group hover:bg-white duration-500'>
                  <a href="https://x.com/TechGenie_Us" className='group-hover:text-black flex justify-center mt-2'>
                    <FaXTwitter className='group-hover:scale-125 duration-500'/></a></li>
                <li className='bg-black rounded-full w-12 h-12  group hover:bg-white duration-500'>
                    <a href="https://github.com/Aristocbrat"  className='group-hover:text-black flex justify-center mt-2'>
                      <FaGithub  className='group-hover:scale-125  duration-500'/></a></li>
                      <li className='bg-black rounded-full w-12 h-12 group hover:bg-white duration-500'>
           <a href="mailto:emmanuelforbez@gmail.com" className='group-hover:text-black flex justify-center mt-2'>
               <IoMdMail className='group-hover:scale-125 duration-500'/>
             </a>
</li>
            </ul>
            
            </div>
    </div>
  )
}

export default Contactme
