import React from 'react';
import menu from "../../../../assets/web/images/menu-1.jpg";

const RecentBlog = () => {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                        <h2 className="mb-4">Recent from blog</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry align-self-stretch">
                            <a href="blog-single.html" className="block-20"
                               style={{ backgroundImage: `url(${menu})` }} >
                            </a>
                            <div className="text py-4 d-block">
                                <div className="meta">
                                    <div><a href="#">Sept 10, 2018</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"/> 3</a>
                                    </div>
                                </div>
                                <h3 className="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry align-self-stretch">
                            <a href="blog-single.html" className="block-20"
                               style={{ backgroundImage: `url(${menu})` }} >
                            </a>
                            <div className="text py-4 d-block">
                                <div className="meta">
                                    <div><a href="#">Sept 10, 2018</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"/> 3</a>
                                    </div>
                                </div>
                                <h3 className="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry align-self-stretch">
                            <a href="blog-single.html" className="block-20"
                               style={{ backgroundImage: `url(${menu})` }} >
                            </a>
                            <div className="text py-4 d-block">
                                <div className="meta">
                                    <div><a href="#">Sept 10, 2018</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"/> 3</a>
                                    </div>
                                </div>
                                <h3 className="heading mt-2"><a href="#">The Delicious Pizza</a></h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default RecentBlog;