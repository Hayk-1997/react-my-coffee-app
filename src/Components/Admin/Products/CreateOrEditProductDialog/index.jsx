import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { notify } from '../../../../Config/Notify';
import { ToastContainer } from 'react-toastify';
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
import { CreateProductRequest, UpdateProductRequest } from '../../../../Redux/Admin/Products/actions';
import SatisfiedRating from '../../../Main/SatisfiedRating';
import TabsAppBar from '../../Main/TabsAppBar';
import ImageCard from './ImageCard';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import usePrevious from '../../../../CustomHooks/usePrevious';
import Types from '../Types';
import CreateTypesDialog from '../CreateTypeDialog';

const CreateOrEditProductDialog = (props) => {
  const {
    handleClose,
    CreateProduct,
    product,
    API_URL,
    UpdateProduct,
    UpdateProductSuccess,
    UpdateProductSuccessMessage,
    UpdateProductError,
    UpdateProductErrorMessage
  } = props;

  const classes = useLayoutStyles();
  const ref = useRef();
  const [lang, setLang] = useState('en');
  const [tab, setTab] = useState(0);
  const [image, setImage] = useState([]);
  const [openTypesDialog, setOpenTypesDialog] = useState(false);
  const fields = { title: '', description: '', types: [] };

  const [form, setForm] = useState({
    en: { ...fields },
    am: { ...fields },
    categories: [],
    price: '',
    discount: '',
    rate: 0,
    thumbnail: [],
    slug: '',
  });

  const [removedThumbnails, setRemovedThumbnails] = useState([]);
  const PreviousUpdateProductSuccess = usePrevious(UpdateProductSuccess);
  const PreviousUpdateProductError = usePrevious(UpdateProductError);

  useEffect(() => {
    Object.keys(product).length && setForm(product);
  }, [product]);

  useEffect(() => {
    if (PreviousUpdateProductSuccess === false && UpdateProductSuccess) {
      notify(UpdateProductSuccessMessage, 1000, 'SUCCESS');
    } else if (PreviousUpdateProductError === false && UpdateProductError) {
      notify(UpdateProductErrorMessage, 1000, 'ERROR');
    }
  }, [UpdateProductSuccess, UpdateProductError]);

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

  const removeThumbnail = (thumbnail) => {
    const removedElement = form.thumbnail.indexOf(thumbnail);
    setRemovedThumbnails(prevState => ([
      ...prevState,
      [thumbnail],
    ]));
    form.thumbnail.splice(removedElement, 1);
    setForm((prevState) => ({
      ...prevState,
      thumbnail: form.thumbnail,
    }));
  };

  const handleTypeChange = (label, key, value) => {
    const typesCopy = Array.from(form[lang].types);
    typesCopy.filter(type => type.label === label ? type[key] = value : null);
    setForm((prevState) => ({
      ...prevState,
      [lang]: {
        ...prevState[lang],
        types: typesCopy
      }
    }));
  };

  const handleSaveTypes = (types) => {
    setForm((prevState) => ({
      ...prevState,
      [lang]: {
        ...prevState[lang],
        types: types
      }
    }));
    setOpenTypesDialog(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { form, images: image, removedThumbnails, id: product._id };
    Object.keys(product).length ? UpdateProduct(data) : CreateProduct(data);
  };

  return (
    <>
      <ToastContainer />
      { 
        openTypesDialog && (
          <CreateTypesDialog
            handleClose={() => setOpenTypesDialog(false)}
            handleSaveTypes={handleSaveTypes}
            createdTypes={form[lang].types}
          />
        )
      }
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
                { product ? 'Update Product' : 'Add New Product'}
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
                <TextValidator
                  label="Slug"
                  margin="normal"
                  className={classes.textArea}
                  variant="outlined"
                  value={form.slug}
                  validators={['required']}
                  errorMessages={['Field is required']}
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  name="slug"
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
              </Grid>
              <Grid item xs={12}>
                {
                  form.thumbnail && (
                    <Grid container className={classes.root} display='flex'>
                      <ImageCard thumbnails={form.thumbnail} API_URL={API_URL} removeThumbnail={removeThumbnail} />
                    </Grid>
                  )
                }
              </Grid>
              <Grid item xs={12}>
                <Types
                  types={form[lang].types}
                  handleTypeChange={handleTypeChange}
                />
                <Button
                  variant="contained"
                  size="large"
                  type="button"
                  className={classes.button}
                  onClick={() => setOpenTypesDialog(true)}
                >
                  Create Types
                </Button>
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
                  { Object.keys(product).length ? 'Update Product' : 'Add Product' }
                </Button>
              </DialogActions>
            </ValidatorForm>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

CreateOrEditProductDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  CreateProduct: PropTypes.func.isRequired,
  product: PropTypes.object,
  API_URL: PropTypes.string.isRequired,
  UpdateProduct: PropTypes.func.isRequired,
  UpdateProductSuccess: PropTypes.bool.isRequired,
  UpdateProductSuccessMessage: PropTypes.string.isRequired,
  UpdateProductError: PropTypes.bool.isRequired,
  UpdateProductErrorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  CreateProductSuccess: state.Products.CreateProductSuccess,
  CreateProductSuccessMessage: state.Products.CreateProductSuccessMessage,
  CreateProductError: state.Products.CreateProductError,
  CreateProductErrorMessage: state.Products.CreateProductErrorMessage,
  UpdateProductSuccess: state.Products.UpdateProductSuccess,
  UpdateProductSuccessMessage: state.Products.UpdateProductSuccessMessage,
  UpdateProductError: state.Products.UpdateProductError,
  UpdateProductErrorMessage: state.Products.UpdateProductErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  CreateProduct: (data) => dispatch(CreateProductRequest(data)),
  UpdateProduct: (data) => dispatch(UpdateProductRequest(data)),
});

function moviePropsAreEqual(prevMovie, nextMovie) {
  console.log('prevMovie, nextMovie', prevMovie, nextMovie);
  return false;
}
// @TODO check component rendering quantity
const MemoizedCreateOrEditProductDialog = memo(CreateOrEditProductDialog, moviePropsAreEqual);
export default connect(mapStateToProps, mapDispatchToProps)(MemoizedCreateOrEditProductDialog);