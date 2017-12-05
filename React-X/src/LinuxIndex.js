//引入 react
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AsyncLoader from "./AsyncLoader";
import axios from 'axios';


export default class Linux extends React.Component{
	constructor(props){
		super(props);
		this.state = {name:"吃鸡小分队"}
	}
	
	render(){
		return(
			
			<div className="linuxIndex">
			<h2 className="Title">吃鸡小分队</h2>
			    <ul>
			     <li>
			      <h4>吃鸡二哥</h4>
			      <span>阳涛同学</span>
			     </li>
			     <li>
			      <h4>吃鸡一哥</h4>
			      <span>李哥</span>
			     </li>
			     <li>
			      <h4>吃鸡三哥</h4>
			      <span>家乐同学</span>
			     </li>
			    </ul>
			</div>
			
		)
	}
	
	
}
