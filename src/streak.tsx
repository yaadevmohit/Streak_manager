import { useState } from 'react'
import './App.css'
import StreakListItem from './streakListItem'


const Streak = () => {
    const [streak, setStreak] = useState([])
    const [inputValue, setInputValue] = useState('')
    function handleSubmit(e) {
      e.preventDefault()
      setStreak([...streak, inputValue])
      setInputValue('')
    }

    const handleInputChange = (e) => {
      setInputValue(e.target.value) 
    }
    const streakList = streak.map(StreakItem => <StreakListItem streakName={StreakItem} />)
    
    return (
    <>
    <div className='streak-container'>
      <form className='streak-form'>
        <input type="text" className='input-field' value={inputValue}  onChange={handleInputChange}/><br />
        <input type="submit" className='submit-button' value="Add Streak" onClick={handleSubmit} />
      </form>
      <ul className='streak-list'>
        {streakList}
      </ul>
    </div>
  </>
    )
}





export default Streak