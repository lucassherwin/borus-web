import React, { useState } from 'react';
import { firestore } from '../firebase/firebase';
import firebase from '../firebase/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import PostCard from './PostCard';

export default function Home() {
  // const [posts, setPosts] = useState([]);

  const postsRef = firestore.collection('posts');
	const query = postsRef.orderBy('createdAt').limit(25);

	const [posts] = useCollectionData(query, { idField: 'id' });



	return (
		<div>
			<h1 style={{ color: '#00c5cd' }}>Borus</h1>
			<p style={{ textAlign: 'left' }}>Welcome to Borus</p>
      <div>
        {posts ? posts.map((post) => (<PostCard title={post.title} content={post.content} />)) : null}
      </div>
		</div>
	);
}
