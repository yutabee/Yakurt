import { Button } from '@mui/material';
import { doc, serverTimestamp, setDoc, updateDoc, } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { db, storage } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';
import { ref, uploadBytes } from "firebase/storage";
import { useGetUserProfile } from '../../hooks/firebase/useGetUserProfile';


export const UserEdit = () => {
    //firebase provider
    const { user } = useContext(UserContext);
    //user form の取得
    const [userImage, setUserImage] = useState();
    const [userName, setUserName] = useState();
    const [userProfile, setUserProfile] = useState();

    //認証ユーザーのプロファイル情報を取得
    const userInfo = useGetUserProfile();

    //imagefileの取得
    const handleImage = (e) => {
        if (e.target.files !== null) {
            setUserImage(e.target.files[0]);
        }
    }
   //userNameの取得
    const handleUserName = (e) => {
        if (e.target.value!==null){
            setUserName(e.target.value);
        }
    }
    //userProfileの取得
    const handleUserProfile = (e) => {
        if (e.target.value !==null){
            setUserProfile(e.target.value);
        }
    }

    //フォーム送信のイベントハンドラ
    const handleSubmit = async (e) => {
         e.preventDefault();
        try {
            //画像のアップロード
            if (userImage) {
            const imageRef = ref(storage, userImage.name);
            uploadBytes(imageRef, userImage).then(snapshot => {
            console.log("Uploaded a file!", snapshot)
                })
            }
        //ユーザープロフィールのアップロード
        if (userInfo) {
            const userDocumentRef = doc(db, 'users', user.uid);
            await updateDoc(userDocumentRef, {    
            name: userName,
            profile: userProfile,
            image: userImage.name,
            timpstamp: serverTimestamp(),
             });
        } else {
            const userDocumentRef =  doc(db, 'users', user.uid);
            await setDoc(userDocumentRef, {
            uid:user.uid,
            name: userName,
            profile: userProfile,
            image: userImage.name,
            timpstamp: serverTimestamp(),
            });  
        }    
        } catch (error) {
            console.log(error);
        }
    };
    

  return (
      <>
        <SBox>
          <SContainer>
              <form action="" onSubmit={handleSubmit}>
                  <SInputBox>
                      <input
                        id="image"
                        type="file"
                        accept="image/*"  
                        onChange={handleImage}
                        style={{ display: "none" }}  
                        />
                        <label htmlFor="image">
                        <Button variant="contained" color="primary" component="span">
                            画像を選択
                        </Button>
                        </label>
                  </SInputBox>
                  <SInputBox>
                    <input
                        id="nameInput"
                        name='userName'   
                        // placeholder={userInfo.name} 
                        onChange={handleUserName}
                        />
                  </SInputBox>
                  <SInputBox>
                  <input
                    id="profileInput"
                    name='userProfile' 
                    // placeholder={userInfo.profile}            
                    onChange={handleUserProfile}
                  />
                  </SInputBox>
                <SInputBox>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"          
                    sx={{ mt: 3, mb: 2 }}
                >
                    保存
                </Button>
                </SInputBox>    
              </form>
            </SContainer>
        </SBox>
    </>
  );
};

const SBox = styled.div`
    height: 100vh;
`

const SContainer = styled.div`
    background-color: white;
    margin: 15px;
`

const SInputBox = styled.div`
    margin: 15px 15px;
`
