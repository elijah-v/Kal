import React from 'react'
import '../CSS/Onboarding.css'
import caloricCalculator from '../Assets/Onboarding/caloricCalculator.png'
import caloricIntake from '../Assets/Onboarding/caloricIntake.png'
import calories from '../Assets/Onboarding/calories.png'
import filledForm from '../Assets/Onboarding/filledForm.png'
import list from '../Assets/Onboarding/list.png'
import updated from '../Assets/Onboarding/updated.png'

const Onboarding = () => {
    return (
        <div className='onboarding'>
            <div className='onboarding__container'>
            <img className='onboarding__img' src={caloricCalculator} alt='caloric calculator'/>
            <div className='onboarding__description'>
                <p className='onboarding__descriptionP'>Click 'Caloric calculator'</p>
            </div>    
            </div>
            <div className='onboarding__container'>
            <div className='onboarding__description'>
            <img className='onboarding__img big' src={filledForm} alt='filled form'/>
                <p className='onboarding__descriptionP'>Fill in form</p>
            </div>    
            </div>
            <div className='onboarding__container'>
            <img className='onboarding__img' src={calories} alt='calories'/>
            <div className='onboarding__description'>
                <p className='onboarding__descriptionP'>Your daily caloric consumption to achieve your target weight will appear as a number over 'calories'</p>
            </div>    
            </div>
            <div className='onboarding__container'>
            <img className='onboarding__img' src={caloricIntake} alt='caloric intake'/>
            <div className='onboarding__description'>
                <p className='onboarding__descriptionP'>Click 'Caloric intake' to search the foods that you eat throughout the day</p>
            </div>    
            </div>
            <div className='onboarding__container vertical'>
            <img className='onboarding__img big' src={list} alt='list'/>
            <div className='onboarding__description'>
                <p className='onboarding__descriptionP'>Search every food item in the search bar. The food items will appear in bars with nutritional information and automatically subtract calories from your daily caloric consumption</p>
            </div>    
            </div>
            <div className='onboarding__container'>
            <img className='onboarding__img' src={updated} alt='updated daily caloric consumption'/>
            <div className='onboarding__description'>
                <p className='onboarding__descriptionP'>Updated daily caloric comsuption</p>
            </div>    
            </div>
        </div>
    )
}

export default Onboarding
