import React, { Component } from 'react';
import './Button.css';

class ResultsScreen extends Component {
    render() {
        return (
            <div className='Button'>
                {this.props.children}
            </div>
        );
    }
}

export default Button;