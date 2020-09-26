import React, { memo } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { AccountCircle } from '@material-ui/icons';

const RenderMobileMenu = (props) => {
  const {
    anchorEl,
    anchorOrigin,
    transformOrigin,
    open,
    onClose,
    handleProfileMenuOpen
  } = props;

  console.log('RenderMobileMenu');
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      id={'primary-search-account-menu-mobile'}
      keepMounted
      transformOrigin={transformOrigin}
      open={open}
      onClose={onClose}
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
    </Menu>
  );
};

const PropsAreEqual = (prevProps, nextProps) => prevProps.open === nextProps.open;

export const MemoizedRenderMobileMenu = memo(RenderMobileMenu, PropsAreEqual);