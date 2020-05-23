import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import Info from "../Info/Info";
import Booking from "../Booking/Booking";

export default () => {
    return (
        <section className="ftco-intro">
            <div className="container-wrap">
                <div className="wrap d-md-flex align-items-xl-end">
                    <Info />
                    <Booking />
                </div>
            </div>
        </section>
    )
};