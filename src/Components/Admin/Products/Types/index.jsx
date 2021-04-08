import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  textArea: {
    marginTop: 0,
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.primary,
  },
}));

const Types = (props) => {
  const {
    types,
    handleTypeChange,
  } = props;

  const classes = useStyles();
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

  return (
    <div className={classes.root}>
      {
        types.map((type, index) => (
          <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>{type.label}</Typography>
              <Typography className={classes.heading}>Price: {type.price}</Typography>
              <Typography className={classes.heading}>Discount: {type.discount}</Typography>
            </AccordionSummary>
            <Grid container spacing={3} display={'flex'} justify="center">
              <AccordionDetails>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="Price"
                    margin="normal"
                    className={classes.textArea}
                    value={type.price}
                    variant="outlined"
                    type={'number'}
                    name="price"
                    onChange={(e) => (handleTypeChange(type.label, 'price', e.target.value))}
                  />
                </FormControl>
              </AccordionDetails>
              <AccordionDetails>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="Discount"
                    margin="normal"
                    className={classes.textArea}
                    value={type.discount}
                    variant="outlined"
                    type={'number'}
                    name="discount"
                    onChange={(e) => (handleTypeChange(type.label, 'discount', e.target.value))}
                  />
                </FormControl>
              </AccordionDetails>
            </Grid>
          </Accordion>
        ))
      }
    </div>
  );
};

Types.propTypes = {
  types: PropTypes.array.isRequired,
  handleTypeChange: PropTypes.func.isRequired,
};

export default Types;