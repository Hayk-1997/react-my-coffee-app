import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Intro  from '../Intro/Intro';
import SideBar from '../SideBar';
import Footer from '../Footer/Footer';
import routes from '../../../Routes/Web/routes';
import { IPRequest } from '../../../Redux/IP/actions';
import AwesomeSlider from '../AwesomeSlider';
import { LanguageContext } from '../Context/LanguageContext';
import Spinner from '../../Spinner';

const Layout = (props) => {
  const {
    GetIPLocalization, IP,
    IPSuccess, IPError,
  } = props;
  const [language, setLanguage] = useState(localStorage.getItem('language'));
  useEffect(() => {
    GetIPLocalization();
  }, []);

  useEffect(() => {
    if (IPSuccess) {
      !language ? setLanguage(IP.cc.toLowerCase()) : localStorage.setItem('language', language);
    } else if (IPError) {
      !language ? setLanguage('en') : localStorage.setItem('language', language);
    }
  }, [IPSuccess, IPError]);
  const getRoutes = () => {
    return routes.map((route) => {
      if (route) {
        const Component = route.component;
        return (
          <Route
            key={route.id}
            path={route.path}
            render={(props) => {
              return (
                <Component {...props} />
              );
            }}
          />
        );
      }
    });
  };
  const changeLanguage = (language) => {
    localStorage.setItem('language', language);
    window.location.reload();
  };

  return language ? (
    <>
      <LanguageContext.Provider
        value={{
          language, changeLanguage,
        }}
      >
        <SideBar />
        <AwesomeSlider />
        <Intro />
        {getRoutes()}
        <Footer />
      </LanguageContext.Provider>
    </>
  ) : <Spinner />;
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