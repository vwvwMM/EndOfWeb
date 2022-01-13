/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CInputGroup,
  CInputGroupText,
  CFormControl,
} from '@coreui/react'
import axios from 'axios'
const RunMatch = ({ sdata, jdata, result, setHasMatched }) => {
  const [isModal, setIsModal] = useState(false)
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [snumber, setSnumber] = useState(0)
  const [jnumber, setJnumber] = useState(0)
  const match = () => {
    if (sdata && jdata) {
      console.log('start matching')
      setHasMatched(true)
    }
  }
  const getMatchInfo = () => {
    axios
      .get('/api/time/getTime', { params: { target: 'matching_start' } })
      .then((res) => {
        setStartTime(res.data)
      })
      .catch((err) => console.log(err))
    axios
      .get('/api/time/getTime', { params: { target: 'matching_end' } })
      .then((res) => setEndTime(res.data))
      .catch((err) => console.log(err))
    // axios.get('/api/')
  }
  const setMatchTime = () => {
    axios
      .post('/api/time/setTime', { target: 'matching_start', time: startTime })
      .then(() => console.log('set start time'))
      .catch((err) => console.log(err))
    axios
      .post('/api/time/setTime', { target: 'matching_end', time: endTime })
      .then(() => console.log('set end time'))
      .catch((err) => console.log(err))
  }
  const clearDB = () => {}
  useEffect(() => {
    getMatchInfo()
  }, [])
  const startNewMatch = () => {
    setMatchTime()
    clearDB()
    setIsModal(false)
  }
  return (
    <>
      <CModal size="lg" visible={isModal} onDismiss={() => setIsModal(false)} alignment="center">
        <CModalHeader onDismiss={() => setIsModal(false)}>
          <CModalTitle>開啟新一期配對</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h3 className="mb-2">請選擇新一期的起始與結束時間：</h3>
          <CInputGroup className="mb-4">
            <CInputGroupText>起始日期</CInputGroupText>
            <CFormControl type="date" onChange={(e) => setStartTime(e.target.value)} />
          </CInputGroup>
          <CInputGroup className="mb-4">
            <CInputGroupText>截止日期</CInputGroupText>
            <CFormControl type="date" onChange={(e) => setEndTime(e.target.value)} />
          </CInputGroup>
        </CModalBody>
        <CModalFooter>
          <CButton color="warning" onClick={() => setIsModal(false)}>
            Cancel
          </CButton>
          <CButton color="dark" onClick={startNewMatch}>
            Yes
          </CButton>
        </CModalFooter>
      </CModal>
      <div className="run-match">
        <h2>
          本期的配對日期為
          <span className="text-danger">
            {startTime.toString()}~{endTime.toString()}
          </span>
          ，請在期限內配對學長姐與學弟妹
          <br />
          目前共有{12}名學弟妹以及{10}名學長姐在等待您的配對結果
        </h2>
        <button className="btn btn-primary mt-3" onClick={() => match()}>
          <h5 className="m-0">點我開始配對</h5>
        </button>
        <br />
        <br />
        <h2>若要開啟一期新配對，請點下方按鈕</h2>
        <button className="btn btn-danger mt-3" onClick={() => setIsModal(true)}>
          <h5 className="m-0">我要開新的一期</h5>
        </button>
      </div>
    </>
  )
}
RunMatch.propTypes = {
  sdata: PropTypes.object,
  jdata: PropTypes.object,
  result: PropTypes.object,
  setHasMatched: PropTypes.func,
}
export default RunMatch
