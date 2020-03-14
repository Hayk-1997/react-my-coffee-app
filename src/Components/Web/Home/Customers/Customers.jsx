import React from 'react';
import {connect} from "react-redux";
import menu from "../../../../assets/web/images/menu-1.jpg";

const Customers = () => {
    return (
        <section className="ftco-section img" id="ftco-testimony" style={{ backgroundImage: `url(${menu})` }}
                 data-stellar-background-ratio="0.5">
            <div className="overlay"/>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                        <span className="subheading">Testimony</span>
                        <h2 className="mb-4">Customers Says</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
                    </div>
                </div>
            </div>
            <div className="container-wrap">
                <div className="row d-flex no-gutters">
                    <div className="col-lg align-self-sm-end ftco-animate">
                        <div className="testimony">
                            <blockquote>
                                <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic life One day however a small.&rdquo;</p>
                            </blockquote>
                            <div className="author d-flex mt-4">
                                <div className="image mr-3 align-self-center">
                                    <img src={menu} alt="" />
                                </div>
                                <div className="name align-self-center">Louise Kelly <span className="position">Illustrator Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg align-self-sm-end">
                        <div className="testimony overlay">
                            <blockquote>
                                <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic life One day however a small line of blind text by the name of
                                    Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                            </blockquote>
                            <div className="author d-flex mt-4">
                                <div className="image mr-3 align-self-center">
                                    <img src={menu} alt="" />
                                </div>
                                <div className="name align-self-center">Louise Kelly <span className="position">Illustrator Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg align-self-sm-end ftco-animate">
                        <div className="testimony">
                            <blockquote>
                                <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic life One day however a small line of blind text by the
                                    name. &rdquo;</p>
                            </blockquote>
                            <div className="author d-flex mt-4">
                                <div className="image mr-3 align-self-center">
                                    <img src={menu} alt="" />
                                </div>
                                <div className="name align-self-center">Louise Kelly <span className="position">Illustrator Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg align-self-sm-end">
                        <div className="testimony overlay">
                            <blockquote>
                                <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic life One day however.&rdquo;</p>
                            </blockquote>
                            <div className="author d-flex mt-4">
                                <div className="image mr-3 align-self-center">
                                    <img src={menu} alt="" />
                                </div>
                                <div className="name align-self-center">Louise Kelly <span className="position">Illustrator Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg align-self-sm-end ftco-animate">
                        <div className="testimony">
                            <blockquote>
                                <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic life One day however a small line of blind text by the
                                    name. &rdquo;</p>
                            </blockquote>
                            <div className="author d-flex mt-4">
                                <div className="image mr-3 align-self-center">
                                    <img src={menu} alt="" />
                                </div>
                                <div className="name align-self-center">Louise Kelly <span className="position">Illustrator Designer</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Customers);