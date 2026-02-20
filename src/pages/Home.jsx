import React from 'react';
import Hero from '../components/Hero';
import WhoAreWe from '../components/WhoAreWe';
import SpecializedGaskets from '../components/SpecializedGaskets';
import ProductShowcase from '../components/ProductShowcase';
import Partners from '../components/Partners';

const Home = () => {
    return (
        <div>
            <Hero />
            <SpecializedGaskets />
            <ProductShowcase />
            <WhoAreWe />
            <Partners />
        </div>
    );
};

export default Home;
