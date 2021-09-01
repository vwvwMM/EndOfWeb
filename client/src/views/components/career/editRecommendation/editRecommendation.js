/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CareerForm from '../CareerForm'
import axios from 'axios'
const EditRecommendation = () => {
  const id = useParams().id
  const [data, setData] = useState([])
  const getData = () => {
    axios
      .get('/api/recommendation', { params: { _id: id } })
      .then((res) => {
        setData(res.data[0])
      })
      .catch((err) => {
        err.response.data.description && alert('錯誤\n' + err.response.data.description)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  // return <>{data._id && <EditBlock data={data} />}</>
  return <>{data._id && <CareerForm data={data} />}</>
}

export default EditRecommendation
