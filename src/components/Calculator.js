import React from 'react';
import {setState, getState} from "react";

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            screenValue: "0"
        }; 

   this.handleButtonPress= this.handleButtonPress.bind(this); 

    }

    handleButtonPress (e){
        // this.setState({input: event.target.value}); 
       console.log("You clicked ",e.target.textContent);
       this.setState( {screenValue: e.target.value  } );
    }



	render(){
		return (
		<div className="calculator">
            {/*  <div id="display">0</div> */} 
            <input type="text" id="display" value={this.state.screenValue}   />
            <div id="clear">AC</div>
            <div id="divide">/</div>
            <div id="multiply">*</div>
            <div id="subtract">-</div>
            <div id="add">+</div>
            <div id="equals">=</div>
            <div id="seven">7</div>
            <div id="eight">8</div>
            <div id="nine">9</div>
            <div id="four">4</div>
            <div id="five">5</div>
            <div id="six">6</div>
            <div id="one" onClick={this.handleButtonPress}>1</div>
            <div id="two">2</div>
            <div id="three">3</div>
            <div id="zero">0</div>
            <div id="decimal">.</div>
		</div>
		);
	}

}











export default Calculator;





