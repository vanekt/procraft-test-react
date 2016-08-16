import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        return <p>Hello React!</p>
    }
}

ReactDOM.render(<Hello />, document.getElementById('app'));