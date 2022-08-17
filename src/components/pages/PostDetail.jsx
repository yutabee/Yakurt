import { Favorite, Star } from '@mui/icons-material';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../../firebase';
import { Footer } from '../layouts/Footer';
import { Header } from '../layouts/Header';
import { LeftBar } from '../organisms/LeftBar';
import { RightBar } from '../organisms/RightBar';

const PostDetail = () => {
  const { postId } = useParams();
  const [postDetail, setPostDetail] = useState();

  useEffect(() => {
    const getPostDetail = async () => {
        const q = query(collection(db, "posts"), where("id", "==", postId));
      await getDocs(q).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
          setPostDetail(doc.data());
        })
        });
      } 
    getPostDetail();
    // eslint-disable-next-line
    },[])

  return (
    <>
      <Header />
          <SContainer>
              <LeftBar />
              <SPostBar>
                {
            postDetail ? (    
                    <div>
                
                <SHeader>
                  <h2>{postDetail.title}</h2>
                  <SIconBox>
                    <SIConButton><Favorite/></SIConButton>
                    <SIConButton> <Star /></SIConButton>  
                  </SIconBox>
                </SHeader>
                      <p>{postDetail.content}</p>
                    </div>
                ) :
                  ('Loading....now')
                }
               </SPostBar>
              <RightBar />
          </SContainer>
      <Footer/>
    </>

  )
}

const SContainer = styled.div`
  display:flex;
  width:100%;
`

const SPostBar = styled.div`
  flex:50%;
  padding: 40px;
  margin: 15px;
  background-color: white;
`

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`
const SIConButton = styled.div`
  background-color: none;
  border: none;
  margin: 0 10px;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
`

export default PostDetail
