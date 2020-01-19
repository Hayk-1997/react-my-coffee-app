import React, { Component } from 'react';
import Sidebar from '../Components/Web/SideBar/SideBar';
import '../assets/web/css/open-iconic-bootstrap.min.css';
import '../assets/web/css/animate.css';
// import '../assets/web/css/owl.carousel.min.css';
// import '../assets/web/css/owl.theme.default.min.css';
import '../assets/web/css/magnific-popup.css';
import '../assets/web/css/aos.css';
import '../assets/web/css/ionicons.min.css';
// import '../assets/web/css/bootstrap-datepicker.css';
// import '../assets/web/css/jquery.timepicker.css';
import '../assets/web/css/flaticon.css';
import '../assets/web/css/icomoon.css';
import '../assets/web/css/style.css';
import AwesomeCarouselSlider from "../Components/Web/AwesomeSlider/AwesomeSlider";
import Intro from "../Components/Web/Intro/Intro";

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
            </div>
        )
    }
}

export default WebLayout;