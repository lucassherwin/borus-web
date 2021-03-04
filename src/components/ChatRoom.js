import React from 'react';
import { firestore } from '../firebase/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';

export default function ChatRoom() {
	const messagesRef = firestore.collection('messages');
	const query = messagesRef.orderBy('createdAt').limit(25);
	const [messages] = useCollectionData(query, { idField: 'id' });

	return (
		<div>
			{messages &&
				messages.map((msg) => <ChatMessage key={msg.id} message={msg.text} />)}
		</div>
	);
}
