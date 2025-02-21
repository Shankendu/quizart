import { useContext } from 'react';
import assets from '../assets/assets.js'
import { QuizContext } from '../context/QuizContext.jsx';
const Navbar = () => {
    const {isDarkMode, toggleDarkMode} = useContext(QuizContext);
  return (
    <div className="w-full flex justify-between items-center p-4 font-ibm">
    {/* Section for logo */}
      <section>
        <img src={assets.logo} alt="logo" className='h-12'/>
      </section>
      {/* Section for Nav links */}
      <section className='flex gap-6 items-center'>
        <p className='after:content-["_"] after:absolute after:right-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-black dark:after:bg-white relative after:transition-all after:duration-500 cursor-pointer'>ABOUT</p>
        <p className='after:content-["_"] after:absolute after:right-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-black dark:after:bg-white relative after:transition-all after:duration-500 cursor-pointer'>HISTORY</p>
        <img className='cursor-pointer pr-2' src={isDarkMode ? assets.sun : assets.moon} onClick={toggleDarkMode} alt="darkmode" />
      </section>
    </div>
  )
}

export default Navbar
