import React from 'react';
import {setState, getState} from "react";

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            upperScreenValue: "0",
            lowerScreenValue: "0",
            total: 0,
            lastOperand: null
        }; 

   this.handleButtonPress= this.handleButtonPress.bind(this); 
   this.handleClearPress= this.handleClearPress.bind(this); 
   this.calculateTotal= this.calculateTotal.bind(this); 
   this.handleUpperDisplay= this.handleUpperDisplay.bind(this); 
   this.handleLowerDisplay= this.handleLowerDisplay.bind(this);


    }

   ffffffffffhandleButtonPress (e){
        // this.setState({input: event.target.value}); 
        console.log("You clicked ",e.target.textContent);
        // this.setState( {upperScreenValue: e.target.value  } );
        this.setState( (state)=>{
            //console.log("state=", state);
            // console.log(e.target.textContent);
        
            // Handle the edge case where multiple dots .. are not alowed in a number
            if( (e.target.textContent===".") && (state.upperScreenValue.indexOf(".") != -1) ){
                return state;
            }


            if (state.upperScreenValue === "0"){
                return {
                    upperScreenValue: e.target.textContent,
                    lowerScreenValue: e.target.textContent
                }

            } else {

                return {
                    upperScreenValue: state.upperScreenValue.concat(e.target.textContent),
                    lowerScreenValue: e.target.textContent
                }
            }


            // console.log("state=", state);
        });
    }

    handleClearPress (){
        this.setState((state)=>{
            return {
                upperScreenValue: "0", 
                lowerScreenValue: "0" 
            }
        });
    }

    

handleUpperDisplay(e){
        // this.setState({input: event.target.value}); 
        // console.log("You clicked ",e.target.textContent);
        // this.setState( {upperScreenValue: e.target.value  } );
        this.setState( (state)=>{
            //console.log("state=", state);
            // console.log(e.target.textContent);
        
            // Handle the edge case where multiple dots .. are not alowed in a number
            if( (e.target.textContent===".") && (state.upperScreenValue.indexOf(".") != -1) ){
                return state;
            }


            if (state.upperScreenValue === "0"){
                return {
                    upperScreenValue: e.target.textContent,
                }

            } else {

                return {
                    upperScreenValue: state.upperScreenValue.concat(e.target.textContent),
                }
            }


            // console.log("state=", state);
        });
    }

    

handleLowerDisplay(e){
        // this.setState({input: event.target.value}); 
        console.log("You clicked ",e.target.textContent);
        // this.setState( {upperScreenValue: e.target.value  } );
        this.setState( (state)=>{
            //console.log("state=", state);
            // console.log(e.target.textContent);
        
            // Handle the edge case where multiple dots .. are not alowed in a number
            if( (e.target.textContent===".") && (state.lowerScreenValue.indexOf(".") != -1) ){
                return state;
            }


            if (state.lowerScreenValue === "0"){
                return {
                    lowerScreenValue: e.target.textContent
                }

            } else if( (e.target.textContent !== "=") &&
                (e.target.textContent !== "+") &&
                (e.target.textContent !== "-") &&
                (e.target.textContent !== "*") &&
                (e.target.textContent !== "/") ) {
                console.log("here you didn't press operand'")
                if (this.state.lastOperand === this.state.lowerScreenValue){
                    return {
                        lowerScreenValue: e.target.textContent
                    }
                }
                    return {
                    
                    lowerScreenValue: state.lowerScreenValue.concat(e.target.textContent)
                   }; 
            } else {
                
                return { 
                    lowerScreenValue:  e.target.textContent,
                    lastOperand: e.target.textContent 
                   }; 
            }







            // console.log("state=", state);
        });
    }




handleButtonPress(e){
    console.log("foo");
    this.handleUpperDisplay(e);
    this.handleLowerDisplay(e);
}


   calculateTotal (){
    if (this.state.total == 0){
        
    }
   }



	render(){
		return (
		<div className="calculator">
            <div id="bothDisplays">
                <div id="upperDisplay">{this.state.upperScreenValue}</div>
                <div id="display">{this.state.lowerScreenValue}</div>
            </div>
           
            <div id="clear" onClick={this.handleClearPress} >AC</div>
            <div id="divide" onClick={this.handleButtonPress}>/</div>
            <div id="multiply" onClick={this.handleButtonPress}>*</div>
            <div id="subtract" onClick={this.handleButtonPress}>-</div>
            <div id="add" onClick={this.handleButtonPress}>+</div>
            <div id="equals" onClick={this.handleButtonPress}>=</div>
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





