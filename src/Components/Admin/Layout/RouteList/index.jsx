import React, { useState } from 'react';
import PropTypes from 'prop-types';
import routes from '../../../../Routes/Admin/routes';
import { Link } from 'react-router-dom';
import Collapse from './Collapse';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../useStyles/useStyle';


const RouteList = (props) => {
  const {
    open, handleDrawerClose, history,
    handleUseHomeToggleContext, handleDrawerOpen
  } = props;

  const classes = useStyles();
  const [showRouteContent, setShowRouteContent] = useState('');

  const openRouteContent = (name, path) => {
    if (name === showRouteContent) {
      name = '';
    }
    handleDrawerOpen();
    setShowRouteContent(name);
    history.push(path);
  };

  const passHomeToggleContext = item => handleUseHomeToggleContext(item);

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <Grid className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Grid>
      <Divider/>
      <List>
        {routes.map((route, index) => {
          return (
            route.auth ?
              (
                <Grid key={index} onClick={() => openRouteContent(route.name, route.path)}>
                  <ListItem button>
                    <ListItemIcon>
                      <Icon><i className={route.icon} /></Icon>
                    </ListItemIcon>
                    <Link className={classes.link} to={route.path} onClick={() => passHomeToggleContext(null)}>
                      {route.name}
                    </Link>
                    { showRouteContent === route.name ? <ExpandLess /> : <ExpandMore /> }
                  </ListItem>
                  {
                    route.child ?
                      (
                        route.child.map((item) => {
                          return (
                            <Collapse
                              key={item.name}
                              showRouteContent={showRouteContent}
                              item={item}
                              route={route}
                              passHomeToggleContext={passHomeToggleContext}
                            />
                          );
                        })
                      ) : null
                  }
                </Grid>
              ) : null
          );
        })}
      </List>
      <Divider/>
    </Drawer>
  );
};

RouteList.propTypes = {
  open: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  handleUseHomeToggleContext: PropTypes.func.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
};

export default RouteList;
