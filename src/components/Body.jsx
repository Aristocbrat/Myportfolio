import React,{useEffect , useRef} from 'react'
import Typed from 'typed.js';
import { motion , useScroll , useTransform } from "framer-motion"
import { FaChevronLeft } from "react-icons/fa";
import { GiLindenLeaf } from "react-icons/gi";
import { GoDash } from "react-icons/go";
import AnimiLoader from './client/AnimiLoader';

const Body = () => {
  useEffect(()=>{
    const elements = document.querySelectorAll(".spannex")
    const typedInstances = [];

    elements.forEach((element) => {
      const typed = new Typed(element, {
        strings: [ 'Hi, I am  Emmanuel Toyosi Babatunde.', 'Welcome to my portfolio.'],
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

const {scrollYProgress : completionProgress} = useScroll()

const scrollRef = useRef(null)
 const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"] 
  });

  const para1 = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  
 
  return (
    <div
    className='overflow-hidden w-[100%]'
     data-aos="fade-up" 
    style={{ backgroundImage: `url(./wave.png)` }}>
         <div className=" text-center xl:py-5 sm:py-3 max-w-full h-full body">
            <div className="name mt-8">
                 <h1 className='xl:text-5xl msm:text-lg sm:text-xl md:text-2xl  py-4 uppercase text-[#0D7C66] text-bold' >
              <span className="spannex"></span> </h1>
                  <p className='text-[#0D7C66] text-xl font-extrabold title'
                   data-aos="fade-down"
                   data-aos-duration="2000" >A Frontend Software Engineer</p>
            </div>
            
            <div className="flex xl:flex-row  xl:p-4 justify-between xl:w-[98%]  sm:w-[100%]  xl:mt-0 sm:mt-5  mx-auto ">
              
            <motion.div 
            animate={{
              rotate:[0, 90, 180, 270 , 360,  270, 180 , 90 , 0],
              backgroundColor:["#ffffff", "#347928", "#0D7C66" , "#12be9c" ] ,
            }}
             transition={{duration:5, ease:"easeInOut", 
              repeat:Infinity, repeatDelay:1 ,
              times: [0, 0.25, 0.5, 0.75, 1]}}
            className=" bg-white xl:w-[300px] xl:h-[300px] sm:w-[80px] sm:h-[80px]
             rounded-full xl:ml-0 sm:ml-6 xl:mt-0 sm:mt-6">
                 <img src="/roll.jpg" alt="" 
                className='xl:w-[200px] rounded-full xl:h-[200px] sm:w-[80px] sm:h-[80px] mx-auto relative xl:top-12 object-cover' /> 
                 
            </motion.div>
            <div className='xl:hidden lg:hidden sm:block  '>
              <AnimiLoader/>
            </div>
            <div
               className="xl:text-xl text-white dark:text-[#0D7C66] xl:w-[200px] 
               xl:h-[200px] mt-4 xl:block sm:hidden font-extrabold uppercase" ref={scrollRef} >
                <motion.div
                  style={{translateX:para1}}
                  transition={{delay:1.0 , bounceDamping:10 }}
                  className='mt-4 py-4'>
                <ul className="">
                  <li className='py-3 group' data-aos="slide-right" data-aos-duration="2000">
                    <a href="#about" className='flex gap-4 group-hover:translate-x-5 duration-500'>
                      <GoDash className='group-hover:translate-x-5 group-hover:text-[#0D7C66] duration-500'/>
                    <span className='group-hover:text-[#0D7C66]'>About Me</span>
                    </a>
                    </li>
                  <li className='py-3 group' data-aos="slide-left" data-aos-duration="2300">
                    <a href="#skill" className='flex gap-4 group-hover:translate-x-5 duration-500'>
                      <GoDash className='group-hover:translate-x-5 group-hover:text-[#0D7C66] duration-500'/>
                      <span className='group-hover:text-[#0D7C66]'>Skills</span></a>
                    </li>
                  <li className='py-3 group' data-aos="slide-right" data-aos-duration="2500">
                    <a href="#project" className='flex gap-4 group-hover:translate-x-5 duration-500' >
                      <GoDash className='group-hover:translate-x-5 group-hover:text-[#0D7C66] duration-500'/>
                      <span className='group-hover:text-[#0D7C66]'>Projects</span></a>
                    </li>
                  <li className='py-3 group'data-aos="slide-left" data-aos-duration="3000">
                    <a href="#cont" className='flex gap-4 group-hover:translate-x-5 duration-500'>
                      <GoDash className='group-hover:translate-x-5 group-hover:text-[#0D7C66] duration-500'/>
                      <span className='group-hover:text-[#0D7C66]'>Contact</span></a>
                    </li>
                </ul>
                </motion.div>
                
              </div>
              <motion.div 
            animate={{
              rotate:[0, 90, 180, 270 , 360,  270, 180 , 90 , 0],
              backgroundColor:["#ffffff", "#347928", "#0D7C66" , "#12be9c" ] ,
            }}
             transition={{duration:5, ease:"easeInOut", 
              repeat:Infinity, repeatDelay:1 ,
              times: [0, 0.25, 0.5, 0.75, 1]}}
            className=" bg-white xl:w-[300px] xl:h-[300px] sm:w-[80px] sm:h-[80px] rounded-full xl:ml-0 sm:mr-6 xl:mt-0 sm:mt-[120px]">
                 <img src="/roll.jpg" alt="" 
                className='xl:w-[200px] rounded-full xl:h-[200px] sm:w-[80px] sm:h-[80px] mx-auto relative xl:top-12 object-cover' /> 
                 
            </motion.div>
            </div>
         </div>
    </div>
  )
}

export default Body
