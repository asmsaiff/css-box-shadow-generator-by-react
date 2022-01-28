import React, { Component } from 'react';

export class LeftPanel extends Component {
    state = {
        horizontalOffset: 0
    }

    handleHorizontalOffsetChange = (e) => {
        this.setState({
            horizontalOffset: e.target.value
        })
    }

    render() {
        return <>
            <h6>Generate Shadow</h6>

            <div className='mt-6'>
                <div>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Horizontal Offset</span>
                        <span>{this.state.horizontalOffset} px</span>
                    </label>
                    <input type="range" onChange={this.handleHorizontalOffsetChange} value={this.state.horizontalOffset} className='mt-4 w-full' min='-100' max='100'/>
                </div>
            </div>
        </>;
    }
}

export default LeftPanel;
