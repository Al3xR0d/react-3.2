import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
      tooltipPosition: { x: 0, y: 0 },
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    const { clientX, clientY } = e;
    this.setState({ showTooltip: true, tooltipPosition: { x: clientX, y: clientY } });
  }

  handleMouseLeave() {
    this.setState({ showTooltip: false });
  }

  render() {
    const { tooltipPosition } = this.state;
    return (
      <div>
        <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          {this.props.children}
        </div>
        {this.state.showTooltip && (
          <div
            className="tooltip"
            style={{
              top: tooltipPosition.y + 10,
              left: tooltipPosition.x,
              position: 'absolute',
              backgroundColor: 'white',
              color: 'black',
              padding: '5px',
            }}
          >
            {this.props.text}
          </div>
        )}
      </div>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tooltip;
