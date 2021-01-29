import React, { memo, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import usePrevious from '../../../../CustomHooks/usePrevious';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((
  {
    root: {
      '& .MuiAutocomplete-tag': {
        backgroundColor: 'rebeccapurple'
      }
    },
  }
));

const CategoriesAutoCompleteField = ({ setCategory, categories }) => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { AllCategoriesSuccess, AllCategoriesData } = useSelector(state => state.Categories);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(open && AllCategoriesSuccess);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const previousAllCategoriesSuccess = usePrevious(AllCategoriesSuccess);

  useEffect(() => {
    categories.length && setSelectedCategories(categories);
  }, []);

  useEffect(() => {
    if (previousAllCategoriesSuccess === false && !AllCategoriesSuccess) {
      dispatch({ type: 'ALL_CATEGORIES_REQUEST' });
      setLoading(true);
    }
  }, [open]);

  useEffect(() => {
    setLoading(false);
  }, [AllCategoriesSuccess]);

  useEffect(() => {
    selectedCategories.length && setCategory(selectedCategories);
  }, [selectedCategories]);

  return (
    <Autocomplete
      className={classes.root}
      id="asynchronous-demo"
      style={{ width: '100%' }}
      multiple
      open={open}
      value={selectedCategories}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      getOptionLabel={(option) => option.en.title}
      onChange={(event, newValue) => {
        setSelectedCategories([...newValue]);
      }}
      options={AllCategoriesData}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Categories"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading && <CircularProgress color="inherit" size={20} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

CategoriesAutoCompleteField.propTypes = {
  setCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};


export const MemoizedCategoriesAutoCompleteField = memo(CategoriesAutoCompleteField);