import React, { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <nav className="bg-lightTheme-background dark:bg-darkTheme-background fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DigitalWork</span>
                    </a>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse md:order-2">
                        <button
                            onClick={toggleDarkMode}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            {isDarkMode ? '🌞' : '🌜'}
                        </button>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`fixed md:static top-0 right-0 md:relative h-full md:h-auto md:w-auto w-1/2 bg-lightTheme-background dark:bg-darkTheme-background transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:transform-none transition-transform duration-300 ease-in-out md:flex md:items-center md:justify-between`} id="navbar-sticky">
                        <div className="flex flex-col h-full md:flex-row md:space-x-8">
                            <button
                                onClick={closeMenu}
                                className="md:hidden self-end m-4 p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <span className="sr-only">Close menu</span>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-lightTheme-background dark:bg-darkTheme-background md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-lightTheme-background dark:border-gray-700">
                                <li>
                                    <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lightTheme-primary md:p-0 md:dark:hover:text-lightTheme-primary dark:text-white dark:hover:text-darkTheme-primary md:dark:hover:bg-transparent dark:border-gray-700" onClick={closeMenu}>Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lightTheme-primary md:p-0 md:dark:hover:text-lightTheme-primary dark:text-white dark:hover:text-darkTheme-primary md:dark:hover:bg-transparent dark:border-gray-700" onClick={closeMenu}>About</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lightTheme-primary md:p-0 md:dark:hover:text-lightTheme-primary dark:text-white dark:hover:text-darkTheme-primary md:dark:hover:bg-transparent dark:border-gray-700" onClick={closeMenu}>Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lightTheme-primary md:p-0 md:dark:hover:text-lightTheme-primary dark:text-white dark:hover:text-darkTheme-primary md:dark:hover:bg-transparent dark:border-gray-700" onClick={closeMenu}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
