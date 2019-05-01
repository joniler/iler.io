import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import OverlayModal from '../../../hoc/OverlayModal/OverlayModal';
import axios from 'axios';
import './Contact.scss';

class Contact extends Component {
    // Constructs form in application state
    state = {
        name: '',
        email: '',
        phone: '',
        business: '',
        message: '',
        sent: false,
        buttonText: 'SEND'
    }

    // Uses Axios to send contact form to our API
    formSubmit = (e) => {
        e.preventDefault();
        this.setState({
            buttonText: '...Sending'
        });
        let data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            business: this.state.business,
            message: this.state.message
        }
        axios.post('ilermailer.joniler.now.sh', data)
        .then( res => {
            this.setState({sent: true}, this.resetForm());
        })
        .catch( (err) => {
            console.log('Message not sent:' + err);
        })
    }

    // Resets form once it has been sent
    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            phone: '',
            business: '',
            message: '',
            buttonText: 'Sent!'
        })
    }

    render() {
        return(
            <div className="contact">
            <h1>HIT ME UP!</h1>
            <form onSubmit={ e => this.formSubmit(e)} method="post">
                <input 
                    onChange={e => this.setState({name: e.target.value})}
                    required 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name *"/>
                <input
                    onChange={e => this.setState({email: e.target.value})} 
                    required 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email *"/>
                <input 
                    onChange={e => this.setState({phone: e.target.value})}
                    type="text" 
                    name="phone" 
                    id="phone" 
                    placeholder="Phone"/>
                <input 
                    onChange={e => this.setState({business: e.target.value})}
                    type="text" 
                    name="business" 
                    id="business" 
                    placeholder="Business Name"/>
                <textarea 
                    onChange={e => this.setState({message: e.target.value})}
                    required 
                    placeholder="Your message here! *" 
                    name="message" 
                    id="message" 
                    cols="30" 
                    rows="10"></textarea>
                <button type="submit" className={this.state.sent === false ? "" : "sent"}>
                    {this.state.buttonText} <FontAwesomeIcon icon={this.state.sent === false ? "paper-plane" : "check"}/>
                </button>
            </form>
        </div>
        )
    }    
}

export default OverlayModal(Contact);