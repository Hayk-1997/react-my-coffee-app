import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import useLayoutStyles from '../../Layout/useStyles';
import handleAdminInputChange from '../../../../CustomHooks/handleAdminInputChange';
import { MemoizedCategoriesAutoCompleteField } from '../../Main/MemoizedCategoriesAutoCompleteField';
import TextEditor from '../../../Main/TextEditor';
import FilePondEditor from '../../../Main/FilePondEditor';
import { CreateProductRequest } from '../../../../Redux/Admin/Products/actions';
import SatisfiedRating from '../../../Main/SatisfiedRating';
import TabsAppBar from '../../Main/TabsAppBar';
import ImageCard from './ImageCard';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';

const CreateOrEditProductDialog = (props) => {
  const {
    handleClose,
    CreateProduct,
    product,
    API_URL,
  } = props;

  const classes = useLayoutStyles();
  const ref = useRef();
  const [lang, setLang] = useState('en');
  const [tab, setTab] = useState(0);
  const [image, setImage] = useState([]);
  const fields = { title: '', description: '', };
  const [form, setForm] = useState({
    en: fields,
    am: fields,
    categories: [],
    thumbnail: [],
    price: '',
    discount: '',
    rate: 0,
  });


  useEffect(() => {
    Object.keys(product).length && setForm(product);
  }, [product]);

  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
      thumbnail: image,
    }));
  }, [image]);

  const handleTabChange = useCallback((tab, lang) => {
    setTab(tab);
    setLang(lang);
  }, [lang, tab]);

  const setCategory = category => {
    setForm((prevState) => ({
      ...prevState,
      categories: [...category],
    }));
  };

  const handleInputChange = (key, value) => {
    setForm((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    CreateProduct(form);
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'lg'}
      open={true}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">
        <Grid container spacing={3} display={'flex'} justify='space-between'>
          <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              Add New Product
            </Typography>
          </Grid>
          <Grid item>
            <IconButton color="primary" aria-label="add to shopping cart" onClick={handleClose}>
              <HighlightOffIcon/>
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <TabsAppBar
        handleTabChange={handleTabChange}
        tab={tab}
      />
      <DialogContent>
        <Grid container spacing={3}>
          <ValidatorForm
            ref={ref}
            onSubmit={handleSubmit}
            className={classes.validatorForm}
          >
            <Grid item xs={12}>
              <TextValidator
                label="Title"
                margin="normal"
                className={classes.textArea}
                variant="outlined"
                value={form[lang].title}
                validators={['required']}
                errorMessages={['Field is required']}
                onChange={(e) => handleAdminInputChange(lang,'title', e.target.value, setForm)}
                name="title"
              />
            </Grid>
            <Grid item xs={12}>
              <SatisfiedRating
                title={'Rating'}
                value={Number(form.rate)}
                onChange={(e) => handleInputChange('rate', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                label="Price"
                margin="normal"
                className={classes.textArea}
                variant="outlined"
                value={form.price}
                validators={['required']}
                errorMessages={['Field is required']}
                type={'number'}
                onChange={(e) => handleInputChange('price', e.target.value)}
                name="price"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                label="Discount"
                margin="normal"
                className={classes.textArea}
                variant="outlined"
                type={'number'}
                value={form.discount}
                validators={['required']}
                errorMessages={['Field is required']}
                onChange={(e) => handleInputChange('discount', e.target.value)}
                name="discount"
              />
            </Grid>
            <Grid item xs={12} >
              <TextEditor
                handleInputChange={handleAdminInputChange}
                setForm={setForm}
                lang={lang}
                form={form}
              />
            </Grid>
            <Grid item xs={12}>
              <FilePondEditor
                image={image}
                setImage={setImage}
                allowMultiple={true}
              />
            </Grid >
            <Grid item xs={12}>
              {
                form.thumbnail && (
                  <Grid container className={classes.root} display='flex' justify='space-between'>
                    <ImageCard thumbnails={form.thumbnail} API_URL={API_URL}/>
                  </Grid>
                )
              }
            </Grid>
            <Grid item xs={12} className={classes.categoriesAutoField}>
              <MemoizedCategoriesAutoCompleteField
                setCategory={setCategory}
                categories={form.categories}
              />
            </Grid>
            <DialogActions>
              <Button
                variant="contained"
                size="large"
                type="submit"
                className={classes.button}
              >
                { product ? 'Add Product' : 'Update Product' }
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

CreateOrEditProductDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  CreateProduct: PropTypes.func.isRequired,
  product: PropTypes.object,
  API_URL: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  CreateProductSuccess: state.Products.CreateProductSuccess,
  CreateProductSuccessMessage: state.Products.CreateProductSuccessMessage,
  CreateProductError: state.Products.CreateProductError,
  CreateProductErrorMessage: state.Products.CreateProductErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  CreateProduct: (data) => dispatch(CreateProductRequest(data)),
});

function moviePropsAreEqual(prevMovie, nextMovie) {
  console.log('prevMovie, nextMovie', prevMovie, nextMovie);
  return false;
}
// @TODO check component rendering quantity
const MemoizedCreateOrEditProductDialog = memo(CreateOrEditProductDialog, moviePropsAreEqual);
export default connect(mapStateToProps, mapDispatchToProps)(MemoizedCreateOrEditProductDialog);