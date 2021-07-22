/* eslint-disable prettier/prettier */
import React from 'react'
import { Chrono } from 'react-chrono'
import HistBlock from './HistBlock'
import PropTypes from 'prop-types'

const Timeline = ({ data }) => {
  const items = data.history.map((year) => {
    return { title: year.grade, cardTitle: year.title }
  })
  return (
    <Chrono items={items} mode="VERTICAL">
      <HistBlock history={data.history} />
    </Chrono>
  )
}
Timeline.propTypes = {
  data: PropTypes.array,
}

export default Timeline
