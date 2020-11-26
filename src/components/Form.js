import React, { Component } from "react";

class Form extends Component {
  state = {
    ...this.returnStateObject(),
  };
  returnStateObject() {
    if (this.props.currentIndex == -1)
      return {
        fullName: "",
        email: "",
        phoneNo: "",
        amount: "",
      };
    else {
      return this.props.data[this.props.currentIndex];
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex != this.props.currentIndex ||
      prevProps.data.length != this.props.data.length
    )
      this.setState({ ...this.returnStateObject() });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddOrEdit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <input
          name="fullName"
          placeholder="NAME"
          value={this.state.fullName}
          onChange={this.handleInputChange}
        />
        <br />
        <input
          name="email"
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <br />
        <input
          name="phoneNo"
          placeholder="Phone Number"
          value={this.state.phoneNo}
          onChange={this.handleInputChange}
        />
        <br />
        <input
          name="amount"
          placeholder="Anount taken"
          value={this.state.amount}
          onChange={this.handleInputChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
