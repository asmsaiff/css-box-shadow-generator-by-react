import React, { Component } from 'react';
import { RiGithubFill } from "react-icons/ri";

export class Header extends Component {
  render() {
    return <>
        <div className="xl:h-72 py-12 2xl:py-0 flex bg-cyan-600">
            <div className="px-4 xl:px-0 xl:w-10/12 mx-auto flex flex-col 2xl:flex-row justify-between items-center">
                <h1 className='text-white text-3xl mb-4 text-center 2xl:mb-0 xl:text-6xl font-thin'>Box Shadow Generator</h1>

                <div className='flex justify-end'>
                    <div className='group relative'>
                      <a href='https://github.com/saifullahsiddique/css-box-shadow-generator-by-react' target='_blank' className='bg-gray-100 hover:bg-gray-300 transition duration-300 flex gap-2 items-center rounded-full text-4xl shadow-lg p-2' >
                        <RiGithubFill className="self-center"/>
                      </a>

                      <span className='hidden group-hover:block text-sm bg-gray-50 absolute -bottom-8 -left-9 w-max rounded-sm px-2 py-1'>View Source Code</span>
                    </div>
                </div>
            </div>
        </div>
    </>;
  }
}

export default Header;
