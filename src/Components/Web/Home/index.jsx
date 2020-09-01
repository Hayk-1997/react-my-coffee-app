import React from 'react';
import OurHistory from './OurHistory/OurHistory';
import Services from './Services/Services';
import OurMenu from './OurMenu';
import Branches from './Branches/Branches';
import CoffeeSellers from './CoffeeSellers/CoffeeSellers';
import Gallery from './Gallery/Gallery';
import Customers from './Customers/Customers';
import RecentBlog from './RecentBlog/RecentBlog';
import Appointment from './Appointment/Appointment';

const Home = (props) => {

  return (
    <div>
      <OurHistory/>
      <Services/>
      <OurMenu {...props} />
      <Branches/>
      <CoffeeSellers />
      <Gallery />
      <Customers />
      <RecentBlog />
      <Appointment />
    </div>
  );
};

export default Home;