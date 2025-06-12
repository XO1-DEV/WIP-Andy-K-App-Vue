import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex overflow-auto min-h-screen items-center flex-col justify-center">
      <motion.div
        className="flex flex-col items-center text-center max-w-2xl mx-auto px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3
          className="text-neutral-black text-lg font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t('notFound.title')}
        </motion.h3>
        
        <motion.div
          className="flex relative items-center flex-col justify-center mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <h1 className="text-neutral-600 text-[252px] font-black leading-none tracking-[-20px] -my-5">
            {t('notFound.code')}
          </h1>
        </motion.div>
        
        <motion.div
          className="w-full max-w-md flex items-center flex-col justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-neutral-black text-center font-normal text-lg">
            {t('notFound.message')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/"
            className="btn-primary"
          >
            Retourner à l'accueil
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;