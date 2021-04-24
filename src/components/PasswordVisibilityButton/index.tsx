import React, { useState, useCallback } from 'react';

import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

import { colors } from '../../styles/global';

const PasswordVisibilityButton:React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);
  return (
    <button type="button" onClick={handlePasswordVisibility}>
      {showPassword ? (
        <IoIosEye size={20} color={colors.button} />
      ) : (
        <IoIosEyeOff size={20} color={colors.button} />
      )}
    </button>
  );
};

export default PasswordVisibilityButton;
