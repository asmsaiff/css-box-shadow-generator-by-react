import React, { Component } from 'react';
import { SliderPicker } from 'react-color';

export class RightPanel extends Component {
    state = {
        bgColorCode: '#ffffff',
        borderColorCode: 'transparent',
        borderRadius: '0',
        boxHeight: '20',
        boxWidth: '20'
    }

    handleBgColorChange = (color, event) => {
        this.setState({
            bgColorCode: color.hex
        })
    }

    handleBorderColorChange = (color, e) => {
        this.setState({
            borderColorCode: color.hex
        })
    }

    handleBox = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        this.props.boxProps(this.state);
        e.preventDefault();
    }

    render() {
        console.log(this.state);
        return <>
            <h6>Box Properties</h6>
            <hr />

            <form className='my-6' onChange={this.handleBox}>
                <div>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Background Color</span>
                        <span>{this.state.bgColorCode}</span>
                    </label>
                    <SliderPicker onChange={this.handleBgColorChange} className="max-w-full mt-4" color={this.state.bgColorCode}/>
                </div>

                <div className='mt-4'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Border Color</span>
                        <span>{this.state.borderColorCode}</span>
                    </label>
                    <SliderPicker onChange={this.handleBorderColorChange} className="max-w-full mt-4" color={this.state.borderColorCode}/>
                </div>

                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Border Radius</span>
                        <span>{this.state.borderRadius} rem</span>
                    </label>
                    <input type="range" name='borderRadius' value={this.state.borderRadius} className='mt-4 w-full' min='0' max='100'/>
                </div>

                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Height</span>
                        <span>{this.state.boxHeight} rem</span>
                    </label>
                    <input type="range" name='boxHeight' value={this.state.boxHeight} className='mt-4 w-full' min='0' max='50'/>
                </div>

                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Height</span>
                        <span>{this.state.boxWidth} rem</span>
                    </label>
                    <input type="range" name='boxWidth' value={this.state.boxWidth} className='mt-4 w-full' min='0' max='50'/>
                </div>
            </form>
        </>;
    }
}

export default RightPanel;
