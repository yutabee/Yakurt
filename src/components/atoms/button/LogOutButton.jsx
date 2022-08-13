import { Button } from '@mui/material';
import React, { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase';

export const LogOutButton = memo(() => {

  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    auth.signOut();
    navigate('/auth');
    // eslint-disable-next-line
  }, []);
  

  return (
      <Button variant='outlined'
        sx={{
          backgroundColor: ' rgba(211, 211, 211, 0.709)',
          margin: '0 10px',
        }}
        onClick={()=>handleLogout()}>ログアウト</Button>
  ); 
})