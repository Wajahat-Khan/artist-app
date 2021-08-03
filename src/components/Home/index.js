import React from 'react';
import './styles.scss';
import TopNav from '../TopNav';
import logo from '../../logo.svg';
import { getAllAirlines } from '../../js/actions'
import { connect } from "react-redux";

class Home extends React.Component {

    componentDidMount = () => {
        this.props.getAllAirlines()
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
const mapDispatchToProps = dispatch => {
    return {
        getAllAirlines: () => dispatch(getAllAirlines()),
    }
}
export default connect(null, mapDispatchToProps)(Home);
