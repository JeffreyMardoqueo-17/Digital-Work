import React from 'react';

const Galeria = () => {
    const images = [
        '../../img/fondo.webp',
        '../../img/fondos.jpg',
        '../../img/fondos.jpg',
        '../../img/fondos.jpg',
        '../../img/fondos.jpg',
        '../../img/fondos.jpg',
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((imageUrl, index) => (
                    <div key={index} className="p-2">
                        <img src={imageUrl} alt={`Image ${index}`} className="rounded-lg shadow-md max-w-full h-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Galeria;
