import React, {Component} from 'react'
import './Resume.scss'
import logo from '../../images/logo.svg';

class Resume extends Component {
    render() {
        return (
            <div className="resumeContainer">
                <div className="resume">
                    <header className="resumeHeader">
                        <img src={logo} alt="" className="logo"/>
                        <h1>Jon Iler</h1>
                    </header>
                    <section className="resumeContent">

                    </section>
                    <footer className="resumeFooter">

                    </footer>
                </div>
            </div>
        )
    }
}

export default Resume;

