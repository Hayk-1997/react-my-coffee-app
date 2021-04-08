import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textArea: {
    marginTop: 0,
    width: '100%',
  },
  content: {
    overflow: 'hidden',
  }
}));

const CreateTypesDialog = (props) => {
  const {
    handleClose,
    handleSaveTypes,
    createdTypes
  } = props;

  const [types, setTypes] = useState([{ label: '', price: '', discount: '' }]);
  const classes = useStyles();

  useEffect(() => {
    createdTypes.length && setTypes(createdTypes);
  }, [createdTypes]);

  const addType = () => {
    setTypes((prevState) => [
      ...prevState,
      { label: '', price: '', discount: '' }
    ]);
  };

  const deleteType = (index) => {
    const typesCopy = [...types];
    typesCopy.splice(index, 1);
    setTypes(typesCopy);
  };

  const handleInputChange = (key, value, index) => {
    const typesCopy = [...types];
    typesCopy[index][key] = value;
    setTypes(typesCopy);
  };

  return (
    <div>
      <Dialog
        open={true}
        fullWidth={true}
        maxWidth={'md'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Use Google\'s location service?'}</DialogTitle>
        <DialogContent className={classes.content}>
          {
            types.map((type, index) => (
              <Grid key={index} container spacing={3} display={'flex'} justify="center">
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Type"
                    margin="normal"
                    className={classes.textArea}
                    variant="outlined"
                    name="label"
                    value={type.label}
                    onChange={(e) => handleInputChange(e.target.name, e.target.value, index)}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Price"
                    margin="normal"
                    className={classes.textArea}
                    variant="outlined"
                    type={'number'}
                    value={type.price}
                    name="price"
                    onChange={(e) => handleInputChange(e.target.name, e.target.value, index)}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Discount"
                    margin="normal"
                    className={classes.textArea}
                    variant="outlined"
                    type={'number'}
                    value={type.discount}
                    name="discount"
                    onChange={(e) => handleInputChange(e.target.name, e.target.value, index)}
                  />
                </Grid>
                <Grid item xs={12} md={1}>
                  {
                    types.length - 1 === index ? (
                      <Fab color="primary" aria-label="add" onClick={addType}>
                        <AddIcon />
                      </Fab>
                    ) : (
                      <Fab color="primary" aria-label="add" onClick={() => deleteType(index)}>
                        <DeleteForeverIcon />
                      </Fab>
                    )
                  }
                </Grid>
              </Grid>
            ))
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={() => handleSaveTypes(types)} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

CreateTypesDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSaveTypes: PropTypes.func.isRequired,
  createdTypes: PropTypes.array,
};

export default CreateTypesDialog;
