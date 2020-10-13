import React from 'react';
import '../styles/ButtonBox.css';
import '../styles/FancyButtons.css';
import '../styles/ListStyle.css';
import StarFilled from "./StarFilled";
import StarNotFilled from "./StarNotFilled";

function Abilities(props) {
    if (!props.ability) {
        return null;
    }

    return (
        <div id="abilities" class="container">
            <h2>Abilities</h2>
            <div class="row">
                <div class="col-md-6">
                    <div className="grid-container">
                        <div className="ability">
                            <span>Bootstrap Framework</span>
                        </div>
                        <div className="score">
                                <StarFilled/>
                                <StarFilled/>
                                <StarFilled/>
                                <StarFilled/>
                                <StarNotFilled/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AboutMe(props) {
    if (!props.about_me) {
        return null;
    }

    return (
        <div>
            Stuff About Me Will Go Here!
        </div>
    );
}

function ContactMe(props) {
    if (!props.contact_me) {
        return null;
    }

    return (
        <div>
            Connections that I have will go here!
        </div>
    );
}

function WorkHistory(props) {
    if (!props.work) {
        return null;
    }

    return (
        <div>
            My Work History Will Go Here!
        </div>
    );
}

class MyButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAbilities: false,
            showContact: false,
            showAboutMe: false,
            showWork: false
        };
        this.handleAbilitiesClick = this.handleAbilitiesClick.bind(this);
        this.handleAboutMeClick = this.handleAboutMeClick.bind(this);
        this.handleContactClick = this.handleContactClick.bind(this);
        this.handleWorkClick = this.handleWorkClick.bind(this);
    }

    handleAbilitiesClick() {
        this.setState(state => ({
            showAbilities: !state.showAbilities,
            showAboutMe: false,
            showContact: false,
            showWork: false
        }));
    }

    handleAboutMeClick() {
        this.setState(state => ({
            showAbilities: false,
            showAboutMe: !state.showAboutMe,
            showContact: false,
            showWork: false
        }));
    }

    handleContactClick() {
        this.setState(state => ({
            showAbilities: false,
            showAboutMe: false,
            showContact: !state.showContact,
            showWork: false
        }));
    }

    handleWorkClick() {
        this.setState(state => ({
            showAbilities: false,
            showAboutMe: false,
            showContact: false,
            showWork: !state.showWork
        }));
    }

    render() {
        return (
            <div className="InformationPage">
                <div>
                    <button className="myButton" onClick={this.handleAboutMeClick}>
                        About Me
                    </button>
                    <button className="myButton" onClick={this.handleWorkClick}>
                        Work History
                    </button>
                    <button class="myButton" onClick={this.handleAbilitiesClick}>
                        Abilities
                    </button>
                    <button class="myButton" onClick={this.handleContactClick}>
                        Contact Me
                    </button>
                </div>
                <div className="ButtonText">
                    <Abilities ability={this.state.showAbilities}/>
                    <AboutMe about_me={this.state.showAboutMe}/>
                    <ContactMe contact_me={this.state.showContact}/>
                    <WorkHistory work={this.state.showWork}/>
                </div>
            </div>
        )
            ;
    }
}

export default MyButtons;
