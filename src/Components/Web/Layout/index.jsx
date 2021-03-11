import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Index from '../Intro';
import SideBar from '../SideBar';
import Footer from '../Footer/Footer';
import routes from '../../../Routes/Web/routes';
import { IPRequest } from '../../../Redux/IP/actions';
import AwesomeSlider from '../AwesomeSlider';
import { LanguageContext } from '../Context/LanguageContext';
import Spinner from '../../Spinner';
import { VerifyUserTokenRequest } from '../../../Redux/Coffee/Auth/Verify/actions';
import usePrevious from '../../../CustomHooks/usePrevious';

const Layout = (props) => {
  const {
    history,
    GetIPLocalization,
    IP,
    IPSuccess,
    IPError,
    VerifyUserToken,
    VerifyUserTokenError
  } = props;

  const API_URL = process.env.REACT_APP_API_URL;
  const [language, setLanguage] = useState(localStorage.getItem('language'));
  const [token, setToken] = useState(localStorage.getItem('token'));
  const previousVerifyUserTokenError = usePrevious(VerifyUserTokenError);

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

  useEffect(() => {
    token && VerifyUserToken();
  }, [token]);

  useEffect(() => {
    if (previousVerifyUserTokenError === false && VerifyUserTokenError) {
      history.push('/coffee/login');
    }
  },[VerifyUserTokenError]);

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
                <Component
                  API_URL={API_URL}
                  {...props}
                />
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

  return !language ? <Spinner /> : (
    <>
      <LanguageContext.Provider
        value={{
          language,
          changeLanguage,
        }}
      >
        <SideBar />
        <AwesomeSlider />
        <Index />
        {getRoutes()}
        <Footer />
      </LanguageContext.Provider>
    </>
  );
};

Layout.propTypes = {
  history: PropTypes.object.isRequired,
  GetIPLocalization: PropTypes.func.isRequired,
  IP: PropTypes.object.isRequired,
  IPSuccess: PropTypes.bool.isRequired,
  IPError: PropTypes.bool.isRequired,
  VerifyUserToken: PropTypes.func.isRequired,
  VerifyUserTokenError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  IPSuccess: state.IP.IPSuccess,
  IPError: state.IP.IPError,
  IP: state.IP.IP,
  VerifyUserTokenError: state.VerifyUserToken.VerifyUserTokenError,
});

const mapsDispatchToProps = (dispatch) => ({
  GetIPLocalization: () => dispatch(IPRequest()),
  VerifyUserToken: () => dispatch(VerifyUserTokenRequest()),
});

export default connect(mapStateToProps,mapsDispatchToProps)(Layout);