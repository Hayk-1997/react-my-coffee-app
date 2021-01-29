import React, { useRef, useState, memo, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import TabsAppBar from '../../Main/TabsAppBar';
import DialogContent from '@material-ui/core/DialogContent';
import handleAdminInputChange from '../../../../CustomHooks/handleAdminInputChange';
import TextEditor from '../../../Main/TextEditor';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import useLayoutStyles from '../../Layout/useStyles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {CreateCategoryRequest} from '../../../../Redux/Admin/Categories/actions';
import {CreateProductRequest} from '../../../../Redux/Admin/Products/actions';

const CreateOrEditCategoryDialog = memo((props) => {

  const {
    handleClose,
    CreateCategory,
    CreateProduct
  } = props;

  const classes = useLayoutStyles();
  const ref = useRef();
  const [tab, setTab] = useState(0);
  const [lang, setLang] = useState('en');
  const fields = { title: '', description: '', };
  const [form, setForm] = useState({
    en: fields,
    am: fields,
  });



  const handleTabChange = useCallback((tab, lang) => {
    setTab(tab);
    setLang(lang);
  }, [lang, tab]);

  const handleSubmit = () => {
    CreateCategory({ form });
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
              {/*{ category ? 'Update Product' : 'Add New Category'}*/}
              Add New Category
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
              <TextEditor
                handleInputChange={handleAdminInputChange}
                setForm={setForm}
                lang={lang}
                form={form}
              />
            </Grid>
            <DialogActions>
              <Button
                variant="contained"
                size="large"
                type="submit"
                className={classes.button}
              >
                {/*{ Object.keys(product).length ? 'Update Product' : 'Add Product' }*/}
                Add Category
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Grid>
      </DialogContent>
    </Dialog>
  );
});


CreateOrEditCategoryDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  CreateCategory: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  CreateCategorySuccess: state.Categories.CreateCategorySuccess,
  CreateCategorySuccessMessage: state.Categories.CreateCategorySuccessMessage,
  CreateCategoryError: state.Categories.CreateCategoryError,
  CreateCategoryErrorMessage: state.Categories.CreateCategoryErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  CreateCategory: (data) => dispatch(CreateCategoryRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrEditCategoryDialog);