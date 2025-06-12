import React from 'react';
import { useAccessibility } from '@hooks/useAccessibility';

const AccessibilityAnnouncer: React.FC = () => {
  const { screenReaderAnnouncement } = useAccessibility();

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
      role="status"
    >
      {screenReaderAnnouncement}
    </div>
  );
};

export default AccessibilityAnnouncer;