import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';

const PostDetail = () => {
  const { postId } = useParams();
  const [postDetail, setPostDetail] = useState();

  useEffect(() => {
    const getPostDetail = async () => {
        const q = query(collection(db, "posts"), where("id", "==", postId));
      await getDocs(q).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
          setPostDetail(doc.data());
        })
        });
      } 
    getPostDetail();
    // eslint-disable-next-line
    },[])

  return (
    <div>
      {postDetail?(postDetail.content):('Loading....now')}
    </div>
  )
}

export default PostDetail
