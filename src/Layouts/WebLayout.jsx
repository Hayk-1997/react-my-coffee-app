import React, {Component} from 'react';
import '../Components/Web/Styles/style.css';
import Sidebar from '../Components/Web/SideBar/SideBar';
import AwesomeCarouselSlider from "../Components/Web/AwesomeSlider/AwesomeSlider";
import Intro from "../Components/Web/Intro/Intro";
import OurHistory from "../Components/Web/OurHistory/OurHistory";
import Services from "../Components/Web/Services/Services";
import OurMenu from "../Components/Web/OurMenu/OurMenu";
import Branches from "../Components/Web/Branches/Branches";
import Dogs from "../Dogs";

function WebLayout () {
    return (
        <div>
            <Sidebar/>
            <AwesomeCarouselSlider/>
            <Intro/>
            <OurHistory/>
            <Services/>
            <OurMenu/>
            <Branches/>
            <Dogs />
        </div>
    )
}

export default WebLayout;