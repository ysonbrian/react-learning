import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends Component {
  render() {
    return (
      <div className="message-container">
        {this.props.name}
        {this.props.number}
      </div>
    );
  }
}

PropsComponent.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default PropsComponent;
