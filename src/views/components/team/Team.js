/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import TeamBlocks from './TeamBlocks'
const Team = () => {
  const [data, setData] = useState([])
  const getData = () => {
    fetch('teamData.json', {
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
  return <>{data.front && <TeamBlocks data={data} />}</>
}

export default Team
