import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import SocialButton from '../components/SocialButton';
import Map from '../components/Map';

const Footer = () => {
    return (
        <footer className="bg-lightTheme-background dark:bg-darkTheme-background container mx-auto dark:text-white py-8">
            <div className="p-4">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 container mx-auto">
                    <section className="w-full mb-8">
                        <Map />
                    </section>
                    <section className="w-full h-full flex flex-col items-center text-center">
                        <h2 className="text-2xl font-bold mb-4">Contáctenos</h2>
                        <div className="mt-2">
                            <strong className="font-semibold text-gray-900 dark:text-white">Correo: </strong>
                            <span>info@miaplicacion.com</span>
                        </div>
                        <div className="mt-2">
                            <strong className="font-semibold text-gray-900 dark:text-white">Teléfono: </strong>
                            <span>+503 1234-5678</span>
                        </div>
                        <div className="mt-2">
                            <strong className="font-semibold text-gray-900 dark:text-white">Dirección: </strong>
                            <span>Caserio los Vasquez, Canton El Zarzal, Santo Domingo de Gúzman, Sonsonate</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-4 mt-8">Síguenos</h2>
                        <div className="flex justify-center space-x-4 mb-4">
                            <SocialButton icon={FaFacebookF} color="#3b5998" />
                            <SocialButton icon={FaInstagram} color="#e1306c" />
                            <SocialButton icon={FaWhatsapp} color="#25d366" />
                        </div>
                    </section>
                </div>
                <div className="border-t border-gray-800 pt-4 text-center">
                    <p>© 2024 Digital Work. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
