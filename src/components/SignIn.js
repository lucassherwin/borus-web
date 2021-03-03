import React from 'react';

export default function signIn({ signInWithGoogle }) {
	return (
		<div>
			<button onClick={signInWithGoogle}>Sign in with Google</button>
		</div>
	);
}
