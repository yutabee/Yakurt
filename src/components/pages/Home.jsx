import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Posts } from '../organisms/post/Posts';
import { Footer } from '../layouts/Footer';
import { Header } from '../layouts/Header';
import { LeftBar } from '../organisms/LeftBar';
import { RightBar } from '../organisms/RightBar';
import { AuthContext } from '../../providers/UserProvider';


export const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
    {
      currentUser?(
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