import React from 'react';
import { auth } from '../firebase/firebase.js';

export default function SignOut() {
	return (
		auth.currentUser && (
			<button className='sign-out' onClick={() => auth.signOut()}>
				Sign Out
			</button>
		)
	);
}
