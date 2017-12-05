import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './BasicExample';


export default class JiaLeQiDong extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {selet:false}
	}
	
	render(){
		return(
			<div>
			点击我启动单页面程序
			{this.state.selet ? <BasicExample/> :''}
			</div>
		)
	}
	
}
