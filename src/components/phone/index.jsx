import React from 'react'
import ReactDOM from 'react-dom'
import { FormGroup, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap'
import InputElement from 'react-input-mask'
import FontAwesome from 'react-fontawesome'
import { fetchData } from '../common'

export class Phone extends React.Component {
    constructor() {
        super();

        this.phoneInput = null;
        this.state = {
            countries: [],
            selected: null,
            focused: false,
            opened: false,
            phoneNumber: '',
            phoneNumberWithoutCode: ''
        };

        this.dropDownOnSelectCallback = this.dropDownOnSelectCallback.bind(this);
        this.phoneInputFocus = this.phoneInputFocus.bind(this);
        this.phoneInputBlur = this.phoneInputBlur.bind(this);
        this.renderDropdownList = this.renderDropdownList.bind(this);
        this.toggleOpenedState = this.toggleOpenedState.bind(this);
        this.emulateFocus = this.emulateFocus.bind(this);
        this.setPhoneNumber = this.setPhoneNumber.bind(this);
        this.setPhoneNumberState = this.setPhoneNumberState.bind(this);
    }

    componentWillMount() {
        fetchData('json/countries.json')
            .then(response => JSON.parse(response))
            .then(items => {
                this.setState({
                    countries: items,
                    selected: items[0]
                }, () => {
                    this.setPhoneNumber();
                });
            })
            .catch(error => console.error('Произошла ошибка: ' + error));
    }

    render() {
        if (null === this.state.selected) {
            return null;
        }

        const dropDownTitle = (
            <div>
                <img src={"assets/phone/img/" + this.state.selected.img} alt={this.state.selected.name} />
                <FontAwesome name={this.state.opened ? 'angle-up' : 'angle-down'} size="lg" className="custom-caret" />
            </div>
        );

        return (
            <FormGroup>
                <InputGroup>
                    <DropdownButton
                        componentClass={InputGroup.Button}
                        id="input-dropdown-addon"
                        title={dropDownTitle}
                        className={"without-box-shadow phone-dropdown-control" + (this.state.focused ? ' focused' : '')}
                        noCaret={true}
                        onToggle={this.toggleOpenedState}
                        onSelect={this.emulateFocus}
                    >
                        {this.renderDropdownList()}
                    </DropdownButton>
                    <InputGroup.Addon
                        className={"without-box-shadow phone-country-prefix" + (this.state.focused ? ' focused' : '')}
                        onClick={this.emulateFocus}
                    >
                        {this.state.selected.phoneCode}
                    </InputGroup.Addon>
                    <InputElement
                        value={this.state.phoneNumberWithoutCode}
                        ref={(ref) => this.phoneInput = ref}
                        onFocus={this.phoneInputFocus}
                        onBlur={this.phoneInputBlur}
                        onChange={this.setPhoneNumberState}
                        type="text"
                        className="phone-number-input without-box-shadow form-control"
                        placeholder="495 123-45-67"
                        mask={this.state.selected.phoneMask}
                        maskChar="_"
                    />
                </InputGroup>
                <input type="hidden" name="phone" value={this.state.phoneNumber} />
            </FormGroup>
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

    select(item) {
        this.setState({ selected: item });
    }

    renderDropdownList() {
        var items = [];

        for (let i = 0; i < this.state.countries.length; i++) {
            var item = this.state.countries[i];
            items.push(
                <MenuItem
                    key={item.abbr}
                    onClick={this.select.bind(this, item)}
                    className="phone-dropdown-control__item"
                >
                    <img src={'assets/phone/img/' + item.img} alt={item.name} />{item.name}
                </MenuItem>
            );
        }

        return items;
    }

    toggleOpenedState() {
        this.setState({ opened: !this.state.opened });
    }

    emulateFocus() {
        if (this.phoneInput !== null) {
            ReactDOM.findDOMNode(this.phoneInput).focus();
        }
    }

    setPhoneNumberState(e) {
        this.setState({ phoneNumberWithoutCode: e.target.value }, () => {
            this.setPhoneNumber();
        });
    }

    setPhoneNumber() {
        const phoneNumber = this.state.selected.phoneCode + this.state.phoneNumberWithoutCode;
        this.setState({phoneNumber: phoneNumber});
    }
}
