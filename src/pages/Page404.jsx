import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Page404 = () => {
  return (
    <>
          <SBox>
            <h2>ページが見つかりません。</h2>
            <Link to='/'>トップに戻る</Link>
          </SBox>
    </>
  );
};

const SBox = styled.div`
  height: 100vh;
`
