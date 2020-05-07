import React, {useContext, useEffect, useMemo, useState} from 'react';
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
import AwesomeSlider from "./Containers/AwesomeSlider/AwesomeSlider";
import {HomeToggleContext} from "../Context/HomeToggleContext";
import Intro from "./Containers/Intro/Intro";


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
                <Grid item lg={4} md={6} xs={12}>
                    <Paper>
                        <Card className={classes.cardContent} onClick={renderComponent}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.unsplash.com/photo-1558710183-63bf74dae824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                        ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
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