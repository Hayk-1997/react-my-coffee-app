import React, { memo } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './style.css';

const TabsAppBar = ({ handleTabChange, tab }) => {
  return (
    <AppBar position="static">
      <Tabs value={tab} aria-label="simple tabs example">
        <Tab label="English Tab" onClick={() => handleTabChange(0, 'en')} />
        <Tab label="Armenian Tab" onClick={() => handleTabChange(1, 'am')} />
      </Tabs>
    </AppBar>
  );
};

TabsAppBar.propTypes = {
  handleTabChange: PropTypes.func.isRequired,
  tab: PropTypes.number.isRequired,
};

export default memo(TabsAppBar);