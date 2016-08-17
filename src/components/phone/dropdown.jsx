import React from 'react'

export default class DropDown extends React.Component {
    constructor () {
        super();

        this.select = this.select.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.renderListItems = this.renderListItems.bind(this);
    }

    componentWillMount() {
        this.state = {
            listVisible: false,
            selected: this.props.selected
        };
    }

    select(item) {
        this.setState({ selected: item });
        this.props.onSelectCallback(item);
    }

    show() {
        this.setState({ listVisible: true });
        document.addEventListener("click", this.hide);
    }

    hide() {
        this.setState({ listVisible: false });
        document.removeEventListener("click", this.hide);
    }

    render() {
        return (
            <div className={"phone-input__dropdown-container"}>
                <div className={"phone-input__dropdown-display" + (this.state.listVisible ? "--clicked": "")} onClick={this.show}>
                    <img src={'assets/phone/img/32/' + this.state.selected.img} alt={this.state.selected.name} />
                    <i className="fa fa-angle-down"></i>
                </div>
                <div className={"phone-input__dropdown-list" + (this.state.listVisible ? "--show" : "")}>
                    <div>
                        {this.renderListItems()}
                    </div>
                </div>
            </div>
        );
    }

    renderListItems() {
        var items = [];
        for (var i = 0; i < this.props.list.length; i++) {
            var item = this.props.list[i];
            items.push(
                <div key={item.abbr} onClick={this.select.bind(null, item)} className="phone-input__dropdown-list-item">
                    <img src={'assets/phone/img/32/' + item.img} alt={item.name} />
                </div>
            );
        }

        return items;
    }
}