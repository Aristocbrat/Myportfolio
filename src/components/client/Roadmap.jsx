import React from 'react'
import { LuChevronsRight } from "react-icons/lu";
import Contactme from './Contactme';
import Projects from './Projects';
const Roadmap = () => {
  return (
    <div>
      <section className='flex xl:flex-row sm:flex-col-reverse justify-center
       xl:w-[95%] sm:w-[100%] gap-10 h-full xl:py-12 sm:py-5 xl:px-5 '>
      <div className="card lg:card-side bg-[#12be9c] shadow-xl xl:w-[40%] sm:w-[100%] h-full">
  <figure>
    
  </figure>
  <div className="card-body w-full text-black  ">
    <h2 className="card-title xl:text-4xl lg:text-4xl sm:text-2xl">My Road-Map</h2>
     <p className='font-bold'>-Front-end Development Course at PluralCode Academy</p>
     <p className='font-bold'>-Internship at HNG</p>
     <p className='font-bold'>-Building user-friendly & responsive web applications</p>
      <Projects/>
     <Contactme/>
  </div>
</div>
<div className="card lg:card-side bg-[#12be9c] shadow-xl xl:w-[40%] sm:w-[100%] h-full">
  <figure>
   
  </figure>
  <div className="card-body">
    <h2 className="card-title xl:text-4xl sm:text-2xl text-black ">My Project Xperience:</h2>
    <section className='flex flex-col py-5 gap-8'>
    
    <div className="bg-black text-[#12be9ca6] xl:w-full xl:ml-0 sm:w-[350px] sm:ml-[-4%] a">
          <h1 className='flex gap-1 font-extrabold py-3' >
            <span className='date uppercase px-2 border-r-2 border-[#12be9ca6]'>aug - sept 2024</span>
             <span className='uppercase'><a href="">Banking website </a></span>
             <LuChevronsRight className='text-2xl' /></h1>
             <p className='p-3 font-bold'>
       I designed, developed, and deployed a personal
        project aimed at creating a modern, user-friendly banking website. 
        The design was inspired by various banking websites,
         incorporating key features such as secure login,
          responsive layouts, and seamless user experience to meet industry standards.
     </p>
     <p className='py-5 flex flex-wrap justify-center px-2 gap-4'>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="150">Tailwind</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="250">React.js</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="350">React Icons</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="450">Remix Icons</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="550">Daisy Ui</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="650">AOS</span>
     </p>

        </div>
        <div className="bg-black text-[#12be9ca6] xl:w-full xl:ml-0 sm:w-[350px] sm:ml-[-4%] a">
          <h1 className='flex gap-1 font-extrabold py-3' >
            <span className='date uppercase px-2 border-r-2 border-[#12be9ca6]'>june - july 2024</span>
             <span className='uppercase'><a href="">E-commerce website </a></span>
             <LuChevronsRight className='text-2xl' /></h1>
             <p className='p-3 font-bold capitalize'>
             "I designed, developed, and deployed a dynamic e-commerce website 
             with sleek animations and an intuitive add-to-cart functionality.
              The site is fully responsive, providing a seamless user experience across devices.
               Key features include modern design elements,
              smooth transitions, and an optimized checkout process to enhance user engagement and satisfaction."
     </p>
     <p className='py-5 flex flex-wrap justify-center px-2 gap-4'>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="150">Tailwind</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="250">React.js</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="350">React Slick</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="450">React Icons</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="550">Remix Icons</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="650">Daisy Ui</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="750">AOS</span>
     </p>

        </div>
        <div className="bg-black text-[#12be9ca6] xl:w-full xl:ml-0 sm:w-[350px] sm:ml-[-4%] a">
          <h1 className='flex gap-1 font-extrabold py-3' >
            <span className='date uppercase px-2 border-r-2 border-[#12be9ca6]'>may - june 2024</span>
             <span className='uppercase'><a href="">Orphanage Website </a></span>
             <LuChevronsRight className='text-2xl' /></h1>
             <p className='p-3 font-bold'>
             I designed and developed a user-friendly
              website for an orphanage, creating a welcoming and accessible platform 
              to showcase their mission and services. The website features an integrated 
              Google Map for easy location access, allowing visitors to find the orphanage effortlessly. 
              With a focus on intuitive navigation and a clean, modern design,
               I ensured that the site offers an engaging experience for users across all devices,
              making it easy to learn about the orphanage, donate, and get involved.
     </p>
     <p className='py-5 flex flex-wrap justify-center px-2 gap-4'>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="150">Tailwind</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="250">React.js</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="350">Google maps</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="450">Remix Icons</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="550">Typed js</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="650">AOS</span>
     </p>

        </div>
        <div className="bg-black text-[#12be9ca6] xl:w-full xl:ml-0 sm:w-[350px] sm:ml-[-4%] a">
          <h1 className='flex gap-1 font-extrabold py-3' >
            <span className='date uppercase px-2 border-r-2 border-[#12be9ca6]'>march - april 2024</span>
             <span className='uppercase'><a href="">Capstone project </a></span>
             <LuChevronsRight className='text-2xl' /></h1>
             <p className='p-3 font-bold'>
             I designed and developed a visually appealing and highly functional landing page for a ChatGPT website,
              focusing on user engagement and accessibility. The page was crafted with a modern,
               clean design to highlight the core features of ChatGPT, ensuring that visitors quickly understand its capabilities. 
               I implemented smooth animations and responsive layouts to create an intuitive user experience across all devices.
                By prioritizing performance and user-centric design,
              I ensured that the landing page loads quickly and provides seamless navigation, enhancing overall user satisfaction.
     </p>
     <p className='py-5 flex flex-wrap justify-center px-2 gap-4'>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="250">Bootstrap</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="350">React.js</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="450">Remix Icons</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="550">CSS</span>
      <span className='p-3 rounded-xl bg-[#12be9ca6] text-black font-bold'
      data-aos="fade-down" data-aos-duration="2000" data-aos-delay="650">AOS</span>
     </p>

        </div>
      
       
    </section>
       
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
             
      </section>
    </div>
  )
}

export default Roadmap
