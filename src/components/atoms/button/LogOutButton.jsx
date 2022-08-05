import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase';
import { SButton } from './BaseButton';

export const LogOutButton = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
    auth.signOut();
    navigate('/auth');
  };

  return (
    <>
         <SButton onClick={handleLogout}>ログアウト</SButton>
    </>
  );
};
