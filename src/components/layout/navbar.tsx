import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineX } from 'react-icons/ai'
import { LiaGithub, LiaInstagram, LiaLinkedin } from 'react-icons/lia';
import TooltipWidget from '../widget/tooltip';
// import { useTheme } from '../hooks/theme-hook';

function Navbar({active} : {active:string}) {
    const [isNavbar, setIsNavbar] = useState(true);
    // custom hook untuk tema
    // const {isDark, setIsDark} = useTheme();

    const handleNavbar = () => {
      setIsNavbar(!isNavbar);
    }

    const handleSizeChange = () => {
      setIsNavbar(true);
    }

    useEffect(() => {
      window.addEventListener('resize', handleSizeChange);

      return () => {
        window.removeEventListener('resize', handleSizeChange);
      }
    }, [])

    return (
      <header className='fixed flex items-center justify-center w-full h-[80px] bg-black z-30'>
        <div className={`${active == "home" ? "navbar" : "navbar-out"} animate-fadeIn transition-all duration-1000`}>
          <h1 className="flex items-center justify-center text-xl">LOGO</h1>
          <ul className="navbar-content">
            <a href="#home" className={`${active == "home" ? "navbar-content-item-active" : "navbar-content-item"} duration-300`}>Home</a>
            <a href="#aboutme" className={`${active == "aboutme"? "navbar-content-item-active" : "navbar-content-item"} duration-300`}>About Me</a>
            <a href="#resume" className={`${active == "resume" ? "navbar-content-item-active" : "navbar-content-item"} duration-300`}>Resume</a>
            <a href="#project" className={`${active == "project" ? "navbar-content-item-active" : "navbar-content-item"} duration-300`}>Projects</a>
          </ul>

          {/* Gunakan tag ini untuk membuat tombol dark mode */}
          {/* <div onClick={() => setIsDark(!isDark)}>tombol disini</div> */}

          <div className="flex items-center justify-center">
            <a href="#contact" className={`flex items-center justify-center w-[100px] p-3 font-jetbrainsmono border ${active == "contact" ? "border-[#F02341]" : "border-[#872341]"} rounded-xl duration-500 `}>Hire Me</a>
            <div className="flex items-center justify-center w-8 lg:hidden" onClick={handleNavbar}>
              {isNavbar ? <AiOutlineMenu size={22} /> : <AiOutlineClose size={22} />}
            </div>
          </div>

          <div className={`fixed w-full h-full left-0 rounded-xl  ${!isNavbar ? "top-[40px] ease-in-out duration-300" : "-top-full ease-in-out duration-300"} lg:hidden`}/>
          <div className={!isNavbar ? "dropdown opacity-100 ease-in-out duration-500 pointer-events-auto" : "dropdown opacity-0 ease-in-out duration-300 pointer-events-none"}>
            <ul className="dropdown-content">
              <li className="dropdown-content-item">
                <TooltipWidget scale={true} tooltipText="Github" duration="duration-500" link="https://www.google.com/">
                  <LiaGithub size={35}/>
                </TooltipWidget>
              </li>
              <li className="dropdown-content-item">
                <TooltipWidget scale={true} tooltipText="Instagram" duration="duration-500" link="https://www.google.com/">
                  <LiaInstagram size={35}/>
                </TooltipWidget>
              </li>
              <li className="dropdown-content-item">
                <TooltipWidget scale={true} tooltipText="X (Formerly Twitter)" duration="duration-500" link="https://www.google.com/">
                  <AiOutlineX size={25}/>
                </TooltipWidget>
              </li>
              <li className="dropdown-content-item">
                <TooltipWidget scale={true} tooltipText="LinkedIn" duration="duration-500" link="https://www.google.com/">
                  <LiaLinkedin size={35}/>
                </TooltipWidget>
              </li>
            </ul>

            <ul className="flex flex-col items-center justify-center w-screen">
              <li className="dropdown-content-item">
                <p>Home</p>
              </li>
              <li className="dropdown-content-item">
                <p>About</p>
              </li>
              <li className="dropdown-content-item">
                <p>Projects</p>
              </li>
              <li className="dropdown-content-item">
                <p>Contact</p>
              </li>
            </ul>
          </div>
        </div>
      </header>

    )
}

export default Navbar;