export const initialState = {
    calories: 0,
    height: null,
    weight: null,
    age: null,
    targetWeight: null,
    weeks: null,
    user: '',
    foodList: []
};


function reducer(state, action){
switch(action.type){
    case 'set_user':
    return {
        ...state,
        user: action.user
        }    
    case 'set_calories':
    return {
        ...state,
        calories: action.calories
        };
    case 'set_height':
    return {
            ...state,
            height: action.height
        };
    case 'set_weight':
    return {
            ...state,
            weight: action.weight
        };
    case 'set_age':
    return {
            ...state,
            age: action.age
        };
    case 'set_gender':
    return {
            ...state,
            gender: action.gender
        };
    case 'set_target_weight':
    return {
            ...state,
            targetWeight: action.targetWeight
        };
    case 'set_weeks':
    return {
            ...state,
            weeks: action.weeks
            };
    case 'set_activity':
    return {
            ...state,
            activity: action.activity
            };
    case 'set_food_list':
    return {
                ...state,
                foodList: [...state.foodList, action.foodListItem]
            };
    case 'subtract_calories':
    return {
                ...state,
                calories: state.calories - action.calories
            };
    case 'add_calories':
    return {
                ...state,
                calories: state.calories + action.calories
            };
    case 'delete_item':
        const index = state.foodList.findIndex(item=>item.parsed[0].food.foodId === action.id);
    return {
                ...state,
                foodList: state.foodList.slice(0,index).concat(state.foodList.slice(index + 1,))
            };
    default: 
    return {state};
}
}

export default reducer;
