import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const data = [
  { id: 0, label: 'Action 1' },
  { id: 1, label: 'Action 2' },
  { id: 2, label: 'Action 3' },
]
const EditBox = ({setShowEditbox}) => {
  const [isOpen, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const toggleDropdown = () => setOpen(!isOpen)

  return (
    <div className="col-md-6">
      <div className="edit_main_box_content">
        <div className="row">
          <div className="col-md-12">
            <div className="dropdown">
              <div className="edit_left_botton" onClick={toggleDropdown}>
                {selectedItem !== null ? selectedItem : 'Add Entry'}
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              <div className={`dropdown-body ${isOpen && 'open'}`}>
                {data.map((item) => (
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedItem(item.label)
                      setOpen(false)
                    }}
                    key={item.id}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="input_Field">
          <p>Field Title</p>
          <input type="text" />
          <div className="dec">
            <span>30 characters</span>
            <span className="right">Maximum 256 characters</span>
          </div>
        </div>
        <div className="input_title">
          <p>Title</p>
          <label>
            <textarea name="postContent" rows={4} cols={50} />
          </label>
        </div>
        <div className="input_Field">
          <p>Result Or Node ID</p>
          <input type="text" />
          <div className="dec">
            <span>22 characters</span>
            <span className="right">Maximum 256 characters</span>
          </div>
        </div>
        <div className="input_Field">
          <p>Filtered</p>
          <input type="text" />
          <div className="dec">
            <span>0 characters</span>
            <span className="right">Maximum 256 characters</span>
          </div>
        </div>
        <div className="bottom_btn">
          <div type="button" onClick={() => setShowEditbox(false)} className="cancel_btn">
            <span>Cancel</span>
          </div>
          <div type="button" className="change_btn">
            <span>Save Change</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditBox
