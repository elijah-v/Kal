import React from 'react';
import '../CSS/FoodItem.css';
import { useStateValue } from '../StateProvider';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const FoodItem = ({description, calories, proteins, fats, carbs, id, quantity}) => {
    const [{},dispatch] = useStateValue();
    const deleteItem = (id)=>{
        dispatch({
            type: 'delete_item',
            id
        })
        dispatch({
            type: 'add_calories',
            calories
        })
    };

    return (
        <div key={id} className='foodItem'>
        <div className='foodItem__info'>
        <p>{description} {quantity}</p>
            <div className='foodItem__delete' onClick={event=>deleteItem(id)}><DeleteOutlineIcon/></div>
        </div>
        <div className='foodItem__stats'>
    <p className='foodItem__statsCalories'>calories: {calories}</p>
            <p>proteins: {proteins}</p>
            <p>fats: {fats}</p>
            <p>carbs: {carbs}</p>
        </div>
        </div>
    )
}

export default FoodItem
