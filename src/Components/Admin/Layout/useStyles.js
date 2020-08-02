import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  body : {
    formContent: {
      textAlign: 'center',
    },
    button: {
      margin: theme.spacing(1),
    },
  },
  root: {
    flexGrow: 1,
    marginTop: '25px',
    '& label.Mui-focused': {
      color: theme.palette.borderColor.main,
    },
    '& label': {
      color: theme.palette.borderColor.main,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.borderColor.main,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.borderColor.main,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.borderColor.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.borderColor.main,
      },
      color: theme.palette.primary.main,
      marginBottom: 15,
    },
  },
  validatorForm: {
    width: '100%',
  },
  textArea: {
    width: '100%',
  },
  iconSearchBox: {
    marginTop: 15,
  },
  avatarField: {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
  box: {
    padding:15,
  },
  avatarLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));