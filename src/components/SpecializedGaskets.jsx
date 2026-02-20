import React from 'react';

const SpecializedGaskets = () => {
    const industries = [
        {
            id: 1,
            name: 'Heavy Duty Trucks',
            image: '/src/assets/images/home-1.jpg',
        },
        {
            id: 2,
            name: 'Excavation Machinery',
            image: '/src/assets/images/home-2.jpg',
        },
        {
            id: 3,
            name: 'Tractor Engineering',
            image: '/src/assets/images/home-3.jpg',
        },
        {
            id: 4,
            name: 'Industrial Equipment',
            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        }
    ];

    return (
        <section className="bg-white"><br /><br /><br /><br />
            <div className="max-w-7xl mx-auto px-6 pt-12 pb-2">
                <h2 className="text-center  text-lg md:text-xl font-bold tracking-tight">
                    Specialized Gaskets for Diverse Industries
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
                {industries.map((item) => (
                    <div key={item.id} className="relative group overflow-hidden aspect-[3/4]">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                            <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                {item.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SpecializedGaskets;
