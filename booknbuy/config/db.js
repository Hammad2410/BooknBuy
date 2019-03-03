import * as firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyDmlebcAgjRpKEJKr0THzmyddI5oGdnEvY",
    authDomain: "booknbuy-2410.firebaseapp.com",
    databaseURL: "https://booknbuy-2410.firebaseio.com",
    projectId: "booknbuy-2410",
    storageBucket: "booknbuy-2410.appspot.com",
    messagingSenderId: "89815765550"
};
 

export const db= !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
