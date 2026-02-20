import React from 'react';
import caterpillarLogo from '../assets/images/catterpilar.png';
import cumminsLogo from '../assets/images/cummins.png';
import detroitDieselLogo from '../assets/images/detroit diesel.webp';
import scanaLogo from '../assets/images/scana.webp';
import masseyFergusonLogo from '../assets/images/massey ferguison.webp';
import belarusLogo from '../assets/images/beelarus.webp';
import superiorLogo from '../assets/images/superior.webp';

const Partners = () => {
    const logos = [
        { name: 'Caterpillar', image: caterpillarLogo },
        { name: 'Cummins', image: cumminsLogo },
        { name: 'JCB', image: '/src/assets/images/utb-logo.jpg' },
        { name: 'Detroit Diesel', image: detroitDieselLogo },
        { name: 'Scania', image: scanaLogo },
        { name: 'Massey Ferguson', image: masseyFergusonLogo },
        { name: 'Belarus', image: belarusLogo },
        { name: 'Superior', image: superiorLogo },
        { name: 'New Holland', image: '/src/assets/images/new holland cgriculture.webp' },
        { name: 'Mack', image: '/src/assets/images/mack.webp' },
        { name: 'Komatsu', image: '/src/assets/images/komatsu.webp' },
        { name: 'Zetor', image: '/src/assets/images/fetor.webp' },
        { name: 'Ursus', image: '/src/assets/images/utrus.webp' },
        { name: 'John Deere', image: '/src/assets/john deere.webp' },
        { name: 'Fiat', image: '/src/assets/fiat.webp' },
        { name: 'Perkins', image: '/src/assets/images/perkins.webp' },
        { name: 'Waukesha', image: '/src/assets/images/waukesha.webp' },
        { name: 'Volvo', image: '/src/assets/images/volvo.webp' }
    ];

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                    <div className="">
                        <h2 className="md:text-4xl font-black  leading-tight">
                            Highlight achievements by the numbers
                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-gray-500 font-medium leading-relaxed">
                            At Conic Automotive, we take pride in delivering premium engineered gasket solutions to some of the most respected brands in the industry. Our commitment to quality, innovation, and reliability has earned us long-standing relationships with top suppliers and industry leaders across the globe.
                        </p>
                    </div>
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 items-center">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center group">
                            <img
                                src={logo.image}
                                alt={logo.name}
                                className="h-20 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110"
                                title={logo.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
