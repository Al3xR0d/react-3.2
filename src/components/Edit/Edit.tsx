import React from 'react';

import Edit from '../../images/edit-line-black.png';
class EditPic extends React.Component<{ handleEditTask: () => void }, {}> {
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
