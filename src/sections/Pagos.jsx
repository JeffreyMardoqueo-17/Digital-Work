import React from 'react';

const Pagos = () => {
    return (
        <div className='gradiente container mx-auto px-1'>
            <div className="mx-auto backdrop-filter backdrop-blur-xl bg-white dark:bg-darkTheme-background bg-opacity-30 dark:bg-opacity-30 h-full">
                <div className='mx-auto p-4 backdrop-filter backdrop-blur-xl bg-white dark:bg-darkTheme-background bg-opacity-40 dark:bg-opacity-30 h-full'>
                    <div className="flex flex-col md:flex-row p-4">
                        {/* Lado izquierdo */}
                        <div className="flex justify-center items-center md:w-1/2 h-auto p-4">
                            <img src="../svg/pagoMujer1.svg" alt="Pago Mujer" className="w-auto h-auto object-cover rounded-lg" />
                        </div>
                        {/* Lado derecho */}
                        <div className="md:w-1/2 p-4 flex flex-col justify-center">
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black dark:text-white mb-5">Realiza tus pagos de forma rápida y sencilla</h2>
                            <p className="mb-3 text-gray-500 dark:text-gray-400">
                                Ahora puedes pagar tus facturas de manera rápida y cómoda visitando nuestro local. Ofrecemos un servicio en el que puedes cancelar tus facturas de <strong className="font-semibold text-gray-900 dark:text-white">cable, internet, energía eléctrica</strong>, entre otros. Todo esto por una pequeña comisión de <strong className="font-semibold text-gray-900 dark:text-white">$0.50</strong>. Ven a nuestro establecimiento y realiza tus pagos de forma segura y eficiente, sin complicaciones ni largas esperas.
                            </p>
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
        </div>
    );
}

export default Pagos;
