// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';
import NewCountry from './components/NewCountry';

class App extends Component {

  state = {
    countries: [
      {id: 1, name: 'United States', gold: 0, silver: 0, bronze: 0},
      {id: 2, name: 'China', gold: 0, silver: 0, bronze: 0},
      {id: 3, name: 'Germany', gold: 0, silver: 0, bronze: 0},
    ],

    medals: [
      {id: 1, name: 'gold'}, 
      {id: 2, name: 'silver'},
      {id: 3, name: 'bronze'},
    ]

  }

  handleAddCountry = (name) => {
    const { countries } = this.state;
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    const mutableCountries = [...countries].concat({ id: id, name: name, gold: 0, silver: 0, bronze: 0 });
    this.setState({ countries: mutableCountries });
  }


  handleDeleteCountry = (countryId) => {
    const { countries } = this.state;
    const mutableCountries = [...countries].filter(c => c.id !== countryId);
    this.setState({ countries: mutableCountries })
  }

  // handleIncrement = () => this.setState({ gold: this.props.country.gold + 1});
  // handleDecrement = () => this.setState({ gold: this.props.country.gold - 1});
  handleIncrement = (countryId, medalName) => {
    //finds the index of an item in countries
    //and then grabs the gold property of the 
    //found country and adds one to it, before
    //setting the state. 
    const countries = [ ...this.state.countries ];
    const idx = countries.findIndex(c => c.id === countryId);
    countries[idx][medalName] += 1;
    this.setState({ countries: countries });
    console.log(`Increment ID: ${countryId}`);
  }

  handleDecrement = (countryId, medalName) => {
    //finds the index of an item in countries
    //and then grabs the gold property of the 
    //found country and subtracts one from it, before
    //setting the state. 
    const countries = [ ...this.state.countries ];
    const idx = countries.findIndex(c => c.id === countryId);
    countries[idx][medalName] -= 1;
    this.setState({ countries: countries });
    console.log(`Decrement ID: ${countryId}`);
  }

  getAllMedalsTotal() {
    let sum = 0;
    this.state.medals.forEach(medal => { sum += this.state.countries.reduce((a, b) => a + b[medal.name], 0); });
    return sum;
  }

  render() { 
    return (
      <React.Fragment>
        <div className='appHeading'>
          Olympic Medals:
          <span className='badge'>
             { this.getAllMedalsTotal() }
          </span>
        </div>
        <div className='countries'>
            { this.state.countries.map(country => 
              <Country 
                key={ country.id } 
                country={ country } 
                medals={ this.state.medals }
                onDelete={ this.handleDeleteCountry}
                onIncrement={ this.handleIncrement } 
                onDecrement={ this.handleDecrement } />
            )}
        </div>
        <NewCountry onAdd={ this.handleAddCountry}></NewCountry>
      </React.Fragment>
    );
  }
}

export default App;
