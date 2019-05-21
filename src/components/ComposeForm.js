import React, { Component } from 'react';
import Moment from 'moment';

class ComposeForm extends Component {
    // State
    constructor(props) {
        super(props)
        this.initialState = {
            id: this.props.idStart,
            unread: false,
            selected: false,
            avatarSrc: 'https://avatars0.githubusercontent.com/u/33965202?v=4',
            emailName: 'VivtheFish',
            emailRecip: '',
            emailSubject: '',
            emailDesc: '',
            emailTime: '',
            emailText: '',
        }
        this.state = this.initialState
    }
    // Methods
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        })
    }
    submitForm = () => {
        // Check that there is a recipient email specified
        if(this.state.emailRecip === '') return;
        // Check/assert if they want to sent with no subject
        if(this.state.emailSubject === '') {
            if(!(window.confirm("You didn't include a Subject. Do you want to send anyway?"))) {
                return;
            } else {
                this.setState({
                    emailSubject: ((this.state.emailSubject === '') ? '(No Subject)' : this.state.emailSubject),
                    emailDesc: (this.state.emailText).substring(0,50) + "...",
                    emailTime: Moment(new Date()).format('h:mma, MMMM Do, YYYY'),
                    emailText: [ this.state.emailText ]
                }, 
                () => {
                    this.props.handleSubmit(this.state)
                    this.setState(this.initialState)
                });
            }
        // Save the email to the sent box
        } else {
            this.setState({
                emailSubject: ((this.state.emailSubject === '') ? '(No Subject)' : this.state.emailSubject),
                emailDesc: (this.state.emailText).substring(0,50) + "...",
                emailTime: Moment(new Date()).format('h:mma, MMMM Do, YYYY'),
                emailText: [ this.state.emailText ]
            }, 
            () => {
                this.props.handleSubmit(this.state)
                this.setState(this.initialState)
            });
        }
    }

    // Template
    render() {
        const { emailSubject, emailText, emailRecip}  = this.state
        return (
            <div id="compose-form">
                <form className="pure-form pure-form-stacked">
                    <fieldset>
                        <legend><h2>Compose a New Email</h2></legend>

                        <label htmlFor="emailRecip">Recipient's Email(s):</label>
                        <input name="emailRecip" value={emailRecip} onChange={this.handleChange} type="email" required />
        
                        <label htmlFor="emailSubject">Subject:</label>
                        <input name="emailSubject" type="text" value={emailSubject} onChange={this.handleChange} />
        
                        <label htmlFor="emailText">Your Message:</label>
                        <textarea name="emailText" id="emailText" cols="50" rows="8"  value={emailText} onChange={this.handleChange}></textarea>
        
                        <button type="submit" className="pure-button pure-button-primary" onClick={() => this.submitForm()} >Send</button>
                        <button className="pure-button" onClick={() => this.props.switchMainContent('viewEmail')}>Cancel</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default ComposeForm;