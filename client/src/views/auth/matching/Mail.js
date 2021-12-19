/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { success_icon, mail_sent } from './index'
const Mail = () => {
  const [hasSent, setHasSent] = useState(false)
  const sendMail = () => {
    setHasSent(true)
  }
  return (
    <div className="d-flex flex-column align-items-center">
      <img src={hasSent ? mail_sent : success_icon} alt="success" className="img-fluid w-50" />
      {hasSent ? (
        <h2 className="my-4">信件已全數寄出，謝謝您的幫忙！</h2>
      ) : (
        <>
          <h2 className="my-4">配對已完成！趕快發信告訴大家吧！</h2>
          <button className="btn btn-primary" onClick={sendMail}>
            點我發信
          </button>
        </>
      )}
    </div>
  )
}

export default Mail
