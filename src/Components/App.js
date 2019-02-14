import React, { Component } from 'react';
import '../App.css';
import FilterControls from './FilterControls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      parades : [],
      restaurants : []
    }
  }

  componentDidMount() {
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/restaurants')
    .then(response => response.json())
    .then(data => {
        this.setState({
          restaurants: data.restaurants
        })
      })
      .catch(error => {
        throw new Error(error)
      });

    fetch('http://whateverly-datasets.herokuapp.com/api/v1/parades')
      .then(response => response.json())
      .then(data => {
        this.setState({
          parades: data.parades
        })
      })
      .catch(error => {
        throw new Error(error)
      });
  }
  
  render() {
    return (
      <div className="App">
        <h1>PARADE PLANNER</h1>
        <FilterControls 
        parades={this.state.parades}
        restaurants={this.state.restaurants}
        />
      </div>
    );
  }
}

export default App;