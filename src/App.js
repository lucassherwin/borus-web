import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';
import firebase from './firebase/firebase';
import { auth, firestore, analytics } from './firebase/firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignIn from './components/SignIn.js';

export default function App() {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};
	// signed in user will be an object otherwise will be null
	const [user] = useAuthState(auth);

	return (
		<div>
			<h1>Borpus</h1>
			<SignIn signInWithGoogle={signInWithGoogle} />
		</div>
	);
}
