import React from 'react';
// import PropTypes from 'prop-types';

import Trash from '../../images/trash.png';
import './TrashPic.css';

class TrashPic extends React.Component<{ onDeleted: () => void }, {}> {
  render() {
    const { onDeleted } = this.props;
    return (
      <div>
        <img className="trash" src={Trash} onClick={onDeleted} />
      </div>
    );
  }
}

// TrashPic.propTypes = {
//   onDeleted: PropTypes.func.isRequired,
// };

export { TrashPic };
