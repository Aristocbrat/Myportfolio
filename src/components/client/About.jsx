import React,{useEffect, useRef} from 'react'
import { motion , useScroll , useTransform } from "framer-motion"
import Typed from 'typed.js';
import { FaDownload } from "react-icons/fa6";
import { GiTeamIdea ,  GiMuscleUp} from "react-icons/gi";
import { MdOutlineTouchApp } from "react-icons/md";
import { MdTimer } from "react-icons/md";
import { FaBrain } from "react-icons/fa";


const About = () => {
  useEffect(()=>{
    const elements = document.querySelectorAll(".about")
    const typedInstances = [];

    
    elements.forEach((element) => {
      const typed = new Typed(element, {
        strings: [ 'lets Get to know me ?'],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
      
    });
    typedInstances.push(typed);
  });
  return () => {
    typedInstances.forEach((typed) => typed.destroy());
  };
}, []);




 

  
  return (
    <div >
          <div className=" mt-4 w-full h-full xl:py-16 sm:py-3" id='about' >

             <h1 className='xl:text-4xl sm:text-[16px] 
              flex justify-center font-extrabold text-[#0D7C66] uppercase py-10 '>
              <span className='about tracking-wider'></span> </h1>
            <div className="flex xl:flex-row sm:flex-col justify-center gap-10 px-4 xl:w-[90%] sm:w-[100%] overflow-hidden py-4">
              <div className="xl:w-[28%] xl:h-[350px] sm:w-[57%] xl:mx-0 
              sm:mx-auto sm:h-[200px]  bg-[#0d7c66bb] rounded-full facediv">
              <img src="/myface.jpg" alt="" className=' w-[66%] h-[66%] relative xl:top-16 sm:top-[34px] 
              sm:left-[34px] rounded-full xl:left-[58px] object-fill' data-aos="fade-down"data-aos-duration="2000" />
              </div>
               
             <motion.div
                    
                   className="xl:w-[64%] sm:w-[100%] xl:h-[400px] abouttext
                   sm:h-[800px] bg-[#0D7C66] rounded-tl-3xl rounded-br-3xl font-bold font-nicefont  ">
            <motion.p
            data-aos="fade-down"
            data-aos-duration="2000"
            className=' text-white px-5
             py-3 xl:text-lg sm:text-[14px] leading-10 opacity-90'> 
            My name is Babatunde Emmanuel Toyosi,
             and I'm a passionate frontend web developer with over a year of experience.
             </motion.p>
               <motion.p 
               data-aos="fade-down"
            data-aos-duration="3000"
               className=' text-white px-5
             py-1 xl:text-lg sm:text-[14px] leading-10 opacity-90'>
             I constantly push myself to master new tools and techniques,
              ensuring I stay up to date with the latest trends in web development.</motion.p>
             <motion.p 
               data-aos="fade-down"
            data-aos-duration="3000"
             className=' text-white px-5
             py-1 xl:text-lg sm:text-[14px] leading-10 opacity-90'>Though I'm not a web designer, I have a keen eye for detail and aesthetics,
              allowing me to implement designs with pixel-perfect precision. I thrive in team environments,
               where collaboration and problem-solving drive project success. My goal is to continue building seamless,
                user-friendly interfaces that bring creative visions to life.
                </motion.p>
                <motion.p 
               data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="450"
             className=' text-white px-5
             py-1 xl:text-lg sm:text-[14px] leading-10 opacity-80'>My passion lies in solving user experience challenges through clean, efficient code and thoughtful interface design, 
             ensuring every feature enhances rather than complicates the user journey.
                </motion.p>
                </motion.div>  
            </div>
            <div className="flex xl:flex-row sm:flex-col mx-auto w-[80%]">
              <div className=" flex gap-4 py-4 xl:ml-0 sm:ml-8 resume">
              <motion.button
    whileHover={{ scale: 1.1, backgroundColor: "#0D7C66", fontWeight: 500 }}
    transition={{ bounceDamping: 10, bounceStiffness: 600, delay: 0.3 }}
    className="btn bg-[#0D7C66] text-white"
    onClick={() => {
        const link = document.createElement('a');
        link.href = '/Myresume.pdf'; 
        link.download = 'Myresume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }}
>
    <FaDownload className="bg-[#0D7C66]" />Resume
</motion.button>


                <motion.button 
                whileHover={{scale:1.1, backgroundColor:"#0D7C66" , fontWeight:500}}
                transition={{bounceDamping:10, bounceStiffness:600 , delay:0.3}}
                className='btn bg-[#0D7C66] text-white'>
                <MdOutlineTouchApp className='text-xl bg-[#0D7C66] '/>
                <a href="#cont">Contact me</a></motion.button>
              </div>
            <div className="motto mx-auto xl:w-[450px] sm:w-[200px] xl:py-4 sm:py-6">
                  <ul className='xl:flex xl:gap-10 sm:gap-4  xl:flex-row sm:grid sm:grid-cols-2'>
                    <li className='tooltip tooltip-top 
                    w-20 h-20 group hover:bg-black dark:bg-[#0D7C66]
                    
                     rounded-full  duration-500' data-tip="Team Player" data-aos="fade-down" data-aos-duration="2000" >
                    <GiTeamIdea className='text-white text-5xl ml-4 mt-3
                     group-hover:text-[#0D7C66] dark:group-hover:text-black group-hover:scale-125 delay-300 duration-500'/>
                    </li>
                    <li className='tooltip tooltip-top 
                    group hover:bg-black w-20 h-20
                    dark:bg-[#0D7C66]
                     rounded-full duration-500' data-tip="Always Learning" data-aos="fade-down" data-aos-duration="2000">
                    <FaBrain  className='text-white 
                    text-5xl ml-4 mt-3  group-hover:text-[#0D7C66] dark:group-hover:text-black group-hover:scale-125 delay-300 duration-500'/>
                    </li>
                    <li className='tooltip tooltip-bottom 
                    w-20 h-20 group hover:bg-black dark:bg-[#0D7C66]
                     rounded-full  duration-500' data-tip="Always Available" data-aos="fade-down" data-aos-duration="2000">
                    <MdTimer className='text-white text-5xl ml-4 mt-4
                     group-hover:text-[#0D7C66] dark:group-hover:text-black group-hover:scale-125 delay-300 duration-500'/>
                    </li>
                    <li className='tooltip tooltip-bottom
                     w-20 h-20 group hover:bg-black dark:bg-[#0D7C66]
                    rounded-full  duration-500' data-tip="Resilience" data-aos="fade-down" data-aos-duration="2000">
                    < GiMuscleUp className='text-white text-5xl
                    dark:group-hover:text-black 
                    ml-4 mt-3  group-hover:text-[#58a797] group-hover:scale-125 delay-300 duration-500 '/>
                    </li>
                  </ul>
                </div>
                </div>
            </div>  
    </div>
  )
}

export default About
