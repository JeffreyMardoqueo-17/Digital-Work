import React from 'react';

const BeneficioItem = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center p-6 dark:border-neutral-500 m-2">
            <div className="text-4xl mb-4 text-lightTheme-primary dark:text-lightTheme-primary">{icon}</div>
            <h4 className="text-xl font-semibold mb-2 text-darkTheme-background dark:text-white">{title}</h4>
            <p className="text-base text-neutral-500 dark:text-neutral-300">{description}</p>
        </div>
    );
};

const Beneficios = ({ beneficios }) => {
    return (
        <div className="container mx-auto px-4 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {beneficios.map((beneficio, index) => (
                    <BeneficioItem
                        key={index}
                        icon={beneficio.icon}
                        title={beneficio.title}
                        description={beneficio.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Beneficios;
