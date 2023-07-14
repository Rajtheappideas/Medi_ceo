import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { RiMenu3Fill } from 'react-icons/ri'

const Header = ({ setOpenMobileSidebar, openMobileSidebar }) => {
  return (
    <div className="header_section">
      <div className="profile_content">
        <div className="left_content">
          <RiMenu3Fill
            className="menu_bar"
            onClick={() => setOpenMobileSidebar(!openMobileSidebar)}
          />
          <p>Kinder <br/> <strong className='profile_name'>Thema wahlen</strong> </p>
          {/* <p className="profile_name">Thema wahlen</p> */}
        </div>
        <div className="right_content">
          <FiArrowLeft style={{ marginRight: '7px', fontSize: '20px' }} />
          <p>Previous</p>
        </div>
      </div>
    </div>
  )
}

export default Header
