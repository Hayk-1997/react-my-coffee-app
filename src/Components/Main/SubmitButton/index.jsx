import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    }
  },
}));

const SubmitButton = (props) => {
  const { name } = props;

  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Button
        variant="contained"
        size="large"
        type="submit"
        className={classes.button}
        startIcon={<SaveIcon/>}
      >
        {name}
      </Button>
    </Grid>
  );
};

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SubmitButton;
