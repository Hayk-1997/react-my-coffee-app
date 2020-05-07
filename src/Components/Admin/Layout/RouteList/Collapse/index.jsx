import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';

export default (props) => {
    const {
        showRouteContent, item,
        classes, passHomeToggleContext,
        route
    } = props;
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
                    <Link to={route.path} onClick={() => passHomeToggleContext(item.name)} className={classes.link}>
                        { item.name }
                    </Link>
                </ListItem>
            </List>
        </Collapse>
    );
}