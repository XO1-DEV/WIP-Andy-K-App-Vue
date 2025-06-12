import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAccessibility } from '@hooks/useAccessibility';

const SkipLinks: React.FC = () => {
  const { t } = useTranslation();
  const { getA11yText } = useAccessibility();

  const skipToContent = (e: React.MouseEvent) => {
    e.preventDefault();
    const main = document.getElementById('main-content');
    if (main) {
      main.focus();
      main.scrollIntoView();
    }
  };

  const skipToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.focus();
      footer.scrollIntoView();
    }
  };

  return (
    <div className="accessibility-header">
      <div className="container-main px-20">
        <div className="flex gap-4">
          <button
            onClick={skipToContent}
            className="btn-ghost h-10"
            aria-label={getA11yText('skip-to-content')}
          >
            <span className="text-primary-600 text-base font-medium">
              {t('accessibility.skipToContent')}
            </span>
          </button>
          
          <button
            className="btn-ghost h-10"
            aria-label={getA11yText('show-menu')}
          >
            <span className="text-primary-600 text-base font-medium">
              {t('accessibility.showMenu')}
            </span>
          </button>
          
          <button
            onClick={skipToFooter}
            className="btn-ghost h-10"
            aria-label={getA11yText('go-to-footer')}
          >
            <span className="text-primary-600 text-base font-medium">
              {t('accessibility.goToFooter')}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipLinks;