import React from 'react';
import './styles.scss';
import TopNav from '../TopNav';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <>
                <TopNav />
                <div className="bgimg">
                    {/* <div className="topleft">
                        <p>Logo</p>
                    </div>
                    <div className="middle">
                        <h1>COMING SOON</h1>
                        <hr />
                        <p>35 days left</p>
                    </div> */}
                </div>
            </>
        );
    }
}

export default (Home);
