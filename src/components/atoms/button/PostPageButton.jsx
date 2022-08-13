import { Button } from '@mui/material';
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';

export const PostPageButton = () => {
  const navigate = useNavigate();
  const handleSubmit = useCallback(() => {
    navigate('/post/create');
  // eslint-disable-next-line
  }, []);

  return (
     <Button variant='outlined'
      sx={{
        backgroundColor: ' rgba(211, 211, 211, 0.709)',
        margin: '0 10px',
      }}
      onClick={handleSubmit}>投稿する</Button>
    
  );
};
