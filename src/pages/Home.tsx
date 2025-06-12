import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <motion.div
        className="text-center max-w-4xl mx-auto px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-heading-1 text-neutral-black mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Bienvenue sur AndyK.app
        </motion.h1>
        
        <motion.p
          className="text-body-large text-neutral-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Découvrez les parcours de sensibilisation aux handicaps et développez votre empathie 
          à travers des expériences interactives innovantes.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button className="btn-primary">
            Découvrir les parcours
          </button>
          <button className="btn-secondary">
            En savoir plus
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;