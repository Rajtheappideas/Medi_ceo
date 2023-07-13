import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import Header from '../Components/Header'
// import InputCheckbox from '../Components/InputCheckbox'
import BoxList from '../Components/BoxList'

const Home = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [showEditbox, setShowEditbox] = useState(false)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={` ${openSidebar ? 'col-md-3' : 'col-md-1'}`}>
          <SideBar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
        </div>
        <div className={` ${openSidebar ? 'col-md-9' : 'col-md-11'}`}>
          <Header />
          <BoxList setShowEditbox={setShowEditbox} showEditbox={showEditbox} />
        </div>
      </div>
    </div>
  )
}

export default Home
