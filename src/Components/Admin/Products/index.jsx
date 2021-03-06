import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../ProductCard';
import { AllProductsRequest, DeleteProductRequest } from '../../../Redux/Admin/Products/actions';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useLayoutStyles from '../Layout/useStyles.js';
import MemoizedCreateOrEditProductDialog from './CreateOrEditProductDialog';
import Spinner from '../../Spinner';
import useStyles from './useStyles';
import usePrevious from '../../../CustomHooks/usePrevious';
import { notify } from '../../../Config/Notify';
import { ToastContainer } from 'react-toastify';
import DeleteItemModal from '../Main/DeleteItemModal';

const ProductsList = (props) => {
  const {
    GetAllProductsData,
    AllProductsSuccess,
    AllProductsData,
    API_URL,
    CreateProductSuccess,
    CreateProductSuccessMessage,
    CreateProductError,
    CreateProductErrorMessage,
    DeleteProduct,
    DeleteProductSuccess,
    DeleteProductSuccessMessage,
    DeleteProductError,
    DeleteProductErrorMessage,
  } = props;

  const classes = useStyles();
  const layoutStyles = useLayoutStyles();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isDeleteProductModal, setIsDeleteProductModal] = useState(false);

  const PreviousCreateProductSuccess = usePrevious(CreateProductSuccess);
  const PreviousCreateCreateProductError = usePrevious(CreateProductError);
  const PreviousDeleteProductSuccess = usePrevious(DeleteProductSuccess);
  const PreviousDeleteProductError = usePrevious(DeleteProductError);

  useEffect(() => {
    GetAllProductsData();
  }, []);

  useEffect(() => {
    if (AllProductsSuccess) {
      setProducts(AllProductsData);
      setLoading(false);
    }
  }, [AllProductsSuccess]);

  useEffect(() => {
    if (CreateProductSuccess && PreviousCreateProductSuccess === false) {
      notify(CreateProductSuccessMessage, 1000, 'SUCCESS');
      setOpen(false);
      GetAllProductsData();
    }
    if (PreviousCreateCreateProductError === false && CreateProductError) {
      notify(CreateProductErrorMessage, 1000, 'ERROR');
    }
  }, [CreateProductSuccess, CreateProductError]);

  useEffect(() => {
    if (PreviousDeleteProductSuccess === false && DeleteProductSuccess) {
      notify(DeleteProductSuccessMessage, 1000, 'SUCCESS');
    }
    if (DeleteProductError && PreviousDeleteProductError) {
      notify(DeleteProductErrorMessage, 1000, 'ERROR');
    }
  }, [DeleteProductSuccess, DeleteProductError]);

  const selectProduct = product => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const addProduct = () => {
    setOpen(true);
    setSelectedProduct({});
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

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct({});
  };

  return !loading ? (
    <Grid className={layoutStyles.body}>
      <ToastContainer />
      { isDeleteProductModal && <DeleteItemModal
        closeModal={() => setIsDeleteProductModal(false)}
        deleteProduct={deleteProduct}
        title="Delete Product"
        description="Delete this product"
      /> }
      { open && <MemoizedCreateOrEditProductDialog
        handleClose={handleClose}
        product={selectedProduct}
        API_URL={API_URL}
      /> }
      <Grid container spacing={3} display={'flex'} justify='flex-end'>
        <Grid item>
          <Button
            variant="contained"
            size="large"
            type="submit"
            className={classes.button}
            startIcon={<AddCircleIcon/>}
            onClick={addProduct}
          >
            Add Product
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.root}>
        {
          products.map((product, index) => (
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
  ): <Spinner />;
};

ProductsList.propTypes = {
  GetAllProductsData: PropTypes.func.isRequired,
  AllProductsSuccess: PropTypes.bool.isRequired,
  AllProductsData: PropTypes.array.isRequired,
  API_URL: PropTypes.string.isRequired,
  CreateProductSuccess: PropTypes.bool.isRequired,
  CreateProductSuccessMessage: PropTypes.string.isRequired,
  CreateProductError: PropTypes.bool.isRequired,
  CreateProductErrorMessage: PropTypes.string.isRequired,
  DeleteProduct: PropTypes.func.isRequired,
  DeleteProductSuccess: PropTypes.bool.isRequired,
  DeleteProductSuccessMessage: PropTypes.string.isRequired,
  DeleteProductError: PropTypes.bool.isRequired,
  DeleteProductErrorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  GetAllProductsData: state.Products.GetAllProductsData,
  AllProductsSuccess: state.Products.AllProductsSuccess,
  AllProductsError: state.Products.AllProductsError,
  AllProductsData: state.Products.AllProductsData,
  CreateProductSuccess: state.Products.CreateProductSuccess,
  CreateProductSuccessMessage: state.Products.CreateProductSuccessMessage,
  CreateProductError: state.Products.CreateProductError,
  CreateProductErrorMessage: state.Products.CreateProductErrorMessage,
  DeleteProductSuccess: state.Products.DeleteProductSuccess,
  DeleteProductSuccessMessage: state.Products.DeleteProductSuccessMessage,
  DeleteProductError: state.Products.DeleteProductError,
  DeleteProductErrorMessage: state.Products.DeleteProductErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  GetAllProductsData: () => dispatch(AllProductsRequest()),
  DeleteProduct: (data) => dispatch(DeleteProductRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);