import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Search from './components/Search';
import TodoList from './components/TodoList';
import Buttons from './components/Buttons';
import Tasks from './components/Tasks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [this.createTodoItem('first'), this.createTodoItem('second'), this.createTodoItem('third')],
      filter: 'all',
      // todoData: [
      //   { label: 'first', id: 1 },
      //   { label: 'second', id: 2 },
      //   { label: 'third', id: 3 },
      // ],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
    this.onFilterAll = this.onFilterAll.bind(this);
    this.onFilterDone = this.onFilterDone.bind(this);
    this.onFilterActive = this.onFilterActive.bind(this);
  }

  createTodoItem(label) {
    return {
      label,
      done: false,
      id: Math.random(),
    };
  }

  deleteItem(id) {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((item) => item.id === id);
      const newArr = [...todoData.slice(0, index), ...todoData.slice(index + 1)];
      return {
        todoData: newArr,
      };
    });
  }

  // editItem = (id) => {
  //   this.setState(({ todoData }) => {
  //     todoData.map((item) => {
  //       item.id === id ? { ...todoData, isEditing: !item.isEditing } : item;
  //     });
  //   });
  // };

  // let

  addItem(text) {
    const newItem = this.createTodoItem(text);
    // const newItem = {
    //   label: text,
    //   id: Math.random(),
    // };
    this.setState(({ todoData }) => {
      // const newArr = [{ label: [text], id: Math.random() }, ...todoData];
      const newArr = [newItem, ...todoData];
      return { todoData: newArr };
      // return {
      //   todoData: [{ label: [text], id: Math.random() }, ...todoData],
      // };
    });
  }

  onToggleDone(id) {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((item) => item.id === id);
      const oldItem = todoData[index];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArr = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];
      return {
        todoData: newArr,
      };
    });

    // console.log('done', id);
  }

  onFilterAll() {
    this.setState({ filter: 'all' });
  }

  onFilterDone() {
    this.setState({ filter: 'done' });
  }

  onFilterActive() {
    this.setState({ filter: 'active' });
  }

  filterTasks() {
    const { todoData, filter } = this.state;
    const filtres = {
      all: () => true,
      done: (task) => task.done,
      active: (task) => !task.done,
    };
    return todoData.filter(filtres[filter]);
  }

  render() {
    const filteredTasks = this.filterTasks();
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length;
    return (
      <div>
        <Header />
        <div className="style">
          <Search addItem={this.addItem} />
          <Buttons
            onFilterAll={this.onFilterAll}
            onFilterDone={this.onFilterDone}
            onFilterActive={this.onFilterActive}
          />
          <Tasks onToggleDone={this.onToggleDone} todo={todoCount} done={doneCount} />
          <TodoList
            todoData={filteredTasks}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            // onEdit={this.editItem}
          />
        </div>
      </div>
    );
  }
}

// const App = () => {
//   const todoData = [
//     { label: 'first', id: 1 },
//     { label: 'second', id: 2 },
//     { label: 'third', id: 3 },
//   ];

//   return (
//     <div>
//       <Header />
//       <div className="style">
//         <Search />
//         <Buttons />
//         <Tasks />
//         <TodoList
//           todoData={todoData}
//           onDeleted={(id) => {
//             console.log(id);
//           }}
//         />
//       </div>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
