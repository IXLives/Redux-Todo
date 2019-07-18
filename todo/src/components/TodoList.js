import React from "react";
import { connect } from "react-redux";
import TodoItem from './TodoItem'
import { Card, CardBody, CardTitle } from "reactstrap";

function TodoList(props) {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          Todo List
          {props.todos.map((task, index) => {
            return (
              <TodoItem key = {index} task = {task.task} id = {task.id}
              />
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

export default connect(
  mapStateToProps
)(TodoList);
