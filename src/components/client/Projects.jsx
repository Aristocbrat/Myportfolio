import React from 'react'
import { easeInOut, motion } from 'framer-motion';
import { LuChevronsRight } from "react-icons/lu";
const Projects = () => {
  return (
    <div>
       <div className="projectimages flex flex-col py-8 xl:px-3" id='project'>
                <h1 className='font-extrabold py-4 text-black
                 text-3xl capitalize underline underline-offset-4'>projects:</h1>
         <div className="border-b-2 border-[#12be9c] py-4 px-3 bg-black xl:w-full xl:ml-0
          sm:w-[350px] sm:ml-[-6%] a text-base-200">
            <div className="flex flex-wrap gap-3 justify-center group ">
               <img src="/bank.png" alt="" 
                className='w-[150px] h-[100px]  
                object-contain aspect-square group-hover:scale-102 transition-transform duration-500 delay-200'/>
               <img src="/bank2.png" alt="" 
               className='w-[150px] h-[100px]
                object-contain aspect-square group-hover:scale-110 transition-transform duration-500 delay-300' />
               <img src="/bank3.png" alt=""
                className='w-[150px] h-[100px] 
                object-contain aspect-square group-hover:scale-125 transition-transform duration-500 delay-500'/>
               <img src="/bank4.png" alt="" 
               className='w-[150px] h-[100px]
                object-contain aspect-square group-hover:scale-127 transition-transform duration-500 delay-700'/>
            </div>
            <div className="">
            <motion.h1 
            whileHover={{translateX:15 }}
            transition={{duration:0.5, ease:easeInOut}}
            className='flex gap-1 font-extrabold  text-[#12be9c] ' >
             <span className='uppercase'><a href="https://bank-ochre-omega.vercel.app/"> Banking website </a></span>
             <LuChevronsRight className='text-2xl' /></motion.h1>
             <p className='font-semibold py-3 text-[#12be9c] capitalize'>
             a modern, user-friendly banking website. 
             The design was inspired by various banking websites.
             </p>
            </div>
            
         </div>
         <div className="border-b-2 border-[#12be9c] py-4 px-3 bg-black xl:w-full xl:ml-0 
         sm:w-[350px] sm:ml-[-6%] a">
            <div className="flex flex-wrap gap-3 justify-center group">
               <img src="/shop.png" alt="" 
                className='w-[150px] h-[100px] group-hover:scale-102 transition-transform duration-500 delay-200 object-contain aspect-square'/>
               <img src="/shop1.png" alt=""
                className='w-[150px] h-[100px] group-hover:scale-110 transition-transform duration-500 delay-300 object-contain aspect-square' />
               <img src="/shop3.png" alt="" 
               className='w-[150px] h-[100px] group-hover:scale-125 transition-transform duration-500 delay-500 object-contain aspect-square'/>
               <img src="/shop2.png" alt=""
                 className='w-[150px] h-[100px] group-hover:scale-127 transition-transform duration-500 delay-700 object-contain aspect-square'/>
            </div>
            <div className="">
            <motion.h1
             whileHover={{translateX:15 }}
             transition={{duration:0.5, ease:easeInOut}}
             className='flex gap-1 font-extrabold  text-[#12be9c] ' >
             <span className='uppercase'><a href="https://ecomm-omega-tan.vercel.app/">E-commerce website  </a></span>
             <LuChevronsRight className='text-2xl' /></motion.h1>
             <p className='font-semibold py-3 text-[#12be9c] capitalize'>
             a dynamic e-commerce website 
             with sleek animations and an intuitive add-to-cart functionality.
              The site is fully responsive, providing a seamless user experience across devices.
             </p>
            </div>
            
         </div>
         <div className="border-b-2 border-[#12be9c] py-4 px-3 bg-black
          xl:w-full xl:ml-0  sm:w-[350px] sm:ml-[-6%] a">
            <div className="flex flex-wrap gap-3 justify-center group ">
               <img src="/adopt1.png" alt="" 
                className='w-[150px] h-[100px] group-hover:scale-102 transition-transform duration-500 delay-200 object-contain aspect-square'/>
               <img src="/adopt2.png" alt=""
                className='w-[150px] h-[100px] group-hover:scale-110 transition-transform duration-500 delay-300 object-contain aspect-square' />
               <img src="/Adopt3.png" alt=""
                className='w-[150px] h-[100px] group-hover:scale-125 transition-transform duration-500 delay-500 object-contain aspect-square'/>
               <img src="/adopt4.png" alt=""
                className='w-[150px] h-[100px] group-hover:scale-127  transition-transform duration-500 delay-700 object-contain aspect-square'/>
            </div>
            <div className="">
            <motion.h1 
            whileHover={{translateX:15 }}
            transition={{duration:0.5, ease:easeInOut}}
            className='flex gap-1 font-extrabold  text-[#12be9c] ' >
             <span className='uppercase'><a href="https://help-a-child.vercel.app/"> Orphanage Website </a></span>
             <LuChevronsRight className='text-2xl' /></motion.h1>
             <p className='font-semibold py-3 text-[#12be9c] capitalize'>
             a user-friendly
              website for an orphanage, creating a welcoming and accessible platform 
              to showcase their mission and services.
             </p>
            </div>
            
         </div>
         <div className="border-b-2 border-[#12be9c] py-4 px-3
          bg-black xl:w-full xl:ml-0 sm:w-[350px] sm:ml-[-6%] a">
            <div className="flex flex-wrap gap-3 justify-center group ">
               <img src="/cappi1.png" alt=""  
               className='w-[150px] h-[100px] group-hover:scale-125 transition-transform duration-500 delay-200 object-contain aspect-square'/>
               <img src="/cappi2.png" alt=""
                className='w-[150px] h-[100px] group-hover:scale-125 transition-transform duration-500 delay-300 object-contain aspect-square' />
               <img src="/cappi3.png" alt="" 
               className='w-[150px] h-[100px] group-hover:scale-125 transition-transform duration-500 delay-400 object-contain aspect-square'/>
               <img src="/cappi4.png" alt=""
                className='w-[150px] h-[100px] group-hover:scale-125 transition-transform duration-500 delay-500 object-contain aspect-square'/>
            </div>
            <div className="">
            <motion.h1 
             whileHover={{translateX:15 }}
             transition={{duration:0.5, ease:easeInOut}}
            className='flex gap-1 font-extrabold  text-[#12be9c] ' >
             <span className='uppercase'><a href="https://ggg-aristocbrat-1243.vercel.app/">capstone Landing page </a></span>
             <LuChevronsRight className='text-2xl' /></motion.h1>
             <p className='font-semibold py-3 text-[#12be9c] capitalize'>
             a visually appealing and highly functional landing page for a ChatGPT website,
              focusing on user engagement and accessibility.
             </p>
            </div>
            
         </div>
         <div className="border-b-2 border-[#12be9c] py-4 px-3 bg-black xl:w-full xl:ml-0 
         sm:w-[350px] sm:ml-[-6%] a">
            <div className="flex flex-wrap gap-3 justify-center group">
               <img src="/kwasu1.png" alt="kwasuloginpage" 
                className='w-[150px] h-[100px] group-hover:scale-102 transition-transform duration-500 delay-200 object-contain aspect-square'/>
               <img src="/Kwasu2.png" alt="kwasudemo home page"
                className='w-[150px] h-[100px] group-hover:scale-110 transition-transform duration-500 delay-300 object-contain aspect-square' />
               <img src="/Kwasu3.png" alt="Kwasu courses page" 
               className='w-[150px] h-[100px] group-hover:scale-125 transition-transform duration-500 delay-500 object-contain aspect-square'/>
               <img src="/Kwasu4.png" alt="kwasu result page"
                 className='w-[150px] h-[100px] group-hover:scale-127 transition-transform duration-500 delay-700 object-contain aspect-square'/>
            </div>
            <div className="">
            <motion.h1
             whileHover={{translateX:15 }}
             transition={{duration:0.5, ease:easeInOut}}
             className='flex gap-1 font-extrabold  text-[#12be9c] ' >
             <span className='uppercase'><a href="https://ecomm-omega-tan.vercel.app/">Kwara state University student portal demo  </a></span>
             <LuChevronsRight className='text-2xl' /></motion.h1>
             <p className='font-semibold py-3 text-[#12be9c] capitalize'>
                The new student portal, a significant upgrade that completely redefines the digital experience for our students. 
                Designed with a nice flow and a very nice design,offering a big improvement over the previous system. you'll be greeted by an intuitive interface that makes accessing grades.
               This commitment to superior user experience gives the entire portal a truly nice feel,
                transforming administrative tasks into an effortless part of your academic life.
             </p>
            </div>
            
         </div>
         

     </div>
    </div>
  )
}

export default Projects
