import React from 'react'

import './Error.css'

const Error = (props) => { //ส่งค่า props มา
  let error

  if (props.errors.length > 0) { //ถ้าใน props มี error มากกว่า 0 จะทำงาน
    error = (//ตรงนี้้ ดึงค่า props ที่เป็น error มาเเสดง
      <div className="Error">
        {props.errors} 
      </div>
    )
    return error
  }

  return null
}

export default Error