import React, { Component, useEffect } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import EditorIcon from './components/Icons/EditorIcon';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export class App extends Component {
    state = {
        backgroundColor: '#abb8c3',
        borderRadius: '3' + 'px',
        width: '30' + 'rem',
        height: '15' + 'rem',
        boxShadow: 20 + 'px ' + 20 + 'px ' + 20 + 'px ' + 20 + 'px ' + '#d1d1d1'
    }

    boxProps = (props) =>{
        this.setState(props)
    }

    boxShadowProps = (shadow) =>{
        this.setState(shadow)
    }

    render() {
        return (
            <>
                <div className='flex flex-col min-h-screen justify-between'>
                    <Header />
                    
                    <div className="flex-grow px-4 sm:w-10/12 mx-auto grid grid-cols-1 xl:grid-cols-5">
                        <div className="py-6 px-4 my-6 bg-white">
                            <LeftPanel boxShadowProps={this.boxShadowProps}/>
                        </div>
                        <div className="flex items-center justify-center my-6 px-4 col-span-3">
                            <div style={this.state} >
                                {/* Middle Box */}

                                <pre className="codeblock" style={this.state}>
                                    <div className="codeDiv" >
                                        <EditorIcon />
                                        <SyntaxHighlighter 
                                            className="mt-4" 
                                            language="html" 
                                            style={nightOwl} 
                                            showLineNumbers={true}
                                            customStyle={
                                                { 
                                                    backgroundColor: 'transparent',
                                                    padding: '0'
                                                }
                                            }
                                            lineNumberStyle={
                                                { 
                                                    opacity: '.4',
                                                    padding: '0',
                                                    textAlign: 'left'
                                                }
                                            }
                                        >
                                            {"box-shadow" + ": " + this.state.boxShadow + ';'}
                                        </SyntaxHighlighter>
                                    </div>
                                </pre>
                            </div>
                        </div>
                        <div className="py-6 px-4 my-6 bg-white">
                            <RightPanel boxProps={this.boxProps}/>
                        </div>
                    </div>

                    <Footer />
                </div>
            </>
        )
    }
}

export default App