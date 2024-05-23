import React from 'react';

import Edit from '../../images/edit-line-black.png';

interface Props {
  handleEditTask: () => void;
}

class EditPic extends React.Component<Props, {}> {
  render() {
    const { handleEditTask } = this.props;
    return (
      <div onClick={handleEditTask}>
        <img className="trash" src={Edit} />
      </div>
    );
  }
}

export { EditPic };
