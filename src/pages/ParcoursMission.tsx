import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { useAccessibility } from '@hooks/useAccessibility';
import StepperComponent from '@components/ui/StepperComponent';
import MissionCard from '@components/ui/MissionCard';

const ParcoursMission: React.FC = () => {
  const { t } = useTranslation();
  const { getA11yText, announceToScreenReader } = useAccessibility();

  const steps = [
    {
      title: t('parcoursMission.protanopie'),
      subtitle: t('parcoursMission.protanopie')
    },
    {
      title: `${t('parcoursMission.mission')} 2 ${t('parcoursMission.sur')} 4`,
    },
    {
      title: `${t('parcoursMission.mission')} 3 ${t('parcoursMission.sur')} 4`,
    },
    {
      title: `${t('parcoursMission.mission')} 4 ${t('parcoursMission.sur')} 4`,
    }
  ];

  const handleAcceptMission = () => {
    announceToScreenReader('Mission acceptée, démarrage en cours');
    // Logique pour démarrer la mission
    console.log('Mission acceptée');
  };

  const handleReadMessage = () => {
    announceToScreenReader('Lecture du message audio en cours');
    // Logique pour lire le message audio
    console.log('Lecture du message');
  };

  const missionData = {
    character: {
      name: `${t('parcoursMission.markSays')}`,
      avatar: '/external/avatar6659-jhun.svg'
    },
    mission: {
      description: t('parcoursMission.missionDescription'),
      task: t('parcoursMission.missionTask')
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Section retour */}
      <div className="gap-2 container-main flex px-16 z-20 items-start flex-shrink-0 flex-col">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/parcours"
            className="btn-ghost w-auto"
            aria-label={getA11yText('btn-back-parcours')}
          >
            <ArrowLeft size={24} weight="fill" />
            <span className="text-primary-600 w-auto text-base font-medium">
              {t('parcoursMission.backToParcours')}
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Section steps */}
      <div className="gap-4 container-main flex py-2 px-20 pb-6 z-30 items-start flex-shrink-0 flex-col">
        {/* Heading */}
        <motion.div
          className="gap-6 flex w-full items-center flex-shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-neutral-black text-heading-3">
            {t('parcoursMission.title')}
          </h1>
          
          <div className="tag-visual">
            <Eye size={16} weight="fill" />
            <span>{t('parcoursMission.troublesVisuels')}</span>
          </div>
        </motion.div>

        {/* Stepper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StepperComponent
            currentStep={1}
            totalSteps={4}
            steps={steps}
          />
        </motion.div>
      </div>

      {/* Section mission */}
      <div className="gap-4 container-main flex px-20 pb-16 z-40 items-start flex-shrink-0 justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MissionCard
            character={missionData.character}
            mission={missionData.mission}
            onAcceptMission={handleAcceptMission}
            onReadMessage={handleReadMessage}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img
            src="/external/zonemission6622-koj-700h.png"
            alt={getA11yText('mission-zone')}
            className="w-185 h-155.5 border border-solid rounded-3xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ParcoursMission;