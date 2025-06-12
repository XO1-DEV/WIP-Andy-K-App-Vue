import React from 'react';
import { Outlet } from 'react-router-dom';
import SkipLinks from '@components/ui/SkipLinks';
import Navigation from '@components/layout/Navigation';
import AccessibilityAnnouncer from '@components/ui/AccessibilityAnnouncer';

const Layout: React.FC = () => {
  return (
    <div className="w-full flex min-h-screen items-center flex-col">
      <AccessibilityAnnouncer />
      <SkipLinks />
      <Navigation />
      
      <main
        id="main-content"
        className="w-full flex-1 flex flex-col"
        tabIndex={-1}
      >
        <Outlet />
      </main>
      
      <footer
        id="footer"
        className="w-full bg-neutral-100 p-8 text-center"
        tabIndex={-1}
      >
        {/* Footer content à implémenter */}
        <p className="text-neutral-600">© 2024 AndyK.app - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default Layout;