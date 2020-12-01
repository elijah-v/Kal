import React, { useState } from 'react';
import '../CSS/Nav.css';
import { useStateValue } from '../StateProvider';
import axios from 'axios';
import requests from '../requests';
import { Link } from 'react-router-dom';

function Nav() {
    const [{calories},dispatch] = useStateValue();
    const [search, setSearch] = useState('');


    const searchFood = (event)=>{
        setSearch(event);
    };
    const executeSearch = (event)=>{
        event.preventDefault();
        const fetchItems = async ()=>{const item = await axios(requests.calories(search)); 
            const setFoodList = (item)=>{
                dispatch({
                    type: 'set_food_list',
                    foodListItem: item
                });
                dispatch({
                    type: 'subtract_calories',
                    calories: item.parsed[0].food.nutrients.ENERC_KCAL
                })
            };
            try{if(item.data.parsed[0].food.nutrients.ENERC_KCAL){setFoodList(item.data)};}catch(e){console.log('error')}
            
        
        }
        
        fetchItems();
        setSearch('');
    };

    return (
        <nav className='nav'>
        <div className='nav__links'>
        <Link to='/calculator' className='nav__link'>
        <div>
        <p className='nav__user'>Caloric</p>
        <p className='nav__user'>calculator</p>
        </div>
        </Link>
        <div>
        <p className='nav__calories'>{calories} calories</p>
        </div>
        <Link to='/caloric intake' className='nav__link'>
        <div>
        <p className='nav__calculator' >Caloric intake</p>
        </div>
        </Link>
        </div>

        <div className='nav__search'>
        <form className='nav__form' onSubmit={event=>executeSearch(event)}>
        <input type='text' className='nav__searchbar' value={search} placeholder='Search Food' onChange={(event)=>searchFood(event.target.value)} autoFocus/> 
        </form>
        <button className='nav__searchButton' onClick={(event)=>executeSearch(event)}>Add food</button>
        </div>
        </nav>
    );
}

export default Nav
