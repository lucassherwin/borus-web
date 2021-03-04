import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Factions from './components/Factions';
import Wallet from './components/Wallet';
import History from './components/History';

function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/chat'>
					<Chat />
				</Route>
				<Route exact path='/factions'>
					<Factions />
				</Route>
				<Route exact path='/wallet'>
					<Wallet />
				</Route>
				<Route exact path='/history'>
					<History />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
// chat code and css from here https://www.youtube.com/watch?v=zQyrwxMPm88
