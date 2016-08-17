import React from 'react'
import DropDown from './dropdown'

var countries = [
    { abbr: "ru", img: "Russia.png", name: "Россия", phoneCode: "+7" },
    { abbr: "kz", img: "Kazakhstan.png", name: "Казахстан", phoneCode: "+7" },
    { abbr: "uk",  img: "United-Kingdom.png", name: "United Kingdom", phoneCode: "+44" }
];

export class Phone extends React.Component {
    render() {

        return (
            <div>
                <div>
                    {/*<img src="img/phone/img/32/Russia.png" alt />*/}
                </div>
                <DropDown list={countries} selected={countries[0]} />
                <input defaultValue={'+7'} />
                <input placeholder="929 777 1234" />
            </div>
        );
    }
}
