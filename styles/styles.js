import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  appContainer: {
    alignItems: 'center',
    paddingTop: 80,
  },
  searchContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  forecastContainer: {
    width: '90%',
  },
  currentContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  daysContainer: {
    width: '100%',
    flexDirection: 'column',
    paddingBottom: 40,
  },
  hourlyContainer: {
    width: '100%',
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  sevenDayContainer: {
    width: '100%',
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  conditionsContainer: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 30,
  },
  loadingContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forecastList: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    color: '#fff',
  },
  forecastListLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
    height: 55,
  },
  forecastListRight: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 55,
  },
  forecastText: {
    color: '#fff',
    fontSize: 17,
  },
  cityText: {
    fontSize: 45,
    color: '#fff',
  },
  cityTextLong: {
    fontSize: 25,
    color: '#fff',
  },
  headlineText: {
    fontSize: 30,
    color: '#fff',
  },
  hourlyComponent: {
    height: '100%',
    width: 80,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hourlyText: {
    color: '#fff',
    fontSize: 17,
  },
  sevenDayComponent: {
    height: '100%',
    width: 80,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sevenDayText: {
    color: '#fff',
    fontSize: 17,
  },
  titleText: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 17,
    fontWeight: 'bold',
  },
  conditionsPair: {
    flexDirection: 'column',
    marginBottom: 5,
  },
  conditionsTextTitle: {
    color: '#ebf1f1',
    fontSize: 14,
  },
  conditionsTextResult: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    padding: 5,
    lineHeight: 30,
  },
  searchResultCard: {
    width: '95%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingLeft: 20,
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    paddingBottom: 12,
    position: 'relative',
  },
  searchResultText: {
    color: '#4d4d4d',
    fontSize: 22,
  },
  searchInputContainerContainer: {
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  searchInputContainer: {
    backgroundColor: '#fff',
    width: '100%',
  },
  searchInput: {
    backgroundColor: '#fff',
  },
  mapContainer: {
    width: '100%',
    height: 300,
    borderRadius: 7,
    overflow: 'hidden',
    marginBottom: 30,
  },
  map: {
    width: '100%',
    height: 300,
  },
  backButtonView: {
    position: 'absolute',
    top: -20,
    left: 0,
    zIndex: 1,
  },
});
