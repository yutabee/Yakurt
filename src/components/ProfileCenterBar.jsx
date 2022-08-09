import React from 'react'
import styled from 'styled-components';
import { UserEdit } from './user/UserEdit';
import { UserProfile } from './UserProfile';
import { UserStatus } from './UserStatus';

export const ProfileCenterBar = (props) => {
  const { profileEditIsOpen , setProfileEditIsOpen } = props;

  return (
      <>
          <SBox>
            <UserStatus/>
             {profileEditIsOpen? (<UserProfile setProfileEditIsOpen={setProfileEditIsOpen} />):(<UserEdit setProfileEditIsOpen={setProfileEditIsOpen} />)}
          </SBox>
    </>
  );
};

const SBox = styled.div`
    display: flex;
    flex: 50%;
    flex-direction: column;
`