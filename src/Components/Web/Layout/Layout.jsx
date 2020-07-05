import React from 'react';
import { Route } from 'react-router-dom';
import AwesomeCarouselSlider from '../AwesomeSlider/AwesomeSlider';
import Intro  from '../Intro/Intro';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
import routes from '../../../Routes/Web/routes';

const Layout = (props) => {

  const getRoutes = () => {
    return routes.map((route) => {
      if (route) {
        const RouteVal = route.component;
        return (
          <Route
            key={route.id}
            path={route.path}
            render={(props) => {
              return (
                <RouteVal {...props} />
              );
            }}
          />
        );
      }
    });
  };

  return (
    <>
      <SideBar />
      <AwesomeCarouselSlider />
      <Intro />
      {getRoutes()}
      <Footer />
    </>
  );
};

export default Layout;