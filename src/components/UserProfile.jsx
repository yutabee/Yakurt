import React from 'react'
import styled from 'styled-components';

export const UserProfile = () => {
  return (
    <>
        <SBox>
              <STitle>Profile</STitle>
              <p>田丸 裕大</p>
              <SSubTitle>経歴</SSubTitle>
              <p>広島出身です。福岡の大規模急性期病院で勤務後プログラマーに転身。</p>
              <SSubTitle>趣味</SSubTitle>
              <p>キックボクシング、アコースティックギター、カレー</p>
        </SBox>
    </>
  );
};

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