import React from 'react'
import { RxDragHandleDots2 } from 'react-icons/rx'
import { GoPencil } from 'react-icons/go'

const InputCheckbox = ({ setShowEditbox }) => {

  return (
    <div className="main_box">
      <RxDragHandleDots2
        // style={{ fontSize: '30px', margin: '20px 20px 0 0' }}
        className='main_box_icon'
      />
      <div className="input_box">
        <div className="box_left_content">
          <input type="checkbox" />
          <span>Allgemeinanästhesie</span>
        </div>
        <div className="box_right_content">
          <GoPencil
            onClick={() => setShowEditbox(true)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  )
}

export default InputCheckbox
