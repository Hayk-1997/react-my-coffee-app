import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// @TODO upgrade import Icons
import Icons from '../../../../../../Services/Icons';
import Spinner from '../../../../../Spinner';
import Transition from './Transition';
import useStyles from './useStyles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import IconList from './IconList';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../../../../../Config/Notify';

const SearchIconModal = (props) => {
    const classes = useStyles();
    const { onClose, title, query, language, updateIconField } = props;
    const [searchIcon, setSearchIcon] = useState('');
    const [loading, setLoading] = useState(true);
    const [icons, setIcon] = useState([]);
    const [formatIcons, setFormatIcons] = useState([]);

    useEffect(() => {
        Icons.getIcons(query).then(response => setIcon(response.data.icons));
    }, []);
    useEffect(() => {
        if (icons.length) {
            const filteredIcons = icons.map((icon) => {
                return icon.raster_sizes.map((item) => {
                    return {
                        item: item.formats[0],
                        tags: icon.tags,
                        size: item.size,
                    };
                });
            });
            const formats = filteredIcons.flat();
            setFormatIcons(formats);
            setLoading(false);
        }
    }, [icons]);

    const handleSearchIcons = searchIcon => {
        setSearchIcon(searchIcon);
        setIcon([]);
        let queryParam;
        !searchIcon.length ? queryParam = query : queryParam = searchIcon;
        Icons.getIcons(queryParam).then(response => setIcon(response.data.icons));
    };

    const uploadIcon = (icon, query, language) => {
        setLoading(true);
        Icons.UploadIcon(icon, query, language)
            .then(() => {
                setLoading(false);
                onClose();
                updateIconField(query, language, icon);
                notify('Icon upload Successful', 1000, 'SUCCESS');
            })
            .catch(() => notify('Something went wrong', 1000, 'ERROR'));
    };

    return (
        <>
            <ToastContainer />
            <Dialog className="searchIconDialog" fullScreen open onClose={onClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={title}
                        fullWidth
                        value={searchIcon}
                        className={classes.searchInput}
                        onChange={(e) => handleSearchIcons(e.target.value)}
                    />
                </Toolbar>
            </AppBar>
            {
                loading ?
                    <Spinner /> : (
                    <IconList
                        formatIcons={formatIcons}
                        classes={classes}
                        uploadIcon={uploadIcon}
                        query={query}
                        language={language}
                    />
                )
            }
        </Dialog>
        </>
    );
};

SearchIconModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    updateIconField: PropTypes.func.isRequired,
};

export default SearchIconModal;