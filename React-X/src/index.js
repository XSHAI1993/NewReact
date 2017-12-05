

import React from 'react';  // 必须引入
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import BasicExample from './BasicExample';
import Linux from './LinuxIndex';


//import javascript from './javascript';


export class Qingdong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
    	<div id="JiaLe_App">
      <div onClick={this.handleClick}>
             <h1 className="qidong" style={{display:this.state.isToggleOn ? "none" : "block" }}>启动SPA程序</h1>
      </div>
             {this.state.isToggleOn ? <Linux/> : '' }
      </div>
    );
  }
}



ReactDOM.render(
  <AppContainer>
  
  <Qingdong/>
    
  </AppContainer>,
  document.getElementById('main')
);

// 添加的代码
import $ from 'jquery';

(function(){

$('.nav-box').delegate('a','click',function(){
	
	$('.nav-box').children().removeClass('bd')
	
	if($(this)[0].className == "Logo"){
		
		var index = $('.nav-box').children()
		
		index[1].className = 'bd';
		
	}else{
		
		$(this).addClass('bd')
		
	}
	
})

$('#JiaLe_App').css({
	minHeight:$(window).height() + 'px'
})

$('.qidong').css({
	top: $(window).height() / 2 + 'px'
})


$('.qidong').on('click',function(){
	
	$('body').css({
		background:"url(img/311106.jpg)"
	})
	
})

}())

//$('body').height( $(window).innerHeight() );
 


if ( module.hot ) {
  module.hot.accept();
}

