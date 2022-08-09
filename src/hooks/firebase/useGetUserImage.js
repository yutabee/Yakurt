

import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../firebase";

export const useGetUserImage = () => {
const [image, setImage] = useState();
 
useEffect(() => {
  const gsReference = ref(
  storage,
  'gs://yakurt-80e15.appspot.com/karsten-winegeart-5PVXkqt2s9k-unsplash.jpg'
  )
  
  getDownloadURL(gsReference)
  .then(url => {
    setImage(url)
  })
  .catch(err => console.log(err))
}, []); 
    
    return image;
}