import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../Context/LanguageContext';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../../Spinner';
import './style.css';

const OurStory = (props) => {
  const { API_URL } = props;
  const { language } = useContext(LanguageContext);
  const GET_OUR_STORY = gql`
      query {
          OurStoryQuery {
              ${language} {
                  title
                  subTitle
                  description
              }
              image
          }
      }
    `;
  const { loading, error, data } = useQuery(GET_OUR_STORY);

  return loading || error ? <Spinner /> : (
    <div>
      <section className="ftco-about d-md-flex">
        <div className="one-half img" style={{ backgroundImage: `url(${data.OurStoryQuery.image})` }} />
        <div className="one-half ftco-animate">
          <div className="overlap">
            <div className="heading-section ">
              <span className="subheading">{data.OurStoryQuery[language].title}</span>
              <h2 className="mb-4">{data.OurStoryQuery[language].subTitle}</h2>
            </div>
            <div> 
              <p dangerouslySetInnerHTML={{ __html: data.OurStoryQuery[language].description }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

OurStory.propTypes = {
  API_URL: PropTypes.string.isRequired,
};

export default OurStory;