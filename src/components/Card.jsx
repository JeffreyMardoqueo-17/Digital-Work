// Card.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop>
            {images.map((src, index) => (
                <div key={index}>
                    <img src={src} alt={`Slide ${index}`} className="rounded-t-lg" />
                </div>
            ))}
        </Carousel>
    );
};

const Card = ({ title, description, images }) => {
    return (
        <div className="block  rounded-lg bg-white/10 backdrop-blur-md shadow-md dark:bg-gray-800/70 dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <ImageCarousel images={images} />
            </div>
            <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
                <p className="text-base">{description}</p>
            </div>
            
            <div className="p-6">
                <button type="button" class="focus:outline-none text-white bg-lightTheme-primary hover:bg-blue-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Descargar Catalogo</button>
            </div>
        </div>
    );
};

export default Card;
