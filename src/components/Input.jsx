import React, { Component } from 'react';

export class Input extends Component {
    render() {
        const [label, type, name, cssValue, min, max]    =   this.props
        return <>
            <div className='mt-6'>
                <label htmlFor={name} className='w-full flex justify-between'>
                    <span>{label}</span>
                    <span>{cssValue} rem</span>
                </label>
                <input type={type} name={name} id={name} value={cssValue} className='mt-4 w-full' min={min} max={max} />
            </div>
        </>;
    }
}

export default Input;