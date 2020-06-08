import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getSubscribers, deleteSubscriber } from "../actions/subscriberActions";
import { addMember } from "../actions/membersAction";

import { Modal } from "antd";

class Subscribers extends Component {
  state = {
    show: false,
    activeItem: "",
    show2: false,
    activeItem2: "",
  };

  static propTypes = {
    subscribers: PropTypes.array.isRequired,
    getSubscribers: PropTypes.func.isRequired,
    deleteSubscriber: PropTypes.func.isRequired,
    addMember: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getSubscribers();
  }

  // FOR MODAL
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

  Confirm = (subscriber) => {
    this.props.deleteSubscriber(subscriber.id);
    this.setState({ show: false });
  };

  Accept = (subscriber) => {
    this.props.addMember(subscriber);
    this.props.deleteSubscriber(subscriber.id);
    this.setState({ show2: false });
  };

  render() {
    return (
      <div className="container">
        <h4>Listes des adhérant </h4>
        {this.props.subscribers.length ? (
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>Prenom</th>
                <th>Nom</th>
                <th>Adresse</th>
                <th>Téléphone</th>
              </tr>
            </thead>
            <tbody>
              {this.props.subscribers.map((subscriber) => (
                <tr key={subscriber.id}>
                  <td>{subscriber.firstname}</td>
                  <td>{subscriber.lastname}</td>
                  <td>{subscriber.address}</td>
                  <td>{subscriber.phone}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => this.handleShow2(subscriber)}
                    >
                      Accepter
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleShow(subscriber)}
                    >
                      Refuser
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <Modal
              title=" Refuser l'adhesion "
              centered
              visible={this.state.show}
              onOk={() => this.Confirm(this.state.activeItem)}
              onCancel={this.handleClose}
              okButtonProps={{
                style: { backgroundColor: "#149445", borderColor: "#149445" },
              }}
            >
              <h3 style={{ marginLeft: "25%" }}>
                {this.state.activeItem.firstname}{" "}
                {this.state.activeItem.lastname}
              </h3>
              <h5> Cette demande sera rejetée ! </h5>
            </Modal>
            <Modal
              title="Accepter l'adhésion"
              centered
              visible={this.state.show2}
              onOk={() => this.Accept(this.state.activeItem2)}
              onCancel={this.handleClose2}
              okButtonProps={{
                style: { backgroundColor: "#149445", borderColor: "#149445" },
              }}
            >
              <h3 style={{ marginLeft: "25%" }}>
                {this.state.activeItem2.firstname}{" "}
                {this.state.activeItem2.lastname}
              </h3>
              <h5> Accepter l'adhesion et ajouter ce membre ! </h5>
            </Modal>
          </table>
        ) : (
          <h3 style={{ color: "gray", marginLeft: "25%" }}>
            {" "}
            Aucun nouvel adhérant !
          </h3>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subscribers: state.subscriberReducer.subscribers,
});

export default connect(mapStateToProps, {
  getSubscribers,
  deleteSubscriber,
  addMember,
})(Subscribers);
