/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
const RunMatch = ({ sdata, jdata, result, setHasMatched }) => {
  const match = () => {
    if (sdata && jdata) {
      console.log('start matching')
      setHasMatched(true)
    }
  }
  return (
    <div className="run-match">
      <h2>
        本期的配對截止日為<b className="text-danger">2/10</b>，請在期限內配對學長姐與學弟妹
        <br />
        目前共有{12}名學弟妹以及{10}名學長姐在等待您的配對結果
      </h2>
      <button className="btn btn-primary mt-3 display-5" onClick={match}>
        點我開始配對
      </button>
    </div>
  )
}
RunMatch.propTypes = {
  sdata: PropTypes.object,
  jdata: PropTypes.object,
  result: PropTypes.object,
  setHasMatched: PropTypes.func,
}
export default RunMatch
