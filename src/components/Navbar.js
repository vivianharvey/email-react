import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div id="nav" className="pure-u">
                <a className="nav-menu-button">Menu</a>
        
                <div className="nav-inner">
                    <button className="primary-button pure-button" onClick={() => this.props.switchMainContent('compose')}>Compose</button>
        
                    <div className="pure-menu">
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a className="pure-menu-link"  onClick={() => this.props.switchInbox('inbox')}>Inbox <span className="email-count">{this.props.unreadCount ? `(${this.props.unreadCount})` : ''}</span></a></li>
                            <li className="pure-menu-item"><a  className="pure-menu-link" onClick={() => this.props.switchInbox('sent')}>Sent</a></li>
                            <li className="pure-menu-item"><a  className="pure-menu-link">Drafts</a></li>
                            <li className="pure-menu-item"><a  className="pure-menu-link" onClick={() => this.props.switchInbox('trash')} >Trash</a></li>
                            <li className="pure-menu-heading">Labels</li>
                            <li className="pure-menu-item"><a className="pure-menu-link"><span className="email-label-personal"></span>Personal</a></li>
                            <li className="pure-menu-item"><a className="pure-menu-link"><span className="email-label-work"></span>Work</a></li>
                            <li className="pure-menu-item"><a className="pure-menu-link"><span className="email-label-travel"></span>Travel</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;