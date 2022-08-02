import React from 'react'
import styled from 'styled-components';

export const RightBar = () => {
  return (
      <>
          <SRightBarBox>
              RightBar  
          </SRightBarBox>
    </>
  );
};

const SRightBarBox = styled.div`
    background-color: lightblue;
    flex: 20%;
    height: 100vh;
`