import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
class Country extends Component {

    state = {
        name: 'United States',
        gold: 0,
    }

    handleIncrement = () => {
        console.log(this.state.gold);
        this.setState({ gold: this.state.gold + 1})
    }

    render() { 
        return (
            <div className="country">
                <div className="name">
                    {this.state.name}
                </div>
                <div className="gold">
                    Gold Medals: {this.state.gold}
                    <IconButton size="large" color="success" variant="outlined" onClick={ this.handleIncrement }>
                        <AddCircleIcon/>
                    </IconButton>
                </div>
            </div>
            );
    }
}

export default Country;