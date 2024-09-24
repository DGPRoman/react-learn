import React from "react";
import { connect } from 'react-redux';
import Login from "../components/Login/Login";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
  });

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Login />;

            return <Component {...this.props} />;
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
