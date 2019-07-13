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
      return state;
    }
    default:
      return state;
  }
}
