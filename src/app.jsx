import React from 'react'
import ReactDOM from 'react-dom'
import { Profession } from './components/profession'
import { Phone } from './components/phone'
import './main.scss'

class App extends React.Component {

    render() {
        return (
            <div>
                <Profession />
                <Phone />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));