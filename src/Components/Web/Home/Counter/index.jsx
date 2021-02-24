import React from 'react';
import img from '../../../../assets/web/images/bg_2.jpg';
import CountUp from 'react-countup';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../../Spinner';

const Counter = () => {

  const GET_STATIC_COUNTER = gql`
    query {
      StaticCounterQuery {
        coffeeBranches
        awards
        customers
        staffs
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_STATIC_COUNTER);

  return loading || error ? <Spinner/> : (
    <section className="ftco-counter ftco-bg-dark img" id="section-counter"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="overlay"/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div
                className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <div className="icon"><span className="flaticon-coffee-cup"/></div>
                    <strong className="number">
                      <CountUp delay={5} end={parseInt(data.StaticCounterQuery.coffeeBranches)}/>
                    </strong>
                    <span>Coffee Branches</span>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <div className="icon"><span className="flaticon-coffee-cup"/></div>
                    <strong className="number">
                      <CountUp delay={5} end={parseInt(data.StaticCounterQuery.awards)}/>
                    </strong>
                    <span>Number of Awards</span>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <div className="icon"><span className="flaticon-coffee-cup"/></div>
                    <strong className="number">
                      <CountUp delay={5} end={parseInt(data.StaticCounterQuery.customers)}/>
                    </strong>
                    <span>Happy Customer</span>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <div className="icon"><span className="flaticon-coffee-cup"/></div>
                    <strong className="number">
                      <CountUp delay={5} end={parseInt(data.StaticCounterQuery.staffs)}/>
                    </strong>
                    <span>Staff</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;