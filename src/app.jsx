import React from 'react'
import ReactDOM from 'react-dom'
import { Profession } from './components/profession'
import { Phone } from './components/phone'
import './main.scss'

class App extends React.Component {

    constructor() {
        super();

        this.isDisabledSubmit = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.disableSubmitHandler = this.disableSubmitHandler.bind(this);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="signup-form-wrapper">
                    <p className="signup-form-text">
                        <strong>Зарегистрируйтесь</strong> и начните продавать услуги через интернет сегодня
                    </p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-xs-6 first-name-wrapper">
                                <label htmlFor="first-name">Имя</label>
                                <input
                                    id="first-name"
                                    name="firstName"
                                    className="form-control without-box-shadow"
                                />
                            </div>
                            <div className="col-xs-6 last-name-wrapper">
                                <label htmlFor="last-name">Фамилия</label>
                                <input
                                    id="last-name"
                                    name="lastName"
                                    className="form-control without-box-shadow"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <label htmlFor="profession">Профессия</label>
                                <Profession disableSubmitHandler={this.disableSubmitHandler} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <label htmlFor="phone">Телефон</label>
                                <Phone />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 signup-form-submit-button__wrapper">
                                <button className="btn btn-primary">Зарегистрироваться</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    handleSubmit(e) {
        if (this.state.isDisabledSubmit) {
            e.preventDefault();
            this.setState({isDisabledSubmit: false});
        }
    }

    disableSubmitHandler() {
        this.setState({isDisabledSubmit: true});
    }
}

ReactDOM.render(<App />, document.getElementById('app'));