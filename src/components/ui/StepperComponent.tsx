import React from 'react';
import { motion } from 'framer-motion';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
  steps: Array<{
    title: string;
    subtitle?: string;
  }>;
}

const StepperComponent: React.FC<StepperProps> = ({ currentStep, totalSteps, steps }) => {
  return (
    <div className="gap-2 flex w-full items-start flex-shrink-0">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber <= currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <div key={index} className="gap-2 w-full flex flex-1 items-start flex-shrink-0 flex-col">
            <div className="gap-4 flex pr-2 w-full items-center flex-shrink-0">
              {/* Step Circle */}
              <motion.div
                className={isActive ? "stepper-active" : "stepper-inactive"}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {isActive && (
                  <div className="stepper-active-inner" />
                )}
              </motion.div>

              {/* Progress Line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="stepper-line-active flex-1">
                  <motion.div
                    className="stepper-line-progress"
                    initial={{ width: "0%" }}
                    animate={{ width: isActive ? "60%" : "0%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
              )}
            </div>

            {/* Step Content */}
            <div className="flex w-full items-start flex-col justify-center">
              <span className="text-neutral-black text-base font-bold leading-default">
                {isCurrent ? step.title : `Mission ${stepNumber} sur ${totalSteps}`}
              </span>
              {step.subtitle && isCurrent && (
                <span className="text-neutral-black text-base w-full font-normal leading-default">
                  {step.subtitle}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepperComponent;