import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { useGetUserProfile } from "./useGetUserProfile";

export const useGetUserImage = () => {

  const { userInfo } = useGetUserProfile({});
  const [image, setImage] = useState('');

  // console.log(userInfo.image);
 
  useEffect(() => {
    const getURL = async () => {
      const gsReference = ref(storage, userInfo.image);
      await getDownloadURL(gsReference)
        .then((url) => setImage(url))
        .catch((error) => console.log(error));
    }
    getURL();
   // eslint-disable-next-line 
  }, []); 
    
  return { image };
}