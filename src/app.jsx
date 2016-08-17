import React from 'react'
import ReactDOM from 'react-dom'
import { Profession } from './components/profession'
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