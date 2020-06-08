import React, { Component } from "react";
import { withAlert } from "react-alert";

import PropTypes from "prop-types";
import { connect } from "react-redux";
//import messages from "../reducers/messages";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.firstname) {
        alert.error("le Prenom est obligatoire");
      }
      if (error.msg.lastname) {
        alert.error("le nom est obligatoire");
      }
      if (error.msg.address) {
        alert.error("l'adresse est obligatoire");
      }
      if (error.msg.phone) {
        alert.error("le numero de téléphone est obligatoire");
      }

      if (error.msg.non_field_errors) {
        alert.error("Identifiants incorrects");
      }
      if (error.msg.passwordError) {
        alert.error(error.msg.passwordError);
      }
      if (error.msg.passwordConfirm) {
        alert.error(error.msg.passwordConfirm);
      }
    }

    if (message !== prevProps.message) {
      if (message.memberDeleted) {
        alert.success(message.memberDeleted);
      }
      if (message.memberAdded) {
        alert.success(message.memberAdded);
      }

      if (message.passwordChanged) {
        alert.success(message.passwordChanged);
      }

      if (message.subscriberAdded) {
        alert.success(message.subscriberAdded);
      }

      if (message.subscriberDeleted) {
        alert.success(message.subscriberDeleted);
      }
    }
  }

  render() {
    return <React.Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
