import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Intro  from '../Intro/Intro';
import SideBar from '../SideBar';
import Footer from '../Footer/Footer';
import routes from '../../../Routes/Web/routes';
import { IPRequest } from '../../../Redux/IP/actions';
import AwesomeSlider from '../AwesomeSlider';

const Layout = (props) => {
  const { GetIPLocalization } = props;

  useEffect(() => {
    GetIPLocalization();
  }, []);

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
      <AwesomeSlider />
      <Intro />
      {getRoutes()}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  GetIPLocalization: PropTypes.func.isRequired,
  IP: PropTypes.object.isRequired,
  IPSuccess: PropTypes.bool.isRequired,
  IPError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  IPSuccess: state.IP.IPSuccess,
  IPError: state.IP.IPError,
  IP: state.IP.IP,
});

const mapsDispatchToProps = (dispatch) => ({
  GetIPLocalization: () => dispatch(IPRequest()),
});

export default connect(mapStateToProps,mapsDispatchToProps)(Layout);