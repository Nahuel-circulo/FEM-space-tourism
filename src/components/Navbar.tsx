import { useContext, useState } from "react"
import logoIcon from '../assets/shared/logo.svg';
import hamburgerIcon from '../assets/shared/icon-hamburger.svg';
import { SpaceContext } from "../context/SpaceContext";
import closeIcon from '../assets/shared/icon-close.svg';
import clsx from 'clsx';


const Navbar = () => {
  const sections = [
    {
      index: '00',
      title: 'home'
    },
    {
      index: '01',
      title: 'destination'
    },
    {
      index: '02',
      title: 'crew'
    },
    {
      index: '03',
      title: 'technology'
    },
  ]
  const [isOpen, setisOpen] = useState(false);



  const { spaceState, setActiveSection } = useContext(SpaceContext);


  return (
    <nav className="fixed z-50 w-full">
      <div className="px-8 py-4 mx-auto max-w-screen-xxl sm:px-6 lg:px-8 font-barlow ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block" href="/">
              <img src={logoIcon} alt="logo" />
            </a>
          </div>

          <div className="md:flex md:items-center ">
            <nav aria-label="Site Nav" onClick={() => setisOpen(!isOpen)} className={clsx(
              'fixed top-0 w-2/3 md:w-full h-screen mx-auto transition-all  left-full md:static md:h-auto md:block bg-mywhite md:px-12  lg:px-32 xl:px-40 backdrop-blur-2xl',
              isOpen && '!left-1/3'
            )}>
              <ul className="flex flex-col items-center gap-12 pt-8 pl-8 text-base font-normal tracking-widest text-white md:pt-0 md:pl-0 md:flex-row lg:gap-12">

                <div className="w-full pr-8 md:hidden text-end">
                  <button
                    className="text-gray-600 transition hover:text-gray-600/75"
                    onClick={() => setisOpen(!isOpen)}
                  >
                    <img src={closeIcon} alt="hamburger-icon" />
                  </button>
                </div>
                {
                  sections.map((section) => (
                    <li key={section.title} className={`${spaceState.activeSection === section.title ? 'border-white' : 'border-transparent hover:border-white hover:border-opacity-60'} ` + " border-r-2 md:border-b-2 md:border-r-0 w-full md:w-auto    md:py-4 lg:py-6  transition-colors duration-300 transform   "}>
                      <a
                        className="py-4 uppercase transition "
                        href={`#${section.title}`}
                        onClick={() => setActiveSection(section.title)}
                      >
                        <span className="font-semibold md:hidden lg:inline ">{section.index}</span> {section.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button
                  className="text-gray-600 transition hover:text-gray-600/75"
                  onClick={() => setisOpen(!isOpen)}
                >
                  <img src={hamburgerIcon} alt="hamburger-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


