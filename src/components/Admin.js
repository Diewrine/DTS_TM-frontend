import React, { Component } from "react";
import Form from "./Form";
import Members from "./Members";
import Subscribers from "./Subscribers";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout, updatedPassword } from "../actions/authAction";
import { returnErrors } from "../actions/messagesAction";

import { Modal } from "antd";

class Admin extends Component {
  state = {
    show: false,
    old_password: "",
    new_password: "",
    password_confirm: "",
  };

  static propTypes = {
    logout: PropTypes.func.isRequired,
    updatedPassword: PropTypes.func.isRequired,
    returnErrors: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { old_password, new_password, password_confirm } = this.state;
    if (new_password !== password_confirm) {
      this.props.returnErrors({
        passwordConfirm: "les mots de passe ne correspondent pas !",
      });
    } else {
      this.props.updatedPassword(old_password, new_password);
      this.setState({
        old_password: "",
        new_password: "",
        password_confirm: "",
      });
      this.handleClose();
    }
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    const { old_password, new_password, password_confirm } = this.state;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <a className="navbar-brand" href="/admin">
            Administration
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto" style={{ marginRight: "5%" }}>
              <li className="nav-item active dropleft">
                <a
                  className="nav-link dropdown-toggle"
                  href="#/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Autre
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    className="dropdown-item"
                    href="#/"
                    onClick={() => this.handleShow()}
                  >
                    Utilisateur
                  </a>
                  <Modal
                    title="Changer le mot de passe"
                    centered
                    visible={this.state.show}
                    //onOk={console.log(this.props.auth.user)}
                    onCancel={this.handleClose}
                    footer={null}
                  >
                    <h4 style={{ marginLeft: "25%" }}>
                      {" "}
                      {this.props.auth.user.username}
                    </h4>
                    <div>
                      <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <label>Actuel mot de passe</label>
                          <input
                            className="form-control"
                            type="password"
                            name="old_password"
                            required="required"
                            onChange={this.onChange}
                            value={old_password}
                          />
                        </div>

                        <div className="form-group">
                          <label>Nouveau mot de passe</label>
                          <input
                            className="form-control"
                            type="password"
                            name="new_password"
                            required="required"
                            onChange={this.onChange}
                            value={new_password}
                          />
                        </div>
                        <div className="form-group">
                          <label>Confirmer le mot de passe</label>
                          <input
                            className="form-control"
                            type="password"
                            name="password_confirm"
                            required="required"
                            onChange={this.onChange}
                            value={password_confirm}
                          />
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-success">
                            Modifier
                          </button>
                        </div>
                      </form>
                    </div>
                  </Modal>

                  <a
                    className="dropdown-item"
                    href="#/"
                    onClick={this.props.logout}
                  >
                    Se déconnecter
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Subscribers />
          <Form />
          <Members />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, {
  logout,
  updatedPassword,
  returnErrors,
})(Admin);
