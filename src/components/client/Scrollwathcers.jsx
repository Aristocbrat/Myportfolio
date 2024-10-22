import React ,{useState, useEffect} from 'react'

const Scrollwathcers = () => {
    const [scaleX , setScaleX] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight;
          const winHeight = window.innerHeight;
          const scrollPercent = scrollTop / (docHeight - winHeight);
          setScaleX(scrollPercent);
        };
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])
  return (
    <div>
       <div 
      className="scroll-watcher bg-[#12be9c] fixed top-0 z-50 w-full h-[8px] origin-left"
      style={{ transform: `scaleX(${scaleX})` }}
    />
    </div>
  )
}

export default Scrollwathcers
