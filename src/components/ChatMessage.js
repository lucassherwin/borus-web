import React from 'react';

export default function ChatMessage({ props }) {
	const { text, uid } = props.message;
	return (
		<div>
			<p>{text}</p>
		</div>
	);
}
