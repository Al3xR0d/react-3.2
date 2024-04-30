import React from 'react';
import PropTypes from 'prop-types';

import './TodoListItem.css';
// import EditPic from './Edit';

export default class TodoListItem extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       done: false,
  //     };
  //     this.onLabelClick = () => {
  //       this.setState((state) => {
  //         // done: true,
  //         return {
  //           done: !state.done,
  //         };
  //         // done: !this.state.done,
  //       });
  //     };
  //   }

  render() {
    // const { label, onDeleted, onToggleDone, done } = this.props;
    const { label, onToggleDone, done } = this.props;
    // const { label, onDeleted } = this.props;
    // const { done } = this.state;

    let classNames = 'todoListItem';
    if (done) {
      classNames += ' done';
    }
    // this.onLabelClick
    return (
      <div className="todoList">
        <div className="text">
          <span className={classNames}>
            <span onClick={onToggleDone}>{label}</span>
          </span>
        </div>
        {/* <div className="pictures">
          <EditPic />
        </div> */}
      </div>
    );
  }
}

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
};

// const TodoListItem = (props) => {
//   return (
//     <span>
//       {props.label}
//       <button type="button" className="deleteBtn">
//         X
//       </button>
//     </span>
//   );
// };
