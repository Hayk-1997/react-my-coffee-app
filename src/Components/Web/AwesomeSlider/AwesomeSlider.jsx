import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import img from '../../../assets/web/images/about.jpg';
import './AwesomeSlider.css';
import '../../../assets/web/css/demo/demo1.css';
import { Coffee_AwesomeSliderRequest } from '../../../Redux/Web/AwesomeSlider/actions'

const AwesomeCarouselSlider = (props) =>  {

    useEffect(() => {
        props.GetAwesomeSlider();
    }, []);
    return (
        <main>
            <div id="carouselExampleIndicators">
                <div className="content">
                    <div className="glitch">
                        <div className="glitch__img" style={{backgroundImage: `url(${img})`}}/>
                        <div className="glitch__img" style={{backgroundImage: `url(${img})`}}/>
                        <div className="glitch__img" style={{backgroundImage: `url(${img})`}}/>
                        <div className="glitch__img" style={{backgroundImage: `url(${img})`}}/>
                        <span className="slider-header">
                                <div className="slider-item">
                                    <div className="overlay"/>
                                    <div className="container">
                                      <div className="row slider-text justify-content-center align-items-center">
                                        <div className="col-md-8 col-sm-12 text-center ftco-animate">
                                            <span className="subheading">Welcome</span>
                                          <h1 className="mb-4">Amazing Taste &amp; Beautiful Place</h1>
                                          <p className="mb-4 mb-md-5">
                                              A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                          </p>
                                          <div className="button-box">
                                              <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a>
                                              <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                           </span>
                    </div>
                </div>
            </div>
        </main>
    )
};

AwesomeCarouselSlider.propTypes = {

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return {
        GetAwesomeSlider: () => dispatch(Coffee_AwesomeSliderRequest()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AwesomeCarouselSlider);