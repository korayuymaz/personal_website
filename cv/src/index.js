import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function AboutMe(props) {
  if (!props.warn) {
    return null;
  }

  return (
      <div>
        Stuff About Me Will Go Here!
      </div>
  );
}

class AboutMeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(){
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return(
        <div>
          <button onClick={this.handleToggleClick}>
            About Me
          </button>
          <AboutMe warn={this.state.showWarning} />
        </div>
    );
  }
}


function App() {
    return (
        <div className="First-page">
            <div className="Entry">
                <h1>Koray Uymaz</h1>
                <p class="lead">Interactive Resume</p>
            </div>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
        <AboutMeButton/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
