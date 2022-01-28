import React, { Component, useEffect } from 'react'
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';


export class App extends Component {

    state = {
        backgroundColor: '#0891b2',
        borderRadius: '3' + 'px',
        width: '30' + 'rem',
        height: '12' + 'rem',
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
                <Header />
                
                <div className="w-10/12 mx-auto grid grid-cols-5">
                    <div className="py-6 px-4 my-6 bg-white">
                        <LeftPanel boxShadowProps={this.boxShadowProps}/>
                    </div>
                    <div className="flex items-center justify-center my-6 px-4 col-span-3">
                        <div style={this.state}>
                            {/* Middle Box */}

                            <pre class="codeblock">
        <div class="codeDiv">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg>
<code class="code language-javascript">
box-shadow: {this.state.boxShadow + ';'}
</code>
        </div>
    </pre>
                        </div>
                    </div>
                    <div className="py-6 px-4 my-6 bg-white">
                        <RightPanel boxProps={this.boxProps}/>
                    </div>
                </div>
            </>
        )
    }
}

export default App