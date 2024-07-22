import React from 'react';


const Pagos = () => {
    return (
        <div className="flex h-screen container mx-auto">
            {/* Lado izquierdo */}
            <div className="w-1/2 flex flex-col items-center justify-center dark:bg-darkTheme-background p-4">
                <h1 className="text-2xl font-bold mb-4">¿Necesitas pagar tus facturas?</h1>
                <img src='../svg/Pagoo.svg' className="w-full h-auto custom-bounce" />
            </div>
            {/* Lado derecho */}
            <div className="w-1/2 bg-lightTheme-background p-4">
                {/* Aquí puedes agregar tus componentes más tarde */}
            </div>
        </div>
    );
}

export default Pagos;
