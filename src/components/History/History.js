import React from 'react'
import Tag from '../../components/Tag/Tag'
import './History.css'

const History = (props) => {//ค่าprops ที่ดดึงมา  
  let history = ''

  if (props.history.length > 0) { //ถ้ามี history เพิ่มมา ก็จะทำงาน
    history = (
      <div className="History">
        <ul className="History-list">
          <li className="History-item">ประวัติการค้นหา:</li>
          {props.history.map((query, index) => ( //ค้า props ที่ดึงมา เอามา วนลูป เเสดง การค้นหา
            <li
              className="History-item"
              key={index}>
              <Tag
                historyHandler={props.historyHandler}//ส่งค่า props ไปหน้า tag
                removeHistoryHandler={props.removeHistoryHandler} //ส่งค่า props ไปหน้า tag
                title={query}//เเสดง ค่า title ที่ ต้องเท่ากับ query ในช่อง search
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return history
}

export default History