import { onAuthStateChanged } from "firebase/auth";
import { createContext,  useCallback,  useEffect, useState } from "react";
import { auth} from "../firebase";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const { children } = props;

    const [currentUser, setCurrentUser] = useState(null);
    // console.log(user);

     useEffect(() => {
         onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser({
                email: currentUser.email,
                uid: currentUser.uid,
            })
    });
    // eslint-disable-next-line
     }, []);
      
    const signout = useCallback(async () => {
        await auth.signOut()
        // auth.onAuthStateChanged(user => setCurrentUser(user))
    }, []);

    const signin = useCallback(async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password)
        // auth.onAuthStateChanged(user => setCurrentUser(user))
    }, []);

    const signup = useCallback(async (email, password) => {
        await auth.createUserWithEmailAndPassword(email, password)
        // auth.onAuthStateChanged(user => setCurrentUser(user))
    }, []);


    return (
        <AuthContext.Provider value={{currentUser ,setCurrentUser, signout, signin, signup}}>
            {children}
        </AuthContext.Provider>
    )
}