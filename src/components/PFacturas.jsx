import React from 'react';

const PFacturas = ({ icons }) => {
    return (
        <div className="overflow-hidden mt-8">
            <div className="flex animate-scroll w-full">
                {icons.map((item, index) => (
                    <div key={index} className="flex-shrink-0 mx-2">
                        {typeof item === 'string' ? (
                            <img src={item} alt={`icon-${index}`} className="h-24 w-24 object-contain" />
                        ) : (
                            <item className="h-24 w-24" />
                        )}
                    </div>
                ))}
                {icons.map((item, index) => (
                    <div key={index + icons.length} className="flex-shrink-0 mx-2">
                        {typeof item === 'string' ? (
                            <img src={item} alt={`icon-${index + icons.length}`} className="h-24 w-24 object-contain" />
                        ) : (
                            <item className="h-24 w-24" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PFacturas;
