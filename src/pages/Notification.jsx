import React from 'react'
import Card from '../components/Card'
import '../pagesCSS/Notification.css'

function Notification() {
  return (
    <div className='full_screen'>
        <div className='noti_page'>
            <h1>Notification</h1>
            <Card/>
            {/* <Card/> */}
        </div>
    </div>
  )
}

export default Notification
