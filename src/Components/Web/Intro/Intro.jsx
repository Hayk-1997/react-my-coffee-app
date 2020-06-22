import React, { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import Info from '../Info';
import Booking from '../Booking/Booking';
import { Localization } from '../Context/LocalizationContext';

const Intro = () => {
    const localization = useContext(Localization);

    return (
        <section className="ftco-intro">
            <div className="container-wrap">
                <div className="wrap d-md-flex align-items-xl-end">
                    <Info
                        localization={localization}
                    />
                    <Booking />
                </div>
            </div>
        </section>
    );
};

export default Intro;