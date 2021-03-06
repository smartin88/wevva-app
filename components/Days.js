import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/styles';
import { format } from 'date-fns';
import Day from './Day';

export default function Days({ data }) {
  const { daily } = data;
  const tomorrowPlusOne = new Date().getTime() + (86400000 * 2);
  const tomorrowPlusOneName = format(new Date(tomorrowPlusOne), 'eeee');

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
    {daily ? <View style={styles.daysContainer}>
        <Day
          name="Today"
          icon={daily[0].weather[0].icon}
          headline={Capitalize(daily[0].weather[0].description)}
          minTemp={Math.round(daily[0].temp.min)}
          maxTemp={Math.round(daily[0].temp.max)}
        />
        <Day
          name="Tomorrow"
          icon={daily[1].weather[0].icon}
          headline={Capitalize(daily[1].weather[0].description)}
          minTemp={Math.round(daily[1].temp.min)}
          maxTemp={Math.round(daily[1].temp.max)}
        />
        <Day
          name={tomorrowPlusOneName}
          icon={daily[2].weather[0].icon}
          headline={Capitalize(daily[2].weather[0].description)}
          minTemp={Math.round(daily[2].temp.min)}
          maxTemp={Math.round(daily[2].temp.max)}
        />
      </View> : <></>}
    </>
  );
}
