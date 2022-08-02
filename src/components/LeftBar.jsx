import React from 'react'
import styled from 'styled-components';
import { UserCard } from './UserCard';

export const LeftBar = () => {
  return (
    <>
      <LeftBarBox>
        <SContainer>
          <UserCard></UserCard>
        </SContainer>
      </LeftBarBox>
    </>
  );
};

const LeftBarBox = styled.div`
    flex: 25%;
    height: 100vh;
`

const SContainer = styled.div`
  margin: 15px 15px;
  background-color: lightslategrey;
`