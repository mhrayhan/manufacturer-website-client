import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Reviews from './Reviews';
import ToolsPart from './ToolsPart';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ToolsPart></ToolsPart>
      <Reviews></Reviews>
      <BusinessSummary></BusinessSummary>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;