import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../Context/LanguageContext';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../../Spinner';
import './style.css';

const CoffeeSellers =(props) => {

  const { API_URL } = props;
  const { language } = useContext(LanguageContext);

  const GET_RECENT_PRODUCTS = gql`
        query {
            RecentProducts {
              ${language} {
                title
              }
              price
              mainThumbnail
            }
        }
    `;

  const { loading, error, data } = useQuery(GET_RECENT_PRODUCTS);

  return loading || error ? <Spinner /> : (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <span className="subheading">Discover</span>
            <h2 className="mb-4">Best Coffee Sellers</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
          </div>
        </div>
        <div className="row">
          {
            data.RecentProducts.map((product, index) => (
              <div className="col-md-3" key={index}>
                <div className="menu-entry">
                  <a href="#" className="img" style={{ backgroundImage: `url(${API_URL + product.mainThumbnail})` }} />
                  <div className="text text-center pt-4">
                    <h3><a href="#">{product[language].title}</a></h3>
                    {/*<p>A small river named Duden flows by their place and supplies</p>*/}
                    <p className="price"><span>${product.price}</span></p>
                    <p><a href="#" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};


CoffeeSellers.propTypes = {
  API_URL: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default memo(CoffeeSellers);