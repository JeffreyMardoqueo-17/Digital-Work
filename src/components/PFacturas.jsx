import React from 'react';

const PFacturas = ({ icons }) => {
    return (
        <div className="overflow-hidden">
            <div className="flex animate-scroll">
                {icons.map((icon, index) => (
                    <div key={index} className="flex-shrink-0 mx-2">
                        <img src={icon} alt={`icon-${index}`} className="h-24 w-24" />
                    </div>
                ))}
                {icons.map((icon, index) => (
                    <div key={index + icons.length} className="flex-shrink-0 mx-2">
                        <img src={icon} alt={`icon-${index}`} className="h-24 w-24" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PFacturas;
