import React from 'react';
import Comentario from '../components/Comentario';
import Titulo from '../components/Titulo';

const Testimonios = () => {
    const testimoniosData = [
        {
            nombre: "Ana María",
            comentario: "Los productos de papelería que compré son de excelente calidad, y los estampados en tazas quedaron perfectos. Sin duda, recomendaré su servicio.",
            imgSrc: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
        },
        {
            nombre: "Luis",
            comentario: "El mantenimiento de mi computadora fue rápido y efectivo. Además, pude pagar mis facturas de internet en el mismo lugar. Un servicio muy completo.",
            imgSrc: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
        },
        {
            nombre: "María José",
            comentario: "Me hicieron unas camisas personalizadas y quedaron increíbles. También me ayudaron con el pago de mis facturas. Un lugar muy conveniente para todo.",
            imgSrc: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
        },
    ];

    return (
        <div className="text-neutral-700 dark:text-neutral-300 bg-lightTheme-background dark:bg-darkTheme-background container mx-auto p-4 mt-4">
            <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <Titulo title="Testimonios" />
                <p className="mb-6 pb-2 md:mb-8 md:pb-0">
                    Lo que nuestros clientes dicen sobre nuestros productos y servicios. ¡Estamos comprometidos con la calidad y la satisfacción del cliente!
                </p>
            </div>

            <div className="grid gap-4 text-center md:grid-cols-2 lg:grid-cols-3">
                {testimoniosData.map((testimonio, index) => (
                    <Comentario
                        key={index}
                        nombre={testimonio.nombre}
                        comentario={testimonio.comentario}
                        imgSrc={testimonio.imgSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonios;
