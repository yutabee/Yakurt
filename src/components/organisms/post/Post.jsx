import { Avatar } from '@mui/material';
import React, { memo } from 'react'
import styled from 'styled-components';

export const Post = memo((props) => {
  const { title, content, imageURL, username } = props;
  // console.log(props);

  return (
      <SCard>
      <SImgBox>
        {imageURL ?
          (<SImg src={imageURL} alt='profileImg'/>) :
          (<Avatar/>)
        }   
          <p>@{username}</p>
          </SImgBox>
          <SContent>
          <STitle>{title}</STitle>
          <div>{content.slice(0,140)}</div>
        </SContent>
      </SCard>
  );
})

const SCard = styled.div`
  display: flex;
  width: 100%;
  margin-right: 15px;
  margin-top: 15px;
  background-color: white;
  height: 200px;
`

const SImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 20px;
  margin-left: 20px;
`

const SImg = styled.img`
    height: 70px;
    width: 70px;
    margin-bottom: -10px;
    border-radius: 9999px;
`

const SContent = styled.div`
    text-align: left;
    margin: 0 30px;
`

const STitle = styled.h3`
    text-align: left;
    border-bottom: 1px solid black;
`