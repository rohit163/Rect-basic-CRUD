import React, { Component } from "react";
import Form from "./Form";

class List extends Component {
  state = {
    currentIndex: -1,
    data: this.returnData(),
  };

  returnData() {
    if (localStorage.getItem("previous") == null)
      localStorage.setItem("previous", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("previous"));
  }

  onAddOrEdit = (change) => {
    var list = this.returnData();
    if (this.state.currentIndex == -1) {
      list.push(change);
    } else {
      list[this.state.currentIndex] = change;
    }
    localStorage.setItem("previous", JSON.stringify(list));
    this.setState({ data: list, currentIndex: -1 });
  };

  handleEdit = (index) => {
    this.setState({
      currentIndex: index,
    });
  };
  handleDelete = (index) => {
    var list = this.returnData();
    list.splice(index, 1);
    localStorage.setItem("previous", JSON.stringify(list));
    this.setState({ data: list, currentIndex: -1 });
  };

  render() {
    return (
      <div>
        <Form
          onAddOrEdit={this.onAddOrEdit}
          currentIndex={this.state.currentIndex}
          data={this.state.data}
        />
        <hr />
        <p>list of Data</p>
        <table>
          <tbody>
            {this.state.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNo}</td>
                  <td>{item.amount}</td>
                  <td>
                    <button onClick={() => this.handleEdit(index)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
