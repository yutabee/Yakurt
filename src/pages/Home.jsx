import React from 'react'
import styled from 'styled-components';
import { ArticleBox } from '../components/ArticleBox';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';

import { LeftBar } from '../components/LeftBar';
import { RightBar } from '../components/RightBar';

export const Home = () => {
  return (
    <>
      <Header /> 
        <SContainer>
           <LeftBar />
           <ArticleBox />
           <RightBar />
        </SContainer>
      <Footer/>
    </>
  );
};

const SContainer = styled.div` 
    display: flex;
    width: 100%;
`