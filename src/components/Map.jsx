import React from 'react';

const Map = () => {
    return (
        <div className="container mx-auto mt-8 p-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-md" style={{ paddingTop: '56.25%' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27873.619776035182!2d-89.83020892857267!3d13.698026521251686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62b1c53bdddb91%3A0xf2fe819fc8dce280!2sColegio%20Adventista%20El%20Zarzal!5e0!3m2!1ses-419!2ssv!4v1721836402891!5m2!1ses-419!2ssv"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute top-0 left-0 w-full h-full"
                ></iframe>
            </div>
        </div>
    );
};

export default Map;
