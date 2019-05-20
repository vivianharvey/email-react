import React, { Component } from 'react';

class EmailContent extends Component {
    render() {
        const { currentEmail } = this.props;
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
                        <button className="secondary-button pure-button">Move to</button>
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

export default EmailContent;