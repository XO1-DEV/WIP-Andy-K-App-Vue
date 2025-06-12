import { useState, useEffect } from 'react';
import { getAccessibilityText } from '@config/accessibility';
import { useTranslation } from 'react-i18next';

export const useAccessibility = () => {
  const { i18n } = useTranslation();
  const [screenReaderAnnouncement, setScreenReaderAnnouncement] = useState<string>('');

  const announceToScreenReader = (message: string) => {
    setScreenReaderAnnouncement(message);
    // Clear after announcement
    setTimeout(() => setScreenReaderAnnouncement(''), 1000);
  };

  const getA11yText = (id: string): string => {
    return getAccessibilityText(id, i18n.language);
  };

  // Hook pour gérer les préférences d'accessibilité
  const [preferences, setPreferences] = useState({
    reducedMotion: false,
    highContrast: false,
    largeText: false,
  });

  useEffect(() => {
    // Détecter les préférences système
    const mediaQueries = {
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      highContrast: window.matchMedia('(prefers-contrast: high)'),
    };

    const updatePreferences = () => {
      setPreferences({
        reducedMotion: mediaQueries.reducedMotion.matches,
        highContrast: mediaQueries.highContrast.matches,
        largeText: false, // À gérer via localStorage ou contexte utilisateur
      });
    };

    updatePreferences();

    // Écouter les changements
    Object.values(mediaQueries).forEach(mq => {
      mq.addEventListener('change', updatePreferences);
    });

    return () => {
      Object.values(mediaQueries).forEach(mq => {
        mq.removeEventListener('change', updatePreferences);
      });
    };
  }, []);

  return {
    announceToScreenReader,
    getA11yText,
    preferences,
    screenReaderAnnouncement,
  };
};