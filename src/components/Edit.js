import React from 'react';

import Edit from '../pictures/edit-line-black.png';

// const EditPic = () => {
//   return (
//     <div>
//       <img src={Edit} />
//     </div>
//   );
// };

// export default EditPic;

export default class EditPic extends React.Component {
  render() {
    // const { onEdit } = this.props;
    return (
      <div>
        {/* <img className="trash" src={Edit} onClick={onEdit} /> */}
        <img className="trash" src={Edit} />
      </div>
    );
  }
}
