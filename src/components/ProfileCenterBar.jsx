import React, { memo } from 'react'
import styled from 'styled-components';
import { UserProfile } from './UserProfile';
import { UserStatus } from './UserStatus';

export const ProfileCenterBar = memo(() => {

  return (   
          <SBox>
            <UserStatus/>
            <UserProfile  />
          </SBox>
  );
});

const SBox = styled.div`
    display: flex;
    flex: 50%;
    flex-direction: column;
`