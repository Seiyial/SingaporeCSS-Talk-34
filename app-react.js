import React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import './entrance-states.scss'
import $ from 'jquery'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Application extends React.Component {
	constructor() {
		super()

		this.state = {
			toDoList: [],
			showAddButton: false
		}
		this.addItem = this.addItem.bind(this)
	}

	addItem() {
		const val = document.getElementById('newItem').value
		const toDoList = this.state.toDoList
		toDoList.push(val)
		this.setState({ toDoList })
	}

	render() {
		console.log('(*) this.state.toDoList =>', this.state.toDoList, this.state.toDoList.map)
		return (
			<div className='container'>
				<h2>Some ToDo List</h2>

				<div className='item-adder-field'>
					<input className='input' id='newItem' placeholder='Type Something' />
					<button className='item-adder-button' onClick={this.addItem}>Add</button>
				</div>

				<TransitionGroup className='list'>
					{ this.state.toDoList.map((todoItem, index) => 
						<CSSTransition key={`item-${index}`} timeout={500} classNames='slideInRight'>
							<div className='list-item'>{ todoItem }</div>
						</CSSTransition>
					)}
				</TransitionGroup>
			</div>
		)
	}
}

ReactDOM.render(<Application />, document.getElementById('app-root'))