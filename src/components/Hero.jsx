import React from 'react';

const Hero = () => {
    return (
        <div className="relative  overflow-hidden">
            <div className="absolute inset-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/src/assets/videos/home-banner-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                   Precision Gaskets, <br /> Engineered to <br /> Perform
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                    Reliable sealing solutions for every industry - <br /> from automotive to aerospace.
                </p>
            </div>
        </div>
    );
};

export default Hero;
