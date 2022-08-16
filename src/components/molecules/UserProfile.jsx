import React, { memo, useEffect } from 'react'
import styled from 'styled-components';
import { useGetUserProfile } from '../../hooks/useGetUserProfile';

export const UserProfile = memo(() => {
  const { userInfo, getUserProfile } = useGetUserProfile();
  
  useEffect(() => {
    getUserProfile();
  // eslint-disable-next-line
  }, []);

  return (
        <SBox>
              <STitle>Profile</STitle>
              <p>{userInfo.name}</p>
              <SSubTitle>経歴</SSubTitle>
              <p>{userInfo.profile}</p>
              <SSubTitle>趣味</SSubTitle>
              <p>{userInfo.profile}</p>
        </SBox>
  );
})

const SBox = styled.div`
    background-color: white;
    margin-top: 15px;
    margin-right: 15px;   
`

const STitle = styled.h2`
    border-bottom: 1px solid black;
    margin-right: 30px;
    margin-left: 30px;
`

const SSubTitle = styled.h3`
    border-bottom: 1px solid black;
    margin-right: 30px;
    margin-left: 30px;
`