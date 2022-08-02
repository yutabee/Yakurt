import React from 'react'
import styled from 'styled-components';
import { ArticleCard } from './ArticleCard';

export const ArticleBox = () => {
  return (
    <>
      <SBox>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </SBox>
    </>
  );
};

const SBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 50%;
    margin-right: 15px;
`