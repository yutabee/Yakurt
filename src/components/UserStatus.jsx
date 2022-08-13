import React, { memo } from 'react'
import styled from 'styled-components';

export const UserStatus = memo(() => {
  return (
    <>
        <SBox>
            <SContainer>
                <SCategory>
                    <h3>投稿した記事</h3>
                    <p>抗腫瘍薬<span>30%</span></p>
                    <p>抗菌薬<span>23%</span></p>
                    <p>循環器<span>10%</span></p>
                    <p>糖尿病薬<span>8%</span></p>
                </SCategory>
                <SCategory>
                    <h3>いいねした記事</h3>
                    <p>抗腫瘍薬<span>30%</span></p>
                    <p>抗菌薬<span>23%</span></p>
                    <p>循環器<span>10%</span></p>
                    <p>糖尿病薬<span>8%</span></p>
                </SCategory>
                <SCategory>
                    <h3>レビューした記事</h3>
                    <p>抗腫瘍薬<span>30%</span></p>
                    <p>抗菌薬<span>23%</span></p>
                    <p>循環器<span>10%</span></p>
                    <p>糖尿病薬<span>8%</span></p>
                </SCategory>
            </SContainer>
        </SBox>
    </>
  );
})

const SBox = styled.div`
    flex: 50%;
    background-color: white;
    margin-top: 15px;
    margin-right: 15px;
    max-height: 42%;
`
const SContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const SCategory = styled.div`
    margin-top: 10px;
    margin-right: 10px;
`
