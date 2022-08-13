import { Box, Button, TextField, Typography, } from '@mui/material'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { db } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';
import { Header } from '../common/Header';
import { uuidv4 } from '@firebase/util';
import { useNavigate } from 'react-router-dom';

export const PostCreate = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errMessage, setErrMessage] = useState(false);

    const { user } = useContext(UserContext);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

          if (title && content) {
            try {
                const DocRef = collection(db, 'posts');
                await addDoc(DocRef, {
                    id:uuidv4(),
                    title: title,
                    content: content,
                    uid:user.uid,
                    created_at: serverTimestamp(),
                })
                setContent('');
                setTitle('');
                navigate('/');
            } catch (error) {
                console.log(error);
            }
        } else {
            setErrMessage(true);
            setTimeout(()=>setErrMessage(false), 3000);
        }   

    }

  return (
      <Box sx={{ height: '100vh' }} >
        <Header />
        <form onSubmit={onSubmit}>
            <Box><Typography variant="h6" color="initial">Title</Typography></Box>  
        <Box >
            <TextField
            id='postTitle'
            defaultValue={null}
            multiline
            name='title'          
            rows={1}
            sx={{ width: 600 }}
            onChange={handleTitle}      
            />
          </Box>
        <Box><Typography variant="h6" color="initial">Content</Typography></Box>    
        <Box>
            <TextField
            id="postContent"
            multiline      
            rows={20}  
            name='content'          
            defaultValue={null}
            sx={{ width: 600 }}  
            onChange={handleContent}      
            />
        </Box>
            {
                errMessage ?
                (<Button variant="outlined" color="error">内容が入力されていません！</Button>)
                : (null)
            }
            <Button type='submit' variant="outlined" sx={{ margin:'10px' }}>投稿</Button>
        </form>    
    </Box>     
  );
};
