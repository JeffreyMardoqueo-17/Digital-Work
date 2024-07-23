import React from 'react';

const Comentario = ({ nombre, comentario, imgSrc }) => {
    return (
        <div className="block rounded-lg bg-lightTheme-background shadow-lg dark:bg-darkTheme-formulario dark:shadow-black/30 w-4/5 mx-auto">
            <div className="h-3 overflow-hidden rounded-t-lg bg-lightTheme-primary"></div>
            <div className="mx-auto -mt-5 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src={imgSrc} alt={nombre} />
            </div>
            <div className="p-6 ">
                <h4 className="mb-1 text-2xl font-semibold">{nombre}</h4>
                <hr />
                <p className="mt-1">
                    <span className="inline-block pe-2 [&>svg]:w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                        </svg>
                    </span>
                    {comentario}
                </p>
            </div>
        </div>
    );
};

export default Comentario;
