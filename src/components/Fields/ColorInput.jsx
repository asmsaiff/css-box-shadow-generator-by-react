import React, { Component } from 'react';

export class ColorInput extends Component {
    render() {
        const {label, type, name, cssValue}    =   this.props
        return <>
            <div className='mt-6'>
                <label htmlFor={name} className='w-full flex justify-between'>
                    <span>{label}</span>
                    <span>{cssValue}</span>
                </label>
                <input type={type} name={name} id={name} value={cssValue} className='mt-4 w-full' />
            </div>
        </>;
    }
}

export default ColorInput;