import React, { Component } from 'react';
import menu from '../../../assets/web/images/menu-1.jpg';
class OurMenu extends Component {
    render () {
        return (
            <section className="ftco-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 pr-md-5">
                            <div className="heading-section text-md-right ftco-animate">
                                <span className="subheading">Discover</span>
                                <h2 className="mb-4">Our Menu</h2>
                                <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated they live in
                                    Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p><a href="#" className="btn btn-primary btn-outline-primary px-4 py-3">View Full
                                    Menu</a></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="menu-entry">
                                        <a
                                            href="#"
                                            className="img"
                                            style={{ backgroundImage: `url(${menu})` }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="menu-entry mt-lg-4">
                                        <a
                                            href="#"
                                            className="img"
                                            style={{ backgroundImage: `url(${menu})` }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="menu-entry">
                                        <a
                                            href="#"
                                            className="img"
                                            style={{ backgroundImage: `url(${menu})` }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="menu-entry mt-lg-4">
                                        <a
                                            href="#"
                                            className="img"
                                            style={{ backgroundImage: `url(${menu})` }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default OurMenu;