import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      successMessage: undefined,
    };
  }

  handleAddContactFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.contactName.value.trim();
    const email = e.target.elements.contactEmail.value.trim();
    const phone = e.target.elements.contactPhone.value.trim();
    const id = e.target.elements.contactId.value.trim();
    let response = undefined;
    if (this.props.isUpdating) {
      response = this.props.handleUpdateContact({
        name: name,
        email: email,
        phone: phone,
        id: id,
      });
    } else {
      response = this.props.handleAddContact({
        name: name,
        email: email,
        phone: phone,
      });
    }

    if (response.status === "Success") {
      this.setState({ errorMessage: undefined, successMessage: response.msg });
      document.querySelector(".contact-form").requestFullscreen();
    } else {
      this.setState({ errorMessage: response.msg, successMessage: undefined });
    }
  };

  handleCancel = () => {
    this.props.cancelUpdateContact();
  };

  render() {
    return (
      <div className="border col-12 text-white p-2">
        <form
          onSubmit={this.handleAddContactFormSubmit}
          className="contact-form"
        >
          <input
            hidden
            name="contactId"
            defaultValue={
              this.props.isUpdating ? this.props.selectedContact.id : ""
            }
          ></input>
          <div className="row p-2">
            <div className="col-12 text-white">
              <h2 style={{ textAlign: "center" }}>
                {this.props.isUpdating ? "Update Contact" : "Add a new contact"}
              </h2>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form control form-control-lg"
                placeholder="Name"
                name="contactName"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.name : ""
                }
              ></input>
            </div>

            <div className="col-12 col-md-4 p-1">
              <input
                className="form control form-control-lg"
                placeholder="Email"
                name="contactEmail"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.email : ""
                }
              ></input>
            </div>

            <div className="col-12 col-md-4 p-1">
              <input
                className="form control form-control-lg"
                placeholder="Phone"
                name="contactPhone"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.phone : ""
                }
              ></input>
            </div>
            {this.state.errorMessage === undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-center text-danger">
                {this.state.errorMessage}
              </div>
            )}

            {this.state.successMessage === undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-center text-success">
                {this.state.successMessage}
              </div>
            )}
            <div
              className="col-12 col-md-6 offset-md-3 p-1"
              style={{ textAlign: "center" }}
            >
              <button className="btn btn-primary m-2">
                {this.props.isUpdating ? "Update" : "Create"}
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              {this.props.isUpdating && (
                <button
                  className="btn btn-danger btn-sm"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
