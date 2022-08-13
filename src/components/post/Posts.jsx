import { collection,  getDocs,} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { db } from '../../firebase';
import { Post } from './Post';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
        const postCollection = collection(db, "posts");
          await getDocs(postCollection).then((querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => doc.data()));
          }).catch((error) =>console.log(error))
        }
        getPosts();      
     // eslint-disable-next-line
    }, []);  
  
  // console.log(posts);

  return (
      <SBox>
        {
        posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            created_at={post.created_at}
            uid={post.uid}
          />
          ))}
      </SBox>
  );
};

const SBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 50%;
    margin-right: 15px;
`