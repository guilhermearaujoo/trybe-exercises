import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PersonCard extends Component {
  render() {
    const { personObj: 
        { name,
          email, 
          dob: { age },
          picture: { medium } } } = this.props;
    return (
      <div>
        <p>{`${name.title} ${name.first} ${name.last}`}</p>
        <p>{`Email: ${email}`}</p>
        <p>{`Age: ${age} years`}</p>
        <img src={ medium } alt={ name } />
      </div>
    )
  }
}

PersonCard.propTypes = {
  personObj: PropTypes.shape({
    name: PropTypes.objectOf(PropTypes.string),
    email: PropTypes.string,
    dob: PropTypes.shape({
      age: PropTypes.number,
    }),
    picture: PropTypes.shape({
      medium: PropTypes.string,
    })
  }).isRequired,
}