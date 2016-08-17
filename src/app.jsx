import React from 'react'
import ReactDOM from 'react-dom'
import { Profession } from './components/profession'
import { Phone } from './components/phone'
import {FormGroup, InputGroup, Button, FormControl, DropdownButton, MenuItem} from 'react-bootstrap'
import './main.scss'

class App extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="signup-form-wrapper">
                    <p className="signup-form-text">
                        <strong>Зарегистрируйтесь</strong> и начните продавать услуги через интернет сегодня
                    </p>
                    <form>
                        <div className="row">
                            <div className="col-xs-6">
                                <label>Имя</label>
                                <input className="form-control" name="firstName" />
                            </div>
                            <div className="col-xs-6">
                                <label>Фамилия</label>
                                <input className="form-control" name="lastName" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <label>Профессия</label>
                                <Profession />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <label>Телефон</label>
                                <Phone />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <label>Телефон</label>
                                <FormGroup>
                                    <InputGroup>
                                        <DropdownButton
                                            componentClass={InputGroup.Button}
                                            id="input-dropdown-addon"
                                            title={<img src="assets/phone/img/32/Russia.png" />}
                                        >
                                            <MenuItem key="1">Item</MenuItem>
                                            <MenuItem key="2">Item</MenuItem>
                                            <MenuItem key="3">Item</MenuItem>
                                        </DropdownButton>
                                        <InputGroup.Addon>+7</InputGroup.Addon>
                                        <FormControl type="text" placeholder="123 123" />
                                    </InputGroup>
                                </FormGroup>
                            </div>
                        </div>
                        <button>Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));