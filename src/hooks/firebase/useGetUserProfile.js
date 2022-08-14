import { doc, getDoc } from "firebase/firestore";
import { useCallback, useContext, useState } from "react";
import { db } from "../../firebase";
import { AuthContext } from "../../providers/UserProvider";


export const useGetUserProfile = () => {
     //firebase provider
    const { currentUser } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});


    //認証済みユーザのプロフィールの取得
    const getUserProfile = useCallback(async () => {  
        const userDocRef = doc(db, 'users', currentUser.uid);
        await getDoc(userDocRef)
            .then((documentSnapshot) => documentSnapshot.data())
            .then((res) => setUserInfo({
                name: res.name,
                image: res.image,
                profile: res.profile,
            }))
            .catch((error) => console.log(error));
        // eslint-disable-next-line
        },[])
   
    return { userInfo , getUserProfile }    
}
       

    
