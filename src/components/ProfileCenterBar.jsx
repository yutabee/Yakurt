import React from 'react'
import styled from 'styled-components';
import { UserProfile } from './UserProfile';
import { UserStatus } from './UserStatus';

export const ProfileCenterBar = () => {

  return (   
          <SBox>
            <UserStatus/>
            <UserProfile  />
          </SBox>
  );
};

const SBox = styled.div`
    display: flex;
    flex: 50%;
    flex-direction: column;
`