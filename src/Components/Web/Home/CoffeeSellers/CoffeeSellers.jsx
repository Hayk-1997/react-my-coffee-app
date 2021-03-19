import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../Context/LanguageContext';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../../Spinner';
import { Link } from 'react-router-dom';
import './style.css';
import { GET_RECENT_PRODUCTS } from '../../../../graphQL/queries';

const CoffeeSellers =(props) => {

  const { API_URL } = props;
  const { language } = useContext(LanguageContext);

  const { loading, error, data } = useQuery(GET_RECENT_PRODUCTS(language));

  return loading || error ? <Spinner /> : (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <span className="subheading">Discover</span>
            <h2 className="mb-4">Best Coffee Sellers</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
            </p>
          </div>
        </div>
        <div className="row">
          {
            data.RecentProductsQuery.map((product, index) => (
              <div className="col-md-3" key={index}>
                <div className="menu-entry">
                  <Link to={`/coffee/single-product/${product.slug}`} className="img" style={{ backgroundImage: `url(${API_URL + product.mainThumbnail})` }} />
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

const mapDispatchToProps = (dispatch) => ({

});

export default memo(CoffeeSellers);