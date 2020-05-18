import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getMembers,
  deleteMember,
  updateMemeber,
} from "../actions/membersAction";
import { Modal } from "antd";

class Members extends Component {
  state = {
    show: false,
    activeItem: "",
    show2: false,
    activeItem2: "",

    firstname: "",
    lastname: "",
    address: "",
    phone: "",
  };

  static propTypes = {
    members: PropTypes.array.isRequired,
    getMembers: PropTypes.func.isRequired,
    deleteMember: PropTypes.func.isRequired,
    updateMemeber: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getMembers();
  }

  // for Update Form
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e, id) => {
    const { firstname, lastname, address, phone } = this.state;
    const member = { firstname, lastname, address, phone };
    this.props.updateMemeber(id, member);
    this.setState({
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
      updated_at: "",
    });
  };

  // For modal
  handleShow = (item) => {
    this.setState({ activeItem: item }, () => this.setState({ show: true }));
  };

  handleShow2 = (item) => {
    this.setState({
      firstname: item.firstname,
      lastname: item.lastname,
      address: item.address,
      phone: item.phone,
    });
    this.setState({ activeItem2: item }, () => this.setState({ show2: true }));
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleClose2 = () => {
    this.setState({ show2: false });
  };

  Confirm = (member) => {
    this.props.deleteMember(member.id);
    this.setState({ show: false });
  };

  render() {
    const { firstname, lastname, address, phone } = this.state;

    return (
      <React.Fragment>
        <h2>Listes des membres</h2>
        {this.props.members.length ? (
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>Prenom</th>
                <th>Nom</th>
                <th>Adresse</th>
                <th>Téléphone</th>
                <th>Modifié le:</th>
              </tr>
            </thead>

            <tbody>
              {this.props.members
                .sort((a, b) => (a.firstname > b.firstname ? 1 : -1))
                .map((member) => (
                  <tr key={member.id}>
                    <td>{member.firstname}</td>
                    <td>{member.lastname}</td>
                    <td>{member.address}</td>
                    <td>{member.phone}</td>
                    <td>{member.updated_at}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => this.handleShow2(member)}
                      >
                        Plus
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.handleShow(member)}
                      >
                        Retirer
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <Modal
              title="Confirmer votre requête !"
              centered
              visible={this.state.show}
              onOk={() => this.Confirm(this.state.activeItem)}
              onCancel={this.handleClose}
              okButtonProps={{
                style: { backgroundColor: "#149445", borderColor: "#149445" },
              }}
            >
              <h3 style={{ marginLeft: "25%" }}>
                {this.state.activeItem.firstname}
              </h3>
              <h5> Vous allez retirer ce membre ! </h5>
            </Modal>

            <Modal
              title="Modifier les paramètres de ce membre!"
              centered
              visible={this.state.show2}
              //onOk={this.handleClose2}
              onCancel={this.handleClose2}
              footer={null}
            >
              <h3 style={{ marginLeft: "25%" }}>
                {this.state.activeItem2.phone}
              </h3>
              <h5> Modifier les paramètres de ce membre ! </h5>

              <form
                onSubmit={(event) =>
                  this.onSubmit(event, this.state.activeItem2.id)
                }
              >
                <div className="form-group">
                  <label>Prénom</label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    onChange={this.onChange}
                    value={firstname}
                    placeholder={this.state.activeItem2.firstname}
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
                    placeholder={this.state.activeItem2.lastname}
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
                    placeholder={this.state.activeItem2.address}
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
                    placeholder={this.state.activeItem2.phone}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-success">
                    Appliquer
                  </button>
                </div>
              </form>
            </Modal>
          </table>
        ) : (
          <h3 style={{ color: "gray", marginLeft: "25%" }}>
            {" "}
            Aucun membre n'est inséré !
          </h3>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  members: state.membersReducer.members,
});

export default connect(mapStateToProps, {
  getMembers,
  deleteMember,
  updateMemeber,
})(Members);
