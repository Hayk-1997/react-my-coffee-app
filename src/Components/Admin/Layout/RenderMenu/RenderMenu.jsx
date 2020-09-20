import React, { memo } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

const RenderMenu = (props) => {
  const {
    anchorEl,
    anchorOrigin,
    id,
    transformOrigin,
    open,
    onClose,
    handleMenuClose
  } = props;

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      id={id}
      keepMounted
      transformOrigin={transformOrigin}
      open={open}
      onClose={onClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem>
        <Link to="/admin/login">
           Log Out
        </Link>
      </MenuItem>
    </Menu>
  );
};

const PropsAreEqual = (prevProps, nextProps) => prevProps.open === nextProps.open;

export const MemoizedRenderMenu = memo(RenderMenu, PropsAreEqual);