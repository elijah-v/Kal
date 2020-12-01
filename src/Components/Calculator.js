import React from 'react';
import '../CSS/Calculator.css';
import {Button, FormControl, Input, FormLabel,RadioGroup,FormControlLabel,Radio} from '@material-ui/core'
import { useStateValue } from '../StateProvider';

function Calculator() {
    const [{height, weight, age, gender, activity, targetWeight, weeks},dispatch] = useStateValue();

    const setHeight = (event)=>{
        dispatch({type: 'set_height',
        height: event,});
        return;
    };
    const setWeight = (event)=>{        
        dispatch({type: 'set_weight',
        weight: event,});
    return;};    
    const setAge = (event)=>{        
        dispatch({type: 'set_age',
        age: event,});
    return;};
    
    const setWeeks = (event)=>{        
        dispatch({type: 'set_weeks',
        weeks:event,});
    return;};
    const setTargetWeight = (event)=>{        
        dispatch({type: 'set_target_weight',
        targetWeight:event,});
    return;};

    const setGender = (event)=>{      
        dispatch({type: 'set_gender',
        gender:event,});
    return;};

    const setActivity = (event)=>{        
        dispatch({type: 'set_activity',
        activity:event,});
    return;};

    function calculation (event){
    event.preventDefault();
    const BMR = gender === 'male' ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age): 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    const CaloricDeficit = (weight - targetWeight) * 9000/(weeks * 7);

        switch(activity){
           case 'Sedentary':
               dispatch({type: 'set_calories',
               calories: Math.floor((BMR + BMR * 0.3) - CaloricDeficit)});
               return;
            case 'Light Activity':
                dispatch({type: 'set_calories',
                calories: Math.floor((BMR + BMR * 0.4) - CaloricDeficit)});
                return;
            case 'Moderate Activity':
                dispatch({type: 'set_calories',
                calories: Math.floor((BMR + BMR * 0.5) - CaloricDeficit)});
                return;
            case 'Very Active':
                dispatch({type: 'set_calories',
                calories: Math.floor((BMR + BMR) - CaloricDeficit)});
                return;

            default:
                return;
        }

 };

    return (
        <div className='calc'>
            <form className='calc__form' onSubmit={calculation}>
                <div className='calc__formRow1' >
                <Input className='calc__formHeight' type='number' value={height} onChange={event=>setHeight(event.target.value)} placeholder='Height cm' required/>
                <Input className='calc__formWeight' type='number' value={weight} onChange={event=>setWeight(event.target.value)} placeholder='Weight kg' required/>
                <Input className='calc__formAge' type='number' value={age} onChange={event=>setAge(event.target.value)} placeholder='Age' required/>
                </div>
                <div className='calc__formRow2'>
                <Input className='calc__formTargetWeight' type='number' value={targetWeight} onChange={event=>setTargetWeight(event.target.value)} placeholder='Target Weight kg' required/>
                
                <Input className='calc__formWeeks' type='number' value={weeks} onChange={event=>setWeeks(event.target.value)} placeholder='How many weeks?' required/>
                </div>

                <div className='calc__formRadio'>
                <div className='calc__formRadio1'>
                <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender" value={gender} onChange={event=>setGender(event.target.value)}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
                </FormControl>             
                </div>

                <div className='calc__formRadio2'>
                <FormControl component="fieldset">
                <FormLabel component="legend">Activity</FormLabel>
                <RadioGroup aria-label="activity" name="activity" value={activity} onChange={event=>setActivity(event.target.value)}>
                <FormControlLabel value="Sedentary" control={<Radio />} label="Sedentary" />
                <FormControlLabel value="Light Activity" control={<Radio />} label="Light Activity" />
                <FormControlLabel value="Moderate Activity" control={<Radio />} label="Moderate Activity" />
                <FormControlLabel value="Very Active" control={<Radio />} label="Very Active" />
                </RadioGroup>
                </FormControl>    
                </div> 
                </div>             
                <Button type='submit' disabled={!gender || !activity} variant='contained' color='primary'>Calculate</Button>
            </form>
        </div>
    )
}

export default Calculator;
