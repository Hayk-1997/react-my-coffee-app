import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  icons: {
    maxWidth: 45,
  },
  searchInput: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'grey',
      },
    },
  }
}));