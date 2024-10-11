import React, {useRef , useState , useEffect} from 'react'
import {motion , useScroll , useTransform } from "framer-motion"
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill , RiCss3Fill , RiNextjsFill } from "react-icons/ri";
import { ImHtmlFive } from "react-icons/im";
import { FaBootstrap , FaReact } from "react-icons/fa6";
import { SiFramer  } from "react-icons/si";



const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgb(38, 103, 49 , 0 )",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgb(38, 103, 49 , 1)",
  },
}


const Skills = () => {
  

const scrollRef = useRef(null)
const [startAnimi, setStartAnimi] = useState("-60%");

 const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"] 
  });
  useEffect(()=>{
   const updateAnimi = () =>{
     if(window.innerWidth < 640){
     setStartAnimi("60%");
   }else if(window.innerWidth < 1024){
     setStartAnimi ("60%")
   }else{
      setStartAnimi("-50%")
   }
  }
  updateAnimi();
  window.addEventListener("resize", updateAnimi)
  return () => window.removeEventListener('resize', updateAnimi)}
  );
   
   
  
  const para1 = useTransform(scrollYProgress, [0, 1], [startAnimi, "0%"]);
  
  
  return (
    <div className='xl:py-8 sm:py-3' id='skill'>
      <motion.section className='flex justify-center  gap-10 overflow-hidden'
      style={{ backgroundImage: `url(./wave.png)` }}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[200px] h-[400px] stroke-[#12be9c] stroke-[0.3] xl:flex sm:hidden"
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
              }}
            />
          </motion.svg>
          <motion.div
           ref={{scrollRef}}
          className='xl:w-[690px] sm:w-[100%] text-[rgb(18,190,156)]'>
              <h1 className="xl:text-5xl sm:text-3xl xl:font-bold sm:font-extrabold w-[80%] techstack mx-auto py-8">My Technology stack</h1>
              <motion.p
                data-aos="fade-down"
                data-aos-duration="2000"
               className='xl:font-bold sm:font-semibold 
               xl:ml-0 sm:ml-3 font-nicefont
               xl:tracking-wider px-2 xl:w-full sm:w-[92%] xl:px-1 sm:px-1  '>"As a passionate frontend developer,
               I bring creative ideas to life using modern technologies. 
               With a deep understanding of HTML, CSS, and JavaScript,
                I specialize in building interactive and dynamic user interfaces using React.js and Next.js.
                I leverage Tailwind CSS or Bootstrap for responsive design,
                 ensuring pixel-perfect implementations that enhance the user experience.
                My expertise extends to handling global state with Redux , 
                engaging animations with Framer Motion. I thrive on creating optimized, high-performing applications,
               deploying them on platforms like Vercel or Netlify for seamless, fast, and secure web experiences."</motion.p>
          </motion.div>

          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[200px] h-[400px] stroke-[#12be9c] stroke-[0.3] xl:flex sm:hidden"
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2,
                },
              }}
            />
          </motion.svg>
          </motion.section>
         

          <motion.section 
          
          className='flex xl:flex-row sm:flex-col-reverse justify-center px-4 items-center w-[100%] xl:py-16 sm:py-5' 
          style={{ backgroundImage: `url(./wave.png)` }} >
          
          <motion.div
          
           className='stack-icons grid xl:grid-cols-4 sm:grid-cols-2
            p-10 gap-10 xl:w-[75%] sm:w-[90%]  xl:ml-5 sm:ml-14 text-[#12be9c] ' 
             >
              
               <motion.div
                 data-aos="slide-left"
                 data-aos-duration="2000"
                className='w-16 group'>
               <ImHtmlFive className='items-center flex justify-center w-3/4 text-9xl transition-transform group-hover:rotate-[360deg] duration-700'/>
               <p className='group-hover:scale-125 duration-500 group-hover:font-bold uppercase'>html</p>
               </motion.div>
               <motion.div 
                data-aos="slide-right"
                 data-aos-duration="2000"
               className='w-16 group'>
               <RiTailwindCssFill className='items-center flex justify-center w-3/4 text-9xl transition-transform group-hover:rotate-[360deg] duration-700' />
               <p className='group-hover:scale-125 duration-500 group-hover:font-bold uppercase relative right-4'>tailwind</p>
               </motion.div>
               <motion.div
               data-aos="slide-left"
                 data-aos-duration="2000"
                className='w-16 group'>
               <SiJavascript className='items-center flex justify-center w-3/4 text-9xl transition-transform group-hover:rotate-[360deg] duration-700' />
               <p className='group-hover:scale-125 duration-500 group-hover:font-bold uppercase relative right-4'>javascript</p>
               </motion.div>
               <motion.div 
               data-aos="slide-right"
                 data-aos-duration="2000"
               className='w-16 group'>
               <RiCss3Fill  className='items-center flex justify-center w-3/4 text-9xl transition-transform group-hover:rotate-[360deg] duration-700'/>
               <p className='group-hover:scale-125 duration-500 group-hover:font-bold uppercase relative left-3'>css</p>
               </motion.div>
               <motion.div 
                data-aos="slide-left"
                 data-aos-duration="2000"
               className='w-16 group'>
               <FaBootstrap className='items-center flex justify-center w-3/4 text-9xl transition-transform group-hover:rotate-[360deg] duration-700' />
               <p className='group-hover:scale-125 duration-500 group-hover:font-bold uppercase relative right-4'>bootstrap</p>
               </motion.div>
               <motion.div 
                data-aos="slide-left"
                 data-aos-duration="2000"
               className='w-16 group'>
               <FaReact className='items-center flex justify-center w-3/4 text-9xl transition-transform group-hover:rotate-[360deg] duration-700' />
               <p className='group-hover:scale-125 duration-500 group-hover:font-bold uppercase'>react</p>
               </motion.div>
               <motion.div 
                data-aos="slide-right"
                 data-aos-duration="2000"
               className='w-16 group'>
               <RiNextjsFill  className='items-center flex justify-center w-3/4 text-9xl transition-transform group-hover:rotate-[360deg] duration-700'/>
               <p className='group-hover:scale-125 duration-500 group-hover:font-bold uppercase'>next.js</p>
               </motion.div>
               <motion.div
                data-aos="slide-left"
                 data-aos-duration="2000"
                className='w-16 group'>
               <SiFramer className='items-center flex justify-center w-3/4 text-9xl transition-transform group-hover:rotate-[360deg] duration-700'/>
               <p className='group-hover:scale-125 duration-500 group-hover:font-bold uppercase'>framer</p>
               </motion.div>
               </motion.div>
               <motion.div className="xl:w-[35%]   sm:w-[95%] text-[#12be9c]">
               <motion.p
                  data-aos="fade-down" data-aos-duration="2000"
               
              className="xl:text-4xl sm:text-2xl py-2  font-extrabold "> My Skill-set:</motion.p>
              <motion.p
                   data-aos="fade-up" data-aos-duration="2000"
                   className='w-full md:w-[420px] text-sm md:text-base lg:text-lg dark:font-bold font-nicefont overflow-hidden'>
                With a strong foundation in HTML, CSS, JavaScript, and frameworks like React.js &
                Next.Js, and different animation libaries
                 I bring designs to life with clean , slick and efficient code.
                 My expertise extends to using modern tools such as Tailwind CSS, Bootstrap,
                React Router, and responsive layouts to build seamless user interfaces
                that work flawlessly across all devices.</motion.p>
                </motion.div>
               </motion.section>
    </div>
  )
}

export default Skills
