import React, { useCallback, useState } from 'react';
import { Route } from 'react-router-dom';
import RouteList from './RouteList';
import routes from '../../../Routes/Admin/routes';
import PropTypes from 'prop-types';
import { RouteToggleContext } from '../Context/RouteToggleContext';
import { MemoizedRenderMenu } from './RenderMenu/RenderMenu';
import { MemoizedRenderMobileMenu } from './RenderMobileMenu/RenderMobileMenu';
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
import Grid from '@material-ui/core/Grid';
import useStyles from '../useStyles/useStyle';

const Layout = (props) => {
  const { history } = props;

  const API_URL = process.env.REACT_APP_API_URL;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [context, setContext] = useState();

  const getRoutes = () => {
    return routes.map((route, index) => {
      if (route.auth) {
        const Component = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            render={(props) => {
              return (
                <Component
                  API_URL={API_URL}
                  {...props}
                />
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

  const handleMobileMenuClose = useCallback(() => setMobileMoreAnchorEl(null),[mobileMoreAnchorEl]);

  const handleMobileMenuOpen = event => setMobileMoreAnchorEl(event.currentTarget);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

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
                placeholder="Search???"
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
                aria-controls={'primary-search-account-menu'}
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
                aria-controls={'primary-search-account-menu-mobile'}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
        <MemoizedRenderMobileMenu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={!!mobileMoreAnchorEl}
          onClose={handleMobileMenuClose}
          handleProfileMenuOpen={handleProfileMenuOpen}
        />
        <MemoizedRenderMenu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={'primary-search-account-menu'}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={!!anchorEl}
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

Layout.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Layout;