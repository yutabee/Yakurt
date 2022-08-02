import React from 'react'
import styled from 'styled-components';
import { ArticleCard } from './ArticleCard';

export const ArticleBox = () => {
  return (
    <>
      <SArticleBox>
        <ArticleCard />
      </SArticleBox>
    </>
  );
};

const SArticleBox = styled.div`
    display: flex;
    justify-content: center;
    flex: 50%;
    margin-top:   15px;
    height: 100vh;
`