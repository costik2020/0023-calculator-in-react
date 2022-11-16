import React from 'react';
import {setState, getState} from "react";

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            screenValue: "0"
        }; 

   this.handleButtonPress= this.handleButtonPress.bind(this); 
   this.handleClearPress= this.handleClearPress.bind(this); 

    }

    handleButtonPress (e){
        // this.setState({input: event.target.value}); 
        console.log("You clicked ",e.target.textContent);
        // this.setState( {screenValue: e.target.value  } );
        this.setState( (state)=>{
            //console.log("state=", state);
            // console.log(e.target.textContent);

            if (state.screenValue === "0"){
                return {
                    screenValue: e.target.textContent
                }

            } else {

                return {
                    screenValue: state.screenValue.concat(e.target.textContent)
                }
            }


            // console.log("state=", state);
        });
    }

    handleClearPress (){
        this.setState((state)=>{
            return {
                screenValue: "0"
            }
        });
    }


    



	render(){
		return (
		<div className="calculator">
            <div id="display">{this.state.screenValue}</div>
            <div id="clear" onClick={this.handleClearPress} >AC</div>
            <div id="divide">/</div>
            <div id="multiply">*</div>
            <div id="subtract">-</div>
            <div id="add">+</div>
            <div id="equals">=</div>
            <div id="seven" onClick={this.handleButtonPress}>7</div>
            <div id="eight" onClick={this.handleButtonPress}>8</div>
            <div id="nine" onClick={this.handleButtonPress}>9</div>
            <div id="four" onClick={this.handleButtonPress}>4</div>
            <div id="five" onClick={this.handleButtonPress}>5</div>
            <div id="six" onClick={this.handleButtonPress}>6</div>
            <div id="one" onClick={this.handleButtonPress}>1</div>
            <div id="two" onClick={this.handleButtonPress}>2</div>
            <div id="three" onClick={this.handleButtonPress}>3</div>
            <div id="zero" onClick={this.handleButtonPress}>0</div>
            <div id="decimal" onClick={this.handleButtonPress}>.</div>
		</div>
		);
	}

}











export default Calculator;





