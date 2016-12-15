import React, { PropTypes } from 'react';

export default class App extends React.Component {
  render() {
    const { greeting } = this.props;

    return (
      <div> {greeting} </div>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.string.isRequired
};
