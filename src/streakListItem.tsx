import { useState } from 'react'
const streakListItemStyle = { 
    display: 'flex',
    alignItems: 'center' 
}
  
const Star = ({streakCount}) => {
      return (
              <svg xmlns="http://www.w3.org/2000/svg" width="18rem" height="auto" viewBox="0 0 100 100">
                  <polygon points="50 10 63.39 37.98 93.27 37.98 69.25 58.03 82.63 85.01 50 68.5 17.37 85.01 30.75 58.03 6.73 37.98 36.61 37.98" fill="#FF0060" stroke="black" stroke-width="2" />
                  <text x="50" y ="58" text-anchor="middle" font-family="1.5em" font-size="auto" fill="#F6FA70">{streakCount}</text>
               </svg>
              )
}


const StreakListItem = ({streakName}) => {
    const [streakCount, setStreakCount] = useState(0);
  return (<li style={streakListItemStyle}>
            <h2 style={{ paddingTop: '18px', marginRight: '10px' }}>
            {`${streakName}:`}
            </h2>
            <Star streakCount={`${streakCount}+`}/>
            <button className="add-button" onClick={() => setStreakCount(streakCount + 1)}>+</button>
          </li>
          )

};

export default StreakListItem;