import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false); // si está abierto o cerrado el sidebar / menú
    const [isDarkMode, setIsDarkMode] = useState(false); // si está en modo oscuro o claro

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // función para cambiar el modo claro u oscuro
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <div className="container mx-auto h-full">
            <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 dark:bg-black/30 p-2 flex items-center z-50">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                        Logo
                    </div>
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={toggleDarkMode}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-auto justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            {isDarkMode ? '🌞' : '🌜'}
                        </button>
                        <button onClick={toggleMenu} className="text-gray-800 dark:text-white focus:outline-none ml-2">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                    <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                        <button
                            onClick={toggleDarkMode}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-auto justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            {isDarkMode ? '🌞' : '🌜'}
                        </button>
                        <a href="#" className="py-2 px-6 flex">
                            Inicio
                        </a>
                        <a href="#" className="py-2 px-6 flex">
                            Sobre Nosotros
                        </a>
                        <a href="#" className="py-2 px-6 flex">
                            Servicios
                        </a>
                        <a href="#" className="py-2 px-6 flex">
                            Beneficios
                        </a>
                        <a href="#" className="py-2 px-6 flex">
                            Catálogo
                        </a>
                        <a href="#" className="py-2 px-6 flex">
                            Contacto
                        </a>
                    </nav>
                </div>
            </header>
            <main className="dark:bg-darkTheme-background  relative overflow-hidden h-full pt-16">
                <div className={`z-50 fixed top-0 right-0 h-screen w-2/3 bg-lightTheme-background dark:bg-darkTheme-background shadow-lg border-l-2 dark:border-gray-900 border-gray-300 transform transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button onClick={closeMenu} className="text-gray-800 dark:text-white focus:outline-none absolute top-4 right-4">
                        <FaTimes size={24} />
                    </button>
                    <nav className="flex flex-col p-6 mt-12 text-gray-800 dark:text-white">
                        {["Inicio", "Sobre Nosotros", "Servicios", "Catálogo", "Beneficios", "Contacto"].map((item, index) => (
                            <a key={index} href="#" className="py-2 px-6 flex" onClick={closeMenu}>
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between h-full">
                    <div className="md:w-1/2 md:order-1 md:p-2 h-full">
                        <div className="space-y-4 mb-6">
                            <span className="w-4/6 h-2 bg-darkTheme-background dark:bg-white block"></span>
                            <span className="w-5/6 h-2 bg-darkTheme-background dark:bg-white block"></span>
                            <span className="w-4/12 h-2 bg-darkTheme-background dark:bg-white block"></span>
                        </div>
                        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black leading-none text-lightTheme-primary">
                            Digital
                        </h1>
                        <h1 className="font-bebas-neue uppercase font-black leading-none text-lightTheme-primary text-5xl sm:text-7xl">
                            <span className="text-lightTheme-rojo font-bold">Work</span>
                        </h1>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-4">
                            Ofrecemos soluciones tecnológicas y personalizadas: desde la reparación de software en teléfonos hasta estampados únicos en tazas y camisetas, además de una amplia gama de productos de librería.
                        </p>
                        <div className="flex mt-8 space-x-4">
                            <button href="#" className="uppercase py-2 px-4 rounded-lg bg-lightTheme-rojo border-2 border-transparent text-white text-md hover:bg-lightTheme-hoverRojo">
                                Descargar catálogo
                            </button>
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-lightTheme-primary text-lightTheme-primary dark:text-white hover:bg-lightTheme-hoverAzul hover:text-lightTheme-amarillo text-md">
                                Leer Más
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:order-2 relative h-full flex justify-center items-center">
                        <img src='../svg/HeroBG.svg' className="absolute top-0 right-0 w-full h-full object-cover z-0" alt="Background SVG" />
                        <div className="relative">
                            <img src="../img/taza.png" className="max-w-xs md:max-w-sm h-4/5 m-auto z-10 relative" alt="Taza" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Hero;
