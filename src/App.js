import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout"
import TeamList from "./components/TeamList";
import ApplicationPage from "./components/ApplicationPage";
import PendingApplications from "./components/PendingApplications";

function App() 
{
	return(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route index element={<TeamList/>}/>
				<Route path="application/:teamID/:role" element={<ApplicationPage/>}/>
				<Route path="pending-applications" element={<PendingApplications/>}/>
			</Route>
		</Routes>
	</BrowserRouter>)
	
}

export default App;
