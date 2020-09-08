import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';
import useStyles from '../../../useStyles/useStyle';

const CollapseRoute = (props) => {
  const { showRouteContent, item } = props;

  const classes = useStyles();

  return (
    <Collapse
      in={showRouteContent === item.parent}
      timeout="auto" unmountOnExit
    >
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <Icon><i className={item.icon}/></Icon>
          </ListItemIcon>
          <Link to={item.path} className={classes.link}>
            { item.name }
          </Link>
        </ListItem>
      </List>
    </Collapse>
  );
};

CollapseRoute.propTypes = {
  showRouteContent: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};

export default CollapseRoute;