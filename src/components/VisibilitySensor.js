import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VSensor from 'react-visibility-sensor';

class VisibilitySensor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isVisible: false
    };
  }

  render() {
    console.log("PROPS", this.props)
    const { once, children, ...theRest } = this.props;
    return (
      <VSensor
        onChange={isVisible => {
          if (!this.state._isVisible && isVisible) {
            this.setState({ _isVisible: true });
          }
        }}
        {...theRest}
      >
        {({isVisible}) => children({ isVisible: once ? this.state._isVisible : isVisible, ...theRest })}
      </VSensor>
    );
  }
}

VisibilitySensor.propTypes = {
  once: PropTypes.bool,
  children: PropTypes.func.isRequired
};

VisibilitySensor.defaultProps = {
  once: false
};

export default VisibilitySensor;
