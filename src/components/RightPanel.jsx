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

    handleBorderRadiusChange = (e) => {
        this.setState({
            borderRadius: e.target.value
        })
    }

    handleBoxHeightChange = (e) => {
        this.setState({
            boxHeight: e.target.value
        })
    }

    handleBoxWidthChange = (e) => {
        this.setState({
            boxWidth: e.target.value
        })
    }

    render() {
        return <>
            <h6>Box Properties</h6>
            <hr />

            <div className='my-6'>
                <div>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Background Color</span>
                        <span>{this.state.bgColorCode} px</span>
                    </label>
                    <SliderPicker className="max-w-full mt-4" color={this.state.bgColorCode} onChangeComplete={this.handleBgColorChange}/>
                </div>

                <div className='mt-4'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Border Color</span>
                        <span>{this.state.borderColorCode} {this.state.borderColorCode == 'transparent' ? '' : 'px'}</span>
                    </label>
                    <SliderPicker className="max-w-full mt-4" color={this.state.borderColorCode} onChangeComplete={this.handleBorderColorChange}/>
                </div>

                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Border Radius</span>
                        <span>{this.state.borderRadius} rem</span>
                    </label>
                    <input type="range" onChange={this.handleBorderRadiusChange} value={this.state.borderRadius} className='mt-4 w-full' min='0' max='100'/>
                </div>

                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Height</span>
                        <span>{this.state.boxHeight} rem</span>
                    </label>
                    <input type="range" onChange={this.handleBoxHeightChange} value={this.state.boxHeight} className='mt-4 w-full' min='0' max='50'/>
                </div>

                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Height</span>
                        <span>{this.state.boxWidth} rem</span>
                    </label>
                    <input type="range" onChange={this.handleBoxWidthChange} value={this.state.boxWidth} className='mt-4 w-full' min='0' max='50'/>
                </div>
            </div>
        </>;
    }
}

export default RightPanel;
