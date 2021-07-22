import React, { useState, useEffect } from 'react'

import HistoryBlock from './historyBlock'
const History = () => {
  const [data, setData] = useState([])
  const getData = () => {
    fetch('historyData.json', {
      headers: {
        ContentType: 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div style={{ width: '100%', height: '950px' }}>
      {data.people && <HistoryBlock data={data.people} />}
    </div>
  )
}

export default History
