

import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { useGetUserProfile } from "./useGetUserProfile";

export const useGetUserImage = () => {
const userInfo = useGetUserProfile();
  const [image, setImage] = useState();

  console.log(userInfo);
 
useEffect(() => {
  const gsReference = ref(
  storage,
  `${userInfo.image}`
  )
  
  getDownloadURL(gsReference)
  .then(url => {
    setImage(url)
  })
  .catch(err => console.log(err))
}, [userInfo]); 
    
    return image;
}