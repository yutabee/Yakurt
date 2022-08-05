import React from 'react'
import styled from 'styled-components';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { LeftBar } from '../components/LeftBar';
import { ProfileCenterBar } from '../components/ProfileCenterBar';
import { RightBar } from '../components/RightBar';

export const Profile = () => {
  return (
    <>
        <Header /> 
          <SContainer>
              <LeftBar />
              <ProfileCenterBar />
              <RightBar/>
          </SContainer>
      <Footer />
    </>
  );
};

const SContainer = styled.div` 
    display: flex;
    width: 100%;
`

