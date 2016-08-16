import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>Hello React!</p>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('app'));