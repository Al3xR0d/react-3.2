import React from 'react';

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

export { TrashPic };
