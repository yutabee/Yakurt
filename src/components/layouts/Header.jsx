import { Avatar } from '@mui/material';
import React, { memo, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGetUserImage } from '../../hooks/useGetUserImage';
import { LogOutButton } from '../atoms/button/LogOutButton';
import { PostPageButton } from '../atoms/button/PostPageButton';


export const Header = memo(() => {
  const { imageURL, getImageURL } = useGetUserImage();
  
  useEffect(() => {
    getImageURL();
  // eslint-disable-next-line
  },[])
  

  return (
    <>
      <SBox>
        <SContainer>
          <SLeftBox >
            <Link to='/' style={{ textDecoration: 'none' }}>
            <SLogo>Yakurt</SLogo>
            </Link>
          </SLeftBox>
          <SRightBox>
            <PostPageButton/>
            <LogOutButton />
            <Link to='/profile'>
              {imageURL ? (
               <SImg src={imageURL} alt='profileImg' />
              ) : (
                <Avatar/>
              )}
            </Link>
          </SRightBox>
          </SContainer>
       </SBox>
    </>
  );
})

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