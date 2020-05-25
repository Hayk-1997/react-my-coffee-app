import React, {useContext, useEffect, useMemo, useState} from 'react';
import { HomeToggleContext } from '../Context/HomeToggleContext';
import Intro from './Containers/Intro/Intro';
import AwesomeSlider from './Containers/AwesomeSlider/AwesomeSlider'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AwesomeSliderCard from './CardMedia/AweseomSliderCard';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    cardContent: {
        background: '#424242',
    }
}));

const Home = (props) => {
    const toggleContext = useContext(HomeToggleContext);
    const [passedContext, setPassedContext] = useState();
    useEffect(() => {
        if (toggleContext) {
            setPassedContext(toggleContext.context);
        }
    }, [toggleContext]);

    const classes = useStyles();
    const renderComponent = () => {
        toggleContext.handleUseHomeToggleContext('AwesomeSlider');
    };

    const gridLayout = () => {
        return (
            <Grid container spacing={3}>
               <AwesomeSliderCard
                   classes={classes}
                   renderComponent={renderComponent}
               />
                <Grid item lg={4} md={6} xs={12}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
            </Grid>
        )
    };
    return (
        <div className={classes.root}>
            {

                passedContext === 'AwesomeSlider' ? <AwesomeSlider {...props} /> :
                    passedContext === 'Intro' ? <Intro {...props} /> :
                        passedContext && passedContext === 'TANDZ' ? <AwesomeSlider {...props} /> :
                            gridLayout()
            }
        </div>
    );
};

export default Home;