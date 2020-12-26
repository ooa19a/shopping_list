import React from "react";
// import logo from './logo.svg';
import "./styles.css";
import CreateNewItem from "./CreateNewItem.js";
import DeleteLastItem from "./DeleteLastItem.js";

class App extends React.Component {
  state = {
    value: "",
    items: []
  };

handleAddItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };

deleteLastItem = event => {
    this.setState((prevState) => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };
 
  check = (item) => {
    if(this.state.items.indexOf(item) !== -1) {
        alert('Already added!')
        return this.state.items;
     } 
    else {
          return this.handleAddItem(item);
     }
  }
//remove specific item in the array
  removeItem = (item) => {
    this.setState(() => ({
          items: this.state.items.filter((c) => {
                return c !== item;
            
        })
    }))
}

  
  render() {
      return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header> */}
        <h2>Shopping List</h2>
       
        <CreateNewItem 
        checkingItems = {this.check}/>

        <DeleteLastItem 
        onDeleteLastItem = {this.deleteLastItem}
        buttonDisabled = {this.noItemsFound()} />

        <p className="items">Items</p>
        <ol className="item-list">

          {this.state.items.map((item, index) => (
            <li key={index}>{item} 
            
            <button 
            onClick = {() => this.removeItem(item)}> 
            Delete </button> 
            
            </li>
            
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
