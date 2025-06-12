import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useAccessibility } from '@hooks/useAccessibility';
import Logo from '@components/ui/Logo';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const { getA11yText } = useAccessibility();

  const navigationItems = [
    {
      key: 'parcours',
      label: t('nav.parcours'),
      href: '/parcours',
      ariaLabel: getA11yText('nav-parcours')
    },
    {
      key: 'handicaps',
      label: t('nav.handicaps'),
      href: '/handicaps',
      ariaLabel: getA11yText('nav-handicaps')
    },
    {
      key: 'projet',
      label: t('nav.projet'),
      href: '/projet',
      ariaLabel: getA11yText('nav-projet')
    }
  ];

  return (
    <nav className="nav-main" role="navigation" aria-label="Navigation principale">
      <div className="flex gap-30 items-center">
        <Logo />
        
        <div className="nav-links">
          {navigationItems.map((item) => (
            <motion.div
              key={item.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.href}
                className="text-neutral-black text-lg font-bold leading-default transition-base hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded-md px-2 py-1"
                aria-label={item.ariaLabel}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          className="btn-secondary"
          aria-label={getA11yText('btn-support')}
        >
          <span>{t('nav.support')}</span>
        </button>
      </motion.div>
    </nav>
  );
};

export default Navigation;