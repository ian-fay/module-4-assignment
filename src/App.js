// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';

class App extends Component {

  state = {
    countries: [
      {id: 1, name: 'United States', gold: 0},
      {id: 2, name: 'China', gold: 0},
      {id: 3, name: 'Germany', gold: 0},
    ]
  }

  render() { 
    return ( 
      <div>
        {this.state.countries.map(country => 
          <Country
          key={ country.id}
          name={country.name}
          gold={country.gold}
          />)}
      </div>
     );
  }
}

export default App;
