import React from 'react';
import { useDispatch} from 'react-redux';
import { toggleComplete } from '../redux/TodoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch()
	//here we have to use a handleClick functon to handle the toggleClick. This here is similar to the action dispatch-bundled inside a function - stuff
	//which we learnt in codevolution's tutorial.
	const handleClick = ()=>{
		//So I had made an error below, I hadn't specified the action that we have to dispatch. 
		dispatch(toggleComplete({
			id: id,
			completed : !completed,
		}))
	}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={handleClick}></input>
					{title}
				</span>
				<button className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
