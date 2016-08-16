import React from 'react'
import ReactDOM from 'react-dom'
import Autocomplete from 'react-autocomplete'
import { fetch as fetchProfessions } from './models/professions.jsx'
import '../main.scss'

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            value: '',
            professions: [],
            loading: false
        };
    }

    componentWillMount() {
        fetchProfessions(null, (items) => {
            this.setState({ professions: items });
        });
    }

    render() {
        return (
            <div>
                <Autocomplete
                    inputProps={{name: "US state", className: "input"}}
                    value={this.state.value}
                    items={this.state.professions}
                    getItemValue={(item) => item.name}
                    onSelect={(value, item) => {
                        this.setState({ value, professions: [ item ] })
                    }}
                    onChange={(event, value) => {
                        this.setState({ value, loading: true });
                        fetchProfessions(value, (items) => {
                            this.setState({ professions: items, loading: false })
                        })
                    }}
                    renderItem={(item, isHighlighted) => (
                        <div
                            key={item.id}
                            id={item.id}
                            className="custom-class-item"
                        >{item.name}</div>
                    )}
                    renderMenu={(items, value) => (
                        <div className="autocomplete-items-wrapper">
                            {value === '' ? (
                                <div>Наберите название профессии</div>
                            ) : this.state.loading ? (
                                <div>Загрузка...</div>
                            ) : items.length === 0 ? (
                                <div>Ничего не найдено</div>
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