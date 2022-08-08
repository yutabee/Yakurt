import { Button } from '@mui/material';
import { doc, getDoc, serverTimestamp, setDoc, updateDoc, } from 'firebase/firestore';
import React, { useContext,  useEffect,  useState } from 'react'
import styled from 'styled-components';
import { db } from '../../firebase';
import { UserContext } from '../../providers/UserProvider';


export const UserEdit = () => {
    //firebase provider
    const { user } = useContext(UserContext);
    //user form の取得
    const [userImage, setUserImage] = useState();
    const [userName, setUserName] = useState();
    const [userProfile, setUserProfile] = useState();
    const [userInfo, setUserInfo] = useState();

    //認証済みユーザのプロフィールの取得
    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const userDocRef = doc(db, 'users', user.uid);
                const data = await getDoc(userDocRef).then((documentSnapshot) => {
                    return documentSnapshot.data()
                })
                // console.log(data);
                setUserInfo({
                    name: data.name,
                    image: data.image,
                    profile: data.profile,
                });
            } catch (err) {
                console.log(err);
            } 
        }
        getUserProfile();
        // eslint-disable-next-line
    }, []);

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
        try {
            e.preventDefault();
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
                        defaultValue={userInfo.name}      
                        onChange={handleUserName}
                        />
                  </SInputBox>
                  <SInputBox>
                  <input
                    id="profileInput"
                    name='userProfile'
                    defaultValue={userInfo.profile}          
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
