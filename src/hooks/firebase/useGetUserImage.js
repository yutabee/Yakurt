import { getDownloadURL, ref } from "firebase/storage";
import { useCallback, useEffect, useState } from "react";
import { storage } from "../../firebase";
import { useGetUserProfile } from "./useGetUserProfile";
// import { useGetUserProfile } from "./useGetUserProfile";

export const useGetUserImage = () => {
  const { userInfo, getUserProfile } = useGetUserProfile();
  const [imageURL, setImage] = useState();

  // console.log(userInfo);
  
    useEffect(() => {
      getUserProfile();
    // eslint-disable-next-line
    }, [])
  
    const getImageURL = useCallback( async () => {
      const gsReference = ref(storage, userInfo.image);
      await getDownloadURL(gsReference)
        .then((url) => setImage(url))
        .catch((error) => console.log(error));
    // eslint-disable-next-line
    },[])

  return { imageURL, getImageURL }
  
}
    