import { ADD_TODO, TOGGLE_TODO } from "./actions";

const initialState = {
    todos: [

    ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      console.log(action.payload)
      const newTask = [{
        task: action.payload.todo,
        id: Date.now(),
        completed: false
      }];
      // console.log(state)
      // console.log(newTask)
      const newList = state.todos.concat(newTask)

      // console.log(newList)

      return {
        ...state,
        todos : newList
      };
    }

    case TOGGLE_TODO: {
      console.log('Toggled')
      console.log(state)

      const newTask = [{
        task: action.payload.todo.task.todo,
        id: action.payload.todo.id,
        completed: !action.payload.todo.completed,
      }]

      console.log(newTask)

      const newState = Object.assign(state.todos, newTask)

      console.log(newState)
      
      return {
        ...state,
        todos: newState
      };
    }
    
    default:
      return state;
  }
}
