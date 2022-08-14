import { collection, getDocs } from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../../firebase";

export const useGetAllPost = () => {
    const [posts, setPosts] = useState([]);
  
    const getAllPosts = useCallback(async () => {
        const postCollection = collection(db, "posts");
        await getDocs(postCollection).then((querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => doc.data()));
        }).catch((error) => console.log(error))
    }, []);

    
    return { posts , getAllPosts }
}