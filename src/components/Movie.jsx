import React, { Component } from 'react';
import { MovieData } from '../dataClasses';

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, year, genre } = this.props.data;
    return(
      <tr>
        <td>{title}</td>
        <td>{description}</td>
        <td>{year}</td>
        <td>{genre}</td>
      </tr>
    )
  }
}

export default Movie;

