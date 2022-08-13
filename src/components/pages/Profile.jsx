import React, { memo }  from 'react'
import styled from 'styled-components';
import { Footer } from '../layouts/Footer';
import { Header } from '../layouts/Header';
import { LeftBar } from '../organisms/LeftBar';
import { ProfileCenterBar } from '../organisms/ProfileCenterBar';
import { RightBar } from '../organisms/RightBar';

export const Profile = memo(() => {
 
  return (
    <>
      <Header /> 
          <SContainer>
            <LeftBar />
            <ProfileCenterBar  />
            <RightBar/>
          </SContainer>
      <Footer />
    </>
  );
})

const SContainer = styled.div` 
    display: flex;
    width: 100%;
`

