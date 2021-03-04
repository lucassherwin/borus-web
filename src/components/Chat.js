import React from 'react';
// import './App.css';

import { auth } from '../firebase/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './SignIn';
import SignOut from './SignOut';
import ChatRoom from './ChatRoom';

function App() {
	const [user] = useAuthState(auth);

	return (
		<div className='Chat'>
			<header>
				<h1>Chat</h1>
				<SignOut />
			</header>

			<section>{user ? <ChatRoom /> : <SignIn />}</section>
		</div>
	);
}

export default App;
// chat code and css from here https://www.youtube.com/watch?v=zQyrwxMPm88
