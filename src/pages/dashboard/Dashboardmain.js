import React from 'react'
import Detailcards from './components/Detailcards'
import Tabledata from './components/Tabledata'

const Dashboardmain = () => {
  return (
    <div>
     <div className='row'><Detailcards/></div> 
     <div className='row'>
       <div className='col-6 m-auto'><Tabledata/></div><div className='col-3'></div>
     </div>
      
    </div>
  )
}

export default Dashboardmain
