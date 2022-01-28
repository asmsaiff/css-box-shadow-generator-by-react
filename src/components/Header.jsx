import React, { Component } from 'react';
import { RiExternalLinkLine, RiGithubFill } from "react-icons/ri";
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return <>
        <div className="py-4 bg-cyan-600">
            <div className="w-10/12 mx-auto flex justify-between items-center">
                <h1 className='text-white font-bold text-2xl'>Box Shadow Generator</h1>

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
