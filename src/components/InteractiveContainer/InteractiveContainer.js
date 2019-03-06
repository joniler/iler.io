import React, { Component } from 'react';
import './InteractiveContainer.scss';

class InteractiveContainer extends Component {
    render() {

        return(
            <div className={"intContainer " + (this.props.active ? 'active' : '')}>

            </div>
        )
    }
}

export default InteractiveContainer;