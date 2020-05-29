import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import SearchIconModal from './SearchIconModal';
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
import Grid from '@material-ui/core/Grid';


const Info = (props) => {
    const classes = useStyles();
    const [tab, setTab] = useState(0);
    const fields = { phone: '', description: '' };
    const [form, setForm] = useState({
        en: fields,
        arm: fields
    });
    const [open, setOpen] = useState(false);
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
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                    <div className="row">
                        <Grid container spacing={3}>
                            <Grid item xs>
                               <div className="phone-box">
                                   <h3>Phone Number</h3>
                                   <div className="phone-textField">
                                       <TextField
                                           id="en-phone"
                                           className="en-awesome-phone"
                                           placeholder="Phone"
                                           fullWidth
                                           margin="normal"
                                           multiline={true}
                                           variant="filled"
                                           value={form.en.phone}
                                           onChange={(e) => handleInputChange('en','phone', e.target.value)}
                                       />
                                   </div>
                                   <div className="icon-search-box">
                                       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                                           Open full-screen dialog
                                       </Button>
                                       <SearchIconModal
                                           open={open}
                                           onClose={handleClose}
                                       />
                                   </div>
                               </div>
                            </Grid>
                            <Grid item xs>
                                <div>sdfsdfsdfsdf</div>
                            </Grid>
                            <Grid item xs>
                                <div>sdfsdfsdfsdf</div>
                            </Grid>
                        </Grid>
                    </div>
                </TabPanel>
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