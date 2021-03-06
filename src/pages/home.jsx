import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '../components/autocomplete';
import CurrentWeatherCard from '../components/currentWeatherCard';

const useStyles = makeStyles(theme => ({
  mainContent: {
    padding: theme.spacing(2),
  },
}));


const Home = () => {
  const classes = useStyles();
  const locations = useSelector(state => state.location.locations);

  return (
    <>
      <Autocomplete />
      <main className={classes.mainContent}>
        <Grid spacing={4} container>
          {locations.map(location => (
            <Grid
              key={location}
              xs={12}
              sm={6}
              md={6}
              lg={4}
              item
              container
              justify='center'
              alignItems='center'
            >
              <CurrentWeatherCard location={location} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Home;
