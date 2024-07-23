import React from 'react';

const Pagos = () => {
    return (
        <div className='gradiente container mx-auto'>
            <div className='mx-auto p-6 backdrop-filter backdrop-blur-xl bg-white bg-opacity-30 container h-3/4'>
                <div className="flex flex-col md:flex-row p-6">
                    {/* Lado izquierdo */}
                    <div className="flex justify-center items-center md:w-1/2 h-auto p-16">
                        <img src="../svg/pagoMujer1.svg" alt="Pago Mujer" className="w-auto h-auto object-cover rounded-lg" />
                    </div>
                    {/* Lado derecho */}
                    <div className="md:w-1/2 p-6 flex flex-col justify-center">
                        <h2 className="text-6xl font-bold mb-4 text-lightTheme-primary">Realiza tus pagos de forma rápida y sencilla</h2>
                        <p className="text-gray-700 mb-2">Paga tus facturas de:</p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Cable</li>
                            <li>Internet</li>
                            <li>Energía eléctrica</li>
                            <li>Agua potable</li>
                            <li>Teléfono</li>
                        </ul>
                        <p className="text-gray-700 mt-4">Todo en un solo lugar, de manera segura y confiable.</p>
                    </div>
                </div>
                {/* Lado inferior con los íconos de las empresas */}
                <div className='flex flex-wrap justify-center md:justify-around items-center p-4'>
                    <img src="../img/AESCLESA.png" alt="Empresa 1" className="w-20 h-auto object-contain m-2" />
                    <img src="../img/claroLogo.png" alt="Empresa 2" className="w-20 h-auto object-contain m-2" />
                    <img src="../img/claroLogo.png" alt="Empresa 2" className="w-20 h-auto object-contain m-2" />
                    <img src="../img/AESCLESA.png" alt="Empresa 4" className="w-20 h-auto object-contain m-2" />
                    <img src="../img/AESCLESA.png" alt="Empresa 5" className="w-20 h-auto object-contain m-2" />
                    <img src="../img/AESCLESA.png" alt="Empresa 6" className="w-20 h-auto object-contain m-2" />
                    <img src="../img/AESCLESA.png" alt="Empresa 7" className="w-20 h-auto object-contain m-2" />
                </div>
            </div>
        </div>
    );
}

export default Pagos;
