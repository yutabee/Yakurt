import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase";


export default function useGetAllUsers() {
    const [ allUsers , setAllUsers ] = useState([]);


    const getAllUsers = async () => {
    const usersCollection = collection(db, "users");
            await getDocs(usersCollection)
                .then((querySnapshot) => {
                    setAllUsers(querySnapshot.docs.map((doc) => doc.data()))
                }).catch((error) => console.log(error));
    }  

    return { allUsers, getAllUsers }
    
} 
    
    

