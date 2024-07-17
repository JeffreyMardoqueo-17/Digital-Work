import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="w-full">
            <main className="dark:bg-darkTheme-background bg-white relative overflow-hidden">
                <header className="h-24 sm:h-32 flex items-center z-30 w-full">
                    <div className="container mx-auto px-6 flex items-center justify-between">
                        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                            Logo
                        </div>
                        <div className="flex items-center">
                            <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                                <a href="#" className="py-2 px-6 flex">
                                    Home
                                </a>
                                <a href="#" className="py-2 px-6 flex">
                                    Watch
                                </a>
                                <a href="#" className="py-2 px-6 flex">
                                    Product
                                </a>
                                <a href="#" className="py-2 px-6 flex">
                                    Contact
                                </a>
                                <a href="#" className="py-2 px-6 flex">
                                    Career
                                </a>
                            </nav>
                            <div className="lg:hidden flex items-center">
                                <button onClick={toggleMenu} className="text-gray-800 dark:text-white focus:outline-none">
                                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={`z-50 fixed top-0 right-0 h-full w-2/3 bg-lightTheme-background dark:bg-gray-800 shadow-lg transform transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button onClick={closeMenu} className="text-gray-800 dark:text-white focus:outline-none absolute top-4 right-4">
                        <FaTimes size={24} />
                    </button>
                    <nav className="flex flex-col p-6 mt-12">
                        <a href="#" className="py-2 px-6 flex" onClick={closeMenu}>
                            Home
                        </a>
                        <a href="#" className="py-2 px-6 flex" onClick={closeMenu}>
                            Watch
                        </a>
                        <a href="#" className="py-2 px-6 flex" onClick={closeMenu}>
                            Product
                        </a>
                        <a href="#" className="py-2 px-6 flex" onClick={closeMenu}>
                            Contact
                        </a>
                        <a href="#" className="py-2 px-6 flex" onClick={closeMenu}>
                            Career
                        </a>
                    </nav>
                </div>
                <div className="container mx-auto px-6 py-16">
                    <div className="flex flex-col md:flex-row md:space-x-8">
                        <div className="md:w-1/2">
                            {/* Revisar los estilos de los span */}
                            <span className="w-3/12 h-2 bg-darkTheme-background dark:bg-white mb-4 block"></span>
                            <span className="w-2/4 h-2 bg-darkTheme-background dark:bg-white mb-4 block"></span>
                            <span className="w-2/12 h-2 bg-darkTheme-background dark:bg-white mb-4 block"></span>
                            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black leading-none text-lightTheme-primary">
                                Digital
                                <span className="text-5xl sm:text-7xl ">
                                    Work
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-4">
                                Ofrecemos soluciones tecnológicas y personalizadas: desde la reparación de software en teléfonos hasta estampados únicos en tazas y camisetas, además de una amplia gama de productos de librería.
                            </p>
                            <div className="flex mt-8">
                                <button href="#" className="uppercase py-2 px-4 rounded-lg bg-lightTheme-rojo border-2 border-transparent text-white text-md mr-4 hover:bg-lightTheme-hoverRojo">
                                    Descargar catálogo
                                </button>
                                <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-lightTheme-primary text-lightTheme-primary dark:text-white hover:bg-lightTheme-hoverAzul hover:text-lightTheme-amarillo text-md">
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                            <img src="../img/taza.png" className="max-w-xs md:max-w-sm m-auto" alt="Taza" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Hero;
