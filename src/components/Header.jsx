import React, { Component } from 'react';
import { RiExternalLinkLine } from "react-icons/ri";

export class Header extends Component {
  render() {
    return <>
        <div className="2xl:h-72 py-12 2xl:py-0 flex bg-cyan-600">
            <div className="w-10/12 mx-auto flex flex-col 2xl:flex-row justify-between items-center">
                <h1 className='text-white text-4xl mb-4 2xl:mb-0 xl:text-6xl font-thin'>Box Shadow Generator</h1>

                <div className='flex justify-end'>
                    <a href='https://github.com/saifullahsiddique/' target='_blank' className='bg-gray-100 hover:bg-gray-300 transition duration-300 flex gap-2 items-center px-3 py-1 rounded-sm text-sm uppercase' >
                      <RiExternalLinkLine className="self-center"/> Get in Touch
                    </a>
                </div>
            </div>
        </div>
    </>;
  }
}

export default Header;
