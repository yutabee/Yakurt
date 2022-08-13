import { Box, Button,TextField } from '@mui/material';
import { doc, serverTimestamp, setDoc, updateDoc, } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { db, storage } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';
import { ref, uploadBytes } from "firebase/storage";
import { useGetUserProfile } from '../../hooks/firebase/useGetUserProfile';
import { uuidv4 } from '@firebase/util';
// import { uuidv4 } from '@firebase/util';

const initialState = {
  file: null,
}

export const UserEdit = () => {
    //firebase provider
    const { user } = useContext(UserContext);

    //user form の取得
    const [userImage, setUserImage] = useState(initialState);
    const [userName, setUserName] = useState('');
    const [userProfile, setUserProfile] = useState('');

    //認証ユーザーのプロファイル情報を取得
    const userInfo = useGetUserProfile();
    
    //imagefileの取得
    const handleImage = (e) => {
        setUserImage(e.target.files[0]);
    }

   //userNameの取得
    const handleUserName = (e) => {
         setUserName(e.target.value); 
    }
    //userProfileの取得
    const handleUserProfile = (e) => {
       setUserProfile(e.target.value);
    }

    //フォーム送信のイベントハンドラ
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //画像のアップロード
            if (userImage) {
                const ext = userImage.name.split('.').pop();   //拡張子を取得 
                const hashName = uuidv4();    //ユニークなファイル名を生成
                const fullPath = `gs://yakurt-80e15.appspot.com/${hashName} .${ext}`;  //imageのpathを作成  
                const imageRef = ref(storage, fullPath);     //storagerefを作成
                
                await uploadBytes(imageRef, userImage).then(snapshot => {  //firestorageにアップロード
                    console.log("Uploaded a file!", snapshot)
                });
                //cloud storageにファイル名を保存
                if (userInfo) {     
                const docRef = doc(db, 'users', user.uid);
                await updateDoc(docRef, {image: fullPath});
                } else {
                const docRef = doc(db, 'users', user.uid);
                await setDoc(docRef, {
                uid:user.uid,
                image: fullPath,
                });      
                }
            }
        //ユーザープロフィールのアップロード
        if (userInfo) {
            const docRef = doc(db, 'users', user.uid);
            await updateDoc(docRef, {   
            name: userName,
            profile: userProfile,
            updated_at: serverTimestamp(),
             });
        } else {
            const docRef =  doc(db, 'users', user.uid);
            await setDoc(docRef, {
            uid:user.uid,
            name: userName,
            profile: userProfile,
            created_at: serverTimestamp(),
            });  
        }    
        } catch (error) {
            console.log(error);
        }
    };
    

  return (
      <>
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
                  <Box sx={{ margin:'15px' }}>
                  <TextField
                    id="nameInput"
                    defaultValue={userInfo.name}          
                    onChange={handleUserName}
                    >{userInfo.name}</TextField>
                          
                  </Box>
                  <Box sx={{ margin:'15px' }}>
                  <TextField
                    id="profileInput"
                    defaultValue={userInfo.profile}          
                    onChange={handleUserProfile}
                          >{userInfo.profile}</TextField>
                </Box>
                <Box sx={{ margin:'15px' }}>        
                     <Button variant='outlined' type="submit">保存</Button>
                </Box>    
              </form>
            </SContainer>
        </Box>
    </>
  );
};


const SContainer = styled.div`
    background-color: white;
    padding: 15px;
`
