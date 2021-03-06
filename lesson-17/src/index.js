import * as Redux from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const todo = (state, action) => {
    switch(action.type) {
      case 'ADD_TODO':
          return {
            id  : action.id,
            text: action.text,
            completed: false
          };
      break;
      case 'TOGGLE_TODO':
          if (state.id !== action.id ) {
            return state;
          }
        
          return {
              ...state,
              completed: !state.completed
          };
      break;
      default:
        return state;
    }
  };
  
  const todos = (state=[], action) => {
    switch(action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          todo(undefined, action)
        ];
      break;
      case 'TOGGLE_TODO':
        return state.map(t =>todo(t, action));
      break;
      default:
        return state;
    }
  };
  
  const visibilityFilter = (state='SHOW_ALL', action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter;
      break;
      default:
        return state;
    }
  };
  
  const { combineReducers } = Redux;
  const todoApp = combineReducers({
    todos,
    visibilityFilter
  });
  
  const { createStore } = Redux;
  const store = createStore(todoApp);
  const { Component } = React;
  
  let nextTodoId = 0;
  
  class TodoApp extends Component {
    // TODO: Add code to implement this
  }
  
  
  const render = () => {
    ReactDOM.render(
      <TodoApp 
        todos={store.getState().todos}
      />,
      document.getElementById('root')
    );
  };
  
  store.subscribe(render);
  render();
  
  
  
  
    
    
    