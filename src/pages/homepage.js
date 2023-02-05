import React from 'react'
import BrandsLove from '../components/BrandsLove';
import Header from '../components/common/Header';
import CredExperience from '../components/CredExperience';
import CredSecurity from '../components/CredSecurity';
import FeelSpecial from '../components/FeelSpecial';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import WindowPeek from '../components/WindowPeek';

const HomePage = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <ProductShowcase/>
        <FeelSpecial/>
        <BrandsLove/>
        <CredExperience/>
        <div className='non-mobile'>
        <WindowPeek/>
        </div>
       
        <CredSecurity/>
    </div>
  )
}

export default HomePage;
