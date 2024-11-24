import { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; // Update the path if necessary
import menu from '../assets/menu.png';
import { navLinks } from '../constants';
import cross from '../assets/x.png'

const Navbar = () => {
    const [scrollDirection, setScrollDirection] = useState('down');
    const [position, setPosition] = useState('15px');
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState("transparent"); // State for navbar background

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroHeight = document.getElementById("hero")?.offsetHeight || 0;

            // Check if user has scrolled past the hero section
            if (currentScrollY > heroHeight) {
                setNavbarBackground("white"); // Change navbar to white when past hero section
            } else {
                setNavbarBackground("transparent"); // Make navbar transparent when in hero section
            }

            if (currentScrollY > lastScrollY) {
                // Scrolling Down
                setScrollDirection('down');
                setPosition('-80px'); // Shift navbar upward (hidden)
            } else {
                // Scrolling Up
                setScrollDirection('up');
                setPosition('15px'); // Shift navbar downward (visible)
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            style={{
                position: 'fixed',
                top: position, // Controlled by scroll
                left: '50%', // Center horizontally
                transform: 'translateX(-50%)', // Align center using transform
                zIndex: 50,
                transition: 'top 0.3s ease-in-out, background-color 0.3s ease-in-out', // Smooth transition for scroll effect and background color
                width: '90%', // Responsive width
                maxWidth: '1024px', // Maximum width for the navbar
                borderRadius: '50px', // Rounded ends
                backgroundColor: navbarBackground, // Dynamic background color
            }}
            className={`shadow-lg ${navbarBackground === "transparent" ? "text-white" : "text-black"}`} // Text color change depending on background
            id="navbar"
        >
            {/* Navbar Container */}
            <div className="container mx-auto px-6 py-3 flex justify-between items-center rounded-full">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="h-12 w-auto max-w-[150px] sm:max-w-none" />
                </div>

                {/* Navigation Links */}
                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${active === nav.title ? 'text-secondary' : 'text-black'
                                } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-5'}`}
                        >
                            <a href={`#${nav.id}`} className="hover:text-secondary">
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Menu Button for Mobile */}
                <div className="sm:hidden flex justify-end items-center">
                    <img
                        src={toggle ? cross : menu}
                        alt="menu"
                        className="w-8 h-8 object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />

                    {/* Mobile Menu */}
                    <div
                        className={`${!toggle ? 'hidden' : 'flex'
                            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
                    >
                        <ul className="list-none flex flex-col justify-end items-start flex-1">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? 'text-white' : 'text-dimWhite'
                                        } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <a href={`#${nav.id}`} className="hover:text-secondary">
                                        {nav.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
