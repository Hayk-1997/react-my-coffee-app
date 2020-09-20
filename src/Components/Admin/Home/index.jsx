import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AwesomeSliderCard from './CardMedia/AweseomSliderCard';
import InfoCard from './CardMedia/Info';
import OurStoryCard from './CardMedia/OurStoryCard';
import ServicesCard from './CardMedia/Services';
import Grid from '@material-ui/core/Grid';
import OurMenuCard from './CardMedia/OurMenu';
import routes from '../../../Routes/Admin/routes';
import useStyles from './useStyles';
import StaticCounterCard from './CardMedia/StaticCounter';

const Home = (props) => {
  const { API_URL, location: { pathname } } = props;

  const classes = useStyles();
  const [homeRoutes, setHomeRoutes] = useState([]);
  
  useEffect(() => {
    const homeRoutes = routes.find((route) => route.name === 'Home' && route.layout === 'admin');
    setHomeRoutes(homeRoutes.child);
  }, []);

  const gridLayout = () => {
    return (
      <Grid container spacing={3}>
        <AwesomeSliderCard classes={classes} />
        <InfoCard classes={classes} />
        <OurStoryCard classes={classes} />
        <ServicesCard classes={classes} />
        <OurMenuCard classes={classes} />
        <StaticCounterCard classes={classes} />
      </Grid>
    );
  };

  return (
    <Grid className={classes.root}>
      {
        pathname.slice(1).split('/').length === 2 ? (
          gridLayout()
        ) : (
          homeRoutes.length && homeRoutes.map((route, index) => {
            const Component = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                render={(props) => (
                  <Component
                    API_URL={API_URL}
                    {...props}
                  />
                )}
              />
            );
          })
        )
      }
    </Grid>
  );
};


Home.propTypes = {
  API_URL: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Home);