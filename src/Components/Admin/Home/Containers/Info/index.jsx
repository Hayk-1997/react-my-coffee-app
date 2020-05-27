import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import './Info.css';
import useStyles from '../../useStyles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../../TypoGraphy';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const Info = (props) => {
    const classes = useStyles();
    const [tab, setTab] = useState(0);
    const fields = { title: '', description: '' };
    const [form, setForm] = useState({
        en: fields,
        arm: fields
    });

    const handleInputChange = (name, key, value) => {
        setForm((prevState) => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                [key]: value
            }
        }));
    };
    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };
    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };
    const handleSubmit = e => {
        e.preventDefault();

    };
    return(
        <div>
            <ToastContainer />
            <form noValidate autoComplete="off" className="Info" onSubmit={handleSubmit}>
                <AppBar position="static">
                    <Tabs value={tab} onChange={handleTabChange} aria-label="simple tabs example">
                        <Tab label="English Tab" {...a11yProps(0)} />
                        <Tab label="Armenian Tab" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={tab} index={0}>
                    <div className="title-field">
                        <TextField
                            id="en-title"
                            className="en-awesome-title"
                            placeholder="Title"
                            fullWidth
                            margin="normal"
                            multiline={true}
                            variant="filled"
                            value={form.en.title}
                            onChange={(e) => handleInputChange('en','title', e.target.value)}
                        />
                    </div>
                    <div className="description-field">
                      fgjhgjghjghjghj
                    </div>
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    <div className="title-field">
                        <TextField
                            id="arm-title"
                            className="arm-awesome-title"
                            placeholder="Title"
                            fullWidth
                            margin="normal"
                            multiline={true}
                            variant="filled"
                            value={form.arm.title}
                            onChange={(e) => handleInputChange('arm', 'title', e.target.value)}
                        />
                    </div>
                    <div className="description-field">
                      ghjghjghj
                    </div>
                </TabPanel>
                <div className="upload-field">
                 ghkhjkhjk
                </div>
                <div className="submit-box">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        type="submit"
                        startIcon={<SaveIcon/>}
                    >
                        Update
                    </Button>
                </div>
            </form>
        </div>
    )
};

Info.propTypes = {

};


export default Info;