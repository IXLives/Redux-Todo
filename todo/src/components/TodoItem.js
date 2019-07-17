import React from 'react'
import {toggleTodo} from '../actions'
import {connect} from 'react-redux'

class TodoItem extends React.Component {
    toggleTask(e) {
        this.props.toggleTodo(this.props.id)
    }

    render() {
        return (
            <li onClick = {() => this.toggleTask}>
                {this.props.task}
            </li>
        )
    }
}

export default connect(null, { toggleTodo})(TodoItem)