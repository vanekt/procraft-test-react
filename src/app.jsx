import React from 'react'
import ReactDOM from 'react-dom'
import { Profession } from './components/profession'
import { Phone } from './components/phone'
import './main.scss'

class App extends React.Component {

    render() {
        return (
            <div className="signup-form-wrapper">
                <p className="signup-form-text"><strong>Зарегистрируйтесь</strong> и начните продавать услуги через интернет сегодня</p>
                <form>
                    <div>
                        <div className="input-group input-group--inline">
                            <label>Имя</label>
                            <input name="firstName" />
                        </div>
    
                        <div className="input-group input-group--inline">
                            <label>Фамилия</label>
                            <input name="lastName" />
                        </div>
                        
                        <div className="clear"></div>
                    </div>

                    <div className="input-group">
                        <label>Профессия</label>
                        <Profession />
                    </div>

                    <div className="input-group">
                        <label>Телефон</label>
                        <Phone />
                    </div>

                    <button>Зарегистрироваться</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));