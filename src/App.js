import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout"
import TeamList from "./components/TeamList";
import ApplicationPage from "./components/ApplicationPage";

function App() 
{
	return(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route index element={<TeamList/>}/>
				<Route path="application/:teamTitle/:openRole" element={<ApplicationPage/>}/>
			</Route>
		</Routes>
	</BrowserRouter>)
	
}

export default App;
