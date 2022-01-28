import React, { Component } from 'react'
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

export class App extends Component {
    render() {
        return (
            <>
                <Header />
                
                <div className="w-10/12 mx-auto grid grid-cols-5">
                    <div className="py-6 px-4 my-6 bg-white">
                        <LeftPanel />
                    </div>
                    <div className="flex items-center justify-center my-6 px-4 col-span-3">
                        middle box
                    </div>
                    <div className="py-6 px-4 my-6 bg-white">
                        <RightPanel />
                    </div>
                </div>
            </>
        )
    }
}

export default App