import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_RECENT_PRODUCTS } from '../../../../graphQL/queries';
import { LanguageContext } from '../../Context/LanguageContext';
import Spinner from '../../../Spinner';
import moment from 'moment';

const RecentProduct = () => {
  const { language } = useContext(LanguageContext);
  const { loading, data } = useQuery(GET_RECENT_PRODUCTS(language));

  return loading ? <Spinner /> : (
    <div className="ftco-footer-widget mb-4">
      {
        data.RecentProductsQuery.map((product, index) => (
          <div className="block-21 mb-4 d-flex" key={index}>
            <a className="blog-img mr-4" />
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

export default RecentProduct;