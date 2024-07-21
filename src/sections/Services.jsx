// Services.js
import React from 'react';
import Card from '../components/Card';

const Services = () => {
    const images1 = [
        "https://tecdn.b-cdn.net/img/new/standard/city/062.jpg",
        "https://tecdn.b-cdn.net/img/new/standard/city/063.jpg",
        "https://tecdn.b-cdn.net/img/new/standard/city/064.jpg"
    ];

    const images2 = [
        "https://tecdn.b-cdn.net/img/new/standard/city/065.jpg",
        "https://tecdn.b-cdn.net/img/new/standard/city/066.jpg",
        "https://tecdn.b-cdn.net/img/new/standard/city/067.jpg"
    ];

    const images3 = [
        "https://tecdn.b-cdn.net/img/new/standard/city/068.jpg",
        "https://tecdn.b-cdn.net/img/new/standard/city/069.jpg",
        "https://tecdn.b-cdn.net/img/new/standard/city/070.jpg"
    ];

    return (
        <div className="bg-dots-pattern bg-cover p-4 container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">TIPOS DE SERVICIOS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 container mx-auto">
                <Card
                    title="Productos de Papelería"
                    description="Ofrecemos una amplia gama de productos de papelería, incluyendo cuadernos, pegatinas, colores, páginas, cartulinas, silicona y más. Perfecto para tus necesidades estudiantiles y de oficina."
                    images={images1}
                />
                <Card
                    title="Estampados"
                    description="Diseñamos y estampamos tazas, termos, llaveros, camisas, gorras y otros artículos personalizados a medida del cliente. Ideal para promociones y eventos especiales."
                    images={images2}
                />
                <Card
                    title="Productos Digitales"
                    description="Encuentra una variedad de productos digitales como audífonos, cargadores, mouses, teclados y otros accesorios tecnológicos. Todo lo que necesitas para tu configuración tecnológica."
                    images={images3}
                />
            </div>
        </div>
    );
}

export default Services;
