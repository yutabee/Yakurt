import React from 'react'
import styled from 'styled-components';
import { ArticleComponent } from '../components/ArticleComponent';
import { Header } from '../components/Header';
import { LeftBar } from '../components/LeftBar';
import { RightBar } from '../components/RightBar';

export const Home = () => {
  return (
    <>
        <Header /> 
          <SHomeContainer>
              <LeftBar />
                <ArticleComponent />
              <RightBar/>
          </SHomeContainer>
    </>
  );
};

const SHomeContainer = styled.div` 
    display: flex;
    width: 100%;
`