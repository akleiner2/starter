import React, { PropTypes } from 'react';

export default class App extends React.Component {
    render() {
        const { greeting } = this.props;

        return (
            <div> {"Hello, world"} </div>
        );
    }
}
