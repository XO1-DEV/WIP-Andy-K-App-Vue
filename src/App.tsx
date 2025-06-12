import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@config/i18n';
import Layout from '@components/layout/Layout';
import Home from '@pages/Home';
import ParcoursMission from '@pages/ParcoursMission';
import NotFound from '@pages/NotFound';
import '@/styles/globals.css';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="parcours-mission" element={<ParcoursMission />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;