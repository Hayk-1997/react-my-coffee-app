import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { IPRequest } from '../../../Redux/IP/actions';
import PropTypes from 'prop-types';
import AwesomeCarouselSlider from '../AwesomeSlider/AwesomeSlider';
import Intro  from '../Intro/Intro';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
import routes from '../../../Routes/Web/routes';
import { Localization } from '../../Web/Context/LocalizationContext';

const Layout = (props) => {
    const  { getIPLocalization, IPSuccess, IPError, IP } = props;
    const [localization, setLocalization] = useState({});
    useEffect(() => {
        getIPLocalization();
    }, []);

    useEffect(() => {
        if (IPSuccess) {
            setLocalization(IP);
        }
    }, [IPSuccess]);

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
            <Localization.Provider value={{ localization }}>
                <SideBar />
                <AwesomeCarouselSlider />
                <Intro />
                {getRoutes()}
                <Footer />
            </Localization.Provider>
        </>
    );
};

Layout.propTypes = {
    getIPLocalization: PropTypes.func.isRequired,
    IPSuccess: PropTypes.bool.isRequired,
    IPError: PropTypes.bool.isRequired,
    IP: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    IPSuccess: state.IP.IPSuccess,
    IPError: state.IP.IPError,
    IP: state.IP.IP,
});

const mapDispatchToProps = (dispatch) => ({
    getIPLocalization: () => dispatch(IPRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);