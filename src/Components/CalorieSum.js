import '../CSS/CalorieSum.css';
import FoodItem from './FoodItem';
import { useStateValue } from '../StateProvider';

const CalorieSum = () => {
    const [{foodList}] = useStateValue();
    const foodNames = [];
    const countedList = foodList.reduce((acc,item)=>
    {
    if(foodNames.indexOf(item.text) === -1)
    {foodNames.push(item.text);
    return acc =[...acc,([item,1])]} else{acc.forEach(elem=>elem[0].text === item.text ? elem[1] +=1:elem[1]+=0); return acc};
},[]);

    return (
        <div>
            {countedList.map(item=>{
            
            return <FoodItem key={item[0].parsed[0].food.foodId} id={item[0].parsed[0].food.foodId} description={item[0].text} quantity={item[1]}
            calories={item[0].parsed[0].food.nutrients.ENERC_KCAL} 
            proteins={item[0].parsed[0].food.nutrients.PROCNT} fats={item[0].parsed[0].food.nutrients.FAT} 
            carbs={item[0].parsed[0].food.nutrients.CHOCDF} />})}
        </div>
    )
}

export default CalorieSum