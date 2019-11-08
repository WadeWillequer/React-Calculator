import React, { Component } from 'react';
import './Calculator.css';
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

// Main calculator component. Contains our other calculator components
class Calculator extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            equation: '2*5',
            result: 150
        }

    }


    // Function that is called when any of the keypad buttons are pressed
    onButtonPress = (event) => {
        let equation = this.state.equation;
        const pressedButtonValue = event.target.innerHTML;

        console.log(pressedButtonValue);

        if (pressedButtonValue === 'C') {
            this.clear();
            return;
        }
    }

    clear() {
        this.setState({ equation: '', result: 0});
    }

    render() {
        return (
            <div className="Calculator">
                <Screen equation = {this.state.equation} result = {this.state.result} />
                <Keypad onButtonPress={this.onButtonPress}/>
            </div>
        );
    }
}

export default Calculator;