import React, { useState } from 'react';
import routes from '../../../../Routes/Admin/routes';
import { Link } from 'react-router-dom';
import Collapse from './Collapse';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import useStyles from '../../useStyles/useStyle';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@material-ui/core/Icon';
import { ExpandLess, ExpandMore } from '@material-ui/icons';


export default (props) => {
    const {
        open, handleDrawerClose,
        handleUseHomeToggleContext
    } = props;
    const classes = useStyles();
    const [showRouteContent, setShowRouteContent] = useState('');

    const openRouteContent = name =>  {
        if (name === showRouteContent) {
            name = '';
        }
        setShowRouteContent(name);
    };

    const passHomeToggleContext = item => {
        handleUseHomeToggleContext(item);
    };

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
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronRightIcon/>
                </IconButton>
            </div>
            <Divider/>
            <List>
                {routes.map((route, index) => {
                    return (
                        route.auth ?
                            (
                            <div key={index} onClick={() => openRouteContent(route.name)}>
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
                                                    classes={classes}
                                                    route={route}
                                                    passHomeToggleContext={passHomeToggleContext}
                                                />
                                            )
                                        })
                                    ) : null
                                }
                            </div>
                        ) : null
                    )
                })}
            </List>
            <Divider/>
        </Drawer>
    );
};
