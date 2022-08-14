import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGetAllPost } from '../../../hooks/firebase/useGetAllPosts';
import { useGetUserImage } from '../../../hooks/firebase/useGetUserImage';
import { Post } from './Post';

export const Posts = () => {
  const { posts, getAllPosts } = useGetAllPost();
  const { imageURL, getImageURL } = useGetUserImage();
  // console.log(posts);
  
  useEffect(() => {
    getAllPosts();
    getImageURL();
  // eslint-disable-next-line 
  }, []);

  return (
      <SBox>
        {
        posts.map((post) => (
          <Link  key={post.id} to={`/postdetail/${post.id}`} style={{ textDecoration: 'none' , color:'black' }}>
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            created_at={post.created_at}
            uid={post.uid}
            imageURL={imageURL}  
            />
            </Link>
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