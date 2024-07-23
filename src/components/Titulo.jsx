import React from 'react';

const Titulo = ({ title }) => {
    return (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-darkTheme-background dark:text-white text-center">
            {title}
        </h2>
    );
};

export default Titulo;
