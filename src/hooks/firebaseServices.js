import { ref, uploadBytesResumable } from "firebase/storage";
import { auth, storage } from "../firebase";


export function uploadToFirebaseStorage(file, filename) {
    const user = auth.currentUser;
    const storageRef = ref(storage `${user.uid}/user_images/${filename}`);
    return uploadBytesResumable(storageRef, file);
}