import React, { useState } from 'react';
import routes from '../../../Routes/Admin/routes';
import { Route } from 'react-router-dom';
import RouteList from './RouteList';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import { AccountCircle } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import RenderMenu from './RenderMenu/RenderMenu';
import RenderMobileMenu from './RenderMobileMenu/RenderMobileMenu';
import useStyles from '../useStyles/useStyle';
import { HomeToggleContext } from '../Context/HomeToggleContext';

const Layout = (props) => {

    const getRoutes = () => {
        return routes.map((route) => {
            if (route.auth) {
                let RouteVal = route.component;
                return (
                    <Route
                        key={route.id}
                        path={route.path}
                        render={(props) => {
                            return (
                                <RouteVal{...props} />
                            )
                        }}
                    />
                )
            }
        });
    };
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [context, setContext] = useState();
    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleUseHomeToggleContext = context => {
        setContext(context);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.grow}>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Material-UI
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <RenderMobileMenu
                    anchorEl={mobileMoreAnchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    id={mobileMenuId}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMobileMenuOpen}
                    onClose={handleMobileMenuClose}
                    handleProfileMenuOpen={handleProfileMenuOpen}
                />
                <RenderMenu
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    id={menuId}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                    handleMenuClose={handleMenuClose}
                />
            </div>
            <RouteList
                classes={classes}
                open={open}
                handleDrawerClose={handleDrawerClose}
                handleUseHomeToggleContext={handleUseHomeToggleContext}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <HomeToggleContext.Provider value={{context, handleUseHomeToggleContext}}>
                    { getRoutes() }
                </HomeToggleContext.Provider>
            </main>
        </div>
    )
};
export default Layout;