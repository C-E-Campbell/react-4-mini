import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import Routes from "./routes";
import Nav from "./Components/Nav/Nav";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Router>
				<div className='App'>
					<Nav />
					{Routes}
				</div>
			</Router>
		);
	}
}

export default App;
