import React from 'react'
import styled from 'styled-components';

export const Header = () => {
  return (
    <>
      <SBox>
        <SContainer>
            <SLeftBox >
              <SLogo>Yakurt</SLogo>        
            </SLeftBox>
                <SImg src='images/bulldog.jpg' alt='profileImg'></SImg>
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
`

const SImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 9999px;
    margin-top: 15px;
`

const SLogo = styled.h1`
    color: white;
    opacity: 0.8;
    height: calc(100vh - 50px);
`