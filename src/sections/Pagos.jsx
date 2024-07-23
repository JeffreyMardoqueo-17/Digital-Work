import React from 'react';

const Pagos = () => {
    return (
        <div className='gradiente container mx-auto p-1'>
            <div className='mx-auto p-4 backdrop-filter backdrop-blur-xl bg-white dark:bg-darkTheme-background dark:bg-opacity-30 bg-opacity-30 h-screen'>
                <div className="flex flex-col md:flex-row p-4">
                    {/* Lado izquierdo */}
                    <div className="flex justify-center items-center md:w-1/2 h-auto p-4">
                        <img src="../svg/pagoMujer1.svg" alt="Pago Mujer" className="w-auto h-auto object-cover rounded-lg" />
                    </div>
                    {/* Lado derecho */}
                    <div className="md:w-1/2 p-4 flex flex-col justify-center">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black dark:text-white">Realiza tus pagos de forma rápida y sencilla</h2>
                        <p className="text-gray-700 dark:text-gray-300">Paga tus facturas de:</p>
                        <p className="text-gray-700 dark:text-gray-300 mt-4">Todo en un solo lugar, de manera segura y confiable.</p><ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                            <li>Cable</li>
                            <li>Internet</li>
                            <li>Energía eléctrica</li>
                            <li>Agua potable</li>
                            <li>Teléfono</li>
                        </ul>
                        <div className='flex flex-wrap justify-center md:justify-around items-center p-1'>
                            <img src="../img/AESCLESA.png" alt="Empresa 1" className="w-12 h-auto object-contain m-2 md:w-20" />
                            <img src="../img/claroLogo.png" alt="Empresa 2" className="w-12 h-auto object-contain m-2 md:w-20" />
                            <img src="../img/claroLogo.png" alt="Empresa 2" className="w-12 h-auto object-contain m-2 md:w-20" />
                            <img src="../img/AESCLESA.png" alt="Empresa 4" className="w-12 h-auto object-contain m-2 md:w-20" />
                            <img src="../img/AESCLESA.png" alt="Empresa 5" className="w-12 h-auto object-contain m-2 md:w-20" />
                            <img src="../img/AESCLESA.png" alt="Empresa 6" className="w-12 h-auto object-contain m-2 md:w-20" />
                            <img src="../img/AESCLESA.png" alt="Empresa 7" className="w-12 h-auto object-contain m-2 md:w-20" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagos;
