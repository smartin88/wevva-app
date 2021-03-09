import { format } from 'date-fns';

// Capitalises the first letter of the headline
export const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Calculates the date 2 days from now and returns the name of the day
export const tomorrowPlusOne = () => {
  const twoDaysFromNow = new Date().getTime() + 86400000 * 2;
  return format(new Date(twoDaysFromNow), 'eeee');
};

// Converts wind direction in degrees to letter format - i.e. 5km/h NE (North-East)
export const degToCard = (deg) => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  let degrees = (deg * 8) / 360;
  degrees = Math.round(degrees, 0);
  degrees = (degrees + 8) % 8;
  return directions[degrees];
};

// Converts UV Index to a string based on extremity
export const measureUVI = (num) => {
  if (num <= 2) {
    return 'Low';
  } else if (num <= 5) {
    return 'Moderate';
  } else if (num <= 7) {
    return 'High';
  } else if (num <= 10) {
    return 'Very High';
  } else {
    return 'Extreme';
  }
};

// Converts CO level to a string based on extremity
export const measureCO = (num) => {
  if (num <= 1000) {
    return 'Low';
  } else if (num <= 10000) {
    return 'Moderate';
  } else if (num <= 17000) {
    return 'High';
  } else if (num <= 34000) {
    return 'Very High';
  } else {
    return 'Extreme';
  }
};

// Converts NO & NO2 level to a string based on extremity
export const measureNO2 = (num) => {
  if (num <= 40) {
    return 'Low';
  } else if (num <= 80) {
    return 'Moderate';
  } else if (num <= 200) {
    return 'High';
  } else if (num <= 400) {
    return 'Very High';
  } else {
    return 'Extreme';
  }
};

// Converts O3 level to a string based on extremity
export const measureO3 = (num) => {
  if (num <= 20) {
    return 'Low';
  } else if (num <= 40) {
    return 'Moderate';
  } else if (num <= 160) {
    return 'High';
  } else if (num <= 240) {
    return 'Very High';
  } else {
    return 'Extreme';
  }
};

// Converts SO2 level to a string based on extremity
export const measureSO2 = (num) => {
  if (num <= 20) {
    return 'Low';
  } else if (num <= 125) {
    return 'Moderate';
  } else if (num <= 350) {
    return 'High';
  } else if (num <= 500) {
    return 'Very High';
  } else {
    return 'Extreme';
  }
};

// Converts NH3 level to a string based on extremity
export const measureNH3 = (num) => {
  if (num <= 400) {
    return 'Low';
  } else if (num <= 800) {
    return 'Moderate';
  } else if (num <= 1200) {
    return 'High';
  } else if (num <= 1800) {
    return 'Very High';
  } else {
    return 'Extreme';
  }
};

// Converts PM2.5 level to a string based on extremity
export const measurePM25 = (num) => {
  if (num <= 10) {
    return 'Low';
  } else if (num <= 25) {
    return 'Moderate';
  } else if (num <= 50) {
    return 'High';
  } else if (num <= 100) {
    return 'Very High';
  } else {
    return 'Extreme';
  }
};

// Converts PM10 level to a string based on extremity
export const measurePM10 = (num) => {
  if (num <= 20) {
    return 'Low';
  } else if (num <= 50) {
    return 'Moderate';
  } else if (num <= 80) {
    return 'High';
  } else if (num <= 160) {
    return 'Very High';
  } else {
    return 'Extreme';
  }
};
