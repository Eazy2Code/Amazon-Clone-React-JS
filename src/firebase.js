import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAAZFcciSgydcKeYxQuazTfOXc0PLQ8HN0",
     	authDomain: "clone-test-yt.firebaseapp.com",
       	projectId: "clone-test-yt",
        storageBucket: "clone-test-yt.appspot.com",
       	messagingSenderId: "874549992118",
        appId: "1:874549992118:web:be5471de783b4ff93e2417",
        measurementId: "G-64KYL64B52"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
