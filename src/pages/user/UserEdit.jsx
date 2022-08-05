import React from 'react'
import styled from 'styled-components';

export const UserEdit = () => {
  return (
      <>
        <SBox>
          <SContainer>
              <form action="">
                  <div>
                      <label htmlFor="">アイコン</label>
                      <input type="file" />
                  </div>
                  <div>
                      <label htmlFor="">ユーザー名</label>
                      <input type="text" />
                  </div>
                  <div>
                      <label htmlFor="">プロフィール</label>
                      <textarea type="text" />
                  </div>
              </form>
            </SContainer>
        </SBox>
    </>
  );
};

const SBox = styled.div`
    height: 100vh;
`

const SContainer = styled.div`
    background-color: white;
    margin: 15px;
`
