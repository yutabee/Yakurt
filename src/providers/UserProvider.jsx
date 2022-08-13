import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const [user, setUser] = useState();
    // console.log(user);

    useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser({
        email: currentUser.email,
        uid: currentUser.uid,
        });
    });
        
    // eslint-disable-next-line
    }, []);

    const { children } = props;

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}