import React from 'react';

const History = () => {
    const milestones = [
        {
            year: '1989',
            title: 'Beginning',
            content: "Conic was founded by Narulas, with a vision to provide high-quality gaskets for various industrial applications. Starting was modest with 2 workers working on wooden tools."
        },
        {
            year: '1994',
            title: 'Upgrade',
            content: "Conic introduces its first electrical operated press and started making head gaskets on steel tools, focusing on standard sizes and materials commonly used in automotive and machinery industries."
        },
        // ... abbreviated for Home page component
        {
            year: '2002',
            title: 'Capacity Expansion',
            content: "Conic underwent an expansion effort to reflect its evolution into a leader in gasket manufacturing and technology. Rebranded and built a 22,000 Sq. Ft. facility in IMT MANESAR."
        },
        {
            year: '2019',
            title: 'MLS Exhaust',
            content: "Introduced Multi-Layer Steel (MLS) exhaust gaskets to meet high-performance automotive demands."
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-black text-black mb-16 text-center uppercase tracking-widest">Our Journey</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {milestones.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 border-l-8 border-blue-900 group hover:-translate-y-2 transition-all">
                            <span className="text-2xl font-black text-yellow-500 block mb-2">{item.year}</span>
                            <h3 className="text-lg font-black text-black mb-4">{item.title}</h3>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default History;
