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
            selected: countries[0],
            focused: false
        };

        this.dropDownOnSelectCallback = this.dropDownOnSelectCallback.bind(this);
        this.phoneInputFocus = this.phoneInputFocus.bind(this);
        this.phoneInputBlur = this.phoneInputBlur.bind(this);
    }

    render() {
        return (
            <div className="phone-input">
                <FormGroup>
                    <InputGroup>
                        <DropdownButton
                            componentClass={InputGroup.Button}
                            id="input-dropdown-addon"
                            title={<img src="assets/phone/img/32/Russia.png" />}
                            className={"phone-dropdown-control" + (this.state.focused ? ' focused' : '')}
                        >
                            <MenuItem key="1"><img src="assets/phone/img/32/Russia.png" />Россия </MenuItem>
                            <MenuItem key="2"><img src="assets/phone/img/32/Kazakhstan.png" />Казахстан</MenuItem>
                            <MenuItem key="3"><img src="assets/phone/img/32/United-Kingdom.png" />Великобритания</MenuItem>
                        </DropdownButton>
                        <InputGroup.Addon className={"phone-country-prefix" + (this.state.focused ? ' focused' : '')}>+7</InputGroup.Addon>
                        <FormControl onFocus={this.phoneInputFocus}
                                     onBlur={this.phoneInputBlur}
                                     className="phone-number-input"
                                     type="text"
                                     placeholder="123 123" />
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }

    dropDownOnSelectCallback(item) {
        this.setState({selected: item});
    }

    phoneInputFocus() {
        this.setState({focused: true});
    }

    phoneInputBlur() {
        this.setState({focused: false});
    }
}

/*

 <DropDown list={countries} selected={this.state.selected} onSelectCallback={this.dropDownOnSelectCallback} />
 <input value={this.state.selected.phoneCode} />
 <input placeholder="929 777 1234" />

 */
