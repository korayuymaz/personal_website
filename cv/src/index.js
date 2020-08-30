import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as serviceWorker from './serviceWorker';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function App() {
    return (
        <div className="First-page">
            <div className="Entry">
                <h1>Koray Uymaz</h1>
                <p class="lead">Interactive Resume</p>
            </div>
            <Button variant="outlined">Default</Button>
            <Button variant="outlined" onClick={() => {alert('clicked')}}>Click me</Button>
            <div className="Work-history">
                <h1>Work</h1>
            </div>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
