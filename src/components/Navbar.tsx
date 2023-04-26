import { useState } from "react"
import logoIcon from '../assets/shared/logo.svg';
import hamburgerIcon from '../assets/shared/icon-hamburger.svg';
//import closeIcon from '../assets/shared/icon-close.svg';

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

    return (
        <nav className="fixed w-full">
            <div className="mx-auto  max-w-screen-xxl px-8 sm:px-6 lg:px-8 py-4 font-barlow ">
                <div className="flex  h-16 items-center justify-between ">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block" href="/">
                            <img src={logoIcon} alt="logo" />
                        </a>
                    </div>

                    <div className="md:flex md:items-center ">
                        <nav aria-label="Site Nav" className="hidden md:block bg-mywhite mx-auto w-full md:px-12 lg:px-40 backdrop-blur-2xl">
                            <ul className="flex items-center gap-6 lg:gap-12   text-white text-base tracking-widest font-normal">
                                {
                                    sections.map((section) => (
                                        <li key={section.title} className="border-b-2 border-transparent hover:border-white hover:border-opacity-60  py-4 transition-colors duration-300 transform   ">
                                            <a
                                                className=" uppercase transition "
                                                href={`#${section.title}`}
                                            >
                                                <span className="md:hidden lg:inline font-semibold  ">{section.index}</span> {section.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="block md:hidden">
                                <button
                                    className=" text-gray-600 transition hover:text-gray-600/75"
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


