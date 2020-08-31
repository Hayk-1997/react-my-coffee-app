import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteToggleContext } from '../Context/RouteToggleContext';
import AwesomeSliderCard from './CardMedia/AweseomSliderCard';
import InfoCard from './CardMedia/Info';
import OurHistoryCard from './CardMedia/OurHistory';
import ServicesCard from './CardMedia/Services';
import AwesomeSlider from './Containers/AwesomeSlider';
import Info from './Containers/Info';
import Grid from '@material-ui/core/Grid';
import OurHistory from './Containers/OurHistory';
import Services from './Containers/Services';
import OurMenuCard from './CardMedia/OurMenu';
import OurMenu from './Containers/OurMenu';
import useStyles from './useStyles';


const Index = (props) => {
  const { context, handleUseHomeToggleContext } = useContext(RouteToggleContext);
  const classes = useStyles();
  const [passedContext, setPassedContext] = useState();

  useEffect(() => {
    if (context) {
      setPassedContext(context);
    }
  }, [context]);

  const renderComponent = component => handleUseHomeToggleContext(component);


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
        <ServicesCard
          classes={classes}
          renderComponent={renderComponent}
        />
        <OurMenuCard
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
            passedContext === 'OurHistory' ? <OurHistory {...props} /> :
              passedContext === 'Services' ? <Services {...props} /> :
                passedContext === 'OurMenu' ? <OurMenu {...props} /> :
                  gridLayout()
      }
    </div>
  );
};

export default withRouter(Index);