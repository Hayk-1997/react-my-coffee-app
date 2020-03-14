import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {AccountCircle} from "@material-ui/icons";
import {Link} from "react-router-dom";


const RenderMenu = () => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleProfileMenuOpen = event => {setAnchorEl(event.currentTarget);};

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <RenderMenu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem>
                <Link to="/admin/login">Log Out</Link>
            </MenuItem>
        </RenderMenu>
    );

    return (
       <>
           <RenderMenu
               anchorEl={mobileMoreAnchorEl}
               anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
               id={mobileMenuId}
               keepMounted
               transformOrigin={{ vertical: 'top', horizontal: 'right' }}
               open={isMobileMenuOpen}
               onClose={handleMobileMenuClose}
           >
               <MenuItem>
                   <IconButton aria-label="show 4 new mails" color="inherit">
                       <Badge badgeContent={4} color="secondary">
                           <MailIcon />
                       </Badge>
                   </IconButton>
                   <p>Messages</p>
               </MenuItem>
               <MenuItem>
                   <IconButton aria-label="show 11 new notifications" color="inherit">
                       <Badge badgeContent={11} color="secondary">
                           <NotificationsIcon />
                       </Badge>
                   </IconButton>
                   <p>Notifications</p>
               </MenuItem>
               <MenuItem onClick={handleProfileMenuOpen}>
                   <IconButton
                       aria-label="account of current user"
                       aria-controls="primary-search-account-menu"
                       aria-haspopup="true"
                       color="inherit"
                   >
                       <AccountCircle />
                   </IconButton>
                   <p>Profile</p>
               </MenuItem>
           </RenderMenu>
           {renderMenu}
       </>
    )
};

export default RenderMenu;