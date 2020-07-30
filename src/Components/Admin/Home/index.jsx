import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteToggleContext } from '../Context/RouteToggleContext';
import AwesomeSliderCard from './CardMedia/AweseomSliderCard';
import InfoCard from './CardMedia/Info';
import OurHistoryCard from './CardMedia/OurHistory';
import AwesomeSlider from './Containers/AwesomeSlider';
import Info from './Containers/Info';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';


const Index = (props) => {
  const { context, handleUseHomeToggleContext } = useContext(RouteToggleContext);
  const [passedContext, setPassedContext] = useState();

  useEffect(() => {
    if (context) {
      setPassedContext(context);
    }
  }, [context]);

  const classes = useStyles();
  const renderComponent = (component) => {
    handleUseHomeToggleContext(component);
  };

  const gridLayout = () => {
    return (
      <Grid container spacing={3}>
        <AwesomeSliderCard
          classes={classes}
          renderComponent={renderComponent}
        />
        <InfoCard
          classes={classes}
          renderComponent={renderComponent}
        />
        <OurHistoryCard
          classes={classes}
          renderComponent={renderComponent}
        />
      </Grid>
    );
  };
  return (
    <div className={classes.root}>
      {
        passedContext === 'AwesomeSlider' ? <AwesomeSlider {...props} /> :
          passedContext === 'Info' ? <Info {...props} /> :
            gridLayout()
      }
    </div>
  );
};

export default withRouter(Index);