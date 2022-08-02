import React from 'react'
import styled from 'styled-components';

export const Header = () => {
  return (
    <>
      <SHeader>
        <SContainer>
          <SLightBox >
              <SLogo>Yakurt</SLogo>        
            </SLightBox>
          </SContainer>
       </SHeader>
    </>
  );
};


const SHeader = styled.div`
    background-color: rgb(78, 148, 171);
    height: 80px;
`
const SContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 20px;
`

const SLightBox = styled.div`
    display: flex;
`

const SLogo = styled.h1`
    color: white;
    opacity: 0.8;
    height: calc(100vh - 50px);
`