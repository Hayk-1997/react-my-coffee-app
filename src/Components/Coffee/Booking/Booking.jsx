import React from "react";
import DatePicker from "react-date-picker";
import {TimePicker} from "antd";
import moment from "moment";
import { ToastContainer, toast } from 'react-toastify';
import validator from "validator";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import "./Booking.css";

class Booking extends React.Component {

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

    onDateChange = date => this.setState({  date });
    onTimeChange = (time, timeString) => {
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
        const { phone, first_name, last_name, message} = this.state;
        if (!validator.isLength(phone, {min:9, max:9})) {
            this.notify('Incorrect Phone Number!', 1500);
        }
        if (validator.isEmpty(first_name)) {
            this.notify('Please fill the Name!', 1800);
        }
        if (validator.isEmpty(last_name)) {
            this.notify('Please fill the Last Name!', 2000);
        }
        if (validator.isEmpty(message)) {
            this.notify('Please fill the Message Field!', 2200);
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.validateForm();
    };
    render () {
        const element = <FontAwesomeIcon icon={faCalendar} />;
        const {
            date, time, phone,
            first_name, last_name, message
        } = this.state;
        return (
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
                                className="btn btn-white py-3 px-4 intro-submit">
                                Appointment
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

export default Booking;