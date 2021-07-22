/* eslint-disable prettier/prettier */
import React from 'react'
import { Chrono } from 'react-chrono'
import HistBlock from './HistBlock'
import PropTypes from 'prop-types'

const Timeline = ({ data }) => {
  const items = data.map((year) => {
    return {
      title: year.grade,
      cardTitle: year.title,
    }
  })
  const blocks = (year) => {
    return (
      <div className="chrono-icons">
        {year.people.map((person) => {
          return (
            <div key={person.name}>
              <img src={person.img} alt="" />
              <h3>{person.name}</h3>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <Chrono items={items} mode="VERTICAL_ALTERNATING" slideShow slideItemDuration={4500}>
      {data.map((year) => {
        return <HistBlock people={year.people} key={year.grade} />
      })}
    </Chrono>
  )
}
Timeline.propTypes = {
  data: PropTypes.array,
}

export default Timeline
