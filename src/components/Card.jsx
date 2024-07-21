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

const Card = ({ title, description, listItems, images }) => {
    return (
        <div className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <ImageCarousel images={images} />
            </div>
            <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
                <p className="text-base">{description}</p>
            </div>
            <ul className="w-full">
                {listItems.map((item, index) => (
                    <li key={index} className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-white/10">
                        {item}
                    </li>
                ))}
            </ul>
            <div className="p-6">
                <a
                    type="button"
                    className="pointer-events-auto me-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400">
                    Card Link
                </a>
                <a
                    type="button"
                    className="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400">
                    Another Link
                </a>
            </div>
        </div>
    );
};

export default Card;
