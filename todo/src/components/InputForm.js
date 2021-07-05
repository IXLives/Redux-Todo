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
  constructor(){
    super()
    this.state = {
      task: '',
    }
  }


  submitTask = e => {
    e.preventDefault()
    const { task } = this.state;
    this.props.addTodo(task)

    this.setState({
      task: '',
    })
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
        <Form onSubmit = {this.submitTask}>
            <FormGroup>
                <Label for = 'todoItem'>Task</Label>
                <Input type = 'text' name = 'task' id = 'todoItem' placeholder = 'Enter a task' value = {this.state.task} onChange = {this.handleChange}/>
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
      tasks: state.todos
  }
};

const mapDispatchToProps = {
    addTodo: addTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputForm);
