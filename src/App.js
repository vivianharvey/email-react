import React, { Component } from 'react';
import Moment from 'moment';
import Navbar from './components/Navbar';
import EmailList from './components/EmailList';
import EmailContent from './components/EmailContent';
import ComposeForm from './components/ComposeForm';

class App extends Component {
    // Lifecycle
    componentDidMount() {
        const url = 'https://my.api.mockaroo.com/email-project.json?key=26e98c30'

        fetch(url)
            .then(result => result.json())
            .then(result =>{
                console.log(result)
                let newID = 1000;
                let newEmails = result.map(email => {
                    email.id = newID;
                    newID++;
                    email.unread = true;
                    email.selected = false;
                    email.emailDesc = (email.emailText).substring(0,50) + "...";
                    email.emailTime = Moment(new Date()).format('h:mma, MMMM Do, YYYY');
                    email.emailText = [ email.emailText ];
                    return email;
                })
                this.setState({
                    newEmails: [...newEmails]
                })
            })
        let count = 0;
        setInterval(() => {
            if(count < 10) {
                this.state.newEmails[count].emailTime = Moment(new Date()).format('h:mma, MMMM Do, YYYY');
                this.setState({
                    emails: [this.state.newEmails[count], ...this.state.emails]
                }, () => {
                    count++;
                })
            }
        }, 60000)
    }
    // State
    state = {
        idStart: 6,
        mainContent: 'viewEmail',
        inbox: "inbox",
        newEmails: [],
        currentEmail: {
            "id": 1,  
            "unread": false,
            "selected": true,
            "avatarSrc": "https://purecss.io/img/common/andrew-avatar.png", 
            "emailName": "Joe Froo", 
            "emailSubject": "What time is it right now?",
            "emailDesc": "Hey just wondering if you know what time it is right now? If not, that's okay.",
            "emailTime": "3:56pm, April 3, 2019",
            "emailText": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Officia non aliqua reprehenderit duis excepteur eu nostrud nisi aute qui esse. Sit pariatur et nisi deserunt. Adipisicing ipsum incididunt et Lorem minim magna. Ipsum magna commodo dolore ad ipsum."
            ] 
        },
        trash: [],
        sent: [],
        emails: [
            {
                "id": 1,  
                "unread": false,
                "selected": true,
                "avatarSrc": "https://purecss.io/img/common/andrew-avatar.png", 
                "emailName": "Joe Froo", 
                "emailSubject": "What time is it right now?",
                "emailDesc": "Hey just wondering if you know what time it is right now? If not, that's okay.",
                "emailTime": "3:56pm, April 3, 2019",
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
              "emailTime": "11:21am, April 3, 2019",
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
              "emailTime": "1:06pm, April 2, 2019",
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
              "emailTime": "7:55am, April 2, 2019",
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
              "emailTime": "4:57pm, April 1, 2019",
              "emailText": [
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              ]
            }
        ]
    }
    // Methods
    switchInbox = box => {
        this.setState({
            inbox: box
        });
    }
    switchMainContent = content => {
        this.setState({
            mainContent: content
        });
    }
    select = id => {
        const { inbox, emails, trash, sent } = this.state
        if(inbox === 'inbox') {
            // remove class from all emails
            emails.map(email => email.selected = false)
            // get index of selected email
            const index = this.state.emails.findIndex(email => email.id === id);
            // add classes
            this.state.emails[index].selected = true;
            this.state.emails[index].unread = false;
            // show email in viewer tab
            this.setState({
                currentEmail: emails[index]
            })
        } else if(inbox === 'trash') {
            // remove class from all emails
            trash.map(email => email.selected = false)
            // get index of selected email
            const index = this.state.trash.findIndex(email => email.id === id);
            // add classes
            this.state.trash[index].selected = true;
            this.state.trash[index].unread = false;
            // show email in viewer tab
            this.setState({
                currentEmail: trash[index]
            })
            console.log(this.state.currentEmail)
        } else if(inbox === 'sent') {
            // remove class from all emails
            sent.map(email => email.selected = false);
            // get index of selected email
            const index = this.state.sent.findIndex(email => email.id === id);
            // add classes
            this.state.sent[index].selected = true;
            this.state.sent[index].unread = false;
            // show email in viewer tab
            this.setState({
                currentEmail: sent[index]
            })
        }
    }
    delete = id => {
        const { emails } = this.state
        // get index of deleted email
        const index = emails.findIndex(email => email.id === id);
        // remove its selected class
        this.state.emails[index].selected = false;
        // add it to the trash array
        this.state.trash.push(this.state.emails[index]);
        this.setState({
            // remove it from the emails array
            emails: emails.filter((email, i) => {
                return id !== email.id
            }),
        }, () => {
            // Then select the first email of the inbox
            if(this.state.emails.length > 0) {
                this.setState({
                    currentEmail: this.state.emails[0]
                })
                this.state.emails[0].selected = true;
                this.state.emails[0].unread = false;
            }
        })
    }
    unreadCount() {
        let count = 0;
        this.state.emails.map(email => {
            return email.unread ? count++ : ''
        });
        return count;
    }
    handleSubmit = email => {
        this.setState({ 
            idStart: (this.state.idStart + 1),
            sent: [...this.state.sent, email],
            mainContent: 'viewEmail' 
        })
    }
    // Template
    render() {
        let unreadCount = this.unreadCount();
        // Conditional Rendering of Email List depending on "box"
        let emailList;
        if(this.state.inbox === 'inbox') {
            emailList = <EmailList emails={this.state.emails} select={this.select} />
        } else if(this.state.inbox === 'trash') {
            emailList = <EmailList emails={this.state.trash} select={this.select} />
        } else if(this.state.inbox === 'sent') {
            emailList = <EmailList emails={this.state.sent} select={this.select} />
        }
        // Conditional Rendering of Main Content area
        let mainContent;
        if(this.state.mainContent === 'viewEmail') {
            mainContent = <EmailContent currentEmail={this.state.currentEmail} delete={this.delete} trash={this.state.trash} sent={this.state.sent} emails={this.state.emails} />
        } else {
            mainContent = <ComposeForm idStart={this.state.idStart} handleSubmit={this.handleSubmit} switchMainContent={this.switchMainContent} />
        }

        return (
            <div id="layout" className="content pure-g">
                <Navbar unreadCount={unreadCount} switchInbox={this.switchInbox} switchMainContent={this.switchMainContent} />
        
            {emailList}
        
            <div id="main" className="pure-u-1">
                {mainContent}
            </div>
        </div>
        )
    }
}

export default App