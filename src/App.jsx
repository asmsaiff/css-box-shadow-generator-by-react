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
                    <div className="py-6">
                        <LeftPanel />
                    </div>
                    <div className="flex items-center col-span-3">
                        middle box
                    </div>
                    <div className="h-96 py-6">
                        <RightPanel />
                    </div>
                </div>
            </>
        )
    }
}

export default App