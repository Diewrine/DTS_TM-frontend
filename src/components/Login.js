import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/authAction";

import "../assets/css/login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    modal: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/admin" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <form onSubmit={this.onSubmit}>
              <div>
                <i className="fa fa-user"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required="required"
                  name="username"
                  onChange={this.onChange}
                  value={this.state.username}
                />
              </div>
              <div>
                <i className="fa fa-lock"></i>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required="required"
                  name="password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="btn btn-success btn-block"
                  style={{ marginTop: "15px", color: "#fff" }}
                >
                  Soumettre
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
