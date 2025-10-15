import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import WhyUs from '../components/WhyUs';
import ContactInfo from '../components/ContactInfo';



function HomePage({ products }) {
  return (
    <>
      <Hero />
      <FeaturedProducts products={products} />
      <WhyUs />
      <ContactInfo />
    </>
  );
}

export default HomePage;
