import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


class Medal extends Component {
    state = { }
    render() {
        const { medal, country, onIncrement, onDecrement} = this.props;
        return (
            <div className="medals">
                {medal.name} Medals: { country[medal.name] }
                    <IconButton size="large" color="success" variant="outlined" onClick={ () => onIncrement(country.id, medal.name) }>
                        <AddCircleIcon/>
                    </IconButton>

                    <IconButton disabled={country[medal.name] === 0} size="large" color="success" variant="outlined" onClick={ () => onDecrement(country.id, medal.name) }>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
            </div>
        );
    }
}

export default Medal;