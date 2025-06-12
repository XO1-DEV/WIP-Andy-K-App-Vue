import React from 'react';
import { Link } from 'react-router-dom';
import { useAccessibility } from '@hooks/useAccessibility';

const Logo: React.FC = () => {
  const { getA11yText } = useAccessibility();

  return (
    <Link
      to="/"
      className="flex gap-2 items-center transition-base hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded-md"
      aria-label={getA11yText('nav-logo')}
    >
      <div className="w-10.5 h-8 flex relative items-start flex-shrink">
        <svg
          width="42"
          height="32"
          viewBox="0 0 42 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H34C38.4183 0 42 3.58172 42 8V24C42 28.4183 38.4183 32 34 32H8C3.58172 32 0 28.4183 0 24V8Z"
            fill="#4F39F6"
          />
          <circle
            cx="14.5"
            cy="19.5"
            r="1.5"
            fill="white"
          />
          <circle
            cx="27.5"
            cy="19.5"
            r="1.5"
            fill="white"
          />
        </svg>
      </div>
      <span className="text-neutral-black text-2xl font-bold leading-default">
        AndyK.app
      </span>
    </Link>
  );
};

export default Logo;