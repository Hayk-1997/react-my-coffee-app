import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#673ab74a',
    display: 'flex',
    marginTop: '25px',
    padding: theme.spacing(3),
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    }
  },
}));