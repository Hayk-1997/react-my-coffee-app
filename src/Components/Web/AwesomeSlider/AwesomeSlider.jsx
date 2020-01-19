import React, { Component } from  'react';
import img from '../../../assets/web/images/bg_1.jpg';
import img2 from '../../../assets/web/images/burger-1.jpg';
// import './AwesomeSlider.css';

class AwesomeCarouselSlider extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={img} alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>...</h5>
                            <p>...</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>...</h5>
                            <p>...</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img2} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>...</h5>
                            <p>...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AwesomeCarouselSlider;