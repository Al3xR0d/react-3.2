import React, { Component } from 'react';

import { ReactNode } from 'react';
import { TPosition } from '../../Types/types';

interface Props {
  text: string;
  children: ReactNode;
}

interface State {
  showTooltip: boolean;
  tooltipPosition: TPosition;
}

class Tooltip extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showTooltip: false,
      tooltipPosition: { x: 0, y: 0 },
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
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

export { Tooltip };
