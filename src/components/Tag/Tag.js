import React from 'react'
import { ReactComponent as CloseIcon } from '../../images/icons/close.svg'
import './Tag.css'
 
const Tag = (props) => { //ส่งprops historyHandler removeHistoryHandler มา
  return (
    <div className="Tag">
      <button
        className="Tag-title"
        onClick={props.historyHandler(props.title)} //เมื่่อกดค้นหาตัวนี้จะทำงาน
        tabIndex="0"
      >{props.title}</button>
      <button
        className="Tag-remove"//เมื่่อกดที่ไอคอนลบตัวนี้จะทำงาน
        onClick={props.removeHistoryHandler(props.title)}> 
        <CloseIcon height="8" width="8" />
      </button>
    </div>
  )
}

export default Tag