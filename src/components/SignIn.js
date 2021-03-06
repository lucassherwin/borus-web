import React from 'react';
import firebase from '../firebase/firebase';
import { auth } from '../firebase/firebase';

export default function SignIn() {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<>
			<button className='sign-in' onClick={signInWithGoogle}>
				Sign in with Google
			</button>
		</>
	);
}
