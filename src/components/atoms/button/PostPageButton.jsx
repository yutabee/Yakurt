import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const PostPageButton = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/post/create');
  }

  return (
     <Button variant='outlined'
      sx={{
        backgroundColor: ' rgba(211, 211, 211, 0.709)',
        margin: '0 10px',
      }}
      onClick={handleSubmit}>投稿する</Button>
    
  );
};
