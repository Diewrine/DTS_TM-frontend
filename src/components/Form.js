import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMember } from "../actions/membersAction";

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
    updated_at: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  static propTypes = {
    addMember: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, address, phone } = this.state;
    const member = { firstname, lastname, address, phone };
    this.props.addMember(member);
    this.setState({
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
      updated_at: "",
    });
  };

  render() {
    const { firstname, lastname, address, phone } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Ajouter un nouveau membre !</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Prénom</label>
            <input
              className="form-control"
              type="text"
              name="firstname"
              onChange={this.onChange}
              value={firstname}
            />
          </div>

          <div className="form-group">
            <label>Nom</label>
            <input
              className="form-control"
              type="text"
              name="lastname"
              onChange={this.onChange}
              value={lastname}
            />
          </div>

          <div className="form-group">
            <label>Adresse</label>
            <input
              className="form-control"
              type="text"
              name="address"
              onChange={this.onChange}
              value={address}
            />
          </div>

          <div className="form-group">
            <label>Téléphone</label>
            <input
              className="form-control"
              type="number"
              name="phone"
              onChange={this.onChange}
              value={phone}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addMember })(Form);
