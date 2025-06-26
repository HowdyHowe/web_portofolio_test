import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineX } from 'react-icons/ai'
import { CiDark, CiLight } from 'react-icons/ci';
import { LiaGithub, LiaInstagram, LiaLinkedin } from 'react-icons/lia';
import { useTheme } from '../hooks/theme-hook';

function Navbar() {
    const [isNavbar, setIsNavbar] = useState(true);
    const { isDark, setIsDark } = useTheme();

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
        <header className="navbar">
          <h1 className="flex items-center justify-center text-xl">TOBA</h1>
          <ul className="navbar-content">
            <li className="navbar-content-item">Home</li>
            <li className="navbar-content-item">About Me</li>
            <li className="navbar-content-item">CV</li>
          </ul>

          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-8" onClick={() => setIsDark(!isDark)}>
              {isDark ? <CiDark size={30} className="w-[21px]"/> : <CiLight size={30} className="w-[21px]"/>}
            </div>
            <div className="flex items-center justify-center w-8 md:hidden" onClick={handleNavbar}>
              {isNavbar ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>
          </div>

          <div className={`fixed w-full h-full left-0 rounded-xl  ${!isNavbar ? "top-[35px] ease-in-out duration-300" : "-top-full ease-in-out duration-300"} md:hidden`} style={{ backgroundImage: isDark ? "url('/src/assets/images/background-sidebar-light.png')": "url('/src/assets/images/background-sidebar-dark.png')"}}/>
          <div className={!isNavbar ? "sidebar opacity-100 ease-in-out duration-500 pointer-events-auto" : "sidebar opacity-0 ease-in-out duration-300 pointer-events-none"}>
            <ul className="sidebar-content">
              <li className="sidebar-content-item">
                <LiaGithub size={35}/>
              </li>
              <li className="sidebar-content-item">
                <LiaInstagram size={35}/>
              </li>
              <li className="sidebar-content-item">
                <AiOutlineX size={25}/>
              </li>
              <li className="sidebar-content-item">
                <LiaLinkedin size={35}/>
              </li>
            </ul>

            <ul className="flex flex-col items-center justify-center w-screen">
              <li className="sidebar-content-item">
                <p>Home</p>
              </li>
              <li className="sidebar-content-item">
                <p>About</p>
              </li>
              <li className="sidebar-content-item">
                <p>Projects</p>
              </li>
              <li className="sidebar-content-item">
                <p>Contact</p>
              </li>
            </ul>
          </div>
        </header>

    )
}

export default Navbar;