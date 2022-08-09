import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import { UserContext } from "../../providers/UserProvider";

export const useGetUserProfile = () => {
     //firebase provider
    const { user } = useContext(UserContext);
    const [userInfo, setUserInfo] = useState({});

    //認証済みユーザのプロフィールの取得
    useEffect(() => {
        const getUserProfile = async () => {
            let data;
            try {
                const userDocRef = doc(db, 'users', user.uid);
                data = await getDoc(userDocRef).then((documentSnapshot) => {
                return documentSnapshot.data();
                });   
            } catch (error) {
                console.log(error);
            } finally {
                 setUserInfo({
                    name: data.name,
                    image: data.image,
                    profile: data.profile,
                });
            }
        }
        getUserProfile();
     // eslint-disable-next-line
    }, []);    

    return userInfo;
}