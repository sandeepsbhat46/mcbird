import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDKpARIp3lWnLC0zlJOtsfffKvw3ez0myc",
    authDomain: "mcbird-27b34.firebaseapp.com",
    projectId: "mcbird-27b34",
    storageBucket: "mcbird-27b34.appspot.com",
    messagingSenderId: "441773374422",
    appId: "1:441773374422:web:c72c2b4fd19bc51fb1c277"
};

const fire = firebase.initializeApp(config);
export default fire;