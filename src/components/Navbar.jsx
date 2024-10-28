import React,{useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import Scrollwathcers from './client/Scrollwathcers';



const Navbar = () => {
  const [darkMode , setDarkMode] = useState(false)
  useEffect(()=>{
     if (darkMode){
      document.documentElement.classList.add("dark")
     }else{
      document.documentElement.classList.remove("dark")
     }
  },[darkMode])
 
 

  return (
    <div className='fixed top-0 z-10 w-full bg-black dark:bg-[#12be9c] h-[90px] '>
      <Scrollwathcers/>
      <div
      style={{ backgroundImage: `url(./wave.png)` }}
       className="navbar w-full py-6 px-6 font-mainfont text-[#0D7C66] dark:text-white" >
        <div className="navbar-start">
          <h1 className="xl:text-4xl sm:text-xl myname  font-bold font-aboutfont">Emmanuel's Portfolio</h1>
        
        </div>

        
        

        
        <div className="navbar-end flex gap-5">
          
        <div className="dropdown xl:hidden sm:block">
       <div tabIndex={0} role="button" className="btn rounded-full bg-[#12be9c] dark:bg-white  m-1">
         <GiHamburgerMenu className='text-white dark:text-[#12be9c]'/></div>
            <ul tabIndex={0} className="dropdown-content menu text-[11px] bg-[#12be9c] text-white rounded-box z-[1] w-[100px] p-2 shadow">
           <li>
                <a href="#about">About me</a>
              </li>
              <li>
                <a href="#skill">Skills</a>
              </li>
              
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#cont">Contact me</a>
              </li>
              <li>
                <p><input type="checkbox" className="toggle" defaultChecked  checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/></p>
              </li>
          </ul>
        </div>
          <button className="btn btn-ghost btn-circle">
            <img src="/myface.jpg" alt="Profile" className="rounded-full w-16" />
          </button>
         

          <button className="ml-4 sm:hidden xl:block" >
            <motion.span 
            whileHover={{scale:1.2}}
            className='font-bold '><a href="#cont">Let's Connect</a></motion.span>
          </button>
          <p className='xl:block sm:hidden'>
            <input type="checkbox" className="toggle" checked={darkMode} onChange={()=>setDarkMode(!darkMode)} /></p>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
