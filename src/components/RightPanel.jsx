import React, { Component } from 'react';

export class RightPanel extends Component {
    state = {
        // backgroundColor: '#0891b2',
        borderRadius: '3' + 'px',
        width: '30' + 'rem',
        height: '12' + 'rem',
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
        console.log(this.state);
        return <>
            <h6>Box Properties</h6>
            <hr />

            <form className='my-6' onChange={this.handleBox}>
                {/* <div>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Background Color</span>
                        <span>{this.state.backgroundColor}</span>
                    </label>
                    <input type="color" value={this.state.backgroundColor} name='backgroundColor' className='min-w-full'/>
                </div> */}

                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Border Radius</span>
                        <span>{this.state.borderRadius} rem</span>
                    </label>
                    <input type="range" name='borderRadius' value={this.state.borderRadius.match(/\d/g).join('')} className='mt-4 w-full' min='0' max='100'/>
                </div>

                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Width</span>
                        <span>{this.state.width}</span>
                    </label>
                    <input type="range" name='width' value={this.state.width.match(/\d/g).join('')} className='mt-4 w-full' min='0' max='50'/>
                </div>

                <div className='mt-6'>
                    <label htmlFor="" className='w-full flex justify-between'>
                        <span>Height</span>
                        <span>{this.state.height}</span>
                    </label>
                    <input type="range" name='height' value={this.state.height.match(/\d/g).join('')} className='mt-4 w-full' min='0' max='50'/>
                </div>
            </form>
        </>;
    }
}

export default RightPanel;
