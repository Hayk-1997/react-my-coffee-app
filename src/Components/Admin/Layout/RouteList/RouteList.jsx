import React, {useEffect, useState} from 'react';
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import useStyles from "../../useStyles/useStyle";
import Drawer from "@material-ui/core/Drawer";
import routes from "../../../../Routes/Admin/routes";
import Icon from '@material-ui/core/Icon';
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {Link} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";

const RouteList = (props) => {
    const {
         open, handleDrawerClose,
        theme, handleUseHomeToggleContext
    } = props;
    const classes = useStyles();
    const [show, setShow] = useState('');

    const handleClick = name =>  {
        if (name === show) {
            name = '';
        }
        setShow(name);
    };

    const passHomeToggleContext = item => {
        console.log(item);
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
                    {/*{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}*/}
                </IconButton>
            </div>
            <Divider/>
            <List>
                {routes.map((route, index) => {
                    return (
                        route.auth ?
                            (
                            <div key={index}>
                                <ListItem button onClick={() => handleClick(route.name)}>
                                    <ListItemIcon>
                                        <Icon><i className={route.icon}/></Icon>
                                    </ListItemIcon>
                                        <Link className={classes.link} to={route.path} onClick={() => passHomeToggleContext(null)}>
                                            {route.name}
                                        </Link>
                                    {show ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                {
                                route.child ?
                                    (
                                        route.child.map((item) => {
                                            return (
                                                <Collapse in={show === item.parent} timeout="auto" unmountOnExit
                                                          key={item.name}>
                                                    <List component="div" disablePadding>
                                                        <ListItem button className={classes.nested}>
                                                            <ListItemIcon>
                                                                <Icon><i className={item.icon}/></Icon>
                                                            </ListItemIcon>
                                                            <Link to={route.path} onClick={() => passHomeToggleContext(item.name)} className={classes.link}>
                                                                {item.name}
                                                            </Link>
                                                        </ListItem>
                                                    </List>
                                                </Collapse>
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

export default RouteList;