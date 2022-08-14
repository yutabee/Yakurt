import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Posts } from '../organisms/post/Posts';
import { Footer } from '../layouts/Footer';
import { Header } from '../layouts/Header';
import { LeftBar } from '../organisms/LeftBar';
import { RightBar } from '../organisms/RightBar';
import { UserContext } from '../../providers/UserProvider';

export const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <>
    {
      user?(
      <>
        <Header /> 
          <SContainer>
              <LeftBar />
              <Posts />
              <RightBar />
          </SContainer>
        <Footer/>
      </>
      ) : (
          <Navigate to='auth' />
      )}
    </>
  );
};

const SContainer = styled.div` 
    display: flex;
    width: 100%;
`