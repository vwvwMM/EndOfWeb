/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
const UploadMatch = ({ sdata, setSdata, jdata, setJdata }) => {
  const match = () => {
    if (sdata && jdata) {
      console.log('start matching')
    }
  }
  return (
    <div className="matching-upload">
      <h3>請將下載後的檔案上傳至此，上傳後按按鈕就會給您配對結果！</h3>
      <form action="#" method="post">
        <div className="form-group files">
          <label htmlFor="">upload senior excel</label>
          <input type="file" className="form-control" multiple="" />
        </div>
      </form>
      <button onClick={match}>點我開始配對</button>
    </div>
  )
}
UploadMatch.propTypes = {
  sdata: PropTypes.object,
  jdata: PropTypes.object,
  setJdata: PropTypes.func,
  setSdata: PropTypes.func,
}
export default UploadMatch
