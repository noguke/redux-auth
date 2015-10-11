import React, { PropTypes } from "react";
import EmailSignInSuccessModal from "./modals/EmailSignInSuccessModal";
import EmailSignUpSuccessModal from "./modals/EmailSignUpSuccessModal";
import EmailSignUpErrorModal from "./modals/EmailSignUpErrorModal";
import SignOutSuccessModal from "./modals/SignOutSuccessModal";
import SignOutErrorModal from "./modals/SignOutErrorModal";
import { connect } from "react-redux";

@connect(({authUi}) => ({authUi}))
class AuthModals extends React.Component {
  static propTypes = {
    signOutSuccessEnabled: PropTypes.bool,
    signOutErrorEnabled: PropTypes.bool,
    emailSignInSuccessEnabled: PropTypes.bool,
    emailSignUpSuccessEnabled: PropTypes.bool,
    emailSignUpErrorEnabled: PropTypes.bool
  }

  static defaultProps = {
    signOutSuccessEnabled: true,
    signOutErrorEnabled: true,
    emailSignInSuccessEnabled: true,
    emailSignUpSuccessEnabled: true,
    emailSignUpErrorEnabled: true
  }

  render () {
    let showEmailSignInSuccess = (
      this.props.emailSignInSuccessEnabled &&
      this.props.authUi.get("emailSignInSuccessModalVisible")
    );

    let showEmailSignUpSuccess = (
      this.props.emailSignUpSuccessEnabled &&
      this.props.authUi.get("emailSignUpSuccessModalVisible")
    );

    let showEmailSignUpError = (
      this.props.emailSignUpErrorEnabled &&
      this.props.authUi.get("emailSignUpErrorModalVisible")
    );

    let showSignOutSuccess = (
      this.props.signOutSuccessEnabled &&
      this.props.authUi.get("signOutSuccessModalVisible")
    );

    let showSignOutError = (
      this.props.signOutErrorEnabled &&
      this.props.authUi.get("signOutErrorModalVisible")
    );

    return (
      <div id="auth-modals">
        <EmailSignInSuccessModal show={showEmailSignInSuccess} />
        <EmailSignUpSuccessModal show={showEmailSignUpSuccess} />
        <EmailSignUpErrorModal show={showEmailSignUpError} />
        <SignOutSuccessModal show={showSignOutSuccess} />
        <SignOutErrorModal show={showSignOutError} />
      </div>
    );
  }
}

export default AuthModals;