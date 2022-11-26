import React from 'react';
import {setState, getState} from "react";

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            upperScreenValue: "0",
            lowerScreenValue: "0",
            firstOperand: 0,
            currentOperand: "",
            secondOperand: 0,
            lastOperator: null,
            countOperators: 0,
            arrayOfExpresion: [],
            arrayIndex: 0
        }; 

   this.handleButtonPress= this.handleButtonPress.bind(this); 
   this.handleClearPress= this.handleClearPress.bind(this); 
   this.calculateTotal= this.calculateTotal.bind(this); 
   this.handleUpperDisplay= this.handleUpperDisplay.bind(this); 
   this.handleLowerDisplay= this.handleLowerDisplay.bind(this);
   this.displayTotal= this.displayTotal.bind(this);


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
            //console.log("state=", state);
            // console.log(e.target.textContent);
        
            // Handle the edge case where multiple dots .. are not alowed in a number
            if( (e.target.textContent===".") && (this.state.upperScreenValue.indexOf(".") !== -1) ){
                this.setState((state)=>{ return state  });
            }


            if (this.state.upperScreenValue === "0"){

               // this.setState ((state)=>{ return state }  );
               this.setState ((state)=>{ return { upperScreenValue: e.target.textContent  } }  );

            } else {

             this.setState ((state)=>{ 
               return {
                    upperScreenValue: state.upperScreenValue.concat(e.target.textContent),
                } 
             }  );
            
            }


            // console.log("state=", state);
    }

    

handleLowerDisplay(e){
        // this.setState({input: event.target.value}); 
       // console.log("You clicked ",e.target.textContent);
        // this.setState( {upperScreenValue: e.target.value  } );
            //console.log("state=", state);
            // console.log(e.target.textContent);
        
            // Handle the edge case where multiple dots .. are not alowed in a number
            if( (e.target.textContent === ".") && (this.state.lowerScreenValue.indexOf(".") !== -1) ){

               // this.setState ((state)=>{ return state }  );
               this.setState ((state)=>{ return state }  );

            }

            // This code handles the initial state of zero when the calculator starts
            //  This is the first operand in the series of calculations
            if (this.state.lowerScreenValue === "0"){
                this.setState ((state)=>{
                    return {
                        lowerScreenValue: e.target.textContent,
                        currentOperand: e.target.textContent,
                        countOperators: 0
                    }


                }  );


            } else if( (e.target.textContent !== "=") &&
                (e.target.textContent !== "+") &&
                (e.target.textContent !== "-") &&
                (e.target.textContent !== "*") &&
                (e.target.textContent !== "/") ) {
                // At this point means that the user pressed only numbers or dot
                
                // if the lower screen has an operator
                // then overwrite it 
                // else just concatenate number to the lowerscreen 
                //
                

                if ( (this.state.lowerScreenValue === "=") ||
                ( this.state.lowerScreenValue === "+") ||
                ( this.state.lowerScreenValue === "-") ||
                ( this.state.lowerScreenValue === "*") ||
                ( this.state.lowerScreenValue === "/") ) {
                    
                    this.setState((state)=>{
                        return {
                            lowerScreenValue: e.target.textContent,
                            currentOperand: e.target.textContent,
                            countOperators: 0
                        }
                    });
                } else {

               // console.log("here you didn't press an operator")



                // Add the value in the lowerScreenValue to the arrayOfExpresion 
                let tempLowerScreen = this.state.lowerScreenValue.concat(e.target.textContent);
                

                //let tempArray = state.arrayOfExpresion;
                //tempArray[state.arrayIndex] = tempLowerScreen;
            
                console.log("this.state.lowerScreenValue=", this.state.lowerScreenValue);
                console.log("tempLowerScreen=", tempLowerScreen);
                this.setState( (state)=>{

                    return { 
                        lowerScreenValue: tempLowerScreen,
                        currentOperand: tempLowerScreen,
                        countOperators: 0
                    }; 
                } );

                }



            } else {
               // You pressed an operator such as "= / * - +"

               console.log("You pressed and operator like +-*/");
                // When I press an operator I will increase the array index 
               // let tempArrayIndex = state.arrayIndex + 1;

                // When I press an operator the first thing I will add
                // the currentOperand to the arrayOfExpresion
                
               let tempOperator = e.target.textContent;
               let tempArray = this.state.arrayOfExpresion;



                if ( (this.state.currentOperand !== "=") &&
                ( this.state.currentOperand !== "+") &&
                ( this.state.currentOperand !== "-") &&
                ( this.state.currentOperand  !== "*") &&
                ( this.state.currentOperand !== "/") ){
                    if (this.state.countOperators === 0) {
                    
                    tempArray.push(  this.state.currentOperand);
                    }


                } 

               if (this.state.countOperators !== 0){
                   tempArray[ tempArray.length - 1 ] = tempOperator;
               } else {

                tempArray.push(tempOperator);
               }
                
                
                console.log("tempArray=", tempArray);
                console.log("this.state.arrayOfExpresion=", this.state.arrayOfExpresion);
                //tempArray.push(state.currentOperand);
                
                       
             this.setState ((state)=>{ 

                return { 
                    lowerScreenValue:  e.target.textContent,
                    lastOperator: e.target.textContent,
                    arrayOfExpresion: tempArray,
                    countOperators: state.countOperators + 1
                   };

             }  );

            }







            // console.log("state=", state);
    }




    handleButtonPress(e){
        this.handleUpperDisplay(e);
        this.handleLowerDisplay(e);
    }


    calculateTotal (firstOperand, operator, secondOperand){
        // TODO I need to check of the string has a `.` if so 
        // then I will parse it as a float not as an integer...
        firstOperand = parseInt(firstOperand);
        secondOperand = parseInt(secondOperand);
        let total = 0;
        
       // console.log("firstOperand=", firstOperand);
        //console.log("secondOperand=", secondOperand);

        switch (operator){
            case "+":
                total = firstOperand + secondOperand;
                break;

            case "-":
                total = firstOperand - secondOperand;
                break;   


            case "*":
                total = firstOperand * secondOperand;
                break;

            case "/":
                total = firstOperand / secondOperand;
                break;   
        }
   
    this.setState ((state)=>{
       // console.log("total=", total);
    return {
        firstOperand: total
    }
    }  );

    }


displayTotal(){
    //console.log("displayTotal called");
    this.setState((state)=>{
    return {
        lowerScreenValue: this.state.firstOperand
    }
    });
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
            <div id="equals" onClick={this.handleButtonPress }>=</div>
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





