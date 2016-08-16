import React from 'react'
import ReactDOM from 'react-dom'
import Autocomplete from 'react-autocomplete'
import { getStates, matchStateToTerm, sortStates, styles, fakeRequest } from 'react-autocomplete/build/lib/utils'
import './main.scss'

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            value: '',
            unitedStates: getStates(),
            loading: false
        }
    }

    render() {
        return (
            <div>
                <Autocomplete
                    inputProps={{name: "US state", className: "input"}}
                    value={this.state.value}
                    items={this.state.unitedStates}
                    getItemValue={(item) => item.name}
                    onSelect={(value, item) => {
                        this.setState({ value, unitedStates: [ item ] })
                    }}
                    onChange={(event, value) => {
                        this.setState({ value, loading: true });
                        fakeRequest(value, (items) => {
                            this.setState({ unitedStates: items, loading: false })
                        })
                    }}
                    renderItem={(item, isHighlighted) => (
                        <div
                            key={item.abbr}
                            id={item.abbr}
                            className="custom-class-item"
                        >{item.name}</div>
                    )}
                    renderMenu={(items, value) => (
                        <div className="autocomplete-items-wrapper">
                            {value === '' ? (
                                <div>Type of the name of a United State</div>
                            ) : this.state.loading ? (
                                <div>Loading...</div>
                            ) : items.length === 0 ? (
                                <div>No matches for {value}</div>
                            ) : this.renderItems(items)}
                        </div>
                    )}
                />
            </div>
        )
    }

    renderItems (items) {
        return items.map((item) => {
            return item
        })
    }

}

ReactDOM.render(<App />, document.getElementById('app'));