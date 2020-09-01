import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../../Spinner';
import './style.css';

const OurStory = () => {
  const { language } = useContext(LanguageContext);
  const GET_OUR_STORY = gql`
      query {
          OurStory {
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
        <div className="one-half img" style={{ backgroundImage: `url(${data.OurStory.image})` }} />
        <div className="one-half ftco-animate">
          <div className="overlap">
            <div className="heading-section ">
              <span className="subheading">{data.OurStory[language].title}</span>
              <h2 className="mb-4">{data.OurStory[language].subTitle}</h2>
            </div>
            <div> 
              <p dangerouslySetInnerHTML={{ __html: data.OurStory[language].description }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;