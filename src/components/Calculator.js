import React from 'react';

class Calculator extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
		<div className="calculator">
	        <div className="display">0000</div>
            <div id="clear">AC</div>
            <div id="divide">/</div>
            <div id="multiply">*</div>
            <div id="substract">-</div>
            <div id="add">+</div>
            <div id="equal">=</div>
            <div id="seven">7</div>
            <div id="eight">8</div>
            <div id="nine">9</div>
            <div id="four">4</div>
            <div id="five">5</div>
            <div id="six">6</div>
            <div id="one">1</div>
            <div id="two">2</div>
            <div id="three">3</div>
            <div id="zero">0</div>
            <div id="dot">.</div>
		</div>
		);
	}

}











export default Calculator;





