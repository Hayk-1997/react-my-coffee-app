import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './AwesomeSlider.css';
import '../../../assets/web/css/demo/demo1.css';
import { Coffee_AwesomeSliderRequest } from '../../../Redux/Web/AwesomeSlider/actions'

const AwesomeCarouselSlider = (props) =>  {
    const { GetAwesomeSlider, Coffee_AwesomeSliderData, Coffee_AwesomeSliderSuccess } = props;

    useEffect(() => {
        GetAwesomeSlider();
    }, []);

    return (
        <>
            {
                Coffee_AwesomeSliderSuccess ? (
                    <main>
                        <div id="carouselExampleIndicators">
                            <div className="content">
                                <div className="glitch">
                                    <div className="glitch__img" style={{backgroundImage: `url(${Coffee_AwesomeSliderData.image})`}}/>
                                    <div className="glitch__img" style={{backgroundImage: `url(${Coffee_AwesomeSliderData.image})`}}/>
                                    <div className="glitch__img" style={{backgroundImage: `url(${Coffee_AwesomeSliderData.image})`}}/>
                                    <div className="glitch__img" style={{backgroundImage: `url(${Coffee_AwesomeSliderData.image})`}}/>
                                    <span className="slider-header">
                                <div className="slider-item">
                                    <div className="overlay"/>
                                    <div className="container">
                                      <div className="row slider-text justify-content-center align-items-center">
                                        <div className="col-md-8 col-sm-12 text-center ftco-animate">
                                            <span className="subheading">
                                                <h1>Welcome</h1>
                                            </span>
                                          <h3
                                              className="mb-4"
                                              dangerouslySetInnerHTML={{__html: Coffee_AwesomeSliderData.en[0].description}}/>
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
                ): null
            }
        </>
    )
};

AwesomeCarouselSlider.propTypes = {
    Coffee_AwesomeSliderSuccess: PropTypes.bool.isRequired,
    Coffee_AwesomeSliderData:  PropTypes.object.isRequired,
    GetAwesomeSlider: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    Coffee_AwesomeSliderSuccess: state.CoffeeAwesomeSlider.Coffee_AwesomeSliderSuccess,
    Coffee_AwesomeSliderError: state.CoffeeAwesomeSlider.Coffee_AwesomeSliderError,
    Coffee_AwesomeSliderData: state.CoffeeAwesomeSlider.Coffee_AwesomeSliderData,
});

const mapDispatchToProps = (dispatch) => {
    return {
        GetAwesomeSlider: () => dispatch(Coffee_AwesomeSliderRequest()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AwesomeCarouselSlider);