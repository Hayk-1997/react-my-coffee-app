import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_RECENT_PRODUCTS } from '../../../../graphQL/queries';
import { LanguageContext } from '../../Context/LanguageContext';
import Spinner from '../../../Spinner';
import moment from 'moment';
import PropTypes from 'prop-types';

const RecentProduct = (props) => {
  const { API_URL } = props;
  const { language } = useContext(LanguageContext);
  const { loading, data } = useQuery(GET_RECENT_PRODUCTS(language));

  return loading ? <Spinner /> : (
    <div className="ftco-footer-widget mb-4 d-flex flex-column align-items-end">
      {
        data.RecentProductsQuery.map((product, index) => (
          <div className="block-21 mb-4 d-flex" key={index}>
            <a className="blog-img mr-4" style={{ backgroundImage: `url(${API_URL + product.mainThumbnail})` }} />
            <div className="text">
              <h3 className="heading"><span>{product[language].title}</span></h3>
              <div className="meta">
                <div><span className="icon-calendar"/> {moment(product.createdAt).format('MMMM D, Y')}</div>
                <div><span className="icon-person"/> Admin</div>
                <div><span className="icon-chat"/> 19</div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

RecentProduct.propTypes = {
  API_URL: PropTypes.string.isRequired,
};

export default RecentProduct;