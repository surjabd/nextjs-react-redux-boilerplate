import React from 'react';
import {connect} from 'react-redux';
import {loginUser, registerUser} from "../redux/actions/authActions";


class App extends React.Component {

    static getInitialProps({store}) {
    }


    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <dib>Start Modifying From Here</dib>
        );
    }
}

const mapStateToProps = state => ({
    authReducer: state.auth
});

const mapDispatchToState = (dispatch, ownProps) => {
    return {
        loginUser: (data) => dispatch(loginUser(data)),

    }
};
export default connect(mapStateToProps, mapDispatchToState)(App);

