import React from 'react';
import Beneficios from '../components/beneficios';
import { FaLeaf, FaStar, FaCoffee, FaShieldAlt } from 'react-icons/fa';

const beneficiosData = [
    {
        icon: <FaLeaf />,
        title: 'Sostenibilidad',
        description: 'Nuestro producto está hecho con materiales reciclados para promover la sostenibilidad.',
    },
    {
        icon: <FaStar />,
        title: 'Calidad Superior',
        description: 'Garantizamos la mejor calidad en todos nuestros productos para tu satisfacción.',
    },
    {
        icon: <FaCoffee />,
        title: 'Energía Eficiente',
        description: 'Diseñado para maximizar la eficiencia energética y reducir el consumo.',
    },
    {
        icon: <FaShieldAlt />,
        title: 'Seguridad Avanzada',
        description: 'Nuestros productos están equipados con las últimas tecnologías de seguridad para proteger tus datos.',
    },
];

const Beneficies = () => {
    return (
        <div>
            <section className="py-12 bg-lightTheme-background dark:bg-darkTheme-background">
                <div className="container mx-auto px-1">
                    <h2 className="text-2xl font-semibold mb-6 text-center dark:text-white">
                        Beneficios de Nuestro Producto
                    </h2>
                    <Beneficios beneficios={beneficiosData} />
                </div>
            </section>
        </div>
    );
};

export default Beneficies;
