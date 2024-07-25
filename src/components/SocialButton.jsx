import React from 'react';

const SocialButton = ({ icon: Icon, color }) => {
    return (
        <button
            type="button"
            className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style={{ backgroundColor: color }}
        >
            <span className="h-4 w-4">
                <Icon size={16} />
            </span>
        </button>
    );
};

export default SocialButton;
