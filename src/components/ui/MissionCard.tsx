import React from 'react';
import { motion } from 'framer-motion';
import { SpeakerHigh, Eye } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { useAccessibility } from '@hooks/useAccessibility';

interface MissionCardProps {
  character: {
    name: string;
    avatar: string;
  };
  mission: {
    description: string;
    task: string;
  };
  onAcceptMission: () => void;
  onReadMessage: () => void;
}

const MissionCard: React.FC<MissionCardProps> = ({
  character,
  mission,
  onAcceptMission,
  onReadMessage
}) => {
  const { t } = useTranslation();
  const { getA11yText } = useAccessibility();

  return (
    <div className="card-mission w-131 h-105.25 relative">
      {/* Mission Content */}
      <div className="gap-5 flex items-start">
        <img
          src={character.avatar}
          alt={getA11yText('avatar-mark')}
          className="w-16 h-75.25 self-stretch object-cover"
        />
        
        <div className="gap-4 w-98 flex pb-2 items-start flex-shrink-0 flex-col">
          <span className="text-primary-600 text-sm w-full font-bold leading-default">
            {character.name}
          </span>
          
          <div className="text-neutral-black text-base w-full font-normal leading-default">
            <span className="font-normal">
              {t('parcoursMission.welcome')}{' '}
            </span>
            <span className="font-bold">Andy K.</span>
            <br />
            <span className="font-normal">
              {mission.description}
            </span>
            <br />
            <span>{t('parcoursMission.yourMission')}</span>
          </div>
          
          {/* Mission Task Box */}
          <div className="gap-2 flex p-4 w-full items-center flex-shrink-0 border border-primary-600 rounded-lg justify-center bg-primary-100">
            <span className="text-neutral-black flex-1 text-base font-normal leading-default">
              <span className="font-normal">
                {mission.task.split('ajoute à ton panier un t-shirt rouge')[0]}
              </span>
              <span className="font-bold">
                ajoute à ton panier un t-shirt rouge.
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Andy K Avatar and Button */}
      <div className="gap-5 flex z-10 items-center">
        <div className="w-16 h-16 flex overflow-hidden relative items-start flex-shrink border-2 border-primary-600 rounded-full bg-white">
          <div className="absolute top-1.75 left-1 w-16.54 h-12.66 flex items-start flex-shrink">
            <svg
              width="66"
              height="51"
              viewBox="0 0 66 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M0 12.75C0 5.70873 5.70873 0 12.75 0H53.25C60.2913 0 66 5.70873 66 12.75V38.25C66 45.2913 60.2913 51 53.25 51H12.75C5.70873 51 0 45.2913 0 38.25V12.75Z"
                fill="#4F39F6"
              />
              <circle cx="23" cy="30.5" r="2.5" fill="white" />
              <circle cx="43" cy="30.5" r="2.5" fill="white" />
            </svg>
          </div>
        </div>
        
        <div className="gap-2.5 h-12 flex items-center flex-shrink-0 flex-col justify-center">
          <motion.button
            className="btn-primary h-9 px-3"
            onClick={onAcceptMission}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={getA11yText('btn-accept-mission')}
          >
            <span className="text-base font-bold">
              {t('parcoursMission.acceptMission')}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Read Message Button */}
      <div className="gap-2.5 absolute top-2 right-2 w-auto h-12 flex z-20 items-center flex-shrink-0 flex-col justify-center">
        <motion.button
          className="btn-ghost h-9 px-3"
          onClick={onReadMessage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={getA11yText('btn-read-message')}
        >
          <SpeakerHigh size={20} weight="fill" />
          <span className="text-primary-600 text-base font-bold">
            {t('parcoursMission.readMessage')}
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default MissionCard;