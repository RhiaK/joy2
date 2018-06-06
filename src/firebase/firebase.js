import * as firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();

export const database = firebase.database().ref('/posts'); //automatically creates the db this way
export { auth };