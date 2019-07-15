import { ADD_TODO, TOGGLE_TODO } from "./actions";

const initialState = {
    todos: [

    ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const newTask = [{
        task: action.payload,
        id: Date.now(),
        completed: false
      }];
      console.log(state)
      console.log(newTask)
      const newList = state.todos.concat(newTask)

      console.log(newList)

      return {
        ...state,
        todos : newList
      };
    }

    case TOGGLE_TODO: {
      console.log('Toggled')
      console.log(action.payload)
      const newTask = [{
        task: action.payload.task,
        id: action.payload.id,
        completed: true,
      }]

      const newState = Object.assign(state.todos, newTask)
      
      return {
        ...state,
        todos: newState
      };
    }
    
    default:
      return state;
  }
}
