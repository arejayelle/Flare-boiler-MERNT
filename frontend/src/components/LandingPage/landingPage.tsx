import React from 'react';

import LoginBox from './loginBox';
import RegisterBox from './registerBox'

type MyProps = {};
type MyState = { IsLoginOpen: boolean };

class LandingPage extends React.Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = { IsLoginOpen: true };
    }

    showLoginBox() {
        this.setState({ IsLoginOpen: true });
    }

    showRegisterBox() {
        this.setState({ IsLoginOpen: false });
    }


    render() {
        return (
            <div className="root-container">
                <div className="Selector">
                    <div className="select" onClick={this.showLoginBox.bind(this)}>Login</div>
                    <div className="select" onClick={this.showRegisterBox.bind(this)}>Register</div>
                </div>
                <div className="box-container">
                    {this.state.IsLoginOpen && <LoginBox />}
                    {!(this.state.IsLoginOpen) && <RegisterBox />}
                </div>

            </div>
        );
    }
}

export default LandingPage;