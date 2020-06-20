import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    cardContent: {
        background: '#424242',
    },
    avatarField: {
        borderBottom: '1px solid #f50057',
    },
    avatarLarge: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));