import { Box } from '@mui/material';
import React, { memo } from 'react'
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { LeftBar } from '../components/LeftBar';
import { RightBar } from '../components/RightBar';
import { UserEdit } from '../components/user/UserEdit';

export const ProfileEdit = memo(() => {
  return (
      <>
    <Header /> 
      <Box sx={{display: 'flex',width:'100%',}}>
          <LeftBar /> 
          <UserEdit />
          <RightBar/>
      </Box>
    <Footer />
    </>
  );
})
