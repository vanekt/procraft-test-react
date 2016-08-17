import React from 'react'
import DropDown from './dropdown'
import {FormGroup, InputGroup, Button, FormControl, DropdownButton, MenuItem} from 'react-bootstrap'

var countries = [
    { abbr: "ru", img: "Russia.png", name: "Россия", phoneCode: "+7" },
    { abbr: "kz", img: "Kazakhstan.png", name: "Казахстан", phoneCode: "+7" },
    { abbr: "uk",  img: "United-Kingdom.png", name: "United Kingdom", phoneCode: "+44" }
];

export class Phone extends React.Component {
    constructor() {
        super();

        this.state = {
            selected: countries[0]
        };

        this.dropDownOnSelectCallback = this.dropDownOnSelectCallback.bind(this);
    }

    render() {
        return (
            <div className="phone-input">
                <DropDown list={countries} selected={this.state.selected} onSelectCallback={this.dropDownOnSelectCallback} />
                <input value={this.state.selected.phoneCode} />
                <input placeholder="929 777 1234" />

                
            </div>
        );
    }

    dropDownOnSelectCallback(item) {
        this.setState({selected: item});
    }
}
