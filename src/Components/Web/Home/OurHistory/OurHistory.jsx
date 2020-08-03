import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../../Spinner';
import './style.css';

const OurHistory = () => {
  const { language } = useContext(LanguageContext);
  const GET_OUR_HISTORY = gql`
      query {
          OurHistory {
              ${language} {
                  title
                  subTitle
                  description
              }
              image
          }
      }
    `;
  const { loading, error, data } = useQuery(GET_OUR_HISTORY);

  return loading || error ? <Spinner /> : (
    <div>
      <section className="ftco-about d-md-flex">
        <div className="one-half img" style={{ backgroundImage: `url(${data.OurHistory.image})` }} />
        <div className="one-half ftco-animate">
          <div className="overlap">
            <div className="heading-section ">
              <span className="subheading">{data.OurHistory[language].title}</span>
              <h2 className="mb-4">{data.OurHistory[language].subTitle}</h2>
            </div>
            <div> 
              <p dangerouslySetInnerHTML={{ __html: data.OurHistory[language].description }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurHistory;