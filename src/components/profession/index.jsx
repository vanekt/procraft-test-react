import React from 'react'
import Autosuggest from 'react-autosuggest'
import { match as matchProfessions } from './model'
import { fetchData } from '../tools'

export class Profession extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: [],
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
    }

    loadSuggestions(value) {
        this.setState({
            isLoading: true
        });

        fetchData('json/professions.json')
            .then(response => JSON.parse(response)['items'])
            .then(items => matchProfessions(value, items))
            .then(suggestions => {
                if (value === this.state.value) {
                    this.setState({isLoading: false, suggestions});
                } else {
                    this.setState({isLoading: false});
                }
            })
            .catch(error => console.error('Произошла ошибка: ' + error));
    }

    onChange(event, { newValue }) {
        this.setState({
            value: newValue
        });
    }

    onSuggestionSelected(event, { suggestionValue }) {
        this.loadSuggestions(suggestionValue);
    }

    onSuggestionsUpdateRequested({ value, reason }) {
        if ('enter' === reason) {
            this.props.disableSubmitHandler();            
        }
        this.loadSuggestions(value);
    }

    render() {
        const { value, suggestions, isLoading } = this.state;
        const inputProps = {
            placeholder: "Например, парикмахер",
            value,
            onChange: this.onChange,
            className: 'form-control react-autosuggest__input without-box-shadow',
            name: 'profession'
        };

        return (
            <div className="app-container">
                <Autosuggest suggestions={suggestions}
                             onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                             getSuggestionValue={getSuggestionValue}
                             renderSuggestion={renderSuggestion}
                             inputProps={inputProps} />
            </div>
        );
    }
}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion, query) {
    let index = suggestion.name.toLowerCase().indexOf(query.query.toLowerCase()),
        length = query.query.length,
        boldPart = suggestion.name.substr(index, length),
        normalPart = suggestion.name.substr(index + length);

    return (
        <span><strong>{boldPart}</strong>{normalPart}</span>
    );
}