import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { AllCategoriesRequest, GetCategoryProductsRequest } from '../../../Redux/Admin/Categories/actions';
import Spinner from '../../Spinner';
import ProductCard from '../ProductCard';
import useLayoutStyles from '../Layout/useStyles.js';
import useStyles from './useStyles.js';
import CreateOrEditCategoryDialog from './CreateOrEditCategoryDialog';
import MemoizedCreateOrEditProductDialog from '../Products/CreateOrEditProductDialog';
import DeleteItemModal from '../Main/DeleteItemModal';
import { DeleteProductRequest } from '../../../Redux/Admin/Products/actions';
import usePrevious from '../../../CustomHooks/usePrevious';
import { notify } from '../../../Config/Notify';

const Categories = (props) => {
  const {
    API_URL,
    GetAllCategoriesData,
    AllCategoriesSuccess,
    AllCategoriesData,
    GetCategoryProducts,
    GetCategoryProductsSuccess,
    GetCategoryProductsData,
    DeleteProduct,
    DeleteProductSuccess,
    DeleteProductSuccessMessage,
    DeleteProductError,
    DeleteProductErrorMessage,
    UpdateProductSuccess
  } = props;

  const classes = useStyles();
  const layoutStyles = useLayoutStyles();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState(0);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isDeleteProductModal, setIsDeleteProductModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});

  const PreviousAllCategoriesSuccess = usePrevious(AllCategoriesSuccess);
  const PreviousDeleteProductSuccess = usePrevious(DeleteProductSuccess);
  const PreviousDeleteProductError = usePrevious(DeleteProductError);
  const PreviousUpdateProductSuccess = usePrevious(UpdateProductSuccess);

  useEffect(() => {
    GetAllCategoriesData();
  }, []);

  useEffect(() => {
    if (AllCategoriesSuccess && PreviousAllCategoriesSuccess === false) {
      setLoading(false);
      setCategories(AllCategoriesData);
      AllCategoriesData[0] && GetCategoryProducts({ id: AllCategoriesData[0]._id });
      setValue(value);
      if (UpdateProductSuccess) {
        Object.keys(selectedCategory).length && GetCategoryProducts(selectedCategory);
      }
    }
  }, [AllCategoriesSuccess]);

  useEffect(() => {
    GetCategoryProductsSuccess && setProducts(GetCategoryProductsData);
  }, [GetCategoryProductsSuccess]);

  const handleChange = (event, newValue) => setValue(newValue);

  useEffect(() => {
    if (PreviousUpdateProductSuccess === false && UpdateProductSuccess) {
      GetAllCategoriesData();
    }
  }, [UpdateProductSuccess]);

  useEffect(() => {
    Object.keys(selectedCategory).length && GetCategoryProducts(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (PreviousDeleteProductSuccess === false && DeleteProductSuccess) {
      notify(DeleteProductSuccessMessage, 1000, 'SUCCESS');
    }
    if (DeleteProductError && PreviousDeleteProductError) {
      notify(DeleteProductErrorMessage, 1000, 'ERROR');
    }
  }, [DeleteProductSuccess, DeleteProductError]);

  const addCategory = () => setOpenCategoryModal(true);

  const selectProduct = product => {
    setSelectedProduct(product);
    setOpenProductModal(true);
  };

  const openDeleteModal = (product) => {
    setIsDeleteProductModal(true);
    setSelectedProduct(product);
  };

  const deleteProduct = () => {
    setIsDeleteProductModal(false);
    setProducts((products) => products.filter(product => product._id !== selectedProduct._id));
    setIsDeleteProductModal(false);
    DeleteProduct({ id: selectedProduct._id });
  };

  return !loading ? (
    <Grid className={layoutStyles.body}>
      {
        openCategoryModal && (
          <CreateOrEditCategoryDialog
            handleClose={() => setOpenCategoryModal(false)}
          />
        )
      }
      { openProductModal && <MemoizedCreateOrEditProductDialog
        handleClose={() => setOpenProductModal(false)}
        product={selectedProduct}
        API_URL={API_URL}
      /> }
      { isDeleteProductModal && <DeleteItemModal
        closeModal={() => setIsDeleteProductModal(false)}
        deleteProduct={deleteProduct}
        title="Delete Product"
        description="Delete this product"
      />
      }
      <Grid container spacing={3} display={'flex'} justify='flex-end'>
        <Grid item>
          <Button
            variant="contained"
            size="large"
            type="submit"
            className={classes.button}
            startIcon={<AddCircleIcon/>}
            onClick={addCategory}
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
          onChange={(event, key) => handleChange(event, key)}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {
            categories.length && categories.map((category, index) =>
              <Tab label={category.en.title} key={index} onClick={() => setSelectedCategory({ id: category._id })} />)
          }
        </Tabs>
        <Grid container className={classes.board}>
          {
            products.length && products.map((product, index) => (
              <Grid item lg={4} md={6} xs={12} key={index}>
                <ProductCard
                  product={product}
                  API_URL={API_URL}
                  selectProduct={selectProduct}
                  openDeleteModal={openDeleteModal}
                />
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  ) : <Spinner />;
};

Categories.propTypes = {
  API_URL: PropTypes.string.isRequired,
  GetAllCategoriesData: PropTypes.func.isRequired,
  AllCategoriesSuccess: PropTypes.bool.isRequired,
  AllCategoriesError: PropTypes.bool.isRequired,
  AllCategoriesData: PropTypes.array.isRequired,
  GetCategoryProducts: PropTypes.func.isRequired,
  GetCategoryProductsSuccess: PropTypes.bool.isRequired,
  GetCategoryProductsData: PropTypes.array.isRequired,
  GetCategoryProductsError: PropTypes.bool.isRequired,
  DeleteProduct: PropTypes.func.isRequired,
  DeleteProductSuccess: PropTypes.bool.isRequired,
  DeleteProductSuccessMessage: PropTypes.string.isRequired,
  DeleteProductError: PropTypes.bool.isRequired,
  DeleteProductErrorMessage: PropTypes.string.isRequired,
  UpdateProductSuccess: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  GetAllCategoriesData: state.Categories.GetAllCategoriesData,
  AllCategoriesSuccess: state.Categories.AllCategoriesSuccess,
  AllCategoriesError: state.Categories.AllCategoriesError,
  AllCategoriesData: state.Categories.AllCategoriesData,
  GetCategoryProductsSuccess: state.Categories.GetCategoryProductsSuccess,
  GetCategoryProductsData: state.Categories.GetCategoryProductsData,
  GetCategoryProductsError: state.Categories.GetCategoryProductsError,
  DeleteProductSuccess: state.Products.DeleteProductSuccess,
  DeleteProductSuccessMessage: state.Products.DeleteProductSuccessMessage,
  DeleteProductError: state.Products.DeleteProductError,
  DeleteProductErrorMessage: state.Products.DeleteProductErrorMessage,
  UpdateProductSuccess: state.Products.UpdateProductSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  GetAllCategoriesData: () => dispatch(AllCategoriesRequest()),
  GetCategoryProducts: (data) => dispatch(GetCategoryProductsRequest(data)),
  DeleteProduct: (data) => dispatch(DeleteProductRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
