import React, { useEffect } from 'react';
import OneSignal from 'react-onesignal'
import { Route, Routes } from 'react-router-dom';
import DateContextProvider from './contexts/DateContext';
import Today from './views/Today'
import Births from './views/Births'
import Deaths from './views/Deaths'
import Header from './components/Header';
import Footer from './components/Footer';
import NoMatch from './views/NoMatch';
import GlobalStyles from './components/GlobalStyles';
import PWAPrompt from 'react-ios-pwa-prompt'

function App() {

  useEffect(() => {
    OneSignal.init({
      appId: process.env.REACT_APP_ONESIGNAL,
    });
  }, []);

  return (
    <DateContextProvider>
      <GlobalStyles />

      <Header />

      <Routes>
        <Route path="/" element={<Today />} />
        <Route path="births" element={<Births />} />
        <Route path="deaths" element={<Deaths />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

      <Footer />

      <PWAPrompt />
      
    </DateContextProvider>
  );
}

export default App;
