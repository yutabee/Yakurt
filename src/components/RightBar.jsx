import React from 'react'
import styled from 'styled-components';

export const RightBar = () => {
  return (
      <>
          <SBox>
              <SContainer>
                  <STitle>Top</STitle>
                  <p><SRank>1</SRank>ジャヌビア食べてみた</p>
                  <p><SRank>2</SRank>ジャヌビア食べてみた</p>
                  <p><SRank>3</SRank>ジャヌビア食べてみた</p>
                  <p><SRank>4</SRank>ジャヌビア食べてみた</p>
                  <p><SRank>5</SRank>ジャヌビア食べてみた</p>
                  <p><SRank>6</SRank>ジャヌビア食べてみた</p>
                  <p><SRank>7</SRank>ジャヌビア食べてみた</p>
                  <p><SRank>8</SRank>ジャヌビア食べてみた</p>
              </SContainer>
          </SBox>
    </>
  );
};

const SBox = styled.div`
    flex: 20%;
`
const STitle = styled.h2`
    border-bottom: 1px solid black;
    margin-right: 30px;
    margin-left: 30px;
`
const SRank = styled.span`
  margin-right: 20px;
  font-weight: bold;
`

const SContainer = styled.div`
  background-color: white;
  width: 95%;
  padding: 10px 0 20px 0;
  margin-top: 15px;
  margin-right: 15px;
`