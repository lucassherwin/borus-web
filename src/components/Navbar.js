import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	const link = {
		width: '100px',
		adding: '12px',
		margin: '0 6px 6px',
		background: 'blue',
		textDecoration: 'none',
		color: 'white',
	};

	return (
		<div className='navbar'>
			<NavLink
				to='/'
				exact
				style={link}
				activeStyle={{ background: 'darkblue' }}
			>
				Home
			</NavLink>
			<NavLink
				to='/chat'
				exact
				style={link}
				activeStyle={{ background: 'darkblue' }}
			>
				Chat
			</NavLink>
			<NavLink
				to='/factions'
				exact
				style={link}
				activeStyle={{ background: 'darkblue' }}
			>
				Factions
			</NavLink>
			<NavLink
				to='/wallet'
				exact
				style={link}
				activeStyle={{ background: 'darkblue' }}
			>
				Wallet
			</NavLink>
			<NavLink
				to='/history'
				exact
				style={link}
				activeStyle={{ background: 'darkblue' }}
			>
				History
			</NavLink>
		</div>
	);
}
