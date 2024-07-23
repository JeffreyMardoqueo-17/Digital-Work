import React from 'react';
import Beneficios from '../components/beneficios';
import { FaBook, FaPrint, FaTools, FaDollarSign } from 'react-icons/fa';
import Titulo from '../components/Titulo';

const beneficiosData = [
    {
        icon: <FaBook />,
        title: 'Variedad de Productos de Papelería',
        description: 'Ofrecemos una amplia gama de productos de librería, desde cuadernos y lápices hasta colores y artículos de papelería.',
    },
    {
        icon: <FaPrint />,
        title: 'Servicios Personalizados de Impresión',
        description: 'Brindamos servicios de estampado en tazas, llaveros, camisas, gorras y termos, adaptados a tus necesidades.',
    },
    {
        icon: <FaTools />,
        title: 'Mantenimiento de Dispositivos Electrónicos',
        description: 'Realizamos mantenimiento y reparaciones de hardware y software para celulares y computadoras, todo en nuestro local.',
    },
    {
        icon: <FaDollarSign />,
        title: 'Pago de Facturas y Servicios',
        description: 'Facilitamos el pago de facturas de diversos servicios, incluyendo internet, en un solo lugar para tu comodidad.',
    },
];

const Beneficies = () => {
    return (
        <div>
            <section className="py-12 bg-lightTheme-background dark:bg-darkTheme-background">
                <div className="container mx-auto px-1">
                    <Titulo title={'Beneficios'}/>
                    <Beneficios beneficios={beneficiosData} />
                </div>
            </section>
        </div>
    );
};

export default Beneficies;
