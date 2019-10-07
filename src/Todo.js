import React from 'react';

const Todo = props => {
  return (
    <div>
      <input
        type='checkbox'
        onChange={() => {
          props.toggleTodo(props.index);
        }}
      ></input>
      <span className={`${props.isDone ? 'isChecked' : ''}`}>
        {props.title}{' '}
      </span>
      <a
        href='/'
        onClick={e => {
          e.preventDefault();
          props.onDelete(props.index);
        }}
      >
        Supprimer
      </a>
    </div>
  );
};

export default Todo;
