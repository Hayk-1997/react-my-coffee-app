import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// @TODO upgrade import Icons
import Icons  from '../../../../../../Services/Icons';
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

const SearchIconModal = (props) => {
    const classes = useStyles();
    const { onClose, title, query } = props;
    const [searchIcon, setSearchIcon] = useState('');
    const [selectedIcon, setSelectedIcon] = useState({});
    const [icons, setIcon] = useState([]);
    const [formatIcons, setFormatIcons] = useState([]);

    useEffect(() => {
        console.log('selectedIcon', selectedIcon);
    }, [selectedIcon]);

    useEffect(() => {
        Icons.getIcons(query).then(response => setIcon(response.data.icons));
    }, []);
    useEffect(() => {
        const filteredIcons = icons.map((icon) => {
            return icon.raster_sizes.map((item) => {
                return {
                    item: item.formats[0],
                    tags: icon.tags,
                    size: item.size,
                };
            })
        });
        const formats = filteredIcons.flat();
        setFormatIcons(formats);
    }, [icons]);

    const handleSearchIcons = searchIcon => {
        setSearchIcon(searchIcon);
        setIcon([]);
        let queryParam;
        !searchIcon.length ? queryParam = query : queryParam = searchIcon;
        Icons.getIcons(queryParam).then(response => setIcon(response.data.icons));
    };

    const handleSelectIcon = icon => {
        setSelectedIcon(icon);
        Icons.UploadIcon(icon).then(response => console.log(response));
    };

    return (
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
                        onChange={(e) => handleSearchIcons(e.target.value)}
                    />
                </Toolbar>
            </AppBar>
            {
                icons.length ? (
                    <IconList
                        formatIcons={formatIcons}
                        classes={classes}
                        handleSelectIcon={handleSelectIcon}
                    />
                ) : <Spinner />
            }
        </Dialog>
    );
};

SearchIconModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired
};

export default SearchIconModal;