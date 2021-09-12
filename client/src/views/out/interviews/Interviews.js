/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Interview from './Interview'

const Interviews = () => {
  const [columns, setColumns] = useState([])
  const getData = () => {
    const showId = ['']
  }
  useEffect(() => {}, [])
  return (
    <div className="row">
      <Interview />
      <Interview />
      <Interview />
    </div>
  )
}

export default Interviews
