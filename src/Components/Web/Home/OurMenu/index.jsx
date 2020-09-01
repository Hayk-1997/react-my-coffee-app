import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../../Spinner';
import { LanguageContext } from '../../Context/LanguageContext';
import imageCardTransition from '../../../../Helpers/imageCardTransition';
import './style.css';

const OurMenu = (props) => {
  const { API_URL } = props;
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    imageCardTransition();
  });

  const GET_OUR_HISTORY = gql`
     query {
       OurMenu {
         ${language} {
           description
           card1 {
             image
             description
           }
           card2 {
             image
             description  
           }
           card3 {
             image
             description
           }
           card4 {
             image
             description
           }
         }
       }
     }
  `;

  const { loading, error, data } = useQuery(GET_OUR_HISTORY);

  return loading || error ? <Spinner /> : (
    <section className="our-menu-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 pr-md-5">
            <div className="heading-section text-md-right ftco-animate">
              <span className="subheading">Discover</span>
              <h2 className="mb-4">Our Menu</h2>
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: data.OurMenu[language].description }} />
              <p><a href="#" className="btn btn-primary btn-outline-primary px-4 py-3">View Full Menu </a></p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              {
                Object.keys(data.OurMenu[language]).map((item, index) => {
                  if (typeof data.OurMenu[language][item] === 'object') {
                    return (
                      <div className="col-md-6 image-cards" key={index}>
                        <div  className="card rounded">
                          <div className="card__overlay">
                          </div>
                          <div className="card__image" style={{ backgroundImage: `url(${API_URL + data.OurMenu[language][item].image})` }} />
                          <div className="card__heading">
                            <h2>{data.OurMenu[language][item].description}</h2>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

OurMenu.propTypes = {
  API_URL: PropTypes.string.isRequired,
};

export default OurMenu;