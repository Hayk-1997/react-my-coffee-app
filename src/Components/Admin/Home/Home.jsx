import React, { useContext, useEffect, useState } from 'react';
import { HomeToggleContext } from '../Context/HomeToggleContext';
import AwesomeSliderCard from './CardMedia/AweseomSliderCard';
import InfoCard from './CardMedia/Info';
import AwesomeSlider from './Containers/AwesomeSlider/AwesomeSlider';
import Info from './Containers/Info';
import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';


const Home = (props) => {
    const homeToggleContext = useContext(HomeToggleContext);
    const [passedContext, setPassedContext] = useState();
    useEffect(() => {
        if (homeToggleContext) {
            setPassedContext(homeToggleContext.context);
        }
    }, [homeToggleContext]);

    const classes = useStyles();
    const renderComponent = (component) => {
        homeToggleContext.handleUseHomeToggleContext(component);
    };

    const gridLayout = () => {
        return (
            <Grid container spacing={3}>
               <AwesomeSliderCard
                   classes={classes}
                   renderComponent={renderComponent}
               />
                <InfoCard
                    classes={classes}
                    renderComponent={renderComponent}
                />
            </Grid>
        )
    };
    return (
        <div className={classes.root}>
            {

                passedContext === 'AwesomeSlider' ? <AwesomeSlider {...props} /> :
                    passedContext === 'Info' ? <Info {...props} /> :
                        gridLayout()
            }
        </div>
    );
};

export default Home;