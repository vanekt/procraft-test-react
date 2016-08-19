import React from 'react'
import Autosuggest from 'react-autosuggest'
import { match as matchProfessions } from './model'
import { fetchData } from '../common'

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
            .then(response => JSON.parse(response))
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
            id: 'profession',
            name: 'profession',
            className: 'form-control react-autosuggest__input without-box-shadow',
            value,
            placeholder: "Например, парикмахер",
            onChange: this.onChange
        };

        return (
            <div className="app-container">
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
            </div>
        );
    }
}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion, query) {
    const
        index = suggestion.name.toLowerCase().indexOf(query.query.toLowerCase()),
        queryLength = query.query.length,
        boldPart = suggestion.name.substr(index, queryLength),
        leftPart = suggestion.name.substr(0, index),
        rightPart = suggestion.name.substr(index + queryLength);

    return (
        <span>{leftPart}<strong>{boldPart}</strong>{rightPart}</span>
    );
}