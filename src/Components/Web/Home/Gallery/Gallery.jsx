import React from 'react';
import menu from "../../../../assets/web/images/menu-1.jpg";
import { connect } from "react-redux";
const Gallery = () => {
    return (
        <section className="ftco-menu">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                        <span className="subheading">Discover</span>
                        <h2 className="mb-4">Our Products</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
                    </div>
                </div>
                <div className="row d-md-flex">
                    <div className="col-lg-12 ftco-animate p-md-5">
                        <div className="row">
                            <div className="col-md-12 nav-link-wrap mb-5">
                                <div className="nav ftco-animate nav-pills justify-content-center" id="v-pills-tab"
                                     role="tablist" aria-orientation="vertical">
                                    <a className="nav-link active" id="v-pills-1-tab" data-toggle="pill"
                                       href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Main
                                        Dish</a>

                                    <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2"
                                       role="tab" aria-controls="v-pills-2" aria-selected="false">Drinks</a>

                                    <a className="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3"
                                       role="tab" aria-controls="v-pills-3" aria-selected="false">Desserts</a>
                                </div>
                            </div>
                            <div className="col-md-12 d-flex align-items-center">

                                <div className="tab-content ftco-animate" id="v-pills-tabContent">

                                    <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel"
                                         aria-labelledby="v-pills-1-tab">
                                        <div className="row">
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <a href="#" className="menu-img img mb-4"
                                                       style={{ backgroundImage: `url(${menu})` }} />
                                                    <div className="text">
                                                        <h3><a href="#">Grilled Beef</a></h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia and Consonantia.</p>
                                                        <p className="price"><span>$2.90</span></p>
                                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add
                                                            to cart</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <a href="#" className="menu-img img mb-4"
                                                       style={{ backgroundImage: `url(${menu})` }} />
                                                    <div className="text">
                                                        <h3><a href="#">Grilled Beef</a></h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia and Consonantia.</p>
                                                        <p className="price"><span>$2.90</span></p>
                                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add
                                                            to cart</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <a href="#" className="menu-img img mb-4"
                                                       style={{ backgroundImage: `url(${menu})` }} />
                                                    <div className="text">
                                                        <h3><a href="#">Grilled Beef</a></h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia and Consonantia.</p>
                                                        <p className="price"><span>$2.90</span></p>
                                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add
                                                            to cart</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="v-pills-2" role="tabpanel"
                                         aria-labelledby="v-pills-2-tab">
                                        <div className="row">
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <a href="#" className="menu-img img mb-4"
                                                       style={{ backgroundImage: `url(${menu})` }} />
                                                    <div className="text">
                                                        <h3><a href="#">Lemonade Juice</a></h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia and Consonantia.</p>
                                                        <p className="price"><span>$2.90</span></p>
                                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add
                                                            to cart</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <a href="#" className="menu-img img mb-4"
                                                       style={{ backgroundImage: `url(${menu})` }} />
                                                    <div className="text">
                                                        <h3><a href="#">Pineapple Juice</a></h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia and Consonantia.</p>
                                                        <p className="price"><span>$2.90</span></p>
                                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add
                                                            to cart</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <a href="#" className="menu-img img mb-4"
                                                       style={{ backgroundImage: `url(${menu})` }} />
                                                    <div className="text">
                                                        <h3><a href="#">Soda Drinks</a></h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia and Consonantia.</p>
                                                        <p className="price"><span>$2.90</span></p>
                                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add
                                                            to cart</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="v-pills-3" role="tabpanel"
                                         aria-labelledby="v-pills-3-tab">
                                        <div className="row">
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <a href="#" className="menu-img img mb-4"
                                                       style={{ backgroundImage: `url(${menu})` }} />
                                                    <div className="text">
                                                        <h3><a href="#">Hot Cake Honey</a></h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia and Consonantia.</p>
                                                        <p className="price"><span>$2.90</span></p>
                                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add
                                                            to cart</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <a href="#" className="menu-img img mb-4"
                                                       style={{ backgroundImage: `url(${menu})` }} />
                                                    <div className="text">
                                                        <h3><a href="#">Hot Cake Honey</a></h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia and Consonantia.</p>
                                                        <p className="price"><span>$2.90</span></p>
                                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add
                                                            to cart</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <a href="#" className="menu-img img mb-4"
                                                       style={{ backgroundImage: `url(${menu})` }} />
                                                    <div className="text">
                                                        <h3><a href="#">Hot Cake Honey</a></h3>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries Vokalia and Consonantia.</p>
                                                        <p className="price"><span>$2.90</span></p>
                                                        <p><a href="#" className="btn btn-primary btn-outline-primary">Add
                                                            to cart</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default (Gallery);