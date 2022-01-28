import React, { Component } from 'react';

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
                <div>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Horizontal Offset</span>
                        <span>{this.state.horizontalOffset}</span>
                    </label>
                    <input type="range" name='horizontalOffset' className='mt-4 w-full' min='-100' max='100'/>
                </div>
                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Vertical Offset</span>
                        <span>{this.state.verticalOffset} px</span>
                    </label>
                    <input type="range" name='verticalOffset' className='mt-4 w-full' min='-100' max='100'/>
                </div>
                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Blur Radius</span>
                        <span>{this.state.blurRadius} px</span>
                    </label>
                    <input type="range" name='blurRadius' value={this.state.blurRadius.match(/\d/g).join('')}  className='mt-4 w-full' min='0' max='100'/>
                </div>
                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Spread Radius Radius</span>
                        <span>{this.state.spreadRadius} px</span>
                    </label>
                    <input type="range" name='spreadRadius' value={this.state.spreadRadius.match(/\d/g).join('')} className='mt-4 w-full' min='0' max='100'/>
                </div>
                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Shadow Color</span>
                        <span>{this.state.shadowColor}</span>
                    </label>
                    <input type="color" value={this.state.shadowColor} name='shadowColor' className='min-w-full'/>
                </div>
            </form>
        </>;
    }
}

export default LeftPanel;