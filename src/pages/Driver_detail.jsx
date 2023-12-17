import React from 'react'
import "../pagesCSS/Driver_detail.css"

const Driver_detail = () => {
  return (
    <>
        <div className='driver_section'>
          <div className='section_1'>
            <h1>Fill Up the Driver Detail</h1>
            <form action="./backend.php">
              <label htmlFor="name" className='text'>Name</label>
              <input type="text" name="name" id="name"/>
              <label htmlFor="vehile_no">Vehicle Number</label>
              <input type="number" name="vehicle_no" id="vehile_no" />
              <label htmlFor="licence_no">Licence Number</label>
              <input type="number" name="licence_no" id="licence_no" />
              <button type='submit' className='btn'>Submit</button>
            </form>
          </div>
        </div>  
    </>
  )
}

export default Driver_detail
