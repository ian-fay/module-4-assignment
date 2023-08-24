import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
class Country extends Component {

    state = {
        name: this.props.name,
        gold: this.props.gold,
    }

    handleIncrement = () => this.setState({ gold: this.state.gold + 1});
    handleDecrement = () => this.setState({ gold: this.state.gold - 1});

    render() {
        console.log(this.props); 
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

                    <IconButton disabled={this.state.gold === 0} size="large" color="success" variant="outlined" onClick={ this.handleDecrement }>
                        <AddCircleIcon/>
                    </IconButton>
                </div>
                <hr></hr>
            </div>
            );
    }
}

export default Country;