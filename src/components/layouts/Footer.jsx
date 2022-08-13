import { memo } from 'react';
import styled from 'styled-components';

export const Footer = memo(() => {

  return (
          <SBox>
            <p>&copy; 2022  Yutabeee</p>
          </SBox>    
  );
})


const SBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(78, 148, 171);
    height: 80px;
    color: white;
    margin-top: 30px;
`