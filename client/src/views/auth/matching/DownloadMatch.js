/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'

const DownloadMatch = ({ setDownloaded }) => {
  return (
    <div className="matching-download">
      <h3>
        若要執行配對流程，請先至以下兩個表單後台下載
        <a href="https://docs.google.com/forms/d/1UmZ69m0zSzEKlwvWOi--bnppS22TQ_N44A46Qrpk0nA/edit?ts=61af56f5">
          學長姊的資料
        </a>
        以及
        <a href="https://docs.google.com/forms/d/1-6kcO4caACAeldsHFt-inT-0yNvO4oOfB2og0-0M8WI/edit?ts=61af571d">
          學弟妹的資料
        </a>
        <br />
        下載好後請點下一步
      </h3>
      <button onClick={() => setDownloaded(true)}>下一步</button>
    </div>
  )
}
DownloadMatch.propTypes = {
  setDownloaded: PropTypes.func,
}
export default DownloadMatch
