import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeamList from "./components/TeamList";

function App() 
{
	return(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<TeamList/>}>
				
			</Route>
		</Routes>
	</BrowserRouter>)
	
}

export default App;
