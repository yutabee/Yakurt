import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGetAllPost } from '../../../hooks/firebase/useGetAllPosts';
import { Post } from './Post';

export const Posts = () => {
  const { posts, getAllPosts } = useGetAllPost();
  
  useEffect(() => {
    getAllPosts();
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