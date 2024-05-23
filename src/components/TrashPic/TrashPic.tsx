import React from 'react';

import Trash from '../../images/trash.png';
import './TrashPic.css';

interface Props {
  onDeleted: () => void;
}

class TrashPic extends React.Component<Props, {}> {
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
