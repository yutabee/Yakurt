import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";


export default function useGetAllUsers() {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const getAllUsers = async () => {
        const usersCollection = collection(db, "users");
            await getDocs(usersCollection)
            .then((querySnapshot) => {
            setAllUsers(querySnapshot.docs.map((doc) => doc.data()));
        })}
        getAllUsers();      
     // eslint-disable-next-line
    }, []);  

    return allUsers;
}
