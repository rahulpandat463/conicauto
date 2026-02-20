import React from 'react';

const OurProducts = () => {
    const products = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1627993079022-c20e2a225301?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            alt: "Multi-layer Gasket Detail"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1598555638289-4876b0d91295?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            alt: "Exhaust Manifold Gasket"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1530906358829-e8ad54cf6728?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            alt: "Cylinder Head Gasket"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            alt: "Oil Pan Gasket"
        },
        {
            id: 5,
            image: "https://plus.unsplash.com/premium_photo-1664303350222-2580df6fbf38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "O-Ring Assortment"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1563805908204-62e92c5780df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            alt: "Rubber Seal Set"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            alt: "Industrial Gasket"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1506543730-e35272a98f1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            alt: "Sealing Components"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h4 className="text-gray-500 font-medium tracking-[0.3em] uppercase mb-4 text-sm">
                        Our Products
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight max-w-4xl mx-auto">
                        We offer a comprehensive selection of gasket products to meet the diverse needs of our clients
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="relative group overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
                            <img
                                src={product.image}
                                alt={product.alt}
                                className="w-full h-full object-contain p-4 mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProducts;
