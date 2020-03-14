import React from 'react';
import routes from "../../../Routes/Web/routes";
import { Route } from "react-router-dom";
import Intro from "../Intro/Intro";
import AwesomeCarouselSlider from "../AwesomeSlider/AwesomeSlider";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";

const Layout = () => {
    const getRoutes = () => {
        return routes.map((route) => {
            console.log(route);
            if (route) {
               const RouteVal = route.component;
                return (
                    <Route
                        key={route.id}
                        path={route.path}
                        render={(props) => {
                            return (
                                <RouteVal {...props} />
                            )
                        }}
                    />
                )
            }
        });
    };
    return (
       <>
           <SideBar />
           <AwesomeCarouselSlider />
           <Intro />
           { getRoutes() }
           <Footer />
       </>
    )
};

export default Layout;