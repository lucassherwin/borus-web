import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyDY_WYuHQ5L4JwBrAMJ8uuEboA_7T0-584',
	authDomain: 'borus-42afe.firebaseapp.com',
	projectId: 'borus-42afe',
	storageBucket: 'borus-42afe.appspot.com',
	messagingSenderId: '1078156072467',
	appId: '1:1078156072467:web:2af0cd0002cfb442d411e6',
	measurementId: 'G-JDJDZNPKS0',
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

export { auth, firestore, analytics, firebase as default };
