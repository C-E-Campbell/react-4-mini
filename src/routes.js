import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import TopicList from "./Components/TopicList/TopicList";

export default (
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/topics' component={TopicList} />
	</Switch>
);
