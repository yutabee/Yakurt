import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGetUserImage } from '../hooks/firebase/useGetUserImage';
import { UserContext } from '../providers/UserProvider';

export const UserCard = () => {
    const { user } = useContext(UserContext);
    const image = useGetUserImage();

  return (
    <>
          <SUserCardBox>
              <SImgBox>
                  <Link to='/profile'>
                    <SImg src={`${image}`} alt='profileImg'></SImg>
                   </Link>
                  <p>{user.displayName}</p>
                  <p>{user.email}</p>
              </SImgBox>
              <SContent>
                  <p>23contributes</p>
                  <Sinfo>
                      <p>15post</p>
                      <p>23follow</p>
                      <p>23follower</p>
                  </Sinfo>
                  <SButtonBox>
                      <Link to='profile/edit' style={{ textDecoration:'none' }}>
                          <Button variant="outlined" >編集する</Button>
                      </Link>
                </SButtonBox>
              </SContent>
          </SUserCardBox>
    </>
  );
};

const SUserCardBox = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const SImg = styled.img`
    height: 70px;
    width: 70px;
    margin-bottom: -10px;
    border-radius: 9999px;
`

const SContent = styled.div`
    margin: 10px 10px;
    width: 90%;
`

const Sinfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
    border-top: 1px solid black;
`

const SButtonBox = styled.div`
    margin: 10px 0;
`