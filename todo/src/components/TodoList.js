import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoItem from './TodoItem'
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function TodoList(props) {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          Todo List
          {props.todos.map((task, index) => {
            return (
              <CardText key = {index} onClick={() => props.toggleTodo(task)}>
                {task.task.todo}
              </CardText>
            );
          })}
        </CardTitle>
      </CardBody>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {
  toggleTodo: toggleTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
