import React from 'react'
import styled from 'styled-components';
import { useGetUserProfile } from '../hooks/firebase/useGetUserProfile';
import { UserEdit } from './user/UserEdit';
import { UserProfile } from './UserProfile';
import { UserStatus } from './UserStatus';

export const ProfileCenterBar = (props) => {
  const { profileEditIsOpen } = props;
  const userInfo = useGetUserProfile();
  console.log(userInfo);

  return (
      <>
          <SBox>
              <UserStatus />
              {profileEditIsOpen?( <UserProfile userInfo={userInfo} />):(<UserEdit/>)}
          </SBox>
    </>
  );
};

const SBox = styled.div`
    display: flex;
    flex: 50%;
    flex-direction: column;
`