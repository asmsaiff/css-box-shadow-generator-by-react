import React, { Component } from 'react'
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

export class App extends Component {
    state = {
        backgroundColor: '#0891b2',
        borderRadius: '3' + 'px',
        width: '20' + 'rem',
        height: '12' + 'rem',
    }

    boxProps = (props) =>{
        this.setState(props)
    }

    render() {
        return (
            <>
                <Header />
                
                <div className="w-10/12 mx-auto grid grid-cols-5">
                    <div className="py-6 px-4 my-6 bg-white">
                        <LeftPanel/>
                    </div>
                    <div className="flex items-center justify-center my-6 px-4 col-span-3">
                        <div style={this.state}>
                            {/* Middle Box */}
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