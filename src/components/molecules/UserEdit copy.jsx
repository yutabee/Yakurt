import { Box, Button } from '@mui/material';
import { doc, serverTimestamp, setDoc, updateDoc, } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { db, storage } from '../../firebase';
import { ref, uploadBytes } from "firebase/storage";
import { useGetUserProfile } from '../../hooks/useGetUserProfile';
import { uuidv4 } from '@firebase/util';
import { AuthContext } from '../../providers/UserProvider';

const initialState = {
  file: null,
}

export const UserEdit = () => {
    //firebase provider
    const { currentUser } = useContext(AuthContext);
    //currentUser form の取得
    const [userImage, setUserImage] = useState(initialState);

    //認証ユーザーのプロファイル情報を取得
    const { userInfo , getUserProfile } = useGetUserProfile();
    //imagefileの取得
    const handleImage = (e) => {
        setUserImage(e.target.files[0]);
    }

    useEffect(() => {
      getUserProfile();
    // eslint-disable-next-line
    }, []);
  
    //フォーム送信のイベントハンドラ
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      //firestorageに保存
        if (userImage) {
            const ext = userImage.name.split('.').pop();   //拡張子を取得 
            const hashName = uuidv4();    //ユニークなファイル名を生成
            const fullPath = `gs://yakurt-80e15.appspot.com/${hashName} .${ext}`;  //imageのpathを作成  
            const imageRef = ref(storage, fullPath);     //storagerefを作成
          await uploadBytes( imageRef , userImage )
            .then(snapshot => {                   //firestorageにアップロード
                console.log("Uploaded a file!", snapshot)
            });
           
       //firestoreにファイル名を保存
            if (userInfo) {     
              const docRef = doc(db, 'users', currentUser.uid); 
              await updateDoc(docRef, {                         
                image: fullPath,                            
                updatedAt: serverTimestamp()                    
              });
              } else {
              const docRef = doc(db, 'users', currentUser.uid); 
              await setDoc(docRef, {
              uid:currentUser.uid,
              image: fullPath,
              createdAt: serverTimestamp()
              });      
              }
          }
        
    };
    

  return (
        <Box sx={{flex: '50%', margin:'15px',}}>
          <SContainer>
              <form onSubmit={handleSubmit}>
                  <Box sx={{ margin:'15px' }}>
                      <input
                        id="image"
                        type="file"
                        accept="image/*"  
                        onChange={handleImage}
                        style={{ display: "none" }}  
                        />
                        <label htmlFor="image">
                        <Button variant="outlined"  component="span">
                            画像を選択
                        </Button>
                        </label>
                  </Box>
                     <Button variant='outlined' type="submit">保存</Button>  
              </form>
            </SContainer>
        </Box>

  );
};

const SContainer = styled.div`
    background-color: white;
    padding: 15px;
`
