import React, { Component } from 'react';

class EmailContent extends Component {
    render() {
        const { currentEmail, trash, sent, emails } = this.props;
        // Check if the currentEmail is from the inbox (will have delete button if true)
        if((emails.findIndex(email => email.id === currentEmail.id)) !== -1) {
            return (
                <div className="email-content">
                    <div className="email-content-header pure-g">
                        <div className="pure-u-1-2">
                            <h1 className="email-content-title">{currentEmail.emailSubject}</h1>
                            <p className="email-content-subtitle">
                                From <a>{currentEmail.emailName}</a> at <span>{currentEmail.emailTime}</span>
                            </p>
                        </div>
        
                        <div className="email-content-controls pure-u-1-2">
                            <button className="secondary-button pure-button">Reply</button>
                            <button className="secondary-button pure-button">Forward</button>
                            <button className="secondary-button pure-button" onClick={() => this.props.delete(currentEmail.id)} >Delete</button>
                        </div>
                    </div>
        
                    <div className="email-content-body">
                        {currentEmail.emailText.map((p, index) => {
                            return (
                                <p key={index}>{p}</p>
                            )
                        })}
                        <p>
                            Regards,<br />
                            {currentEmail.emailName}
                        </p>
                    </div>
                </div>
            )
        // Check if the currentEmail is in the Sent folder (Will have reworded header if true)
        } else if(currentEmail.emailRecip) {
            return (
                <div className="email-content">
                    <div className="email-content-header pure-g">
                        <div className="pure-u-1-2">
                            <h1 className="email-content-title">{currentEmail.emailSubject}</h1>
                            <p className="email-content-subtitle">
                                Sent to <a>{currentEmail.emailRecip}</a> at <span>{currentEmail.emailTime}</span>
                            </p>
                        </div>
        
                        <div className="email-content-controls pure-u-1-2">
                            <button className="secondary-button pure-button">Reply</button>
                            <button className="secondary-button pure-button">Forward</button>
                        </div>
                    </div>
        
                    <div className="email-content-body">
                        {currentEmail.emailText.map((p, index) => {
                            return (
                                <p key={index}>{p}</p>
                            )
                        })}
                        <p>
                            Regards,<br />
                            {currentEmail.emailName}
                        </p>
                    </div>
                </div>
            )
        // If currentEmail is in Trash, there's no delete button
        } else {
            return (
                <div className="email-content">
                    <div className="email-content-header pure-g">
                        <div className="pure-u-1-2">
                            <h1 className="email-content-title">{currentEmail.emailSubject}</h1>
                            <p className="email-content-subtitle">
                                From <a>{currentEmail.emailName}</a> at <span>{currentEmail.emailTime}</span>
                            </p>
                        </div>
        
                        <div className="email-content-controls pure-u-1-2">
                            <button className="secondary-button pure-button">Reply</button>
                            <button className="secondary-button pure-button">Forward</button>
                        </div>
                    </div>
        
                    <div className="email-content-body">
                        {currentEmail.emailText.map((p, index) => {
                            return (
                                <p key={index}>{p}</p>
                            )
                        })}
                        <p>
                            Regards,<br />
                            {currentEmail.emailName}
                        </p>
                    </div>
                </div>
            )
        }
    }
}

export default EmailContent;