import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import './assets/css/App.css'
import Home from './pages/Home';


function App() {

	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</>
	)
}

export default App
