import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const IconList = (props) => {
  const { formatIcons, classes, uploadIcon, query, language } = props;
  return (
    <List>
      {
        formatIcons.map((icon, index) => {
          return (
            <ListItem
              button
              key={index}
              onClick={() => uploadIcon(icon, query, language)}
            >
              <ListItemText
                primary={icon.tags.join(' ')}
                secondary={'Format: ' + icon.item.format + ' Size: ' + icon.size}
              />
              <div>
                <img className={classes.icons} src={icon.item.preview_url} alt="" />
              </div>
            </ListItem>
          );
        })
      }
    </List>
  );
};

IconList.propTypes = {
  formatIcons: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  uploadIcon: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default IconList;