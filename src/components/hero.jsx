import React, { useState, useEffect } from 'react';

const imagenes = [
    {
        alt: "imagen 1",
        src: "../img/fondos.jpg"
    },
    {
        alt: "imagen 2",
        src: "../img/Spiderman.jpg"
    },
    {
        alt: "imagen 3",
        src: "../img/FondoPantalla.jpg"
    }
]
const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 4000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <div>
            {/* Hero section with background image, heading, subheading and button */}
            <div
                className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${imagenes[currentImageIndex].src})` }}>
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
                    <div className="flex h-full items-center justify-center">
                        <div className="px-6 text-center text-white md:px-12">
                            <h1 className="mb-6 text-5xl font-bold text-white bg-none">Digital</h1>
                            <h3 className="mb-8 text-3xl font-bold">Work</h3>
                            <button
                                type="button"
                                className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                Descargar catalogo de productos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
