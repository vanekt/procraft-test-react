import React from 'react'
import {FormGroup, InputGroup, FormControl, DropdownButton, MenuItem} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

var countries = [
    { abbr: "ru", img: "Russia.png", name: "Россия", phoneCode: "+7" },
    { abbr: "de", img: "Germany.png", name: "Германия", phoneCode: "+49" },
    { abbr: "fi", img: "Finland.png", name: "Финляндия", phoneCode: "+358" },
    { abbr: "kz", img: "Kazakhstan.png", name: "Казахстан", phoneCode: "+7" },
    { abbr: "uk",  img: "United-Kingdom.png", name: "Великобритания", phoneCode: "+44" }
];

export class Phone extends React.Component {
    constructor() {
        super();

        this.state = {
            selected: countries[0],
            focused: false,
            opened: false
        };

        this.dropDownOnSelectCallback = this.dropDownOnSelectCallback.bind(this);
        this.phoneInputFocus = this.phoneInputFocus.bind(this);
        this.phoneInputBlur = this.phoneInputBlur.bind(this);
        this.renderDropdownList = this.renderDropdownList.bind(this);
        this.toggleOpenedState = this.toggleOpenedState.bind(this);
    }

    render() {
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
                    >
                        {this.renderDropdownList()}
                    </DropdownButton>
                    <InputGroup.Addon className={"without-box-shadow phone-country-prefix" + (this.state.focused ? ' focused' : '')}>
                        {this.state.selected.phoneCode}
                    </InputGroup.Addon>
                    <FormControl onFocus={this.phoneInputFocus}
                                 onBlur={this.phoneInputBlur}
                                 className="phone-number-input without-box-shadow"
                                 type="text"
                                 placeholder="495 123-45-67" />
                </InputGroup>
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
        var items = [],
            that = this;

        for (var i = 0; i < countries.length; i++) {
            var item = countries[i];
            items.push(
                <MenuItem key={item.abbr} onClick={this.select.bind(that, item)} className="phone-dropdown-control__item">
                    <img src={'assets/phone/img/' + item.img} alt={item.name} />{item.name}
                </MenuItem>
            );
        }

        return items;
    }

    toggleOpenedState() {
        this.setState({ opened: !this.state.opened });
    }
}
