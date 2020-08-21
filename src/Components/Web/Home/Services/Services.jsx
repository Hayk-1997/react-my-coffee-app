import React from 'react';

const Services = () => {
  return (
    <section className="ftco-section ftco-services">
      <div className="container">
        <div className="row">
          <div className="col-md-4 ftco-animate">
            <div className="media d-block text-center block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-5">
                <span className="flaticon-choices"/>
              </div>
              <div className="media-body">
                <h3 className="heading">Easy to Order</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ftco-animate">
            <div className="media d-block text-center block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-5">
                <span className="flaticon-delivery-truck"/>
              </div>
              <div className="media-body">
                <h3 className="heading">Fastest Delivery</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ftco-animate">
            <div className="media d-block text-center block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-5">
                <span className="flaticon-coffee-bean"/></div>
              <div className="media-body">
                <h3 className="heading">Quality Coffee</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;