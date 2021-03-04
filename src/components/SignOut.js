import React from 'react';
import { auth } from '../firebase/firebase.js';

export default function SignOut() {
	return (
		auth.currentUser && (
			<div>
				<button onClick={() => auth.signOut()}>Sign Out</button>
			</div>
		)
	);
}
