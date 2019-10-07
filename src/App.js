import React, { Component } from 'react';
import Todo from './Todo';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
      todoLength: 0,
      todoString: 'todo',
      todos: []
    };
  }

  handleInput = e => {
    this.setState({
      todoTitle: e.target.value
    });
  };

  componentDidMount() {
    document.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        this.addTodo();
      }
    });

    this.setState({
      todoLength: this.state.todos.length
    });

    this.todoStringify([]);
  }

  todoStringify = tds => {
    this.setState({
      todoString: tds.length > 1 ? 'todos' : 'todo'
    });
  };

  addTodo = () => {
    const tds = this.state.todos.slice();
    tds.push({
      title: this.state.todoTitle,
      isDone: false
    });
    this.setState({
      todos: { ...tds.push },
      todoTitle: '',
      todoLength: tds.length
    });

    this.todoStringify(tds);
  };

  deleteTodo = index => {
    const tds = this.state.todos.slice();
    tds.splice(index, 1);

    this.setState({
      todos: tds,
      todoTitle: '',
      todoLength: tds.length
    });

    this.todoStringify(tds);
  };

  toggleTodo = index => {
    const tds = this.state.todos.slice();
    tds.splice(index, 1, {
      title: tds[index].title,
      isDone: !tds[index].isDone
    });

    this.setState({
      todos: tds,
      todoTitle: '',
      todoLength: tds.length
    });

    this.todoStringify(tds);
  };

  render() {
    return (
      <div>
        <p>
          Il y a {this.state.todoLength} {this.state.todoString}{' '}
        </p>
        <input
          type='text'
          autoFocus={true}
          onChange={this.handleInput}
          value={this.state.todoTitle}
        ></input>
        <button
          disabled={this.state.todoTitle === ''}
          onClick={() => {
            this.addTodo();
          }}
        >
          Add Todo
        </button>
        {this.state.todos.map((todo, index) => {
          return (
            <Todo
              onDelete={this.deleteTodo}
              key={index}
              index={index}
              title={todo.title}
              isDone={todo.isDone}
              toggleTodo={this.toggleTodo}
            ></Todo>
          );
        })}
      </div>
    );
  }
}
