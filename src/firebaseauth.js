import withFirebaseAuth from 'react-with-firebase-auth';
//import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../src/firebaseConfig';

import firebase from 'firebase/app'


const app = firebase.initializeApp(firebaseConfig);



export const auth = app.auth()
export default app
