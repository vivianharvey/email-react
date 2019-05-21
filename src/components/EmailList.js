import React, { Component } from 'react';

class EmailList extends Component {
    render() {
        const { emails, select } = this.props;
        // Generate Emails list
        const list = emails.map((email, index) => {
            return (
                <div 
                    key={index} 
                    className={"email-item pure-g " + (email.selected ? 'email-item-selected ' : '') + (email.unread ? 'email-item-unread' : '')}
                    onClick={() => select(email.id)}
                >
                    <div className="pure-u">
                        <img width="64" height="64" alt={email.emailName + "'s Avatar"}  className="email-avatar" src={email.avatarSrc} />
                    </div>

                    <div className="pure-u-3-4">
                        <h5 className="email-name">{email.emailName}</h5>
                        <h4 className="email-subject">{email.emailSubject}</h4>
                        <p className="email-desc">
                            {email.emailDesc}
                        </p>
                    </div>
                </div>
            )
        });
        // Render list
        if( emails.length < 1) {
            return ( 
                <div id="list" className="pure-u-1">
                    <p id="empty-text">Hmmm, there's nothing here!</p>
                </div>
            )
        } else {
            return (
                <div id="list" className="pure-u-1">
                    {list}
                </div>
            )
        }
    }
}

export default EmailList;