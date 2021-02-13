import React from 'react';
import OurStory from './OurStory';
import Services from './Services/Services';
import OurMenu from './OurMenu';
import Counter from './Counter';
import CoffeeSellers from './CoffeeSellers/CoffeeSellers';
import Gallery from './Gallery/Gallery';
import Customers from './Customers/Customers';
import RecentBlog from './RecentBlog/RecentBlog';
import Appointment from './Appointment/Appointment';

const Home = (props) => {

  return (
    <div>
      <OurStory/>
      <Services/>
      <OurMenu {...props} />
      <Counter />
      <CoffeeSellers {...props} />
      <Gallery />
      <Customers />
      <RecentBlog />
      <Appointment />
    </div>
  );
};

export default Home;