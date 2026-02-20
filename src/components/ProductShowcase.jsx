import React from 'react';
import product1 from '../assets/images/products(1).png';
import product2 from '../assets/images/products(2).png';
import product3 from '../assets/images/products(3).png';
import product4 from '../assets/images/products(4).png';
import product5 from '../assets/images/products(5).png';
import product6 from '../assets/images/products(6).png';
import product7 from '../assets/images/products(7).png';
import product8 from '../assets/images/products(8).png';

const ProductShowcase = () => {
    const products = [
        {
            id: 1,
            name: 'Multi Layer Gaskets',
            featured: true,
            image: product1,
        },
        {
            id: 2,
            name: 'Head Gaskets',
            image: product2,
        },
        {
            id: 3,
            name: 'Exhaust Gaskets',
            image: product3,
        },
        {
            id: 4,
            name: 'Oil Seals',
            image: product4,
        },
        {
            id: 5,
            name: 'Intake Gaskets',
            image: product5,
        },
        {
            id: 6,
            name: 'Valve Stem Seals',
            image: product6,
        },
        {
            id: 7,
            name: 'Cork Gaskets',
            image: product7,
        },
        {
            id: 8,
            name: 'Rubber Gaskets',
            image: product8,
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <h3 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-4">Our Products</h3>
                <h2 className="text-2xl md:text-3xl font-medium text-gray-800 max-w-2xl mx-auto leading-tight">
                    We offer a comprehensive selection of gasket products to meet the diverse needs of our clients
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-bold">{product.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
