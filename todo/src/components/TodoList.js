import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

function TodoList(props) {
    console.log(props)
  return (
    <Card>
      <CardBody>
        <CardTitle>
          Todo List
          {props.tasks.map(task => {
            return (
              <div>
                <CardText>{task.task}</CardText>
                <Button>Complete</Button>
              </div>
            );
          })}
        </CardTitle>
      </CardBody>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.todos
  };
};

const mapDispatchToProps = {
  toggleTodo: toggleTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
