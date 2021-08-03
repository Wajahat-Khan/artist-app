import React from 'react';
import './styles.scss';
import TopNav from '../TopNav';
import logo from '../../logo.svg';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <>
                <TopNav />
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Landing Page
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </>
        );
    }
}

export default (Home);
