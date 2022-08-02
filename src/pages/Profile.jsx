import React from 'react'
import styled from 'styled-components';
import { Header } from '../components/Header';
import { LeftBar } from '../components/LeftBar';
import { Main } from '../components/Main';
import { RightBar } from '../components/RightBar';

export const Profile = () => {
  return (
    <>
        <Header /> 
          <SContainer>
              <LeftBar />
              <Main />
              <RightBar/>
          </SContainer>
    </>
  );
};

const SContainer = styled.div` 
    display: flex;
    width: 100%;
`

