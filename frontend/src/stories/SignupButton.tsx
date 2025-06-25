import React from 'react';
import '../index.css';

export interface ButtonProps {
  isLogin?: boolean
  /** Button contents */
  label?: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const SignupButton = ({
  label,
  isLogin,
  onClick
}: ButtonProps) => {
  return (
    <button
      className="cursor-pointer bg-white px-6 py-3 rounded-lg"
      style={{ color: isLogin ? '#2563EB' : '#059669' }}
      onClick={onClick}
    >
      {isLogin ? 'Sign Up' : 'Sign In'}
    </button>
  );
};
