import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
// import { RiMenu3Fill } from 'react-icons/ri'
// import { AiOutlineClose } from 'react-icons/ai'
import Bar from '../assets/images/bar-chart-2.svg'
import User from '../assets/images/users.svg'
import Code from '../assets/images/code-1 1.svg'
import Group from '../assets/images/Group.svg'
import document from '../assets/images/document-filter 1.svg'
import objects from '../assets/images/objects.svg'
import sms from '../assets/images/sms 1.svg'

const SideBar = ({ setOpenSidebar, openSidebar }) => {
  return (
    <>
      <div className="sidebar_section">
        <div className="left_icons pt-5">
          <div className="logo" onClick={() => setOpenSidebar(!openSidebar)}>
            <img src={require('../assets/images/image 1.png')} alt="logo" />
            {openSidebar ? (
              <IoIosArrowBack
                style={{ marginTop: '7px', float: 'right', marginRight: '5px' }}
              />
            ) : (
              <IoIosArrowForward
                style={{ marginTop: '7px', float: 'right', marginRight: '5px' }}
              />
            )}
          </div>
          <ul>
            <li>
              <img src={Bar} alt="bar-chart" />
              {openSidebar && <p>Dashboard</p>}
            </li>
            <li>
              <img src={User} alt="users" />
              {openSidebar && <p>User Management</p>}
            </li>
            <li>
              <img src={Code} alt="code-1" />
              {openSidebar && <p>API Management</p>}
            </li>
            <li>
              <img src={sms} alt="sms" />
              {openSidebar && <p>Mail Service</p>}
            </li>
            <li>
              <img src={Group} alt="Group" />
              {openSidebar && <p>Permission Management</p>}
            </li>
            <li className="object_list">
              <img src={objects} alt="objects" />
              {openSidebar && (
                <div className="object">
                  <p>CMS</p>
                  <p>Content List</p>
                  <p>Sandbox Mode</p>
                </div>
              )}
            </li>
            <li>
              <img src={document} alt="document-filter" />
              {openSidebar && <p>Source Management</p>}
            </li>
          </ul>
        </div>
        <div className="bottom_profile">
          <img src={require('../assets/images/Account.png')} alt="Account" />
        </div>
      </div>
      {/* for Mobile view */}
      {/* <div className="sidebar_section_mobile">
        <div className="left_icons pt-5">
          <div className="logo">
            <img src={require('../assets/images/image 1.png')} alt="" />
            <IoIosArrowForward style={{ marginTop: '7px' }} />
          </div>
          <ul>
            <li>
              <img src={Bar} alt="bar-chart" />
              <p>Dashboard</p>
            </li>
            <li>
              <img src={User} alt="users" />
              <p>Dashboard</p>
            </li>
            <li>
              <img src={Code} alt="code-1" />
              <p>Dashboard</p>
            </li>
            <li>
              <img src={sms} alt="sms" />
              <p>Dashboard</p>
            </li>
            <li>
              <img src={Group} alt="Group" />
              <p>Dashboard</p>
            </li>
            <li>
              <img src={objects} alt="objects" />
              <p>Dashboard</p>
            </li>
            <li>
              <img src={document} alt="document-filter" />
              <p>Dashboard</p>
            </li>
          </ul>
        </div>
        <div className="bottom_profile">
          <img src={require('../assets/images/Account.png')} alt="Account" />
        </div>
      </div> */}
    </>
  )
}

export default SideBar
