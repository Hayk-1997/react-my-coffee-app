import React, { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../Spinner';
import './style.css';
import '../../../assets/web/css/demo/demo1.css';

const AwesomeSlider = () => {
  const { language } = useContext(LanguageContext);
  const GET_SLIDER = gql`
    query {
      AwesomeSliderQuery {
        _id
        image
        ${language} {
           title
           description
          }
        }
    }
  `;
  const { loading, error, data } = useQuery(GET_SLIDER);

  return loading || error ? <Spinner /> : (
    <main>
      <div id="carouselExampleIndicators">
        <div className="content">
          <div className="glitch">
            <div className="glitch__img" style={{ backgroundImage: `url(${data.AwesomeSliderQuery.image})` }}/>
            <div className="glitch__img" style={{ backgroundImage: `url(${data.AwesomeSliderQuery.image})` }}/>
            <div className="glitch__img" style={{ backgroundImage: `url(${data.AwesomeSliderQuery.image})` }}/>
            <div className="glitch__img" style={{ backgroundImage: `url(${data.AwesomeSliderQuery.image})` }}/>
            <span className="slider-header">
              <div className="slider-item">
                <div className="overlay"/>
                <div className="container">
                  <div className="row slider-text justify-content-center align-items-center">
                    <div className="col-md-8 col-sm-12 text-center ftco-animate">
                      <span className="subheading">
                        <h1>{data.AwesomeSliderQuery[language].title}</h1>
                      </span>
                      <h3
                        className="mb-4"
                        dangerouslySetInnerHTML={{ __html: data.AwesomeSliderQuery[language].description }}/>
                      <div className="button-box">
                        <button href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</button>
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
  );
};


export default AwesomeSlider;