import { doc, getDoc } from "firebase/firestore";
import { useCallback, useContext, useState } from "react";
import { db } from "../../firebase";
import { UserContext } from "../../providers/UserProvider";

export const useGetUserProfile = () => {
     //firebase provider
    const { user } = useContext(UserContext);
    const [userInfo, setUserInfo] = useState({});

    console.log(userInfo);

    //認証済みユーザのプロフィールの取得
        const getUserProfile = useCallback( async () => {
            const userDocRef = doc(db, 'users', user.uid);
            await getDoc(userDocRef).then((documentSnapshot) => {
                return documentSnapshot.data();
            }).then((res) => setUserInfo({
                name: res.name,
                image: res.image,
                profile: res.profile,
                uuid: user.uuid,
            }))
            .catch((error) => console.log(error));
        },[user])
   
    return { userInfo , getUserProfile }    
}
       

    
