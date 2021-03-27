import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../../Spinner';
import useStyles from './useStyles';

const Services = () => {
  const { language } = useContext(LanguageContext);
  const GET_OUR_HISTORY = gql`
    query {
        ServiceQuery {
            ${language} {
                box1 {
                    title
                    description
                    icon {
                        item {
                            preview_url
                        }
                    }
                }
                box2 {
                    title
                    description
                    icon {
                        item {
                            preview_url
                        }
                    }
                }
                box3 {
                    title
                    description
                    icon {
                        item {
                            preview_url
                        }
                    }
                }
            }
        }
    }
  `;
  const { loading, error, data } = useQuery(GET_OUR_HISTORY);
  const classes = useStyles();

  return loading || error ? <Spinner /> : (
    <section className="ftco-section ftco-services">
      <div className="container">
        <div className="row">
          <div className="col-md-4 ftco-animate">
            <div className="media d-block text-center block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-5">
                <div className={classes.iconBox} style={{ backgroundImage: `url(${data.ServiceQuery[language].box1.icon.item.preview_url})` }} />
              </div>
              <div className="media-body">
                <h3 className="heading">{data.ServiceQuery[language].box1.title}</h3>
                <p>{data.ServiceQuery[language].box1.description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ftco-animate">
            <div className="media d-block text-center block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-5">
                <div className={classes.iconBox} style={{ backgroundImage: `url(${data.ServiceQuery[language].box2.icon.item.preview_url})` }} />
              </div>
              <div className="media-body">
                <h3 className="heading">{data.ServiceQuery[language].box2.title}</h3>
                <p>{data.ServiceQuery[language].box2.description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ftco-animate">
            <div className="media d-block text-center block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-5">
                <div className={classes.iconBox} style={{ backgroundImage: `url(${data.ServiceQuery[language].box3.icon.item.preview_url})` }} />
              </div>
              <div className="media-body">
                <h3 className="heading">{data.ServiceQuery[language].box3.title}</h3>
                <p>{data.ServiceQuery[language].box3.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;