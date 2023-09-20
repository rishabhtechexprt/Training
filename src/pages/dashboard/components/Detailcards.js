import React from 'react'
import './Detailcards.css'
import Grid from '@mui/material/Unstable_Grid2';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
const Detailcards = () => {
  return (
    <div className='card-main-div'>
        <div className='div-item'>
            <h5 className='count-title'>Total Employee</h5>
            <p className='count-card-item'>1889</p>
        </div>
        <div className='div-item'>
            <h5 className='count-title' >Total Courses</h5>
            <p className='count-card-item'>50</p>
        </div>
        <div className='div-item'>
            <h5 className='count-title'>Active Employee</h5>
            <p className='count-card-item' >1200</p>
        </div>
        <div className='div-item'>
            <h5 className='count-title'>In-Active Employee</h5>
            <p className='count-card-item'>689</p>
        </div>
      
    </div>
  )
}

export default Detailcards
