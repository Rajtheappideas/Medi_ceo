import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import Header from '../Components/Header'
// import InputCheckbox from '../Components/InputCheckbox'
import BoxList from '../Components/BoxList'

const Home = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [showEditbox, setShowEditbox] = useState(false)
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={` ${openSidebar ? 'col-xl-3' : 'col-xl-1'}`}>
          <SideBar
            setOpenMobileSidebar={setOpenMobileSidebar}
            openMobileSidebar={openMobileSidebar}
            setOpenSidebar={setOpenSidebar}
            openSidebar={openSidebar}
          />
        </div>
        <div className={` ${openSidebar ? 'col-xl-9' : 'col-xl-11'}`}>
          <Header
            setOpenMobileSidebar={setOpenMobileSidebar}
            openMobileSidebar={openMobileSidebar}
          />
          <BoxList setShowEditbox={setShowEditbox} showEditbox={showEditbox} />
        </div>
      </div>
    </div>
  )
}

export default Home
