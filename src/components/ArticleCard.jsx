import React from 'react'
import styled from 'styled-components';

export const ArticleCard = () => {
  return (
    <>
      <SCard>
         <SImgBox>
              <SImg src='images/bulldog.jpg' alt='profileImg'></SImg>
              <p>@Yutabeee</p>
        </SImgBox>
        <SContent>
          <STitle>ジャヌビアとトラゼンタの違い３時間語ったみた</STitle>
          <p>DPP-IV阻害剤のトラゼンタが発売されましたね。
            トラゼンタは今までのDPP-IV阻害剤と違い胆汁排泄されるため、
            腎機能の悪い患者でも利用することができます。
            新薬トラゼンタの魅力について語っていきましょう。
          </p>
        </SContent>
      </SCard>
    </>
  );
};

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