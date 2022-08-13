import { Box } from '@mui/material';
import React, { memo } from 'react'
import { Footer } from '../layouts/Footer';
import { Header } from '../layouts/Header';
import { LeftBar } from '../organisms/LeftBar';
import { RightBar } from '../organisms/RightBar';
import { UserEdit } from '../molecules/UserEdit';

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
