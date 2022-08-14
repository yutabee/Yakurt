import { Button } from '@mui/material';
import React, { memo, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../providers/UserProvider';


export const LogOutButton = memo(() => {
    const { setCurrentUser ,signout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = useCallback(async() => {
    signout();
    setCurrentUser(null);
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