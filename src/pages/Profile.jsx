import React from 'react'
import styled from 'styled-components';
import { Header } from '../components/Header';
import { LeftBar } from '../components/LeftBar';
import { ProfileCenterBar } from '../components/ProfileCenterBar';

import { RightBar } from '../components/RightBar';

export const Profile = () => {
  return (
    <>
        <Header /> 
          <SContainer>
              <LeftBar />
              <ProfileCenterBar/>
              <RightBar/>
          </SContainer>
    </>
  );
};

const SContainer = styled.div` 
    display: flex;
    width: 100%;
`

