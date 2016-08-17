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
        return <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
            <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
                <span style={{ color: this.state.selected.hex }}>{this.state.selected.name}</span>
                <i className="fa fa-angle-down"></i>
            </div>
            <div className="dropdown-list">
                <div>
                    {this.renderListItems()}
                </div>
            </div>
        </div>;
    }

    renderListItems() {
        var items = [];
        for (var i = 0; i < this.props.list.length; i++) {
            var item = this.props.list[i];
            items.push(<div key={item.abbr} onClick={this.select.bind(null, item)}>
                <span>{item.name}</span>
            </div>);
        }
        return items;
    }
}