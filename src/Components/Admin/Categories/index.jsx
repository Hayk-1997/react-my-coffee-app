import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { AllCategoriesRequest } from '../../../Redux/Admin/Categories/actions';
import Spinner from '../../Spinner';
import ProductCard from '../ProductCard';
import useLayoutStyles from '../Layout/useStyles.js';
import useStyles from './useStyles.js';

const Categories = (props) => {
  const {
    GetAllCategoriesData,
    AllCategoriesSuccess,
    AllCategoriesData
  } = props;

  const classes = useStyles();
  const layoutStyles = useLayoutStyles();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    GetAllCategoriesData();
  }, []);

  useEffect(() => {
    if (AllCategoriesSuccess) {
      setLoading(false);
      setCategories(AllCategoriesData);
      AllCategoriesData[0].products && setProducts(AllCategoriesData[0].products);
    }
  }, [AllCategoriesSuccess]);

  const handleChange = (event, newValue) => {
    setProducts(categories[newValue].products);
    setValue(newValue);
  };

  return !loading ? (
    <Grid className={layoutStyles.body}>
      <Grid container spacing={3} display={'flex'} justify='flex-end'>
        <Grid item>
          <Button
            variant="contained"
            size="large"
            type="submit"
            className={classes.button}
            startIcon={<AddCircleIcon/>}
          >
            Add Category
          </Button>
        </Grid>
      </Grid>
      <Grid className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {
            categories.length && categories.map((category, index) => <Tab label={category.name} key={index}/>)
          }
        </Tabs>
        <Grid container className={classes.board}>
          {
            products.map((product, index) => (
              <Grid item lg={4} md={6} xs={12} key={index}>
                <ProductCard product={product} />
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  ) : <Spinner />;
};

Categories.propTypes = {
  GetAllCategoriesData: PropTypes.func.isRequired,
  AllCategoriesSuccess: PropTypes.bool.isRequired,
  AllCategoriesError: PropTypes.bool.isRequired,
  AllCategoriesData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  GetAllCategoriesData: state.Categories.GetAllCategoriesData,
  AllCategoriesSuccess: state.Categories.AllCategoriesSuccess,
  AllCategoriesError: state.Categories.AllCategoriesError,
  AllCategoriesData: state.Categories.AllCategoriesData,
});

const mapDispatchToProps = (dispatch) => ({
  GetAllCategoriesData: () => dispatch(AllCategoriesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
