import React from 'react'
import ReactDOM from 'react-dom'
import { Profession as ProfessionView } from './views/profession.jsx'
import '../main.scss'

class App extends React.Component {

    render() {
        return (
            <div>
                <ProfessionView />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));