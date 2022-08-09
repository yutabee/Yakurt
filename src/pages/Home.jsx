import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Posts } from '../components/post/Posts';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { LeftBar } from '../components/LeftBar';
import { RightBar } from '../components/RightBar';
import { UserContext } from '../providers/UserProvider';

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