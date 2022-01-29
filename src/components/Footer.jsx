import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return <>
        <div className="py-4 bg-cyan-600">
            <div className="w-10/12 mx-auto flex justify-between items-center">
                <h1 className='text-white font-thin text-2xl w-max mx-auto'>Developed By - <a href="https://saifullah.co/" target="_blank" className='hover:underline'>Saifullah Siddique</a></h1>
            </div>
        </div>
    </>;
  }
}

export default Footer;
