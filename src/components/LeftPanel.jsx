import React, { Component } from 'react';
import ColorInput from './Fields/ColorInput';
import RangeInput from './Fields/RangeInput';

export class LeftPanel extends Component {
    state = {
        horizontalOffset: 20 + 'px',
        verticalOffset: 20 + 'px',
        blurRadius: 20 + 'px',
        spreadRadius: 20 + 'px',
        shadowColor: '#DBDBDB',
    }

    handleBoxShadow = (e) => {
        if(e.target.name === 'shadowColor') {
            this.setState({
                [e.target.name]: e.target.value
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value + 'px'
            })
        }

        this.props.boxShadowProps({boxShadow: this.state.horizontalOffset + ' ' + this.state.verticalOffset + ' ' + this.state.blurRadius + ' ' + this.state.spreadRadius + ' ' + this.state.shadowColor});
        e.preventDefault();
    }

    render() {
        return <>
            <h6>Generate Shadow</h6>
            <hr />

            <form className='my-6' onChange={this.handleBoxShadow}>
                <RangeInput 
                    label="Horizontal Offset" 
                    type="range" 
                    name="horizontalOffset" 
                    cssValue={this.state.horizontalOffset} 
                    min="-100" 
                    max="100"
                />

                <RangeInput 
                    label="Vertical Offset" 
                    type="range" 
                    name="verticalOffset" 
                    cssValue={this.state.verticalOffset} 
                    min="-100" 
                    max="100"
                />

                <RangeInput 
                    label="Blur Radius" 
                    type="range" 
                    name="blurRadius" 
                    cssValue={this.state.blurRadius} 
                    min="0" 
                    max="100"
                />

                <RangeInput 
                    label="Spread Radius Radius" 
                    type="range" 
                    name="spreadRadius" 
                    cssValue={this.state.spreadRadius} 
                    min="0" 
                    max="100"
                />

                <ColorInput 
                    label="Spread Radius Radius" 
                    type="color" 
                    name="shadowColor" 
                    cssValue={this.state.shadowColor}
                />
            </form>
        </>;
    }
}

export default LeftPanel;