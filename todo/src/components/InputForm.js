import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import {
    Button,
    Form,
    Label,
    Input,
    FormText,
    FormGroup
} from 'reactstrap'

class InputForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <Form>
            <FormGroup>
                <Label for = 'todoItem'>Task</Label>
                <Input type = 'text' name = 'todo' id = 'todoItem' placeholder = 'Enter a task' />
                <FormText color = 'muted'>
                    Enter the task you wish to add to your Todo list
                </FormText>
                <Button>Submit</Button>
            </FormGroup>
        </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
      tasks: state.tasks
  }
};

const mapDispatchToProps = {
    addTodo: addTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputForm);
