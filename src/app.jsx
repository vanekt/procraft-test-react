import React from 'react'
import ReactDOM from 'react-dom'
import { Profession } from './components/profession/index.jsx'
import './main.scss'

class App extends React.Component {

    render() {
        return (
            <div>
                <Profession />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));