import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase';

export const LogOutButton = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
    auth.signOut();
    navigate('/auth');
    };

  return (
      <Button variant='outlined'
        sx={{
          backgroundColor: ' rgba(211, 211, 211, 0.709)',
          margin: '0 10px',
        }}
        onClick={handleLogout}>ログアウト</Button>
  ); 
};
