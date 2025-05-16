import { AiOutlineMenu, } from 'react-icons/ai'

function Navbar() {
    return (
        <header className="navbar">
          <h1 className="text-3xl p-4 rubik-light">Menu</h1>
            <ul className="navbar-content">
              <li className="navbar-content-item">contoh</li>
              <li className="navbar-content-item">ini</li>
              <li className="navbar-content-item">list</li>
            </ul>
          <div>
            <AiOutlineMenu size={25}/>
          </div>
          <div className="sidebar">
          <h1 className="text-3xl p-4">Menu</h1>
            <ul className="sidebar-content">
              <li className="sidebar-item">contoh</li>
              <li className="sidebar-item">ini</li>
              <li className="sidebar-item">list</li>
            </ul>
          </div>
        </header>

    )
}

export default Navbar;