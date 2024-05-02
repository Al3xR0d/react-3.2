import React from 'react';
import PropTypes from 'prop-types';

import Edit from '../images/edit-line-black.png';

class EditPic extends React.Component {
  render() {
    const { handleEditTask } = this.props;
    return (
      <div onClick={handleEditTask}>
        <img className="trash" src={Edit} />
      </div>
    );
  }
}

EditPic.propTypes = {
  handleEditTask: PropTypes.func.isRequired,
};

export { EditPic };
