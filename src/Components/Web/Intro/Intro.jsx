import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import validator from 'validator';
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Intro.css";
import { TimePicker } from 'antd';
import 'antd/dist/antd.css';

class Intro extends Component {

    constructor (props) {
        super(props);
        this.state = {
            date: new Date(),
            time: moment(Date.now()).format("hh:mm"),
            phone: '',
            first_name: '',
            last_name: '',
            message: '',
        };
    }

    componentDidMount () {

    }

    onDateChange = date => this.setState({  date });
    onTimeChange = (time, timeString) => {
        console.log(time, timeString);
        this.setState({time: timeString});
    };
    handleInputChange = (e, key) => {
        const { value } = e.target;
        this.setState({
            [key]: value,
        })
    };
    notify = (message, autoClose) => toast(message,{
        draggable: false,
        autoClose: autoClose,
        type: toast.TYPE.ERROR,
        hideProgressBar: true
    });

    validateForm = () => {
        if (!validator.isLength(this.state.phone, {min:9, max:9})) {
            this.notify('Incorrect Phone Number!', 1500);
        }
        if (validator.isEmpty(this.state.first_name)) {
            this.notify('Please fill the Name!', 1800);
        }
        if (validator.isEmpty(this.state.last_name)) {
            this.notify('Please fill the Last Name!', 2000);
        }
        if (validator.isEmpty(this.state.message)) {
            this.notify('Please fill the Message Field!', 2200);
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.validateForm();
        console.log((this.state.date));
    };

    render () {
        const element = <FontAwesomeIcon icon={faCalendar} />;
        const {
            date, time, phone,
            first_name, last_name, message
        } = this.state;
        return (
            <section className="ftco-intro">
                <ToastContainer />
                <div className="container-wrap">
                    <div className="wrap d-md-flex align-items-xl-end">
                        <div className="info">
                            <div className="row no-gutters">
                                <div className="col-md-4 d-flex ftco-animate">
                                    <div className="icon"><span className="icon-phone"/></div>
                                    <div className="text">
                                        <h3>000 (123) 456 7890</h3>
                                        <p>A small river named Duden flows by their place and supplies.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex ftco-animate">
                                    <div className="icon"><span className="icon-my_location"/></div>
                                    <div className="text">
                                        <h3>198 West 21th Street</h3>
                                        <p> 203 Fake St. Mountain View, San Francisco, California, USA</p>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex ftco-animate">
                                    <div className="icon"><span className="icon-clock-o"/></div>
                                    <div className="text">
                                        <h3>Open Monday-Friday</h3>
                                        <p>8:00am - 9:00pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="book p-4">
                            <h3>Book a Table</h3>
                            <form action="#" className="appointment-form" onSubmit={this.handleSubmit}>
                                <div className="d-md-flex">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                            value={first_name}
                                            onChange={(e)=>this.handleInputChange(e, 'first_name')}
                                        />
                                    </div>
                                    <div className="form-group ml-md-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                            value={last_name}
                                            onChange={(e)=>this.handleInputChange(e, 'last_name')}
                                        />
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-sm-12 col-md-12 col-lg-4">
                                        <div className="form-group datepicker">
                                            <div className="input-wrap">
                                                <DatePicker
                                                    onChange={this.onDateChange}
                                                    value={date}
                                                    minDate={new Date()}
                                                    calendarIcon={element}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-4">
                                        <div className="form-group">
                                            <div className="input-wrap">
                                                <TimePicker
                                                    onChange={this.onTimeChange}
                                                    value={moment(time, 'HH:mm')}
                                                    format={'HH:mm'}
                                                    allowClear={false}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-4">
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Phone"
                                                value={phone}
                                                name="phone"
                                                onChange={(e) => this.handleInputChange(e, 'phone')}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-md-flex">
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            cols="30"
                                            rows="2"
                                            className="form-control"
                                            placeholder="Message"
                                            value={message}
                                            onChange={(e) => this.handleInputChange(e, 'message')}
                                            />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-white py-3 px-4 intro-submit"
                                        >Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Intro;