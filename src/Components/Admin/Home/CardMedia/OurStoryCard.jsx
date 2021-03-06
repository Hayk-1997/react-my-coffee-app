import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MUILink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

const OurStory = (props) => {
  const { classes } = props;

  return (
    <Grid item lg={4} md={6} xs={12}>
      <MUILink
        component={Link}
        to={'/admin/home/our-story'}
      >
        <Paper>
          <Card className={classes.cardContent}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1558710183-63bf74dae824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Our Story
                </Typography>
                <Typography variant="body2" component="p">
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      </MUILink>
    </Grid>
  );
};

OurStory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default OurStory;