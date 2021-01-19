import React from 'react';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  thumbnailBox: {
    margin: 5,
  },
  media: {
    height: 140,
  },
});

const ImageCard = (props) => {

  const {
    thumbnails,
    API_URL,
    removeThumbnail,
  } = props;

  const classes = useStyles();

  return (
    <>
      {
        thumbnails.map((thumbnail, index) => (
          <Grid item md={3} xs={12} key={index} className={classes.thumbnailBox}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={ API_URL + thumbnail}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => removeThumbnail(thumbnail)}>
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </>
  );
};

ImageCard.propTypes = {
  API_URL: PropTypes.string.isRequired,
  thumbnails: PropTypes.array.isRequired,
  removeThumbnail: PropTypes.func.isRequired,
};

export default ImageCard;