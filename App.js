import React from 'react';
import AppProvider from './AppContext';
import Main from './components/Main';

export default function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}
