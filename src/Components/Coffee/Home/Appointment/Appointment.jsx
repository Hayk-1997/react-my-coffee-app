import React, { Component } from 'react';
import Booking from "../../Booking/Booking";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Appointment = (props) => {
    return (
        <section className="ftco-appointment">
            <div className="overlay"/>
            <div className="container-wrap">
                <div className="row no-gutters d-md-flex align-items-center">
                   <div className="col-md-6 d-flex align-self-stretch">
                        <div style={{ height: '100vh', width: '100%' }}>
                            {/*<GoogleMapReact*/}
                            {/*    bootstrapURLKeys={{ key: 123123123 }}*/}
                            {/*    defaultCenter={props.center}*/}
                            {/*    defaultZoom={props.zoom}*/}
                            {/*>*/}
                            {/*    <AnyReactComponent*/}
                            {/*        lat={59.955413}*/}
                            {/*        lng={30.337844}*/}
                            {/*        text="My Marker"*/}
                            {/*    />*/}
                            {/*</GoogleMapReact>*/}
                        </div>
                    </div>
                   <div className="col-md-6">
                       <Booking />
                   </div>
                </div>
            </div>
        </section>
    )
};
Appointment.defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
};

export default Appointment;