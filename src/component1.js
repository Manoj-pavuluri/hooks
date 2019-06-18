import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class component1 extends Component {
    render() {
        return (
            <div>
                <h1>hello {this.props.name}</h1>
            </div>
        )
    }
}


component1.defaultProps={
    name:"basha"
}

component1.propTypes={
    name:PropTypes.string
}