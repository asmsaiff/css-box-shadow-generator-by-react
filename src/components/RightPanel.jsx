import React, { Component } from 'react';
import ColorInput from './Fields/ColorInput';
import RangeInput from './Fields/RangeInput';

export class RightPanel extends Component {
    state = {
        backgroundColor: '#abb8c3',
        borderRadius: '3' + 'px',
        width: '30' + 'rem',
        height: '15' + 'rem',
    }

    handleBox = (e) => {
        if(e.target.name === 'backgroundColor') {
            this.setState({
                [e.target.name]: e.target.value
            })
        } else if(e.target.name === 'borderRadius') {
            this.setState({
                [e.target.name]: e.target.value + 'px'
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value + 'rem'
            })
        }

        this.props.boxProps(this.state);
        e.preventDefault();
    }

    render() {
        return <>
            <h6>Box Properties</h6>
            <hr />

            <form className='my-6' onChange={this.handleBox}>
                <RangeInput 
                    label="Width" 
                    type="range" 
                    name="width" 
                    cssValue={this.state.width} 
                    min="27" 
                    max="50"
                />

                <RangeInput 
                    label="Height" 
                    type="range" 
                    name="height" 
                    cssValue={this.state.height} 
                    min="15" 
                    max="25"
                />

                <RangeInput 
                    label="Border Radius" 
                    type="range" 
                    name="borderRadius" 
                    cssValue={this.state.borderRadius} 
                    min="3" 
                    max="100"
                />

                <ColorInput 
                    label="Background Color" 
                    type="color" 
                    name="backgroundColor" 
                    cssValue={this.state.backgroundColor}
                />
            </form>
        </>;
    }
}

export default RightPanel;
