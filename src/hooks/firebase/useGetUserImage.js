import { getDownloadURL, ref } from "firebase/storage";
import { useCallback, useState } from "react";
import { storage } from "../../firebase";
import { useGetUserProfile } from "./useGetUserProfile";

export const useGetUserImage = () => {
  const [imageURL, setImage] = useState();
  const { userInfo } = useGetUserProfile();
 

    const getImageURL = useCallback( async () => {
      const gsReference = ref(storage, userInfo.image);
      await getDownloadURL(gsReference)
        .then((url) => setImage(url))
        .catch((error) => console.log(error));
    // eslint-disable-next-line
    },[])

  return { imageURL, getImageURL }
  
}
    