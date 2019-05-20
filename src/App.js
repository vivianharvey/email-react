import React, { Component } from 'react';
import Navbar from './components/Navbar';
import EmailList from './components/EmailList';
import EmailContent from './components/EmailContent';

class App extends Component {
    // State
    state = {
        inbox: "inbox",
        currentEmail: {
            "id": 1,  
            "unread": false,
            "selected": true,
            "avatarSrc": "https://purecss.io/img/common/andrew-avatar.png", 
            "emailName": "Joe Froo", 
            "emailSubject": "What time is it right now?",
            "emailDesc": "Hey just wondering if you know what time it is right now? If not, that's okay.",
            "emailTime": "3:56pm, April 3, 2012",
            "emailText": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Officia non aliqua reprehenderit duis excepteur eu nostrud nisi aute qui esse. Sit pariatur et nisi deserunt. Adipisicing ipsum incididunt et Lorem minim magna. Ipsum magna commodo dolore ad ipsum."
            ] 
        },
        emails: [
            {
                "id": 1,  
                "unread": false,
                "selected": true,
                "avatarSrc": "https://purecss.io/img/common/andrew-avatar.png", 
                "emailName": "Joe Froo", 
                "emailSubject": "What time is it right now?",
                "emailDesc": "Hey just wondering if you know what time it is right now? If not, that's okay.",
                "emailTime": "3:56pm, April 3, 2012",
                "emailText": [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "Officia non aliqua reprehenderit duis excepteur eu nostrud nisi aute qui esse. Sit pariatur et nisi deserunt. Adipisicing ipsum incididunt et Lorem minim magna. Ipsum magna commodo dolore ad ipsum."
              ]
            }, 
            {
                "id": 2,
              "unread": true,
              "selected": false,
              "avatarSrc": "https://purecss.io/img/common/tilo-avatar.png", 
              "emailName": "Tilo Mitra", 
              "emailSubject": "Hello from Toronto",
              "emailDesc": "Hey, I just wanted to check in with you from Toronto. I got here earlier today.",
              "emailTime": "3:56pm, April 3, 2012",
              "emailText": [
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "Officia non aliqua reprehenderit duis excepteur eu nostrud nisi aute qui esse. Sit pariatur et nisi deserunt. Adipisicing ipsum incididunt et Lorem minim magna. Ipsum magna commodo dolore ad ipsum."
              ]
            },
            {
                "id": 3,
              "unread": true,
              "selected": false,
              "avatarSrc": "https://purecss.io/img/common/ericf-avatar.png", 
              "emailName": "Eric Ferraiuolo", 
              "emailSubject": "Re: Pull Requests",
              "emailDesc": "Hey, I had some feedback for pull request #51. We should center the menu so it looks better on mobile.",
              "emailTime": "3:56pm, April 3, 2012",
              "emailText": [
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              ]
            },
            {
                "id": 4,
              "unread": true,
              "selected": false,
              "avatarSrc": "https://purecss.io/img/common/yui-avatar.png", 
              "emailName": "Yui Library", 
              "emailSubject": "You have 5 bugs assigned to you",
              "emailDesc": "Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla.",
              "emailTime": "3:56pm, April 3, 2012",
              "emailText": [
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              ]
            },
            {
                "id": 5,
              "unread": true,
              "selected": false,
              "avatarSrc": "https://purecss.io/img/common/reid-avatar.png", 
              "emailName": "Reid Burke", 
              "emailSubject": "Re: Design Language",
              "emailDesc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
              "emailTime": "3:56pm, April 3, 2012",
              "emailText": [
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              ]
            }
        ]
    }
    // Methods
    select = id => {
        const { inbox, emails } = this.state
        if(inbox === 'inbox') {
            // remove class from all emails
            this.setState({
                email: emails.map(email => email.selected = false)
            })
            // get index of selected email
            const index = this.state.emails.findIndex(email => email.id === id);
            // add classes
            this.state.emails[index].selected = true;
            this.state.emails[index].unread = false;
            // show email in viewer tab
            this.setState({
                currentEmail: emails[index]
            })
        }
    }
    unreadCount() {
        let count = 0;
        this.state.emails.map(email => {
            return email.unread ? count++ : ''
        });
        return count;
    }
    // Template
    render() {
        let unreadCount = this.unreadCount();
        return (
            <div id="layout" className="content pure-g">
                <Navbar unreadCount={unreadCount} />
        
            <EmailList emails={this.state.emails} select={this.select} />
        
            <div id="main" className="pure-u-1">
                <EmailContent currentEmail={this.state.currentEmail} />
            </div>
        </div>
        )
    }
}

export default App