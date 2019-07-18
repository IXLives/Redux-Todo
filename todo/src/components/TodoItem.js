import React from 'react'
import {toggleTodo} from '../actions'
import {connect} from 'react-redux'

class TodoItem extends React.Component {
  
    toggleTask = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        this.props.toggleTodo(this.props)
    }

    render() {
        return (
            <p onClick = {this.toggleTask} id = {this.props.id} className = 'task'>
                {this.props.task}
            </p>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    toggleTodo: toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)