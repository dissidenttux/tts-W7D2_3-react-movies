import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MovieCollections from './MovieCollections';
import { MovieData } from '../dataClasses'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <div className='m-5'>
            <h1 className='d-flex justify-content-center'>Movie Collections</h1>
          <div className='row'>
            <MovieCollections collections={this.props.collections} />
          </div>
        </div>
      )
  }
}

App.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.instanceOf(MovieData))).isRequired
};

export default App;
