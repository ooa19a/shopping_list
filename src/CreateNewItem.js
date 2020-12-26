import React from "react";

class CreateNewItem extends React.Component {
  state = {
    value: ""
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === "";
  };

//checking if an item has been added
  checking = (event) => {
    event.preventDefault();
    this.props.checkingItems(this.state.value);
  };

  // mergedfunction = (event) => {
  //   event.preventDefault();
  //   // this.addItem(event);
  //   this.checking(event);
  // }

  render() {
    return (
      <div>
        <form onSubmit = {this.checking}>
          <input
            type="text"
            placeholder="Input New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      </div>
    );
  }
}
export default CreateNewItem;
