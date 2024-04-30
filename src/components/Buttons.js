import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';

export default class Buttons extends React.Component {
  render() {
    const { onFilterAll, onFilterDone, onFilterActive } = this.props;
    return (
      <div className="buttons">
        <button type="button" className="buttons-tasks btn" onClick={onFilterAll}>
          Все задачи
        </button>
        <button type="button" className="buttons-enable btn" onClick={onFilterDone}>
          Завершенные
        </button>
        <button type="button" className="buttons-active btn" onClick={onFilterActive}>
          В процессее
        </button>
      </div>
    );
  }
}

Buttons.propTypes = {
  onFilterAll: PropTypes.func.isRequired,
  onFilterDone: PropTypes.func.isRequired,
  onFilterActive: PropTypes.func.isRequired,
};

// const Buttons = () => {
//   return (
//     <div className="buttons">
//       <button type="button" className="buttons-tasks btn">
//         Все задачи
//       </button>
//       <button type="button" className="buttons-enable btn">
//         Завершенные
//       </button>
//       <button type="button" className="buttons-active btn">
//         В процессее
//       </button>
//     </div>
//   );
// };
