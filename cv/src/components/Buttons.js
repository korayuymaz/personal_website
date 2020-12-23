import React from 'react';
import '../styles/FancyButtons.css';
import '../styles/InformationPage.css';
import '../styles/Work.css';
import '../styles/AboutMe.css';
import '../styles/Abilities.css';
import StarFilled from "./StarFilled";
import StarNotFilled from "./StarNotFilled";
import 'react-bootstrap';

function Welcome(props){
    if (!props.welcome) {
        return null;
    }

    return (
        <div id="welcome">
            <div className="row justify-content-center">
                <div class="col-8">
                    <div class="Greeting">
                        <span >Hi I'm Koray Uymaz</span>
                        <br/>
                        <p>
                            I'm a Software Engineer who is looking for opportunities to improve himself.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Abilities(props) {
    if (!props.ability) {
        return null;
    }

    return (
        <div id="abilities">
            <h6>Abilities</h6>
            <br/>
            <div>
                <div>
                    <div className="grid-container">
                        <div className="ability">
                            <span>Bootstrap Framework</span>
                        </div>
                        <div className="score">
                            <StarFilled/>
                            <StarFilled/>
                            <StarFilled/>
                            <StarNotFilled/>
                            <StarNotFilled/>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="ability">
                            <span>React Js</span>
                        </div>
                        <div className="score">
                            <StarFilled/>
                            <StarFilled/>
                            <StarFilled/>
                            <StarNotFilled/>
                            <StarNotFilled/>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="ability">
                            <span>HTML</span>
                        </div>
                        <div className="score">
                            <StarFilled/>
                            <StarFilled/>
                            <StarFilled/>
                            <StarNotFilled/>
                            <StarNotFilled/>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="ability">
                            <span>CSS</span>
                        </div>
                        <div className="score">
                            <StarFilled/>
                            <StarFilled/>
                            <StarFilled/>
                            <StarNotFilled/>
                            <StarNotFilled/>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="ability">
                            <span>Python</span>
                        </div>
                        <div className="score">
                            <StarFilled/>
                            <StarFilled/>
                            <StarFilled/>
                            <StarFilled/>
                            <StarNotFilled/>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="ability">
                            <span>JavaScript</span>
                        </div>
                        <div className="score">
                            <StarFilled/>
                            <StarFilled/>
                            <StarFilled/>
                            <StarNotFilled/>
                            <StarNotFilled/>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="ability">
                            <span>Unity Game Engine</span>
                        </div>
                        <div className="score">
                            <StarFilled/>
                            <StarFilled/>
                            <StarNotFilled/>
                            <StarNotFilled/>
                            <StarNotFilled/>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="ability">
                            <span>Django</span>
                        </div>
                        <div className="score">
                            <StarFilled/>
                            <StarFilled/>
                            <StarNotFilled/>
                            <StarNotFilled/>
                            <StarNotFilled/>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="ability">
                            <span>Odoo Framework</span>
                        </div>
                        <div className="score">
                            <StarFilled/>
                            <StarFilled/>
                            <StarFilled/>
                            <StarFilled/>
                            <StarFilled/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AboutMe(props) {
    let profile_pic = require('../me.jpg');
    let my_cv = require('../cv.pdf');
    if (!props.about_me) {
        return null;
    }

    return (
        <div className="row justify-content-center">
            <div id="profile-col">
                <img id="profile-pic" src={profile_pic} alt="Koray Uymaz Profile Pic"/>
            </div>
            <div id="about-me">
                <div class="row">
                    <div class="align-self-end">
                        <h6>About Me</h6>
                        <p class="align-justify">Hello there, My name is Koray Uymaz, an Industry Engineer who is really
                            interested in coding.
                            I have born at 1997 in Turkey and I have been living in there since then.
                            I have been learning different code languages since high school.
                            When I first started to coding I had tried to make my own game with the little time I have
                            with
                            my mothers
                            computer
                            but it did not worked out. In University when I got my first computer I worked on Unity Game
                            Engine and
                            actually
                            achieved to become a certificated developer. At the moment I am working on Python and
                            Javascript
                            development
                            in my work and at my free time.
                            I am interested in musical instruments and I like to travel although I love games I am also
                            really fund of
                            learning about other countries culture This site is for hobby and for a little bit a
                            portfolio.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8 no-padding">
                        <h6 class="align-left">Contact Details</h6>
                        <p className="align-justify">
                            <span>Koray Uymaz</span><br/>
                            <span>Kartal<br/>
						         Istanbul, 34870
                            </span>
                            <br/>
                            <span>korayuymaz@gmail.com</span>
                        </p>
                    </div>
                    <div classs="col-2">
                        <a class="button" href={my_cv}><i class="fa fa-download"></i><span>Download
                            Resume </span></a>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

function WorkHistory(props) {
    if (!props.work) {
        return null;
    }

    let company_logo = require("../tusas_logo.jpg")
    return (
        <div class="Work">
            <div class="row justify-content-center">
                <div id="company-logo">
                    <img className="company_logo"
                         src={company_logo}
                         loading="auto" alt="tusas-logo"/>
                </div>
                <div id="work-detail">
                    <h5> Turkish Aerospace Industries </h5>
                    <h7> Software Design Engineer</h7>
                    <p>
                    <br/>
                    <span>
                        June 2019 - Present
                        <br/>
                        Istanbul, Turkey
                    </span>
                    </p>
                    <p className="align-left">
                        - Working with a Scrum team of four
                        <br/>
                        - Developed Odoo module using Python
                        <br/>
                        - Created user dashboard for statistics using Highcharts.js
                    </p>
                </div>

            </div>
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
            showWork: false,
            showWelcome: true
        };
        this.handleAbilitiesClick = this.handleAbilitiesClick.bind(this);
        this.handleAboutMeClick = this.handleAboutMeClick.bind(this);
        this.handleWorkClick = this.handleWorkClick.bind(this);
    }

    handleAbilitiesClick() {
        if (this.state.showAbilities !== true){
            this.setState(state => ({
            showAbilities: !state.showAbilities,
            showAboutMe: false,
            showContact: false,
            showWork: false,
            showWelcome: false
        }));
        }else {
            this.setState(state => ({
                showAbilities: false,
                showAboutMe: false,
                showContact: false,
                showWork: false,
                showWelcome: true
            }));
        }

    }

    handleAboutMeClick() {
        if (this.state.showAboutMe !== true){
                this.setState(state => ({
                showAbilities: false,
                showAboutMe: !state.showAboutMe,
                showContact: false,
                showWork: false,
                showWelcome: false
            }));
        }else{
             this.setState(state => ({
                showAbilities: false,
                showAboutMe: false,
                showContact: false,
                showWork: false,
                showWelcome: true
            }));
        }

    }


    handleWorkClick() {
        if (this.state.showWork !== true){
                this.setState(state => ({
                showAbilities: false,
                showAboutMe: false,
                showContact: false,
                showWork: !state.showWork,
                showWelcome: false
            }));
        }else{
            this.setState(state => ({
                showAbilities: false,
                showAboutMe: false,
                showContact: false,
                showWork: false,
                showWelcome: true
            }));
        }

    }

    render() {
        return (
            <div className="InformationPage">
                <div className="myButton" onClick={this.handleAboutMeClick}>
                    About Me
                </div>
                <div className="myButton" onClick={this.handleWorkClick}>
                    Work History
                </div>
                <div class="myButton" onClick={this.handleAbilitiesClick}>
                    Abilities
                </div>
                <div className="ButtonText">
                    <Welcome welcome={this.state.showWelcome}/>
                    <Abilities ability={this.state.showAbilities}/>
                    <AboutMe about_me={this.state.showAboutMe}/>
                    <WorkHistory work={this.state.showWork}/>
                </div>
            </div>
        )
            ;
    }
}

export default MyButtons;
