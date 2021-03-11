import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '25px',
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& label': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.main,
    },
    '& .MuiFilledInput-root': {
      color: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        // borderColor: theme.palette.primary.main,
      },
      '&:hover fieldset': {
        // borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
        // borderColor: theme.palette.primary.main,
      },
      color: '#fff',
      marginBottom: 15,
    },
  },
  submitButton: {
    marginTop: 15,
  },
  textInput: {
    marginTop: 10,
  },
  phoneNumber: {
    marginTop: 10,
    '& .MuiInputBase-inputAdornedStart': {
      color: theme.palette.primary.main,
      marginTop: 12,
    },
    '&  .MuiInputLabel-filled.MuiInputLabel-shrink': {
      transform: 'translate(12px, 10px) scale(1)'
    },
    '& .MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)': {
      marginTop: 28
    }
  },
}));