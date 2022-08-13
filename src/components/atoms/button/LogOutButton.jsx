import { Button } from '@mui/material';
import React, { memo, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase';
import { UserContext } from '../../../providers/UserProvider';

export const LogOutButton = memo(() => {
    const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    setUser(null);
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