import React from 'react';
import PropTypes from 'prop-types';

import Trash from '../pictures/trash.png';
import './TrashPic.css';

// const TrashPic = () => {
//   return (
//     <div>
//       <img src={Trash} />
//     </div>
//   );
// };

// export default TrashPic;
export default class TrashPic extends React.Component {
  render() {
    const { onDeleted } = this.props;
    return (
      <div>
        <img className="trash" src={Trash} onClick={onDeleted} />
      </div>
    );
  }
}

TrashPic.propTypes = {
  onDeleted: PropTypes.func.isRequired,
};