import React, { useState } from 'react'
import styled from 'styled-components';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { LeftBar } from '../components/LeftBar';
import { ProfileCenterBar } from '../components/ProfileCenterBar';
import { RightBar } from '../components/RightBar';

export const Profile = () => {
  const [profileEditIsOpen, setProfileEditIsOpen] = useState(true);
  const userEditSet = () => {
    setProfileEditIsOpen(!profileEditIsOpen);
  }

  return (
    <>
      <Header /> 
          <SContainer>
            <LeftBar userEditSet={userEditSet} />
            <ProfileCenterBar profileEditIsOpen={profileEditIsOpen} setProfileEditIsOpen={setProfileEditIsOpen} />
            <RightBar/>
          </SContainer>
      <Footer />
    </>
  );
};

const SContainer = styled.div` 
    display: flex;
    width: 100%;
`

