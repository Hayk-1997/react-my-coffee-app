import React, { Component } from 'react';
import Sidebar from '../Components/Web/SideBar/SideBar';
import '../assets/web/css/open-iconic-bootstrap.min.css';
import '../assets/web/css/animate.css';
import '../assets/web/css/magnific-popup.css';
import '../assets/web/css/aos.css';
import '../assets/web/css/ionicons.min.css';
import '../assets/web/css/flaticon.css';
import '../assets/web/css/icomoon.css';
import '../assets/web/css/style.css';
import AwesomeCarouselSlider from "../Components/Web/AwesomeSlider/AwesomeSlider";
import Intro from "../Components/Web/Intro/Intro";
import OurHistory from "../Components/Web/OurHistory/OurHistory";
import Services from "../Components/Web/Services/Services";
import OurMenu from "../Components/Web/OurMenu/OurMenu";
import Branches from "../Components/Web/Branches/Branches";
import Dogs from "../Dogs";


class WebLayout extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div>
                <Sidebar />
                <AwesomeCarouselSlider />
                <Intro />
                <OurHistory />
                <Services />
                <OurMenu />
                <Branches />
                <Dogs />
            </div>
        )
    }
}

export default WebLayout;