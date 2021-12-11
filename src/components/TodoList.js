import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

//We use the useSelector hook here, inorder to obtain data from the store and assign it to a variable. The argument will be the whole state that is managed in 
//the store so you'll have to specify what to return


const TodoList = () => {
	const todos = useSelector((state)=> state.todos)

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
