import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenuUnfold, AiOutlineInstagram, AiOutlineX, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

function Navbar() {
    const [isNavbar, setIsNavbar] = useState(true);

    const handleNavbar = () => {
      setIsNavbar(!isNavbar);
    }

    return (
        <header className="navbar">
          <h1 className="text-2xl p-4">TOBA</h1>
            <ul className="navbar-content">
              <li className="navbar-content-item">
                <AiOutlineInstagram/>
              </li>
              <li className="navbar-content-item">
                <AiOutlineGithub/>
              </li>
              <li className="navbar-content-item">
                <AiOutlineX/>
              </li>
              <li className="navbar-content-item">
                <AiOutlineLinkedin/>
              </li>
            </ul>

          <div onClick={handleNavbar} className="fixed left-5 rotate-90 ">
            {isNavbar ? <AiOutlineMenuUnfold size={25} /> : <AiOutlineClose size={25} />}
          </div>

          <div className={`fixed w-[200px] h-[60%] top-[20%] rounded-full bg-[#522546]  ${!isNavbar ? "left-[-80px] ease-in-out duration-700" : "left-[-100%] ease-in-out duration-500"}`}/>
          <div className={!isNavbar ? "sidebar left-0 ease-in-out duration-500" : "sidebar left-[-100%] ease-in-out duration-1000"}>
            <ul className="sidebar-content">
              <li className="sidebar-content-item">contoh</li>
              <li className="sidebar-content-item">ini</li>
              <li className="sidebar-content-item">list</li>
              <li className="sidebar-content-item">list</li>
              <li className="sidebar-content-item">list</li>
              <li className="sidebar-content-item">list</li>
              <li className="sidebar-content-item">list</li>
              <li className="sidebar-content-item">list</li>
            </ul>
          </div>
        </header>

    )
}

export default Navbar;