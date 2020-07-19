import React, { useContext } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import { LanguageContext } from '../Context/LanguageContext';
import Spinner from '../../Spinner';
import './style.css';

const Info = () => {
  const { language } = useContext(LanguageContext);
  const GET_INFO = gql`
    query {
      Info {
        ${language} {
          phone {
            icon {
              item {
                preview_url
              }
            }
            number
            description
          }
          address {
            icon {
              item {
                preview_url
              }
            }
            title
            description
          }
          workingHours {
            icon {
              item {
                preview_url
              }
            }
            title
            description
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_INFO);

  return loading || error ? <Spinner /> :(
    <div className="info">
      <div className="row no-gutters">
        <div className="col-md-4 d-flex ftco-animate">
          <div className="icon">
            <div className="icon-box" style={{backgroundImage: `url(${data.Info[language].phone.icon.item.preview_url})`}} />
          </div>
          <div className="text">
            <h3>{data.Info[language].phone.number}</h3>
            <p>{data.Info[language].phone.description}</p>
          </div>
        </div>
        <div className="col-md-4 d-flex ftco-animate">
          <div className="icon">
            <div className="icon-box" style={{backgroundImage: `url(${data.Info[language].address.icon.item.preview_url})`}} />
          </div>
          <div className="text">
            <h3>{data.Info[language].address.title}</h3>
            <p>{data.Info[language].address.description}</p>
          </div>
        </div>
        <div className="col-md-4 d-flex ftco-animate">
          <div className="icon">
            <div className="icon-box" style={{backgroundImage: `url(${data.Info[language].workingHours.icon.item.preview_url})`}} />
          </div>
          <div className="text">
            <h3>{data.Info[language].workingHours.title}</h3>
            <p>{data.Info[language].workingHours.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;