import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SButton } from '../atoms/button/BaseButton';
import { LogOutButton } from '../atoms/button/LogOutButton';
import Search from '../atoms/search/Search';

export const Header = () => {
  return (
    <>
      <SBox>
        <SContainer>
          <SLeftBox >
             <Link to='/' style={{ textDecoration: 'none' }}>
              <SLogo>Yakurt</SLogo>
            </Link>
             <Search/>
          </SLeftBox>
          <SRightBox>
            <SButton>投稿する</SButton>
            <LogOutButton></LogOutButton>
            <SImg src='images/bulldog.jpg' alt='profileImg' />
          </SRightBox>
          </SContainer>
       </SBox>
    </>
  );
};


const SBox = styled.div`
    background-color: rgb(78, 148, 171);
    height: 80px;
`
const SContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 20px;
`

const SLeftBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SRightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 999px;
`

const SLogo = styled.h1`
    color: white;
    margin-right: 40px;
`