import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';

const SubmitButton = (props) => {
  const { name } = props;
  return (
    <Grid item xs={3}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
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
