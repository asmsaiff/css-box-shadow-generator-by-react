import React, { Component } from 'react';

export class LeftPanel extends Component {
    state = {
        horizontalOffset: 0,
        verticalOffset: 0,
        blurRadius: 0,
        spreadRadius: 0,
        colorCode: ''
    }

    handleHorizontalOffsetChange = (e) => {
        this.setState({
            horizontalOffset: e.target.value
        })
    }
    verticalOffsetChange = (e) => {
        this.setState({
            verticalOffset: e.target.value
        })
    }
    blurRadiusChange = (e) => {
        this.setState({
            blurRadius: e.target.value
        })
    }
    spreadRadiusChange = (e) => {
        this.setState({
            spreadRadius: e.target.value
        })
    }

    render() {
        return <>
            <h6>Generate Shadow</h6>

            <div className='my-6'>
                <div>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Horizontal Offset</span>
                        <span>{this.state.horizontalOffset} px</span>
                    </label>
                    <input type="range" onChange={this.handleHorizontalOffsetChange} value={this.state.horizontalOffset} className='mt-4 w-full' min='-100' max='100'/>
                </div>
                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Vertical Offset</span>
                        <span>{this.state.verticalOffset} px</span>
                    </label>
                    <input type="range" onChange={this.verticalOffsetChange} value={this.state.verticalOffset} className='mt-4 w-full' min='-100' max='100'/>
                </div>
                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Blur Radius</span>
                        <span>{this.state.blurRadius} px</span>
                    </label>
                    <input type="range" onChange={this.blurRadiusChange} value={this.state.blurRadius} className='mt-4 w-full' min='-100' max='100'/>
                </div>
                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Blur Radius</span>
                        <span>{this.state.spreadRadius} px</span>
                    </label>
                    <input type="range" onChange={this.spreadRadiusChange} value={this.state.spreadRadius} className='mt-4 w-full' min='-100' max='100'/>
                </div>
                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Color</span>
                        <span>{this.state.colorCode} px</span>
                    </label>
                    <input type="text" onChange={this.colorCodeChange} value={this.state.colorCode} className='mt-4 w-full border-b border-black py-2 text-sm focus:outline-none' placeholder='Input Color Code'/>
                </div>
            </div>
        </>;
    }
}

export default LeftPanel;
