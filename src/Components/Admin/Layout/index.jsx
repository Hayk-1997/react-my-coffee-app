import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import RouteList from './RouteList';
import routes from '../../../Routes/Admin/routes';
import PropTypes from 'prop-types';
import { RouteToggleContext } from '../Context/RouteToggleContext';
import RenderMenu from './RenderMenu/RenderMenu';
import RenderMobileMenu from './RenderMobileMenu/RenderMobileMenu';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import { AccountCircle } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import useStyles from '../useStyles/useStyle';
import Grid from '@material-ui/core/Grid';

const Layout = (props) => {
  const { history } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [context, setContext] = useState();
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const getRoutes = () => {
    return routes.map((route) => {
      if (route.auth) {
        const Component = route.component;
        return (
          <Route
            key={route.id}
            path={route.path}
            render={(props) => {
              return (
                <Component{...props} />
              );
            }}
          />
        );
      }
    });
  };

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);

  const handleProfileMenuOpen = event => setAnchorEl(event.currentTarget);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => setMobileMoreAnchorEl(event.currentTarget);

  const handleUseHomeToggleContext = context => setContext(context);

  return (
    <Grid className={classes.root}>
      <CssBaseline />
      <Grid className={classes.grow}>
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
            <Grid className={classes.search}>
              <Grid className={classes.searchIcon}>
                <SearchIcon />
              </Grid>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Grid>
            <Grid className={classes.grow} />
            <Grid className={classes.sectionDesktop}>
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
            </Grid>
            <Grid className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
              </IconButton>
            </Grid>
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
      </Grid>
      <RouteList
        classes={classes}
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleUseHomeToggleContext={handleUseHomeToggleContext}
        handleDrawerOpen={handleDrawerOpen}
        history={history}
      />
      <main className={classes.content}>
        <Grid className={classes.toolbar} />
        <RouteToggleContext.Provider value={{ context, handleUseHomeToggleContext }}>
          { getRoutes() }
        </RouteToggleContext.Provider>
      </main>
    </Grid>
  );
};

Layout.propTytpes = {
  history: PropTypes.object.isRequired,
};

export default Layout;