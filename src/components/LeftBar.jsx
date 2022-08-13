import React, { memo } from 'react'
import styled from 'styled-components';
import { UserCard } from './UserCard';

export const LeftBar = memo((props) => {

  const { userEditSet } = props;
  return (
    <>
      <LeftBarBox>
        <SContainer>
          <UserCard userEditSet={userEditSet} ></UserCard>
        </SContainer>
      </LeftBarBox>
    </>
  );
});

const LeftBarBox = styled.div`
    flex: 25%;
    height: 100vh;
`

const SContainer = styled.div`
  margin: 15px 15px;
  background-color: lightslategrey;
`