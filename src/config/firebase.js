import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc ,doc,collection} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDNU-ijs6oA4t_AOz1jM-v80XU9y_hvxx8",
  authDomain: "chat-app-gs-fd5a0.firebaseapp.com",
  projectId: "chat-app-gs-fd5a0",
  storageBucket: "chat-app-gs-fd5a0.appspot.com",
  messagingSenderId: "812873589178",
  appId: "1:812873589178:web:96d044c8be9b2f721abd83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email,password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, There i am using chat app",
            lastSeen:Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
            chatData:[]
        })
    } catch(error){
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
        throw error;//changes made by codeium
    }
}

const login = async (email,password) => {
    try{
        await signInWithEmailAndPassword(auth,email,password);
    } catch(error){
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
      //  throw error;//changes made by codeium
    }
}

const logout = async () => {
    try{
        await signOut(auth);
    } catch(error){
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

export {signup,login,logout,auth,db}