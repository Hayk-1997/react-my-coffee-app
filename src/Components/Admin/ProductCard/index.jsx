import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => (
  {
    root: {
      marginTop: 15,
      marginLeft: 10,
      minHeight: 260,
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
      },
      '& .MuiAutocomplete-tag': {
        backgroundColor: 'rebeccapurple'
      }
    },
    media: {
      height: 140,
    },
  }
));

const ProductCard = (props) => {
  const {
    product,
    API_URL,
    selectProduct,
    openDeleteModal
  } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => selectProduct(product)}>
        <CardMedia
          className={classes.media}
          image={ API_URL + product.thumbnail[0]}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { product.name }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: product.en.description }} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" onClick={() => openDeleteModal(product)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  API_URL: PropTypes.string.isRequired,
  selectProduct: PropTypes.object.isRequired,
  openDeleteModal: PropTypes.func.isRequired,
};

export default ProductCard;