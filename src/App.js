import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';
import { auth, firestore, analytics, firebase } from './firebase/firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function App() {
	return (
		<div>
			<h1>Borpus</h1>
		</div>
	);
}
