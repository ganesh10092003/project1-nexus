import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  {
    id: 1,
    name: 'Home'
  },
  {
    id: 2,
    name: 'About'
  },
  {
    id: 3,
    name: 'Services'
  },
  {
    id: 4,
    name: 'Q&A'
  },
  {
    id: 5,
    name: 'Contact Us'
  }
]

const Navbar = () => {

  const [isActive, setIsActive] = useState(0)
  const [highlightNav, setHighlightNav] = useState(null)

  const handleNavBar = (name) => {
    setIsActive((prev) => { return !prev });
    setHighlightNav(name === highlightNav ? null : name)
  }

  return (
    <div className='h-auto w-full mx-auto fixed top-0 py-5 sm:py-4 z-30 bg-inherit'>
      <nav className='container m-auto flex items-center justify-between'>
        <div>
          <a
            href="#"
            className="text-3xl font-bold text-white"
          >
            Nexus Info
          </a>
        </div>
        <div className='nav-items'>

          {/* Button to open */}
          <button
            className='cursor-pointer hidden md:block'
            onClick={handleNavBar}
          >
            <HiMenu size={25} color='white' />
          </button>
          <ul className={`flex items-center space-x-11 ${!isActive ? "md:flex" : "md:right-[0%]"} 
                          md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[70%] md:h-screen md:bg-[rgb(38,36,36)] `}>
            {/* Button to close */}
            <button
              onClick={handleNavBar}
              className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}
            >
              <RxCross2 size={25} color='white' />
            </button>
            {navItems.map(item => {
              return (
                <li key={item.id} className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center">
                  <a
                    onClick={() => handleNavBar(item.name)}
                    href="#"
                    className={`uppercase cursor-pointer text-white hover:text-yellow-600 font-bold ${item.name === highlightNav ? "text-yellow-600" : ""}`}
                  >
                    {item.name}
                  </a>
                </li>
              )
            })}
            <a
              href=""
              className="bg-[rgb(38,36,36)] md:bg-black text-[1rem] text-white px-8 py-2 rounded-lg font-bold hover:text-yellow-400 md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
            >
              HIRE ME
            </a>
          </ul>

        </div>
      </nav >
    </div >
  )
}

export default Navbar