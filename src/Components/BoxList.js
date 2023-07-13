import React from 'react'
import InputCheckbox from './InputCheckbox'
import CommonButton from './CommonButton'
import EditBox from './EditBox'

const BoxList = ({setShowEditbox,showEditbox}) => {
  return (
    <div className="align-item-center gap-3 row">

      <div className="input_section ">
        <InputCheckbox setShowEditbox={setShowEditbox}/>
        <InputCheckbox />
        <InputCheckbox />
        <InputCheckbox />
        <CommonButton />
      </div>
      {showEditbox &&
      <EditBox setShowEditbox={setShowEditbox} />
      }
    </div>
  )
}

export default BoxList
