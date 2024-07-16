import React from 'react';

const Hero = () => {
    return (
        <div>
            <main class="dark:bg-darkTheme-background bg-white relative overflow-hidden h-screen">
                <header class="h-24 sm:h-32 flex items-center z-30 w-full">
                    <div class="container mx-auto px-6 flex items-center justify-between">
                        <div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
                            Watch.ME
                        </div>
                        <div class="flex items-center">
                            <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                                <a href="#" class="py-2 px-6 flex">
                                    Home
                                </a>
                                <a href="#" class="py-2 px-6 flex">
                                    Watch
                                </a>
                                <a href="#" class="py-2 px-6 flex">
                                    Product
                                </a>
                                <a href="#" class="py-2 px-6 flex">
                                    Contact
                                </a>
                                <a href="#" class="py-2 px-6 flex">
                                    Carrer
                                </a>
                            </nav>
                        </div>
                    </div>
                </header>
                <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                    <div class="container mx-auto px-6 flex relative py-16">
                        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                            <span class="w-3/12 h-2 bg-darkTheme-background dark:bg-white mb-4"></span>
                            <span class="w-2/4 h-2 bg-darkTheme-background dark:bg-white mb-4"></span>
                             <span class="w-2/12 h-2 bg-darkTheme-background dark:bg-white mb-4"></span>
                            <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-lightTheme-primary">
                                Digital
                                <span class="text-5xl sm:text-7xl text-darkTheme-background">
                                    Work
                                </span>
                            </h1>
                            <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                                Ofrecemos soluciones tecnológicas y personalizadas: desde la reparación de software en teléfonos hasta estampados únicos en tazas y camisetas, además de una amplia gama de productos de librería.
                            </p>
                            <div class="flex mt-8">
                                <button href="#" class="uppercase py-2 px-4 rounded-lg bg-lightTheme-primary border-2 border-transparent text-white text-md mr-4 hover:bg-orange-400">
                                    Descargar catalogo
                                </button>
                                <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                            <img src="https://www.tailwind-kit.com/images/object/10.png" class="max-w-xs md:max-w-sm m-auto" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Hero;

